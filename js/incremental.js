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
        producingprestigeenergy: new Decimal(1),
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
        generatorenergy: new Decimal(0),
        generatorenergyeffect: new Decimal(1),
        generatorenergypersecond: new Decimal(0),
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

        corruptiondelay: new Decimal(0),

        //Machine Autobuy
        machineautomode: new Decimal(0),


        //ENHANCE PATH
        enhancepath: new Decimal(0),
        bestenhancepoints: new Decimal(0),
        enhancepoints: new Decimal(0),
        enhancepointseffect: new Decimal(1),
        enhancepointspersecond: new Decimal(0),
        enhancedprestigepoints: new Decimal(0),
    }
    },
    automate() {
        if (hasUpgrade("i", 12))
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
                top: "27.5%",
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
                top: "27.5%",
                left: "46.5%",
            }
        }
        if (player.i.enhancepath.eq(1)) {
            return {
                "background-image": "linear-gradient(45deg, #b82fbd, purple)",
                "background-origin": "border-box",
                animation: 'orbit 25s infinite linear', // Rotation animation
                position: "absolute",
                boxShadow: '0 0 10px 2px purple',
                top: "27.5%",
                left: "46.5%",
            }
        }
    },
    color: "white",
    tooltip: "Incremental", // Row the layer is in on the tree (0 is the first row)
    update(delta) {
        let onepersec = new Decimal(1)

        if (player.i.enhancepath.eq(0)) player.i.metaprestigetime = player.i.metaprestigetime.add(onepersec.mul(delta))
        if (player.i.enhancepath.eq(1)) player.i.metaprestigetime = player.i.metaprestigetime.add(onepersec.mul(3).mul(delta))

        if (player.prestigescene.eq(6)) {
            player.prestigecutscene = new Decimal(0)
        }

        player.i.prestigepointstoget = player.points.pow(0.4).div(3)
        if (player.i.standardpath.eq(1)) player.i.prestigepointstoget = player.i.prestigepointstoget.mul(1.25)
        if (player.i.standardpath.eq(1)) player.i.prestigepointstoget = player.i.prestigepointstoget.mul(player.i.prestigeenergyeffect)
        if (hasUpgrade("m", 13)) player.i.prestigepointstoget = player.i.prestigepointstoget.mul(upgradeEffect("m", 13))
        if (player.i.standardpath.eq(1)) player.i.prestigepointstoget = player.i.prestigepointstoget.mul(player.i.prestigemachineeffect)
        if (player.i.currentenergizer.eq(3)) player.i.prestigepointstoget = player.i.prestigepointstoget.div(1000)
        player.i.prestigepointstoget = player.i.prestigepointstoget.mul(buyableEffect("i", 23))
        if (player.i.enhancepath.eq(1)) player.i.prestigepointstoget = player.i.prestigepointstoget.pow(0.95)

        if (hasUpgrade("i", 22)) player.i.prestigepoints = player.i.prestigepoints.add(player.i.prestigepointstoget.mul(delta))

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

        player.i.prestigeenergy = player.i.prestigeenergy.add(player.i.prestigeenergypersecond.mul(delta))

        player.i.pureenergyeffect = player.i.pureenergy.pow(1.2).add(1)
        if (player.i.currentenergizer.neq(2)) player.i.prestigeenergyeffect = player.i.prestigeenergy.pow(0.4).add(1)
        if (player.i.currentenergizer.eq(2)) player.i.prestigeenergyeffect = player.i.prestigeenergy.pow(0.4).mul(8).add(1)
        if (player.i.currentenergizer.neq(2)) player.i.prestigeenergyeffectonpoints = player.i.prestigeenergy.pow(0.2).add(1).mul(player.i.machinecorruptioneffect).div(player.i.pureenergyeffect)
        if (player.i.currentenergizer.eq(2)) player.i.prestigeenergyeffectonpoints = player.i.prestigeenergy.pow(0.2).pow(2).add(1).mul(player.i.machinecorruptioneffect).div(player.i.pureenergyeffect).div(buyableEffect("i", 19))

        if (player.i.prestigeenergy.gte(player.i.bestprestigeenergy)) player.i.bestprestigeenergy = player.i.prestigeenergy

        if (player.machinescene.eq(22)) {
            player.machinecutscene = new Decimal(0)
        }

        if (player.i.currentenergizer.neq(1)) player.i.prestigemachinereq = Decimal.pow(3, player.i.prestigemachines)
        if (player.i.currentenergizer.eq(1)) player.i.prestigemachinereq = Decimal.pow(1.5, player.i.prestigemachines)
        player.i.prestigemachineeffect = player.i.prestigemachines.pow(1.2).add(1)

        if (!hasUpgrade("i", 23)) player.i.corruptiondelay = buyableEffect('i', 18)
        if (hasUpgrade("i", 23)) player.i.corruptiondelay = buyableEffect('i', 18).add(upgradeEffect("i", 23))

        if (player.i.prestigemachines.lt(player.i.corruptiondelay)) player.i.machinecorruption = new Decimal(0)
        if (player.i.currentenergizer.neq(1) && player.i.prestigemachines.gt(player.i.corruptiondelay)) player.i.machinecorruption = player.i.prestigemachines.sub(player.i.corruptiondelay).pow(1.75)
        if (player.i.currentenergizer.eq(1) && player.i.prestigemachines.gt(player.i.corruptiondelay)) player.i.machinecorruption = player.i.prestigemachines.sub(player.i.corruptiondelay).pow(1.75).pow(2)
        player.i.machinecorruptioneffect = player.i.machinecorruption.pow(0.75).add(1)

        if (player.i.prestigeenergy.neq(0)) player.i.noenergyboost = new Decimal(1)

        if (player.pureenergyscene.eq(16)) {
            player.pureenergycutscene = new Decimal(0)
        }

        if (player.i.pureenergypause.gt(0)) {
            layers.i.pureenergyreset();
        }
        player.i.pureenergypause = player.i.pureenergypause.sub(1)

        player.i.pureenergytoget = player.i.prestigepoints.div(1e7).pow(0.3)
        player.i.pureenergytoget = player.i.pureenergytoget.mul(buyableEffect("i", 23))
        if (player.i.pureenergy.gte(player.i.bestpureenergy)) player.i.bestpureenergy = player.i.pureenergy

        player.i.generatorenergypersecond = buyableEffect("i", 16)
        player.i.generatorenergypersecond = player.i.generatorenergypersecond.mul(buyableEffect("i", 21))
        player.i.generatorenergypersecond = player.i.generatorenergypersecond.mul(buyableEffect("i", 23))
        player.i.generatorenergy = player.i.generatorenergy.add(player.i.generatorenergypersecond.mul(delta))

        player.i.boosterenergypersecond = buyableEffect("i", 17)
        player.i.boosterenergypersecond = player.i.boosterenergypersecond.mul(buyableEffect("i", 22))
        player.i.boosterenergypersecond = player.i.boosterenergypersecond.mul(buyableEffect("i", 23))
        player.i.boosterenergy = player.i.boosterenergy.add(player.i.boosterenergypersecond.mul(delta))

        player.i.generatorenergyeffect = player.i.generatorenergy.pow(0.3).add(1)
        player.i.boosterenergyeffect = player.i.boosterenergy.pow(0.4).add(1)

        if (player.energizerscene.eq(16)) {
            player.energizercutscene = new Decimal(0)
        }

        if (player.i.machineautomode.eq(1) && player.i.prestigepoints.gte(player.i.prestigemachinereq))
        {
            player.i.prestigemachines = player.i.prestigemachines.add(1)
        }
        if (player.i.machineautomode.eq(2) && player.i.prestigepoints.gte(player.i.prestigemachinereq) && player.i.prestigemachines.lt(player.i.corruptiondelay))
        {
            player.i.prestigemachines = player.i.prestigemachines.add(1)
        }

        let enhanceloss = new Decimal(0)
        enhanceloss = player.i.enhancedprestigepoints.mul(0.1)

        player.i.enhancepoints = player.i.enhancepoints.add(player.i.enhancepointspersecond.mul(delta))
        player.i.enhancepointseffect = player.i.enhancepoints.pow(0.5).add(1)

        player.i.enhancepointspersecond = player.i.enhancedprestigepoints.div(1e7).pow(0.25)
        player.i.enhancedprestigepoints = player.i.enhancedprestigepoints.sub(enhanceloss.mul(delta))

        if (player.i.enhancepoints.gte(player.i.bestenhancepoints)) player.i.bestenhancepoints = player.i.enhancepoints
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
    clickables: {
        11: {
            title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.prestigecutscene.eq(1) },
            unlocked() { return player.prestigescene.neq(6) },
            onClick() {
                player.prestigescene = player.prestigescene.add(1)
            },
        },
        12: {
            title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.prestigecutscene.eq(1) },
            unlocked() { return player.prestigescene.neq(6) && player.prestigescene.neq(0) },
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
            unlocked() { return player.prestigecutscene.eq(0) },
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
            unlocked() { return player.machinecutscene.eq(0) && player.i.standardpath.eq(1) && hasUpgrade("i", 13) && player.machinecutscene.eq(0) },
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
            unlocked() { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0) && hasUpgrade("i", 14) },
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
            unlocked() { return player.pureenergycutscene.eq(0) && player.i.standardpath.eq(1) },
            onClick() {
                player.i.nextenergizer = new Decimal(0)
            },
        },
        33: {
            title() { return "<img src='resources/cheapmachines.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return true },
            unlocked() { return player.pureenergycutscene.eq(0) && player.i.standardpath.eq(1) },
            onClick() {
                player.i.nextenergizer = new Decimal(1)
            },
        },
        34: {
            title() { return "<img src='resources/strongprestigeenergy.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return true },
            unlocked() { return player.pureenergycutscene.eq(0) && player.i.standardpath.eq(1) },
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
            unlocked() { return player.pureenergycutscene.eq(0) && player.i.standardpath.eq(1) && hasUpgrade("i", 19)},
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
            unlocked() { return player.i.standardpath.eq(1) && hasUpgrade("i", 13) && hasUpgrade("m", 14) },
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
            description: "Unlocks automation for prestige machies (in prestige tab).",
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
            description: "Gives extra corruption delay based on enhancers",
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
                if (!hasUpgrade("i", 12)) player.points = player.points.sub(cost)
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
                if (!hasUpgrade("i", 12)) player.points = player.points.sub(cost)
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
                if (!hasUpgrade("i", 12)) player.points = player.points.sub(cost)
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
                if (!hasUpgrade("i", 16)) player.i.prestigepoints = player.i.prestigepoints.sub(cost)
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
                if (!hasUpgrade("i", 16)) player.i.prestigepoints = player.i.prestigepoints.sub(cost)
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
                player.i.pureenergy = player.i.pureenergy.sub(cost)
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
                player.i.pureenergy = player.i.pureenergy.sub(cost)
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
                player.i.boosterenergy = player.i.boosterenergy.sub(cost)
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
                player.i.generatorenergy = player.i.generatorenergy.sub(cost)
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
                player.i.boosterenergy = player.i.boosterenergy.sub(cost)
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
                player.i.generatorenergy = player.i.generatorenergy.sub(cost)
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
                return "<h5>Enchance points. A crude form of jacorbian energy."
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
                player.i.pureenergy = player.i.pureenergy.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#b82fbd",}
        },
    },
    milestones: {

    },
    challenges: {
    },
    bars: {

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
            body() { return "Log II: The meeting was frightening. Hevipelle wanted to use ?????????? to obliterate the entire realm, but that is wrong. Me and Aarex pitched our own ideas. To build a weapon of great power, but without any destructive intents. This would stop the death realm from reaching the ??????????? weapon that we have locked up in the ???????? ?????. A lot of people agreed, but I had to start work tommorow. A lot of battles would be raging, but I think I'll be fine." },         
        },    
        jacorblog4: {
            unlocked() { return player.energizercutscene.eq(0) && player.i.nextenergizer.eq(2) },
            title: "Log IV",
            body() { return "Log IV: It's hard to believe that the ???? ?? ??????????? are gone. After helping us make the ?????????? ??????, it seemed like they dissapeared. I wish they would return someday. I was great friends with them. The high ruler of the void is sending more troops to battle. ???????? has been slacking off lately. ???? has been doing all of his work. I wonder whats going on with him. Is ??? ??? back?" },         
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
            body() { return "Log IX: Aarex got sick, which is strange because he's a god (and born a god, unlike me). So I've been working on the prestige tree (yes it has a name now) by myself. I'm working on the 3rd row, and I'm implementing some of my own balancing into it. (Screw you Aarex timewalls). Hevipelle even helped me out a bit. I hope we win. I really do." },         
        }, 
        jacorblog10: {
            unlocked() { return player.energizercutscene.eq(0) && player.i.nextenergizer.eq(3) && player.i.currentenergizer.eq(0) },
            title: "Log X",
            body() { return "Log X: Bad news. Our last battle was a big flop. The realms want to get ????????? from the dimensional realm to help them fight since we already lost a lot of soldiers. However, the dimensional realm has always stayed neutral. Aarex is feeling better now, so we kept on doing our work. Hope they don't find out about the ???????? ?????." },         
        }, 
    },
    microtabs: {
        stuff: {
            "Main": {
                buttonStyle() { return { 'color': 'white' } },
                unlocked() { return true },
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
                    ]

            },
            "Prestige": {
                buttonStyle() { return { 'color': '#31aeb0' } },
                unlocked() { return player.points.gte(50) || player.i.prestigepoints.gt(0) },
                content:
                
                    [
         ["microtabs", "prestige", { 'border-width': '0px' }],
        ]

            },
            "Pure Energy": {
                buttonStyle() { return { 'color': '#ffffaa' } },
                unlocked() { return player.i.standardpath.eq(1) && hasUpgrade("i", 14) },
                content:
                
                    [
         ["microtabs", "pureenergy", { 'border-width': '0px' }],
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
                        ["blank", "25px"],
                        ["row", [["clickable", 12], ["clickable", 11]]],
                        ["raw-html", function () { return player.prestigecutscene.eq(0) ? "<h2>You have " + format(player.i.prestigepoints) + "<h2> prestige points. " : "" }],
                        ["raw-html", function () { return player.prestigecutscene.eq(0) ? "<h2>You will gain " + format(player.i.prestigepointstoget) + "<h2> on reset. " : "" }],
                        ["row", [["clickable", 13]]],
                        ["blank", "25px"],
                        ["row", [["buyable", 14]]],
                        ["blank", "25px"],
                        ["row", [["upgrade", 11], ["upgrade", 12], ["upgrade", 13], ["upgrade", 14]]],
                        ["row", [["upgrade", 101]]],
                        ["row", [["clickable", 15]]],
                        ["row", [["clickable", 16], ["blank", "25px"], ["clickable", 43]]],
                        ["blank", "25px"],
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
                        ["raw-html", function () { return player.i.standardpath.eq(1) ? "<h3>but a /" + format(player.i.prestigeenergyeffectonpoints) + " divide on point gain. " : ""}, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
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
                        ["raw-html", function () { return player.machinescene.eq(18) && player.i.standardpath.eq(1) ? "<h1>However, there are some corrupted energy in it." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
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
                        ["raw-html", function () { return "<h3>Current corruption delay: " + format(player.i.corruptiondelay) }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
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
                        ["raw-html", function () { return player.pureenergyscene.eq(3) && player.i.standardpath.eq(1) ? "<h1>I have no clue how the nobles still trust him." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(4) && player.i.standardpath.eq(1) ? "<h1>After that incident. That incident that got all of them exiled." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(5) && player.i.standardpath.eq(1) ? "<h1>His many attempts to use his many-dimensional cubes failed." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(6) && player.i.standardpath.eq(1) ? "<h1>Jacorb and Aarex's attempts failed as well." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(7) && player.i.standardpath.eq(1) ? "<h1>Maybe Yhvr's plan would work. You would be the ones setting them free." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(8) && player.i.standardpath.eq(1) ? "<h1>When I first met Yhvr recently, he worked really hard on galaxy.click" : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(9) && player.i.standardpath.eq(1) ? "<h1>It is now the key area of the incremental community." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(10) && player.i.standardpath.eq(1) ? "<h1>The highest concentration of incremental developers." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(11) && player.i.standardpath.eq(1) ? "<h1>I've never gone before, but I'd love to see it one day." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(12) && player.i.standardpath.eq(1) ? "<h1>Now is not the time. YOU must be the one to go there." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(13) && player.i.standardpath.eq(1) ? "<h1>Yhvr, Jacorb, and Aarex will explain more about this." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(14) && player.i.standardpath.eq(1) ? "<h1>They want you to find the 28 LAYERS OF THE PRESTIGE TREE." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergyscene.eq(15) && player.i.standardpath.eq(1) ? "<h1>Anyways, gotta go. You'll get more lore later." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 25], ["clickable", 24]]],
                        ["raw-html", function () { return player.pureenergycutscene.eq(0) ? "<h2>You have " + format(player.i.pureenergy) + "<h2> pure energy. " : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.standardpath.eq(1) && player.pureenergycutscene.eq(0)? "<h3>which divides prestige energy downside by /" + format(player.i.pureenergyeffect) + ". " : ""}, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.pureenergycutscene.eq(0) ? "<h2>You will gain " + format(player.i.pureenergytoget) + "<h2> on reset. " : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 26]]],
                        ["blank", "25px"],
                        ["row", [["upgrade", 15], ["upgrade", 16], ["upgrade", 17], ["upgrade", 18], ["upgrade", 19]]],
                        ["row", [["upgrade", 21], ["upgrade", 22], ["upgrade", 23]]],
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
                        ["raw-html", function () { return player.energizerscene.eq(7) && player.i.standardpath.eq(1) ? "<h1>It is the celestial of prestige machines. It should be very easy." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.energizerscene.eq(8) && player.i.standardpath.eq(1) ? "<h1>In the time between the predecessor and your arrival," : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.energizerscene.eq(9) && player.i.standardpath.eq(1) ? "<h1>We have done long and strenuous research." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.energizerscene.eq(10) && player.i.standardpath.eq(1) ? "<h1>One of these advancements was to shorten meta-prestiges." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.energizerscene.eq(11) && player.i.standardpath.eq(1) ? "<h1>It wasn't so complicated as we thought." : "" }, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
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
                        ["raw-html", function () { return player.i.nextenergizer.eq(0) && player.energizercutscene.eq(0) ? "<h3>Next reset, you will energize with nothing. " : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.nextenergizer.eq(1) && player.energizercutscene.eq(0) ? '<h3>Next reset, you will energize with "Cheaper machines, more corruption."' : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.nextenergizer.eq(2) && player.energizercutscene.eq(0) ? '<h3>Next reset, you will energize with "Stronger prestige energy."' : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.nextenergizer.eq(3) && player.energizercutscene.eq(0) ? '<h3>Next reset, you will energize with "More points, less prestige."' : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.i.nextenergizer.eq(1) && player.energizercutscene.eq(0) ? '<h3>Prestige machines scale less (x3 -> x1.5), but machine corruptions are squared.' : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.nextenergizer.eq(2) && player.energizercutscene.eq(0) ? "<h3>Prestige Energy's good effect is multiplied by 8, but its downside is squared." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.nextenergizer.eq(3) && player.energizercutscene.eq(0) ? "<h3>Points are multiplied by x100,000, while prestige points are divided by /1,000." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 32], ["clickable", 33], ["clickable", 34], ["clickable", 41]]],
                        ["blank", "50px"],
                        ["infobox", "jacorblog1"],
                        ["infobox", "jacorblog2"],
                        ["infobox", "jacorblog4"],
                        ["infobox", "jacorblog7"],
                        ["infobox", "jacorblog8"],
                        ["infobox", "jacorblog9"],
                        ["infobox", "jacorblog10"],
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
        },
    },

    tabFormat: [
                           ["raw-html", function () { return "You have " + format(player.points) + " points." }, { "color": "white", "font-size": "32px", "font-family": "monospace" }],
        ["raw-html", function () { return "You are gaining " + format(player.gain) + " points per second."}, { "color": "white", "font-size": "24px", "font-family": "monospace" }],
        ["row", [["clickable", 14], ["clickable", 23], ["clickable", 27], ["clickable", 102]]],
         ["microtabs", "stuff", { 'border-width': '0px' }],
    ],
    layerShown() { return true }
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

function createLightning()
{
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
  }

  drawLightning();

  // Remove the canvas element after a certain duration
  setTimeout(() => {
    document.body.removeChild(canvas);
  }, 1000); // Adjust the duration of the lightning bolt effect
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