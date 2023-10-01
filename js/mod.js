let modInfo = {
	name: "Gods of Incremental",
	id: "godsofincremental",
	author: "Icecreamdude",
	pointsName: "points",
	modFiles: ["incremental.js", "metaprestige.js", "tree.js", "prestigetree.js", "crafting.js", "hub.js"],

	discordName: "Gods of Incremental Server",
	discordLink: "https://discord.gg/icecreamdude-s-incremental-games-850817562040467556",
	initialStartPoints: new Decimal(1), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1.1b",
	name: "Beta Update 2 - Chapter 2 Part 1: The Dimensional Realm"
}

let changelog = `<h1>Changelog:</h1><br>
<h3>v1.1b - Chapter 2 Part 1: The Dimensional Realm<br>
-Added the dimensional realm.<br>
-Added the hub.<br>
-Added willpower, shrines, and counting.<br>
-Added the solar forge.<br>
-Added crafting points.<br>
-Added only 2 new songs.<br>
-Added a bit of lore here and there.<br>
Endgame: Unlocked enhance path extension, ~1,000,000 Willpower, ~1e220 points in Standard Path, ~1e30 points in Enhance Path<br>
<br>
<h3>v1.0.1b - The Hotkey Minor Update<br>
-Added hotkeys for tab changes.<br>
-Added hotkey for meta-prestige reset.<br>
-Many typo fixes.<br>
-An attempt at fixing the enhance path NaN bug.<br>
<br>
		<h3>v1.0b - Chapter 1: The Standard Path.<br>
		-Added all of the content for chapter 1.<br>
		-Added the incremental layer.<br>
		-Added the meta-prestige layer.<br>
		-Added the crafting layer.<br>
		-Added the standard path.<br>
		-Added the enhance path.<br>
		-Added 15 new songs.<br>
		-Added the first 12 layers of the prestige tree.<br>
		-Added prestige points.<br>
		-Added pure energy.<br>
		-Added a celestial, Ce308.<br>
		-Added a BOSSFIGHT?!<br>
		-Added a whole buncha lore.<br>
		Endgame: Defeated Ce308, ~3,000,000 Incremental Power, ~1e200 Points in Standard Path.<br>`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything", "prestigereset", "pureenergyreset", "celestialenergyreset", "hindrancereset", "checkforcountingreset", "countingreset", "checkforclaimsolaritycoal", "claimsolaritycoal"]

function getStartPoints() {
	return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints() {
	return true
}

// Calculate points/sec!
function getPointGen() {
	if (!canGenPoints())
		return new Decimal(0)
	let gain = new Decimal(0)
	if (!hasUpgrade("m", 16)) gain = buyableEffect("i", 11)
	if (hasUpgrade("m", 16)) gain = buyableEffect("i", 11).add(upgradeEffect("m", 16))
	gain = gain.mul(buyableEffect("i", 12))
	gain = gain.mul(buyableEffect("i", 13))
	gain = gain.mul(buyableEffect("i", 14))
	if (player.i.standardpath.eq(1)) gain = gain.div(1.25)
	if (player.i.standardpath.eq(1)) gain = gain.div(player.i.prestigeenergyeffectonpoints)
	if (hasUpgrade("i", 11)) gain = gain.mul(upgradeEffect("i", 11))
	if (hasUpgrade("m", 12)) gain = gain.mul(upgradeEffect("m", 12))
	gain = gain.mul(player.m.incrementalenergyeffect)
	gain = gain.mul(player.i.boosterenergyeffect)
	if (player.i.currentenergizer.eq(3)) gain = gain.mul(100000)
	if (player.i.enhancepath.eq(1)) gain = gain.mul(player.i.enhancepointseffect)
	if (player.i.standardpath.eq(1)) gain = gain.mul(player.i.superpointseffect)
	gain = gain.mul(player.i.quirkenergyeffect)
	gain = gain.mul(player.i.challengetaskeffect)
	gain = gain.mul(buyableEffect("i", 102))
	if (player.i.enhancebeacontoggle.eq(1)) gain = gain.sqrt()
	gain = gain.mul(player.h.willpowereffect)
	player.gain = gain
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() {
	return {
		gain: new Decimal(0),
		bestpoints: new Decimal(0),
		unlockedmetaprestige: new Decimal(0),

		//BGFX
		lightningtimer: new Decimal(0),

		//Cutscene Song Optimization
		inreddiamondcutscene: new Decimal(0),
		injacorbcutscene: new Decimal(0),
		inartiscutscene: new Decimal(0),
		inaarexcutscene: new Decimal(0),
		ince308cutscene: new Decimal(0),
		inconfrontcutscene: new Decimal(0),
		playdotpm: new Decimal(0),
		inchapter1ending: new Decimal(0),
		inaarexhubcutscene: new Decimal(0),
		insitracutscene: new Decimal(0),

		//Checks
		defeatedce308: new Decimal(0),
		
		//Cutscenes
		prestigecutscene: new Decimal(1),
        prestigescene: new Decimal(0),
		machinecutscene: new Decimal(1),
        machinescene: new Decimal(0),
		pureenergycutscene: new Decimal(1),
        pureenergyscene: new Decimal(0),
		energizercutscene: new Decimal(1),
		energizerscene: new Decimal(0),
		boostercutscene: new Decimal(1),
		boosterscene: new Decimal(0),
		enhancecutscene: new Decimal(1),
		enhancescene: new Decimal(0),
		beaconcutscene: new Decimal(1),
		beaconscene: new Decimal(0),
		craftingcutscene: new Decimal(1),
		craftingscene: new Decimal(0),
		crafting2cutscene: new Decimal(1),
		crafting2scene: new Decimal(0),
		timecutscene: new Decimal(1),
		timescene: new Decimal(0),
		spacecutscene: new Decimal(1),
		spacescene: new Decimal(0),
		superifiercutscene: new Decimal(1),
		superifierscene: new Decimal(0),
		ce308cutscene: new Decimal(1),
		ce308scene: new Decimal(0),
		ce308unlockcutscene: new Decimal(1),
		ce308unlockscene: new Decimal(0),
		quirkenergycutscene: new Decimal(1),
		quirkenergyscene: new Decimal(0),
		taskcutscene: new Decimal(1),
		taskscene: new Decimal(0),
		quirkcutscene: new Decimal(1),
		quirkscene: new Decimal(0),
		beaconpointcutscene: new Decimal(1),
		beaconpointscene: new Decimal(0),
		hindranceenergycutscene: new Decimal(1),
		hindranceenergyscene: new Decimal(0),
		hindrancecutscene: new Decimal(1),
		hindrancescene: new Decimal(0),
		puremachinecutscene: new Decimal(1),
		puremachinescene: new Decimal(0),
		ce308bosscutscene: new Decimal(1),
		ce308bossscene: new Decimal(0),
		ce308defeatcutscene: new Decimal(1),
		ce308defeatscene: new Decimal(0),
		hubcutscene: new Decimal(1),
		hubscene: new Decimal(0),
		countingcutscene: new Decimal(1),
		countingscene: new Decimal(0),
		solarforgecutscene: new Decimal(1),
		solarforgescene: new Decimal(0),
		enhancequirkcutscene: new Decimal(1),
		enhancequirkscene: new Decimal(0),

		//YHVR cutscenes
		yhvrcutscene1: new Decimal(0),
		yhvrcutscene2: new Decimal(0),
		yhvrcutscene3: new Decimal(0),
		yhvrcutscene4: new Decimal(0),
		yhvrcutscene5: new Decimal(0),
		yhvrcutscene6: new Decimal(0),
		yhvrcutscene7: new Decimal(0),
		yhvrcutscene8: new Decimal(0),
		yhvrcutscene9: new Decimal(0),

		//counting cutscene
		downvoidcountingcutscene: new Decimal(0),
		rementalcountingcutscene: new Decimal(0),
		rementalcountingscene: new Decimal(0),
		ducdatcountingcutscene: new Decimal(0),
		ducdatcountingscene: new Decimal(0),
		flamecountingcutscene: new Decimal(0),
		flamecountingscene: new Decimal(0),

		//PT layers
		prestigelayer: new Decimal(0),
		boosterlayer: new Decimal(0),
		generatorlayer: new Decimal(0),
		enhancelayer: new Decimal(0),
		timelayer: new Decimal(0),
		spacelayer: new Decimal(0),
		superboosterlayer: new Decimal(0),
		supergeneratorlayer: new Decimal(0),
		quirklayer: new Decimal(0),
		hindrancelayer: new Decimal(0),
		subspacelayer: new Decimal(0),
		solaritylayer: new Decimal(0),

		//Realm Travel
		dimensionalrealm: new Decimal(0)
	}
}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return false
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return (3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion) {
}