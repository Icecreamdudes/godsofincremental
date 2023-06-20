let modInfo = {
	name: "Gods of Incremental",
	id: "godsofincremental",
	author: "Icecreamdude",
	pointsName: "points",
	modFiles: ["incremental.js", "metaprestige.js", "tree.js"],

	discordName: "Incremental God Tree Server",
	discordLink: "https://discord.gg/icecreamdude-s-incremental-games-850817562040467556",
	initialStartPoints: new Decimal(1), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1.0b",
	name: "Beta Update 1 - Remember, you aren't the only one here",
}

let changelog = `<h1>Changelog:</h1><br>
		- Added things.<br>
		Current Endgame: Idk`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything", "prestigereset"]

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
	gain = buyableEffect("i", 11)
	gain = gain.mul(buyableEffect("i", 12))
	gain = gain.mul(buyableEffect("i", 13))
	gain = gain.mul(buyableEffect("i", 14))
	if (player.i.standardpath.eq(1)) gain = gain.div(1.25)
	if (player.i.standardpath.eq(1)) gain = gain.div(player.i.prestigeenergyeffectonpoints)
	if (hasUpgrade("i", 11)) gain = gain.mul(upgradeEffect("i", 11))
	if (hasUpgrade("m", 12)) gain = gain.mul(upgradeEffect("m", 12))
	player.gain = gain
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() {
	return {
		gain: new Decimal(0),
		bestpoints: new Decimal(0),
		unlockedmetaprestige: new Decimal(0),
		prestigecutscene: new Decimal(1),
        prestigescene: new Decimal(0),
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