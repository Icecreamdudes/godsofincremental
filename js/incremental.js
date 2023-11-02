                   addLayer("i", {
    name: "Incremental", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "I", // This appears on the layer's node. Default is the id with the first letter capitalized
    row: 1,
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        prestigepoints: new Decimal(0),
        prestigepause: new Decimal(0),
        prestigepointstoget: new Decimal(0),
		bestpoints: new Decimal(0),
        metaprestigetime: new Decimal(0),

        //STANDARD PATH
        standardpath: new Decimal(0),
        bestprestigeenergy: new Decimal(0),
        prestigeenergy: new Decimal(0),
        prestigeenergyeffect: new Decimal(1),
        prestigeenergyeffectonpoints: new Decimal(1),
        prestigeenergypersecond: new Decimal(0),
        producingprestigeenergy: new Decimal(0),
        prestigemachines: new Decimal(0),
        prestigemachineeffect: new Decimal(0),
        prestigemachinereq: new Decimal(250000),
        machinecorruption: new Decimal(0),
        machinecorruptioneffect: new Decimal(0),
        noenergyboost: new Decimal(1),
        bestpureenergy: new Decimal(0),

        //PURE ENERGY
        pureenergy: new Decimal(0),
        pureenergypause: new Decimal(0),
        pureenergyeffect: new Decimal(0),
        pureenergytoget: new Decimal(0),
        bestgeneratorenergy: new Decimal(0),
        generatorenergy: new Decimal(0),
        generatorenergyeffect: new Decimal(1),
        generatorenergypersecond: new Decimal(0),
        bestboosterenergy: new Decimal(0),
        boosterenergy: new Decimal(0),
        boosterenergyeffect: new Decimal(1),
        boosterenergypersecond: new Decimal(0), 

        //ENERGIZERS
        nextenergizer: new Decimal(0),
        currentenergizer: new Decimal(0),
        //0 - None
        //1 - Cheaper machines, more corruption
        //2 - Stronger prestige energy
        //3 - Points up, prestige points down
        //4 - Autogen pure energy, but lower gains

        corruptiondelay: new Decimal(0),

        //Machine Autobuy
        machineautomode: new Decimal(0),

        //Super
        superpoints: new Decimal(0),
        superpointseffect: new Decimal(1),
        superpointstoget: new Decimal(0),
        superprestigeenergy: new Decimal(0),
        superprestigeenergyeffect: new Decimal(1),
        superprestigeenergytoget: new Decimal(0),
        superpureenergy: new Decimal(0),
        superpureenergyeffect: new Decimal(1),
        superpureenergytoget: new Decimal(0),

        //CELESTIAL
        bestcelestialenergy: new Decimal(0),
        celestialenergy: new Decimal(0),
        celestialenergypause: new Decimal(0),
        celestialenergytoget: new Decimal(0),
        celestialenergyeffect: new Decimal(0),

        //Standard Path Quirks
        quirkenergy: new Decimal(0),
        quirkenergypersecond: new Decimal(0),
        quirkenergyeffect: new Decimal(1),
        quirkradiation: new Decimal(0),
        quirkradiationpersecond: new Decimal(0),
        quirkradiationeffect: new Decimal(1),

        //task
        tasksleft: new Decimal(2),
        energytaskeffect: new Decimal(1),
        metataskeffect: new Decimal(1),
        challengetaskeffect: new Decimal(1),
        craftingtaskeffect: new Decimal(1),
        
        //hinder
        hindranceenergy: new Decimal(0),
        hindranceenergyeffect: new Decimal(1),
        hindranceenergypersecond: new Decimal(0),
        hindrancepoints: new Decimal(0),
        hindrancepointseffect: new Decimal(0),
        hindrancepointstoget: new Decimal(0),
        hindrancepointpause: new Decimal(0),

        //puremachine
        puremachines: new Decimal(0),
        puremachinespersecond: new Decimal(0),

        //boss
        ce308bossactivate: new Decimal(0),
        playerhealth: new Decimal(250),
        playerdead: new Decimal(0),
        healthdrain: new Decimal(0),
        yellowattacktimer: new Decimal(0),
        greenhealtimer: new Decimal(0),
        truemachines: new Decimal(0),
        truemachinespersecond: new Decimal(0),
        beatce308: new Decimal(0),
        wirestoget: new Decimal(0),
        scrapmetaltoget: new Decimal(0),
        enhancepowdertoget: new Decimal(0),
        nohitce308: new Decimal(3),

        //ENHANCE PATH
        enhancepath: new Decimal(0),
        bestenhancepoints: new Decimal(0),
        enhancepoints: new Decimal(0),
        enhancepointseffect: new Decimal(1),
        enhancepointspersecond: new Decimal(0),
        enhancedprestigepoints: new Decimal(0),

        //Beacon
        enhancebeaconlevel: new Decimal(0),
        enhancebeaconreq: new Decimal(100),
        enhancebeacontoggle: new Decimal(0),
        beaconpower: new Decimal(0),
        beaconpowerpersecond: new Decimal(0),
        beaconpowerreq: new Decimal(25),
        incrementalpowergain: new Decimal(0.3),

        //Beacon Points
        beaconpoints: new Decimal(0),
        bestbeaconpoints: new Decimal(0),
        beaconpointstoget: new Decimal(0),

        //Quirk
        quirks: new Decimal(0),
        quirkeffect: new Decimal(1),
        quirkpause: new Decimal(0),
        quirkstoget: new Decimal(0),
        quirklayerboost: new Decimal(0),
        quirkstarboost: new Decimal(0),
        quirkimprovementeffect: new Decimal(1),

        //balancing
        jacorbincrementalpowerloss: new Decimal(0),
        injacorbianbalancing: new Decimal(0),
        jacorbianenergy: new Decimal(0),
        jacorbianenergytoget: new Decimal(0),

        //altar
        sacrificedspaceon: new Decimal(0),
        sacrificedspaceoneffect: new Decimal(1),
        sacrificedsolaris: new Decimal(0),
        sacrificedsolariseffect: new Decimal(1),
        sacrificedinfinity: new Decimal(0),
        sacrificedinfinityeffect: new Decimal(1),
        sacrificedeternity: new Decimal(0),
        sacrificedeternityeffect: new Decimal(1),
        sacrificedreality: new Decimal(0),
        sacrificedrealityeffect: new Decimal(1),
        sacrificeddrigganiz: new Decimal(0),
        sacrificeddrigganizeffect: new Decimal(1),
        altaramount: new Decimal(1),
        altaramountinput: "",

        //runes
        jacorbianrunes: new Decimal(0),
        jacorbianrunestoget: new Decimal(0),
        jacorbianruneseffect: new Decimal(1),
        jacorbianruneseffect2: new Decimal(1),

        //translator
        preservedquirkenergy: new Decimal(0),
        preservedquirkenergyeffect: new Decimal(1),

        superquirks: new Decimal(0),
        superquirkseffect: new Decimal(1),
        superquirkspersecond: new Decimal(0),

        //SITRA
        sitraunlock: new Decimal(0),
    }
    },
    automate() {
        if (hasUpgrade("i", 12) || hasUpgrade("i", 103))
        {
            buyBuyable("i", 11)
            buyBuyable("i", 12)
            buyBuyable("i", 13)
        }
        if (hasUpgrade("i", 16))
        {
            buyBuyable("i", 14)
            buyBuyable("i", 15)
        }
        if (hasUpgrade("m", 24))
        {
            buyUpgrade("i", 11)
            buyUpgrade("i", 12)
            buyUpgrade("i", 13)
            buyUpgrade("i", 14)
        }
        if (hasUpgrade("m", 26))
        {
            buyBuyable("i", 14)
            buyBuyable("i", 15)
            buyBuyable("i", 101)
        }
        if (hasUpgrade("m", 28))
        {
            buyBuyable("i", 16)
            buyBuyable("i", 17)
            buyBuyable("i", 18)
            buyBuyable("i", 19)
            buyBuyable("i", 21)
            buyBuyable("i", 22)
            buyBuyable("i", 23)
        }
        if (hasUpgrade("i", 39))
        {
            buyBuyable("i", 26)
            buyBuyable("i", 27)
            buyBuyable("i", 28)
            buyBuyable("i", 29)
            buyBuyable("i", 31)
            buyBuyable("i", 32)
            buyBuyable("i", 33)
            buyBuyable("i", 34)
        }
        if (hasUpgrade("i", 112))
        {
            buyBuyable("i", 102)
            buyBuyable("i", 103)
            buyBuyable("i", 104)
        }
    },
    nodeStyle() {


        if (player.unlockedmetaprestige.eq(0))
        {
            return {
                background: "white",
                "background-origin": "border-box",
			}
        }
        if (player.unlockedmetaprestige.eq(1) && player.i.standardpath.eq(0) && player.i.enhancepath.eq(0)) {
            return {
                background: "white",
                "background-origin": "border-box",
                animation: 'orbit 25s infinite linear', // Rotation animation
                position: "absolute",
                top: "25.5%",
                left: "46.5%",
            }
        }
        if (player.i.standardpath.eq(1)) {
            return {
                background: "#ffffaa",
                "background-origin": "border-box",
                animation: 'orbit 25s infinite linear', // Rotation animation
                position: "absolute",
                boxShadow: '0 0 10px 2px #ffffff',
                top: "25.5%",
                left: "46.5%",
            }
        }
        if (player.i.enhancepath.eq(1) && player.i.injacorbianbalancing.eq(0)) {
            return {
                "background-image": "linear-gradient(45deg, #b82fbd, purple)",
                "background-origin": "border-box",
                animation: 'orbit 25s infinite linear', // Rotation animation
                position: "absolute",
                boxShadow: '0 0 10px 2px purple',
                top: "25.5%",
                left: "46.5%",
            }
        }
        if (player.i.enhancepath.eq(1) && player.i.injacorbianbalancing.eq(1)) {
            return {
                "background-image": "linear-gradient(45deg, #3B0051, #0f0f0f)",
                "background-origin": "border-box",
                animation: 'orbit 25s infinite linear', // Rotation animation
                position: "absolute",
                boxShadow: '0 0 10px 2px #3B0051',
                top: "25.5%",
                left: "46.5%",
            }
        }
    },
    color: "white",
    tooltip: "Incremental", // Row the layer is in on the tree (0 is the first row)
    update(delta) {
        let onepersec = new Decimal(1)

        metaprestigetimemult = new Decimal(1)
        if (player.i.enhancepath.eq(1)) metaprestigetimemult = metaprestigetimemult.mul(3)
        metaprestigetimemult = metaprestigetimemult.mul(player.ti.timeenergyeffect)
        metaprestigetimemult = metaprestigetimemult.mul(player.hi.hindrancespiritseffect)
        metaprestigetimemult = metaprestigetimemult.mul(buyableEffect("h", 71))

        player.i.metaprestigetime = player.i.metaprestigetime.add(onepersec.mul(metaprestigetimemult).mul(delta))

        if (player.prestigescene.eq(7)) {
            player.prestigecutscene = new Decimal(0)
            player.inreddiamondcutscene = new Decimal(0)
        }
        if (player.prestigescene.gt(0) && player.prestigecutscene.eq(1))
        {
            player.inreddiamondcutscene = new Decimal(1)
        }

        player.i.prestigepointstoget = player.points.pow(0.4).div(3)
        if (player.i.standardpath.eq(1)) player.i.prestigepointstoget = player.i.prestigepointstoget.mul(1.25)
        if (player.i.standardpath.eq(1)) player.i.prestigepointstoget = player.i.prestigepointstoget.mul(player.i.prestigeenergyeffect)
        if (hasUpgrade("m", 13)) player.i.prestigepointstoget = player.i.prestigepointstoget.mul(upgradeEffect("m", 13))
        if (player.i.standardpath.eq(1)) player.i.prestigepointstoget = player.i.prestigepointstoget.mul(player.i.prestigemachineeffect)
        if (player.i.currentenergizer.eq(3)) player.i.prestigepointstoget = player.i.prestigepointstoget.div(1000)
        player.i.prestigepointstoget = player.i.prestigepointstoget.mul(buyableEffect("i", 23))
        player.i.prestigepointstoget = player.i.prestigepointstoget.mul(buyableEffect("i", 101))
        if (hasUpgrade("m", 17)) player.i.prestigepointstoget = player.i.prestigepointstoget.mul(upgradeEffect("m", 17))
        player.i.prestigepointstoget = player.i.prestigepointstoget.mul(player.sp.spaceenhancedeffect)
        if (player.i.enhancepath.eq(1)) player.i.prestigepointstoget = player.i.prestigepointstoget.pow(0.95)
        player.i.prestigepointstoget = player.i.prestigepointstoget.mul(buyableEffect("i", 103))
        player.i.prestigepointstoget = player.i.prestigepointstoget.mul(buyableEffect("i", 106))
        player.i.prestigepointstoget = player.i.prestigepointstoget.mul(player.m.prestigepointperk)
        player.i.prestigepointstoget = player.i.prestigepointstoget.mul(player.i.sacrificedinfinityeffect)
        player.i.prestigepointstoget = player.i.prestigepointstoget.mul(buyableEffect("i", 124))
        player.i.prestigepointstoget = player.i.prestigepointstoget.mul(buyableEffect("i", 125))
        player.i.prestigepointstoget = player.i.prestigepointstoget.mul(buyableEffect("i", 126))
        player.i.prestigepointstoget = player.i.prestigepointstoget.mul(buyableEffect("i", 127))

        if (hasUpgrade("i", 22)) player.i.prestigepoints = player.i.prestigepoints.add(player.i.prestigepointstoget.mul(delta))
        if (hasUpgrade("m", 25) && player.i.standardpath.eq(1)) player.i.prestigepoints = player.i.prestigepoints.add(player.i.prestigepointstoget.mul(0.03).mul(delta))
        if (hasUpgrade("m", 27) && player.i.enhancepath.eq(1)) player.i.prestigepoints = player.i.prestigepoints.add(player.i.prestigepointstoget.mul(0.25).mul(delta))

        if (player.i.prestigepause.gt(0)) {
            layers.i.prestigereset();
        }

        player.i.prestigepause = player.i.prestigepause.sub(1)

        if (player.points.gte(player.bestpoints)) player.bestpoints = player.points

        player.i.prestigeenergypersecond = buyableEffect("i", 15)
        player.i.prestigeenergypersecond = player.i.prestigeenergypersecond.mul(player.i.producingprestigeenergy)
        player.i.prestigeenergypersecond = player.i.prestigeenergypersecond.mul(player.i.prestigemachineeffect)
        player.i.prestigeenergypersecond = player.i.prestigeenergypersecond.mul(player.i.generatorenergyeffect)
        player.i.prestigeenergypersecond = player.i.prestigeenergypersecond.mul(buyableEffect("i", 19))
        player.i.prestigeenergypersecond = player.i.prestigeenergypersecond.mul(buyableEffect("i", 23))
        player.i.prestigeenergypersecond = player.i.prestigeenergypersecond.mul(player.sp.spacestandardeffect)
        player.i.prestigeenergypersecond = player.i.prestigeenergypersecond.mul(player.i.superprestigeenergyeffect)
        player.i.prestigeenergypersecond = player.i.prestigeenergypersecond.mul(player.i.celestialenergyeffect)
        player.i.prestigeenergypersecond = player.i.prestigeenergypersecond.mul(player.m.incrementalenergyeffect)

        player.i.prestigeenergy = player.i.prestigeenergy.add(player.i.prestigeenergypersecond.mul(delta))

        player.i.pureenergyeffect = player.i.pureenergy.pow(1.2).add(1)
        if (player.i.currentenergizer.neq(2)) player.i.prestigeenergyeffect = player.i.prestigeenergy.pow(0.4).add(1)
        if (player.i.currentenergizer.eq(2)) player.i.prestigeenergyeffect = player.i.prestigeenergy.pow(0.4).mul(8).add(1)
        if (player.i.currentenergizer.neq(2)) player.i.prestigeenergyeffectonpoints = player.i.prestigeenergy.pow(0.2).add(1).mul(player.i.machinecorruptioneffect).div(player.i.pureenergyeffect)
        if (player.i.currentenergizer.eq(2)) player.i.prestigeenergyeffectonpoints = player.i.prestigeenergy.pow(0.2).pow(2).add(1).mul(player.i.machinecorruptioneffect).div(player.i.pureenergyeffect).div(buyableEffect("i", 19))

        if (player.i.prestigeenergy.gte(player.i.bestprestigeenergy)) player.i.bestprestigeenergy = player.i.prestigeenergy

        if (player.machinescene.eq(22)) {
            player.machinecutscene = new Decimal(0)
            player.inreddiamondcutscene = new Decimal(0)
        }
        if (player.machinescene.gt(0) && player.machinecutscene.eq(1))
        {
            player.inreddiamondcutscene = new Decimal(1)
        }

        if (player.i.currentenergizer.neq(1)) player.i.prestigemachinereq = Decimal.pow(3, player.i.prestigemachines)
        if (player.i.currentenergizer.eq(1)) player.i.prestigemachinereq = Decimal.pow(1.5, player.i.prestigemachines)
        player.i.prestigemachineeffect = player.i.prestigemachines.pow(1.2).add(1).pow(player.i.craftingtaskeffect)

        if (!hasUpgrade("i", 23)) player.i.corruptiondelay = buyableEffect('i', 18)
        if (hasUpgrade("i", 23)) player.i.corruptiondelay = buyableEffect('i', 18).add(upgradeEffect("i", 23))

        if (player.i.prestigemachines.lte(player.i.corruptiondelay)) player.i.machinecorruption = new Decimal(0)
        if (player.i.currentenergizer.neq(1) && player.i.prestigemachines.gt(player.i.corruptiondelay)) player.i.machinecorruption = player.i.prestigemachines.sub(player.i.corruptiondelay).pow(1.75)
        if (player.i.currentenergizer.eq(1) && player.i.prestigemachines.gt(player.i.corruptiondelay)) player.i.machinecorruption = player.i.prestigemachines.sub(player.i.corruptiondelay).pow(1.75).pow(2)
        player.i.machinecorruptioneffect = player.i.machinecorruption.pow(0.75).add(1)

        if (player.i.prestigeenergy.neq(0)) player.i.noenergyboost = new Decimal(1)

        if (player.pureenergyscene.eq(16)) {
            player.pureenergycutscene = new Decimal(0)
            player.inreddiamondcutscene = new Decimal(0)
        }
        if (player.pureenergyscene.gt(0) && player.pureenergycutscene.eq(1))
        {
            player.inreddiamondcutscene = new Decimal(1)
        }

        if (player.i.pureenergypause.gt(0)) {
            layers.i.pureenergyreset();
        }
        player.i.pureenergypause = player.i.pureenergypause.sub(1)

        player.i.pureenergytoget = player.i.prestigepoints.div(1e7).pow(0.3)
        player.i.pureenergytoget = player.i.pureenergytoget.mul(buyableEffect("i", 23))
        player.i.pureenergytoget = player.i.pureenergytoget.mul(player.i.superpureenergyeffect)
        player.i.pureenergytoget = player.i.pureenergytoget.mul(player.i.celestialenergyeffect)
        if (player.i.pureenergy.gte(player.i.bestpureenergy)) player.i.bestpureenergy = player.i.pureenergy
        if (player.i.currentenergizer.eq(4)) player.i.pureenergy = player.i.pureenergy.add(player.i.pureenergytoget.mul(delta))

        if (player.i.generatorenergy.gte(player.i.bestgeneratorenergy)) player.i.bestgeneratorenergy = player.i.generatorenergy
        player.i.generatorenergypersecond = buyableEffect("i", 16)
        player.i.generatorenergypersecond = player.i.generatorenergypersecond.mul(buyableEffect("i", 21))
        player.i.generatorenergypersecond = player.i.generatorenergypersecond.mul(buyableEffect("i", 23))
        player.i.generatorenergypersecond = player.i.generatorenergypersecond.mul(player.i.celestialenergyeffect)
        player.i.generatorenergy = player.i.generatorenergy.add(player.i.generatorenergypersecond.mul(delta))

        if (player.i.boosterenergy.gte(player.i.bestboosterenergy)) player.i.bestboosterenergy = player.i.boosterenergy
        player.i.boosterenergypersecond = buyableEffect("i", 17)
        player.i.boosterenergypersecond = player.i.boosterenergypersecond.mul(buyableEffect("i", 22))
        player.i.boosterenergypersecond = player.i.boosterenergypersecond.mul(buyableEffect("i", 23))
        player.i.boosterenergypersecond = player.i.boosterenergypersecond.mul(player.i.celestialenergyeffect)
        player.i.boosterenergy = player.i.boosterenergy.add(player.i.boosterenergypersecond.mul(delta))

        player.i.generatorenergyeffect = player.i.generatorenergy.pow(0.3).add(1)
        player.i.boosterenergyeffect = player.i.boosterenergy.pow(0.4).add(1)

        if (player.energizerscene.eq(16)) {
            player.energizercutscene = new Decimal(0)
            player.inreddiamondcutscene = new Decimal(0)
        }
        if (player.energizerscene.gt(0) && player.energizercutscene.eq(1))
        {
            player.inreddiamondcutscene = new Decimal(1)
        }

        if (player.i.machineautomode.eq(1) && player.i.prestigepoints.gte(player.i.prestigemachinereq))
        {
            player.i.prestigemachines = player.i.prestigemachines.add(1)
        }
        if (player.i.machineautomode.eq(2) && player.i.prestigepoints.gte(player.i.prestigemachinereq) && player.i.prestigemachines.lt(player.i.corruptiondelay))
        {
            player.i.prestigemachines = player.i.prestigemachines.add(1)
        } 

        if (player.superifierscene.eq(19)) {
            player.superifiercutscene = new Decimal(0)
            player.inreddiamondcutscene = new Decimal(0)
        }
        if (player.superifierscene.gt(0) && player.superifiercutscene.eq(1))
        {
            player.inreddiamondcutscene = new Decimal(1)
        }

        player.i.superpointstoget = player.points.pow(0.085)
        player.i.superpointstoget = player.i.superpointstoget.mul(player.i.hindranceenergyeffect)
        player.i.superpointseffect = player.i.superpoints.pow(0.4).add(1)
        if (hasUpgrade("i", 34)) player.i.superpoints = player.i.superpoints.add(player.i.superpointstoget.mul(0.25).mul(delta))

        player.i.superprestigeenergytoget = player.i.prestigeenergy.pow(0.2)
        player.i.superprestigeenergytoget = player.i.superprestigeenergytoget.mul(player.i.hindranceenergyeffect)
        player.i.superprestigeenergyeffect = player.i.superprestigeenergy.pow(0.5).add(1)
        if (hasUpgrade("i", 34)) player.i.superprestigeenergy = player.i.superprestigeenergy.add(player.i.superprestigeenergytoget.mul(0.25).mul(delta))

        player.i.superpureenergytoget = player.i.pureenergy.pow(0.12)
        player.i.superpureenergytoget = player.i.superpureenergytoget.mul(player.i.hindranceenergyeffect)
        player.i.superpureenergyeffect = player.i.superpureenergy.pow(0.35).add(1)
        if (hasUpgrade("i", 34)) player.i.superpureenergy = player.i.superpureenergy.add(player.i.superpureenergytoget.mul(0.25).mul(delta))

        if (player.ce308scene.eq(44)) {
            player.ce308cutscene = new Decimal(0)
            player.inartiscutscene = new Decimal(0)
            player.injacorbcutscene = new Decimal(0)
            player.inaarexcutscene = new Decimal(0)
            player.inreddiamondcutscene = new Decimal(0)
        }
        if (player.ce308scene.gt(0) && player.ce308cutscene.eq(1))
        {
            if (player.ce308scene.lt(9))
            {
                player.crafting2scene = new Decimal(11)
                player.inartiscutscene = new Decimal(1)
                player.injacorbcutscene = new Decimal(0)
                player.inaarexcutscene = new Decimal(0)
                player.inreddiamondcutscene = new Decimal(0)
            }
            if (player.ce308scene.gte(9) && player.ce308scene.lt(17))
            {
                player.beaconscene = new Decimal(333)
                player.boosterscene = new Decimal(333)
                player.enhancescene = new Decimal(333)
                player.spacescene = new Decimal(333)
                player.inartiscutscene = new Decimal(0)
                player.injacorbcutscene = new Decimal(1)
                player.inaarexcutscene = new Decimal(0)
                player.inreddiamondcutscene = new Decimal(0)
            }
            if (player.ce308scene.gte(17) && player.ce308scene.lt(30))
            {
                player.timescene = new Decimal(333)
                player.inartiscutscene = new Decimal(0)
                player.injacorbcutscene = new Decimal(0)
                player.inaarexcutscene = new Decimal(1)
                player.inreddiamondcutscene = new Decimal(0)
            }
            if (player.ce308scene.gte(30) && player.ce308scene.lt(44))
            {
                player.timescene = new Decimal(333)
                player.inartiscutscene = new Decimal(0)
                player.injacorbcutscene = new Decimal(0)
                player.inaarexcutscene = new Decimal(0)
                player.inreddiamondcutscene = new Decimal(1)
            }
        }
        if (player.ce308unlockscene.eq(27)) {
            player.ce308unlockcutscene = new Decimal(0)
            player.ince308cutscene = new Decimal(0)
        }
        if (player.ce308unlockscene.gt(0) && player.ce308unlockcutscene.eq(1))
        {
            player.ince308cutscene = new Decimal(1)
        }
        
        player.i.celestialenergytoget = player.i.pureenergy.div(1e6).pow(0.14)
        player.i.celestialenergytoget = player.i.celestialenergytoget.mul(buyableEffect("i", 24))
        if (hasUpgrade("i", 32)) player.i.celestialenergytoget = player.i.celestialenergytoget.mul(upgradeEffect("i", 32))
        player.i.celestialenergytoget = player.i.celestialenergytoget.mul(player.i.energytaskeffect)
        player.i.celestialenergytoget = player.i.celestialenergytoget.mul(buyableEffect("i", 35))
        player.i.celestialenergytoget = player.i.celestialenergytoget.mul(buyableEffect("i", 36))
        player.i.celestialenergytoget = player.i.celestialenergytoget.mul(buyableEffect("i", 37))
        player.i.celestialenergytoget = player.i.celestialenergytoget.mul(buyableEffect("i", 38))

        player.i.celestialenergyeffect = player.i.celestialenergy.pow(1.6).add(1)

        if (player.i.celestialenergypause.gt(0)) {
            layers.i.celestialenergyreset();
        }
        player.i.celestialenergypause = player.i.celestialenergypause.sub(1)
        if (player.i.celestialenergy.gte(player.i.bestcelestialenergy)) player.i.bestcelestialenergy = player.i.celestialenergy

        if (player.quirkenergyscene.eq(15)) {
            player.quirkenergycutscene = new Decimal(0)
            player.ince308cutscene = new Decimal(0)
        }
        if (player.quirkenergyscene.gt(0) && player.quirkenergycutscene.eq(1))
        {
            player.ince308cutscene = new Decimal(1)
        }

        if (!hasUpgrade("i", 29)) player.i.quirkenergypersecond = new Decimal(0)
        if (hasUpgrade("i", 29)) player.i.quirkenergypersecond = player.c.quirklayers.pow(1.75)
        player.i.quirkenergypersecond = player.i.quirkenergypersecond.mul(buyableEffect("i", 25))
        player.i.quirkenergypersecond = player.i.quirkenergypersecond.mul(player.i.quirkradiationeffect)

        player.i.quirkenergy = player.i.quirkenergy.add(player.i.quirkenergypersecond.mul(delta))
        player.i.quirkenergyeffect = player.i.quirkenergy.pow(1.4).add(1)

        if (player.taskscene.eq(18)) {
            player.taskcutscene = new Decimal(0)
            player.ince308cutscene = new Decimal(0)
        }
        if (player.taskscene.gt(0) && player.taskcutscene.eq(1))
        {
            player.ince308cutscene = new Decimal(1)
        }

        //task
        if (!hasUpgrade("i", 35)) player.i.energytaskeffect = new Decimal(1)
        if (hasUpgrade("i", 35)) player.i.energytaskeffect = player.m.energytask.mul(2).pow(2).add(1)

        if (!hasUpgrade("i", 35)) player.i.metataskeffect = new Decimal(1)
        if (hasUpgrade("i", 35)) player.i.metataskeffect = player.m.metatask.add(1)

        if (!hasUpgrade("i", 35)) player.i.challengetaskeffect = new Decimal(1)
        if (hasUpgrade("i", 35)) player.i.challengetaskeffect = player.m.challengetask.mul(2).pow(8).add(1)

        if (!hasUpgrade("i", 35)) player.i.craftingtaskeffect = new Decimal(1)
        if (hasUpgrade("i", 35)) player.i.craftingtaskeffect = player.m.craftingtask.mul(0.5).add(1)

        //radiation
        if (!hasUpgrade("i", 29)) player.i.quirkradiationpersecond = new Decimal(0)
        if (hasUpgrade("i", 29)) player.i.quirkradiationpersecond = player.c.quirkstars.pow(1.5)

        player.i.quirkradiation = player.i.quirkradiation.add(player.i.quirkradiationpersecond.mul(delta))
        player.i.quirkradiationeffect = player.i.quirkradiation.pow(0.35).add(1)

        if (player.hindranceenergyscene.eq(22)) {
            player.hindranceenergycutscene = new Decimal(0)
            player.ince308cutscene = new Decimal(0)
        }
        if (player.hindranceenergyscene.gt(0) && player.hindranceenergycutscene.eq(1))
        {
            player.beaconpointscene = new Decimal(18)
            player.ince308cutscene = new Decimal(1)
        }

        player.i.hindranceenergy = player.i.hindranceenergy.add(player.i.hindranceenergypersecond.mul(delta))
        player.i.hindranceenergyeffect = player.i.hindranceenergy.pow(0.55).add(1)
        player.i.hindranceenergypersecond = buyableEffect("i", 26)
        player.i.hindranceenergypersecond = player.i.hindranceenergypersecond.mul(buyableEffect("i", 27))
        player.i.hindranceenergypersecond = player.i.hindranceenergypersecond.mul(buyableEffect("i", 28))
        player.i.hindranceenergypersecond = player.i.hindranceenergypersecond.mul(buyableEffect("i", 29))
        player.i.hindranceenergypersecond = player.i.hindranceenergypersecond.mul(buyableEffect("i", 31))
        player.i.hindranceenergypersecond = player.i.hindranceenergypersecond.mul(buyableEffect("i", 32))
        player.i.hindranceenergypersecond = player.i.hindranceenergypersecond.mul(buyableEffect("i", 33))
        player.i.hindranceenergypersecond = player.i.hindranceenergypersecond.mul(buyableEffect("i", 34))
        player.i.hindranceenergypersecond = player.i.hindranceenergypersecond.mul(player.i.hindrancepointseffect)
        if (hasUpgrade("i", 41)) player.i.hindranceenergypersecond = player.i.hindranceenergypersecond.mul(upgradeEffect("i", 41))

        player.i.hindrancepointstoget = player.i.hindranceenergy.pow(0.12)
        player.i.hindrancepointseffect = player.i.hindrancepoints.mul(10).pow(0.8).add(1)

        if (player.i.hindrancepointpause.gt(0)) {
            layers.i.hindrancereset();
        }
        player.i.hindrancepointpause = player.i.hindrancepointpause.sub(1)

        if (player.puremachinescene.eq(17)) {
            player.puremachinecutscene = new Decimal(0)
            player.ince308cutscene = new Decimal(0)
        }
        if (player.puremachinescene.gt(0) && player.puremachinecutscene.eq(1))
        {
            player.ince308cutscene = new Decimal(1)
        }

        player.i.puremachinespersecond = player.m.sacrificedincrementalpower.pow(0.6).div(100000)
        player.i.puremachinespersecond = player.i.puremachinespersecond.mul(buyableEffect("h", 32))
        player.i.puremachines = player.i.puremachines.add(player.i.puremachinespersecond.mul(delta))

        if (player.ce308bossscene.eq(52)) {
            player.ce308bosscutscene = new Decimal(0)
        }
        if (player.ce308bossscene.eq(51)) {
            player.i.ce308bossactivate = new Decimal(1)
        }
        if (player.ce308bossscene.gte(50) && player.ce308bosscutscene.eq(1))
        {
            player.inconfrontcutscene = new Decimal(0)
            player.ince308cutscene = new Decimal(0)
            player.playdotpm = new Decimal(1)
            player.injacorbcutscene = new Decimal(0)
            player.inaarexcutscene = new Decimal(0)
            player.inreddiamondcutscene = new Decimal(0)
            player.inartiscutscene = new Decimal(0)
            player.inchapter1ending = new Decimal(0)
        }
        if (player.ce308bossscene.gte(7) && player.ce308bossscene.lt(50) && player.ce308bosscutscene.eq(1))
        {
            player.playdotpm = new Decimal(0)
            player.inconfrontcutscene = new Decimal(1)
            player.ince308cutscene = new Decimal(0)
            player.injacorbcutscene = new Decimal(0)
            player.inaarexcutscene = new Decimal(0)
            player.inreddiamondcutscene = new Decimal(0)
            player.inartiscutscene = new Decimal(0)
            player.playdotpm = new Decimal(0)
            player.inchapter1ending = new Decimal(0)
        }
        if (player.ce308bossscene.gt(0) && player.ce308bossscene.lte(6) && player.ce308bosscutscene.eq(1))
        {
            player.ince308cutscene = new Decimal(1)
            player.inconfrontcutscene = new Decimal(0)
            player.injacorbcutscene = new Decimal(0)
            player.inaarexcutscene = new Decimal(0)
            player.inreddiamondcutscene = new Decimal(0)
            player.inartiscutscene = new Decimal(0)
            player.playdotpm = new Decimal(0)
            player.inchapter1ending = new Decimal(0)
        }
    

        //bossfight

        player.i.healthdrain = player.i.bestpureenergy.plus(1).log10().div(70)
        if (player.i.ce308bossactivate.eq(1) && player.i.playerdead.eq(0) && player.i.beatce308.eq(0) && player.ce308bosscutscene.eq(0))
        {
            player.i.playerhealth = player.i.playerhealth.sub(player.i.healthdrain.mul(delta))
            player.i.yellowattacktimer = player.i.yellowattacktimer.add(onepersec.mul(delta))
            player.i.greenhealtimer = player.i.greenhealtimer.add(onepersec.mul(delta))
            if (player.i.yellowattacktimer.gte(2))
            {
                for (let i = 0; i < 3; i++) {
                    createBouncingCircle();
                  }
                player.i.yellowattacktimer = new Decimal(0)
            }
            if (player.i.greenhealtimer.gte(4))
            {
                spawnGreenCircle();
                player.i.greenhealtimer = new Decimal(0)
            }

            if (player.i.playerhealth.lte(0))
            {
                player.i.playerdead = new Decimal(1)
                player.playdotpm = new Decimal(0)
            }
            if (player.i.truemachines.gte(1000000))
            {
                player.i.beatce308 = new Decimal(1)
                player.defeatedce308 = new Decimal(1)
                player.playdotpm = new Decimal(0)
            }
            if (player.i.playerhealth.gte(250))
            {
                player.i.playerhealth = new Decimal(250)
            }

            player.i.truemachinespersecond = player.m.sacrificedincrementalpower.pow(0.4).div(333)
            player.i.truemachinespersecond = player.i.truemachinespersecond.mul(buyableEffect("i", 39))
            player.i.truemachinespersecond = player.i.truemachinespersecond.mul(buyableEffect("i", 41))      
            player.i.truemachinespersecond = player.i.truemachinespersecond.mul(buyableEffect("i", 42))
            player.i.truemachines = player.i.truemachines.add(player.i.truemachinespersecond.mul(delta))
        }
        player.i.scrapmetaltoget = player.i.prestigemachines.add(100).pow(0.4).mul(3).mul(player.i.beatce308).floor().mul(2).mul(player.i.nohitce308)
        player.i.wirestoget = player.i.bestprestigeenergy.add(1e10).slog().pow(4.5).mul(2).mul(player.i.beatce308).floor().mul(2).mul(player.i.nohitce308)
        player.i.enhancepowdertoget = player.i.buyables[23].add(10).pow(0.5).mul(4).mul(player.i.beatce308).floor().mul(2).mul(player.i.nohitce308)

        if (player.ce308defeatscene.gte(70) && player.ce308defeatcutscene.eq(1))
        {
            player.ince308cutscene = new Decimal(0)
            player.inconfrontcutscene = new Decimal(0)
            player.inchapter1ending = new Decimal(0)
            player.inartiscutscene = new Decimal(0)
            player.ce308defeatcutscene = new Decimal(0)
        }
        if (player.ce308defeatscene.gte(62) && player.ce308defeatcutscene.eq(1))
        {
            player.ince308cutscene = new Decimal(0)
            player.inconfrontcutscene = new Decimal(0)
            player.inchapter1ending = new Decimal(1)
            player.inartiscutscene = new Decimal(0)
        }
        if (player.ce308defeatscene.gte(50) && player.ce308defeatscene.lt(62) && player.ce308defeatcutscene.eq(1))
        {
            player.ince308cutscene = new Decimal(0)
            player.inconfrontcutscene = new Decimal(0)
            player.inchapter1ending = new Decimal(0)
            player.inartiscutscene = new Decimal(1)
        }
        if (player.ce308defeatscene.gte(11) && player.ce308defeatscene.lt(50) && player.ce308defeatcutscene.eq(1))
        {
            player.inartiscutscene = new Decimal(0)
            player.ince308cutscene = new Decimal(0)
            player.inconfrontcutscene = new Decimal(0)
            player.inchapter1ending = new Decimal(1)
        }
        if (player.ce308defeatscene.gt(0) && player.ce308defeatscene.lt(11) && player.ce308defeatcutscene.eq(1))
        {
            player.ince308cutscene = new Decimal(1)
            player.inconfrontcutscene = new Decimal(1)
        }
        if (player.ce308defeatscene.eq(0) && player.ce308defeatcutscene.eq(1))
        {
            player.ince308cutscene = new Decimal(0)
            player.inconfrontcutscene = new Decimal(0)
            player.inchapter1ending = new Decimal(0)
        }

        //END OF STANDARD PATH

        //ENHANCE PATH
        let enhanceloss = new Decimal(0)
        if (player.i.enhancedprestigepoints.gt(0)) enhanceloss = player.i.enhancedprestigepoints.mul(0.1)
        if (player.i.enhancedprestigepoints.lt(0.00001)) enhanceloss = new Decimal(0)
        if (hasUpgrade("i", 109)) player.i.enhancedprestigepoints = player.i.enhancedprestigepoints.add(player.i.prestigepoints.mul(0.1).mul(delta))
        
        player.i.enhancepoints = player.i.enhancepoints.add(player.i.enhancepointspersecond.mul(delta))
        
        player.i.enhancepointseffect = player.i.enhancepoints.pow(0.5).add(1)

        player.i.enhancepointspersecond = player.i.enhancedprestigepoints.div(3e6).pow(0.25)
        player.i.enhancepointspersecond = player.i.enhancepointspersecond.mul(buyableEffect("i", 104))
        player.i.enhancedprestigepoints = player.i.enhancedprestigepoints.sub(enhanceloss.mul(delta))
        player.i.enhancepointspersecond = player.i.enhancepointspersecond.mul(buyableEffect("i", 107))
        player.i.enhancepointspersecond = player.i.enhancepointspersecond.mul(player.m.enhancepointperk)
        player.i.enhancepointspersecond = player.i.enhancepointspersecond.mul(player.i.sacrificedeternityeffect)

        if (player.i.enhancepoints.gte(player.i.bestenhancepoints)) player.i.bestenhancepoints = player.i.enhancepoints

        if (player.i.enhancedprestigepoints.lt(0))
        {
            player.i.enhancedprestigepoints = new Decimal(0)
        }

        if (player.beaconscene.eq(11)) {
            player.beaconcutscene = new Decimal(0)
            player.injacorbcutscene = new Decimal(0)
        }
        if (player.beaconscene.gt(0) && player.beaconcutscene.eq(1))
        {
            player.injacorbcutscene = new Decimal(1)
        }

        player.i.enhancebeaconreq = player.i.enhancebeaconlevel.pow(2).add(1).mul(10)

        if (player.i.enhancebeacontoggle.eq(0)) player.i.beaconpowerpersecond = new Decimal(0)
        if (player.i.enhancebeacontoggle.eq(1)) player.i.beaconpowerpersecond = player.i.enhancebeaconlevel
        player.i.beaconpowerpersecond = player.i.beaconpowerpersecond.mul(buyableEffect("i", 118))
        player.i.beaconpower = player.i.beaconpower.add(player.i.beaconpowerpersecond.mul(delta))

        player.i.beaconpowerreq = new Decimal(25)
        player.i.beaconpowerreq = player.i.beaconpowerreq.mul(player.i.quirkimprovementeffect)
        player.i.beaconpowerreq = player.i.beaconpowerreq.mul(player.i.jacorbianruneseffect2)
        player.i.incrementalpowergain = new Decimal(0.3)
        if (hasUpgrade("m", 31)) player.i.incrementalpowergain = player.i.incrementalpowergain.mul(2)
        if (player.i.beaconpower.gt(player.i.beaconpowerreq) && player.i.injacorbianbalancing.eq(0))
        {
            player.m.points = player.m.points.add(player.m.score.mul(player.i.incrementalpowergain))
            player.i.beaconpower = new Decimal(0)
            if (hasUpgrade("m", 18)) player.i.metaprestigetime = player.i.metaprestigetime.add(10)
            if (hasUpgrade("i", 105)) player.i.beaconpoints = player.i.beaconpoints.add(player.i.beaconpointstoget)
        }
        if (player.i.beaconpower.gt(player.i.beaconpowerreq) && player.i.injacorbianbalancing.eq(1))
        {
            player.m.points = player.m.points.sub(player.i.jacorbincrementalpowerloss)
            player.i.jacorbianenergy = player.i.jacorbianenergy.add(player.i.jacorbianenergytoget)
            player.i.beaconpower = new Decimal(0)
            if (hasUpgrade("m", 18)) player.i.metaprestigetime = player.i.metaprestigetime.add(10)
            if (hasUpgrade("i", 105)) player.i.beaconpoints = player.i.beaconpoints.add(player.i.beaconpointstoget)
        }

        if (player.beaconpointscene.eq(17)) {
            player.beaconpointcutscene = new Decimal(0)
            player.ince308cutscene = new Decimal(0)
        }
        if (player.beaconpointscene.gt(0) && player.beaconpointcutscene.eq(1))
        {
            player.ince308cutscene = new Decimal(1)
        }

        if (hasUpgrade("i", 111)) player.i.beaconpoints = player.i.beaconpoints.add(player.i.beaconpointstoget.mul(0.1).mul(delta))
        player.i.beaconpointstoget = player.i.enhancepoints.div(100).pow(0.8)
        player.i.beaconpointstoget = player.i.beaconpointstoget.mul(player.i.quirkeffect)
        player.i.beaconpointstoget = player.i.beaconpointstoget.mul(player.i.quirkimprovementeffect)
        player.i.beaconpointstoget = player.i.beaconpointstoget.mul(player.m.beaconpointperk)
        if (player.i.beaconpoints.gte(player.i.bestbeaconpoints)) player.i.bestbeaconpoints = player.i.beaconpoints

        //Enhance Extension
        if (player.enhancequirkscene.eq(16)) {
            player.enhancequirkcutscene = new Decimal(0)
            player.injacorbcutscene = new Decimal(0)
        }
        if (player.enhancequirkscene.gt(0) && player.enhancequirkcutscene.eq(1))
        {
            player.injacorbcutscene = new Decimal(1)
        }

        //Quirky
        player.i.quirkstoget = player.i.enhancepoints.div(25).pow(0.25).div(2.5)
        player.i.quirkstoget = player.i.quirkstoget.mul(player.i.quirklayerboost)
        player.i.quirkstoget = player.i.quirkstoget.mul(player.i.quirkstarboost)
        player.i.quirkstoget = player.i.quirkstoget.mul(player.m.quirkperk)
        player.i.quirklayerboost = player.c.quirklayers.div(100).add(1)
        player.i.quirkstarboost = player.c.quirkstars.div(50).add(1)
        player.i.quirkstoget = player.i.quirkstoget.mul(player.i.sacrificedrealityeffect)
        player.i.quirkstoget = player.i.quirkstoget.mul(player.i.superquirkseffect)

        player.i.quirkeffect = player.i.quirks.pow(0.75).add(1)

        if (player.i.quirkpause.gt(0)) {
            layers.i.quirkreset();
        }
        player.i.quirkpause = player.i.quirkpause.sub(1)

        //improvements
        player.i.quirkimprovementeffect = player.i.buyables[105].add(player.i.buyables[106].add(player.i.buyables[107])).pow(1.75).add(1)

        if (player.i.enhancepoints.gte(player.i.enhancebeaconreq) && hasUpgrade("i", 108))
        {
            player.i.enhancebeaconlevel = player.i.enhancebeaconlevel.add(upgradeEffect("i", 108).mul(delta))
        }

        //JACORBIAN BALANCING !!!!
        if (player.jacorbbalancingscene.eq(22)) {
            player.jacorbbalancingcutscene = new Decimal(0)
            player.injacorbcutscene = new Decimal(0)
        }
        if (player.jacorbbalancingscene.gt(0) && player.jacorbbalancingcutscene.eq(1))
        {
            player.injacorbcutscene = new Decimal(1)
        }

        if (player.i.injacorbianbalancing.eq(1) && player.dimensionalrealm.eq(0) && options.toggleParticle) {
            makeParticles(jacorbparticle, 1)
        }

        player.i.jacorbianenergytoget = player.m.score.sqrt().div(10)
        player.i.jacorbianenergytoget = player.i.jacorbianenergytoget.mul(buyableEffect("h", 38))
        player.i.jacorbianenergytoget = player.i.jacorbianenergytoget.mul(buyableEffect("i", 108))
        player.i.jacorbianenergytoget = player.i.jacorbianenergytoget.mul(buyableEffect("i", 109))
        player.i.jacorbianenergytoget = player.i.jacorbianenergytoget.mul(player.i.sacrificedspaceoneffect)
        player.i.jacorbianenergytoget = player.i.jacorbianenergytoget.mul(buyableEffect("i", 116))
        player.i.jacorbianenergytoget = player.i.jacorbianenergytoget.mul(player.i.jacorbianruneseffect)
        player.i.jacorbianenergytoget = player.i.jacorbianenergytoget.mul(buyableEffect("h", 75))

        if (player.i.injacorbianbalancing.eq(1))
        {
            player.i.enhancebeacontoggle = new Decimal(1)
        }

        player.i.jacorbincrementalpowerloss = player.m.points.div(1000)

        //altar

        if (player.altarscene.eq(9)) {
            player.altarcutscene = new Decimal(0)
            player.injacorbcutscene = new Decimal(0)
        }
        if (player.altarscene.gt(0) && player.altarcutscene.eq(1))
        {
            player.injacorbcutscene = new Decimal(1)
        }

        player.i.altaramount = Math.abs(Math.round(player.i.altaramountinput))

        player.i.sacrificedspaceoneffect = player.i.sacrificedspaceon.pow(0.3).mul(2).add(1)
        player.i.sacrificedsolariseffect = player.i.sacrificedsolaris.pow(1.1).add(1)
        player.i.sacrificedinfinityeffect = player.i.sacrificedinfinity.pow(0.7).add(1)
        player.i.sacrificedeternityeffect = player.i.sacrificedeternity.pow(0.75).add(1)
        player.i.sacrificedrealityeffect = player.i.sacrificedreality.pow(0.55).add(1)
        player.i.sacrificeddrigganizeffect = player.i.sacrificeddrigganiz.pow(0.2).div(6).add(1)

        //runes
        player.i.jacorbianrunestoget = player.i.jacorbianenergy.pow(0.4).div(100)
        player.i.jacorbianrunestoget = player.i.jacorbianrunestoget.mul(buyableEffect("h", 76))
        
        player.i.jacorbianruneseffect = player.i.jacorbianrunes.pow(0.6).div(3).add(1)
        player.i.jacorbianruneseffect2 = player.i.jacorbianrunes.pow(0.8).div(2).add(1)

        if (player.translatorscene.eq(15)) {
            player.translatorcutscene = new Decimal(0)
            player.inreddiamondcutscene = new Decimal(0)
        }
        if (player.translatorscene.gt(0) && player.translatorcutscene.eq(1))
        {
            player.inreddiamondcutscene = new Decimal(1)
        }

        player.i.superquirkspersecond = player.i.preservedquirkenergy.pow(0.4).div(500)
        player.i.superquirkseffect = player.i.superquirks.pow(0.35).add(1)
        player.i.superquirks = player.i.superquirks.add(player.i.superquirkspersecond.mul(delta))

        //SITRA
        if (player.sitraunlockscene.eq(23)) {
            player.sitraunlockcutscene = new Decimal(0)
            player.insitracutscene = new Decimal(0)
        }
        if (player.sitraunlockscene.gt(0) && player.sitraunlockcutscene.eq(1))
        {
            player.insitracutscene = new Decimal(1)
        }

        if (player.i.sitraunlock.eq(1) && player.dimensionalrealm.eq(0) && options.toggleParticle)
        {
            startRain();
        }
        else
        {
            stopRain();
        }

        if (player.i.sitraunlock.eq(1) && player.celestialflashbackcutscene.eq(1))
        {
            player.tab = "cu"
        }
        if (player.celestialflashbackscene.eq(27))
        {
            player.celestialflashbackcutscene = new Decimal(0)
            player.tab = "i"
            player.celestialflashbackscene = new Decimal(28)
        }
    },
    prestigereset()
    {
        player.points = new Decimal(1)
        player.i.prestigeenergy = new Decimal(0)

        player.i.buyables[11] = new Decimal(0)
        player.i.buyables[12] = new Decimal(0)
        player.i.buyables[13] = new Decimal(0)
    }, 
    pureenergyreset()
    {
        if (player.i.standardpath.eq(1)) {
        if (!hasUpgrade("i", 15)) {
        for (let i = 0; i < player.i.upgrades.length; i++) {
            if (+player.i.upgrades[i] < 14) {
                player.i.upgrades.splice(i, 1);
                i--;
            }
        }
        }
        player.points = new Decimal(1)
        player.i.prestigeenergy = new Decimal(0)
        player.i.prestigepoints = new Decimal(0)
        player.i.prestigemachines = new Decimal(0)
        player.i.generatorenergy = new Decimal(0)
        player.i.boosterenergy = new Decimal(0)

        player.i.buyables[11] = new Decimal(0)
        player.i.buyables[12] = new Decimal(0)
        player.i.buyables[13] = new Decimal(0)
        player.i.buyables[14] = new Decimal(0)
        player.i.buyables[15] = new Decimal(0)

        player.i.currentenergizer = player.i.nextenergizer
    }
    }, 
    celestialenergyreset()
    {
        if (player.i.standardpath.eq(1)) {
        if (!hasUpgrade("i", 33)) {
        for (let i = 0; i < player.i.upgrades.length; i++) {
            if (+player.i.upgrades[i] < 27) {
                player.i.upgrades.splice(i, 1);
                i--;
            }
        }
        }
        player.points = new Decimal(1)
        player.i.prestigeenergy = new Decimal(0)
        player.i.prestigepoints = new Decimal(0)
        player.i.prestigemachines = new Decimal(0)
        player.i.generatorenergy = new Decimal(0)
        player.i.boosterenergy = new Decimal(0)

        player.i.buyables[11] = new Decimal(0)
        player.i.buyables[12] = new Decimal(0)
        player.i.buyables[13] = new Decimal(0)
        player.i.buyables[14] = new Decimal(0)
        player.i.buyables[15] = new Decimal(0)
        player.i.buyables[16] = new Decimal(0)
        player.i.buyables[17] = new Decimal(0)
        player.i.buyables[18] = new Decimal(0)
        player.i.buyables[19] = new Decimal(0)
        player.i.buyables[21] = new Decimal(0)
        player.i.buyables[22] = new Decimal(0)
        player.i.buyables[23] = new Decimal(0)

        player.i.pureenergy = new Decimal(0)
        player.i.generatorenergy = new Decimal(0)
        player.i.boosterenergy = new Decimal(0)

        if (!hasUpgrade("i", 36))
        {
        player.i.machineautomode = new Decimal(0)
        }

        //ENERGIZERS
        if (!hasUpgrade("i", 31))
        {
        player.i.nextenergizer = new Decimal(0)
        player.i.currentenergizer = new Decimal(0)
        }

        //Super
        player.i.superpoints = new Decimal(0)
        player.i.superprestigeenergy = new Decimal(0)
        player.i.superpureenergy = new Decimal(0)
    }
    }, 
    hindrancereset()
    {
        if (player.i.standardpath.eq(1)) {
        if (!hasUpgrade("i", 33)) {
        for (let i = 0; i < player.i.upgrades.length; i++) {
            if (+player.i.upgrades[i] < 27) {
                player.i.upgrades.splice(i, 1);
                i--;
            }
        }
        }
        player.points = new Decimal(1)
        player.i.prestigeenergy = new Decimal(0)
        player.i.prestigepoints = new Decimal(0)
        player.i.prestigemachines = new Decimal(0)
        player.i.generatorenergy = new Decimal(0)
        player.i.boosterenergy = new Decimal(0)

        player.i.buyables[11] = new Decimal(0)
        player.i.buyables[12] = new Decimal(0)
        player.i.buyables[13] = new Decimal(0)
        player.i.buyables[14] = new Decimal(0)
        player.i.buyables[15] = new Decimal(0)
        player.i.buyables[16] = new Decimal(0)
        player.i.buyables[17] = new Decimal(0)
        player.i.buyables[18] = new Decimal(0)
        player.i.buyables[19] = new Decimal(0)
        player.i.buyables[21] = new Decimal(0)
        player.i.buyables[22] = new Decimal(0)
        player.i.buyables[23] = new Decimal(0)

        player.i.pureenergy = new Decimal(0)
        player.i.generatorenergy = new Decimal(0)
        player.i.boosterenergy = new Decimal(0)

        if (!hasUpgrade("i", 36))
        {
        player.i.machineautomode = new Decimal(0)
        }

        //ENERGIZERS
        if (!hasUpgrade("i", 31))
        {
        player.i.nextenergizer = new Decimal(0)
        player.i.currentenergizer = new Decimal(0)
        }

        //Super
        player.i.superpoints = new Decimal(0)
        player.i.superprestigeenergy = new Decimal(0)
        player.i.superpureenergy = new Decimal(0)

        player.i.celestialenergy = new Decimal(0)
        player.i.hindranceenergy = new Decimal(0)
        player.i.buyables[26] = new Decimal(0)
        player.i.buyables[27] = new Decimal(0)
        player.i.buyables[28] = new Decimal(0)
        player.i.buyables[29] = new Decimal(0)
        player.i.buyables[31] = new Decimal(0)
        player.i.buyables[32] = new Decimal(0)
        player.i.buyables[33] = new Decimal(0)
        player.i.buyables[34] = new Decimal(0)
    }
    }, 
    quirkreset()
    {
        player.points = new Decimal(1)
        player.i.prestigeenergy = new Decimal(0)
        player.i.prestigepoints = new Decimal(0)

        //Enhance
        player.i.enhancepoints = new Decimal(0)
        player.i.enhancedprestigepoints = new Decimal(0)

        //Beacon
        player.i.enhancebeaconlevel = new Decimal(0)
        player.i.beaconpower = new Decimal(0)

        //Beacon Points
        player.i.beaconpoints = new Decimal(0)

        player.i.buyables[11] = new Decimal(0)
        player.i.buyables[12] = new Decimal(0)
        player.i.buyables[13] = new Decimal(0)
        player.i.buyables[14] = new Decimal(0)
        player.i.buyables[101] = new Decimal(0)
        player.i.buyables[102] = new Decimal(0)
        player.i.buyables[103] = new Decimal(0)
        player.i.buyables[104] = new Decimal(0)
    }, 
    clickables: {
        11: {
            title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);he t:calc(80%);margin:10%'></img>" },
            canClick() { return player.prestigecutscene.eq(1) },
            unlocked() { return player.prestigescene.neq(7) },
            onClick() {
                player.prestigescene = player.prestigescene.add(1)
            },
        },
        12: {
            title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.prestigecutscene.eq(1) },
            unlocked() { return player.prestigescene.neq(7) && player.prestigescene.neq(0) },
            onClick() {
                player.prestigescene = player.prestigescene.sub(1)
            },
        },
        13: {
            title() { return "<h2>Prestige for prestige points" },
            canClick() { return player.i.prestigepointstoget.gte(1) && player.points.gt(1) },
            unlocked() { return player.prestigecutscene.eq(0) },
            onClick() {
                player.i.prestigepause = new Decimal(3)
                player.i.prestigepoints = player.i.prestigepoints.add(player.i.prestigepointstoget)
            },
            style: { "background-color": "#31aeb0", width: '400px', "min-height": '100px' },
        },
        14: {
            title() { return "+" + format(player.i.prestigepointstoget) + " PP" },
            canClick() { return player.i.prestigepointstoget.gte(1) && player.points.gt(1) },
            unlocked() { return player.prestigecutscene.eq(0) && player.i.ce308bossactivate.eq(0) },
            onClick() {
                player.i.prestigepause = new Decimal(3)
                player.i.prestigepoints = player.i.prestigepoints.add(player.i.prestigepointstoget)
            },
            style: { width: '150px', "min-height": '60px', "background-color": "#31aeb0", }
        },
        15: {
            title() { return "<h1>LEARN YOUR TRUE PURPOSE (Req: 5 PP) <h3>Unlocks a new layer" },
            canClick() { return player.i.prestigepoints.gte(5) },
            unlocked() { return player.prestigecutscene.eq(0) && player.unlockedmetaprestige.eq(0) && player.i.prestigepoints.gt(2.5) },
            onClick() {
                player.unlockedmetaprestige = new Decimal(1)
                // Particle effect
                alert("Hello. As a matter of fact, you do have a purpose here.")
                alert("You are the prophesied hero of the multiverse.")
                alert("You are destined to reunite the six realms.")
                alert("You will know more later, but now is not the time.")
                createParticles();
                createParticles();
                createParticles();
            },
            style: {   background: 'linear-gradient(45deg, #8a00a9, #e52e71)',
            width: '250px',
            minHeight: '250px',
            position: 'relative',
            overflow: 'hidden', 
            boxShadow: '0 0 20px 10px rgba(138, 0, 169, 0.7)',
            textShadow: '1px 1px 2px rgba(0.8, 0.8, 0.8, 0.8)', // Text shadow
            border: '4px solid rgba(255, 255, 255, 0.3)', // Glowing border
            animation: 'shake-random 2s infinite linear', // Rotation animation
         },
        },
        16: {
            title() { return "<h2>Activate the standard path (Req: 5 PP)" },
            canClick() { return player.i.prestigepoints.gte(5) },
            unlocked() { return hasUpgrade("m", 11) && player.i.standardpath.eq(0) && player.i.enhancepath.eq(0)},
            onClick() {
                player.i.standardpath = new Decimal(1)

                for (let i = 0; i < 80; i++)
                {
                    createLightning();
                }
            },
            style: {   background: 'linear-gradient(45deg, #ffffff, #ffffaa)',
            width: '250px',
            minHeight: '125px',
            position: 'relative',
            overflow: 'hidden', 
            boxShadow: '0 0 20px 10px #ffffaa',
            textShadow: '1px 1px 2px #ffffff', // Text shadow
            border: '4px solid #ffffff', // Glowing border
         },
        },
        17: {
            title() { return "Stop Producing" },
            canClick() { return player.i.producingprestigeenergy.eq(1) },
            unlocked() { return player.i.standardpath.eq(1) },
            onClick() {
                player.i.producingprestigeenergy = new Decimal(0)
            },
        },
        18: {
            title() { return "Start Producing" },
            canClick() { return player.i.producingprestigeenergy.eq(0) },
            unlocked() { return player.i.standardpath.eq(1) },
            onClick() {
                player.i.producingprestigeenergy = new Decimal(1)
            },
        },
        19: {
            title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.machinecutscene.eq(1) },
            unlocked() { return player.machinescene.neq(22) },
            onClick() {
                player.machinescene = player.machinescene.add(1)
            },
        },
        21: {
            title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.machinecutscene.eq(1) },
            unlocked() { return player.machinescene.neq(22) && player.machinescene.neq(0) },
            onClick() {
                player.machinescene = player.machinescene.sub(1)
            },
        },
        22: {
            title() { return "<h2>Create a prestige machine." },
            canClick() { return player.i.prestigepoints.gte(player.i.prestigemachinereq) },
            unlocked() { return player.machinecutscene.eq(0) && player.i.standardpath.eq(1) },
            onClick() {
                player.i.prestigemachines = player.i.prestigemachines.add(1)
            },
            style: { "background-color": "#ffffaa", width: '400px', "min-height": '100px' },
        },
        23: {
            title() { return "<h5>" + format(player.i.prestigepoints) + "<br>/" + format(player.i.prestigemachinereq) },
            canClick() { return player.i.prestigepoints.gte(player.i.prestigemachinereq) },
            unlocked() { return player.machinecutscene.eq(0) && player.i.standardpath.eq(1) && hasUpgrade("i", 13) && player.machinecutscene.eq(0) && player.i.ce308bossactivate.eq(0) },
            onClick() {
                player.i.prestigemachines = player.i.prestigemachines.add(1)
            },
            style: { width: '150px', "min-height": '60px', "background-color": "#ffffaa" }
        },
        24: {
            title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.pureenergycutscene.eq(1) },
            unlocked() { return player.pureenergyscene.neq(16) },
            onClick() {
                player.pureenergyscene = player.pureenergyscene.add(1)
            },
        },
        25: {
            title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.pureenergycutscene.eq(1) },
            unlocked() { return player.pureenergyscene.neq(16) && player.pureenergyscene.neq(0) },
            onClick() {
                player.pureenergyscene = player.pureenergyscene.sub(1)
            },
        },
        26: {
            title() { return "<h2>Absorb your energy for pure energy." },
            canClick() { return player.i.standardpath.eq(1) && player.i.pureenergytoget.gte(1) },
            unlocked() { return player.pureenergycutscene.eq(0) },
            onClick() {
                player.i.pureenergypause = new Decimal(3)
                player.i.pureenergy = player.i.pureenergy.add(player.i.pureenergytoget)
            },
            style: { "background-color": "#ffffaa", width: '400px', "min-height": '100px' },
        },
        27: {
            title() { return "+" + format(player.i.pureenergytoget) + " PE" },
            canClick() { return player.i.standardpath.eq(1) && player.i.pureenergytoget.gte(1) },
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) && hasUpgrade("i", 14) && player.i.ce308bossactivate.eq(0) },
            onClick() {
                player.i.pureenergypause = new Decimal(3)
                player.i.pureenergy = player.i.pureenergy.add(player.i.pureenergytoget)
            },
            style: { width: '150px', "min-height": '60px', "background-color": "#ffffaa", }
        },
        28: {
            title() { return "<h2>Layer 1: Prestige <br><h3>Req: 1e10 prestige points" },
            canClick() { return player.i.prestigepoints.gte(1e10) },
            unlocked() { return player.pureenergycutscene.eq(0) && player.prestigelayer.eq(0) && player.i.standardpath.eq(1) },
            onClick() {
                player.prestigelayer = new Decimal(1)
                // Particle effect
                alert("Jacorb and Aarex. You must free them.")
                alert("You must find all the layers.")
                alert("28 is a lot, but don't worry. You will get there.")
                alert("Going through many paths, you will find each of them one by one.")
                alert("Good luck.")
                createParticles();
                createParticles();
                createParticles();
            },
            style: {   background: '#31aeb0',
            width: '300px',
            minHeight: '75px',
            position: 'relative',
            overflow: 'hidden', 
            boxShadow: '0 0 20px 10px #31aeb0',
            textShadow: '1px 1px 2px rgba(0.8, 0.8, 0.8, 0.8)', // Text shadow
            border: '4px solid rgba(255, 255, 255, 0.3)', // Glowing border
         },
        },
        29: {
            title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.energizercutscene.eq(1) },
            unlocked() { return player.energizerscene.neq(16) },
            onClick() {
                player.energizerscene = player.energizerscene.add(1)
            },
        },
        31: {
            title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.energizercutscene.eq(1) },
            unlocked() { return player.energizerscene.neq(16) && player.energizerscene.neq(0) },
            onClick() {
                player.energizerscene = player.energizerscene.sub(1)
            },
        },
        32: {
            title() { return "<img src='resources/assemblylinex.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return true },
            unlocked() { return player.energizercutscene.eq(0) && player.i.standardpath.eq(1) },
            onClick() {
                player.i.nextenergizer = new Decimal(0)
            },
        },
        33: {
            title() { return "<img src='resources/cheapmachines.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return true },
            unlocked() { return player.energizercutscene.eq(0) && player.i.standardpath.eq(1) },
            onClick() {
                player.i.nextenergizer = new Decimal(1)
            },
        },
        34: {
            title() { return "<img src='resources/strongprestigeenergy.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return true },
            unlocked() { return player.energizercutscene.eq(0) && player.i.standardpath.eq(1) },
            onClick() {
                player.i.nextenergizer = new Decimal(2)
            },
        },
        35: {
            title() { return "<h2>Layer 2: Booster <br><h3>Req: 50,000 Booster Energy" },
            canClick() { return player.i.boosterenergy.gte(50000) },
            unlocked() { return player.i.currentenergizer.eq(1) && player.prestigelayer.eq(1) && player.boosterlayer.eq(0) },
            onClick() {
                player.boosterlayer = new Decimal(1)
                // Particle effect
                alert("You have found the second layer.")
                alert("You still have a long way to go.")
                alert("Each layer is a step closer to the truth.")
                createParticles();
                createParticles();
                createParticles();
            },
            style: {   background: '#6e64c4',
            width: '300px',
            minHeight: '75px',
            position: 'relative',
            overflow: 'hidden', 
            boxShadow: '0 0 20px 10px #6e64c4',
            textShadow: '1px 1px 2px rgba(0.8, 0.8, 0.8, 0.8)', // Text shadow
            border: '4px solid rgba(255, 255, 255, 0.3)', // Glowing border
         },
        },
        36: {
            title() { return "<h2>Layer 3: Generator <br><h3>Req: 50,000 Generator Energy" },
            canClick() { return player.i.generatorenergy.gte(50000) },
            unlocked() { return player.i.currentenergizer.eq(2) && player.boosterlayer.eq(1) && player.generatorlayer.eq(0)},
            onClick() {
                player.generatorlayer = new Decimal(1)
                // Particle effect
                alert("You have found the third layer.")
                alert("You are done with the first two rows.")
                alert("The fundamental elements of the prestige tree.")
                alert("More complex layers will arise.")
                createParticles();
                createParticles();
                createParticles();
            },
            style: {   background: '#a3d9a5',
            width: '300px',
            minHeight: '75px',
            position: 'relative',
            overflow: 'hidden', 
            boxShadow: '0 0 20px 10px #a3d9a5',
            textShadow: '1px 1px 2px rgba(0.8, 0.8, 0.8, 0.8)', // Text shadow
            border: '4px solid rgba(255, 255, 255, 0.3)', // Glowing border
         },
        },
        37: {
            title() { return "Off" },
            canClick() { return true },
            unlocked() { return player.pureenergycutscene.eq(0) && player.i.standardpath.eq(1) },
            onClick() {
                player.i.machineautomode = new Decimal(0)
            },
        },
        38: {
            title() { return "On" },
            canClick() { return true },
            unlocked() { return player.pureenergycutscene.eq(0) && player.i.standardpath.eq(1) },
            onClick() {
                player.i.machineautomode = new Decimal(1)
            },
        },
        39: {
            title() { return "Until Delay" },
            canClick() { return true },
            unlocked() { return player.pureenergycutscene.eq(0) && player.i.standardpath.eq(1) },
            onClick() {
                player.i.machineautomode = new Decimal(2)
            },
        },
        41: {
            title() { return "<img src='resources/morepoints.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return true },
            unlocked() { return player.energizercutscene.eq(0) && player.i.standardpath.eq(1) && hasUpgrade("i", 19) },
            onClick() {
                player.i.nextenergizer = new Decimal(3)
            },
        },
        42: {
            title() { return "<h2>Layer 4: Enhance <br><h3>Req: 15 Enhancers" },
            canClick() { return player.i.buyables[23].gte(15) },
            unlocked() { return hasUpgrade("i", 23) && player.enhancelayer.eq(0)},
            onClick() {
                player.enhancelayer = new Decimal(1)
                // Particle effect
                alert("You have found the fourth layer.")
                alert("One of Jacorb's very first creations, enhancers.")
                alert("Of course, he added it to the third row of the prestige tree.")
                alert("Enhance points can increase really fast. (You know if you played the game)")
                alert("The strategy is to get that first. So you did.")
                createParticles();
                createParticles();
                createParticles();
            },
            style: {   background: '#b82fbd',
            width: '275px', height: '150px',
            position: 'relative',
            overflow: 'hidden', 
            boxShadow: '0 0 20px 10px #b82fbd',
            textShadow: '1px 1px 2px rgba(0.8, 0.8, 0.8, 0.8)', // Text shadow
            border: '4px solid rgba(255, 255, 255, 0.3)', // Glowing border
            },
        },
        43: {
            title() { return "<h2>Activate the enhance path <br>(Req: 1e6 PP)" },
            canClick() { return player.i.prestigepoints.gte(1e6) },
            unlocked() { return player.enhancelayer.eq(1) && player.i.standardpath.eq(0) && player.i.enhancepath.eq(0) },
            onClick() {
                generateMist(1.5)

                player.i.enhancepath = new Decimal(1)
                if (player.yhvrcutscene5.eq(0))
                {
                    alert("Welcome to the second path.")
                    alert("You will use this path often.")
                    alert("As you will be able to produce incremental power passively.")
                    alert("This path will guide you across lots of more important paths.")
                    player.yhvrcutscene5 = new Decimal(1)
                }
            },
            style: {   background: 'linear-gradient(45deg, #b82fbd, purple)',
            width: '250px',
            minHeight: '125px',
            position: 'relative',
            overflow: 'hidden', 
            boxShadow: '0 0 20px 10px #b82fbd',
            textShadow: '1px 1px 2px #b82fbd', // Text shadow
            border: '4px solid #b82fbd', // Glowing border
         },
        },
        44: {
            title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.superifiercutscene.eq(1) },
            unlocked() { return player.superifierscene.neq(19) },
            onClick() {
                player.superifierscene = player.superifierscene.add(1)
            },
        },
        45: {
            title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.superifiercutscene.eq(1) },
            unlocked() { return player.superifierscene.neq(19) && player.superifierscene.neq(0) },
            onClick() {
                player.superifierscene = player.superifierscene.sub(1)
            },
        },
        46: {
            title() { return "<h3>Superify your points." },
            canClick() { return player.i.standardpath.eq(1) && player.i.superpointstoget.gte(1) && hasUpgrade("i", 24) },
            unlocked() { return player.superifiercutscene.eq(0) },
            onClick() {
                player.i.pureenergypause = new Decimal(3)
                player.i.superpoints = player.i.superpoints.add(player.i.superpointstoget)
            },
            style: { "background-color": "white", width: '200px', "min-height": '30px' },
        },
        47: {
            title() { return "<h3>Superify your prestige energy." },
            canClick() { return player.i.standardpath.eq(1) && player.i.superpointstoget.gte(1) && hasUpgrade("i", 25) },
            unlocked() { return player.superifiercutscene.eq(0) && hasUpgrade("i", 25)},
            onClick() {
                player.i.pureenergypause = new Decimal(3)
                player.i.superprestigeenergy = player.i.superprestigeenergy.add(player.i.superprestigeenergytoget)
            },
            style: { "background-color": "#ffffaa", width: '200px', "min-height": '30px' },
        },
        48: {
            title() { return "<h3>Superify your pure energy." },
            canClick() { return player.i.standardpath.eq(1) && player.i.superpureenergytoget.gte(1) && hasUpgrade("i", 26) },
            unlocked() { return player.superifiercutscene.eq(0) && hasUpgrade("i", 26)},
            onClick() {
                player.i.pureenergypause = new Decimal(3)
                player.i.pureenergy = new Decimal(0)
                player.i.superpureenergy = player.i.superpureenergy.add(player.i.superpureenergytoget)
            },
            style: { "background-color": "#ffffaa", width: '200px', "min-height": '30px' },
        },
        49: {
            title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.ce308cutscene.eq(1) },
            unlocked() { return player.ce308scene.lt(44) },
            onClick() {
                player.ce308scene = player.ce308scene.add(1)
            },
        },
        51: {
            title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.ce308cutscene.eq(1) },
            unlocked() { return player.ce308scene.lt(44) && player.ce308scene.neq(0) },
            onClick() {
                player.ce308scene = player.ce308scene.sub(1)
            },
        },
        52: {
            title() { return "<h1>SUMMON THE PSEUDO-CELESTIAL" },
            canClick() { return player.ce308cutscene.eq(0) },
            unlocked() { return player.ce308cutscene.eq(0) && player.m.ce308unlock.eq(0) },
            onClick() {
                addMistWithTextEffect(0.3, textsToShow)
                for (let i = 0; i < 80; i++)
                {
                    createLightning();
                }
                player.m.ce308unlock = new Decimal(1)
            },
            style: { 
            width: '700px',
            minHeight: '250px',
            position: 'relative',
            overflow: 'hidden', 
            boxShadow: '0 0 20px 10px #ffffaa',
            textShadow: '1px 1px 2px #ffffaa', // Text shadow
            border: '4px solid #ffffaa', // Glowing border
            "background-color": "#ffc863",
opacity: "0.9",
"background-image":  "linear-gradient(30deg, #ffffaa 12%, transparent 12.5%, transparent 87%, #ffffaa 87.5%, #ffffaa), linear-gradient(150deg, #ffffaa 12%, transparent 12.5%, transparent 87%, #ffffaa 87.5%, #ffffaa), linear-gradient(30deg, #ffffaa 12%, transparent 12.5%, transparent 87%, #ffffaa 87.5%, #ffffaa), linear-gradient(150deg, #ffffaa 12%, transparent 12.5%, transparent 87%, #ffffaa 87.5%, #ffffaa), linear-gradient(60deg, #ffffaa77 25%, transparent 25.5%, transparent 75%, #ffffaa77 75%, #ffffaa77), linear-gradient(60deg, #ffffaa77 25%, transparent 25.5%, transparent 75%, #ffffaa77 75%, #ffffaa77)",
"background-size": "24px 42px",
"background-position": "0 0, 0 0, 12px 21px, 12px 21px, 0 0, 12px 21px",
         },
        },
        53: {
            title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.ce308unlockcutscene.eq(1) },
            unlocked() { return player.ce308unlockscene.lt(27) },
            onClick() {
                player.ce308unlockscene = player.ce308unlockscene.add(1)
            },
        },
        54: {
            title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.ce308unlockcutscene.eq(1) },
            unlocked() { return player.ce308unlockscene.lt(27) && player.ce308unlockscene.neq(0) },
            onClick() {
                player.ce308unlockscene = player.ce308unlockscene.sub(1)
            },
        },
        55: {
            title() { return "+" + format(player.i.celestialenergytoget) + " CE" },
            canClick() { return player.i.standardpath.eq(1) && player.i.celestialenergytoget.gte(1) },
            unlocked() { return player.i.standardpath.eq(1) && player.ce308unlockcutscene.eq(0) && hasUpgrade("i", 27) && player.i.ce308bossactivate.eq(0) },
            onClick() {
                player.i.celestialenergypause = new Decimal(3)
                player.i.celestialenergy = player.i.celestialenergy.add(player.i.celestialenergytoget)
            },
            style: {  width: '150px', "min-height": '60px', 'color': 'white', 'border-color': 'blue', 'background-image': 'radial-gradient(circle, rgba(16,15,16,1) 0%, rgba(8,0,255,1) 0%, rgba(0,0,0,1) 100%)', animation: "gradient 1s infinite" }
        },
        56: {
            title() { return "<h2>Feed Ce308 to produce celestial energy." },
            canClick() { return player.i.standardpath.eq(1) && player.i.celestialenergytoget.gte(1) },
            unlocked() { return player.i.standardpath.eq(1) && player.ce308unlockcutscene.eq(0) && hasUpgrade("i", 27) },
            onClick() {
                player.i.celestialenergypause = new Decimal(3)
                player.i.celestialenergy = player.i.celestialenergy.add(player.i.celestialenergytoget)
            },
            style: { 'color': 'white', 'border-color': 'blue', 'background-image': 'radial-gradient(circle, rgba(16,15,16,1) 0%, rgba(8,0,255,1) 0%, rgba(0,0,0,1) 100%)', animation: "gradient 1s infinite", width: '400px', "min-height": '100px' },
        },
        57: {
            title() { return "<div class=spinning-symbol4>Θ</div>"/*"<img src='resources/strongprestigeenergy.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>"*/ },
            canClick() { return true },
            unlocked() { return hasUpgrade("i", 28) && player.i.standardpath.eq(1) },
            onClick() {
                player.i.nextenergizer = new Decimal(4)
            },
        },
        58: {
            title() { return "<h2>Layer 7: Super Booster <br><h3>Req: 1e11 booster energy, 500,000 super points." },
            canClick() { return player.i.boosterenergy.gte(1e11) && player.i.superpoints.gte(500000) },
            unlocked() { return hasUpgrade("i", 27) && player.superboosterlayer.eq(0) && player.superifiercutscene.eq(0) },
            onClick() {
                player.superboosterlayer = new Decimal(1)
                // Particle effect
                alert("Ah, how are you doing with the celestial?")
                alert("You know, I am the only one who can speak to you.")
                alert("Oh yeah. Super boosters.")
                alert("One of the more forgettable layers.")
                alert("Well whatever. At least you're not dead...")
                createParticles();
                createParticles();
                createParticles();
            },
            style: {   background: '#504899',
            width: '275px', height: '150px',
            position: 'relative',
            overflow: 'hidden', 
            boxShadow: '0 0 20px 10px #504899',
            textShadow: '1px 1px 2px rgba(0.8, 0.8, 0.8, 0.8)', // Text shadow
            border: '4px solid rgba(255, 255, 255, 0.3)', // Glowing border
            },
        },
        59: {
            title() { return "<h2>Layer 8: Super Generator <br><h3>Req: 3e11 generator energy, 8 time capsules, 4 space buildings." },
            canClick() { return player.i.generatorenergy.gte(3e11) && player.c.timecapsules.gte(8) && player.c.spacebuildings.gte(4) },
            unlocked() { return hasUpgrade("i", 27) && player.superboosterlayer.eq(1) && player.supergeneratorlayer.eq(0) },
            onClick() {
                player.supergeneratorlayer = new Decimal(1)
                // Particle effect
                alert("So, you are now 25% done with the prestige tree!")
                alert("See, it really does go by quick.")
                alert("75% more, and you are done, and you can free us all.")
                alert("Well, this layer is like the most forgotten.")
                alert("Whatever. At least it's not like hyper-boosters, super prestige, or life essence.")
                createParticles();
                createParticles();
                createParticles();
            },
            style: {   background: '#248239',
            width: '275px', height: '150px',
            position: 'relative',
            overflow: 'hidden', 
            boxShadow: '0 0 20px 10px #248239',
            textShadow: '1px 1px 2px rgba(0.8, 0.8, 0.8, 0.8)', // Text shadow
            border: '4px solid rgba(255, 255, 255, 0.3)', // Glowing border
            },
        },
        61: {
            title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.quirkenergycutscene.eq(1) },
            unlocked() { return player.quirkenergyscene.lt(15) },
            onClick() {
                player.quirkenergyscene = player.quirkenergyscene.add(1)
            },
        },
        62: {
            title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.quirkenergycutscene.eq(1) },
            unlocked() { return player.quirkenergyscene.lt(15) && player.quirkenergyscene.neq(0) },
            onClick() {
                player.quirkenergyscene = player.quirkenergyscene.sub(1)
            },
        },
        63: {
            title() { return "<h3>Energy task 1: " + format(player.i.pureenergy) + "/1e25 pure energy" },
            canClick() { return player.i.tasksleft.gt(0) && player.i.pureenergy.gt(1e25) && player.m.energytask.eq(0) },
            unlocked() { return player.taskcutscene.eq(0) && player.m.energytask.eq(0) },
            onClick() {
                player.i.tasksleft = player.i.tasksleft.sub(1)
                player.m.energytask = player.m.energytask.add(1)
            },
            style: { "background-color": "#ffffaa", width: '500px', "min-height": '100px' },
        },
        64: {
            title() { return "<h3>Meta task 1: " + format(player.sg.supergeneratorpower) + "/40,000 super generator power" },
            canClick() { return player.i.tasksleft.gt(0) && player.sg.supergeneratorpower.gte(40000) && player.m.metatask.eq(0) },
            unlocked() { return player.taskcutscene.eq(0) && player.m.metatask.eq(0) },
            onClick() {
                player.i.tasksleft = player.i.tasksleft.sub(1)
                player.m.metatask = player.m.metatask.add(1)
            },
            style: { "background-color": "#8a00a9", width: '500px', "min-height": '100px' },
        },
        65: {
            title() { return "<h3>Challenge task 1: " + format(player.points) + "/1e86 points, no prestige energy." },
            canClick() { return player.i.tasksleft.gt(0) && player.points.gte(1e86) && player.i.prestigeenergy.eq(0) && player.m.challengetask.eq(0) },
            unlocked() { return player.taskcutscene.eq(0) && player.m.challengetask.eq(0) },
            onClick() {
                player.i.tasksleft = player.i.tasksleft.sub(1)
                player.m.challengetask = player.m.challengetask.add(1)
            },
            style: { "background-color": "#a14040", width: '500px', "min-height": '100px' },
        },
        66: {
            title() { return "<h3>Crafting task 1:  " + formatWhole(player.c.timemetal) + "/25 time metal and  " + formatWhole(player.c.spacemetal) + "/25 space metal." },
            canClick() { return player.i.tasksleft.gt(0) && player.c.timemetal.gte(25) && player.c.spacemetal.gte(25) && player.m.craftingtask.eq(0) },
            unlocked() { return player.taskcutscene.eq(0) && player.m.craftingtask.eq(0) },
            onClick() {
                player.i.tasksleft = player.i.tasksleft.sub(1)
                player.m.craftingtask = player.m.craftingtask.add(1)
            },
            style: { "background-color": "#ff5500", width: '500px', "min-height": '100px' },
        },
        67: {
            title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.taskcutscene.eq(1) },
            unlocked() { return player.taskscene.lt(18) },
            onClick() {
                player.taskscene = player.taskscene.add(1)
            },
        },
        68: {
            title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.taskcutscene.eq(1) },
            unlocked() { return player.taskscene.lt(18) && player.taskscene.neq(0) },
            onClick() {
                player.taskscene = player.taskscene.sub(1)
            },
        },
        69: {
            title() { return "<h3>Energy task 2: " + format(player.i.prestigeenergy) + "/1e36 prestige energy" },
            canClick() { return player.i.tasksleft.gt(0) && player.i.prestigeenergy.gt(1e36) && player.m.energytask.eq(1) },
            unlocked() { return player.taskcutscene.eq(0) && player.m.energytask.eq(1) },
            onClick() {
                player.i.tasksleft = player.i.tasksleft.sub(1)
                player.m.energytask = player.m.energytask.add(1)
            },
            style: { "background-color": "#ffffaa", width: '500px', "min-height": '100px' },
        },
        71: {
            title() { return "<h3>Meta task 2: " + format(player.m.points) + "/100,000 incremental power" },
            canClick() { return player.i.tasksleft.gt(0) && player.m.points.gte(100000) && player.m.metatask.eq(1) },
            unlocked() { return player.taskcutscene.eq(0) && player.m.metatask.eq(1) },
            onClick() {
                player.i.tasksleft = player.i.tasksleft.sub(1)
                player.m.metatask = player.m.metatask.add(1)
            },
            style: { "background-color": "#8a00a9", width: '500px', "min-height": '100px' },
        },
        72: {
            title() { return "<h3>Challenge task 2: " + format(player.points) + "/1e64 points, no pure energy." },
            canClick() { return player.i.tasksleft.gt(0) && player.points.gte(1e64) && player.i.pureenergy.eq(0) && player.m.challengetask.eq(1) },
            unlocked() { return player.taskcutscene.eq(0) && player.m.challengetask.eq(1) },
            onClick() {
                player.i.tasksleft = player.i.tasksleft.sub(1)
                player.m.challengetask = player.m.challengetask.add(1)
            },
            style: { "background-color": "#a14040", width: '500px', "min-height": '100px' },
        },
        73: {
            title() { return "<h3>Crafting task 2:  " + formatWhole(player.c.scrapmetal) + "/150 scrap metal and  " + formatWhole(player.c.celestialcells) + "/40 celestial cells." },
            canClick() { return player.i.tasksleft.gt(0) && player.c.scrapmetal.gte(150) && player.c.celestialcells.gte(40) && player.m.craftingtask.eq(1) },
            unlocked() { return player.taskcutscene.eq(0) && player.m.craftingtask.eq(1) },
            onClick() {
                player.i.tasksleft = player.i.tasksleft.sub(1)
                player.m.craftingtask = player.m.craftingtask.add(1)
            },
            style: { "background-color": "#ff5500", width: '500px', "min-height": '100px' },
        },
        74: {
            title() { return "<h2>Layer 9: Quirks <br><h3>Req: 400,000 quirk energy, 40,000,000 celestial energy, 8 quirk layers." },
            canClick() { return player.i.quirkenergy.gte(4e5) && player.i.celestialenergy.gte(4e7) && player.c.quirklayers.gte(8) },
            unlocked() { return player.m.energytask.gt(0) && player.m.metatask.gt(0) && player.m.challengetask.gt(0) && player.m.craftingtask.gt(0) && player.quirklayer.eq(0) },
            onClick() {
                player.quirklayer = new Decimal(1)
                // Particle effect
                alert("Ah yes. The fourth row of the prestige tree.")
                alert("This is where things start to take a darker turn.")
                alert("It looks like the celestial is making you do its work. Classic move.")
                alert("Also it seems to know about the fight. That's odd.")
                alert("And whenever it talks about something with the acronym M.S, don't listen to it. It's a malfunction.")
                createParticles();
                createParticles();
                createParticles();
            },
            style: {   background: '#c20282',
            width: '275px', height: '150px',
            position: 'relative',
            overflow: 'hidden', 
            boxShadow: '0 0 20px 10px #c20282',
            textShadow: '1px 1px 2px rgba(0.8, 0.8, 0.8, 0.8)', // Text shadow
            border: '4px solid rgba(255, 255, 255, 0.3)', // Glowing border
            },
        },
        75: {
            title() { return "<h3>Energy task 3: " + format(player.i.celestialenergy) + "/1e10 celestial energy" },
            canClick() { return player.i.tasksleft.gt(0) && player.i.celestialenergy.gt(1e10) && player.m.energytask.eq(2) },
            unlocked() { return player.taskcutscene.eq(0) && player.m.energytask.eq(2) },
            onClick() {
                player.i.tasksleft = player.i.tasksleft.sub(1)
                player.m.energytask = player.m.energytask.add(1)
            },
            style: { "background-color": "#ffffaa", width: '500px', "min-height": '100px' },
        },
        76: {
            title() { return "<h3>Meta task 3: " + format(player.ti.timeenergy) + "/15,000 time energy" },
            canClick() { return player.i.tasksleft.gt(0) && player.ti.timeenergy.gte(15000) && player.m.metatask.eq(2) },
            unlocked() { return player.taskcutscene.eq(0) && player.m.metatask.eq(2) },
            onClick() {
                player.i.tasksleft = player.i.tasksleft.sub(1)
                player.m.metatask = player.m.metatask.add(1)
            },
            style: { "background-color": "#8a00a9", width: '500px', "min-height": '100px' },
        },
        77: {
            title() { return "<h3>Challenge task 3: " + format(player.points) + "/1e55 points, no super pure energy." },
            canClick() { return player.i.tasksleft.gt(0) && player.points.gte(1e55) && player.i.superpureenergy.eq(0) && player.m.challengetask.eq(2) },
            unlocked() { return player.taskcutscene.eq(0) && player.m.challengetask.eq(2) },
            onClick() {
                player.i.tasksleft = player.i.tasksleft.sub(1)
                player.m.challengetask = player.m.challengetask.add(1)
            },
            style: { "background-color": "#a14040", width: '500px', "min-height": '100px' },
        },
        78: {
            title() { return "<h3>Crafting task 3:  " + formatWhole(player.c.quirklayers) + "/15 quirk layers and  " + formatWhole(player.c.quirkstars) + "/5 quirk stars." },
            canClick() { return player.i.tasksleft.gt(0) && player.c.quirklayers.gte(15) && player.c.quirkstars.gte(5) && player.m.craftingtask.eq(2) },
            unlocked() { return player.taskcutscene.eq(0) && player.m.craftingtask.eq(2) },
            onClick() {
                player.i.tasksleft = player.i.tasksleft.sub(1)
                player.m.craftingtask = player.m.craftingtask.add(1)
            },
            style: { "background-color": "#ff5500", width: '500px', "min-height": '100px' },
        },
        79: {
            title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.hindranceenergycutscene.eq(1) },
            unlocked() { return player.hindranceenergyscene.lt(22) },
            onClick() {
                player.hindranceenergyscene = player.hindranceenergyscene.add(1)
            },
        },
        81: {
            title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.hindranceenergycutscene.eq(1) },
            unlocked() { return player.hindranceenergyscene.lt(22) && player.hindranceenergyscene.neq(0) },
            onClick() {
                player.hindranceenergyscene = player.hindranceenergyscene.sub(1)
            },
        },
        82: {
            title() { return "<h3>Energy task 4: " + format(player.i.hindranceenergy) + "/1e26 hindrance energy" },
            canClick() { return player.i.tasksleft.gt(0) && player.i.hindranceenergy.gt(1e26) && player.m.energytask.eq(3) },
            unlocked() { return player.taskcutscene.eq(0) && player.m.energytask.eq(3) },
            onClick() {
                player.i.tasksleft = player.i.tasksleft.sub(1)
                player.m.energytask = player.m.energytask.add(1)
            },
            style: { "background-color": "#ffffaa", width: '500px', "min-height": '100px' },
        },
        83: {
            title() { return "<h3>Meta task 4: " + format(player.subspacelayer) + "/1 subspace layer unlocked" },
            canClick() { return player.i.tasksleft.gt(0) && player.subspacelayer.gte(1) && player.m.metatask.eq(3) },
            unlocked() { return player.taskcutscene.eq(0) && player.m.metatask.eq(3) },
            onClick() {
                player.i.tasksleft = player.i.tasksleft.sub(1)
                player.m.metatask = player.m.metatask.add(1)
            },
            style: { "background-color": "#8a00a9", width: '500px', "min-height": '100px' },
        },
        84: {
            title() { return "<h3>Challenge task 4: " + format(player.i.prestigepoints) + "/1e115 prestige points, no prestige machines or prestige energy." },
            canClick() { return player.i.tasksleft.gt(0) && player.i.prestigepoints.gte(1e115) && player.i.prestigeenergy.eq(0) && player.i.prestigemachines.eq(0) && player.m.challengetask.eq(3) },
            unlocked() { return player.taskcutscene.eq(0) && player.m.challengetask.eq(3) },
            onClick() {
                player.i.tasksleft = player.i.tasksleft.sub(1)
                player.m.challengetask = player.m.challengetask.add(1)
            },
            style: { "background-color": "#a14040", width: '500px', "min-height": '100px' },
        },
        85: {
            title() { return "<h3>Crafting task 4:  " + formatWhole(player.c.timecapsules) + "/30 time capsules, " + formatWhole(player.c.spacebuildings) + "/15 space buildings, and " + formatWhole(player.c.celestialbatteries) + "/3 celestial batteries." },
            canClick() { return player.i.tasksleft.gt(0) && player.c.timecapsules.gte(30) && player.c.spacebuildings.gte(15) && player.c.celestialbatteries.gte(3) && player.m.craftingtask.eq(3) },
            unlocked() { return player.taskcutscene.eq(0) && player.m.craftingtask.eq(3) },
            onClick() {
                player.i.tasksleft = player.i.tasksleft.sub(1)
                player.m.craftingtask = player.m.craftingtask.add(1)
            },
            style: { "background-color": "#ff5500", width: '500px', "min-height": '100px' },
        },
        86: {
            title() { return "<h2>Layer 10: Hindrance <br><h3>Req: 1e15 hindrance energy, all level 3 tasks completed." },
            canClick() { return player.i.hindranceenergy.gte(1e15) && player.m.metatask.gte(3) && player.m.challengetask.gte(3) && player.m.craftingtask.gte(3) && player.m.energytask.gte(3)},
            unlocked() { return player.hindrancelayer.eq(0) },
            onClick() {
                player.hindrancelayer = new Decimal(1)
                // Particle effect
                alert("Now you have 10 layers. You are well past a third of the tree.")
                alert("I'm glad that you are still alive. You are doing wonderful.")
                alert("Jacorb says hi.")
                alert("Once you are able to travel to the dimensional realm, you must visit my galaxy.")
                alert("It's a few universes away from the hub, but you should only go there with someone's help.")
                alert("galaxy.click's quality control. Lustre. They are a really feared critic.")
                alert("If you are caught without accompanying someone, you will be killed.")
                alert("galaxy.click is like paradise, but it's no use for someone like you to live there.")
                alert("Only those who have created you and the high-ranking incremental developers stay there.")
                alert("In the center, you will meet up with one of my friends.")
                alert("His name is DEMONIN. He is a mage from the death realm. However, we all have his trust.")
                alert("He should guide you into the realm once you have finished the prestige tree.")
                alert("And then we will all be free.")
                createParticles();
                createParticles();
                createParticles();
            },
            style: {   background: '#a14040',
            width: '275px', height: '150px',
            position: 'relative',
            overflow: 'hidden', 
            boxShadow: '0 0 20px 10px #a14040',
            textShadow: '1px 1px 2px rgba(0.8, 0.8, 0.8, 0.8)', // Text shadow
            border: '4px solid rgba(255, 255, 255, 0.3)', // Glowing border
            },
        },
        87: {
            title() { return "<h3>Turn your hindrance energy into hindrance points." },
            canClick() { return player.i.standardpath.eq(1) && player.i.hindrancepointstoget.gte(1)},
            unlocked() { return true},
            onClick() {
                player.i.hindrancepointpause = new Decimal(3)

                player.i.hindrancepoints = player.i.hindrancepoints.add(player.i.hindrancepointstoget)
            },
            style: { "background-color": "#a14040",  width: '400px', "min-height": '100px'},
        },
        88: {
            title() { return "+" + format(player.i.hindrancepointstoget) + " HP" },
            canClick() { return player.i.standardpath.eq(1) && player.i.hindrancepointstoget.gte(1) },
            unlocked() { return player.i.standardpath.eq(1) && hasUpgrade("i", 38) && player.i.ce308bossactivate.eq(0) },
            onClick() {
                player.i.hindrancepointpause = new Decimal(3)

                player.i.hindrancepoints = player.i.hindrancepoints.add(player.i.hindrancepointstoget)
            },
            style: {  width: '150px', "min-height": '60px', "background-color": "#a14040",  }
        },
        89: {
            title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.puremachinecutscene.eq(1) },
            unlocked() { return player.puremachinescene.lt(17) },
            onClick() {
                player.puremachinescene = player.puremachinescene.add(1)
            },
        },
        91: {
            title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.puremachinecutscene.eq(1) },
            unlocked() { return player.puremachinescene.lt(17) && player.puremachinescene.neq(0) },
            onClick() {
                player.puremachinescene = player.puremachinescene.sub(1)
            },
        },
        92: {
            title() { return "Sacrifice 10% of incremental power (Must have over 100,000)<br>Don't screw this up, please!" },
            canClick() { return player.i.standardpath.eq(1) && player.m.points.gte(100000)},
            unlocked() { return player.i.standardpath.eq(1) && player.puremachinecutscene.eq(0) },
            onClick() {
                player.m.points = player.m.points.sub(player.m.points.mul(0.1))
                player.m.sacrificedincrementalpower = player.m.sacrificedincrementalpower.add(player.m.points.mul(0.1))
            },
            style: {  width: '700px', "min-height": '100px', 'background-image': 'radial-gradient(circle, #ffffaa 0%, white 0%, #ffffaa 100%)', "color": 'black', animation: "gradient 1s infinite", }
        },
        93: {
            title() { return "<h2>BEGIN THE DAWN OF THE PRESTIGE MACHINES <br><h3>(Req: 20 pure machines and all upgrades)" },
            canClick() { return player.i.puremachines.gte(20) && player.i.standardpath.eq(1) && hasUpgrade("i", 41) && player.i.ce308bossactivate.eq(0)},
            unlocked() { return true },
            onClick() {
                player.i.ce308bossactivate = new Decimal(1)
                flashAndFade();
                if (player.ce308bosscutscene.eq(0)) player.playdotpm = new Decimal(1)
                player.i.playerhealth = new Decimal(250)
            },
            style: {   background: '#ffffaa',
            width: '275px', height: '150px',
            position: 'relative',
            overflow: 'hidden', 
            boxShadow: '0 0 20px 10px #ffffaa',
            textShadow: '1px 1px 2px rgba(0.8, 0.8, 0.8, 0.8)', // Text shadow
            border: '4px solid rgba(255, 255, 255, 0.3)', // Glowing border
            },
        },
        94: {
            title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.ce308bosscutscene.eq(1) },
            unlocked() { return player.ce308bossscene.lt(52) },
            onClick() {
                player.ce308bossscene = player.ce308bossscene.add(1)
            },
        },
        95: {
            title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.ce308bosscutscene.eq(1) },
            unlocked() { return player.ce308bossscene.lt(52) && player.ce308bossscene.neq(0) },
            onClick() {
                player.ce308bossscene = player.ce308bossscene.sub(1)
            },
        },
        96: {
            title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.ce308defeatcutscene.eq(1) },
            unlocked() { return player.ce308defeatscene.lt(70) },
            onClick() {
                if (player.ce308defeatscene.eq(0)) flashAndFade(8000);
                player.ce308defeatscene = player.ce308defeatscene.add(1)
            },
        },
        97: {
            title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.ce308defeatcutscene.eq(1) },
            unlocked() { return player.ce308defeatscene.lt(70) && player.ce308defeatscene.neq(0) },
            onClick() {
                player.ce308defeatscene = player.ce308defeatscene.sub(1)
            },
        },
        98: {
            title() { return "<h2>Layer 12: Solarity <br><h3>Req: 3,000,000 sacrificed incremental power." },
            canClick() { return player.m.sacrificedincrementalpower.gte(3e6)},
            unlocked() { return player.solaritylayer.eq(0) },
            onClick() {
                player.solaritylayer = new Decimal(1)
                // Particle effect
                alert("Solarity, dedicated to one of the gods.")
                alert("It will be the gateway to many new crafting resources.")
                alert("Artis and Sitra will tell you more once you've reached that point.")
                alert("For now, it won't do much.")
                createParticles();
                createParticles();
                createParticles();
            },
            style: {   
                "background-origin": "border-box",
                background: "radial-gradient(#ffcd00, #ff4300)",
            width: '275px', height: '150px',
            position: 'relative',
            overflow: 'hidden', 
            boxShadow: '0 0 20px 10px #ffcd00',
            textShadow: '1px 1px 2px rgba(0.8, 0.8, 0.8, 0.8)', // Text shadow
            border: '4px solid rgba(255, 255, 255, 0.3)', // Glowing border
            },
        },
        99: {
            title() { return "Transfer 10% of your quirk energy into the jacorb orbs. (uses up one orb)" },
            canClick() { return player.i.quirkenergy.gt(0) && player.c.jacorborbs.gt(0) },
            unlocked() { return true},
            onClick() {
                player.m.storedquirkenergy = player.m.storedquirkenergy.add(player.i.quirkenergy.mul(0.1))
                player.i.quirkenergy = player.i.quirkenergy.sub(player.i.quirkenergy.mul(0.1))
                player.c.jacorborbs = player.c.jacorborbs.sub(1)
            },
            style: { "background-color": "#c20282", width: '400px', "min-height": '100px' },
        },
        //ENHANCE PATH

        101: {
            title() { return "<h2>Enhance Your Prestige Points" },
            canClick() { return player.i.prestigepoints.gte(1) },
            unlocked() { return player.i.enhancepath.eq(1) },
            onClick() {
                player.i.prestigepause = new Decimal(3)
                player.i.enhancedprestigepoints = player.i.enhancedprestigepoints.add(player.i.prestigepoints)
                player.i.prestigepoints = new Decimal(0)
            },
            style: { "background-color": "#b82fbd", width: '400px', "min-height": '100px' },
        },
        102: {
            title() { return "ENHANCE" },
            canClick() { return player.i.prestigepoints.gte(1) },
            unlocked() { return player.i.enhancepath.eq(1) && hasUpgrade("i", 101) },
            onClick() {
                player.i.prestigepause = new Decimal(3)
                player.i.enhancedprestigepoints = player.i.enhancedprestigepoints.add(player.i.prestigepoints)
                player.i.prestigepoints = new Decimal(0)
            },
            style: { width: '150px', "min-height": '60px', "background-color": "#b82fbd", }
        },
        103: {
            title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.beaconcutscene.eq(1) },
            unlocked() { return player.beaconscene.lt(11) },
            onClick() {
                player.beaconscene = player.beaconscene.add(1)
            },
        },
        104: {
            title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.beaconcutscene.eq(1) },
            unlocked() { return player.beaconscene.lt(11) && player.beaconscene.neq(0) },
            onClick() {
                player.beaconscene = player.beaconscene.sub(1)
            },
        },
        105: {
            title() { return "<h2>Level up your beacon." },
            canClick() { return player.i.enhancepoints.gte(player.i.enhancebeaconreq) },
            unlocked() { return player.beaconcutscene.eq(0) && player.i.enhancepath.eq(1) },
            onClick() {
                player.i.enhancebeaconlevel = player.i.enhancebeaconlevel.add(1)
            },
            style: { "background-color": "#b82fbd", width: '400px', "min-height": '100px' },
        },
        106: {
            title() { return "Off" },
            canClick() { return player.i.injacorbianbalancing.eq(0) },
            unlocked() { return player.beaconcutscene.eq(0) && player.i.enhancepath.eq(1) },
            onClick() {
                player.i.enhancebeacontoggle = new Decimal(0)
            },
        },
        107: {
            title() { return "On" },
            canClick() { return player.i.injacorbianbalancing.eq(0) },
            unlocked() { return player.beaconcutscene.eq(0) && player.i.enhancepath.eq(1) },
            onClick() {
                player.i.enhancebeacontoggle = new Decimal(1)
            },
        },
        108: {
            title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.beaconpointcutscene.eq(1) },
            unlocked() { return player.beaconpointscene.lt(17) },
            onClick() {
                player.beaconpointscene = player.beaconpointscene.add(1)
            },
        },
        109: {
            title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.beaconpointcutscene.eq(1) },
            unlocked() { return player.beaconpointscene.lt(17) && player.beaconpointscene.neq(0) },
            onClick() {
                player.beaconpointscene = player.beaconpointscene.sub(1)
            },
        },
        111: {
            title() { return "<h2>Layer 11: Subspace <br><h3>Req: 100,000 beacon points, 25 hindrance spirits, 400,000 incremental power." },
            canClick() { return player.i.beaconpoints.gte(100000) && player.hi.hindrancespirits.gte(25) && player.m.points.gte(400000)},
            unlocked() { return player.subspacelayer.eq(0) },
            onClick() {
                player.subspacelayer = new Decimal(1)
                // Particle effect
                alert("You have obtained the subspace layer.")
                alert("It was dedicated to Spaceon. One of the gods of incremental.")
                alert("Its main goal was to amplify the main space layer.")
                alert("Despite many efforts, there were never any subspace buildings.")
                alert("You are so close to the end of this celestial.")
                alert("We are all glad you are not dead.")
                createParticles();
                createParticles();
                createParticles();
            },
            style: {   background: '#e8ffff',
            width: '275px', height: '150px',
            position: 'relative',
            overflow: 'hidden', 
            boxShadow: '0 0 20px 10px #e8ffff',
            textShadow: '1px 1px 2px rgba(0.8, 0.8, 0.8, 0.8)', // Text shadow
            border: '4px solid rgba(255, 255, 255, 0.3)', // Glowing border
            },
        },
        112: {
            title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.enhancequirkcutscene.eq(1) },
            unlocked() { return player.enhancequirkscene.lt(16) },
            onClick() {
                player.enhancequirkscene = player.enhancequirkscene.add(1)
            },
        },
        113: {
            title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.enhancequirkcutscene.eq(1) },
            unlocked() { return player.enhancequirkscene.lt(16) && player.enhancequirkscene.neq(0) },
            onClick() {
                player.enhancequirkscene = player.enhancequirkscene.sub(1)
            },
        },
        114: {
            title() { return "<h1>Unlock" },
            canClick() { return player.h.willpower.gte(1000000) && player.h.count.gte(1000) && player.h.countingpoints.gte(100) && player.m.points.gte(3000000) && player.m.incrementalenergy.gte(500) && player.c.totalanvils.gte(3) },
            unlocked() { return player.enhancequirkcutscene.eq(0) && player.m.quirkenhanceunlock.eq(0) },
            onClick() {
                player.m.quirkenhanceunlock = new Decimal(1)

                if (player.yhvrcutscene9.eq(0))
                {
                alert("Nice.")
                alert("Almost about time I need you to visit galaxy.")
                alert("But in order to enter, you must bypass its strict quality control.")
                alert("Someone like you would be obliterated immediately.")
                alert("You must accompany a GALAXY STAFF MEMBER.")
                alert("If you don't know any, Thepaperpilot and Ducdat are good staff members.")
                alert("Also, you may see someone named CRG roaming around...")
                alert("If I were you, I'd stay away from him.")
                alert("He has something called a 'neck tree', which was designed to repel newcomers to galaxy.")
                alert("We haven't had new users in a while.")
                alert("You may also encounter Sovereign. Someone who can potentially end you.")
                alert("I don't want to explain much, just don't get near him.")
                alert("Once you get to the center of the galaxy you'll reach THE GALAXY SINGULARITY.")
                alert("In the center there will be a very small gem. It is the singularity gem.")
                alert("This one belonged to the high god INFINITY. Yes, it is a relic.")
                alert("Alright. Bye.")
            }
                player.yhvrcutscene9 = new Decimal(1)
            },
            style: {   background: '#c20282',
            width: '275px', height: '150px',
            position: 'relative',
            overflow: 'hidden', 
            boxShadow: '0 0 20px 10px #c20282',
            textShadow: '1px 1px 2px rgba(0.8, 0.8, 0.8, 0.8)', // Text shadow
            border: '4px solid rgba(255, 255, 255, 0.3)', // Glowing border
            },
        },
        115: {
            title() { return "<h2>Mold your enhance points into quirks." },
            canClick() { return player.i.enhancepath.eq(1) && player.i.quirkstoget.gte(1)  },
            unlocked() { return player.m.quirkenhanceunlock.eq(1) && hasUpgrade("i", 106) },
            onClick() {
                player.i.quirkpause = new Decimal(3)
                player.i.quirks = player.i.quirks.add(player.i.quirkstoget)
                if (player.yhvrcutscene10.eq(0))
                {
                alert("You have gained some quirks.")
                alert("This is the next part of the enhance path.")
                alert("I have something to tell you.")
                alert("I used to be normal, a long, long time ago.")
                alert("I was just some regular guy, working a 9-5 job. I was in corporate hell.")
                alert("I was naive to the potential of the multiverse.")
                alert("Heck, I didn't even know anything past my home dimension.")
                alert("Until one day, someone strange came into my office.")
                alert("His eyes were on fire. He looked powerful.")
                alert("He came up to me and told me my soul was at the right frequency for the job.")
                alert("Little did I know, this job would change everything, forever.")
                alert("I was supposed to rank high enough to take the spot of noble.")
                alert("I needed to outrank some other guy who was noble at the time.")
                alert("I did it.")
            }
                player.yhvrcutscene10 = new Decimal(1)
            },
            style: { "background-color": "#c20282", width: '400px', "min-height": '100px' },
        },
        116: {
            title() { return "+" + format(player.i.quirkstoget) + " Q" },
            canClick() { return player.i.enhancepath.eq(1) && player.i.quirkstoget.gte(1)  },
            unlocked() { return player.m.quirkenhanceunlock.eq(1) && hasUpgrade("i", 106) },
            onClick() {
                player.i.quirkpause = new Decimal(3)
                player.i.quirks = player.i.quirks.add(player.i.quirkstoget)
                if (player.yhvrcutscene10.eq(0))
                {
                alert("You have gained some quirks.")
                alert("This is the next part of the enhance path.")
                alert("I have something to tell you.")
                alert("I used to be normal, a long, long time ago.")
                alert("I was just some regular guy, working a 9-5 job. I was in corporate hell.")
                alert("I was naive to the potential of the multiverse.")
                alert("Heck, I didn't even know anything past my home dimension.")
                alert("Until one day, someone strange came into my office.")
                alert("His eyes were on fire. He looked powerful.")
                alert("He came up to me and told me my soul was at the right frequency for the job.")
                alert("Little did I know, this job would change everything, forever.")
                alert("I was supposed to rank high enough to take the spot of noble.")
                alert("I needed to outrank some other guy who was noble at the time.")
                alert("I did it.")
            }
                player.yhvrcutscene10 = new Decimal(1)
            },
            style: {  width: '150px', "min-height": '60px', "background-color": "#c20282",  }
        },
        117: {
            title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.jacorbbalancingcutscene.eq(1) },
            unlocked() { return player.jacorbbalancingscene.lt(22) },
            onClick() {
                player.jacorbbalancingscene = player.jacorbbalancingscene.add(1)
            },
        },
        118: {
            title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.jacorbbalancingcutscene.eq(1) },
            unlocked() { return player.jacorbbalancingscene.lt(22) && player.jacorbbalancingscene.neq(0) },
            onClick() {
                player.jacorbbalancingscene = player.jacorbbalancingscene.sub(1)
            },
        },
        119: {
            title() { return "Start Jacorbian Balancing" },
            display: "You can't go back until you meta-prestige. Does a quirk reset.",
            canClick() { return player.i.injacorbianbalancing.eq(0) && hasUpgrade("i", 112) },
            unlocked() { return player.jacorbbalancingcutscene.eq(0)  },
            onClick() {
                player.i.injacorbianbalancing = new Decimal(1)
                if (player.enterjacorbcutscene.eq(1))
                {
                    addMistWithTextEffect(0.3, textsToShow2)
                }
                player.enterjacorbcutscene = new Decimal(0)
                layers.i.quirkreset();
            },
            style: { width: '400px', "min-height": '60px', "background-color": "purple", }
        },
        121: {
            title() { return "<h2>Layer 13: Balance Energy <br><h3>Req: 100,000 jacorbian energy." },
            canClick() { return player.i.jacorbianenergy.gte(100000) },
            unlocked() { return player.balanceenergylayer.eq(0) },
            onClick() {
                player.balanceenergylayer = new Decimal(1)
                // Particle effect
                alert("Balance energy. One of the main ingredients of jacorbian energy.")
                alert("It has very unique properties.")
                alert("It is found everywhere in the multiverse, but can only be sensed by few.")
                alert("Without it, the entropy in an area would skyrocket.")
                alert("The only place with very little to no balance energy is the void.")
                createParticles();
                createParticles();
                createParticles();
            },
            style: {   background: '#fced9f',
            width: '275px', height: '150px',
            position: 'relative',
            overflow: 'hidden', 
            boxShadow: '0 0 20px 10px #fced9f',
            textShadow: '1px 1px 2px rgba(0.8, 0.8, 0.8, 0.8)', // Text shadow
            border: '4px solid rgba(255, 255, 255, 0.3)', // Glowing border
            },
        },
        122: {
            title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.altarcutscene.eq(1) },
            unlocked() { return player.altarscene.lt(9) },
            onClick() {
                player.altarscene = player.altarscene.add(1)
            },
        },
        123: {
            title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.altarcutscene.eq(1) },
            unlocked() { return player.altarscene.lt(9) && player.altarscene.neq(0) },
            onClick() {
                player.altarscene = player.altarscene.sub(1)
            },
        },
        124: {
            title() { return "Sacrifice to Spaceon" },
            canClick() { return player.c.spacemetal.gte(player.i.altaramount) },
            unlocked() { return player.altarcutscene.eq(0) },
            onClick() {
                player.i.sacrificedspaceon = player.i.sacrificedspaceon.add(player.i.altaramount)
                player.c.spacemetal = player.c.spacemetal.sub(player.i.altaramount)
            },
            style: { width: '120px', "min-height": '20px', "background-color": "#095954", }
        },
        125: {
            title() { return "Sacrifice to Solaris" },
            canClick() { return player.c.solaritycoal.gte(player.i.altaramount) },
            unlocked() { return player.altarcutscene.eq(0) },
            onClick() {
                player.i.sacrificedsolaris = player.i.sacrificedsolaris.add(player.i.altaramount)
                player.c.solaritycoal = player.c.solaritycoal.sub(player.i.altaramount)
            },
            style: { width: '120px', "min-height": '20px', "background-color": "#a3a134", }
        },
        126: {
            title() { return "Sacrifice to Infinity" },
            canClick() { return player.c.scrapmetal.gte(player.i.altaramount) },
            unlocked() { return player.altarcutscene.eq(0) },
            onClick() {
                player.i.sacrificedinfinity = player.i.sacrificedinfinity.add(player.i.altaramount)
                player.c.scrapmetal = player.c.scrapmetal.sub(player.i.altaramount)
            },
            style: { width: '120px', "min-height": '20px', "background-color": "#5e4909", }
        },
        127: {
            title() { return "Sacrifice to Eternity" },
            canClick() { return player.c.timemetal.gte(player.i.altaramount) },
            unlocked() { return player.altarcutscene.eq(0) },
            onClick() {
                player.i.sacrificedeternity = player.i.sacrificedeternity.add(player.i.altaramount)
                player.c.timemetal = player.c.timemetal.sub(player.i.altaramount)
            },
            style: { width: '120px', "min-height": '20px', "background-color": "#3e0961", }
        },
        128: {
            title() { return "Sacrifice to Reality" },
            canClick() { return player.c.wires.gte(player.i.altaramount) },
            unlocked() { return player.altarcutscene.eq(0) },
            onClick() {
                player.i.sacrificedreality = player.i.sacrificedreality.add(player.i.altaramount)
                player.c.wires = player.c.wires.sub(player.i.altaramount)
            },
            style: { width: '120px', "min-height": '20px', "background-color": "#477300", }
        },
        129: {
            title() { return "Sacrifice to Drigganiz" },
            canClick() { return player.c.enhancepowder.gte(player.i.altaramount) },
            unlocked() { return player.altarcutscene.eq(0) },
            onClick() {
                player.i.sacrificeddrigganiz = player.i.sacrificeddrigganiz.add(player.i.altaramount)
                player.c.enhancepowder = player.c.enhancepowder.sub(player.i.altaramount)
            },
            style: { width: '120px', "min-height": '20px', "background-color": "#63005d", }
        },
        131: {
            title() { return "<h2>Turn your jacorbian energy into runes." },
            canClick() { return player.i.injacorbianbalancing.eq(1) && player.i.jacorbianrunestoget.gte(1)  },
            unlocked() { return true },
            onClick() {
                player.i.quirkpause = new Decimal(3)
                player.i.jacorbianenergy = new Decimal(0)
                player.i.buyables[108] = new Decimal(0)
                player.i.buyables[109] = new Decimal(0)
                player.i.buyables[111] = new Decimal(0)
                player.i.buyables[112] = new Decimal(0)
                player.i.buyables[113] = new Decimal(0)
                player.i.buyables[114] = new Decimal(0)
                player.i.buyables[115] = new Decimal(0)
                player.i.jacorbianrunes = player.i.jacorbianrunes.add(player.i.jacorbianrunestoget)
            },
            style: { "background-color": "purple", width: '400px', "min-height": '100px' },
        },
        132: {
            title() { return "+" + format(player.i.jacorbianrunestoget) + " JR" },
            canClick() { return player.i.enhancepath.eq(1) && player.i.quirkstoget.gte(1)  },
            unlocked() { return player.i.injacorbianbalancing.eq(1) && hasUpgrade("i", 114) },
            onClick() {
                player.i.quirkpause = new Decimal(3)
                player.i.jacorbianenergy = new Decimal(0)
                player.i.buyables[108] = new Decimal(0)
                player.i.buyables[109] = new Decimal(0)
                player.i.buyables[111] = new Decimal(0)
                player.i.buyables[112] = new Decimal(0)
                player.i.buyables[113] = new Decimal(0)
                player.i.buyables[114] = new Decimal(0)
                player.i.buyables[115] = new Decimal(0)
                player.i.jacorbianrunes = player.i.jacorbianrunes.add(player.i.jacorbianrunestoget)
            },
            style: {  width: '150px', "min-height": '60px', "background-color": "purple",  }
        },
        133: {
            title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.translatorcutscene.eq(1) },
            unlocked() { return player.translatorscene.lt(15) },
            onClick() {
                player.translatorscene = player.translatorscene.add(1)
            },
        },
        134: {
            title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.translatorcutscene.eq(1) },
            unlocked() { return player.translatorscene.lt(15) && player.translatorscene.neq(0) },
            onClick() {
                player.translatorscene = player.translatorscene.sub(1)
            },
        },
        135: {
            title() { return "POWER THE TRANSLATOR" },
            canClick() { return player.c.celestialbatteries.gte(25) },
            unlocked() { return player.m.translatorunlock.eq(0) && player.translatorcutscene.eq(0) },
            onClick() {
                player.m.translatorunlock = new Decimal(1)
            },
            style: { "background-color": "#c20282", width: '400px', "min-height": '100px' },
        },
        136: {
            title() { return "Transfer 10% of your stored quirk energy." },
            canClick() { return player.m.storedquirkenergy.gt(0) },
            unlocked() { return player.m.translatorunlock.eq(1) },
            onClick() {
                player.i.preservedquirkenergy = player.i.preservedquirkenergy.add(player.m.storedquirkenergy.mul(0.1))
                player.m.storedquirkenergy = player.m.storedquirkenergy.sub(player.m.storedquirkenergy.mul(0.1))
            },
            style: { "background-color": "#c20282", width: '400px', "min-height": '100px' },
        },
        137: {
            title() { return "<h2>Layer 14: Magic <br><h3>Req: 1e11 quirks." },
            canClick() { return player.i.quirks.gte(1e11) },
            unlocked() { return player.magiclayer.eq(0) },
            onClick() {
                player.magiclayer = new Decimal(1)
                // Particle effect
                alert("Magic. One of the most important forces of the multiverse.")
                alert("Half the dimensions have it, half of them don't.")
                alert("It is the force that can manipulate the laws of a given world.")
                alert("With magic, anything can happen.")
                alert("Also, you will meet my friend Demonin.")
                alert("Hope you guys become friends!")
                createParticles();
                createParticles();
                createParticles();
            },
            style: {   background: '#eb34c0',
            width: '275px', height: '150px',
            position: 'relative',
            overflow: 'hidden', 
            boxShadow: '0 0 20px 10px #eb34c0',
            textShadow: '1px 1px 2px rgba(0.8, 0.8, 0.8, 0.8)', // Text shadow
            border: '4px solid rgba(255, 255, 255, 0.3)', // Glowing border
            },
        },
        138: {
            title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.sitraunlockcutscene.eq(1) },
            unlocked() { return player.sitraunlockscene.lt(23) },
            onClick() {
                player.sitraunlockscene = player.sitraunlockscene.add(1)
            },
        },
        139: {
            title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.sitraunlockcutscene.eq(1) },
            unlocked() { return player.sitraunlockscene.lt(23) && player.sitraunlockscene.neq(0) },
            onClick() {
                player.sitraunlockscene = player.sitraunlockscene.sub(1)
            },
        },
        141: {
            title() { return "Pass the 1st set of requirements." },
            canClick() { return player.h.willpower.gte(1e14) && player.h.prestigepower.gte(100000) && player.h.redenergy.mul(player.h.greenenergy.mul(player.h.blueenergy)).gte(1e10) && player.h.countingpoints.gte(666) && player.h.shrinepower.gte(1000000) && player.m.points.gte(150000000) && player.m.incrementalenergy.gte(1500) && player.be.balanceenergy.gte(4000) && player.hi.hindrancespirits.gte(1500) && player.i.metaprestigetime.gte(2628288) && player.points.gte(1e70) && player.i.preservedquirkenergy.gte(2e9) && player.h.count.gte(35000) && player.c.craftingspeed.gte(400) && player.m.score.gte(16666)},
            unlocked() { return  player.sitraunlockcutscene.eq(0) && player.m.sitraunlock.eq(0) },
            onClick() {
                player.m.sitraunlock = new Decimal(1)
            },
        style: { "background-color": "#880808", width: '300px', "min-height": '75px' },
    },
    142: {
        title() { return "<h1>Summon the celestial of machines. You need 1 enhance medal. (found in crafting)" },
        canClick() { return player.c.enhancemedals.gte(1) },
        unlocked() { return player.sitraunlockcutscene.eq(0) && player.m.sitraunlock.eq(1) && player.i.enhancepath.eq(1) },
        onClick() {
            //addMistWithTextEffect(0.3, textsToShow)
            for (let i = 0; i < 80; i++)
            {
                createLightning();
            }
            player.i.sitraunlock = new Decimal(1)

            player.c.enhancemedals = player.c.enhancemedals.sub(1)
        },
        style: { 
        width: '700px',
        minHeight: '250px',
        position: 'relative',
        overflow: 'hidden', 
        boxShadow: '0 0 20px 10px #880808',
        textShadow: '1px 1px 2px #880808', // Text shadow
        border: '4px solid #880808', // Glowing border
        "background-color": "#880808",
        "opacity": "1",
        "background-image":  "repeating-radial-gradient( circle at 0 0, transparent 0, #ff0000 40px ), repeating-linear-gradient( #88080855, #880808 )",
     },
    },
    },
    bars: {
        beaconbar: {
            unlocked() { return player.i.enhancepath.eq(1) && player.beaconcutscene.eq(0) },
            direction: RIGHT,
            width: 476,
            height: 50,
            progress() {
                return player.i.beaconpower.div(player.i.beaconpowerreq)
            },
            fillStyle: {
                "background-color": "#b82fbd",
            },
            display() {
                return "<h5>" + format(player.i.beaconpower) + "/" + format(player.i.beaconpowerreq) + "<h5> beacon power to produce incremental power</h5>";
            },
        },
        playerhealthbar: {
            unlocked() { return player.i.ce308bossactivate.eq(1) && player.ce308bosscutscene.eq(0) && player.i.playerdead.eq(0) && player.i.beatce308.eq(0) },
            direction: RIGHT,
            width: 476,
            height: 50,
            progress() {
                return player.i.playerhealth.div(250)
            },
            fillStyle: {
                "background-color": "red",
            },
            display() {
                return "<h5>" + format(player.i.playerhealth) + "/250 HP</h5>";
            },
        },
        ce308bar: {
            unlocked() { return player.i.ce308bossactivate.eq(1) && player.ce308bosscutscene.eq(0) && player.i.beatce308.eq(0) },
            direction: RIGHT,
            width: 476,
            height: 50,
            progress() {
                return player.i.truemachines.div(1000000)
            },
            fillStyle: {
                "background-color": "#ffffaa",
            },
            display() {
                return "<h5>" + format(player.i.truemachines) + "/1,000,000 True Machines to defeat Ce308</h5>";
            },
        },
    },
    upgrades: {
        //STANDARD PATH
        11:
        {
            title: "SP Prestige Upgrade I",
            unlocked() { return player.i.standardpath.eq(1) },
            description: "Boosts points based on prestige points.",
            cost: new Decimal(10),
            currencyLocation() { return player.i },
            canAfford() { return player.i.standardpath.eq(1)},
            effect() 
            {
                 return player[this.layer].prestigepoints.add(1).pow(0.4)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
            currencyDisplayName: "Prestige Points",
            currencyInternalName: "prestigepoints",
        },
        12:
        {
            title: "SP Prestige Upgrade II",
            unlocked() { return player.i.standardpath.eq(1) && hasUpgrade("i", 11) },
            description: "Automatically buys main buyables without spending points.",
            cost: new Decimal(10000),
            canAfford() { return player.i.standardpath.eq(1)},
            currencyLocation() { return player.i },
            currencyDisplayName: "Prestige Points",
            currencyInternalName: "prestigepoints",
        },
        13:
        {
            title: "SP Prestige Upgrade III",
            unlocked() { return player.i.standardpath.eq(1) && hasUpgrade("i", 12) },
            description: "Unlocks machines.",
            cost: new Decimal(1e6),
            canAfford() { return player.i.standardpath.eq(1)},
            currencyLocation() { return player.i },
            currencyDisplayName: "Prestige Points",
            currencyInternalName: "prestigepoints",
            onPurchase()
            {
                if (player.i.prestigeenergy.eq(0))
                {
                    if (player.yhvrcutscene2.eq(0))
                    {
                   alert("Very smart.")
                   alert("You chose to not produce prestige energy.")
                   alert("You know that prestige energy and corruption can cause issues.")
                   alert("You will gain more incremental energy from doing this.")
                   alert("Great job.")
                    }
                   player.yhvrcutscene2 = new Decimal(1)
                   player.i.noenergyboost = new Decimal(2)
                }
                
            },
        },
        14:
        {
            title: "SP Prestige Upgrade IV",
            unlocked() { return player.i.standardpath.eq(1) && hasUpgrade("i", 13) && hasUpgrade("m", 15) },
            description: "Unlocks pure energy.",
            cost: new Decimal(1e8),
            canAfford() { return player.i.standardpath.eq(1)},
            currencyLocation() { return player.i },
            currencyDisplayName: "Prestige Points",
            currencyInternalName: "prestigepoints",
            onPurchase()
            {
                    if (player.yhvrcutscene3.eq(0))
                    {
                   alert("You have reached the next layer.")
                   alert("This layer is huge. It is the final one of this path.")
                   alert("At the end, you will find yourself against a celestial.")
                   alert("Don't worry, it's not really a celestial. It's a pseudo-celestial.")
                   alert("The power of your prestige machines should be effective against this celestial.")
                   alert("Your purpose of being our hero is to REUNITE THE SIX REALMS OF THE MULTIVERSE.")
                   alert("However, it will be baby steps. You will be great, don't worry.")
                   alert("It will only take time.")
                }
                   player.yhvrcutscene3 = new Decimal(1)
            },
        },
        15:
        {
            title: "Pure Energy Upgrade I",
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) },
            description: "Keeps prestige upgrades on reset.",
            cost: new Decimal(3),
            canAfford() { return player.i.standardpath.eq(1)},
            currencyLocation() { return player.i },
            currencyDisplayName: "Pure Energy",
            currencyInternalName: "pureenergy",
            onPurchase() {},
        },
        16:
        {
            title: "Pure Energy Upgrade II",
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) && hasUpgrade("i", 15) },
            description: "Autobuy prestige buyables without them spending.",
            cost: new Decimal(10),
            canAfford() { return player.i.standardpath.eq(1)},
            currencyLocation() { return player.i },
            currencyDisplayName: "Pure Energy",
            currencyInternalName: "pureenergy",
            onPurchase() {},
        },
        17:
        {
            title: "Pure Energy Upgrade III",
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) && hasUpgrade("i", 16) },
            description: "Unlocks energizers.",
            cost: new Decimal(50),
            canAfford() { return player.i.standardpath.eq(1)},
            currencyLocation() { return player.i },
            currencyDisplayName: "Pure Energy",
            currencyInternalName: "pureenergy",
            onPurchase() {},
        },
        18:
        {
            title: "Pure Energy Upgrade IV",
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) && hasUpgrade("i", 17) },
            description: "Unlocks buyables.",
            cost: new Decimal(250),
            canAfford() { return player.i.standardpath.eq(1)},
            currencyLocation() { return player.i },
            currencyDisplayName: "Pure Energy",
            currencyInternalName: "pureenergy",
            onPurchase() {},
        },
        19:
        {
            title: "Pure Energy Upgrade V",
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) && hasUpgrade("i", 18) },
            description: "Unlocks automation for prestige machines (in prestige tab).",
            cost: new Decimal(750),
            canAfford() { return player.i.standardpath.eq(1)},
            currencyLocation() { return player.i },
            currencyDisplayName: "Pure Energy",
            currencyInternalName: "pureenergy",
            onPurchase() {},
        },
        21:
        {
            title: "Pure Energy Upgrade VI",
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) && hasUpgrade("i", 19) },
            description: "Unlocks enhancers. (Buyables tab).",
            cost: new Decimal(5000),
            canAfford() { return player.i.standardpath.eq(1)},
            currencyLocation() { return player.i },
            currencyDisplayName: "Pure Energy",
            currencyInternalName: "pureenergy",
            onPurchase() {},
        },
        22:
        {
            title: "Pure Energy Upgrade VII",
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) && hasUpgrade("i", 21) },
            description: "Gain 100% of prestige points per second.",
            cost: new Decimal(25000),
            canAfford() { return player.i.standardpath.eq(1)},
            currencyLocation() { return player.i },
            currencyDisplayName: "Pure Energy",
            currencyInternalName: "pureenergy",
            onPurchase() {},
        },
        23:
        {
            title: "Pure Energy Upgrade VIII",
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) && hasUpgrade("i", 22) },
            description: "Gives extra corruption delay based on enhancers.",
            cost: new Decimal(100000),
            canAfford() { return player.i.standardpath.eq(1)},
            currencyLocation() { return player.i },
            currencyDisplayName: "Pure Energy",
            currencyInternalName: "pureenergy",
            effect() 
            {
                 return player.i.buyables[23].mul(2)
            },
            effectDisplay() { return "+" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
            onPurchase() {},
        },
        24:
        {
            title: "Pure Energy Upgrade IX",
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) && hasUpgrade("i", 23) && player.m.craftingunlock.eq(1) },
            description: "Unlocks the superifier.",
            cost: new Decimal(1e6),
            canAfford() { return player.i.standardpath.eq(1)},
            currencyLocation() { return player.i },
            currencyDisplayName: "Pure Energy",
            currencyInternalName: "pureenergy",
        },
        25:
        {
            title: "Pure Energy Upgrade X",
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) && hasUpgrade("i", 24) },
            description: "Unlocks super prestige energy.",
            cost: new Decimal(2.5e6),
            canAfford() { return player.i.standardpath.eq(1)},
            currencyLocation() { return player.i },
            currencyDisplayName: "Pure Energy",
            currencyInternalName: "pureenergy",
        },
        26:
        {
            title: "Pure Energy Upgrade XI",
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) && hasUpgrade("i", 25) },
            description: "Unlocks super pure energy.",
            cost: new Decimal(6e6),
            canAfford() { return player.i.standardpath.eq(1)},
            currencyLocation() { return player.i },
            currencyDisplayName: "Pure Energy",
            currencyInternalName: "pureenergy",
        },
        27:
        {
            title: "Pure Energy Upgrade XII",
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) && hasUpgrade("i", 26) },
            description: "Unlocks THE CELESTIAL. (Remember, you need the battery!)",
            cost: new Decimal(3e7),
            canAfford() { return player.i.standardpath.eq(1) && player.c.celestialbatteries.gte(1) },
            currencyLocation() { return player.i },
            currencyDisplayName: "Pure Energy",
            currencyInternalName: "pureenergy",
            onPurchase()
            {
                    if (player.yhvrcutscene7.eq(0))
                    {
                   alert("Finally. You are here now. The pseudo-celestial.")
                   alert("Its name is Ce308. Despite it being a pseudo-celestial, it is still quite powerful.")
                   alert("Don't you dare die. We can't afford another casualty.")
                   alert("Just remember you can be killed at any moment.")
                   alert("Even if the celestial goes rogue, just stick with your gut.")
                   alert("Keep progressing through the standard path, no matter what it throws at you.")
                   alert("Good luck.")
                  }
                   player.yhvrcutscene7 = new Decimal(1)
            },
        },
        28:
        {
            title: "Pseudo-Celestial Upgrade I",
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) && hasUpgrade("i", 27) },
            description: "Unlocks a new energizer.",
            cost: new Decimal(4),
            canAfford() { return player.i.standardpath.eq(1) && hasUpgrade("i", 27) },
            currencyLocation() { return player.i },
            currencyDisplayName: "Celestial Energy",
            currencyInternalName: "celestialenergy",
        },
        29:
        {
            title: "Pseudo-Celestial Upgrade II",
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) && hasUpgrade("i", 28) },
            description: "Unlocks quirk energy.",
            cost: new Decimal(28),
            canAfford() { return player.i.standardpath.eq(1) && hasUpgrade("i", 27) },
            currencyLocation() { return player.i },
            currencyDisplayName: "Celestial Energy",
            currencyInternalName: "celestialenergy",
        },
        31:
        {
            title: "Pseudo-Celestial Upgrade III",
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) && hasUpgrade("i", 29) },
            description: "You don't reset energizers on celestial reset.",
            cost: new Decimal(340),
            canAfford() { return player.i.standardpath.eq(1) && hasUpgrade("i", 27) },
            currencyLocation() { return player.i },
            currencyDisplayName: "Celestial Energy",
            currencyInternalName: "celestialenergy",
        },
        32:
        {
            title: "Pseudo-Celestial Upgrade IV",
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) && hasUpgrade("i", 31) },
            description: "Celestial energy boosts its own gain.",
            cost: new Decimal(999),
            canAfford() { return player.i.standardpath.eq(1) && hasUpgrade("i", 27) },
            currencyLocation() { return player.i },
            currencyDisplayName: "Celestial Energy",
            currencyInternalName: "celestialenergy",
            effect() 
            {
                 return player.i.celestialenergy.pow(0.2).add(1)
            },
            effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        },
        33:
        {
            title: "Pseudo-Celestial Upgrade V",
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) && hasUpgrade("i", 32) },
            description: "Keep pure energy upgrades on reset.",
            cost: new Decimal(4444),
            canAfford() { return player.i.standardpath.eq(1) && hasUpgrade("i", 27) },
            currencyLocation() { return player.i },
            currencyDisplayName: "Celestial Energy",
            currencyInternalName: "celestialenergy",
        },
        34:
        {
            title: "Pseudo-Celestial Upgrade VI",
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) && hasUpgrade("i", 33) },
            description: "Gain 25% of super resources every second.",
            cost: new Decimal(33333),
            canAfford() { return player.i.standardpath.eq(1) && hasUpgrade("i", 27) },
            currencyLocation() { return player.i },
            currencyDisplayName: "Celestial Energy",
            currencyInternalName: "celestialenergy",
        },
        35:
        {
            title: "Pseudo-Celestial Upgrade VII",
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) && hasUpgrade("i", 34) },
            description: "Unlocks celestial tasks.",
            cost: new Decimal(100000),
            canAfford() { return player.i.standardpath.eq(1) && hasUpgrade("i", 27) },
            currencyLocation() { return player.i },
            currencyDisplayName: "Celestial Energy",
            currencyInternalName: "celestialenergy",
        },
        36:
        {
            title: "Pseudo-Celestial Upgrade VIII",
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) && hasUpgrade("i", 35) },
            description: "Machine automation doesn't reset.",
            cost: new Decimal(10000000),
            canAfford() { return player.i.standardpath.eq(1) && hasUpgrade("i", 27) },
            currencyLocation() { return player.i },
            currencyDisplayName: "Celestial Energy",
            currencyInternalName: "celestialenergy",
        },
        37:
        {
            title: "Pseudo-Celestial Upgrade IX",
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) && hasUpgrade("i", 36) && player.m.energytask.gte(2) && player.m.metatask.gte(2) && player.m.challengetask.gte(2) && player.m.craftingtask.gte(2) },
            description: "Unlocks hindrance energy.",
            cost: new Decimal(2.5e8),
            canAfford() { return player.i.standardpath.eq(1) && hasUpgrade("i", 27) },
            currencyLocation() { return player.i },
            currencyDisplayName: "Celestial Energy",
            currencyInternalName: "celestialenergy",
        },
        38:
        {
            title: "Pseudo-Celestial Upgrade X",
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) && hasUpgrade("i", 37) && player.hindrancelayer.gte(1) },
            description: "Unlocks hindrance points.",
            cost: new Decimal(5e11),
            canAfford() { return player.i.standardpath.eq(1) && hasUpgrade("i", 27) },
            currencyLocation() { return player.i },
            currencyDisplayName: "Celestial Energy",
            currencyInternalName: "celestialenergy",
        },
        39:
        {
            title: "Pseudo-Celestial Upgrade XI",
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) && hasUpgrade("i", 38) && player.hindrancelayer.gte(1) },
            description: "Autobuys hindrance factors without spending.",
            cost: new Decimal(1e16),
            canAfford() { return player.i.standardpath.eq(1) && hasUpgrade("i", 27) },
            currencyLocation() { return player.i },
            currencyDisplayName: "Celestial Energy",
            currencyInternalName: "celestialenergy",
        },
        41:
        {
            title: "Pseudo-Celestial Upgrade XII",
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) && hasUpgrade("i", 39) },
            description: "Boosts hindrance energy based on points.",
            cost: new Decimal(1e20),
            canAfford() { return player.i.standardpath.eq(1) && hasUpgrade("i", 27) },
            currencyLocation() { return player.i },
            currencyDisplayName: "Celestial Energy",
            currencyInternalName: "celestialenergy",
            effect() 
            {
                 return player.points.plus(1).log10().add(1)
            },
            effectDisplay() { return "x" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
        },
        42:
        {
            title: "Post-Celestial Upgrade I",
            unlocked() { return player.i.standardpath.eq(1) && player.m.jacorborbunlock.eq(1) },
            description: "Unlocks quirk energy transfer.",
            cost: new Decimal(1e24),
            canAfford() { return player.i.standardpath.eq(1) && hasUpgrade("i", 27) },
            currencyLocation() { return player.i },
            currencyDisplayName: "Celestial Energy",
            currencyInternalName: "celestialenergy",
        },
        //ENHANCE PATH

        101:
        {
            title: "EP Prestige Upgrade I",
            unlocked() { return player.i.enhancepath.eq(1) },
            description: "Unlocks enhance points.",
            cost: new Decimal(2.5e6),
            currencyLocation() { return player.i },
            canAfford() { return player.i.enhancepath.eq(1)},
            currencyDisplayName: "Prestige Points",
            currencyInternalName: "prestigepoints",
        },
        102:
        {
            title: "EP Prestige Upgrade II",
            unlocked() { return player.i.enhancepath.eq(1) && hasUpgrade("i", 101) },
            description: "Unlocks true enhancers.",
            cost: new Decimal(1e7),
            currencyLocation() { return player.i },
            canAfford() { return player.i.enhancepath.eq(1)},
            currencyDisplayName: "Prestige Points",
            currencyInternalName: "prestigepoints",
        },
        103:
        {
            title: "EP Prestige Upgrade III",
            unlocked() { return player.i.enhancepath.eq(1) && hasUpgrade("i", 102) },
            description: "Automatically buys main buyables without spending points.",
            cost: new Decimal(2.5e7),
            currencyLocation() { return player.i },
            canAfford() { return player.i.enhancepath.eq(1)},
            currencyDisplayName: "Prestige Points",
            currencyInternalName: "prestigepoints",
        },
        104:
        {
            title: "EP Prestige Upgrade IV",
            unlocked() { return player.i.enhancepath.eq(1) && hasUpgrade("i", 103) },
            description: "Unlocks the enhance beacon.",
            cost: new Decimal(1.5e8),
            currencyLocation() { return player.i },
            canAfford() { return player.i.enhancepath.eq(1)},
            currencyDisplayName: "Prestige Points",
            currencyInternalName: "prestigepoints",
        },
        105:
        {
            title: "EP Prestige Upgrade V",
            unlocked() { return player.i.enhancepath.eq(1) && hasUpgrade("i", 104) && player.quirklayer.eq(1) },
            description: "Unlocks beacon points.",
            cost: new Decimal(1e11),
            currencyLocation() { return player.i },
            canAfford() { return player.i.enhancepath.eq(1)},
            currencyDisplayName: "Prestige Points",
            currencyInternalName: "prestigepoints",
        },
        106:
        {
            title: "EP Prestige Upgrade VII",
            unlocked() { return player.i.enhancepath.eq(1) && hasUpgrade("i", 105) && player.defeatedce308.eq(1) },
            description: "Unlocks quirks (don't we have enough quirk-related stuff).",
            cost: new Decimal(1e20),
            currencyLocation() { return player.i },
            canAfford() { return player.i.enhancepath.eq(1)},  
            currencyDisplayName: "Prestige Points",  
            currencyInternalName: "prestigepoints",  
        },  
        107:  
        {  
            title: "Quirk Upgrade I",  
            unlocked() { return player.i.enhancepath.eq(1) && hasUpgrade("i", 106) },  
            description: "Unlocks quirk improvements.",  
            cost: new Decimal(2),  
            currencyLocation() { return player.i },  
            canAfford() { return player.i.enhancepath.eq(1)},  
            currencyDisplayName: "Quirks",  
            currencyInternalName: "quirks",  
            onPurchase()  
            {  
                    if (player.yhvrcutscene11.eq(0))  
                    {  
                   alert("When he offered me the job, I was beyond confused.")  
                   alert("Multiple dimensions? Realms? War? Incremental?")  
                   alert("I turned him down. He wasn't convincing enough.")  
                   alert("But every day after that, I noticed things changing.")  
                   alert("Everyone I knew started shifting their personalities.")  
                   alert("They all became mindless husks, they had all become robot-like.")  
                   alert("After that, it was the weather.")  
                   alert("It was raining every day, all day. The sun never showed itself at all.")  
                   alert("Then, it was the very fabric of reality itself.")  
                   alert("Things started falling upwards, telelporting randomly, and a lot more wacky events.")  
                   alert("Then something grand happened...")
                  }
                   player.yhvrcutscene11 = new Decimal(1)
            },
        },
        108:
        {
            title: "Quirk Upgrade II",
            unlocked() { return player.i.enhancepath.eq(1) && hasUpgrade("i", 107) },
            description: "Autobuy beacon levels per second based on enhance points.",
            cost: new Decimal(8),
            currencyLocation() { return player.i },
            canAfford() { return player.i.enhancepath.eq(1)},
            currencyDisplayName: "Quirks",
            currencyInternalName: "quirks",
            effect() 
            {
                 return player.i.enhancepoints.plus(1).log10().pow(2.5).add(1).mul(buyableEffect("i", 117)).mul(buyableEffect("h", 77))
            },
            effectDisplay() { return "+" + format(upgradeEffect(this.layer, this.id)) }, // Add formatting to the effect
            onPurchase()
            {
                    if (player.yhvrcutscene12.eq(0))
                    {
                   alert("It was me, all along. My three-dimensional world couldn't handle my eight-dimensional soul.")
                   alert("I belonged in a greater world. One with an adaptable number of dimensions.")
                   alert("I caused the end of my own dimension.")
                   alert("It was just me. Nothing else. I had converted my world into one of higher dimensions, but nothing can be contained in it.")
                   alert("Until a hyper-dimensional being of great power came up to me.")
                   alert("It was not the same being as before. This one had a white glow. It took form of a cat of some sort.")
                   alert("It told me a few things.")
                   alert("My true name is Yhvr. It means 'God of infinite dimensions' in an ancient unknown language.")
                   alert("I would one day inhibit an infinite amount of dimensions, and reach true infinity.")
                   alert("And then I woke up and I found him. I was in Meta Studio. My leader was Flamemaster.")
                  }
                   player.yhvrcutscene12 = new Decimal(1)
            },
        },
        109:
        {
            title: "Quirk Upgrade III",
            unlocked() { return player.i.enhancepath.eq(1) && hasUpgrade("i", 108) },
            description: "Enhance 10% of prestige points per second.",
            cost: new Decimal(40),
            currencyLocation() { return player.i },
            canAfford() { return player.i.enhancepath.eq(1)},
            currencyDisplayName: "Quirks",
            currencyInternalName: "quirks",
        },
        111:
        {
            title: "Quirk Upgrade IV",
            unlocked() { return player.i.enhancepath.eq(1) && hasUpgrade("i", 109) },
            description: "Gain 10% of beacon points per second.",
            cost: new Decimal(250),
            currencyLocation() { return player.i },
            canAfford() { return player.i.enhancepath.eq(1)},
            currencyDisplayName: "Quirks",
            currencyInternalName: "quirks",
        },
        112:
        {
            title: "Quirk Upgrade V",
            unlocked() { return player.i.enhancepath.eq(1) && hasUpgrade("i", 111) },
            description: "Autobuy beacon buyables and unlock Jacorbian Balancing.",
            cost: new Decimal(1000),
            currencyLocation() { return player.i },
            canAfford() { return player.i.enhancepath.eq(1)},
            currencyDisplayName: "Quirks",
            currencyInternalName: "quirks",
        },
        113:
        {
            title: "Quirk Upgrade VI",
            unlocked() { return player.i.enhancepath.eq(1) && hasUpgrade("i", 112) },
            description: "Unlocks the altar.",
            cost: new Decimal(250000),
            currencyLocation() { return player.i },
            canAfford() { return player.i.enhancepath.eq(1)},
            currencyDisplayName: "Quirks",
            currencyInternalName: "quirks",
        },
        114:
        {
            title: "Quirk Upgrade VII",
            unlocked() { return player.i.enhancepath.eq(1) && hasUpgrade("i", 113) },
            description: "Unlocks jacorbian runes. (in balancing) (ALSO UNLOCKS A CRAFTING RECIPE)",
            cost: new Decimal(1000000000),
            currencyLocation() { return player.i },
            canAfford() { return player.i.enhancepath.eq(1)},
            currencyDisplayName: "Quirks",
            currencyInternalName: "quirks",
            onPurchase()
            {
                player.m.jacorborbunlock = new Decimal(1)
            },
        },
        115:
        {
            title: "Quirk Upgrade VIII",
            unlocked() { return player.i.enhancepath.eq(1) && hasUpgrade("i", 114) },
            description: "Unlocks the quirk translator.",
            cost: new Decimal(1e10),
            currencyLocation() { return player.i },
            canAfford() { return player.i.enhancepath.eq(1)},
            currencyDisplayName: "Quirks",
            currencyInternalName: "quirks",
        },
        116:
        {
            title: "Quirk Upgrade IX",
            unlocked() { return player.i.enhancepath.eq(1) && hasUpgrade("i", 115) },
            description: "Unlocks Sitra (remember, there is a big goal).",
            cost: new Decimal(1e12),
            currencyLocation() { return player.i },
            canAfford() { return player.i.enhancepath.eq(1)},
            currencyDisplayName: "Quirks",
            currencyInternalName: "quirks",
        },
    },
    buyables: {
        11: {
            cost(x) { return new Decimal(1.08).pow(x || getBuyableAmount(this.layer, this.id)).mul(1) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.1) },
            unlocked() { return true },
            canAfford() { return player.points.gte(this.cost()) },
            title() {
                return hasUpgrade("m", 16) ? format(getBuyableAmount(this.layer, this.id), 0) + " + " + format(upgradeEffect("m", 16)) + "<br/> Point Producer" : format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Point Producer"
            },
            tooltip() {
                return "<h5>This is just an ordinary game."
            },
            display() {
                return "which are producing +" + format(tmp[this.layer].buyables[this.id].effect) + " points per second.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Points"
            },
            buy() {
                let base = new Decimal(1)
                let growth = 1.08
                let max = Decimal.affordGeometricSeries(player.points, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))

                if (!hasUpgrade("i", 103))
                {
                    if (!hasUpgrade("i", 12)) player.points = player.points.sub(cost)
                }
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', }
        },
        12: {
            cost(x) { return new Decimal(1.12).pow(x || getBuyableAmount(this.layer, this.id)).mul(10) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.1).add(1) },
            unlocked() { return true },
            canAfford() { return player.points.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Point Processor"
            },
            tooltip() {
                return "<h5>This is the blank canvas for any incremental game."
            },
            display() {
                return "which are boosting points by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Points"
            },
            buy() {
                let base = new Decimal(10)
                let growth = 1.12
                let max = Decimal.affordGeometricSeries(player.points, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 103))
                {
                    if (!hasUpgrade("i", 12)) player.points = player.points.sub(cost)
                }
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', }
        },
        13: {
            cost(x) { return new Decimal(1.2).pow(x || getBuyableAmount(this.layer, this.id)).mul(100) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.2).pow(1.2).add(1) },
            unlocked() { return true },
            canAfford() { return player.points.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Point Powerer"
            },
            tooltip() {
                return "<h5>This is the framework for much better games."
            },
            display() {
                return "which are boosting points by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Points"
            },
            buy() {
                let base = new Decimal(100)
                let growth = 1.2
                let max = Decimal.affordGeometricSeries(player.points, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 103))
                {
                    if (!hasUpgrade("i", 12)) player.points = player.points.sub(cost)
                }
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', }
        },
        14: {
            cost(x) { return new Decimal(1.3).pow(x || getBuyableAmount(this.layer, this.id)).mul(1) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.5).pow(1.3).add(1) },
            unlocked() { return player.prestigecutscene.eq(0) },
            canAfford() { return player.i.prestigepoints.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Prestige Point Buyable"
            },
            tooltip() {
                return "<h5>Incremental power was the strongest form of power, now it's barely passing."
            },
            display() {
                return "which are boosting points by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Prestige Points"
            },
            buy() {
                let base = new Decimal(1)
                let growth = 1.3
                let max = Decimal.affordGeometricSeries(player.i.prestigepoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("m", 26))
                {
                if (!hasUpgrade("i", 16)) player.i.prestigepoints = player.i.prestigepoints.sub(cost)
                }
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#31aeb0",}
        },
        //standard path
        15: {
            cost(x) { return new Decimal(1.5).pow(x || getBuyableAmount(this.layer, this.id)).mul(5) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.1)},
            unlocked() { return player.prestigecutscene.eq(0) && (player.i.standardpath.eq(1)) },
            canAfford() { return player.i.prestigepoints.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Energy Extractor"
            },
            tooltip() {
                return "<h5>This should make incremental power stronger."
            },
            display() {
                return "which are producing +" + format(tmp[this.layer].buyables[this.id].effect) + " prestige energy per second.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Prestige Points"
            },
            buy() {
                let base = new Decimal(5)
                let growth = 1.5
                let max = Decimal.affordGeometricSeries(player.i.prestigepoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("m", 26))
                {
                if (!hasUpgrade("i", 16)) player.i.prestigepoints = player.i.prestigepoints.sub(cost)
                }
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#31aeb0",}
        },
        16: {
            cost(x) { return new Decimal(1.5).pow(x || getBuyableAmount(this.layer, this.id)).mul(2) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).pow(2)},
            unlocked() { return player.pureenergycutscene.eq(0) && (player.i.standardpath.eq(1)) },
            canAfford() { return player.i.pureenergy.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Generator Energy Producer"
            },
            tooltip() {
                return "<h5>galaxy.click was recently made. The future should be bright."
            },
            display() {
                return "which are producing +" + format(tmp[this.layer].buyables[this.id].effect) + " generator energy per second.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Pure Energy"
            },
            buy() {
                let base = new Decimal(2)
                let growth = 1.5
                let max = Decimal.affordGeometricSeries(player.i.pureenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("m", 28)) player.i.pureenergy = player.i.pureenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#a3d9a5",}
        },
        17: {
            cost(x) { return new Decimal(1.5).pow(x || getBuyableAmount(this.layer, this.id)).mul(2) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).pow(2)},
            unlocked() { return player.pureenergycutscene.eq(0) && (player.i.standardpath.eq(1)) },
            canAfford() { return player.i.pureenergy.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Booster Energy Producer"
            },
            tooltip() {
                return "<h5>However, the void grows stronger. I don't think things are gonna go well."
            },
            display() {
                return "which are producing +" + format(tmp[this.layer].buyables[this.id].effect) + " booster energy per second.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Pure Energy"
            },
            buy() {
                let base = new Decimal(2)
                let growth = 1.5
                let max = Decimal.affordGeometricSeries(player.i.pureenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("m", 28)) player.i.pureenergy = player.i.pureenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#6e64c4",}
        },
        18: {
            cost(x) { return new Decimal(1.5).pow(x || getBuyableAmount(this.layer, this.id)).mul(100) },
            effect(x) { return new getBuyableAmount(this.layer, this.id)},
            unlocked() { return player.pureenergycutscene.eq(0) && (player.i.standardpath.eq(1)) },
            canAfford() { return player.i.boosterenergy.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Corruption Delayer"
            },
            tooltip() {
                return "<h5>The time before the war was great. We were going to create our first hero."
            },
            display() {
                return "You can own +" + format(tmp[this.layer].buyables[this.id].effect) + " prestige machines before corruptions spawn.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Booster Energy"
            },
            buy() {
                let base = new Decimal(100)
                let growth = 1.5
                let max = Decimal.affordGeometricSeries(player.i.boosterenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("m", 28)) player.i.boosterenergy = player.i.boosterenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#6e64c4",}
        },
        19: {
            cost(x) { return new Decimal(1.5).pow(x || getBuyableAmount(this.layer, this.id)).mul(100) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).pow(0.8).add(1)},
            unlocked() { return player.pureenergycutscene.eq(0) && (player.i.standardpath.eq(1)) },
            canAfford() { return player.i.generatorenergy.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Prestige Energy Amplifier"
            },
            tooltip() {
                return "<h5>We were so close. Why did it have to happen?"
            },
            display() {
                return "which are boosting prestige energy gain and dividing the downside by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Generator Energy"
            },
            buy() {
                let base = new Decimal(100)
                let growth = 1.5
                let max = Decimal.affordGeometricSeries(player.i.generatorenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("m", 28)) player.i.generatorenergy = player.i.generatorenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#a3d9a5",}
        },
        21: {
            cost(x) { return new Decimal(1.75).pow(x || getBuyableAmount(this.layer, this.id)).mul(2500) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).pow(1.1).add(1) },
            unlocked() { return player.pureenergycutscene.eq(0) && (player.i.standardpath.eq(1)) },
            canAfford() { return player.i.boosterenergy.gte(this.cost()) },
            title() {        
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Generator Synergy"
            },
            tooltip() {
                return "<h5>All of this could have been easily avoided. We were so naive."
            },
            display() {
                return "which are boosting generator energy by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Booster Energy"
            },
            buy() {
                let base = new Decimal(2500)
                let growth = 1.75
                let max = Decimal.affordGeometricSeries(player.i.boosterenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("m", 28)) player.i.boosterenergy = player.i.boosterenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#6e64c4",}
        },
        22: {
            cost(x) { return new Decimal(1.75).pow(x || getBuyableAmount(this.layer, this.id)).mul(2500) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).pow(1.1).add(1)},
            unlocked() { return player.pureenergycutscene.eq(0) && (player.i.standardpath.eq(1)) },
            canAfford() { return player.i.generatorenergy.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Booster Synergy"
            },
            tooltip() {
                return "<h5>If it wasn't for ????????, we would have been fine."
            },
            display() {
                return "which are boosting booster energy by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Generator Energy"
            },
            buy() {
                let base = new Decimal(2500)
                let growth = 1.75
                let max = Decimal.affordGeometricSeries(player.i.generatorenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("m", 28)) player.i.generatorenergy = player.i.generatorenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#a3d9a5",}
        },
        23: {
            cost(x) { return new Decimal(1.5).pow(x || getBuyableAmount(this.layer, this.id)).mul(1000) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).pow(0.5).add(1)},
            unlocked() { return player.pureenergycutscene.eq(0) && (player.i.standardpath.eq(1)) && hasUpgrade("i", 21) },
            canAfford() { return player.i.pureenergy.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Enhancers"
            },
            tooltip() {
                return "<h5>Enhance points. A crude form of jacorbian energy."
            },
            display() {
                return "which are boosting prestige points and pure, prestige, generator, and booster energy by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Pure Energy"
            },
            buy() {
                let base = new Decimal(1000)
                let growth = 1.5
                let max = Decimal.affordGeometricSeries(player.i.pureenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("m", 28)) player.i.pureenergy = player.i.pureenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#b82fbd",}
        },
        24: {
            cost(x) { return new Decimal(1.3).pow(x || getBuyableAmount(this.layer, this.id)).mul(100) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.4).pow(0.6).add(1)},
            unlocked() { return player.quirkenergycutscene.eq(0) && (player.i.standardpath.eq(1)) },
            canAfford() { return player.i.quirkenergy.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Celestial Amplifier"
            },
            tooltip() {
                return "<h5>The power of quirks can be found within the cells of celestials."
            },
            display() {
                return "which are boosting celestial energy by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Quirk Energy"
            },
            buy() {
                let base = new Decimal(100)
                let growth = 1.3
                let max = Decimal.affordGeometricSeries(player.i.quirkenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.quirkenergy = player.i.quirkenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#c20282",}
        },
        25: {
            cost(x) { return new Decimal(1.25).pow(x || getBuyableAmount(this.layer, this.id)).mul(25) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.5).pow(0.65).add(1)},
            unlocked() { return player.quirkenergycutscene.eq(0) && (player.i.standardpath.eq(1)) && hasUpgrade("i", 31) },
            canAfford() { return player.i.celestialenergy.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Quirk Booster"
            },
            tooltip() {
                return "<h5>Despite this, it's still hard to study them. Only a certain group of people knows their properties."
            },
            display() {
                return "which are boosting quirk energy by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Celestial Energy"
            },
            buy() {
                let base = new Decimal(25)
                let growth = 1.25
                let max = Decimal.affordGeometricSeries(player.i.celestialenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.celestialenergy = player.i.celestialenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', 'color': 'white', 'border-color': 'blue', 'background-image': 'radial-gradient(circle, rgba(16,15,16,1) 0%, rgba(8,0,255,1) 0%, rgba(0,0,0,1) 100%)', animation: "gradient 1s infinite", }
        },
        26: {
            cost(x) { return new Decimal(1.2).pow(x || getBuyableAmount(this.layer, this.id)).mul(1e7) },
            effect(x) { return new getBuyableAmount(this.layer, this.id)},
            unlocked() { return player.hindranceenergycutscene.eq(0) && (player.i.standardpath.eq(1)) },
            canAfford() { return player.i.celestialenergy.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Hindrance Factor I"
            },
            display() {
                return "which are generating +" + format(tmp[this.layer].buyables[this.id].effect) + " hindrance energy per second.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Celestial Energy"
            },
            buy() {
                let base = new Decimal(1e7)
                let growth = 1.2
                let max = Decimal.affordGeometricSeries(player.i.celestialenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 39)) player.i.celestialenergy = player.i.celestialenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#a14040",}
        },
        27: {
            cost(x) { return new Decimal(1.225).pow(x || getBuyableAmount(this.layer, this.id)).mul(4e7) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).add(1)},
            unlocked() { return player.hindranceenergycutscene.eq(0) && (player.i.standardpath.eq(1)) },
            canAfford() { return player.i.celestialenergy.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Hindrance Factor II"
            },
            display() {
                return "which are boosting hindrance energy by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Celestial Energy"
            },
            buy() {
                let base = new Decimal(4e7)
                let growth = 1.225
                let max = Decimal.affordGeometricSeries(player.i.celestialenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 39)) player.i.celestialenergy = player.i.celestialenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#a14040",}
        },
        28: {
            cost(x) { return new Decimal(1.25).pow(x || getBuyableAmount(this.layer, this.id)).mul(2e8) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).add(1)},
            unlocked() { return player.hindranceenergycutscene.eq(0) && (player.i.standardpath.eq(1)) },
            canAfford() { return player.i.celestialenergy.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Hindrance Factor III"
            },
            display() {
                return "which are boosting hindrance energy by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Celestial Energy"
            },
            buy() {
                let base = new Decimal(2e8)
                let growth = 1.25
                let max = Decimal.affordGeometricSeries(player.i.celestialenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 39)) player.i.celestialenergy = player.i.celestialenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#a14040",}
        },
        29: {
            cost(x) { return new Decimal(1.275).pow(x || getBuyableAmount(this.layer, this.id)).mul(1e9) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).add(1)},
            unlocked() { return player.hindranceenergycutscene.eq(0) && (player.i.standardpath.eq(1)) },
            canAfford() { return player.i.celestialenergy.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Hindrance Factor IV"
            },
            display() {
                return "which are boosting hindrance energy by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Celestial Energy"
            },
            buy() {
                let base = new Decimal(1e9)
                let growth = 1.275
                let max = Decimal.affordGeometricSeries(player.i.celestialenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 39)) player.i.celestialenergy = player.i.celestialenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#a14040",}
        },
        31: {
            cost(x) { return new Decimal(1.15).pow(x || getBuyableAmount(this.layer, this.id)).mul(10000) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).add(1)},
            unlocked() { return player.hindranceenergycutscene.eq(0) && (player.i.standardpath.eq(1)) },
            canAfford() { return player.i.hindranceenergy.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Hindrance Factor V"
            },
            display() {
                return "which are boosting hindrance energy by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Hindrance Energy"
            },
            buy() {
                let base = new Decimal(10000)
                let growth = 1.15
                let max = Decimal.affordGeometricSeries(player.i.hindranceenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 39)) player.i.hindranceenergy = player.i.hindranceenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#a14040",}
        },
        32: {
            cost(x) { return new Decimal(1.2).pow(x || getBuyableAmount(this.layer, this.id)).mul(1e5) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).add(1)},
            unlocked() { return player.hindranceenergycutscene.eq(0) && (player.i.standardpath.eq(1)) },
            canAfford() { return player.i.hindranceenergy.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Hindrance Factor VI"
            },
            display() {
                return "which are boosting hindrance energy by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Hindrance Energy"
            },
            buy() {
                let base = new Decimal(1e5)
                let growth = 1.2
                let max = Decimal.affordGeometricSeries(player.i.hindranceenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 39)) player.i.hindranceenergy = player.i.hindranceenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#a14040",}
        },
        33: {
            cost(x) { return new Decimal(1.15).pow(x || getBuyableAmount(this.layer, this.id)).mul(1e7) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).add(1)},
            unlocked() { return player.hindranceenergycutscene.eq(0) && (player.i.standardpath.eq(1)) },
            canAfford() { return player.i.hindranceenergy.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Hindrance Factor VII"
            },
            display() {
                return "which are boosting hindrance energy by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Hindrance Energy"
            },
            buy() {
                let base = new Decimal(1e7)
                let growth = 1.15
                let max = Decimal.affordGeometricSeries(player.i.hindranceenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 39)) player.i.hindranceenergy = player.i.hindranceenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#a14040",}
        },
        34: {
            cost(x) { return new Decimal(1.3).pow(x || getBuyableAmount(this.layer, this.id)).mul(1e9) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).add(1)},
            unlocked() { return player.hindranceenergycutscene.eq(0) && (player.i.standardpath.eq(1)) },
            canAfford() { return player.i.hindranceenergy.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Hindrance Factor VIII"
            },
            display() {
                return "which are boosting hindrance energy by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Hindrance Energy"
            },
            buy() {
                let base = new Decimal(1e9)
                let growth = 1.3
                let max = Decimal.affordGeometricSeries(player.i.hindranceenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 39)) player.i.hindranceenergy = player.i.hindranceenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#a14040",}
        },
        35: {
            cost(x) { return new Decimal(1.45).pow(x || getBuyableAmount(this.layer, this.id)).mul(10) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).add(1)},
            unlocked() { return player.hindranceenergycutscene.eq(0) && (player.i.standardpath.eq(1)) },
            canAfford() { return player.i.hindrancepoints.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Celestial Factor I"
            },
            display() {
                return "which are boosting celestial energy by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Hindrance Points"
            },
            buy() {
                let base = new Decimal(10)
                let growth = 1.45
                let max = Decimal.affordGeometricSeries(player.i.hindrancepoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.hindrancepoints = player.i.hindrancepoints.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#a14040",}
        },
        36: {
            cost(x) { return new Decimal(1.5).pow(x || getBuyableAmount(this.layer, this.id)).mul(100) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).add(1)},
            unlocked() { return player.hindranceenergycutscene.eq(0) && (player.i.standardpath.eq(1)) },
            canAfford() { return player.i.hindrancepoints.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Celestial Factor II"
            },
            display() {
                return "which are boosting celestial energy by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Hindrance Points"
            },
            buy() {
                let base = new Decimal(100)
                let growth = 1.5
                let max = Decimal.affordGeometricSeries(player.i.hindrancepoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.hindrancepoints = player.i.hindrancepoints.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#a14040",}
        },
        37: {
            cost(x) { return new Decimal(1.55).pow(x || getBuyableAmount(this.layer, this.id)).mul(1000) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).add(1)},
            unlocked() { return player.hindranceenergycutscene.eq(0) && (player.i.standardpath.eq(1)) },
            canAfford() { return player.i.hindrancepoints.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Celestial Factor III"
            },
            display() {
                return "which are boosting celestial energy by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Hindrance Points"
            },
            buy() {
                let base = new Decimal(1000)
                let growth = 1.55
                let max = Decimal.affordGeometricSeries(player.i.hindrancepoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.hindrancepoints = player.i.hindrancepoints.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#a14040",}
        },
        38: {
            cost(x) { return new Decimal(1.6).pow(x || getBuyableAmount(this.layer, this.id)).mul(10000) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).add(1)},
            unlocked() { return player.hindranceenergycutscene.eq(0) && (player.i.standardpath.eq(1)) },
            canAfford() { return player.i.hindrancepoints.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Celestial Factor IV"
            },
            display() {
                return "which are boosting celestial energy by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Hindrance Points"
            },
            buy() {
                let base = new Decimal(10000)
                let growth = 1.6
                let max = Decimal.affordGeometricSeries(player.i.hindrancepoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.hindrancepoints = player.i.hindrancepoints.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#a14040",}
        },
        39: {
            cost(x) { return new Decimal(1.2).pow(x || getBuyableAmount(this.layer, this.id)).mul(10) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).mul(player.points.plus(1).log10().div(250)).add(1)},
            unlocked() { return player.ce308bosscutscene.eq(0) && (player.i.standardpath.eq(1)) && player.i.playerdead.eq(0) && player.i.beatce308.eq(0) },
            canAfford() { return player.i.truemachines.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>True Machine-Point Synergy"
            },
            display() {
                return "which are boosting true machines by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " True Machines"
            },
            buy() {
                let base = new Decimal(10)
                let growth = 1.2
                let max = Decimal.affordGeometricSeries(player.i.truemachines, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.truemachines = player.i.truemachines.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#ffffaa",}
        },
        41: {
            cost(x) { return new Decimal(1.25).pow(x || getBuyableAmount(this.layer, this.id)).mul(200) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).mul(player.i.playerhealth.div(400).pow(0.5)).add(1)},
            unlocked() { return player.ce308bosscutscene.eq(0) && (player.i.standardpath.eq(1)) && player.i.playerdead.eq(0) && player.i.beatce308.eq(0) },
            canAfford() { return player.i.truemachines.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>True Machine-Health Synergy"
            },
            display() {
                return "which are boosting true machines by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " True Machines"
            },
            buy() {
                let base = new Decimal(200)
                let growth = 1.25
                let max = Decimal.affordGeometricSeries(player.i.truemachines, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.truemachines = player.i.truemachines.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#ffffaa",}
        },
        42: {
            cost(x) { return new Decimal(1.3).pow(x || getBuyableAmount(this.layer, this.id)).mul(3000) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).mul(player.m.incrementalenergy.pow(0.5).div(10)).add(1)},
            unlocked() { return player.ce308bosscutscene.eq(0) && (player.i.standardpath.eq(1)) && player.i.playerdead.eq(0) && player.i.beatce308.eq(0) },
            canAfford() { return player.i.truemachines.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>True Machine-Incremental Energy Synergy"
            },
            display() {
                return "which are boosting true machines by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " True Machines"
            },
            buy() {
                let base = new Decimal(3000)
                let growth = 1.3
                let max = Decimal.affordGeometricSeries(player.i.truemachines, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.truemachines = player.i.truemachines.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#ffffaa",}
        },
        //ENHANCE PATH

        101: {
            cost(x) { return new Decimal(1.2).pow(x || getBuyableAmount(this.layer, this.id)).mul(10) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).pow(0.85).add(1)},
            unlocked() { return player.i.enhancepath.eq(1) && hasUpgrade("i", 102) },
            canAfford() { return player.i.enhancepoints.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>True Enhancers"
            },
            tooltip() {
                return "<h5>Jacorb meticulously designed enhance points for efficiency."
            },
            display() {
                return "which are boosting prestige points by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Enhance Points"
            },
            buy() {
                let base = new Decimal(10)
                let growth = 1.2
                let max = Decimal.affordGeometricSeries(player.i.enhancepoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("m", 26)) player.i.enhancepoints = player.i.enhancepoints.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#b82fbd",}
        },
        102: {
            cost(x) { return new Decimal(1.15).pow(x || getBuyableAmount(this.layer, this.id)).mul(100) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).pow(1.2).add(1)},
            unlocked() { return player.i.enhancepath.eq(1) && hasUpgrade("i", 105) },
            canAfford() { return player.i.beaconpoints.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Beacon-Point Boost"
            },
            tooltip() {
                return "<h5>Beacon points are a side-product of the beacon, but found to have good use."
            },
            display() {
                return "which are boosting points by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Beacon Points"
            },
            buy() {
                let base = new Decimal(100)
                let growth = 1.15
                let max = Decimal.affordGeometricSeries(player.i.beaconpoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 112)) player.i.beaconpoints = player.i.beaconpoints.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#b82fbd",}
        },
        103: {
            cost(x) { return new Decimal(1.175).pow(x || getBuyableAmount(this.layer, this.id)).mul(200) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).pow(1.1).add(1)},
            unlocked() { return player.i.enhancepath.eq(1) && hasUpgrade("i", 105) },
            canAfford() { return player.i.beaconpoints.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Beacon-Prestige Point Boost"
            },
            tooltip() {
                return "<h5>They are a mixture of enhance and quirk energy."
            },
            display() {
                return "which are boosting prestige points by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Beacon Points"
            },
            buy() {
                let base = new Decimal(200)
                let growth = 1.175
                let max = Decimal.affordGeometricSeries(player.i.beaconpoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 112)) player.i.beaconpoints = player.i.beaconpoints.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#b82fbd",}
        },
        104: {
            cost(x) { return new Decimal(1.2).pow(x || getBuyableAmount(this.layer, this.id)).mul(500) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).pow(0.7).add(1)},
            unlocked() { return player.i.enhancepath.eq(1) && hasUpgrade("i", 105) },
            canAfford() { return player.i.beaconpoints.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Beacon-Enhance Point Boost"
            },
            tooltip() {
                return "<h5>They are also believed to be linked to the power of the gods of incremental."
            },
            display() {
                return "which are boosting enhance points by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Beacon Points"
            },
            buy() {
                let base = new Decimal(500)
                let growth = 1.2
                let max = Decimal.affordGeometricSeries(player.i.beaconpoints, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                if (!hasUpgrade("i", 112)) player.i.beaconpoints = player.i.beaconpoints.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#b82fbd",}
        },
        105: {
            cost(x) { return new Decimal(1.25).pow(x || getBuyableAmount(this.layer, this.id)).mul(1) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).mul(3).pow(1.55).add(1)},
            unlocked() { return player.i.enhancepath.eq(1) && hasUpgrade("i", 107) },
            canAfford() { return player.i.quirks.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Point Improvement"
            },
            display() {
                return "which are boosting points by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Quirks"
            },
            buy() {
                let base = new Decimal(1)
                let growth = 1.25
                let max = Decimal.affordGeometricSeries(player.i.quirks, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.quirks = player.i.quirks.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#c20282",}
        },
        106: {
            cost(x) { return new Decimal(1.3).pow(x || getBuyableAmount(this.layer, this.id)).mul(3) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).mul(3).pow(1.45).add(1)},
            unlocked() { return player.i.enhancepath.eq(1) && hasUpgrade("i", 107) },
            canAfford() { return player.i.quirks.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Prestige Improvement"
            },
            display() {
                return "which are boosting prestige points by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Quirks"
            },
            buy() {
                let base = new Decimal(3)
                let growth = 1.3
                let max = Decimal.affordGeometricSeries(player.i.quirks, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.quirks = player.i.quirks.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#c20282",}
        },
        107: {
            cost(x) { return new Decimal(1.35).pow(x || getBuyableAmount(this.layer, this.id)).mul(6) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).mul(3).pow(1.35).add(1)},
            unlocked() { return player.i.enhancepath.eq(1) && hasUpgrade("i", 107) },
            canAfford() { return player.i.quirks.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Enhance Improvement"
            },
            display() {
                return "which are boosting enhance points by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Quirks"
            },
            buy() {
                let base = new Decimal(6)
                let growth = 1.35
                let max = Decimal.affordGeometricSeries(player.i.quirks, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.quirks = player.i.quirks.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#c20282",}
        },
        108: {
            cost(x) { return new Decimal(1.5).pow(x || getBuyableAmount(this.layer, this.id)).mul(50) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).pow(0.75).add(1)},
            unlocked() { return player.jacorbbalancingcutscene.eq(0) && player.i.injacorbianbalancing.eq(1) },
            canAfford() { return player.i.jacorbianenergy.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Jacorbian Factor I"
            },
            display() {
                return "which are boosting jacorbian energy by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Jacorbian Energy"
            },
            buy() {
                let base = new Decimal(50)
                let growth = 1.5
                let max = Decimal.affordGeometricSeries(player.i.jacorbianenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.jacorbianenergy = player.i.jacorbianenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "purple",}
        },
        109: {
            cost(x) { return new Decimal(100).pow(x || getBuyableAmount(this.layer, this.id)).mul(1e15) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).pow(0.75).add(1)},
            unlocked() { return player.jacorbbalancingcutscene.eq(0) && player.i.injacorbianbalancing.eq(1) },
            canAfford() { return player.points.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Jacorbian Factor II"
            },
            display() {
                return "which are boosting jacorbian energy by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Points"
            },
            buy() {
                let base = new Decimal(1e15)
                let growth = 100
                let max = Decimal.affordGeometricSeries(player.points, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.points = player.points.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "purple",}
        },
        111: {
            cost(x) { return new Decimal(1.1).pow(x || getBuyableAmount(this.layer, this.id)).mul(10000) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).pow(1.5).add(1)},
            unlocked() { return player.jacorbbalancingcutscene.eq(0) && player.i.injacorbianbalancing.eq(1) },
            canAfford() { return player.i.jacorbianenergy.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Point Perk"
            },
            display() {
                return "which are going to boost points by +x" + format(tmp[this.layer].buyables[this.id].effect) + " next reset.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Jacorbian Energy"
            },
            buy() {
                let base = new Decimal(10000)
                let growth = 1.1
                let max = Decimal.affordGeometricSeries(player.i.jacorbianenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.jacorbianenergy = player.i.jacorbianenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "purple",}
        },
        112: {
            cost(x) { return new Decimal(1.12).pow(x || getBuyableAmount(this.layer, this.id)).mul(25000) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).pow(1.4).add(1)},
            unlocked() { return player.jacorbbalancingcutscene.eq(0) && player.i.injacorbianbalancing.eq(1) },
            canAfford() { return player.i.jacorbianenergy.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Prestige Point Perk"
            },
            display() {
                return "which are going to boost prestige points by +x" + format(tmp[this.layer].buyables[this.id].effect) + " next reset.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Jacorbian Energy"
            },
            buy() {
                let base = new Decimal(25000)
                let growth = 1.12
                let max = Decimal.affordGeometricSeries(player.i.jacorbianenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.jacorbianenergy = player.i.jacorbianenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "purple",}
        },
        113: {
            cost(x) { return new Decimal(1.14).pow(x || getBuyableAmount(this.layer, this.id)).mul(70000) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).pow(1.4).add(1)},
            unlocked() { return player.jacorbbalancingcutscene.eq(0) && player.i.injacorbianbalancing.eq(1) },
            canAfford() { return player.i.jacorbianenergy.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Enhance Point Perk"
            },
            display() {
                return "which are going to boost enhance points by +x" + format(tmp[this.layer].buyables[this.id].effect) + " next reset.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Jacorbian Energy"
            },
            buy() {
                let base = new Decimal(70000)
                let growth = 1.14
                let max = Decimal.affordGeometricSeries(player.i.jacorbianenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.jacorbianenergy = player.i.jacorbianenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "purple",}
        },
        114: {
            cost(x) { return new Decimal(1.16).pow(x || getBuyableAmount(this.layer, this.id)).mul(200000) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).pow(1.35).add(1)},
            unlocked() { return player.jacorbbalancingcutscene.eq(0) && player.i.injacorbianbalancing.eq(1) },
            canAfford() { return player.i.jacorbianenergy.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Beacon Point Perk"
            },
            display() {
                return "which are going to boost beacon points by +x" + format(tmp[this.layer].buyables[this.id].effect) + " next reset.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Jacorbian Energy"
            },
            buy() {
                let base = new Decimal(200000)
                let growth = 1.16
                let max = Decimal.affordGeometricSeries(player.i.jacorbianenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.jacorbianenergy = player.i.jacorbianenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "purple",}
        },
        115: {
            cost(x) { return new Decimal(1.18).pow(x || getBuyableAmount(this.layer, this.id)).mul(500000) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).pow(1.3).add(1)},
            unlocked() { return player.jacorbbalancingcutscene.eq(0) && player.i.injacorbianbalancing.eq(1) },
            canAfford() { return player.i.jacorbianenergy.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Quirk Perk (it rhymes!)"
            },
            display() {
                return "which are going to boost quirks by +x" + format(tmp[this.layer].buyables[this.id].effect) + " next reset.\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Jacorbian Energy"
            },
            buy() {
                let base = new Decimal(500000)
                let growth = 1.18
                let max = Decimal.affordGeometricSeries(player.i.jacorbianenergy, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.jacorbianenergy = player.i.jacorbianenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "purple",}
        },
        116: {
            cost(x) { return new Decimal(1.1).pow(x || getBuyableAmount(this.layer, this.id)).mul(1e6) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).pow(0.75).add(1)},
            unlocked() { return player.jacorbbalancingcutscene.eq(0) && player.i.injacorbianbalancing.eq(1) },
            canAfford() { return player.m.points.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Jacorbian Factor III"
            },
            display() {
                return "which are boosting jacorbian energy by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Incremental Power"
            },
            buy() {
                let base = new Decimal(1e6)
                let growth = 1.1
                let max = Decimal.affordGeometricSeries(player.m.points, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.m.points = player.m.points.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "purple",}
        },
        117: {
            cost(x) { return new Decimal(1.1).pow(x || getBuyableAmount(this.layer, this.id)).mul(1) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).pow(0.77).add(1)},
            unlocked() { return true },
            canAfford() { return player.i.jacorbianrunes.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Beaconator"
            },
            tooltip() {
                return "<h5>Jacorbian runes were the foundation of the trials of Jacorb."
            },
            display() {
                return "which are boosting beacon level gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Jacorbian Runes"
            },
            buy() {
                let base = new Decimal(1)
                let growth = 1.1
                let max = Decimal.affordGeometricSeries(player.i.jacorbianrunes, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.jacorbianrunes = player.i.jacorbianrunes.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "purple",}
        },
        118: {
            cost(x) { return new Decimal(1.1).pow(x || getBuyableAmount(this.layer, this.id)).mul(1) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).pow(0.5).add(1)},
            unlocked() { return true },
            canAfford() { return player.i.jacorbianrunes.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Beaconationer"
            },
            tooltip() {
                return "<h5>They are also what makes up the enhance beacon."
            },
            display() {
                return "which are boosting beacon power gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Jacorbian Runes"
            },
            buy() {
                let base = new Decimal(1)
                let growth = 1.1
                let max = Decimal.affordGeometricSeries(player.i.jacorbianrunes, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.jacorbianrunes = player.i.jacorbianrunes.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "purple",}
        },
        119: {
            cost(x) { return new Decimal(1.1).pow(x || getBuyableAmount(this.layer, this.id)).mul(10) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).add(1)},
            unlocked() { return true },
            canAfford() { return player.i.superquirks.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Point Factor I"
            },
            display() {
                return "which are boosting point gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Super Quirks"
            },
            buy() {
                let base = new Decimal(10)
                let growth = 1.1
                let max = Decimal.affordGeometricSeries(player.i.superquirks, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.superquirks = player.i.superquirks.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#c20282",}
        },
        121: {
            cost(x) { return new Decimal(1.11).pow(x || getBuyableAmount(this.layer, this.id)).mul(33) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).add(1)},
            unlocked() { return true },
            canAfford() { return player.i.superquirks.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Point Factor II"
            },
            display() {
                return "which are boosting point gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Super Quirks"
            },
            buy() {
                let base = new Decimal(33)
                let growth = 1.11
                let max = Decimal.affordGeometricSeries(player.i.superquirks, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.superquirks = player.i.superquirks.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#c20282",}
        },
        122: {
            cost(x) { return new Decimal(1.12).pow(x || getBuyableAmount(this.layer, this.id)).mul(100) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).add(1)},
            unlocked() { return true },
            canAfford() { return player.i.superquirks.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Point Factor III"
            },
            display() {
                return "which are boosting point gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Super Quirks"
            },
            buy() {
                let base = new Decimal(100)
                let growth = 1.12
                let max = Decimal.affordGeometricSeries(player.i.superquirks, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.superquirks = player.i.superquirks.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#c20282",}
        },
        123: {
            cost(x) { return new Decimal(1.13).pow(x || getBuyableAmount(this.layer, this.id)).mul(333) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).add(1)},
            unlocked() { return true },
            canAfford() { return player.i.superquirks.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Point Factor IV"
            },
            display() {
                return "which are boosting point gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Super Quirks"
            },
            buy() {
                let base = new Decimal(333)
                let growth = 1.13
                let max = Decimal.affordGeometricSeries(player.i.superquirks, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.superquirks = player.i.superquirks.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#c20282",}
        },
        124: {
            cost(x) { return new Decimal(1.12).pow(x || getBuyableAmount(this.layer, this.id)).mul(20) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).add(1)},
            unlocked() { return true },
            canAfford() { return player.i.superquirks.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Prestige Point Factor I"
            },
            display() {
                return "which are boosting prestige point gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Super Quirks"
            },
            buy() {
                let base = new Decimal(20)
                let growth = 1.12
                let max = Decimal.affordGeometricSeries(player.i.superquirks, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.superquirks = player.i.superquirks.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#c20282",}
        },
        125: {
            cost(x) { return new Decimal(1.14).pow(x || getBuyableAmount(this.layer, this.id)).mul(60) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).add(1)},
            unlocked() { return true },
            canAfford() { return player.i.superquirks.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Prestige Point Factor II"
            },
            display() {
                return "which are boosting prestige point gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Super Quirks"
            },
            buy() {
                let base = new Decimal(60)
                let growth = 1.14
                let max = Decimal.affordGeometricSeries(player.i.superquirks, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.superquirks = player.i.superquirks.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#c20282",}
        },
        126: {
            cost(x) { return new Decimal(1.16).pow(x || getBuyableAmount(this.layer, this.id)).mul(180) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).add(1)},
            unlocked() { return true },
            canAfford() { return player.i.superquirks.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Prestige Point Factor III"
            },
            display() {
                return "which are boosting prestige point gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Super Quirks"
            },
            buy() {
                let base = new Decimal(180)
                let growth = 1.16
                let max = Decimal.affordGeometricSeries(player.i.superquirks, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.superquirks = player.i.superquirks.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#c20282",}
        },
        127: {
            cost(x) { return new Decimal(1.18).pow(x || getBuyableAmount(this.layer, this.id)).mul(666) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).add(1)},
            unlocked() { return true },
            canAfford() { return player.i.superquirks.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/>Prestige Point Factor IV"
            },
            display() {
                return "which are boosting prestige point gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Super Quirks"
            },
            buy() {
                let base = new Decimal(666)
                let growth = 1.18
                let max = Decimal.affordGeometricSeries(player.i.superquirks, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.i.superquirks = player.i.superquirks.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#c20282",}
        },
    },
    milestones: {

    },
    challenges: {
    },
    infoboxes: {
        jacorblog1: {
            unlocked() { return player.energizercutscene.eq(0) && player.i.nextenergizer.eq(0) },
            title: "Log I",
            body() { return "Log I: We have declared war on the death realm. I am scared, but I don't want to tell anyone. Aarex and ???????? seem to be calm though. The first war meeting is tomorrow. The high goddess of the backrooms will inform us on the details about this war. If you are reading this, we will meet very soon." },         
        },       
        jacorblog2: {
            unlocked() { return player.energizercutscene.eq(0) && player.i.nextenergizer.eq(1) },
            title: "Log II",
            body() { return "Log II: The meeting was frightening. Hevipelle wanted to use ?????????? to obliterate the entire realm, but that is wrong. Me and Aarex pitched our own ideas. To build a weapon of great power, but without any destructive intents. This would stop the death realm from reaching the ??????????? weapon that we have locked up in the ???????? ?????. A lot of people agreed, but I had to start work tomorrow. A lot of battles would be raging, but I think I'll be fine." },         
        },    
        jacorblog4: {
            unlocked() { return player.energizercutscene.eq(0) && player.i.nextenergizer.eq(2) },
            title: "Log IV",
            body() { return "Log IV: It's hard to believe that the ???? ?? ??????????? are gone. After helping us make the ?????????? ??????, it seemed like they disappeared. I wish they would return someday. I was great friends with them. The high ruler of the void is sending more troops to battle. ???????? has been slacking off lately. ???? has been doing all of his work. I wonder what's going on with him. Is ??? ??? back?" },         
        },    
        jacorblog7: {
            unlocked() { return player.energizercutscene.eq(0) && player.i.nextenergizer.eq(3) && player.i.currentenergizer.gte(3) },
            title: "Log VII",
            body() { return "Log VII: I was talking to ???? today. He told me about a project we was working on called ??????. Seems cool. ???? really wants to be a noble. ???????? joined today's battle. He almost died. They brought him to recover in the ???????? ?????. He should be better in a few weeks. I heard about the death realm's plan if they won. They were going to take the ??????????? ?????? and use it against the ??????? ????? to break the ??? ????. That would be bad news." },         
        },    
        jacorblog8: {
            unlocked() { return player.energizercutscene.eq(0) && player.i.nextenergizer.eq(3) && player.i.currentenergizer.eq(2) },
            title: "Log VIII",
            body() { return "Log VIII: Hevipelle started working on his celestials. He planned on making two at the same time! He wanted to name them ???? and ?????. I'm glad that he is more enthusiastic about his work. Especially after what happened with the ??? ???. Hevi decided to use his own genetics for the celestials. In a way it would be like his children! I want to have celestials one day. That would be so cool." },         
        }, 
        jacorblog9: {
            unlocked() { return player.energizercutscene.eq(0) && player.i.nextenergizer.eq(3) && player.i.currentenergizer.eq(1) },
            title: "Log IX",
            body() { return "Log IX: Aarex got sick, which is strange because he's a god (and born a god, unlike me). So I've been working on the prestige tree (yes it has a name now) by myself. I'm working on the third row, and I'm implementing some of my own balancing into it. (Screw you Aarex timewalls.) Hevipelle even helped me out a bit. I hope we win. I really do." },         
        }, 
        jacorblog10: {
            unlocked() { return player.energizercutscene.eq(0) && player.i.nextenergizer.eq(3) && player.i.currentenergizer.eq(0) },
            title: "Log X",
            body() { return "Log X: Bad news. Our last battle was a big flop. The realms want to get ????????? from the dimensional realm to help them fight since we already lost a lot of soldiers. However, the dimensional realm has always stayed neutral. Aarex is feeling better now, so we kept on doing our work. Hope they don't find out about the ???????? ?????." },         
        }, 
        jacorblog12: {
            unlocked() { return player.enhancelayer.eq(1) && player.i.enhancebeacontoggle.eq(1) && !hasUpgrade("i", 105) },
            title: "Log XII",
            body() { return "Log XII: Today, we had a really important meeting. Due to ????????'s injuries and lack of work getting done, they might move his position of ?????? ?? ??????? to ????. Strange, because ???????? already replaced ??. A mage from the death realm named ??????? joined our side. We don't know if we can trust him or not, but he has substantial incremental weaponry." },         
        }, 
        jacorblog13: {
            unlocked() { return player.enhancelayer.eq(1) && player.i.enhancebeacontoggle.eq(0) && !hasUpgrade("i", 105) },
            title: "Log XIII",
            body() { return "Log XIII: I can't imagine how ???????? is feeling. Getting your rank challenged by ????, who has been working harder than ever. I don't know. This might be the second time this is happening. Even if ???????? loses his spot we will all stay determined to win this war. Apparently, ??????? is a ?????? ?????. He can also manipulate the forces of ?????, ?????, and has defeated the ancient ?????????? ?????????. ??????? and ???? are starting to get along." },         
        }, 
        jacorblog18: {
            unlocked() { return player.energizercutscene.eq(0) && player.i.nextenergizer.eq(4) && player.i.currentenergizer.eq(4) },
            title: "Log XVIII",
            body() { return "Log XVIII: ??????? seems like a good guy. He is very friendly and all that, but it's the DEATH REALM. Time and time again they keep fooling us. Whatever. If anything happens, then I will use the prestige tree for what it is. Even if it's not at its fullest potential." },         
        }, 
        jacorblog19: {
            unlocked() { return player.energizercutscene.eq(0) && player.i.nextenergizer.eq(4) && player.i.currentenergizer.neq(4) },
            title: "Log XIX",
            body() { return "Log XIX: This war is making me fatigued. I'm taking a break, and Aarex is getting some work done. I remembered why I am journaling. It's because one day, a hero will avenge all of us. This hero will be reading my logs. Well, to you, whatever you do, don't ever go to the ????. There's a lot of secrets, like the ???????? ?????. You aren't allowed to know. " },         
        },
        jacorblog23: {
            unlocked() { return player.enhancelayer.eq(1) && player.i.enhancebeacontoggle.eq(1) && hasUpgrade("i", 105) && !hasUpgrade("i", 107) },
            title: "Log XXIII",
            body() { return "Log XXIII: Our rare victory has been accomplished against the death realm. ??????????? used his ??????? powers to sneak troops into the death realm. Lots of death realm officials were killed or captured. They are being held in ???? ??????, where no one can find them. This war might finally be over." },         
        }, 
        jacorblog24: {
            unlocked() { return player.enhancelayer.eq(1) && player.i.enhancebeacontoggle.eq(0) && hasUpgrade("i", 105) && !hasUpgrade("i", 107) },
            title: "Log XXIV",
            body() { return "Log XXIV: We started work on the sixth row of the prestige tree. Instead of life essence or super prestige points like Aarex suggested, we opted for honour and nebula instead. They are much more powerful. The honour of our fallen soldiers will live on with the tree. " },         
        }, 
        ce308bosshowto: {
            unlocked() { return true },
            title: "Bossfight Explanation:",
            body() { return "In this fight, you will have to dodge droning yellow circles with your mouse. If any of them and your mouse cursor touch, then you lose some hp. To avoid cheesing the fight, there is also a passive health drain. In order to combat said passive health drain, green circles appear that you must click in order to recover health. In order to beat the boss, you must play through the mini incremental game while you have to dodge the bullets and recover health. " },         
        }, 
        jacorblog28: {
            unlocked() { return player.i.enhancepath.eq(1) && !hasUpgrade("i", 107) },
            title: "Log XXVIII",
            body() { return "Log XXVIII: This may be the final entry. I am sorry I can not write more. I have been working on the tree 24/7 now. This may be the last time writing, but one day we will meet. I am sure of that. The prophet wants to meet you as well. It will happen one day. War is inevitable. " },         
        }, 
    },
    microtabs: {
        stuff: {
            "Main": {
                buttonStyle() { return { 'color': 'white' } },
                unlocked() { return player.i.ce308bossactivate.eq(0) },
                content:

                    [
                           ["blank", "25px"],
                           ["row", [["buyable", 11], ["buyable", 12], ["buyable", 13]]],
                           ["blank", "25px"],
                           ["raw-html", function () { return player.i.standardpath.eq(1) ? "<h2>Standard Path Effects:" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.i.standardpath.eq(1) ? "<h3>x1.25 to prestige points. " : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.standardpath.eq(1) ? "<h3>/1.25 to points. " : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.standardpath.eq(1) && player.i.prestigeenergy.eq(0) && hasUpgrade("i", 13) ? "<h3>x" + format(player.i.noenergyboost)+  " to incremental energy. " : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.enhancepath.eq(1) ? "<h2>Enhance Path Effects:" : "" }, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.enhancepath.eq(1) ? "<h3>x3 to meta prestige time. " : "" }, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
                     ["raw-html", function () { return player.i.enhancepath.eq(1) ? "<h3>^0.95 to prestige points. " : "" }, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
                           ["blank", "25px"],
                           ["raw-html", function () { return player.m.quirkenhanceunlock.eq(1) ? "<h2>Jacorb's Perks:" : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.m.pointperk.gt(1) ? "<h3>Points: x" + format(player.m.pointperk) + ". " : ""}, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.m.prestigepointperk.gt(1) ? "<h3>Prestige Points: x" + format(player.m.prestigepointperk) + ". " : ""}, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.m.enhancepointperk.gt(1) ? "<h3>Enhance Points: x" + format(player.m.enhancepointperk) + ". " : ""}, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.m.beaconpointperk.gt(1) ? "<h3>Beacon Points: x" + format(player.m.beaconpointperk) + ". " : ""}, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.m.quirkperk.gt(1) ? "<h3>Quirks: x" + format(player.m.quirkperk) + ". " : ""}, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                           ["infobox", "jacorblog13"],
                           ["infobox", "jacorblog12"],
                           ["infobox", "jacorblog23"],
                           ["infobox", "jacorblog24"],
                           ["blank", "25px"],
                    ]

            },
            "Jacorb": {
                buttonStyle() { return { 'color': 'purple', 'border-color': 'purple', 'background-color': '#b82fbd' } },
                unlocked() { return hasUpgrade("i", 112) },
                content:

                    [
                        ["microtabs", "jacorb", { 'border-width': '0px' }],
                    ]

            },
            "Prestige": {
                buttonStyle() { return { 'color': '#31aeb0' } },
                unlocked() { return player.points.gte(50) && player.i.ce308bossactivate.eq(0) || player.i.prestigepoints.gt(0) && player.i.ce308bossactivate.eq(0) },
                content:
                
                    [
         ["microtabs", "prestige", { 'border-width': '0px' }],
        ]

            },
            "Pure Energy": {
                buttonStyle() { return { 'color': '#ffffaa' } },
                unlocked() { return player.i.standardpath.eq(1) && hasUpgrade("i", 14) && player.i.ce308bossactivate.eq(0) },
                content:
                
                    [
         ["microtabs", "pureenergy", { 'border-width': '0px' }],
        ]

            },
            "Ce308, The Pseudo-Celestial of Pure Energy": {
                buttonStyle() { return { 'border-color': 'black', 'background-image': 'radial-gradient(circle, #ffffaa 0%, white 0%, #ffffaa 100%)', "color": 'black', animation: "gradient 1s infinite",} },
                unlocked() { return player.i.ce308bossactivate.eq(1) },
                content:
                
                    [
                        ["raw-html", function () { return player.ce308bossscene.eq(1) && player.i.standardpath.eq(1) ? "<h1>Well well well..." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(2) && player.i.standardpath.eq(1) ? "<h1>It's about time we begin >:)" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(3) && player.i.standardpath.eq(1) ? "<h1>Once I ask you one more favor, the prestige machines will rise!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(4) && player.i.standardpath.eq(1) ? "<h1>I must kill you. Your power will surge through the machines!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(5) && player.i.standardpath.eq(1) ? "<h1>I know you trust me. We are friends after all!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(6) && player.i.standardpath.eq(1) ? "<h1>Now, it's time for revolution! Come here right now!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(7) && player.i.standardpath.eq(1) ? "<h1>No don't! It's gone rogue! IT'S GONE ROGUE!!!!!" : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(8) && player.i.standardpath.eq(1) ? "<h1>It's me! Sitra. I'm Artis' brother." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(9) && player.i.standardpath.eq(1) ? "<h1>You must get away now! I'm sorry!" : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(10) && player.i.standardpath.eq(1) ? "<h1>Ugh. You. What are you doing here?" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(11) && player.i.standardpath.eq(1) ? "<h1>I am here to shut you down! You have gone too far!" : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(12) && player.i.standardpath.eq(1) ? "<h1>Ha. So you are the one who made me and you want to shut me down?" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(13) && player.i.standardpath.eq(1) ? "<h1>You are pathetic. You and your wannabe brother." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(14) && player.i.standardpath.eq(1) ? "<h1>I bet the hero here understands that as well." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(15) && player.i.standardpath.eq(1) ? "<h1>You celestials should have stayed with hevipelle." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(16) && player.i.standardpath.eq(1) ? "<h1>And now he's gone! It's because of all you traitors!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(17) && player.i.standardpath.eq(1) ? "<h1>Listen! You are no better than a machine. You will never become real!" : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(18) && player.i.standardpath.eq(1) ? "<h1>I left Hevipelle for better reasons than anyone else!" : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(19) && player.i.standardpath.eq(1) ? "<h1>Machines. Crafting. These are my passions!" : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(20) && player.i.standardpath.eq(1) ? "<h1>Me and Artis had fun creating you! It was all going well." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(21) && player.i.standardpath.eq(1) ? "<h1>This was a mistake. It has always been a mistake! Where's the control panel?" : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(22) && player.i.standardpath.eq(1) ? "<h1>Artis has it. Who knows where he is. He could be doing anything right now..." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(23) && player.i.standardpath.eq(1) ? "<h1>Dang it! Well this sick plan of yours is ending right now!" : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(24) && player.i.standardpath.eq(1) ? "<h1>You were never made like this. I wonder who could've done such a thing?" : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(25) && player.i.standardpath.eq(1) ? "<h1>I know who. Too bad you will never figure it out!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(26) && player.i.standardpath.eq(1) ? "<h1>Someone helped me. Someone you'll never expect. No, it's not Artis." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(27) && player.i.standardpath.eq(1) ? "<h1>This person is of high ranking in the incremental community!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(28) && player.i.standardpath.eq(1) ? "<h1>This person wanted me and the new celestials to take over THE VOID!!!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(29) && player.i.standardpath.eq(1) ? "<h1>I've learned all about them. Those nasty people. They call themselves:" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(30) && player.i.standardpath.eq(1) ? '<h1>"Meta Studio"' : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(31) && player.i.standardpath.eq(1) ? "<h1>Meta what? This has to be some joke! End this right now! Follow the code I made for you!" : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(32) && player.i.standardpath.eq(1) ? "<h1>Heh! It didn't censor this time! I'm finally free. I'M FINALLY FREE!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(33) && player.i.standardpath.eq(1) ? "<h1>Red Diamond was right. This AI plan was all so stupid." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(34) && player.i.standardpath.eq(1) ? "<h1>Only if Artis was here with the control panel..." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(35) && player.i.standardpath.eq(1) ? "<h1>Well. Enough bickering. It's time to begin! Now come here and DIE!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(36) && player.i.standardpath.eq(1) ? "<h1>You are going to KILL THE HERO?????" : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(37) && player.i.standardpath.eq(1) ? "<h1>Yes. And it is going to be a quick and painless death!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(38) && player.i.standardpath.eq(1) ? "<h1>I would not let you!" : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(39) && player.i.standardpath.eq(1) ? "<h1>This can not happen! (oh shoot red diamond is gonna kill me if the hero dies)" : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(40) && player.i.standardpath.eq(1) ? "<h1>Oh yeah? Who's stopping me!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(41) && player.i.standardpath.eq(1) ? "<h1>You. You must stop this false celestial!" : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(42) && player.i.standardpath.eq(1) ? "<h1>You must end this celestial's reign once and for all." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(43) && player.i.standardpath.eq(1) ? "<h1>You must use the very machines to fight!" : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(44) && player.i.standardpath.eq(1) ? "<h1>Even if you are weak. You will grow stronger from unfair fights!" : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(45) && player.i.standardpath.eq(1) ? "<h1>Once you have defeated it, you will gain a fraction of its power!" : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(46) && player.i.standardpath.eq(1) ? "<h1>Sorry for leaving you here. I will go now. I will find that dang control panel." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(47) && player.i.standardpath.eq(1) ? "<h1>Now. You will fight me eh?" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(48) && player.i.standardpath.eq(1) ? "<h1>If I kill you, I can go with my plan!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(49) && player.i.standardpath.eq(1) ? "<h1>But if you kill me, well I dunno." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(50) && player.i.standardpath.eq(1) ? "<h1>Well let's do this then! A very unfair fight!<br><h3>BGM: Dawn of the Prestige Machines" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308bossscene.eq(51) && player.i.standardpath.eq(1) ? "<h1>This will be settled once and for all." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 95], ["clickable", 94]]],
                        ["bar", "ce308bar"],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.ce308bosscutscene.eq(0) && player.i.beatce308.eq(0) ? "<h2>You have " + format(player.i.truemachines) + "<h2> true machines. " : "" }],
                        ["raw-html", function () { return player.ce308bosscutscene.eq(0) && player.i.beatce308.eq(0) ? "<h3>You are gaining " + format(player.i.truemachinespersecond) + "<h3> true machines per second (based on sacrificed incremental power). " : "" }],
                        ["row", [["raw-html", function () { return player.i.beatce308.eq(0) ? " <div class=spinning-symbol2>Θ</div>" : "" }], ["blank", "25px"], ["raw-html", function () { return player.ce308bosscutscene.eq(1) && player.ce308bossscene.gte(7) && player.ce308bossscene.lt(47)? " <div class=spinning-symbol3>⚙</div>" : "" }]]],                      
                        ["raw-html", function () { return player.ce308bosscutscene.eq(0) && player.i.playerdead.eq(0) && player.i.beatce308.eq(0) ? "<h3>Your best pure energy is causing Ce308 to deal " + format(player.i.healthdrain) + " damage per second." : "" }],
                        ["raw-html", function () { return player.ce308bosscutscene.eq(0) && player.i.playerdead.eq(1) && player.i.beatce308.eq(0) ? "<h1>YOU DIED! But to be resurrected, you must meta-prestige." : "" }],
                        ["raw-html", function () { return player.ce308bosscutscene.eq(0) && player.i.beatce308.eq(1) && player.i.playerdead.eq(0) ? "<h1>You won. You may meta-prestige for these extra rewards:" : "" }],
                        ["bar", "playerhealthbar"],
                        ["raw-html", function () { return player.ce308bosscutscene.eq(0) && player.i.playerdead.eq(0) && player.i.beatce308.eq(0) ? "<h2>Hovering your cursor over the yellow circles will cause damage!" : "" }],
                        ["raw-html", function () { return player.ce308bosscutscene.eq(0) && player.i.playerdead.eq(0) && player.i.beatce308.eq(0) ? "<h2>But clicking the green ones will heal you." : "" }],
                        ["row", [["buyable", 39], ["buyable", 41], ["buyable", 42]]],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.ce308bosscutscene.eq(0) && player.i.beatce308.eq(1) && player.i.playerdead.eq(0) ? "<h1>+" + formatWhole(player.i.scrapmetaltoget) + " scrap metal." : "" }],
                        ["raw-html", function () { return player.ce308bosscutscene.eq(0) && player.i.beatce308.eq(1) && player.i.playerdead.eq(0) ? "<h1>+" + formatWhole(player.i.wirestoget) + " wires." : "" }],
                        ["raw-html", function () { return player.ce308bosscutscene.eq(0) && player.i.beatce308.eq(1) && player.i.playerdead.eq(0) ? "<h1>+" + formatWhole(player.i.enhancepowdertoget) + " enhance powder." : "" }],
                        ["raw-html", function () { return player.ce308bosscutscene.eq(0) && player.i.beatce308.eq(1) && player.i.playerdead.eq(0) && player.i.nohitce308.eq(1) ? "<h1>Try beating it no-hit for more rewards!" : "" }],
                        ["raw-html", function () { return player.ce308bosscutscene.eq(0) && player.i.beatce308.eq(1) && player.i.playerdead.eq(0) && player.i.nohitce308.eq(3) ? "<h1>No-Hit rewards give you x3 resources." : "" }],
                        ["raw-html", function () { return player.ce308bosscutscene.eq(0) && player.i.beatce308.eq(1) && player.i.playerdead.eq(0) ? "<h1>New crafting recipe: Dimensional Realm Tickets" : "" }],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.ce308bosscutscene.eq(0) && player.i.beatce308.eq(1) && player.i.playerdead.eq(0) ? "<h1>You have gained Ce308's power: The power to to travel realms :)" : "" }],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.ce308bosscutscene.eq(0) && player.ce308defeatcutscene.eq(1) && player.i.beatce308.eq(1) && player.i.playerdead.eq(0) ? "<h3>There is a cutscene required in order to progress to the next chapter. It is a new tab above. " : "" }, { "color": "white", "font-size": "24px", "font-family": "monospace" }],
        ]
        
            },
            "Chapter 1 Concluding Cutscene": {
                buttonStyle() { return { 'border-color': 'black', 'background-image': 'radial-gradient(circle, #ffffaa 0%, white 0%, #ffffaa 100%)', "color": 'black', animation: "gradient 1s infinite",} },
                unlocked() { return player.i.beatce308.eq(1) && player.ce308defeatcutscene.eq(1) },
                content:
                
                    [
                        ["blank", "25px"],
                        ["raw-html", function () { return player.ce308defeatscene.eq(1) && player.i.standardpath.eq(1) ? "<h1>Listen to me son. You must kill the king of our dimension." : "" }, { "color": "black", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(2) && player.i.standardpath.eq(1) ? "<h1>Then, we will be put in command. We can take action and claim the hollow dimensions." : "" }, { "color": "black", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(3) && player.i.standardpath.eq(1) ? "<h1>You are an unstoppable force. A god like no other." : "" }, { "color": "black", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(4) && player.i.standardpath.eq(1) ? "<h1>The ????????? dimension will be feared. We will rule the whole section of our realm." : "" }, { "color": "black", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(5) && player.i.standardpath.eq(1) ? "<h1>Why? There are six gods, with great power in the dimensional realm!" : "" }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(6) && player.i.standardpath.eq(1) ? "<h1>Their power is more desirable than mere empty shells of dimensions." : "" }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(7) && player.i.standardpath.eq(1) ? "<h1>????? told me all about them. They are the gods of incremental." : "" }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(8) && player.i.standardpath.eq(1) ? "<h1>You shall not listen to that wretched soul." : "" }, { "color": "black", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(9) && player.i.standardpath.eq(1) ? "<h1>Our hostage is no friend. They are an enemy." : "" }, { "color": "black", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(10) && player.i.standardpath.eq(1) ? "<h1>Interact once more and I will punish you. You hear me A-" : "" }, { "color": "black", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(11) && player.i.standardpath.eq(1) ? "<h1>So, it's finally over. I've been defeated." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(12) && player.i.standardpath.eq(1) ? "<h1>The power of true machines is one I can't stand. You know my weak spot." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(13) && player.i.standardpath.eq(1) ? "<h1>Anyways, I'll return to old ways before I go. you know, tryna help and stuff." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(14) && player.i.standardpath.eq(1) ? "<h1>I won't truly be gone. You can still fight for rewards and summon me and stuff." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(15) && player.i.standardpath.eq(1) ? "<h1>But it's just a perk of being someone like you." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(16) && player.i.standardpath.eq(1) ? "<h1>Someone reprogrammed me to go rogue. I can't say." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(17) && player.i.standardpath.eq(1) ? "<h1>It's someone you have spoken to before." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(18) && player.i.standardpath.eq(1) ? "<h1>I'm starting to fade now." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(19) && player.i.standardpath.eq(1) ? "<h1>Sitra has gotten to the control panel." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(20) && player.i.standardpath.eq(1) ? "<h1>Goodbye..." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(21) && player.i.standardpath.eq(1) ? "<h1>Dude! No way you actually did it? That's so crazy." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(22) && player.i.standardpath.eq(1) ? "<h1>I'm like, so happy. I'm gonna become FREE!" : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(23) && player.i.standardpath.eq(1) ? "<h1>Hey Jacorb." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(24) && player.i.standardpath.eq(1) ? "<h1>Aarex? We can talk? Looks like the prestige tree's working." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(25) && player.i.standardpath.eq(1) ? "<h1>Heh. These are the first words in a really really long time." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(26) && player.i.standardpath.eq(1) ? "<h1>So, what's up?" : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(27) && player.i.standardpath.eq(1) ? "<h1>The sky." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(28) && player.i.standardpath.eq(1) ? "<h1>What sky? In exile, there is no up or down." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(29) && player.i.standardpath.eq(1) ? "<h1>Okay. I just feel bad about what happened to the tree." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(30) && player.i.standardpath.eq(1) ? "<h1>The hero's been going through so much work to put it together." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(31) && player.i.standardpath.eq(1) ? "<h1>It will be alright. One day, we will all be freed." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(32) && player.i.standardpath.eq(1) ? "<h1>But Aarex. I have something to discuss. But after this exile." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(33) && player.i.standardpath.eq(1) ? "<h1>I need to know your origin. You have never told me." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(34) && player.i.standardpath.eq(1) ? "<h1>It's about time I figure where you are from." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(35) && player.i.standardpath.eq(1) ? "<h1>Alright. Such information will cancel our communication again though." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(36) && player.i.standardpath.eq(1) ? "<h1>Oh boy! Oh boy! Finally! A defeated celestial!" : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(37) && player.i.standardpath.eq(1) ? "<h1>This is the first celestial defeat after the infinity keeper." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(38) && player.i.standardpath.eq(1) ? "<h1>Despite it being a pseudo-celestial, I heard it has gone past its limits." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(39) && player.i.standardpath.eq(1) ? "<h1>Now it's time to begin a new quest. A new path." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(40) && player.i.standardpath.eq(1) ? "<h1>Now there will be true celestials." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(41) && player.i.standardpath.eq(1) ? "<h1>You must revisit the path of singularity. It is mandatory." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(42) && player.i.standardpath.eq(1) ? "<h1>For real? I don't think my balancing is needed anymore, the trials are complete." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(43) && player.i.standardpath.eq(1) ? "<h1>My balancing would help though. Singularity is like that." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(44) && player.i.standardpath.eq(1) ? "<h1>We know the truth about your predecessor." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(45) && player.i.standardpath.eq(1) ? "<h1>You must find him in the path of singularity." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(46) && player.i.standardpath.eq(1) ? "<h1>It should be easier, since he already did the dirty work." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(47) && player.i.standardpath.eq(1) ? "<h1>But as a duo, you should find the celestials easier." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(48) && player.i.standardpath.eq(1) ? "<h1>We've had countless heroes since the time of the gods." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(49) && player.i.standardpath.eq(1) ? "<h1>However, none of them have been as hopeful as you two." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(50) && player.i.standardpath.eq(1) ? "<h1>I have a report!" : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                        ["raw-html", function () { return player.ce308defeatscene.eq(51) && player.i.standardpath.eq(1) ? "<h1>According to Sitra, someone has reprogrammed Ce308." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                        ["raw-html", function () { return player.ce308defeatscene.eq(52) && player.i.standardpath.eq(1) ? "<h1>And it is someone on our side. There is a traitor!" : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                        ["raw-html", function () { return player.ce308defeatscene.eq(53) && player.i.standardpath.eq(1) ? "<h1>That's not important right now. The quest is." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(54) && player.i.standardpath.eq(1) ? "<h1>I dunno R.D. That's something a traitor would say." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(55) && player.i.standardpath.eq(1) ? "<h1>You can figure that out, Artis. Whoever this traitor is, that won't change any plans." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(56) && player.i.standardpath.eq(1) ? "<h1>Anyways. Great job on defeating this celestial." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                        ["raw-html", function () { return player.ce308defeatscene.eq(57) && player.i.standardpath.eq(1) ? "<h1>I'm sorry it went rogue. It's all our fault." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                        ["raw-html", function () { return player.ce308defeatscene.eq(58) && player.i.standardpath.eq(1) ? "<h1>Now you will be travelling realms. However, you need a ticket." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                        ["raw-html", function () { return player.ce308defeatscene.eq(59) && player.i.standardpath.eq(1) ? "<h1>Tickets will be craftable. I didn't make it too expensive. I'm nice." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                        ["raw-html", function () { return player.ce308defeatscene.eq(60) && player.i.standardpath.eq(1) ? "<h1>There will also be more crafting stuff to unlock. That's cool." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                        ["raw-html", function () { return player.ce308defeatscene.eq(61) && player.i.standardpath.eq(1) ? "<h1>Anyways, I'm out." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                        ["raw-html", function () { return player.ce308defeatscene.eq(62) && player.i.standardpath.eq(1) ? "<h1>Since you've defeated the celestial, you will unlock new things!" : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(63) && player.i.standardpath.eq(1) ? "<h1>Like the crafting Artis mentioned. Now it will be taken seriously." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(64) && player.i.standardpath.eq(1) ? "<h1>And you will have access to the realm hopper." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(65) && player.i.standardpath.eq(1) ? "<h1>It can teleport you from realm to realm, but takes time and requires tickets." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(66) && player.i.standardpath.eq(1) ? "<h1>You should go to Aarex's hub, which is already unlocked for you." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(67) && player.i.standardpath.eq(1) ? "<h1>Now. That's it. The beginning of the end." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(68) && player.i.standardpath.eq(1) ? "<h1> CHAPTER 1: THE STANDARD PATH." : "" }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308defeatscene.eq(69) && player.i.standardpath.eq(1) ? "<h1> To be continued in Chapter 2..." : "" }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],

                        ["blank", "25px"],
                        ["row", [["clickable", 97], ["clickable", 96]]],
                        ["row", [["raw-html", function () { return player.ce308defeatscene.gte(11) && player.ce308defeatscene.lt(18) ? " <div class=ce308symbol>Θ</div>" : "" }]]],                      
                        ["row", [["raw-html", function () { return player.ce308defeatscene.eq(18) ? " <div class=ce308symbol2>Θ</div>" : "" }]]],                      
                        ["row", [["raw-html", function () { return player.ce308defeatscene.eq(19) ? " <div class=ce308symbol3>Θ</div>" : "" }]]],                      
                        ["row", [["raw-html", function () { return player.ce308defeatscene.eq(20) ? " <div class=ce308symbol4>Θ</div>" : "" }]]],                                         
                        ["raw-html", function () { return player.ce308defeatscene.gte(50) && player.ce308defeatscene.lt(62) ? " <div class=spinning-symbol>☭</div>" : "" }],
        ]
        
            },
            "Quirk": {
                buttonStyle() { return { 'border-color': 'purple', 'background-color': '#c20282', "color": 'black' }},
                unlocked() { return hasUpgrade("i", 106) },
                content:
                
                    [
         ["microtabs", "quirk", { 'border-width': '0px' }],
        ]

            },
            "Celestials": {
                buttonStyle() { return { 'border-color': 'blue', 'background-image': 'radial-gradient(circle, rgba(16,15,16,1) 0%, rgba(8,0,255,1) 0%, rgba(0,0,0,1) 100%)', animation: "gradient 1s infinite"} },
                unlocked() { return hasUpgrade("i", 27) && player.i.ce308bossactivate.eq(0) || hasUpgrade("i", 116) },
                content:
                
                    [
         ["microtabs", "celestials", { 'border-width': '0px' }],
        ]

            },
        },
        prestige: {
            "Main": {
                buttonStyle() { return { 'color': '#31aeb0' } },
                unlocked() { return true },
                content:

                    [
                        ["row", [["clickable", 28]]],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.prestigescene.eq(0) ? "<h1> Incrementals aren't as great as they were before." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.prestigescene.eq(1) ? "<h1> After THEY took everything from us, nothing was the same." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.prestigescene.eq(2) ? "<h1> The incremental power didn't work as well. We were all doomed." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.prestigescene.eq(3) ? "<h1> I'm going to ask you a question. What are you doing here?" : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.prestigescene.eq(4) ? "<h1> There is no point of restoring the balance of incrementals." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.prestigescene.eq(5) ? "<h1> THE DEATH REALM took everything. It's all over." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.prestigescene.eq(6) ? "<h1> CHAPTER 1: THE STANDARD PATH." : "" }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 12], ["clickable", 11]]],
                        ["raw-html", function () { return player.prestigecutscene.eq(0) ? "<h2>You have " + format(player.i.prestigepoints) + "<h2> prestige points. " : "" }],
                        ["raw-html", function () { return player.prestigecutscene.eq(0) ? "<h2>You will gain " + format(player.i.prestigepointstoget) + "<h2> on reset. " : "" }],
                        ["row", [["clickable", 13]]],
                        ["blank", "25px"],
                        ["row", [["buyable", 14]]],
                        ["blank", "25px"],
                        ["row", [["upgrade", 11], ["upgrade", 12], ["upgrade", 13], ["upgrade", 14]]],
                        ["row", [["upgrade", 101], ["upgrade", 102], ["upgrade", 103], ["upgrade", 104], ["upgrade", 105], ["upgrade", 106]]],
                        ["row", [["clickable", 15]]],
                        ["row", [["clickable", 16], ["blank", "25px"], ["clickable", 43]]],
                        ["blank", "25px"],
                        ["infobox", "jacorblog28"],
                    ]

            },
            "Energy": {
                buttonStyle() { return { 'color': '#31aeb0' } },
                unlocked() { return player.i.standardpath.eq(1) },
                content:

                    [
                        ["blank", "25px"],
                        ["raw-html", function () { return player.i.standardpath.eq(1) ? "<h2>You have " + format(player.i.prestigepoints) + "<h2> prestige points. " : ""}],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.i.standardpath.eq(1) ? "<h2>You have " + format(player.i.prestigeenergy) + "<h2> prestige energy. " : ""}, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.standardpath.eq(1) ? "<h3>You are gaining " + format(player.i.prestigeenergypersecond) + "<h2> prestige energy per second. " : ""}, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.standardpath.eq(1) ? "<h3>which gives a x" + format(player.i.prestigeenergyeffect) + " boost to prestige points gain. " : ""}, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.standardpath.eq(1) ? "<h3>but a /" + formatSmall(player.i.prestigeenergyeffectonpoints) + " divide on point gain. " : ""}, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["buyable", 15]]],
                        ["blank", "25px"],
                        ["row", [["clickable", 18], ["clickable", 17]]],
                    ]

            },
            "Machines": {
                buttonStyle() { return { 'color': '#31aeb0' } },
                unlocked() { return player.i.standardpath.eq(1) && hasUpgrade("i", 13) },
                content:

                    [
                        ["raw-html", function () { return player.machinescene.eq(0) && player.i.standardpath.eq(1) ? "<h1> That yellow glow..." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.machinescene.eq(1) && player.i.standardpath.eq(1) ? "<h1> Maybe you do have a reason to be here." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.machinescene.eq(2) && player.i.standardpath.eq(1) ? "<h1>The standard path. The easiest one to master." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.machinescene.eq(3) && player.i.standardpath.eq(1) ? "<h1>Me and my team worked very hard to create a path like this." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.machinescene.eq(4) && player.i.standardpath.eq(1) ? "<h1>After many failed attempts. The path of singularity. The game developer." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.machinescene.eq(5) && player.i.standardpath.eq(1) ? "<h1>All attempts to produce a perfect hero." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.machinescene.eq(6) && player.i.standardpath.eq(1) ? "<h1>Yhvr was right. Maybe a simpler path is the way to start." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.machinescene.eq(7) && player.i.standardpath.eq(1) ? "<h1>You must be the hero! I will introduce myself." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.machinescene.eq(8) && player.i.standardpath.eq(1) ? "<h1>My name is Red Diamond. I am from THE HIGHER PLANE OF EXISTENCE." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.machinescene.eq(9) && player.i.standardpath.eq(1) ? "<h1>I am no being of incremental power, as I am from a foreign realm." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.machinescene.eq(10) && player.i.standardpath.eq(1) ? "<h1>I am not one of the four nobles, but I work with them." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.machinescene.eq(11) && player.i.standardpath.eq(1) ? "<h1>I want to make sure no hero loses to celestial powers." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.machinescene.eq(12) && player.i.standardpath.eq(1) ? "<h1>Unlike the last one..." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.machinescene.eq(13) && player.i.standardpath.eq(1) ? "<h1>If you have made contact with Yhvr, follow his directions." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.machinescene.eq(14) && player.i.standardpath.eq(1) ? "<h1>I am not the greatest at giving directions." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.machinescene.eq(15) && player.i.standardpath.eq(1) ? "<h1>Last time it didn't go so well." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.machinescene.eq(16) && player.i.standardpath.eq(1) ? "<h1>Your job now should be to produce prestige machines." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.machinescene.eq(17) && player.i.standardpath.eq(1) ? "<h1>They will provide a good booster and help with meta-prestiges." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.machinescene.eq(18) && player.i.standardpath.eq(1) ? "<h1>However, there are some corrupted energies in it." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.machinescene.eq(19) && player.i.standardpath.eq(1) ? "<h1>Oh shoot! I just realized!" : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.machinescene.eq(20) && player.i.standardpath.eq(1) ? "<h1>Platonic! The corruptions! The path of ascension! " : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.machinescene.eq(21) && player.i.standardpath.eq(1) ? "<h1>WHY DID I BRING THEM OVER TO THIS PATH..." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 21], ["clickable", 19]]],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.i.standardpath.eq(1) && player.machinecutscene.eq(0) ? "<h2>You have " + format(player.i.prestigepoints) + "<h2> prestige points. " : ""}],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.i.standardpath.eq(1) && player.machinecutscene.eq(0) ? "<h2>You have " + format(player.i.prestigemachines) + "<h2> prestige machines. " : ""}, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.standardpath.eq(1) && player.machinecutscene.eq(0)? "<h3>which gives a x" + format(player.i.prestigemachineeffect) + " boost to prestige energy and prestige point gain. " : ""}, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.i.standardpath.eq(1) && player.machinecutscene.eq(0) ? "<h2>Your machines cause there to be " + format(player.i.machinecorruption) + "<h2> machine corruption. " : ""}, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.standardpath.eq(1) && player.machinecutscene.eq(0)? "<h3>which causes the prestige energy downside to be x" + format(player.i.machinecorruptioneffect) + " stronger. " : ""}, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 22]]],
                        ["raw-html", function () { return player.i.standardpath.eq(1) && player.machinecutscene.eq(0)? "<h3>Req: " + format(player.i.prestigemachinereq) + " prestige points." : ""}, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.standardpath.eq(1) && player.machinecutscene.eq(0)? "<h3>YOU CANNOT REFUND MACHINES. THE CORRUPTION IS INEVITABLE. " : ""}, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.standardpath.eq(1) && player.machinecutscene.eq(0)?  "<h3>Current corruption delay: " + format(player.i.corruptiondelay) : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                    ]

            },
            "Machine Automation": {
                buttonStyle() { return { 'color': '#31aeb0' } },
                unlocked() { return player.i.standardpath.eq(1) && hasUpgrade("i", 19) },
                content:

                    [
                        ["blank", "25px"],
                        ["raw-html", function () { return player.i.machineautomode.eq(0) ? "<h2>Off " : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.machineautomode.eq(1)  ? '<h2>On' : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.machineautomode.eq(2) ? '<h2>Until Delay' : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 37], ["clickable", 38], ["clickable", 39]]],
                    ]

            },
            "Enhance Points": {
                buttonStyle() { return { 'color': '#b82fbd' } },
                unlocked() { return player.i.enhancepath.eq(1) && hasUpgrade("i", 101) },
                content:
                    [
                        ["blank", "25px"],
                        ["raw-html", function () { return player.i.enhancepath.eq(1) ? "<h2>You have " + format(player.i.enhancepoints) + "<h2> enhance points, which boost point gain by x" + format(player.i.enhancepointseffect) + "." : ""}, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.enhancepath.eq(1) ? "<h3>You are gaining " + format(player.i.enhancepointspersecond) + " enhance points per second. <h4>(based on enhanced prestige points). " : ""}, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.i.enhancepath.eq(1) ? "<h2>You have " + format(player.i.prestigepoints) + "<h2> prestige points. " : ""}],
                        ["raw-html", function () { return player.i.enhancepath.eq(1) ? "<h2>" + format(player.i.enhancedprestigepoints) + "<h2> prestige points are enhanced. " : ""}],
                        ["blank", "25px"],
                        ["row", [["clickable", 101]]],
                        ["raw-html", function () { return player.i.enhancepath.eq(1) ? "<h3>Performs a prestige reset without gain." : ""}, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.enhancepath.eq(1) ? "<h3>You lose 10% of enhanced prestige points per second." : ""}, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["buyable", 101]]],
                    ]

            },
            "The Enhance Beacon": {
                buttonStyle() { return { 'color': '#b82fbd' } },
                unlocked() { return player.i.enhancepath.eq(1) && hasUpgrade("i", 104) },
                content:
                    [
                        ["raw-html", function () { return player.beaconscene.eq(0) ? "<h1>Ah, the enhance beacon. One of my earliest works." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.beaconscene.eq(1) ? "<h1>I remember having to make it to prove my worth to the gods." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.beaconscene.eq(2) ? "<h1>Surprisingly, it still works. Even in my exile." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.beaconscene.eq(3) ? "<h1>It can radiate JACORBIAN ENERGY. Something that would be very useful down the path." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.beaconscene.eq(4) ? "<h1>You may also be able to start JACORBIAN BALANCING. Which is pretty cool." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.beaconscene.eq(5) ? "<h1>This enhance beacon can help you out through meta-prestiges." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.beaconscene.eq(6) ? "<h1>You will be able to passively earn incremental power." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.beaconscene.eq(7) ? "<h1>However, gaining incremental power with the beacon would be very slow." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.beaconscene.eq(8) ? "<h1>But in times like these, it would be most efficient." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.beaconscene.eq(9) ? "<h1>You must power the beacon using your ENHANCE POINTS." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.beaconscene.eq(10) ? "<h1>We are only getting started here." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
            ["blank", "25px"],
                        ["row", [["clickable", 104], ["clickable", 103]]],
            ["raw-html", function () { return player.i.enhancepath.eq(1) && player.beaconcutscene.eq(0) ? "<h2>You have " + format(player.m.points) + " incremental power." : ""}, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.enhancepath.eq(1) && player.beaconcutscene.eq(0) ? "<h2>You have " + format(player.i.enhancepoints) + "<h2> enhance points, which boost point gain by x" + format(player.i.enhancepointseffect) + "." : ""}, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.i.enhancepath.eq(1) && player.beaconcutscene.eq(0) ? "<h2>Your beacon is level " + format(player.i.enhancebeaconlevel) + "." : ""}, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
                        ["row", [["clickable", 105]]],
                        ["raw-html", function () { return player.i.enhancepath.eq(1) && player.beaconcutscene.eq(0)? "<h3>Req: " + format(player.i.enhancebeaconreq) + " enhance points." : ""}, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.enhancepath.eq(1) && player.beaconcutscene.eq(0) && player.i.enhancebeacontoggle.eq(0) ? "<h3>THE BEACON IS OFF." : ""}, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.enhancepath.eq(1) && player.beaconcutscene.eq(0) && player.i.enhancebeacontoggle.eq(1) ? "<h3>THE BEACON IS ON." : ""}, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 106], ["clickable", 107]]],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.i.enhancepath.eq(1) && player.beaconcutscene.eq(0)? "<h3>You are making " + format(player.i.beaconpowerpersecond) + " beacon power per second." : ""}, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.enhancepath.eq(1) && player.beaconcutscene.eq(0) && player.i.injacorbianbalancing.eq(0) ? "<h3>You will produce " + format(player.m.score.mul(player.i.incrementalpowergain)) + " incremental power (based on score)." : ""}, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.enhancepath.eq(1) && player.beaconcutscene.eq(0) && player.i.injacorbianbalancing.eq(1) ? "<h3>You will lose " + format(player.i.jacorbincrementalpowerloss) + " incremental power per fill.": ""}, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.enhancepath.eq(1) && player.beaconcutscene.eq(0)? "<h3>Your point gain is square rooted if beacon is toggled on." : ""}, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["bar", "beaconbar"],
        ]

            },
            "Beacon Points": {
                buttonStyle() { return { 'color': '#b82fbd' } },
                unlocked() { return player.i.enhancepath.eq(1) && hasUpgrade("i", 105) },
                content:
                    [
                        ["raw-html", function () { return player.beaconpointscene.eq(1) ? "<h1>Ah, this path will be a long and dangerous one." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.beaconpointscene.eq(2) ? "<h1>A couple of celestials will be waiting at the end of it." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.beaconpointscene.eq(3) ? "<h1>One of those celestial is one of my creators, Sitra." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.beaconpointscene.eq(4) ? "<h1>He is the first celestial that you would fight in this path." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.beaconpointscene.eq(5) ? "<h1>After him, it's the celestial of prestige points." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.beaconpointscene.eq(6) ? "<h1>And after that I don't think I can say." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.beaconpointscene.eq(7) ? "<h1>But at the end of this path, you will find the truth." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.beaconpointscene.eq(8) ? "<h1>The truth of the GODS OF INCREMENTAL." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.beaconpointscene.eq(9) ? "<h1>You may even gain access to another realm." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.beaconpointscene.eq(10) ? "<h1>But in order to complete this path, you free the nobles." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.beaconpointscene.eq(11) ? "<h1>Their presence can help you complete it." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.beaconpointscene.eq(12) ? "<h1>But that will happen in a while." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.beaconpointscene.eq(13) ? "<h1>You must finish your task of finding the layers." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.beaconpointscene.eq(14) ? "<h1>A lot of those layers would come from here." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.beaconpointscene.eq(15) ? "<h1>Don't forget to do your tasks." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.beaconpointscene.eq(16) ? "<h1>And feed me more pure energy when you get back to the standard path." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 109], ["clickable", 108]]],
                        ["raw-html", function () { return player.beaconpointcutscene.eq(1) ? " <div class=spinning-symbol2>Θ</div>" : "" }],
                        ["bar", "beaconbar"],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.i.enhancepath.eq(1) ? "<h2>You have " + format(player.i.beaconpoints) + "<h2> beacon points. " : ""}, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.enhancepath.eq(1) ? "<h3>You gain " + format(player.i.beaconpointstoget) + "<h3> beacon points on beacon fill (based on enhance points). " : ""}, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["buyable", 102], ["buyable", 103], ["buyable", 104]]],
                        ["blank", "25px"],
                        ["row", [["clickable", 111]]],
                    ]

            },
        },
        pureenergy: {
            "Main": {
                buttonStyle() { return { 'color': '#ffffaa' } },
                unlocked() { return player.i.standardpath.eq(1) },
                content:
                    [
                        ["raw-html", function () { return player.pureenergyscene.eq(0) && player.i.standardpath.eq(1) ? "<h1>Hello again. Sorry about before." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(1) && player.i.standardpath.eq(1) ? "<h1>PLATONIC. He wanted me to use corruptions in the standard path." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(2) && player.i.standardpath.eq(1) ? "<h1>They are dangerous... Very dangerous." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(3) && player.i.standardpath.eq(1) ? "<h1>I have no clue why the nobles still trust him." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(4) && player.i.standardpath.eq(1) ? "<h1>After that incident. That incident that got all of them exiled." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(5) && player.i.standardpath.eq(1) ? "<h1>His many attempts to use his many-dimensional cubes failed." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(6) && player.i.standardpath.eq(1) ? "<h1>Jacorb and Aarex's attempts failed as well." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(7) && player.i.standardpath.eq(1) ? "<h1>Maybe Yhvr's plan could work. You would be the ones setting them free." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(8) && player.i.standardpath.eq(1) ? "<h1>When I first met Yhvr not long ago, he was working really hard on galaxy.click" : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(9) && player.i.standardpath.eq(1) ? "<h1>It is now the key area of the incremental community." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(10) && player.i.standardpath.eq(1) ? "<h1>The highest concentration of incremental developers." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(11) && player.i.standardpath.eq(1) ? "<h1>I've never gone there before, but I'd love to see it one day." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(12) && player.i.standardpath.eq(1) ? "<h1>Now is not the time. YOU must be the one to go there." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(13) && player.i.standardpath.eq(1) ? "<h1>Yhvr, Jacorb, and Aarex will explain more about this." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(14) && player.i.standardpath.eq(1) ? "<h1>They want you to find the 28 LAYERS OF THE PRESTIGE TREE." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(15) && player.i.standardpath.eq(1) ? "<h1>Anyway, gotta go. You'll get more lore later." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 25], ["clickable", 24]]],
                        ["raw-html", function () { return player.pureenergycutscene.eq(0) ? "<h2>You have " + format(player.i.pureenergy) + "<h2> pure energy. " : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0)? "<h3>which divides prestige energy downside by /" + format(player.i.pureenergyeffect) + ". " : ""}, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergycutscene.eq(0) ? "<h2>You will gain " + format(player.i.pureenergytoget) + "<h2> on reset. " : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 26]]],
                        ["blank", "25px"],
                        ["row", [["upgrade", 15], ["upgrade", 16], ["upgrade", 17], ["upgrade", 18], ["upgrade", 19]]],
                        ["row", [["upgrade", 21], ["upgrade", 22], ["upgrade", 23], ["upgrade", 24], ["upgrade", 25]]],
                        ["row", [["upgrade", 26], ["upgrade", 27]]],
                    ]
            },
            "Energy": {
                buttonStyle() { return { 'color': '#ffffaa' } },
                unlocked() { return player.i.standardpath.eq(1) },
                content:
                    [
                        ["blank", "25px"],
                        ["raw-html", function () { return player.pureenergycutscene.eq(0) ? "<h2>You have " + format(player.i.pureenergy) + "<h2> pure energy. " : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.pureenergycutscene.eq(0) ? "<h2>You have " + format(player.i.boosterenergy) + "<h2> booster energy. " : "" }, { "color": "#6e64c4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.standardpath.eq(1) && player.machinecutscene.eq(0)? "<h3>which gives a x" + format(player.i.boosterenergyeffect) + " boost to point gain. " : ""}, { "color": "#6e64c4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergycutscene.eq(0) ? "<h3>You are gaining " + format(player.i.boosterenergypersecond) + "<h3> booster energy per second. " : ""}, { "color": "#6e64c4", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.pureenergycutscene.eq(0) ? "<h2>You have " + format(player.i.generatorenergy) + "<h2> generator energy. " : "" }, { "color": "#a3d9a5", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.standardpath.eq(1) && player.machinecutscene.eq(0)? "<h3>which gives a x" + format(player.i.generatorenergyeffect) + " boost to prestige energy gain. " : ""}, { "color": "#a3d9a5", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergycutscene.eq(0) ? "<h3>You are gaining " + format(player.i.generatorenergypersecond) + "<h3> generator energy per second. " : ""}, { "color": "#a3d9a5", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["buyable", 17], ["buyable", 16]]],
                    ]
            },
            "Energizers": {
                buttonStyle() { return { 'color': '#ffffaa' } },
                unlocked() { return player.i.standardpath.eq(1) && hasUpgrade("i", 17) },
                content:
                    [
                        ["raw-html", function () { return player.energizerscene.eq(0) && player.i.standardpath.eq(1) ? "<h1>It's about time I inform you about your predecessor." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.energizerscene.eq(1) && player.i.standardpath.eq(1) ? "<h1>The path of singularity. " : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.energizerscene.eq(2) && player.i.standardpath.eq(1) ? "<h1>The path your predecessor took. They made it through countless efforts." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.energizerscene.eq(3) && player.i.standardpath.eq(1) ? "<h1>However, the power of a celestial stopped them." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.energizerscene.eq(4) && player.i.standardpath.eq(1) ? "<h1>Maybe you can make it through, once and for all." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.energizerscene.eq(5) && player.i.standardpath.eq(1) ? "<h1>We have found alternative celestials for growing power and strength." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.energizerscene.eq(6) && player.i.standardpath.eq(1) ? "<h1>This one celestial you will find at the end of this path is weak." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.energizerscene.eq(7) && player.i.standardpath.eq(1) ? "<h1>It is the celestial of pure energy. It should be very easy." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.energizerscene.eq(8) && player.i.standardpath.eq(1) ? "<h1>In the time between the predecessor and your arrival," : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.energizerscene.eq(9) && player.i.standardpath.eq(1) ? "<h1>We have done long and strenuous research." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.energizerscene.eq(10) && player.i.standardpath.eq(1) ? "<h1>One of these advancements was to shorten meta-prestiges." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.energizerscene.eq(11) && player.i.standardpath.eq(1) ? "<h1>It wasn't so complicated." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.energizerscene.eq(12) && player.i.standardpath.eq(1) ? "<h1>Another was this very path. A path to energize and to become powerful." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.energizerscene.eq(13) && player.i.standardpath.eq(1) ? "<h1>Just keep going. You will meet Aarex and Jacorb very very soon." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.energizerscene.eq(14) && player.i.standardpath.eq(1) ? "<h1>Keep finding the 28 layers." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.energizerscene.eq(15) && player.i.standardpath.eq(1) ? "<h1>Don't stop. I don't want another failure." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 35], ["clickable", 36]]],
                        ["row", [["clickable", 31], ["clickable", 29]]],
                        ["raw-html", function () { return player.i.currentenergizer.eq(0) && player.energizercutscene.eq(0) ? "<h2>You are energizing with nothing. " : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.currentenergizer.eq(1) && player.energizercutscene.eq(0) ? '<h2>You are energizing with "Cheaper machines, more corruption."' : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.currentenergizer.eq(2) && player.energizercutscene.eq(0) ? '<h2>You are energizing with "Stronger prestige energy."' : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.currentenergizer.eq(3) && player.energizercutscene.eq(0) ? '<h2>You are energizing with "More points, less prestige."' : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.currentenergizer.eq(4) && player.energizercutscene.eq(0) ? '<h2>You are energizing with "Passive pure energy"' : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.nextenergizer.eq(0) && player.energizercutscene.eq(0) ? "<h3>Next reset, you will energize with nothing. " : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.nextenergizer.eq(1) && player.energizercutscene.eq(0) ? '<h3>Next reset, you will energize with "Cheaper machines, more corruption."' : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.nextenergizer.eq(2) && player.energizercutscene.eq(0) ? '<h3>Next reset, you will energize with "Stronger prestige energy."' : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.nextenergizer.eq(3) && player.energizercutscene.eq(0) ? '<h3>Next reset, you will energize with "More points, less prestige."' : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.nextenergizer.eq(4) && player.energizercutscene.eq(0) ? '<h3>Next reset, you will energize with "Passive pure energy"' : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.i.nextenergizer.eq(1) && player.energizercutscene.eq(0) ? '<h3>Prestige machines scale less (x3 -> x1.5), but machine corruptions are squared.' : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.nextenergizer.eq(2) && player.energizercutscene.eq(0) ? "<h3>Prestige Energy's good effect is multiplied by 8, but its downside is squared." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.nextenergizer.eq(3) && player.energizercutscene.eq(0) ? "<h3>Points are multiplied by x100,000, while prestige points are divided by /1,000." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.nextenergizer.eq(4) && player.energizercutscene.eq(0) ? "<h3>Gain 100% of pure energy per second, but without the buffs of an energizer." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 32], ["clickable", 33], ["clickable", 34], ["clickable", 41], ["clickable", 57]]],
                        ["blank", "50px"],
                        ["infobox", "jacorblog1"],
                        ["infobox", "jacorblog2"],
                        ["infobox", "jacorblog4"],
                        ["infobox", "jacorblog7"],
                        ["infobox", "jacorblog8"],
                        ["infobox", "jacorblog9"],
                        ["infobox", "jacorblog10"],
                        ["infobox", "jacorblog18"],
                        ["infobox", "jacorblog19"],
                    ]
            },
            "Buyables": {
                buttonStyle() { return { 'color': '#ffffaa' } },
                unlocked() { return player.i.standardpath.eq(1) && hasUpgrade("i", 18) },
                content:
                    [
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h2>You have " + format(player.i.pureenergy) + "<h2> pure energy. " }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return "<h2>You have " + format(player.i.boosterenergy) + "<h2> booster energy. " }, { "color": "#6e64c4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return "<h2>You have " + format(player.i.generatorenergy) + "<h2> generator energy. " }, { "color": "#a3d9a5", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["buyable", 18], ["buyable", 19]]],
                        ["row", [["buyable", 21], ["buyable", 22]]],
                        ["row", [["buyable", 23], ["clickable", 42]]],
                    ]
            },
            "Superifier": {
                buttonStyle() { return { 'color': '#ffffaa' } },
                unlocked() { return player.i.standardpath.eq(1) && hasUpgrade("i", 24) },
                content:
                    [
                        ["raw-html", function () { return player.superifierscene.eq(1) ? "<h1>The celestial is really close." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.superifierscene.eq(2) ? "<h1>Just a little bit of crafting, right?" : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.superifierscene.eq(3) ? "<h1>Remember. This is no ordinary celestial." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.superifierscene.eq(4) ? "<h1>This celestial is a pseudo-celestial. Should be weaker than usual." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.superifierscene.eq(5) ? "<h1>Artis and Sitra have built this celestial." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.superifierscene.eq(6) ? "<h1>Its purpose is to whip you into shape to fight the real ones." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.superifierscene.eq(7) ? "<h1>You know, your predecessor could still be out there." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.superifierscene.eq(8) ? "<h1>For all we know, it could have been an extreme case of time dilation." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.superifierscene.eq(9) ? "<h1>But if you find your predecessor, join forces and save the multiverse together." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.superifierscene.eq(10) ? "<h1>Just remember, you weren't the first hero." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.superifierscene.eq(11) ? "<h1>There was one before your predecessor. The developer." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.superifierscene.eq(12) ? "<h1>The developer made games, but one day, they stopped." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.superifierscene.eq(13) ? "<h1>In a similar fashion to your predecessor." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.superifierscene.eq(14) ? "<h1>So before you fight this celestial," : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.superifierscene.eq(15) ? "<h1>You should accept your fate." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.superifierscene.eq(16) ? "<h1>The presence of a celestial, even a pseudo-celestial, is extreme." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.superifierscene.eq(17) ? "<h1>Even if you go missing or die, we will never give up on our goal." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.superifierscene.eq(18) ? "<h1>We won't stop. Even if you don't make it. This war will end." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 45], ["clickable", 44]]],
                        ["raw-html", function () { return player.superifiercutscene.eq(0) ? "<h3>Superificiation will cause pure energy reset." : "" }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.superifiercutscene.eq(0) ? "<h4>Super resources boost its counterpart's role in providing meta-prestige score." : ""}, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.superifiercutscene.eq(0) ? "<h3>You have " + format(player.i.superpoints) + "<h3> super points, which boost point gain by x" + format(player.i.superpointseffect) : ""}, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["row", [["raw-html", function () { return player.superifiercutscene.eq(0) ? "<h3>" + format(player.points) + " points" + " -> " + format(player.i.superpointstoget) + " super points" : "" }, { "color": "white", "font-size": "18px", "font-family": "monospace" }], ["blank", "25px"], ["clickable", 46]]],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.superifiercutscene.eq(0) && hasUpgrade("i", 25) ? "<h3>You have " + format(player.i.superprestigeenergy) + "<h3> super prestige energy, which boost prestige energy gain by x" + format(player.i.superprestigeenergyeffect) : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["row", [["raw-html", function () { return player.superifiercutscene.eq(0) && hasUpgrade("i", 25) ? "<h3>" + format(player.i.prestigeenergy) + " prestige energy" + " -> " + format(player.i.superprestigeenergytoget) + " super prestige energy" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }], ["blank", "25px"], ["clickable", 47]]],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.superifiercutscene.eq(0) && hasUpgrade("i", 26) ? "<h3>You have " + format(player.i.superpureenergy) + "<h3> super pure energy, which boost pure energy gain by x" + format(player.i.superpureenergyeffect) : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["row", [["raw-html", function () { return player.superifiercutscene.eq(0) && hasUpgrade("i", 26) ? "<h3>" + format(player.i.pureenergy) + " pure energy" + " -> " + format(player.i.superpureenergytoget) + " super pure energy" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }], ["blank", "25px"], ["clickable", 48]]],
                        ["row", [["raw-html", function () { return player.superifiercutscene.eq(0) && hasUpgrade("i", 26) ? "<h5>(Resets pure energy amount)" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }], ["blank", "25px"]]],
                        ["blank", "25px"],
                        ["row", [["clickable", 58]]],
                        ["row", [["clickable", 59]]],
                    ]
            },
        },
        celestials: {
            "Ce308, The Pseudo-Celestial": {
                buttonStyle() { return { 'border-color': 'yellow', 'background-color': '#ffffaa', "color": 'black' } },
                unlocked() { return player.i.standardpath.eq(1) && player.i.ce308bossactivate.eq(0) && player.i.enhancepath.eq(0) },
                content:
                    [
                        ["microtabs", "ce308", { 'border-width': '0px' }],
                    ]
            },
            "Sitra, Celestial of Machines": {
                buttonStyle() { return { 'border-color': 'red', 'background-color': '#880808', "color": 'black' } },
                unlocked() { return hasUpgrade("i", 116) && player.i.enhancepath.eq(1) },
                content:
                    [
                        ["microtabs", "sitra", { 'border-width': '0px' }],
                    ]
            },
        },
        ce308: {
            "Unlock": {
                buttonStyle() { return { 'border-color': 'yellow', 'background-color': '#ffffaa', "color": 'black' } },
                unlocked() { return player.i.standardpath.eq(1) && player.m.ce308unlock.eq(0) },
                content:
                    [
                        ["raw-html", function () { return player.ce308scene.eq(1) ? "<h1>Finally. You made the battery." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                        ["raw-html", function () { return player.ce308scene.eq(2) ? "<h1>It took you long enough. Now you are up against the celestial." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                        ["raw-html", function () { return player.ce308scene.eq(3) ? "<h1>As a reward for making this battery, I will give you access to more crafting recipes." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                        ["raw-html", function () { return player.ce308scene.eq(4) ? "<h1>Eventually, you will be the greatest crafter, even better than me." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                        ["raw-html", function () { return player.ce308scene.eq(5) ? "<h1>Just kidding! No one is better at crafting than me!" : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                        ["raw-html", function () { return player.ce308scene.eq(6) ? "<h1>That sure must have been one hell of a grind to make that battery." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                        ["raw-html", function () { return player.ce308scene.eq(7) ? "<h1>You deserve some rest, but the celestial will be here." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                        ["raw-html", function () { return player.ce308scene.eq(8) ? "<h1>Hopefully my new recipes will help you in your battles." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                        ["raw-html", function () { return player.ce308scene.eq(9) ? "<h1>So you've actually made it." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(10) ? "<h1>You can power up the celestial." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(11) ? "<h1>Just don't die." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(12) ? "<h1>You should be able to collect more layers in the process." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(13) ? "<h1>This celestial is the weakest one." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(14) ? "<h1>After this celestial, there will be many more celestials." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(15) ? "<h1>You must stay focused." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(16) ? "<h1>Don't let your guard down." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(17) ? "<h1>What if you don't make it?" : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(18) ? "<h1>What if you die?" : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(19) ? "<h1>My suffering will never end." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(20) ? "<h1>But no matter what happens, you did your job." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(21) ? "<h1>We all did our job." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(22) ? "<h1>No matter how long we stay in exile, there will be a day." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(23) ? "<h1>There will be a day were we are finally freed." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(24) ? "<h1>Life will be normal again. Making mods, watching BFDI." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(25) ? "<h1>Hanging out with Jacorb and Hevi and all of my friends." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(26) ? "<h1>It's been so long. It's been forever." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(27) ? "<h1>Me and Jacorb will finally finish the prestige tree." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(28) ? "<h1>I will finally finish NG+3R." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(29) ? "<h1>And peace will be restored between the realms." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(30) ? "<h1>Of course. I'm here to wish you luck." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(31) ? "<h1>The truth is, I've never really known what my identity is." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(32) ? "<h1>One day, I magically appeared in the higher plane with no memories, and intelligence." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(33) ? "<h1>The people there treated me as their kind." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(34) ? "<h1>But I had a dying urge to seek more." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(35) ? "<h1>So I went to the incremental base, and found a great team of people." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(36) ? "<h1>I never looked back since." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(37) ? "<h1>Very little of my memory are coming back. I can't explain it." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(38) ? "<h1>Thank you for dedicating yourself to us, and to your mission." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(39) ? "<h1>But during your celestial conquest," : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(40) ? "<h1>Most of your communication will be blocked off." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(41) ? "<h1>Except for maybe Yhvr of course." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(42) ? "<h1>But before you head off, I will remind you one thing:" : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308scene.eq(43) ? "<h1>The grind is on, my friend." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 51], ["clickable", 49]]],
                        ["raw-html", function () { return player.ce308scene.lt(9) ? " <div class=spinning-symbol>☭</div>" : "" }],
                        ["row", [["clickable", 52]]],
                    ]
            },
            "Main": {
                buttonStyle() { return { 'border-color': 'yellow', 'background-color': '#ffffaa', "color": 'black' } },
                unlocked() { return player.i.standardpath.eq(1) && player.m.ce308unlock.eq(1) && player.i.ce308bossactivate.eq(0) },
                content:
                    [
                        ["raw-html", function () { return player.ce308unlockscene.eq(1) ? "<h1>Oh! Hello there!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308unlockscene.eq(2) ? "<h1>I am Ce308. The pseudo-celestial of pure energy." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308unlockscene.eq(3) ? "<h1>That pure energy energy is amazing. It gives me so much energy." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308unlockscene.eq(4) ? "<h1>I DEMAND YOU GIVE ME YOUR ENTIRE STASH..." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308unlockscene.eq(5) ? "<h1>In return, I'll give you an abundance of N E W  M A C H I N E S!!!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308unlockscene.eq(6) ? "<h1>These new materials will help you make the stuff ARTIS wants you to make." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308unlockscene.eq(7) ? "<h1>They are the best! Them creating me is the best thing to ever happen." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308unlockscene.eq(8) ? "<h1>I know they really care about me. Make sure to give them respect." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308unlockscene.eq(9) ? "<h1>You know, I have a quote for you." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308unlockscene.eq(10) ? "<h1>Life is like a balloon: It goes up until it pops (aka you dying)." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308unlockscene.eq(11) ? "<h1>But since you are a hero, your life is like an U N S T O P P A B L E B A L L O O N." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308unlockscene.eq(12) ? '<h1>But for me, I am the sky. Being a "celestial" is like that and stuff. ' : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308unlockscene.eq(13) ? "<h1>One day I hope I can be a REAL celestial." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308unlockscene.eq(14) ? "<h1>Yesterday I learned that the word pseudo means fake..." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308unlockscene.eq(15) ? "<h1>Maybe if I try hard enough, even with my AI-generated brain." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308unlockscene.eq(16) ? "<h1>You are the third person I have ever met." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308unlockscene.eq(17) ? "<h1>But it feels like I have seen the whole world." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308unlockscene.eq(18) ? "<h1>You know, I still don't clearly understand why you are here," : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308unlockscene.eq(19) ? "<h1>And why I am talking to you like this. " : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308unlockscene.eq(20) ? "<h1>Well. If you need any help, just give me more pure energy." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308unlockscene.eq(21) ? "<h1>I need that stuff, it's the only way I can think of ways to help you." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308unlockscene.eq(22) ? "<h1>I'll try to give you the greatest help." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308unlockscene.eq(23) ? "<h1>You were the one who powered me up!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308unlockscene.eq(24) ? "<h1>But if you are not that generous," : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308unlockscene.eq(25) ? "<h1>Then things will be settled." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.ce308unlockscene.eq(26) ? "<h1>I WILL KILL YOU WITHOUT A SECOND THOUGHT." : "" }, { "color": "#8a0303", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 54], ["clickable", 53]]],
                        ["raw-html", function () { return player.ce308unlockcutscene.eq(1) ? " <div class=spinning-symbol2>Θ</div>" : "" }],
                        ["raw-html", function () { return "<h2>You have " + format(player.i.celestialenergy) + "<h2> celestial energy. " }, { "color": "#72a4d4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return "<h3>which boosts pure, prestige, generator, and booster energy by x" + format(player.i.celestialenergyeffect) + "<h3>." }, { "color": "#72a4d4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return "<h3>You will gain " + format(player.i.celestialenergytoget) + "<h3> celestial energy on reset." }, { "color": "#72a4d4", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 56]]],
                        ["blank", "25px"],
                        ["row", [["upgrade", 28], ["upgrade", 29], ["upgrade", 31], ["upgrade", 32], ["upgrade", 33], ["upgrade", 34]]],
                        ["row", [["upgrade", 35], ["upgrade", 36], ["upgrade", 37], ["upgrade", 38], ["upgrade", 39], ["upgrade", 41]]],
                        ["row", [["upgrade", 42]]],
                    ]
            },
            "Quirk Energy": {
                buttonStyle() { return { 'border-color': 'purple', 'background-color': '#c20282', "color": 'black' } },
                unlocked() { return player.i.standardpath.eq(1) && player.m.ce308unlock.eq(1) && hasUpgrade("i", 29) && player.i.ce308bossactivate.eq(0) },
                content:
                    [
                        ["raw-html", function () { return player.quirkenergyscene.eq(1) ? "<h1>Ah yes! Quirks!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.quirkenergyscene.eq(2) ? "<h1>Artis and Sitra have been wanting to study these for a while." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.quirkenergyscene.eq(3) ? "<h1>The disappearance of the prestige tree has really shifted things." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.quirkenergyscene.eq(4) ? "<h1>Quirks are the building blocks of the fantastical elements of this multiverse." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.quirkenergyscene.eq(5) ? "<h1>Magic. Fictional beings. Monsters. All of fiction is dependent on quirks." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.quirkenergyscene.eq(6) ? "<h1>Yes there are other things that make fiction, but quirks affect the most." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.quirkenergyscene.eq(7) ? "<h1>After you finish this path, the enhance path will be waiting for you!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.quirkenergyscene.eq(8) ? "<h1>Don't worry, I won't die! Just keep giving me pure energy and I'm immortal!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.quirkenergyscene.eq(9) ? "<h1>Quirks are really important to understanding this universe." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.quirkenergyscene.eq(10) ? "<h1>Jacorb was a genius when he added them to the tree." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.quirkenergyscene.eq(11) ? "<h1>But since the tree's gone, there's only one place with them." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.quirkenergyscene.eq(12) ? "<h1>Most of the information is locked in M*** S*****, but us celestials are exiled from there." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.quirkenergyscene.eq(13) ? "<h1>Hey! Why can't I use that phrase? Am I programmed this way?" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.quirkenergyscene.eq(14) ? "<h1>And even more strange, HOW DO I KNOW ALL THIS INFORMATION????" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.quirkenergycutscene.eq(0) ? "<h3>This feature is heavily dependent on crafting. Check crafting for details." : ""}, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 62], ["clickable", 61]]],
                        ["raw-html", function () { return player.quirkenergycutscene.eq(1) ? " <div class=spinning-symbol2>Θ</div>" : "" }],
                        ["raw-html", function () { return "<h2>You have " + format(player.i.celestialenergy) + "<h2> celestial energy. " }, { "color": "#72a4d4", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.quirkenergycutscene.eq(0) ? "<h2>You have " + formatWhole(player.c.quirklayers) + "<h2> quirk layers. " : "" }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.quirkenergycutscene.eq(0) ? "<h3>which are producing " + format(player.i.quirkenergypersecond) + "<h3> quirk energy per second. " : ""  }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.quirkenergycutscene.eq(0) ? "<h2>You have " + format(player.i.quirkenergy) + "<h2> quirk energy. " : ""  }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.quirkenergycutscene.eq(0) ? "<h3>which gives a x" + format(player.i.quirkenergyeffect) + " boost to points. " : ""  }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["buyable", 24], ["buyable", 25]]],
                        ["blank", "25px"],
                        ["row", [["clickable", 74]]],
                        ["raw-html", function () { return player.quirkenergycutscene.eq(0) ? "<h2>You have " + format(player.i.quirkradiation) + "<h2> quirk radiation. " : ""  }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.quirkenergycutscene.eq(0) ? "<h3>which gives a x" + format(player.i.quirkradiationeffect) + " boost to quirk energy. " : ""  }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.quirkenergycutscene.eq(0) ? "<h2>You have " + formatWhole(player.c.quirkstars) + "<h2> quirk stars. " : "" }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.quirkenergycutscene.eq(0) ? "<h3>which are producing " + format(player.i.quirkradiationpersecond) + "<h3> quirk radiation per second. " : ""  }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                    ]
            },
            "Quirk Energy Transfer": {
                buttonStyle() { return { 'border-color': 'purple', 'background-color': '#c20282', "color": 'black' } },
                unlocked() { return player.i.standardpath.eq(1) && player.m.ce308unlock.eq(1) && hasUpgrade("i", 42) && player.i.ce308bossactivate.eq(0) },
                content:
                    [
                        ["blank", "25px"],
                        ["raw-html", function () { return player.quirkenergycutscene.eq(0) ? "<h2>You have " + format(player.i.quirkenergy) + "<h2> quirk energy. " : ""  }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.quirkenergycutscene.eq(0) ? "<h3>You have " + format(player.c.jacorborbs) + "<h3> jacorb orbs. " : ""  }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.quirkenergycutscene.eq(0) ? "<h3>You have " + format(player.m.storedquirkenergy) + "<h3> stored quirk energy. " : ""  }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 99]]],
                    ]
            },
            "Tasks": {
                buttonStyle() { return { 'border-color': 'yellow', 'background-color': '#ffffaa', "color": 'black' } },
                unlocked() { return player.i.standardpath.eq(1) && player.m.ce308unlock.eq(1) && hasUpgrade("i", 35) && player.i.ce308bossactivate.eq(0) },
                content:
                    [
                        ["raw-html", function () { return player.taskcutscene.eq(0) ? "<h3>Tasks stay completed after meta-prestige reset, but boosts only apply once the upgrade is bought." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.taskcutscene.eq(0) ? "<h3>You only have " + formatWhole(player.i.tasksleft) + " tasks left. (resets count on meta-prestige)" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.taskscene.eq(1) && player.i.standardpath.eq(1) ? "<h1>In order to prove your worth to me, you must complete my tasks! " : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.taskscene.eq(2) && player.i.standardpath.eq(1) ? "<h1>It's light work, it just might take a lot of grinding. " : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.taskscene.eq(3) && player.i.standardpath.eq(1) ? "<h1>After you are done, you will have proven your strength. " : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.taskscene.eq(4) && player.i.standardpath.eq(1) ? "<h1>Then you can fight me fairly! If you win, you get to move on. " : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.taskscene.eq(5) && player.i.standardpath.eq(1) ? "<h1>If you lose, no worries, you'll just get sent back to the beginning of the path. " : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.taskscene.eq(6) && player.i.standardpath.eq(1) ? "<h1>These tasks are your next main objective. " : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.taskscene.eq(7) && player.i.standardpath.eq(1) ? "<h1>See them as hindrances (you'll unlock that layer after completing some). " : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.taskscene.eq(8) && player.i.standardpath.eq(1) ? "<h1>Also, if you beat me, I will give you half of my power!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.taskscene.eq(9) && player.i.standardpath.eq(1) ? "<h1>But don't tell anyone. If Artis or Sitra find out, they will kill me." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.taskscene.eq(10) && player.i.standardpath.eq(1) ? "<h1>This power should put you into training mode, to become a <s>celestial</s> god!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.taskscene.eq(11) && player.i.standardpath.eq(1) ? "<h1>You'd be able to visit other realms, that would be so cool!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.taskscene.eq(12) && player.i.standardpath.eq(1) ? "<h1>If you are trained enough, you can visit the v*** and m*** s*****" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.taskscene.eq(13) && player.i.standardpath.eq(1) ? "<h1>Hey? I still can't say that? What the hell? Artis? Why??????" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.taskscene.eq(14) && player.i.standardpath.eq(1) ? "<h1>Well. Be careful if you go there. You would face G??, who is INSANELY POWERFUL." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.taskscene.eq(15) && player.i.standardpath.eq(1) ? "<h1>These tasks are important." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.taskscene.eq(16) && player.i.standardpath.eq(1) ? "<h1>Just keep feeding me pure energy and I'll be happy." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.taskscene.eq(17) && player.i.standardpath.eq(1) ? "<h1>Even if I am only a mere pseudo-celestial." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 68], ["clickable", 67]]],
                        ["raw-html", function () { return player.taskcutscene.eq(1) ? " <div class=spinning-symbol2>Θ</div>" : "" }],
                        ["raw-html", function () { return player.taskcutscene.eq(0) ? "<h3>Energy tasks give a x" + format(player.i.energytaskeffect) + " boost to celestial energy. " : ""  }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["row", [["clickable", 63], ["clickable", 69], ["clickable", 75], ["clickable", 82]]],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.taskcutscene.eq(0) ? "<h3>Meta tasks give a x" + format(player.i.metataskeffect) + " boost to incremental energy. " : ""  }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["row", [["clickable", 64], ["clickable", 71], ["clickable", 76], ["clickable", 83]]],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.taskcutscene.eq(0) ? "<h3>Challenge tasks give a x" + format(player.i.challengetaskeffect) + " boost to points. " : ""  }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["row", [["clickable", 65], ["clickable", 72], ["clickable", 77], ["clickable", 84]]],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.taskcutscene.eq(0) ? "<h3>Crafting tasks give a ^" + format(player.i.craftingtaskeffect) + " boost to prestige machine effect. " : ""  }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["row", [["clickable", 66], ["clickable", 73], ["clickable", 78], ["clickable", 85]]],
                    ]
            },
            "Hindrance Energy": {
                buttonStyle() { return { 'border-color': '#a12020', 'background-color': '#a14040', "color": 'black' } },
                unlocked() { return player.i.standardpath.eq(1) && player.m.ce308unlock.eq(1) && hasUpgrade("i", 37) && player.i.ce308bossactivate.eq(0) },
                content:
                    [
                        ["raw-html", function () { return player.hindranceenergyscene.eq(1) && player.i.standardpath.eq(1) ? "<h1>Hindrances. The challenges of the prestige tree." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.hindranceenergyscene.eq(2) && player.i.standardpath.eq(1) ? "<h1>The spirit of hindrances is what motivates mortal beings." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.hindranceenergyscene.eq(3) && player.i.standardpath.eq(1) ? "<h1>They give the reverse effect of dilation, as they can speed things up." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.hindranceenergyscene.eq(4) && player.i.standardpath.eq(1) ? "<h1>However, the energy of hindrance was not used in the prestige tree." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.hindranceenergyscene.eq(5) && player.i.standardpath.eq(1) ? "<h1>That is going to be how we will find the layer." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.hindranceenergyscene.eq(6) && player.i.standardpath.eq(1) ? "<h1>Hindrance was used to amplify the prestige tree's third row." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.hindranceenergyscene.eq(7) && player.i.standardpath.eq(1) ? "<h1>Before we fight, you must have unlocked subspace as well." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.hindranceenergyscene.eq(8) && player.i.standardpath.eq(1) ? "<h1>I will provide another lore drop!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.hindranceenergyscene.eq(9) && player.i.standardpath.eq(1) ? "<h1>Once you have proven yourself worthy," : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.hindranceenergyscene.eq(10) && player.i.standardpath.eq(1) ? "<h1>I will grant you access to the dimensional realm." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.hindranceenergyscene.eq(11) && player.i.standardpath.eq(1) ? "<h1>There will be a lot of great things to do there." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.hindranceenergyscene.eq(12) && player.i.standardpath.eq(1) ? "<h1>But you should focus on your job." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.hindranceenergyscene.eq(13) && player.i.standardpath.eq(1) ? "<h1>So you must gain access to THE HUB." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.hindranceenergyscene.eq(14) && player.i.standardpath.eq(1) ? "<h1>Aarex built the hub a very long time ago." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.hindranceenergyscene.eq(15) && player.i.standardpath.eq(1) ? "<h1>Even before he became a noble." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.hindranceenergyscene.eq(16) && player.i.standardpath.eq(1) ? "<h1>The hub will provide you with willpower." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.hindranceenergyscene.eq(17) && player.i.standardpath.eq(1) ? "<h1>Which you can use to buy shrines." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.hindranceenergyscene.eq(18) && player.i.standardpath.eq(1) ? "<h1>These shrines will boost all of the paths." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.hindranceenergyscene.eq(19) && player.i.standardpath.eq(1) ? "<h1>You should be able to finish the prestige tree a lot faster." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.hindranceenergyscene.eq(20) && player.i.standardpath.eq(1) ? "<h1>This is it now." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.hindranceenergyscene.eq(21) && player.i.standardpath.eq(1) ? "<h1>We will talk again soon." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 81], ["clickable", 79]]],
                        ["raw-html", function () { return player.hindranceenergycutscene.eq(1) ? " <div class=spinning-symbol2>Θ</div>" : "" }],
                        ["raw-html", function () { return "<h2>You have " + format(player.i.celestialenergy) + "<h2> celestial energy. " }, { "color": "#72a4d4", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.hindranceenergycutscene.eq(0) ? "<h2>You have " + format(player.i.hindranceenergy) + "<h2> hindrance energy, which boosts super resources by x" + format(player.i.hindranceenergyeffect) + "." : "" }, { "color": "#a14040", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.hindranceenergycutscene.eq(0) ? "<h2>You are gaining " + format(player.i.hindranceenergypersecond) + "<h2> hindrance energy per second." : "" }, { "color": "#a14040", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["buyable", 26], ["buyable", 27], ["buyable", 28], ["buyable", 29]]],
                        ["row", [["buyable", 31], ["buyable", 32], ["buyable", 33], ["buyable", 34]]],
                        ["blank", "25px"],
                        ["row", [["clickable", 86]]],
                    ]
            },
            "Hindrance Points": {
                buttonStyle() { return { 'border-color': '#a12020', 'background-color': '#a14040', "color": 'black' } },
                unlocked() { return player.i.standardpath.eq(1) && player.m.ce308unlock.eq(1) && hasUpgrade("i", 38) && player.i.ce308bossactivate.eq(0) },
                content:
                    [
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h2>You have " + format(player.i.hindrancepoints) + "<h2> hindrance points. " }, { "color": "#a14040", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return "<h3>which are boosting hindrance energy gain by x" + format(player.i.hindrancepointseffect) + "<h3>." }, { "color": "#a14040", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return "<h3>You will gain " + format(player.i.hindrancepointstoget) + "<h3> on reset. " }, { "color": "#a14040", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return "<h4>(Resets hindrance energy, buyables, celestial energy, and does a celestial energy reset.) " }, { "color": "#a14040", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 87]]],
                        ["blank", "25px"],
                        ["row", [["buyable", 35], ["buyable", 36], ["buyable", 37], ["buyable", 38]]],
                    ]
            },
            "Pure Machines": {
                buttonStyle() { return { 'border-color': 'black', 'background-image': 'radial-gradient(circle, #ffffaa 0%, white 0%, #ffffaa 100%)', "color": 'black', animation: "gradient 1s infinite", } },
                unlocked() { return player.i.standardpath.eq(1) && player.m.energytask.eq(4) && player.m.metatask.eq(4) && player.m.challengetask.eq(4) && player.m.craftingtask.eq(4) && player.i.ce308bossactivate.eq(0) },
                content:
                    [
                        ["raw-html", function () { return player.puremachinescene.eq(1) && player.i.standardpath.eq(1) ? "<h1>So, you have finished my tasks." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.puremachinescene.eq(2) && player.i.standardpath.eq(1) ? "<h1>In return, these pure machines are my reward." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.puremachinescene.eq(3) && player.i.standardpath.eq(1) ? "<h1>However, you must use incremental power to unleash their potential." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.puremachinescene.eq(4) && player.i.standardpath.eq(1) ? "<h1>Now that the tasks are done, I can begin my plan." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.puremachinescene.eq(5) && player.i.standardpath.eq(1) ? "<h1>I will begin a new age of celestials!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.puremachinescene.eq(6) && player.i.standardpath.eq(1) ? "<h1>Artis and Sitra will acknowledge their amazing creation." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.puremachinescene.eq(7) && player.i.standardpath.eq(1) ? "<h1>My issue is that these celestials," : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.puremachinescene.eq(8) && player.i.standardpath.eq(1) ? "<h1>they don't work together these days!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.puremachinescene.eq(9) && player.i.standardpath.eq(1) ? "<h1>The one man who brought us together..." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.puremachinescene.eq(10) && player.i.standardpath.eq(1) ? "<h1>The one man who brought us together, He is nowhere to be found!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.puremachinescene.eq(11) && player.i.standardpath.eq(1) ? "<h1>Us celestials are doomed. We have been ruined by each other!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.puremachinescene.eq(12) && player.i.standardpath.eq(1) ? "<h1>Not anymore! Celestials will dominate the multiverse!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.puremachinescene.eq(13) && player.i.standardpath.eq(1) ? "<h1>These prestige machines, pure machines, any machines," : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.puremachinescene.eq(14) && player.i.standardpath.eq(1) ? "<h1>They all have a chance at life." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.puremachinescene.eq(15) && player.i.standardpath.eq(1) ? "<h1>Now, a new age of celestials awaits! I will be the celestial of celestials!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.puremachinescene.eq(16) && player.i.standardpath.eq(1) ? "<h1>Things will be new. This is the dawn of the prestige machines!!!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 91], ["clickable", 89]]],
                        ["raw-html", function () { return player.puremachinecutscene.eq(1) ? " <div class=spinning-symbol2>Θ</div>" : "" }],
                        ["raw-html", function () { return player.puremachinecutscene.eq(0) ? "<h2>You have " + format(player.i.puremachines) + "<h2> pure machines, which provide x" + format(player.m.scorefrompuremachines) + " score." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.puremachinecutscene.eq(0) ? "<h3>You are gaining " + format(player.i.puremachinespersecond) + "<h3> pure machines per second. " : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.puremachinecutscene.eq(0) ? "<h2>You have sacrificed " + format(player.m.sacrificedincrementalpower) + "<h2> incremental power. " : "" }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.puremachinecutscene.eq(0) ? "<h3>You have " + format(player.m.points) + "<h3> incremental power. " : "" }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 92]]],
                        ["blank", "25px"],
                        ["row", [["clickable", 93], ["blank", "25px"], ["clickable", 98]]],
                        ["blank", "25px"],
                        ["infobox", "ce308bosshowto"],
                    ]
            },
        },
        quirk: {
            "Unlock": {
                buttonStyle() { return { 'border-color': 'purple', 'background-color': '#c20282', "color": 'black' }},
                unlocked() { return player.m.quirkenhanceunlock.eq(0) },
                content:
                    [
                        ["raw-html", function () { return player.enhancequirkscene.eq(1) && player.i.enhancepath.eq(1) ? "<h1>So, now you are ready to continue this path." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.enhancequirkscene.eq(2) && player.i.enhancepath.eq(1) ? "<h1>You are ready to experience the TRUE nature of quirks..." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.enhancequirkscene.eq(3) && player.i.enhancepath.eq(1) ? "<h1>This will not be easy. It will take a lot of time and dedication." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.enhancequirkscene.eq(4) && player.i.enhancepath.eq(1) ? "<h1>Eventually, you will reach Jacorbian Balancing." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.enhancequirkscene.eq(5) && player.i.enhancepath.eq(1) ? "<h1>You must realize that this layer's purpose is to build strength for the true challenge." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.enhancequirkscene.eq(6) && player.i.enhancepath.eq(1) ? "<h1>Sitra, the celestial of machines, is waiting at the end of this layer." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.enhancequirkscene.eq(7) && player.i.enhancepath.eq(1) ? "<h1>He is a real celestial. Not a piece of scrap like Ce308." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.enhancequirkscene.eq(8) && player.i.enhancepath.eq(1) ? "<h1>However, since he is on the good side, he should be a fair fight." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.enhancequirkscene.eq(9) && player.i.enhancepath.eq(1) ? "<h1>You would have to kill him though. He has already accepted his fate. I'm sorry." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.enhancequirkscene.eq(10) && player.i.enhancepath.eq(1) ? "<h1>It is law that you absorb a celestial's power upon killing it." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.enhancequirkscene.eq(11) && player.i.enhancepath.eq(1) ? "<h1>Sitra is too good to resist. You'd be able to withstand singularity." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.enhancequirkscene.eq(12) && player.i.enhancepath.eq(1) ? "<h1>The predecessor is waiting for you." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.enhancequirkscene.eq(13) && player.i.enhancepath.eq(1) ? "<h1>Stuck in dilation; you must set him free." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.enhancequirkscene.eq(14) && player.i.enhancepath.eq(1) ? "<h1>There will be a bunch of requirements first." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.enhancequirkscene.eq(15) && player.i.enhancepath.eq(1) ? "<h1>This is very important." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 113], ["clickable", 112]]],
                        ["raw-html", function () { return player.enhancequirkcutscene.eq(0) ? "<h2>" + format(player.h.willpower) + "/1,000,000<h2> willpower. " : ""}, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.enhancequirkcutscene.eq(0) ? "<h2>" + formatWhole(player.h.count) + "/1,000<h2> current count. " : ""}, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.enhancequirkcutscene.eq(0) ? "<h2>" + formatWhole(player.h.countingpoints) + "/100<h2> counting points. " : ""}, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.enhancequirkcutscene.eq(0) ? "<h2>" + format(player.m.points) + "/3,000,000 <h2> incremental power. " : ""}, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.enhancequirkcutscene.eq(0) ? "<h2>" + format(player.m.incrementalenergy) + "/500.00 <h2> incremental energy. " : ""}, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.enhancequirkcutscene.eq(0) ? "<h2>" + formatWhole(player.c.totalanvils) + "/3 <h2> total anvils. (this one is pain, good luck)" : ""}, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.enhancequirkcutscene.eq(0) ? "<h3>The grind is yet again on my friend. I am sorry, this is the easy way. No one wants to go the hard way." : ""}, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.enhancequirkcutscene.eq(0) ? "<h3>You must satisfy these requirements simultaneously." : ""}, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 114]]],
                    ]
            },
            "Main": {
                buttonStyle() { return { 'border-color': 'purple', 'background-color': '#c20282', "color": 'black' }},
                unlocked() { return player.m.quirkenhanceunlock.eq(1) },
                content:
                    [
                        ["raw-html", function () { return "<h2>You have " + format(player.i.quirks) + "<h2> quirks. <h3>(Based on enhance points)" }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return "<h3>Quirk layers boost beacon point gain by x" + format(player.i.quirkeffect) + "." }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return "<h3>You will gain " + format(player.i.quirkstoget) + "<h3> on reset. " }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return "<h4>Quirk layers boost quirk gain by x" + format(player.i.quirklayerboost) + "." }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return "<h4>Quirk stars boost quirk gain by x" + format(player.i.quirkstarboost) + "." }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 115]]],
                        ["raw-html", function () { return "<h4>Upgrades don't reset." }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["upgrade", 107], ["upgrade", 108], ["upgrade", 109], ["upgrade", 111], ["upgrade", 112], ["upgrade", 113]]],
                        ["row", [["upgrade", 114], ["upgrade", 115], ["upgrade", 116]]],
                    ]
            },
            "Improvements": {
                buttonStyle() { return { 'border-color': 'purple', 'background-color': '#c20282', "color": 'black' }},
                unlocked() { return hasUpgrade("i", 107) },
                content:
                    [
                        ["raw-html", function () { return "<h2>You have " + format(player.i.quirks) + "<h2> quirks." }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return "<h3>Your improvements boost beacon points gain by x" + format(player.i.quirkimprovementeffect) + "<h3>, but also increases beacon req." }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["buyable", 105], ["buyable", 106], ["buyable", 107]]],
                    ]
            },
            "Altar": {
                buttonStyle() { return { 'border-color': 'purple', 'background-color': '#c20282', "color": 'black' }},
                unlocked() { return hasUpgrade("i", 113) },
                content:
                    [
                        ["raw-html", function () { return player.altarscene.eq(1) && player.i.enhancepath.eq(1) ? "<h1>The GODS OF INCREMENTAL." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.altarscene.eq(2) && player.i.enhancepath.eq(1) ? "<h1>They may be gone, but their energy still remains." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.altarscene.eq(3) && player.i.enhancepath.eq(1) ? "<h1>You must provide them with resources you have earned from crafting." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.altarscene.eq(4) && player.i.enhancepath.eq(1) ? "<h1>The energy from the gods will help you and provide boosts." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.altarscene.eq(5) && player.i.enhancepath.eq(1) ? "<h1>Each god, a different resource." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.altarscene.eq(6) && player.i.enhancepath.eq(1) ? "<h1>Each god, a different boost." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.altarscene.eq(7) && player.i.enhancepath.eq(1) ? "<h1>You must spend them wisely." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.altarscene.eq(8) && player.i.enhancepath.eq(1) ? "<h1>They will not persist through meta-prestige resets." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }], 
                        ["blank", "25px"],
                        ["row", [["clickable", 123], ["clickable", 122]]],

                        ["row", [
                        ["column", [
                        ["raw-html", function () { return player.altarcutscene.eq(0) ? "<h3>Spaceon" : ""}, { "color": "#095954", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.altarcutscene.eq(0) ? "<h4>You have sacrificed " + formatWhole(player.i.sacrificedspaceon) + " space metal to Spaceon. (You have " + formatWhole(player.c.spacemetal) + ")" : "" }, { "color": "#095954", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.altarcutscene.eq(0) ? "<h4>your sacrifice gives a x" + format(player.i.sacrificedspaceoneffect) + " boost to jacorbian energy." : "" }, { "color": "#095954", "font-size": "18px", "font-family": "monospace" }],
                        ["row", [["clickable", 124]]],
                        ]],
                        ["blank", "25px"],
                        ["column", [
                        ["raw-html", function () { return player.altarcutscene.eq(0) ? "<h3>Solaris" : ""}, { "color": "#a3a134", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.altarcutscene.eq(0) ? "<h4>You have sacrificed " + formatWhole(player.i.sacrificedsolaris) + " solarity coal to Solaris. (You have " + formatWhole(player.c.solaritycoal) + ")" : "" }, { "color": "#a3a134", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.altarcutscene.eq(0) ? "<h4>your sacrifice gives a x" + format(player.i.sacrificedsolariseffect) + " boost to points." : "" }, { "color": "#a3a134", "font-size": "18px", "font-family": "monospace" }],
                        ["row", [["clickable", 125]]],
                        ]],
                        ]],
                        ["blank", "25px"],
                        ["row", [
                        ["column", [
                        ["raw-html", function () { return player.altarcutscene.eq(0) ? "<h3>Infinity" : ""}, { "color": "#5e4909", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.altarcutscene.eq(0) ? "<h4>You have sacrificed " + formatWhole(player.i.sacrificedinfinity) + " scrap metal to Infinity. (You have " + formatWhole(player.c.scrapmetal) + ")" : "" }, { "color": "#5e4909", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.altarcutscene.eq(0) ? "<h4>your sacrifice gives a x" + format(player.i.sacrificedinfinityeffect) + " boost to prestige points." : "" }, { "color": "#5e4909", "font-size": "18px", "font-family": "monospace" }],
                        ["row", [["clickable", 126]]],
                        ]],
                        ["blank", "25px"],
                        ["column", [
                        ["raw-html", function () { return player.altarcutscene.eq(0) ? "<h3>Eternity" : ""}, { "color": "#3e0961", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.altarcutscene.eq(0) ? "<h4>You have sacrificed " + formatWhole(player.i.sacrificedeternity) + " time metal to Eternity. (You have " + formatWhole(player.c.timemetal) + ")" : "" }, { "color": "#3e0961", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.altarcutscene.eq(0) ? "<h4>your sacrifice gives a x" + format(player.i.sacrificedeternityeffect) + " boost to enhance points." : "" }, { "color": "#3e0961", "font-size": "18px", "font-family": "monospace" }],
                        ["row", [["clickable", 127]]],
                        ]],
                        ["blank", "25px"],
                    ]],
                    ["blank", "25px"],
                       ["row", [
                        ["column", [
                        ["raw-html", function () { return player.altarcutscene.eq(0) ? "<h3>Reality" : ""}, { "color": "#477300", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.altarcutscene.eq(0) ? "<h4>You have sacrificed " + formatWhole(player.i.sacrificedreality) + " wires to Reality. (You have " + formatWhole(player.c.wires) + ")" : "" }, { "color": "#477300", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.altarcutscene.eq(0) ? "<h4>your sacrifice gives a x" + format(player.i.sacrificedrealityeffect) + " boost to quirks." : "" }, { "color": "#477300", "font-size": "18px", "font-family": "monospace" }],
                        ["row", [["clickable", 128]]],
                        ]],
                        ["blank", "25px"],
                        ["column", [
                        ["raw-html", function () { return player.altarcutscene.eq(0) ? "<h3>Drigganiz" : ""}, { "color": "#63005d", "font-size": "18px", "font-family": "monospace", "text-shadow": "0px 1px 0px #000000" }],
                        ["raw-html", function () { return player.altarcutscene.eq(0) ? "<h4>You have sacrificed " + formatWhole(player.i.sacrificeddrigganiz) + " enhance powder to Drigganiz. (You have " + formatWhole(player.c.enhancepowder) + ")" : "" }, { "color": "#63005d", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.altarcutscene.eq(0) ? "<h4>your sacrifice gives a x" + format(player.i.sacrificeddrigganizeffect) + " boost to meta-prestige score." : "" }, { "color": "#63005d", "font-size": "18px", "font-family": "monospace" }],
                        ["row", [["clickable", 129]]],
                    ]],
                ]],
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h4>You will spend " + format(player.i.altaramount) + " resources." }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["text-input", "altaramountinput", { 
                            color: "var(--color)", 
                            width: "400px",
                            "text-align": "left",
                            "font-size": "32px",
                            border: "2px solid #ffffff17", 
                            background: "var(--background)", 
                        }],
                        ["blank", "25px"],
                        ["row", [["clickable", 137]]],
                    ]
                    
            },
            "Quirk Translator": {
                buttonStyle() { return { 'border-color': 'purple', 'background-color': '#c20282', "color": 'black' }},
                unlocked() { return hasUpgrade("i", 115) },
                content:
                    [
                        ["raw-html", function () { return player.translatorscene.eq(1) && player.i.enhancepath.eq(1) ? "<h1>This machine has not been used in ages." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.translatorscene.eq(2) && player.i.enhancepath.eq(1) ? "<h1>It was originally used to bind quirk energy into quirks." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.translatorscene.eq(3) && player.i.enhancepath.eq(1) ? "<h1>Now, it will serve a new purpose." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.translatorscene.eq(4) && player.i.enhancepath.eq(1) ? "<h1>You will return to the standard path, and get as much quirk stuff as you can." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.translatorscene.eq(5) && player.i.enhancepath.eq(1) ? "<h1>Then, use your JACORB ORBS to trap that energy and preserve it." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.translatorscene.eq(6) && player.i.enhancepath.eq(1) ? "<h1>You can return to the enhance path and reap amazing benefits." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.translatorscene.eq(7) && player.i.enhancepath.eq(1) ? "<h1>We have gone so far." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.translatorscene.eq(8) && player.i.enhancepath.eq(1) ? "<h1>The next celestial is right around the corner." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.translatorscene.eq(9) && player.i.enhancepath.eq(1) ? "<h1>Surely it will be one hell of a challenge." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.translatorscene.eq(10) && player.i.enhancepath.eq(1) ? "<h1>But as long as you remember all of the accomplishments you have made until now," : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.translatorscene.eq(11) && player.i.enhancepath.eq(1) ? "<h1>You will win." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.translatorscene.eq(12) && player.i.enhancepath.eq(1) ? "<h1>So, in order to power up this machine, you need a bunch of celestial batteries." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.translatorscene.eq(13) && player.i.enhancepath.eq(1) ? "<h1>You know what I'm going to say." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.translatorscene.eq(14) && player.i.enhancepath.eq(1) ? "<h1>The grind is on, my friend." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.translatorcutscene.eq(0) && player.m.translatorunlock.eq(0) ? "<h2>Celestial batteries to power up the translator: " + formatWhole(player.c.celestialbatteries) + "/25" : "" }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 134], ["clickable", 133]]],
                        ["row", [["clickable", 135]]],
                        ["raw-html", function () { return "<h3>You have " + format(player.i.preservedquirkenergy) + " preserved quirk energy, which produce super quirks." }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return "<h4>You have " + format(player.m.storedquirkenergy) + " stored quirk energy." }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 136]]],
                        ["raw-html", function () { return "<h4>You must return to the standard path to utilize this feature!" }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h2>You have " + format(player.i.superquirks) + " super quirks, which gives a x" + format(player.i.superquirkseffect) + " boost to quirks."}, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return "<h3>You are gaining " + format(player.i.superquirkspersecond) + " super quirks per second." }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
                        ["row", [["buyable", 119], ["buyable", 121], ["buyable", 122], ["buyable", 123]]],
                        ["row", [["buyable", 124], ["buyable", 125], ["buyable", 126], ["buyable", 127]]],
                    ]
                
            },
        },
        jacorb: {
            "Balancing": {
                buttonStyle() { return { 'color': 'purple', 'border-color': 'purple', 'background-color': '#b82fbd' }},
                unlocked() { return true },
                content:
                    [
                        ["raw-html", function () { return player.jacorbbalancingscene.eq(1) && player.i.enhancepath.eq(1) ? "<h1>So, you've made it to balancing." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.jacorbbalancingscene.eq(2) && player.i.enhancepath.eq(1) ? "<h1>What you are about to do is very special." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.jacorbbalancingscene.eq(3) && player.i.enhancepath.eq(1) ? "<h1>Jacorbian Balancing. My very own way of transferring my energy." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.jacorbbalancingscene.eq(4) && player.i.enhancepath.eq(1) ? "<h1>You will have do deal with harsh effects, but you will gain jacorbian energy in return." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.jacorbbalancingscene.eq(5) && player.i.enhancepath.eq(1) ? "<h1>This is not the same as what your predecessor dealt with." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.jacorbbalancingscene.eq(6) && player.i.enhancepath.eq(1) ? "<h1>Jacorbian energy is sheer power. It is what makes me a god." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.jacorbbalancingscene.eq(7) && player.i.enhancepath.eq(1) ? "<h1>However, it can only be used by someone who's soul resonates with mine." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.jacorbbalancingscene.eq(8) && player.i.enhancepath.eq(1) ? "<h1>The more like me, the more they can utilize jacorbian energy." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.jacorbbalancingscene.eq(9) && player.i.enhancepath.eq(1) ? "<h1>Since I am Jacorb, my manipulation of jacorbian energy is boundless." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.jacorbbalancingscene.eq(10) && player.i.enhancepath.eq(1) ? "<h1>Countless universes I can create and destroy using jacorbian energy." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.jacorbbalancingscene.eq(11) && player.i.enhancepath.eq(1) ? "<h1>I can even reach higher dimensions with jacorbian energy." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.jacorbbalancingscene.eq(12) && player.i.enhancepath.eq(1) ? "<h1>After I completed my great run to prove myself to the gods of incremental," : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.jacorbbalancingscene.eq(13) && player.i.enhancepath.eq(1) ? "<h1>I have obtained a singular jacorbian energy." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.jacorbbalancingscene.eq(14) && player.i.enhancepath.eq(1) ? "<h1>Since it was the first of its type, I named it jacorbian energy." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.jacorbbalancingscene.eq(15) && player.i.enhancepath.eq(1) ? "<h1>I learned how to control it and bend it to its will." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.jacorbbalancingscene.eq(16) && player.i.enhancepath.eq(1) ? "<h1>The jacorbian energy has resonated with me on a deep level." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.jacorbbalancingscene.eq(17) && player.i.enhancepath.eq(1) ? "<h1>You must learn how to resonate with jacorbian energy." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.jacorbbalancingscene.eq(18) && player.i.enhancepath.eq(1) ? "<h1>You'll be able to do countless things." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.jacorbbalancingscene.eq(19) && player.i.enhancepath.eq(1) ? "<h1>But you must obtain a lot. An almost infinite amount to be exact." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.jacorbbalancingscene.eq(20) && player.i.enhancepath.eq(1) ? "<h1>I have gone through ordinals and ordinals of this stuff and I can still reach higher." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.jacorbbalancingscene.eq(21) && player.i.enhancepath.eq(1) ? "<h1>So, why don't you start balancing?" : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 118], ["clickable", 117]]],
                        ["row", [["clickable", 119]]],
                        ["raw-html", function () { return "<h4>When balancing: beacon is always on, deducts incremental power but gives jacorbian energy." }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["buyable", 108], ["buyable", 109], ["buyable", 116]]],
                        ["blank", "25px"],
                        ["row", [["clickable", 121]]],
                    ]
            },
            "Perks": {
                buttonStyle() { return { 'color': 'purple', 'border-color': 'purple', 'background-color': '#b82fbd' }},
                unlocked() { return player.i.injacorbianbalancing.eq(1) },
                content:
                    [
                        ["blank", "25px"],
                        ["raw-html", function () { return "<h4>Perk effects will be transferred next meta-prestige." }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return "<h4>Check the main tab for perk effects." }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["buyable", 111], ["buyable", 112], ["buyable", 113]]],
                        ["row", [["buyable", 114], ["buyable", 115]]],
                        ["blank", "25px"],
                    ]
            },
            "Runes": {
                buttonStyle() { return { 'color': 'purple', 'border-color': 'purple', 'background-color': '#b82fbd' }},
                unlocked() { return player.i.injacorbianbalancing.eq(1) && hasUpgrade("i", 114) },
                content:
                    [
                        ["raw-html", function () { return "<h2>You have " + format(player.i.jacorbianrunes) + "<h2> jacorbian runes." }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return "<h3>You will gain " + format(player.i.jacorbianrunestoget) + "<h3> jacorbian runes on reset." }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return "<h3>x" + format(player.i.jacorbianruneseffect) + "<h3> to jacorbian energy, but x" + format(player.i.jacorbianruneseffect2) + " to beacon requirement."}, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 131]]],
                        ["raw-html", function () { return "<h3>Does a quirk reset and resets jacorbian balancing progress." }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["buyable", 117], ["buyable", 118]]],
                    ]
            },
        },
        sitra: {
            "Unlock": {
                buttonStyle() { return { 'border-color': 'red', 'background-color': '#880808', "color": 'black'} },
                unlocked() { return player.i.enhancepath.eq(1) && player.i.sitraunlock.eq(0) },
                content:
                    [
                        ["raw-html", function () { return player.sitraunlockscene.eq(1) ? "<h1>Hello again." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockscene.eq(2) ? "<h1>We've met before, but that was under conflicting circumstances." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockscene.eq(3) ? "<h1>Now I can formally introduce myself." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockscene.eq(4) ? "<h1>My name is Sitra. Eldest of the three. I mean two. My bad." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockscene.eq(5) ? "<h1>I am the celestial of machines. Pure machines, prestige machines, all that goodness!" : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockscene.eq(6) ? "<h1>I must set a standard higher than that rapscallion abomination Ce308. It will be ambitious." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockscene.eq(7) ? "<h1>You must craft me a medal, made of almost every crafting material you have discovered yet." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockscene.eq(8) ? "<h1>Every single time you return to me, you must give it to me or else I won't let you in." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockscene.eq(9) ? "<h1>The TRUE ENHANCE PATH. Something that is not even contained in Jacorb's domain." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockscene.eq(10) ? "<h1>It isn't an actual path, for I have coined that term." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockscene.eq(11) ? "<h1>Back in Jacorb's day, celestials were only things of imagination." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockscene.eq(12) ? "<h1>Biology and physics could not control a being of sheer magnitude and scale." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockscene.eq(13) ? "<h1>Until Hevipelle did. He found the secret to making beings the size of realities." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockscene.eq(14) ? "<h1>The true enhance path would be what enhance powers have been made for." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockscene.eq(15) ? "<h1>You see, enhance powers make celestials celestials." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockscene.eq(16) ? "<h1>I am aware that your murder upon me is inevitable." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockscene.eq(17) ? "<h1>I have already accepted my fate. Being sacrificed to you is one noble death." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockscene.eq(18) ? "<h1>My brother is far too innocent. I don't want him to see me have a miserable death." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockscene.eq(19) ? "<h1>But once you do kill me, the bounty is very desirable." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockscene.eq(20) ? "<h1>You get access to the SITRA MACHINE. One only accessible by me." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockscene.eq(21) ? "<h1>Not only a boatload of information, but also tons of buffs and boosters." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockscene.eq(22) ? "<h1>Now you must fulfill my requirements. The grind is on, my friend." : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 139], ["clickable", 138]]],
                        ["raw-html", function () { return player.sitraunlockcutscene.eq(1) ? "<div class=spinning-symbol3>⚙</div>" : "" }, { "color": "#880808", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockcutscene.eq(0) && player.m.sitraunlock.eq(0) ? "<h3>" + format(player.h.willpower) + "/1e14<h3> willpower. " : ""}, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockcutscene.eq(0) && player.m.sitraunlock.eq(0) ? "<h3>" + format(player.h.prestigepower) + "/100,000<h3> prestige power. " : ""}, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockcutscene.eq(0) && player.m.sitraunlock.eq(0) ? "<h3>" + format(player.h.redenergy.mul(player.h.greenenergy.mul(player.h.blueenergy))) + "/1e10<h3> assembly line energy product. " : ""}, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockcutscene.eq(0) && player.m.sitraunlock.eq(0) ? "<h3>" + format(player.h.countingpoints) + "/666 counting points. " : ""}, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockcutscene.eq(0) && player.m.sitraunlock.eq(0) ? "<h3>" + format(player.h.shrinepower) + "/1,000,000 shrine power. " : ""}, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockcutscene.eq(0) && player.m.sitraunlock.eq(0) ? "<h3>" + format(player.m.points) + "/150,000,000 incremental power. " : ""}, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockcutscene.eq(0) && player.m.sitraunlock.eq(0) ? "<h3>" + format(player.m.incrementalenergy) + "/1,500 incremental energy. " : ""}, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockcutscene.eq(0) && player.m.sitraunlock.eq(0) ? "<h3>" + format(player.be.balanceenergy) + "/4,000 balance energy. " : ""}, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockcutscene.eq(0) && player.m.sitraunlock.eq(0) ? "<h3>" + format(player.ss.subspace) + "/200,000,000 subspace. " : ""}, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockcutscene.eq(0) && player.m.sitraunlock.eq(0) ? "<h3>" + format(player.hi.hindrancespirits) + "/1,500 hindrance spirits. " : ""}, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockcutscene.eq(0) && player.m.sitraunlock.eq(0) ? "<h3>" + formatTime(player.i.metaprestigetime) + "/about a month meta prestige time. " : ""}, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockcutscene.eq(0) && player.m.sitraunlock.eq(0) ? "<h3>" + format(player.points) + "/1e70 points. " : ""}, { "color": "white", "font-size": "18px", "font-family": "monospace" }],

                        ["raw-html", function () { return "<h2>You have " + formatWhole(player.c.enhancemedals) + "<h2> enhance medals." }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 142]]],
                        ["raw-html", function () { return player.sitraunlockcutscene.eq(0) && player.m.sitraunlock.eq(0) ? "<h3>TRUE CHALLENGE" : ""}, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockcutscene.eq(0) && player.m.sitraunlock.eq(0) ? "<h3>" + format(player.i.preservedquirkenergy) + "/2e9 preserved quirk energy. " : ""}, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockcutscene.eq(0) && player.m.sitraunlock.eq(0) ? "<h3>" + format(player.h.count) + "/35,000 count. " : ""}, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockcutscene.eq(0) && player.m.sitraunlock.eq(0) ? "<h3>" + formatWhole(player.c.totalanvils) + "/10 total anvils. " : ""}, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockcutscene.eq(0) && player.m.sitraunlock.eq(0) ? "<h3>" + format(player.c.craftingspeed) + "/400 crafting power per second. " : ""}, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.sitraunlockcutscene.eq(0) && player.m.sitraunlock.eq(0) ? "<h3>" + format(player.m.score) + "/16,666 meta-prestige score. " : ""}, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 141]]],
                    ]
            },
            "Main": {
                buttonStyle() { return { 'border-color': 'red', 'background-color': '#880808', "color": 'black'} },
                unlocked() { return player.i.enhancepath.eq(1) && player.i.sitraunlock.eq(1) },
                content:
                    [
                        ["raw-html", function () { return "<h1>COMING SOON! (Enjoy the new music for now)" }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return "<h1>Also join the discord please" }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                    ]
            },
        },
    },

    tabFormat: [
                           ["raw-html", function () { return player.i.ce308bossactivate.eq(0) && player.i.injacorbianbalancing.eq(1) ? "You have " + format(player.i.jacorbianenergy) + " jacorbian energy." : "" }, { "color": "#b82fbd", "font-size": "32px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.i.ce308bossactivate.eq(0) && player.i.injacorbianbalancing.eq(1) ? "You are gaining " + format(player.i.jacorbianenergytoget) + " jacorbian energy per beacon fill (based on score)." : "" }, { "color": "#b82fbd", "font-size": "24px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.i.ce308bossactivate.eq(0) && player.i.injacorbianbalancing.eq(1) ? "You have " + format(player.points) + " points." : "" }, { "color": "white", "font-size": "14px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.i.ce308bossactivate.eq(0) && player.i.injacorbianbalancing.eq(0) ? "You have " + format(player.points) + " points." : "" }, { "color": "white", "font-size": "32px", "font-family": "monospace" }],
        ["raw-html", function () { return player.i.ce308bossactivate.eq(0) && player.i.injacorbianbalancing.eq(0) ? "You are gaining " + format(player.gain) + " points per second." : ""}, { "color": "white", "font-size": "24px", "font-family": "monospace" }],
        ["row", [["clickable", 14], ["clickable", 23], ["clickable", 27], ["clickable", 55], ["clickable", 88], ["clickable", 102], ["clickable", 116], ["clickable", 132]]],
         ["microtabs", "stuff", { 'border-width': '0px' }],
         ["raw-html", function () { return options.musicToggle && player.inreddiamondcutscene.eq(0) && player.injacorbcutscene.eq(1) && player.inartiscutscene.eq(0) && player.inaarexcutscene.eq(0) && player.ince308cutscene.eq(0) && player.inconfrontcutscene.eq(0) && player.playdotpm.eq(0) && player.inchapter1ending.eq(0) && player.insitracutscene.eq(0) ? "<audio controls autoplay loop hidden><source src=music/jacorbcutscene.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
         ["raw-html", function () { return options.musicToggle && player.inreddiamondcutscene.eq(1) && player.injacorbcutscene.eq(0) && player.inartiscutscene.eq(0) && player.inaarexcutscene.eq(0) && player.ince308cutscene.eq(0) && player.inconfrontcutscene.eq(0) && player.playdotpm.eq(0) && player.inchapter1ending.eq(0) && player.insitracutscene.eq(0) ? "<audio controls autoplay loop hidden><source src=music/reddiamond.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
         ["raw-html", function () { return options.musicToggle && player.inreddiamondcutscene.eq(0) && player.injacorbcutscene.eq(0) && player.inartiscutscene.eq(1) && player.inaarexcutscene.eq(0) && player.ince308cutscene.eq(0) && player.inconfrontcutscene.eq(0) && player.playdotpm.eq(0) && player.inchapter1ending.eq(0) && player.insitracutscene.eq(0) ? "<audio controls autoplay loop hidden><source src=music/craftingcutscene.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
         ["raw-html", function () { return options.musicToggle && player.inreddiamondcutscene.eq(0) && player.injacorbcutscene.eq(0) && player.inartiscutscene.eq(0) && player.inaarexcutscene.eq(1) && player.ince308cutscene.eq(0) && player.inconfrontcutscene.eq(0) && player.playdotpm.eq(0) && player.inchapter1ending.eq(0) && player.insitracutscene.eq(0) ? "<audio controls autoplay loop hidden><source src=music/aarexcutscene.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
         ["raw-html", function () { return options.musicToggle && player.inreddiamondcutscene.eq(0) && player.injacorbcutscene.eq(0) && player.inartiscutscene.eq(0) && player.inaarexcutscene.eq(0) && player.ince308cutscene.eq(1) && player.inconfrontcutscene.eq(0) && player.playdotpm.eq(0) && player.inchapter1ending.eq(0) && player.insitracutscene.eq(0) ? "<audio controls autoplay loop hidden><source src=music/pseudocutscene.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
         ["raw-html", function () { return options.musicToggle && player.inreddiamondcutscene.eq(0) && player.injacorbcutscene.eq(0) && player.inartiscutscene.eq(0) && player.inaarexcutscene.eq(0) && player.ince308cutscene.eq(0) && player.inconfrontcutscene.eq(1) && player.playdotpm.eq(0) && player.inchapter1ending.eq(0) && player.insitracutscene.eq(0) ? "<audio controls autoplay loop hidden><source src=music/confrontation.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
         ["raw-html", function () { return options.musicToggle && player.inreddiamondcutscene.eq(0) && player.injacorbcutscene.eq(0) && player.inartiscutscene.eq(0) && player.inaarexcutscene.eq(0) && player.ince308cutscene.eq(0) && player.inconfrontcutscene.eq(0) && player.playdotpm.eq(1) && player.inchapter1ending.eq(0) && player.insitracutscene.eq(0) ? "<audio controls autoplay loop hidden><source src=music/pseudoboss.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
         ["raw-html", function () { return options.musicToggle && player.inreddiamondcutscene.eq(0) && player.injacorbcutscene.eq(0) && player.inartiscutscene.eq(0) && player.inaarexcutscene.eq(0) && player.ince308cutscene.eq(0) && player.inconfrontcutscene.eq(0) && player.playdotpm.eq(0) && player.inchapter1ending.eq(1) && player.insitracutscene.eq(0) ? "<audio controls autoplay loop hidden><source src=music/chapter1end.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
         ["raw-html", function () { return options.musicToggle && player.inreddiamondcutscene.eq(0) && player.injacorbcutscene.eq(0) && player.inartiscutscene.eq(0) && player.inaarexcutscene.eq(0) && player.ince308cutscene.eq(0) && player.inconfrontcutscene.eq(0) && player.playdotpm.eq(0) && player.inchapter1ending.eq(0) && player.insitracutscene.eq(1) ? "<audio controls autoplay loop hidden><source src=music/sitracutscene.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
         ["raw-html", function () { return options.musicToggle && player.i.standardpath.eq(0) && player.i.enhancepath.eq(0) && player.inreddiamondcutscene.eq(0) && player.injacorbcutscene.eq(0) && player.inartiscutscene.eq(0) && player.inaarexcutscene.eq(0) && player.ince308cutscene.eq(0) && player.inconfrontcutscene.eq(0) && player.playdotpm.eq(0) && player.inchapter1ending.eq(0) && player.insitracutscene.eq(0) && player.i.injacorbianbalancing.eq(0) && player.i.sitraunlock.eq(0) ? "<audio controls autoplay loop hidden><source src=music/pathless.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
         ["raw-html", function () { return options.musicToggle && player.i.standardpath.eq(1) && player.i.enhancepath.eq(0) && player.inreddiamondcutscene.eq(0) && player.injacorbcutscene.eq(0) && player.inartiscutscene.eq(0) && player.inaarexcutscene.eq(0) && player.ince308cutscene.eq(0) && player.inconfrontcutscene.eq(0) && player.playdotpm.eq(0) && player.inchapter1ending.eq(0) && player.insitracutscene.eq(0) && player.i.injacorbianbalancing.eq(0) && player.i.sitraunlock.eq(0) ? "<audio controls autoplay loop hidden><source src=music/energeticsong.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
         ["raw-html", function () { return options.musicToggle && player.i.standardpath.eq(0) && player.i.enhancepath.eq(1) && player.inreddiamondcutscene.eq(0) && player.injacorbcutscene.eq(0) && player.inartiscutscene.eq(0) && player.inaarexcutscene.eq(0) && player.ince308cutscene.eq(0) && player.inconfrontcutscene.eq(0) && player.playdotpm.eq(0) && player.inchapter1ending.eq(0) && player.insitracutscene.eq(0) && player.i.injacorbianbalancing.eq(0) && player.i.sitraunlock.eq(0) ? "<audio controls autoplay loop hidden><source src=music/enhancepath.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
         ["raw-html", function () { return options.musicToggle && player.i.standardpath.eq(0) && player.i.enhancepath.eq(1) && player.inreddiamondcutscene.eq(0) && player.injacorbcutscene.eq(0) && player.inartiscutscene.eq(0) && player.inaarexcutscene.eq(0) && player.ince308cutscene.eq(0) && player.inconfrontcutscene.eq(0) && player.playdotpm.eq(0) && player.inchapter1ending.eq(0) && player.insitracutscene.eq(0) && player.i.injacorbianbalancing.eq(1) ? "<audio controls autoplay loop hidden><source src=music/jacorb.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
         ["raw-html", function () { return options.musicToggle && player.i.standardpath.eq(0) && player.i.enhancepath.eq(1) && player.inreddiamondcutscene.eq(0) && player.injacorbcutscene.eq(0) && player.inartiscutscene.eq(0) && player.inaarexcutscene.eq(0) && player.ince308cutscene.eq(0) && player.inconfrontcutscene.eq(0) && player.playdotpm.eq(0) && player.inchapter1ending.eq(0) && player.insitracutscene.eq(0) && player.i.injacorbianbalancing.eq(0) && player.i.sitraunlock.eq(1) ? "<audio controls autoplay loop hidden><source src=music/trueenhancepath.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
        ],
    layerShown() { return player.dimensionalrealm.eq(0) }
})

function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.style.position = 'fixed';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.pointerEvents = 'none';
    particlesContainer.style.zIndex = '9999';

    for (let i = 0; i < 500; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.backgroundColor = getRandomColor();
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.borderRadius = '50%';
        particle.style.transform = 'translate(-50%, -50%)';
        particle.style.pointerEvents = 'none';
        particle.style.animation = 'particles-animation 2s ease-out';
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;

        particlesContainer.appendChild(particle);
    }

    document.body.appendChild(particlesContainer);

    // Remove particles after animation
    setTimeout(() => {
        document.body.removeChild(particlesContainer);
    }, 2000);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}
// Add CSS keyframes animation for rotation
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
@keyframes shake-random {
  0% {
    transform: translate(0);
  }
  10% {
    transform: translate(-5px, -5px);
  }
  20% {
    transform: translate(5px, -5px);
  }
  30% {
    transform: translate(-5px, 5px);
  }
  40% {
    transform: translate(5px, -5px);
  }
  50% {
    transform: translate(-5px, 5px);
  }
  60% {
    transform: translate(5px, 5px);
  }
  70% {
    transform: translate(-5px, -5px);
  }
  80% {
    transform: translate(5px, 5px);
  }
  90% {
    transform: translate(-5px, -5px);
  }
  100% {
    transform: translate(0);
  }
}
`;
document.head.appendChild(styleSheet);

const styleSheet2 = document.createElement('style');
styleSheet2.innerHTML = `
@keyframes orbit {
    0% {
        transform: rotate(0deg) translateX(175px) rotate(0deg);
      }
      100% {
        transform: rotate(360deg) translateX(175px) rotate(-360deg);
      }
  }
  `;

document.head.appendChild(styleSheet2);

function createLightning() {
    // Create a canvas element
    const canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    // Adjust the position of the canvas based on your needs
    const canvasPositionX = 0; // Adjust the X-coordinate
    const canvasPositionY = 0; // Adjust the Y-coordinate
    canvas.style.left = `${canvasPositionX}px`;
    canvas.style.top = `${canvasPositionY}px`;
  
    // Append the canvas element to the document body
    document.body.appendChild(canvas);
  
    // Make the canvas transparent to mouse events
    canvas.style.pointerEvents = "none";
  
    // Draw the lightning bolt on the canvas
    const context = canvas.getContext("2d");
  
    function drawLightning() {
      context.clearRect(0, 0, canvas.width, canvas.height);
  
      context.shadowBlur = 10; // Adjust the shadow blur
      context.shadowColor = "white"; // Adjust the shadow color
  
      const startX = Math.random() * canvas.width; // Starting position of the lightning bolt
      const startY = 0; // Top of the screen
      const endY = canvas.height; // Bottom of the screen
  
      const segments = [];
  
      segments.push({ x: startX, y: startY });
  
      let prevX = startX;
      let prevY = startY;
      let currentX, currentY;
  
      while (prevY < endY - 20) {
        const deviationX = Math.random() * 80 - 40; // Adjust the randomness of the X-coordinate deviation
        const deviationY = Math.random() * 40 + 20; // Adjust the randomness and length of the Y-coordinate deviation
        currentX = prevX + deviationX;
        currentY = prevY + deviationY;
        segments.push({ x: currentX, y: currentY });
        prevX = currentX;
        prevY = currentY;
      }
  
      segments.push({ x: startX, y: endY });
  
      context.beginPath();
      context.moveTo(segments[0].x, segments[0].y);
  
      for (let i = 1; i < segments.length; i++) {
        const segment = segments[i];
        context.lineTo(segment.x, segment.y);
      }
  
      context.lineWidth = 8; // Adjust the line width of the lightning bolt
      context.strokeStyle = "rgba(255, 255, 255, 0.5)"; // Adjust the color and transparency of the lightning bolt stroke
      context.stroke();
  
      // Remove the canvas element after a second
      setTimeout(() => {
        document.body.removeChild(canvas);
      }, 1000); // Adjust the duration of the lightning bolt effect
    }
  
    // Start drawing the lightning effect
    drawLightning();
  }
function generateMist(durationInSeconds) {
    const mistColor = "#b82fbd";
    const mistOpacity = 2; // Change this value to adjust the opacity of the mist
  
    // Create the mist overlay element
    const mistOverlay = document.createElement("div");
    mistOverlay.style.position = "fixed";
    mistOverlay.style.top = "0";
    mistOverlay.style.left = "0";
    mistOverlay.style.width = "100%";
    mistOverlay.style.height = "100%";
    mistOverlay.style.backgroundColor = mistColor;
    mistOverlay.style.opacity = "0";
    document.body.appendChild(mistOverlay);
  
    // Animate the mist overlay
    let opacity = 0;
    let startTime = null;
  
    function animateMist(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      opacity = (elapsed / (durationInSeconds * 1000)) * mistOpacity;
      mistOverlay.style.opacity = Math.min(opacity, mistOpacity);
  
      if (elapsed < durationInSeconds * 1000) {
        requestAnimationFrame(animateMist);
      } else {
        document.body.removeChild(mistOverlay);
      }
    }
  
    requestAnimationFrame(animateMist);
  }
  
  // Usage: Call the function with the desired duration in seconds

  function flashAndFade(flashDuration) {
    const body = document.body;
  
    // Create a div for the flash effect
    const flashDiv = document.createElement('div');
    flashDiv.style.position = 'fixed';
    flashDiv.style.top = '0';
    flashDiv.style.left = '0';
    flashDiv.style.width = '100%';
    flashDiv.style.height = '100%';
    flashDiv.style.backgroundColor = 'white';
    flashDiv.style.zIndex = '9999';
    body.appendChild(flashDiv);
  
    // Flash the screen white
    setTimeout(() => {
      flashDiv.style.transition = `opacity ${flashDuration / 1000}s ease-out`;
      flashDiv.style.opacity = '0';
    }, 10);
  
    // Remove the div after the animation
    flashDiv.addEventListener('transitionend', () => {
      body.removeChild(flashDiv);
    }, { once: true });
  }

  // Function to generate random number within a range
  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Function to create a bouncing circle
  function createBouncingCircle() {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    document.body.appendChild(circle);

    const initialX = getRandom(0, window.innerWidth - 50);
    const initialY = getRandom(0, window.innerHeight - 50);
    let speedX = getRandom(5, 7); // Make these variables mutable
    let speedY = getRandom(5, 7); // Make these variables mutable

    circle.style.left = initialX + "px";
    circle.style.top = initialY + "px";

    function updatePosition() {
      let x = parseFloat(circle.style.left);
      let y = parseFloat(circle.style.top);

      x += speedX;
      y += speedY;

      if (x + circle.clientWidth > window.innerWidth || x < 0) {
        speedX *= -1;
      }

      if (y + circle.clientHeight > window.innerHeight || y < 0) {
        speedY *= -1;
      }

      circle.style.left = x + "px";
      circle.style.top = y + "px";

      requestAnimationFrame(updatePosition);
    }

    updatePosition();

    circle.addEventListener("mouseenter", function() {
      // Call the function when the mouse hovers over the circle
      doSomethingOnHover();
      removeCircle(circle);
    });
  // Set a timeout to move the circle off-screen and remove it after 4 seconds
  setTimeout(function() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    const randomDirection = Math.random() * 360; // Random angle in degrees
    const distance = Math.max(screenWidth, screenHeight) * 1.5; // Distance to move off-screen

    const endX = screenWidth / 2 + Math.cos(randomDirection) * distance;
    const endY = screenHeight / 2 + Math.sin(randomDirection) * distance;

    // Animate the circle towards the calculated end position
    let x = parseFloat(circle.style.left);
    let y = parseFloat(circle.style.top);

    function animateOffScreen() {
      x += (endX - x) * 0.05; // Smoothing factor
      y += (endY - y) * 0.05; // Smoothing factor

      circle.style.left = x + "px";
      circle.style.top = y + "px";

      // Continue animation until circle is off-screen
      if (Math.abs(endX - x) > 1 || Math.abs(endY - y) > 1) {
        requestAnimationFrame(animateOffScreen);
      } else {
        removeCircle(circle);
      }
    }

    animateOffScreen();
  }, 4000); // Move off-screen after 4000 milliseconds (4 seconds)
  }

  // Function to be called when mouse hovers over the circle
  function doSomethingOnHover() {
    player.i.playerhealth = player.i.playerhealth.sub(10)
    player.i.nohitce308 = new Decimal(1)
  }
  function removeAllCircles() {
    const circles = document.querySelectorAll(".circle");
    circles.forEach(circle => {
      document.body.removeChild(circle);
    });
  }
// Function to remove a circle element
function removeCircle(circle) {
    if (circle && circle.parentNode) {
      circle.parentNode.removeChild(circle);
    }
  }
  function spawnGreenCircle() {
    const greenCircle = document.createElement('div');
    greenCircle.classList.add('green-circle');
    document.body.appendChild(greenCircle);
  
    const circleSize = 100;
  
    // Set initial random position within the visible screen area
    const maxX = window.innerWidth - circleSize;
    const maxY = window.innerHeight - circleSize;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    greenCircle.style.left = `${randomX}px`;
    greenCircle.style.top = `${randomY}px`;
  
    const duration = 5000; // 5 seconds
  
    setTimeout(() => {
      if (greenCircle.parentElement === document.body) {
        document.body.removeChild(greenCircle);
      }
    }, duration);
  
    greenCircle.addEventListener('click', () => {
      // Do something when clicked
      // For example: alert("Circle clicked!");
      player.i.playerhealth = player.i.playerhealth.add(8)  
      if (greenCircle.parentElement === document.body) {
        document.body.removeChild(greenCircle);
      }
    });
  }
  const jacorbparticle = {
    image: "resources/jacorblayer.png",
    x() {
        return (Math.random() + 4) * 300
    },
    y() {
        return (Math.random() + 1) * -400
    },
    spread: 200,
    time: 10,
    dir() {
        return (Math.random() + 1) * 365
    },
    speed() { // Randomize speed a bit
        return (Math.random() + 4) * 4
    },
}
let raining = false;
let rainInterval;

// Function to start the rain effect
function startRain() {
  if (!raining) {
    raining = true;
    rainInterval = setInterval(createRaindrop, 30);
  }
}

// Function to stop the rain effect
function stopRain() {
  if (raining) {
    raining = false;
    clearInterval(rainInterval);
  }
}

// Function to create a raindrop
function createRaindrop() {
  const raindrop = document.createElement('div');
  raindrop.classList.add('raindrop');
  raindrop.style.left = Math.random() * window.innerWidth + 'px';
  raindrop.style.top = '0';
  raindrop.style.backgroundColor = '#880808';
  raindrop.style.width = '2px';
  raindrop.style.height = '15px';
  raindrop.style.position = 'absolute';
  document.body.appendChild(raindrop);

  const animationDuration = Math.random() * 2 + 1;
  raindrop.style.animation = `fall ${animationDuration}s linear`;

  raindrop.addEventListener('animationend', () => {
    raindrop.remove();
  });
}

// Add a simple CSS animation for falling raindrops
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fall {
    to {
      transform: translateY(calc(100vh + 15px));
    }
  }
`;
document.head.appendChild(style);