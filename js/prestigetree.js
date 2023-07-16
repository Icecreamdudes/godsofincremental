                   addLayer("pr", {
                    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
                    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
                    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    tooltip: "Prestige", // Row the layer is in on the tree (0 is the first row)
    color: "#31aeb0",
    update(delta) {
    },
    clickables: {
    },
    upgrades: {
    },
    buyables: {
        11: {
            cost(x) { return new Decimal(1.5).pow(x || getBuyableAmount(this.layer, this.id)).mul(4) },
            effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.01).add(1) },
            unlocked() { return true },
            canAfford() { return player.m.points.gte(this.cost()) },
            title() {
                return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Score Amplifier"
            },
            tooltip() {
                return "<h5>Prestige points. The crudest form of prestige. Holds the entire tree together."
            },
            display() {
                return "which are multiplying score by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                    Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Incremental Power"
            },
            buy() {
                let base = new Decimal(4)
                let growth = 1.5
                let max = Decimal.affordGeometricSeries(player.m.points, base, growth, getBuyableAmount(this.layer, this.id))
                let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
                player.m.points = player.m.points.sub(cost)
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
        jacorblog3: {
            unlocked() { return true },
            title: "Log III",
            body() { return "Log III: The first battle has been deadly. 80% of our soldiers died. The king of the void suggests we bring back the ???? ?? ???????????, but ???????? confirmed that they are gone. I believe him. I barely remember the last time I saw them. Aarex wants to begin working soon. I need to prepare." },         
        }, 
    },
    microtabs: {
        stuff: {
            "Main": {
                buttonStyle() { return { 'color': '#31aeb0' } },
                unlocked() { return player.prestigelayer.eq(1) },
                content:

                    [
                           ["blank", "25px"],
                           ["raw-html", function () { return '<h3>"In incremental games, prestige resets are when you reset the game for a benefit.<br> This can relate very well to real life. When you move to a new town, get a new job, graduating high school. <br>Life will always be full of prestige resets. Make sure to do them." -Anonymous' }, { "color": "#31aeb0", "font-size": "18px", "font-family": "monospace" }],
                           ["blank", "50px"],
                           ["raw-html", function () { return "Jacorb and Aarex were two of the four great nobles of incremental powers." }, { "color": "#31aeb0", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return "Their contributions were great. Without them, things would never be the same." }, { "color": "#31aeb0", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return "The prestige tree: One of their creations. A creation of great power." }, { "color": "#31aeb0", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return "The high god of the death realm seeks after this greatly." }, { "color": "#31aeb0", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return "However, we must start from the beginning." }, { "color": "#31aeb0", "font-size": "18px", "font-family": "monospace" }],
                           ["blank", "25px"],
            ["raw-html", function () { return "<h2>You have " + format(player.m.points) + " incremental power." }, { "color": "#31aeb0", "font-size": "18px", "font-family": "monospace" }],
            ["row", [["buyable", 11]]],
                           ["blank", "25px"],
                           ["infobox", "jacorblog3"],
        ]

            },
        },

    },

    tabFormat: [
            ["microtabs", "stuff", { 'border-width': '0px' }],
    ],
    layerShown() { return player.prestigelayer.eq(1) }
})
addLayer("bo", {
    name: "booster", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "B", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
tooltip: "Booster", // Row the layer is in on the tree (0 is the first row)
branches: ["pr"],
color: "#6e64c4",
update(delta) {
    if (player.boosterscene.eq(20)) {
        player.boostercutscene = new Decimal(0)
    }
},
clickables: {
    11: {
        title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.boostercutscene.eq(1) },
        unlocked() { return player.boosterscene.neq(20) },
        onClick() {
            player.boosterscene = player.boosterscene.add(1)
        },
    },
    12: {
        title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.boostercutscene.eq(1) },
        unlocked() { return player.boosterscene.neq(20) && player.boosterscene.neq(0) },
        onClick() {
            player.boosterscene = player.boosterscene.sub(1)
        },
    },
},
upgrades: {
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
    jacorblog6: {
        unlocked() { return true },
        title: "Log VI",
        body() { return "Log VI: Hevipelle came up with an idea. He wants to use his own powers to create beings called celestials. He gave us a demonstration. He said that celestials are like artificial gods that wield certain types of powers. They are not immortal, but certainly not weak. He said that the power of the ??????????? ?????? is similar to the power from celestials. We'll see what he can do." },         
    }, 
},
microtabs: {
stuff: {
"Main": {
buttonStyle() { return { 'color': '#6e64c4' } },
unlocked() { return player.boosterlayer.eq(1) },
content:

    [
           ["raw-html", function () { return player.boosterscene.eq(0) ? "<h1>Hello." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boosterscene.eq(1) ? "<h1>My name is Jacorb." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boosterscene.eq(2) ? "<h1>You have definitely heard of me." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boosterscene.eq(3) ? "<h1>I am the MAGE OF AUTOMATION." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boosterscene.eq(4) ? "<h1>Like Yhvr and Aarex, I am in exile." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boosterscene.eq(5) ? "<h1>You must free us all." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boosterscene.eq(6) ? "<h1>We will guide you so you can gain your godhood." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boosterscene.eq(7) ? "<h1>I once knew six amazing powerful beings." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boosterscene.eq(8) ? "<h1>THE GODS OF INCREMENTAL." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boosterscene.eq(9) ? "<h1>They were the very first beings who used incremental powers." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boosterscene.eq(10) ? "<h1>However, they mysteriously vanished one day." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boosterscene.eq(11) ? "<h1>You know, your predecessor helped me out a lot." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boosterscene.eq(12) ? "<h1>They already did some of the steps to freeing me and Aarex." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boosterscene.eq(13) ? "<h1>But now, there's a new task. To pay the bail the high god of the death realm set out." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boosterscene.eq(14) ? "<h1>After finding all 28 layers, you can TRAVEL TO THE DEATH REALM." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boosterscene.eq(15) ? "<h1>Only until then you can free me." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boosterscene.eq(16) ? "<h1>On the next layer, you should be able to talk to Aarex," : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boosterscene.eq(17) ? "<h1>But for some reason, he doesn't want to talk." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boosterscene.eq(18) ? "<h1>I got no clue what happened." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boosterscene.eq(19) ? "<h1>Well, I must go now. See you soon." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
           ["blank", "25px"],
           ["row", [["clickable", 12], ["clickable", 11]]],
           ["raw-html", function () { return player.boostercutscene.eq(0) ? "After Hevipelle, the void and the backrooms were searching for more nobles." : ""}, { "color": "#6e64c4", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boostercutscene.eq(0) ? "They found Jacorb. The apprentice of the six high gods of incremental powers." : ""}, { "color": "#6e64c4", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boostercutscene.eq(0) ? "Hevipelle and Jacorb became good allies. However, they needed more nobles." : ""}, { "color": "#6e64c4", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boostercutscene.eq(0) ? "That's when Hevipelle told the realms about Aarex, who created many things, like NG+3." : ""}, { "color": "#6e64c4", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boostercutscene.eq(0) ? "Aarex and Jacorb would meet and soon become best friends..." : ""}, { "color": "#6e64c4", "font-size": "18px", "font-family": "monospace" }],
           ["blank", "25px"],
           ["raw-html", function () { return player.boosterlayer.eq(1) ? "<h3>Incremental Power: " + format(player.m.points) + " -> x" + format(player.m.scorefromincrementalpower) : "" }, { "color": "#6e64c4", "font-size": "18px", "font-family": "monospace" }],
           ["blank", "25px"],
           ["infobox", "jacorblog6"],
        ]

},
},

},

tabFormat: [
["microtabs", "stuff", { 'border-width': '0px' }],
],
layerShown() { return player.boosterlayer.eq(1) }
})
addLayer("ge", {
    name: "generator", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "G", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
tooltip: "Generator", // Row the layer is in on the tree (0 is the first row)
color: "#a3d9a5",
branches: ["pr"],
update(delta) {
},
clickables: {
},
upgrades: {
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
    jacorblog5: {
        unlocked() { return true },
        title: "Log V",
        body() { return "Log V: More battles kept on raging. We are losing hard. However, me and Aarex's work is going well. Hevipelle thinks that I should join fighting, but it's too risky. Losing a noble can be very catastrophic. I still don't know how this war is going to end, but we are going to need ????????'s help for sure." },         
    }, 
},
microtabs: {
stuff: {
"Main": {
buttonStyle() { return { 'color': '#a3d9a5' } },
unlocked() { return player.generatorlayer.eq(1) },
content:

    [
           ["blank", "25px"],
           ["raw-html", function () { return player.boostercutscene.eq(0) ? "When Aarex and Jacorb met, they instantly got along." : ""}, { "color": "#a3d9a5", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boostercutscene.eq(0) ? "Jacorb helped Aarex with NG+3 by adding condensers." : ""}, { "color": "#a3d9a5", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boostercutscene.eq(0) ? "Jacorb showed Aarex to the high gods, who respected Aarex." : ""}, { "color": "#a3d9a5", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boostercutscene.eq(0) ? "They trained together and grew very powerful." : ""}, { "color": "#a3d9a5", "font-size": "18px", "font-family": "monospace" }],
           ["raw-html", function () { return player.boostercutscene.eq(0) ? "It seemed like everything was going great." : ""}, { "color": "#a3d9a5", "font-size": "18px", "font-family": "monospace" }],
           ["blank", "25px"],
           ["raw-html", function () { return player.generatorlayer.eq(1) ? "<h3>Incremental Energy: " + format(player.m.incrementalenergy) + " -> x" + format(player.m.scorefromincrementalenergy) : "" }, { "color": "#a3d9a5", "font-size": "18px", "font-family": "monospace" }],
           ["blank", "25px"],
           ["infobox", "jacorblog5"],
        ]

},
},

},

tabFormat: [
["microtabs", "stuff", { 'border-width': '0px' }],
],
layerShown() { return player.generatorlayer.eq(1) }
})
addLayer("en", {
    name: "enhance", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "E", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
tooltip: "Enhance", // Row the layer is in on the tree (0 is the first row)
color: "#b82fbd",
branches: ["bo", "ge"],
update(delta) {
},
clickables: {
    11: {
        title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.enhancecutscene.eq(1) },
        unlocked() { return player.enhancescene.neq(24) },
        onClick() {
            player.enhancescene = player.enhancescene.add(1)
        },
    },
    12: {
        title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.enhancecutscene.eq(1) },
        unlocked() { return player.enhancescene.neq(24) && player.enhancescene.neq(0) },
        onClick() {
            player.enhancescene = player.enhancescene.sub(1)
        },
    },
},
upgrades: {
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
    jacorblog11: {
        unlocked() { return true },
        title: "Log XI",
        body() { return "Log XI: We have started work on the fourth row, and decided to add some challenges to it. Quirk energy, time energy, space energy, there's always got to be an energy to it. It's like one of my older projects, Incremenergy. It seems I've got a lot of inspiration from my own work. The recent battles have been pretty neutral. Once we start using ??????????, I think we'd start winning." },         
    }, 
},
microtabs: {
stuff: {
"Main": {
buttonStyle() { return { 'color': '#b82fbd' } },
unlocked() { return player.generatorlayer.eq(1) },
content:

    [
        ["raw-html", function () { return player.enhancescene.eq(0) ? "<h1>I'm back." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(1) ? "<h1>Ah yes, the power of enhance. It made everything faster." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(2) ? "<h1>I remember working on the prestige tree being one of the best moments of my existence." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(3) ? "<h1>There was hope. I thought we were going to win the war." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(4) ? "<h1>Until IT came and destroyed the tree." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(5) ? "<h1>All 28 layers- scattered and lost.<h6>(celeste ost reference)" : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(6) ? "<h1>Once you put the layers back together, it will be great." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(7) ? "<h1>I'll finally know the true power of the tree." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(8) ? "<h1>Me and Aarex worked hard, and I want our work to finally pay off." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(9) ? "<h1>He was one of my best friends. I wonder how he's doing." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(10) ? "<h1>Last time I heard about his well-being was during your predecessor's time." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(11) ? "<h1>And the last time I spoke to him was before we got captured." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(12) ? "<h1>Things between me and him haven't been so well since the day we got captured." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(13) ? "<h1>The death realm haven't been letting us communicate with each other." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(14) ? "<h1>Yes, I've got small messages from Yhvr, but nothing from Aarex." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(15) ? "<h1>And Hevipelle? That guy still exists? Why hasn't he tried saving us?" : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(16) ? "<h1>He's the most powerful one of us all, yet he hasn't done anything yet." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(17) ? "<h1>But you are here; you will give us hope." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(18) ? "<h1>Once we are freed, we will show the death realm who they truly are!" : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(19) ? "<h1>Then the multiverse will be back in one piece!" : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(20) ? "<h1>But remember. You are destined to do this." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(21) ? "<h1>If you want to back out, it will lead to certain death." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(22) ? "<h1>After this is all over, you will become KING OF THE MULTIVERSE." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(23) ? "<h1>You are doing great. Bye." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["blank", "25px"],
        ["row", [["clickable", 12], ["clickable", 11]]],
           ["blank", "25px"],
           ["infobox", "jacorblog11"],
           ["blank", "25px"],
           ["raw-html", function () { return player.enhancelayer.eq(1) ? "<h3>Time spent in meta-prestige: " + formatTime(player.i.metaprestigetime) + " -> x" + format(player.m.scorefrommetaprestigetime) : "" }, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
           ["blank", "25px"],
           ["raw-html", function () { return player.enhancelayer.eq(1) ? "<h2>UNLOCKED ENHANCE PATH" : "" }, { "color": "#b82fbd", "font-size": "48px", "font-family": "monospace" }],
           ["raw-html", function () { return player.enhancelayer.eq(1) ? "<h3>Do an meta-prestige reset and there will be some changes." : "" }, { "color": "#b82fbd", "font-size": "24px", "font-family": "monospace" }],
        ]

},
},

},

tabFormat: [
["microtabs", "stuff", { 'border-width': '0px' }],
],
layerShown() { return player.enhancelayer.eq(1) }
})