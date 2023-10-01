var prestigetree = [["pr"],
["bo", "ge"], ["sb", "ti", "en", "sp", "sg"], ["so", "hi", "qu", "ss"]]
          
          addLayer("m", {
    name: "Meta-Prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "<p style='transform: scale(3, 3)'><alternate>M</alternate></p>",
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    row: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        score: new Decimal(0),

        //keep stuff on reset
        sacrificedincrementalpower: new Decimal(0),

        //Unlocks
		craftingunlock: new Decimal(0),
		ce308unlock: new Decimal(0),
		quirkenhanceunlock: new Decimal(0),

        //ce308 tasks
        energytask: new Decimal(0),
        metatask: new Decimal(0),
        challengetask: new Decimal(0),
        craftingtask: new Decimal(0),

        //PATHLESS FACTORS
        scorefrombestpoints: new Decimal(0),
        scorefromtimeplayed: new Decimal(1),
        scorefromcelestialcells: new Decimal(1),

        //STANDARD PATH FACTORS
        scorefrombestprestigeenergy: new Decimal(1),
        scorefrombestpureenergy: new Decimal(1),
        scorefrombestboosterenergy: new Decimal(1),
        scorefrombestgeneratorenergy: new Decimal(1),
        scorefrombestcelestialenergy: new Decimal(1),
        scorefrompuremachines: new Decimal(1),

        //ENHANCE PATH FACTORS
        scorefrombestenhancepoints: new Decimal(1),
        scorefrombestbeaconpoints: new Decimal(1),

        //PT Factors
        scorefromincrementalpower: new Decimal(1),
        scorefromincrementalenergy: new Decimal(1),
        scorefrommetaprestigetime: new Decimal(1),
        scorefromtimecapsules: new Decimal(1),
        scorefromspacebuildings: new Decimal(1),
        scorefromquirklayers: new Decimal(1),
        scorefromhindrancespirits: new Decimal(1),

        incrementalenergy: new Decimal(0),
        incrementalenergytoget: new Decimal(0),
        incrementalenergyeffect: new Decimal(1),

        //realmtravel
        dimensionalrealmtravels: new Decimal(0),
    }
    },
    onPrestige()
    {
        player.bestpoints = new Decimal(0)
        player.m.incrementalenergy = player.m.incrementalenergy.add(player.m.incrementalenergytoget)

        player.c.scrapmetalcancel = new Decimal(1)
        player.c.wirescancel = new Decimal(1)
        player.c.enhancepowdercancel = new Decimal(1)

        if (player.m.craftingunlock.eq(1))
        {
            player.c.scrapmetal = player.c.scrapmetal.add(player.c.scrapmetaltoget)
            player.c.wires = player.c.wires.add(player.c.wirestoget)
            player.c.enhancepowder = player.c.enhancepowder.add(player.c.enhancepowdertoget)
        }
        if (player.defeatedce308.eq(1))
        {
            player.c.scrapmetal = player.c.scrapmetal.add(player.i.scrapmetaltoget)
            player.c.wires = player.c.wires.add(player.i.wirestoget)
            player.c.enhancepowder = player.c.enhancepowder.add(player.i.enhancepowdertoget)
        }
        if (player.m.craftingunlock.eq(1) && hasUpgrade("i", 27))
        {
            player.c.celestialcells = player.c.celestialcells.add(player.c.celestialcellstoget)
            createLightning();
            createLightning();
            createLightning();
            createLightning();
            createLightning();
            createLightning();
            createLightning();
        }
        if (player.solarforgecutscene.eq(0))
        {
            player.c.solaritycoal = player.c.solaritycoal.add(player.c.solaritycoaltoget)
        }
        player.ti.timeenergy = new Decimal(0)
        player.sp.space = new Decimal(0)
        player.sg.supergeneratorpower = new Decimal(0)
        player.ss.subspace = new Decimal(0)

        player.i.tasksleft = new Decimal(2)

        player.playdotpm = new Decimal(0)
        player.c.solaritycoaltoget = new Decimal(0)
    },
    requires: new Decimal(2.25), // Can be a function that takes requirement increases into account
    resource: "Incremental Power", // Name of prestige currency
    baseResource: "score", // Name of resource prestige is based on
    baseAmount() {return player.m.score}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    automate() {
    },
    nodeStyle: {
        "background-origin": "border-box",
        'min-height': '150px',
        'min-width': '150px',
        background: 'linear-gradient(45deg, #8a00a9, #e52e71)',
        position: 'relative',
        overflow: 'hidden', 
        boxShadow: '0 0 50px 10px rgba(138, 0, 169, 0.7)',
        textShadow: '1px 1px 2px rgba(0.4, 0.4, 0.4, 0.4)', // Text shadow
        border: '4px solid rgba(255, 255, 255, 0.3)', // Glowing border
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    color: "#8a00a9",
    update(delta) {
        //BACKGROUND 
        document.body.style.setProperty('--background', hasUpgrade("i", 27) && player.i.ce308bossactivate.eq(0) && player.i.beatce308.eq(0) && player.dimensionalrealm.eq(0) ? "radial-gradient(circle, #161616, #161616, #161616, #161616, #161616, #161616, #161616, #161616, #202015, #555539, #aaaa71, #ffffaa)" : player.i.ce308bossactivate.eq(1) && player.i.beatce308.eq(0) && player.dimensionalrealm.eq(0) ? "radial-gradient(circle, #000000, #000000, #1a1a11, #333322, #4d4d33, #666644, #808055, #999966, #b3b377, #e6e699, #ffffaa)" : player.ce308defeatscene.gte(1)  && player.ce308defeatscene.lt(0) && player.dimensionalrealm.eq(0) ? "radial-gradient(circle, #000000, #000000, #1a1a11, #333322, #4d4d33, #666644, #808055, #999966, #b3b377, #e6e699, #ffffaa)" : player.ce308defeatscene.gte(1) && player.ce308defeatscene.lt(11) && player.dimensionalrealm.eq(0) ? "#999999" : player.dimensionalrealm.eq(1) ? "#1e2e1d" : "#161616");
        if (hasUpgrade("i", 27) && player.i.beatce308.eq(0) && player.dimensionalrealm.eq(0)) player.lightningtimer = player.lightningtimer.add(1)
        if (player.i.ce308bossactivate.eq(1) && player.i.beatce308.eq(0) && player.dimensionalrealm.eq(0)) player.lightningtimer = player.lightningtimer.add(4)
        if (player.lightningtimer.gte(60))
        {
            createLightning();
            player.lightningtimer = new Decimal(0)
        }
 
        //SCORE CALC
        player.m.scorefrombestpoints = player.bestpoints.add(1).slog().pow(2)
        if (player.i.standardpath.eq(1) && player.i.superpoints.gt(0)) player.m.scorefrombestpoints = player.bestpoints.mul(player.i.superpoints).add(1).slog().pow(2)

        //standard path
        if (player.i.standardpath.eq(0)) player.m.scorefrombestprestigeenergy = new Decimal(1)
        if (player.i.standardpath.eq(1) && player.i.bestprestigeenergy.neq(0) && player.i.superprestigeenergy.eq(0)) player.m.scorefrombestprestigeenergy = player.i.bestprestigeenergy.slog().div(5).add(1)
        if (player.i.standardpath.eq(1) && player.i.bestprestigeenergy.neq(0) && player.i.superprestigeenergy.gt(0)) player.m.scorefrombestprestigeenergy = player.i.bestprestigeenergy.mul(player.i.superprestigeenergy).slog().div(5).add(1)

        if (player.i.standardpath.eq(0)) player.m.scorefrombestpureenergy = new Decimal(1)
        if (player.i.standardpath.eq(1) && player.i.bestpureenergy.neq(0) && player.i.superpureenergy.eq(0)) player.m.scorefrombestpureenergy = player.i.bestpureenergy.slog().div(4).add(1)
        if (player.i.standardpath.eq(1) && player.i.bestpureenergy.neq(0) && player.i.superpureenergy.gt(0)) player.m.scorefrombestpureenergy = player.i.bestpureenergy.mul(player.i.superpureenergy).slog().div(4).add(1)

        if (player.i.standardpath.eq(0)) player.m.scorefrombestboosterenergy = new Decimal(1)
        if (player.i.standardpath.eq(1) && hasUpgrade("m", 22) && player.i.bestboosterenergy.neq(0)) player.m.scorefrombestboosterenergy = player.i.bestboosterenergy.slog().div(7).add(1)

        if (player.i.standardpath.eq(0)) player.m.scorefrombestgeneratorenergy = new Decimal(1)
        if (player.i.standardpath.eq(1) && hasUpgrade("m", 22) && player.i.bestgeneratorenergy.neq(0)) player.m.scorefrombestgeneratorenergy = player.i.bestgeneratorenergy.slog().div(7).add(1)

        if (player.i.standardpath.eq(0)) player.m.scorefrombestcelestialenergy = new Decimal(1)
        if (player.i.standardpath.eq(1) && player.i.bestcelestialenergy.neq(0)) player.m.scorefrombestcelestialenergy = player.i.bestcelestialenergy.mul(100).slog().div(3).add(1)

        //enhance path
        if (player.i.enhancepath.eq(0)) player.m.scorefrombestenhancepoints = new Decimal(1)
        if (player.i.enhancepath.eq(1) && player.i.bestenhancepoints.neq(0)) player.m.scorefrombestenhancepoints = player.i.bestenhancepoints.slog().div(5).add(1)

        if (player.i.enhancepath.eq(0)) player.m.scorefrombestbeaconpoints = new Decimal(1)
        if (player.i.enhancepath.eq(1) && player.i.bestbeaconpoints.neq(0)) player.m.scorefrombestbeaconpoints = player.i.bestbeaconpoints.slog().div(4).add(1)

        //pathless factors
        if (!hasUpgrade("m", 14)) player.m.scorefromtimeplayed = new Decimal(1)
        if (hasUpgrade("m", 14)) player.m.scorefromtimeplayed = Math.log10(Math.cbrt(player.timePlayed + 5000))

        if (player.c.celestialcells.eq(0)) player.m.scorefromcelestialcells = new Decimal(1)
        if (player.c.celestialcells.neq(0)) player.m.scorefromcelestialcells = player.c.celestialcells.mul(0.015).pow(0.8).add(1)

        if (player.i.puremachines.eq(0)) player.m.scorefrompuremachines = new Decimal(1)
        if (player.i.puremachines.neq(0)) player.m.scorefrompuremachines = player.i.puremachines.pow(0.2).div(7).add(1)

        //prestige tree
        if (player.boosterlayer.eq(0)) player.m.scorefromincrementalpower = new Decimal(1)
        if (player.boosterlayer.eq(1)) player.m.scorefromincrementalpower = player.m.points.add(1).pow(0.03)

        if (player.generatorlayer.eq(0)) player.m.scorefromincrementalenergy = new Decimal(1)
        if (player.generatorlayer.eq(1)) player.m.scorefromincrementalenergy = player.m.incrementalenergy.add(1).pow(0.04)

        if (player.enhancelayer.eq(0)) player.m.scorefrommetaprestigetime = new Decimal(1)
        if (player.enhancelayer.eq(1)) player.m.scorefrommetaprestigetime = player.i.metaprestigetime.add(1).log10().cbrt().sqrt()

        if (player.timelayer.eq(0)) player.m.scorefromtimecapsules = new Decimal(1)
        if (player.timelayer.eq(1)) player.m.scorefromtimecapsules = player.c.timecapsules.mul(0.01).pow(0.75).add(1)

        if (player.spacelayer.eq(0)) player.m.scorefromspacebuildings = new Decimal(1)
        if (player.spacelayer.eq(1)) player.m.scorefromspacebuildings = player.c.spacebuildings.mul(0.012).pow(0.77).add(1)
        
        if (player.quirklayer.eq(0)) player.m.scorefromquirklayers = new Decimal(1)
        if (player.quirklayer.eq(1)) player.m.scorefromquirklayers = player.c.quirklayers.mul(0.011).pow(0.76).add(1)

        if (player.hindrancelayer.eq(0)) player.m.scorefromhindrancespirits = new Decimal(1)
        if (player.hindrancelayer.eq(1)) player.m.scorefromhindrancespirits = player.hi.hindrancespirits.add(1).pow(0.055)

        player.m.score = player.m.scorefrombestpoints
        player.m.score = player.m.score.mul(player.m.scorefrombestprestigeenergy)
        player.m.score = player.m.score.mul(player.m.scorefrombestpureenergy)
        player.m.score = player.m.score.mul(buyableEffect("pr", 11))
        player.m.score = player.m.score.mul(player.m.scorefromtimeplayed)
        player.m.score = player.m.score.mul(player.m.scorefromincrementalpower)
        player.m.score = player.m.score.mul(player.m.scorefromincrementalenergy)
        player.m.score = player.m.score.mul(player.m.scorefrommetaprestigetime)
        player.m.score = player.m.score.mul(player.m.scorefrombestenhancepoints)
        player.m.score = player.m.score.mul(player.m.scorefromtimecapsules)
        player.m.score = player.m.score.mul(player.m.scorefromspacebuildings)
        player.m.score = player.m.score.mul(player.m.scorefrombestboosterenergy)
        player.m.score = player.m.score.mul(player.m.scorefrombestgeneratorenergy)
        player.m.score = player.m.score.mul(player.m.scorefrombestcelestialenergy)
        player.m.score = player.m.score.mul(player.m.scorefromcelestialcells)
        player.m.score = player.m.score.mul(player.m.scorefromquirklayers)
        player.m.score = player.m.score.mul(player.m.scorefrombestbeaconpoints)
        player.m.score = player.m.score.mul(player.m.scorefromhindrancespirits)
        player.m.score = player.m.score.mul(player.m.scorefrompuremachines)
        player.m.score = player.m.score.mul(buyableEffect("h", 12))
        player.m.score = player.m.score.mul(buyableEffect("h", 35))

        player.m.incrementalenergytoget = player.i.prestigemachines.pow(0.3)
        player.m.incrementalenergytoget = player.m.incrementalenergytoget.mul(player.i.noenergyboost)
        player.m.incrementalenergytoget = player.m.incrementalenergytoget.mul(player.i.metataskeffect)
        player.m.incrementalenergytoget = player.m.incrementalenergytoget.mul(buyableEffect("h", 33))

        player.m.incrementalenergyeffect = player.m.incrementalenergy.pow(0.8).add(1)
    },
    clickables: {
        11: {
            title() { return "Turn a ticket into travel uses." },
            canClick() { return player.c.dimensionaltickets.gt(0) },
            unlocked() { return true },
            onClick() {
                player.c.dimensionaltickets = player.c.dimensionaltickets.sub(1)
                player.m.dimensionalrealmtravels = player.m.dimensionalrealmtravels.add(10)
            },
            style: { "background-color": "#90EE90", width: '200px', "min-height": '70px' },
        },
        12: {
            title() { return "TRAVEL TO THE DIMENSIONAL REALM (uses up 1 travel)" },
            canClick() { return player.m.dimensionalrealmtravels.gt(0) },
            unlocked() { return true },
            onClick() {
                player.dimensionalrealm = new Decimal(1)
                player.tab = "h"
                player.m.dimensionalrealmtravels = player.m.dimensionalrealmtravels.sub(1)
                if (player.yhvrcutscene8.eq(0))
                {
                alert("You are going to travel to the dimensional realm.")
                alert("This is your first time out of base.")
                alert("This realm is one level higher than the one we are in right now.")
                alert("My creation, galaxy, is in this realm.")
                alert("Once you find your predecessor, go to galaxy.")
                alert("A lot of important things are there.")
            }
                player.yhvrcutscene8 = new Decimal(1)
            },
            style: { "background-color": "#90EE90", width: '300px', "min-height": '100px' },
        },
    },
    upgrades: {
        11:
        {
            title: "Standard Path Activator",
            unlocked() { return true },
            description: "Unlocks activation for the standard path.",
            cost: new Decimal(1),
            currencyLocation() { return player.m },
            currencyDisplayName: "Incremental Power",
            currencyInternalName: "points",
            onPurchase() {
                if (player.yhvrcutscene1.eq(0))
                {
                alert("It's time to introduce myself.")
                alert("My name is Yhvr. The ranger of numbers.")
                alert("I am one of the four great nobles of incremental powers.")
                alert("You will know it's me becasue I am communicating via alerts.")
                alert("I am in exile, as are my other fellow nobles Jacorb and Aarex.")
                alert("However, I can still communicate with the outside world.")
                alert("My creation, galaxy.click is very useful as it lets me do this.")
                alert("Please. Help us get out of here!")
                alert("Jacorb and Aarex tried helping the other hero, but it was no use.")
                alert("The path of singularity was too weak to handle a single celestial.")
                alert("I want you to access galaxy.click, so you can be able to defeat celestials.")
                alert("Not even true singularities are capable of this power.")
                alert("Anyways, THE DEATH REALM will eventually catch on to this convo. Gotta go.")
                }
                player.yhvrcutscene1 = new Decimal(1)
            },
        },
        12:
        {
            title: "Boost I",
            unlocked() { return hasUpgrade("m", 11) },
            description: "Boosts points based on unspent incremental power.",
            cost: new Decimal(2),
            currencyLocation() { return player.m },
            currencyDisplayName: "Incremental Power",
            currencyInternalName: "points",
            effect() 
            {
                 return player[this.layer].points.pow(0.6).add(2)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        13:
        {
            title: "Boost II",
            unlocked() { return hasUpgrade("m", 12) },
            description: "Boosts prestige points based on unspent incremental power.",
            cost: new Decimal(4),
            currencyLocation() { return player.m },
            currencyDisplayName: "Incremental Power",
            currencyInternalName: "points",
            effect() 
            {
                 return player[this.layer].points.pow(0.5).add(2)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        14:
        {
            title: "Factor I",
            unlocked() { return hasUpgrade("m", 13) },
            description: "Unlocks a pathless factor.",
            cost: new Decimal(10),
            currencyLocation() { return player.m },
            currencyDisplayName: "Incremental Power",
            currencyInternalName: "points",
        },
        15:
        {
            title: "Pure Energy",
            unlocked() { return hasUpgrade("m", 14) },
            description: "Unlocks the pure energy feature.",
            cost: new Decimal(40),
            currencyLocation() { return player.m },
            currencyDisplayName: "Incremental Power",
            currencyInternalName: "points",
        },
        16:
        {
            title: "QoL I",
            unlocked() { return hasUpgrade("m", 15) },
            description: "Gives extra point producers based on incremental energy.",
            cost: new Decimal(150),
            currencyLocation() { return player.m },
            currencyDisplayName: "Incremental Power",
            currencyInternalName: "points",
            effect() 
            {
                 return player[this.layer].incrementalenergy.pow(0.8)
            },
            effectDisplay() { return "+" + format(upgradeEffect(this.layer, this.id))}, // Add formatting to the effect
            onPurchase() {
                if (player.yhvrcutscene4.eq(0))
                {
                alert("Nice.")
                alert("Now your incremental power gain will skyrocket.")
                alert("Just remember.")
                alert("You must keep going farther in the path, or else you won't unlock new factors.")
                alert("Enjoy.")
            }
                player.yhvrcutscene4 = new Decimal(1)
            },
        },
        17:
        {
            title: "Boost III",
            unlocked() { return hasUpgrade("m", 16) && player.enhancelayer.eq(1) },
            description: "Boosts prestige points based on meta-prestige time.",
            cost: new Decimal(750),
            currencyLocation() { return player.m },
            currencyDisplayName: "Incremental Power",
            currencyInternalName: "points",
            effect() 
            {
                 return player.i.metaprestigetime.div(500).pow(0.7).add(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        18:
        {
            title: "Cool Upgrade I",
            unlocked() { return hasUpgrade("m", 17) && player.beaconcutscene.eq(0) },
            description: "Adds 10s to the meta-prestige timer when your beacon fills up.",
            cost: new Decimal(1500),
            currencyLocation() { return player.m },
            currencyDisplayName: "Incremental Power",
            currencyInternalName: "points",
        },
        19:
        {
            title: "Crafting",
            unlocked() { return hasUpgrade("m", 18) },
            description: "Unlocks the crafting layer.",
            cost: new Decimal(3000),
            currencyLocation() { return player.m },
            currencyDisplayName: "Incremental Power",
            currencyInternalName: "points",
            onPurchase() {
                if (player.yhvrcutscene6.eq(0))
                {
                alert("It's about time you unlocked this feature.")
                alert("It is run by a unique celestial, but this feature will be very helpful.")
                alert("You are close to the first celestial you will fight.")
                alert("But to summon it, you must craft a certain item.")
                alert("But there are requirements you will need to complete first.")
            }
                player.yhvrcutscene6 = new Decimal(1)
            },
        },
        21:
        {
            title: "Boost IV",
            unlocked() { return hasUpgrade("m", 19) && player.timelayer.eq(1)},
            description: "Boosts crafting power based on time capsules.",
            cost: new Decimal(5500),
            currencyLocation() { return player.m },
            currencyDisplayName: "Incremental Power",
            currencyInternalName: "points",
            effect() 
            {
                 return player.c.timecapsules.div(25).pow(0.7).add(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        22:
        {
            title: "Factor II",
            unlocked() { return hasUpgrade("m", 21) },
            description: "Unlocks 2 new standard path factors.",
            cost: new Decimal(8000),
            currencyLocation() { return player.m },
            currencyDisplayName: "Incremental Power",
            currencyInternalName: "points",
        },
        23:
        {
            title: "QoL II",
            unlocked() { return hasUpgrade("m", 22) && player.m.ce308unlock.eq(1) },
            description: "Unlocks more QoL upgrades.",
            cost: new Decimal(12000),
            currencyLocation() { return player.m },
            currencyDisplayName: "Incremental Power",
            currencyInternalName: "points",
        },
        24:
        {
            title: "Standard Path QoL I",
            unlocked() { return hasUpgrade("m", 23) },
            description: "Autobuys standard path prestige upgrades.",
            cost: new Decimal(3),
            currencyLocation() { return player.c },
            currencyDisplayName: "Celestial Cells",
            currencyInternalName: "celestialcells",
        },
        25:
        {
            title: "Standard Path QoL II",
            unlocked() { return hasUpgrade("m", 23) },
            description: "Gain 3% of prestige points per second. (in standard path)",
            cost: new Decimal(5),
            currencyLocation() { return player.c },
            currencyDisplayName: "Celestial Cells",
            currencyInternalName: "celestialcells",
        },
        26:
        {
            title: "Universal QoL I",
            unlocked() { return hasUpgrade("m", 23) },
            description: "Autobuys prestige buyables without spending (in all paths).",
            cost: new Decimal(7),
            currencyLocation() { return player.c },
            currencyDisplayName: "Celestial Cells",
            currencyInternalName: "celestialcells",
        },
        27:
        {
            title: "Enhance Path QoL I",
            unlocked() { return hasUpgrade("m", 23) },
            description: "Gain 25% of prestige points per second (in enhance path).",
            cost: new Decimal(10),
            currencyLocation() { return player.c },
            currencyDisplayName: "Celestial Cells",
            currencyInternalName: "celestialcells",
        },
        28:
        {
            title: "Standard Path QoL III",
            unlocked() { return hasUpgrade("m", 23) },
            description: "Autobuys pure energy buyables without spending.",
            cost: new Decimal(13),
            currencyLocation() { return player.c },
            currencyDisplayName: "Celestial Cells",
            currencyInternalName: "celestialcells",
        },
        29:
        {
            title: "Crafting QoL I",
            unlocked() { return hasUpgrade("m", 23) },
            description: "Adds another anvil slot.",
            cost: new Decimal(17),
            currencyLocation() { return player.c },
            currencyDisplayName: "Celestial Cells",
            currencyInternalName: "celestialcells",
            onPurchase() {
                player.c.anvilslots = player.c.anvilslots.add(1)
            },
        },
        31:
        {
            title: "Boost V",
            unlocked() { return hasUpgrade("m", 24) && player.m.ce308unlock.eq(1) },
            description: "Boosts enhance beacon efficiency by x2.",
            cost: new Decimal(60000),
            currencyLocation() { return player.m },
            currencyDisplayName: "Incremental Power",
            currencyInternalName: "points",
        },
        32:
        {
            title: "Crafting QoL II",
            unlocked() { return hasUpgrade("m", 31) },
            description: "Lowers time and space metals's crafting power requirements.",
            cost: new Decimal(25),
            currencyLocation() { return player.c },
            currencyDisplayName: "Celestial Cells",
            currencyInternalName: "celestialcells",
        },
        33:
        {
            title: "Crafting QoL III",
            unlocked() { return hasUpgrade("m", 31) },
            description: "Lowers time capsule and space building's crafting power requirements.",
            cost: new Decimal(36),
            currencyLocation() { return player.c },
            currencyDisplayName: "Celestial Cells",
            currencyInternalName: "celestialcells",
        },
        34:
        {
            title: "Travel",
            unlocked() { return player.defeatedce308.eq(1) },
            description: "Unlocks realm travel.",
            cost: new Decimal(4000000),
            currencyLocation() { return player.m },
            currencyDisplayName: "Incremental Power",
            currencyInternalName: "points",
        },
        35:
        {
            title: "Prestige Tree QoL I",
            unlocked() { return hasUpgrade("m", 34) },
            description: "Autobuys all the buyables from the first four rows of the prestige tree.",
            cost: new Decimal(69),
            currencyLocation() { return player.c },
            currencyDisplayName: "Celestial Cells",
            currencyInternalName: "celestialcells",
        },
    },
    buyables: {
    },
    milestones: {

    },
    challenges: {
    },
    bars: {

    },
    infoboxes: { 
    },
    microtabs: {
        stuff: {
            "Meta-Prestige": {
                buttonStyle() { return { 'color': '#8a00a9' } },
                unlocked() { return true },
                content:

                    [
            ["microtabs", "metaprestige", { 'border-width': '0px' }],
        ]

            },
            "Score Breakdown": {
                buttonStyle() { return { 'color': '#8a00a9' } },
                unlocked() { return true },
                content:

                    [
                           ["blank", "25px"],
                           ["raw-html", function () { return "<h3>Pathless Factors " }, { "color": "white", "font-size": "24px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.i.superpoints.eq(0) ?"<h3>Best points: " + format(player.bestpoints) + " -> " + format(player.m.scorefrombestpoints) + " base score"  : ""}, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.i.superpoints.gt(0) ? "<h3>Best points: " + format(player.bestpoints) + " x " +  format(player.i.superpoints) + " -> " + format(player.m.scorefrombestpoints) + " base score" : "" }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return hasUpgrade("m", 14) ? "<h3>Time played: " + formatTime(player.timePlayed) + " -> x" + format(player.m.scorefromtimeplayed) : "" }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.c.celestialcells.neq(0) ? "<h3>Celestial cells: " + format(player.c.celestialcells) + " -> x" + format(player.m.scorefromcelestialcells) : "" }, { "color": "#72a4d4", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.i.puremachines.gt(0) ? "<h3>Pure machines: " + format(player.i.puremachines) + " -> x" + format(player.m.scorefrompuremachines) : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                           ["blank", "25px"],
                           ["raw-html", function () { return player.i.standardpath.eq(1) ? "<h3>Standard Path Factors " : "" }, { "color": "#ffffaa", "font-size": "24px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.i.standardpath.eq(1) && player.i.superprestigeenergy.eq(0) ? "<h3>Best prestige energy: " + format(player.i.bestprestigeenergy) + " -> x" + format(player.m.scorefrombestprestigeenergy) : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.i.standardpath.eq(1) && player.i.superprestigeenergy.gt(0) ? "<h3>Best prestige energy: " + format(player.i.bestprestigeenergy) + " x " +  format(player.i.superprestigeenergy) + " -> x" + format(player.m.scorefrombestprestigeenergy): "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.i.standardpath.eq(1) && hasUpgrade("i", 14) && player.i.superpureenergy.eq(0) ? "<h3>Best pure energy: " + format(player.i.bestpureenergy) + " -> x" + format(player.m.scorefrombestpureenergy) : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.i.standardpath.eq(1) && hasUpgrade("i", 14) && player.i.superpureenergy.gt(0) ? "<h3>Best pure energy: " + format(player.i.bestpureenergy) + " x " +  format(player.i.superpureenergy) + " -> x" + format(player.m.scorefrombestpureenergy) : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.i.standardpath.eq(1) && hasUpgrade("i", 14) && hasUpgrade("m", 22) ? "<h3>Best booster energy: " + format(player.i.bestboosterenergy) + " -> x" + format(player.m.scorefrombestboosterenergy) : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.i.standardpath.eq(1) && hasUpgrade("i", 14) && hasUpgrade("m", 22) ? "<h3>Best generator energy: " + format(player.i.bestgeneratorenergy) + " -> x" + format(player.m.scorefrombestgeneratorenergy) : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.i.standardpath.eq(1) && hasUpgrade("i", 27) ? "<h3>Best celestial energy: " + format(player.i.bestcelestialenergy) + " -> x" + format(player.m.scorefrombestcelestialenergy) : "" }, { "color": "#72a4d4", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.i.enhancepath.eq(1) ? "<h3>Enhance Path Factors " : "" }, { "color": "#b82fbd", "font-size": "24px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.i.enhancepath.eq(1) ? "<h3>Best enhance points: " + format(player.i.bestenhancepoints) + " -> x" + format(player.m.scorefrombestenhancepoints) : "" }, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.i.enhancepath.eq(1) && hasUpgrade("i", 105) ? "<h3>Best beacon points: " + format(player.i.bestbeaconpoints) + " -> x" + format(player.m.scorefrombestbeaconpoints) : "" }, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
                           ["blank", "25px"],
                           ["raw-html", function () { return player.prestigelayer.eq(1) ? "<h3>Prestige Tree Factors " : "" }, { "color": "#31aeb0", "font-size": "24px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.prestigelayer.eq(1) && player.pr.buyables[11].gt(0) ? "<h3>Score amplifier: " + format(player.pr.buyables[11]) + " -> x" + format(buyableEffect("pr", 11)) : "" }, { "color": "#31aeb0", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.boosterlayer.eq(1) ? "<h3>Incremental Power: " + format(player.m.points) + " -> x" + format(player.m.scorefromincrementalpower) : "" }, { "color": "#6e64c4", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.generatorlayer.eq(1) ? "<h3>Incremental Energy: " + format(player.m.incrementalenergy) + " -> x" + format(player.m.scorefromincrementalenergy) : "" }, { "color": "#a3d9a5", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.enhancelayer.eq(1) ? "<h3>Time spent in meta-prestige: " + formatTime(player.i.metaprestigetime) + " -> x" + format(player.m.scorefrommetaprestigetime) : "" }, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.timelayer.eq(1) ? "<h3>Time capsules: " + formatWhole(player.c.timecapsules) + " -> x" + format(player.m.scorefromtimecapsules) : "" }, { "color": "#006609", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.spacelayer.eq(1) ? "<h3>Space buildings: " + formatWhole(player.c.spacebuildings) + " -> x" + format(player.m.scorefromspacebuildings) : "" }, { "color": "#dfdfdf", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.quirklayer.eq(1) ? "<h3>Quirk layers: " + formatWhole(player.c.quirklayers) + " -> x" + format(player.m.scorefromquirklayers) : "" }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.hindrancelayer.eq(1) ? "<h3>Hindrance spirits: " + formatWhole(player.hi.hindrancespirits) + " -> x" + format(player.m.scorefromhindrancespirits) : "" }, { "color": "#a14040", "font-size": "18px", "font-family": "monospace" }],
                           ["blank", "25px"],
                           ["raw-html", function () { return hasUpgrade("h", 11) ? "<h3>Hub Factors " : "" }, { "color": "#68e8f4", "font-size": "24px", "font-family": "monospace" }],
                           ["raw-html", function () { return hasUpgrade("h", 11) ? "<h3>Score Bumper: " + format(player.h.buyables[12]) + " -> x" + format(buyableEffect("h", 12)) : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.h.flameunlock.eq(1) ? "<h3>More Score: " + format(player.h.buyables[35]) + " -> x" + format(buyableEffect("h", 35)) : "" }, { "color": "#A40A67", "font-size": "18px", "font-family": "monospace" }],
                           ["blank", "25px"],
                           ["raw-html", function () { return "<h3>TOTAL SCORE: " + format(player.m.score) }, { "color": "white", "font-size": "24px", "font-family": "monospace" }],
                    ]

            },
            "Prestige Tree": {
                buttonStyle() { return { 'color': '#8a00a9' } },
                unlocked() { return player.prestigelayer.eq(1) },
                content:

                    [
                           ["blank", "25px"],
                           ["tree", prestigetree],
                    ]

            },
            "Realm Travel": {
                buttonStyle() { return { 'color': '#90EE90', "border-color" : "90EE90" } },
                unlocked() { return hasUpgrade("m", 34) },
                content:
                    [
                           ["blank", "25px"],
            ["raw-html", function () { return "<h2>You have " + formatWhole(player.c.dimensionaltickets) + " dimensional realm tickets." }, { "color": "#90EE90", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return "<h3>You have " + formatWhole(player.m.dimensionalrealmtravels) + " dimensional realm travels." }, { "color": "#90EE90", "font-size": "18px", "font-family": "monospace" }],
            ["blank", "25px"],
            ["row", [["clickable", 11]]],
            ["blank", "25px"],
            ["row", [["clickable", 12]]],
        ]

            },
        },
        metaprestige: {
            "Main": {
                buttonStyle() { return { 'color': '#8a00a9' } },
                unlocked() { return true },
                content:

                    [
                        ["blank", "25px"],
            ["raw-html", function () { return "<h2>You have " + format(player.m.points) + " incremental power." }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return "<h3>YOUR SCORE: " + format(player.m.score) }, { "color": "white", "font-size": "15px", "font-family": "monospace" }],
                           ["blank", "25px"],
                           "prestige-button",
                           ["blank", "25px"],
            ["raw-html", function () { return hasUpgrade("m", 11) ? "<h2>You have " + format(player.m.incrementalenergy) + " incremental energy." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return hasUpgrade("m", 11) ? "<h3>Your incremental energy give a x" + format(player.m.incrementalenergyeffect) + " boost to points and prestige energy." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return hasUpgrade("m", 11) ? "<h3>Your prestige machines will give you " + format(player.m.incrementalenergytoget) + " incremental energy on reset." : ""}, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],

                    ]

            },
            "Upgrades": {
                buttonStyle() { return { 'color': '#8a00a9' } },
                unlocked() { return true },
                content:

                    [
                        ["blank", "25px"],
            ["raw-html", function () { return "<h2>You have " + format(player.m.points) + " incremental power." }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["upgrade", 11], ["upgrade", 12], ["upgrade", 13], ["upgrade", 14], ["upgrade", 15], ["upgrade", 16], ["upgrade", 17]]],
                        ["row", [["upgrade", 18], ["upgrade", 19], ["upgrade", 21], ["upgrade", 22], ["upgrade", 23], ["upgrade", 31], ["upgrade", 34]]],
        ]

            },
            "QoL": {
                buttonStyle() { return { 'color': '#8a00a9' } },
                unlocked() { return hasUpgrade("m", 23) },
                content:

                    [
                        ["blank", "25px"],
            ["raw-html", function () { return "<h2>You have " + formatWhole(player.c.celestialcells) + " celestial cells." }, { "color": "#72a4d4", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return "<h3>(celestial cells are a crafting resource)" }, { "color": "#72a4d4", "font-size": "18px", "font-family": "monospace" }],
            ["blank", "25px"],
                        ["row", [["upgrade", 24], ["upgrade", 25], ["upgrade", 26], ["upgrade", 27], ["upgrade", 28], ["upgrade", 29]]],
                        ["row", [["upgrade", 32], ["upgrade", 33], ["upgrade", 35]]],
        ]

            },
        },
    },

    tabFormat: [
            ["microtabs", "stuff", { 'border-width': '0px' }],
            //MUSIC
            ["raw-html", function () { return options.musicToggle ? "<audio controls autoplay loop hidden><source src=music/metaprestige.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
    ],
    layerShown() { return player.unlockedmetaprestige.eq(1) && player.dimensionalrealm.eq(0)}
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'm' && options.toggleHotkey && player.unlockedmetaprestige.eq(1)) {
      player.tab = "m"
      player.dimensionalrealm = new Decimal(0)
    }
  });
  document.addEventListener('keydown', function(event) {
    if (event.key === 'i' && options.toggleHotkey) {
      player.tab = "i"
      player.dimensionalrealm = new Decimal(0)
    }
  });
  document.addEventListener('keydown', function(event) {
    if (event.key === 'c' && options.toggleHotkey && hasUpgrade("m", 19)) {
      player.tab = "c"
      player.dimensionalrealm = new Decimal(0)
    }
  });
  document.addEventListener('keydown', function(event) {
    if (event.key === 'M' && event.shiftKey && options.toggleHotkey) {
        doReset("m")
    }
  });
  document.addEventListener('keydown', function(event) {
    if (event.key === 'h' && options.toggleHotkey && hasUpgrade("m", 34) && player.m.dimensionalrealmtravels.gt(0)) {
      player.tab = "h"
      if (player.dimensionalrealm.eq(0)) player.m.dimensionalrealmtravels = player.m.dimensionalrealmtravels.sub(1)
      player.dimensionalrealm = new Decimal(1)     
    }
  });