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
    }
    },
    automate() {
        if (hasUpgrade("i", 12))
        {
            buyBuyable("i", 11)
            buyBuyable("i", 12)
            buyBuyable("i", 13)
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
        if (player.unlockedmetaprestige.eq(1) && player.i.standardpath.eq(0)) {
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
    },
    color: "white",
    tooltip: "Incremental", // Row the layer is in on the tree (0 is the first row)
    update(delta) {
        if (player.prestigescene.eq(6)) {
            player.prestigecutscene = new Decimal(0)
        }

        player.i.prestigepointstoget = player.points.pow(0.4).div(3)
        if (player.i.standardpath.eq(1)) player.i.prestigepointstoget = player.i.prestigepointstoget.mul(1.25)
        if (player.i.standardpath.eq(1)) player.i.prestigepointstoget = player.i.prestigepointstoget.mul(player.i.prestigeenergyeffect)
        if (hasUpgrade("m", 13)) player.i.prestigepointstoget = player.i.prestigepointstoget.mul(upgradeEffect("m", 13))
        if (player.i.standardpath.eq(1)) player.i.prestigepointstoget = player.i.prestigepointstoget.mul(player.i.prestigemachineeffect)

        if (player.i.prestigepause.gt(0)) {
            layers.i.prestigereset();
        }

        player.i.prestigepause = player.i.prestigepause.sub(1)

        if (player.points.gte(player.bestpoints)) player.bestpoints = player.points

        player.i.prestigeenergypersecond = buyableEffect("i", 15)
        player.i.prestigeenergypersecond = player.i.prestigeenergypersecond.mul(player.i.producingprestigeenergy)
        player.i.prestigeenergypersecond = player.i.prestigeenergypersecond.mul(player.i.prestigemachineeffect)

        player.i.prestigeenergy = player.i.prestigeenergy.add(player.i.prestigeenergypersecond.mul(delta))

        player.i.prestigeenergyeffect = player.i.prestigeenergy.pow(0.4).add(1)
        player.i.prestigeenergyeffectonpoints = player.i.prestigeenergy.pow(0.2).add(1).mul(player.i.machinecorruptioneffect)

        if (player.i.prestigeenergy.gte(player.i.bestprestigeenergy)) player.i.bestprestigeenergy = player.i.prestigeenergy

        if (player.machinescene.eq(22)) {
            player.machinecutscene = new Decimal(0)
        }

        if (player.i.prestigemachines.lt(100))player.i.prestigemachinereq = Decimal.pow(player.i.prestigemachines.add(1).mul(25000), 1.3)
        if (player.i.prestigemachines.gte(100)) player.i.prestigemachinereq = Decimal.pow(player.i.prestigemachines.add(1).mul(250000), 1.3)
        player.i.prestigemachineeffect = player.i.prestigemachines.pow(1.5).add(1)

        player.i.machinecorruption = player.i.prestigemachines.pow(1.75)
        player.i.machinecorruptioneffect = player.i.machinecorruption.pow(0.75).add(1)
    },
    prestigereset()
    {
        player.points = new Decimal(1)
        player.i.prestigeenergy = new Decimal(0)

        player.i.buyables[11] = new Decimal(0)
        player.i.buyables[12] = new Decimal(0)
        player.i.buyables[13] = new Decimal(0)
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
            unlocked() { return hasUpgrade("m", 11) && player.i.standardpath.eq(0) },
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
            style: { width: '150px', "min-height": '60px', "background-color": "#ffffaa", }
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
            unlocked() { return player.i.standardpath.eq(1) && hasUpgrade("i", 11) },
            description: "Unlocks machines.",
            cost: new Decimal(1e6),
            canAfford() { return player.i.standardpath.eq(1)},
            currencyLocation() { return player.i },
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
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Point Producer"
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
                player.i.prestigepoints = player.i.prestigepoints.sub(cost)
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
                player.i.prestigepoints = player.i.prestigepoints.sub(cost)
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
            },
            style: { width: '275px', height: '150px', "background-color": "#31aeb0",}
        },
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
                    ]

            },
            "Prestige": {
                buttonStyle() { return { 'color': '#31aeb0' } },
                unlocked() { return player.points.gte(250) || player.i.prestigepoints.gt(0) },
                content:
                
                    [
         ["microtabs", "prestige", { 'border-width': '0px' }],
        ]

            },

        },
        prestige: {
            "Main": {
                buttonStyle() { return { 'color': '#31aeb0' } },
                unlocked() { return true },
                content:

                    [
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
                        ["row", [["upgrade", 11], ["upgrade", 12], ["upgrade", 13]]],
                        ["row", [["clickable", 15]]],
                        ["row", [["clickable", 16]]],
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
                        ["raw-html", function () { return player.i.standardpath.eq(1) && player.machinecutscene.eq(0)? "<h3>which has a x" + format(player.i.prestigemachineeffect) + " boost to prestige energy and prestige point gain. " : ""}, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["raw-html", function () { return player.i.standardpath.eq(1) && player.machinecutscene.eq(0) ? "<h2>Your machines cause there to be " + format(player.i.machinecorruption) + "<h2> machine corruption. " : ""}, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.standardpath.eq(1) && player.machinecutscene.eq(0)? "<h3>which causes the prestige energy downside to be x" + format(player.i.machinecorruptioneffect) + " stronger. " : ""}, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["clickable", 22]]],
                        ["raw-html", function () { return player.i.standardpath.eq(1) && player.machinecutscene.eq(0)? "<h3>Req: " + format(player.i.prestigemachinereq) + " prestige points." : ""}, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                        ["raw-html", function () { return player.i.standardpath.eq(1) && player.machinecutscene.eq(0)? "<h3>YOU CANNOT REFUND MACHINES. THE CORRUPTION IS INEVITABLE. " : ""}, { "color": "red", "font-size": "18px", "font-family": "monospace" }],

                    ]

            },
        },
    },

    tabFormat: [
                           ["raw-html", function () { return "You have " + format(player.points) + " points." }, { "color": "white", "font-size": "32px", "font-family": "monospace" }],
        ["raw-html", function () { return "You are gaining " + format(player.gain) + " points per second."}, { "color": "white", "font-size": "24px", "font-family": "monospace" }],
        ["row", [["clickable", 14], ["clickable", 23]]],
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