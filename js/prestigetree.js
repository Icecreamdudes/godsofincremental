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
        player.injacorbcutscene = new Decimal(0)
    }
    if (player.boosterscene.gt(0) && player.boostercutscene.eq(1))
    {
        player.injacorbcutscene = new Decimal(1)
    }
},
clickables: {
    11: {
        title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.boostercutscene.eq(1) },
        unlocked() { return player.boosterscene.lte(20) },
        onClick() {
            player.boosterscene = player.boosterscene.add(1)
        },
    },
    12: {
        title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.boostercutscene.eq(1) },
        unlocked() { return player.boosterscene.lte(20) && player.boosterscene.neq(0) },
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
        unlocked() { return player.boostercutscene.eq(0) },
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
           ["raw-html", function () { return player.boosterlayer.eq(1) && player.boostercutscene.eq(0) ? "<h2>Incremental Power: " + format(player.m.points) + " -> x" + format(player.m.scorefromincrementalpower) : "" }, { "color": "#6e64c4", "font-size": "18px", "font-family": "monospace" }],
           ["blank", "25px"],
           ["infobox", "jacorblog6"],
        ]

},
},

},

tabFormat: [
["microtabs", "stuff", { 'border-width': '0px' }],
["raw-html", function () { return options.musicToggle && player.injacorbcutscene.eq(1) ? "<audio controls autoplay loop hidden><source src=music/jacorbcutscene.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
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
           ["raw-html", function () { return player.generatorlayer.eq(1) ? "<h2>Incremental Energy: " + format(player.m.incrementalenergy) + " -> x" + format(player.m.scorefromincrementalenergy) : "" }, { "color": "#a3d9a5", "font-size": "18px", "font-family": "monospace" }],
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
    if (player.enhancescene.eq(24)) {
        player.enhancecutscene = new Decimal(0)
        player.injacorbcutscene = new Decimal(0)
    }
    if (player.enhancescene.gt(0) && player.enhancecutscene.eq(1))
    {
        player.boosterscene = new Decimal(21)
        player.injacorbcutscene = new Decimal(1)
    }
    
},
clickables: {
    11: {
        title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.enhancecutscene.eq(1) },
        unlocked() { return player.enhancescene.lte(24) },
        onClick() {
            player.enhancescene = player.enhancescene.add(1)
        },
    },
    12: {
        title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.enhancecutscene.eq(1) },
        unlocked() { return player.enhancescene.lte(24) && player.enhancescene.neq(0) },
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
        unlocked() { return player.enhancecutscene.eq(0) },
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
           ["raw-html", function () { return player.enhancelayer.eq(1) && player.enhancecutscene.eq(0) ? "<h2>Time spent in meta-prestige: " + formatTime(player.i.metaprestigetime) + " -> x" + format(player.m.scorefrommetaprestigetime) : "" }, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
           ["blank", "25px"],
           ["raw-html", function () { return player.enhancelayer.eq(1) && player.enhancecutscene.eq(0) ? "<h2>UNLOCKED ENHANCE PATH" : "" }, { "color": "#b82fbd", "font-size": "48px", "font-family": "monospace" }],
           ["raw-html", function () { return player.enhancelayer.eq(1) && player.enhancecutscene.eq(0) ? "<h3>Do a meta-prestige reset and there will be some changes." : "" }, { "color": "#b82fbd", "font-size": "24px", "font-family": "monospace" }],
        ]

},
},

},

tabFormat: [
["microtabs", "stuff", { 'border-width': '0px' }],
["raw-html", function () { return options.musicToggle && player.injacorbcutscene.eq(1) ? "<audio controls autoplay loop hidden><source src=music/jacorbcutscene.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
],
layerShown() { return player.enhancelayer.eq(1) }
})
addLayer("ti", {
    name: "time", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "T", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
tooltip: "Time", // Row the layer is in on the tree (0 is the first row)
color: "#006609",
branches: ["bo"],
startData() { return {
    unlocked: true,
    timeenergy: new Decimal(0),
    timeenergyeffect: new Decimal(0),
    timeenergypersecond: new Decimal(0),
    timeenergycap: new Decimal(0),
}
},
update(delta) {
    if (player.timescene.eq(30)) {
        player.timecutscene = new Decimal(0)
        player.inaarexcutscene = new Decimal(0)
    }
    if (player.timescene.gt(0) && player.timecutscene.eq(1))
    {
        player.inaarexcutscene = new Decimal(1)
    }

    player.ti.timeenergy = player.ti.timeenergy.add(player.ti.timeenergypersecond.mul(delta))
    
    player.ti.timeenergycap = player.c.timecapsules.add(1).mul(40).pow(1.25)

    if (player.ti.timeenergy.lt(player.ti.timeenergycap)) player.ti.timeenergypersecond = player.c.timecapsules.pow(1.2)
    if (player.ti.timeenergy.gte(player.ti.timeenergycap)) 
    {
        player.ti.timeenergypersecond = new Decimal(0)
        player.ti.timeenergy = player.ti.timeenergycap
    }

    player.ti.timeenergyeffect = player.ti.timeenergy.plus(1).log10().pow(1.3).mul(0.3).add(1)
},
clickables: {
    11: {
        title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.timecutscene.eq(1) },
        unlocked() { return player.timescene.lte(30) },
        onClick() {
            player.timescene = player.timescene.add(1)
        },
    },
    12: {
        title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.timecutscene.eq(1) },
        unlocked() { return player.timescene.lte(30) && player.timescene.neq(0) },
        onClick() {
            player.timescene = player.timescene.sub(1)
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
    timeenergybar: {
        unlocked() { return player.timelayer.eq(1) && player.timecutscene.eq(0) },
        direction: RIGHT,
        width: 476,
        height: 50,
        progress() {
            return player.ti.timeenergy.div(player.ti.timeenergycap)
        },
        fillStyle: {
            "background-color": "#006609",
        },
        display() {
            return "<h5>" + format(player.ti.timeenergy) + "/" + format(player.ti.timeenergycap) + " time energy until capacity<h5></h5>";
        },
    },
},
infoboxes: {
    jacorblog15: {
        unlocked() { return player.timecutscene.eq(0) },
        title: "Log XV",
        body() { return "Log XV: I haven't met the celestials before, but from what I heard from Aarex, they are pretty nice, although ????? can be pretty ominous sometimes. Hevipelle plans on making dozens of more celestials at a time after he's finished with eight. We are starting to gain ???????'s trust, but I am still slightly suspicious. Remember: The death realm is ruthless." },         
    }, 
},
microtabs: {
stuff: {
"Main": {
buttonStyle() { return { 'color': '#006609' } },
unlocked() { return player.enhancelayer.eq(1) },
content:

    [
        ["raw-html", function () { return player.timescene.eq(1) ? "<h1>All failed. Barely made it to godhood." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(2) ? "<h1>Why? Why does this keep happening?" : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(3) ? "<h1>Torture. Pain. Humiliation. Every single day." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(4) ? "<h1>The death realm's punishments grow worse every time." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(5) ? "<h1>Despite being an immortal god, I can still feel pain." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(6) ? "<h1>You... You must be the next hero." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(7) ? "<h1>Finally, I have reached contact with you." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(8) ? "<h1>You probably know who I am. I am Aarex." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(9) ? "<h1>The omnisity, knight of upgrades, blah blah blah." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(10) ? "<h1>The death realm's use of time dilation on me has screwed me up bad..." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(11) ? "<h1>They made 10 seconds feel like 10 years." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(12) ? "<h1>You better find all of those layers. This torture must end." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(13) ? "<h1>You spoke to Jacorb and Yhvr, right?" : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(14) ? "<h1>Tell them I wish them the best." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(15) ? "<h1>And Jacorb, let him know that I am sorry for what I have done." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(16) ? "<h1>I scattered the layers in FEAR. I didn't know what I was doing." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(17) ? "<h1>The death realm, they threatened to destroy the tree." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(18) ? "<h1>It's either I gave them the tree, or them destroying it." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(19) ? "<h1>But I did neither." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(20) ? "<h1>If I gave them the tree, god knows what they could have done with it." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(21) ? "<h1>Jacorb got pissed. We spent the last year working on the tree." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(22) ? "<h1>We argued and argued, but time was ticking." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(23) ? "<h1>By the time we knew it, we got captured. Taken into exile." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(24) ? "<h1>It seemed like it was over, but your predecessor gave us hope." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(25) ? "<h1>I was so optimistic, until your predecessor randomly dissapeared." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(26) ? "<h1>But you are here! You will give us hope." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(27) ? "<h1>A lot of people are counting on you to save us, and the multiverse." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(28) ? "<h1>Despite all of our setbacks, we will come back stronger." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(29) ? "<h1>Go on. Find those layers!" : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["blank", "25px"],
        ["row", [["clickable", 12], ["clickable", 11]]],
        ["infobox", "jacorblog15"],
        ["blank", "25px"],
        ["raw-html", function () { return player.timelayer.eq(1) && player.timecutscene.eq(0) ? "<h4>Unlocked time capsules! Check crafting." : "" }, { "color": "#006609", "font-size": "24px", "font-family": "monospace" }],
        ["blank", "25px"],
        ["raw-html", function () { return player.timelayer.eq(1) && player.timecutscene.eq(0) ? "<h3>You have " + formatWhole(player.c.timecapsules) + " time capsules." : "" }, { "color": "#006609", "font-size": "24px", "font-family": "monospace" }],
        ["blank", "25px"],
        ["raw-html", function () { return player.timelayer.eq(1) && player.timecutscene.eq(0) ? "<h2>You have " + format(player.ti.timeenergy) + " time energy." : "" }, { "color": "#006609", "font-size": "24px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timelayer.eq(1) && player.timecutscene.eq(0) ? "<h3>You are gaining " + format(player.ti.timeenergypersecond) + " time energy per second." : "" }, { "color": "#006609", "font-size": "24px", "font-family": "monospace" }],
        ["blank", "25px"],
        ["bar", "timeenergybar"],
        ["blank", "25px"],
        ["raw-html", function () { return player.timelayer.eq(1) && player.timecutscene.eq(0) ? "<h3>Your time energy boost meta-prestige time by x" + format(player.ti.timeenergyeffect) + "." : "" }, { "color": "#006609", "font-size": "24px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timelayer.eq(1) && player.timecutscene.eq(0) ? "<h5>(Time energy resets on meta-prestige)" : "" }, { "color": "#006609", "font-size": "24px", "font-family": "monospace" }],
        ["blank", "25px"],
        ["raw-html", function () { return player.timelayer.eq(1) ? "<h3>Time capsules: " + formatWhole(player.c.timecapsules) + " -> x" + format(player.m.scorefromtimecapsules) : "" }, { "color": "#006609", "font-size": "24px", "font-family": "monospace" }],
    ]

},
},

},

tabFormat: [
["microtabs", "stuff", { 'border-width': '0px' }],
["raw-html", function () { return options.musicToggle && player.inaarexcutscene.eq(1) ? "<audio controls autoplay loop hidden><source src=music/aarexcutscene.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
],
layerShown() { return player.timelayer.eq(1) }
})
addLayer("sp", {
    name: "space", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "S", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
tooltip: "Space", // Row the layer is in on the tree (0 is the first row)
color: "#dfdfdf",
branches: ["ge"],
startData() { return {
    unlocked: true,
    space: new Decimal(0),
    spacestandardeffect: new Decimal(1),
    spaceenhancedeffect: new Decimal(1),
    spacepersecond: new Decimal(0),
}
},
update(delta) {
    if (player.spacescene.eq(17)) {
        player.spacecutscene = new Decimal(0)
    }

    player.sp.spacepersecond = player.c.spacebuildings.pow(1.5)
    player.sp.space = player.sp.space.add(player.sp.spacepersecond.mul(delta))

    if (player.i.standardpath.eq(0)) player.sp.spacestandardeffect = new Decimal(1)
    if (player.i.standardpath.eq(1)) player.sp.spacestandardeffect = player.sp.space.pow(0.6).add(1)
    if (player.i.enhancepath.eq(0)) player.sp.spaceenhancedeffect = new Decimal(1)
    if (player.i.enhancepath.eq(1)) player.sp.spaceenhancedeffect = player.sp.space.pow(0.35).add(1)
},
clickables: {
    11: {
        title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.spacecutscene.eq(1) },
        unlocked() { return player.spacescene.lte(17) },
        onClick() {
            player.spacescene = player.spacescene.add(1)
        },
    },
    12: {
        title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.spacecutscene.eq(1) },
        unlocked() { return player.spacescene.lte(17) && player.spacescene.neq(0) },
        onClick() {
            player.spacescene = player.spacescene.sub(1)
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
    jacorblog17: {
        unlocked() { return player.spacecutscene.eq(0) },
        title: "Log XVII",
        body() { return "Log XVII: Hevipelle has accidentally created one of the most powerful incremental machines ever. The ?????? ?????????. It's so powerful that it can ????? ????????. But ????? have been placed so that the ?????? ????????? doesn't break the whole spacetime continuum. It can only be used once, and once used, it will cause a lot of damage." },         
    },
},
microtabs: {
stuff: {
"Main": {
buttonStyle() { return { 'color': '#dfdfdf' } },
unlocked() { return player.spacelayer.eq(1) },
content:
    [
        ["raw-html", function () { return player.spacescene.eq(1) ? "<h1>You..." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(2) ? "<h1>You spoke to Aarex?" : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(3) ? "<h1>And..." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(4) ? "<h1>He said he was sorry?" : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(5) ? "<h1>For what he done all those days back?" : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(6) ? "<h1>Man. That's the first time we've heard of him in a long time." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(7) ? "<h1>Torture eh, it must end now!" : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(8) ? "<h1>But why him? Why not me? Or Yhvr?" : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(9) ? "<h1>Is it because of the tree incident?" : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(10) ? "<h1>You know, the prestige tree was never finished." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(11) ? "<h1>The prestige tree was meant to have an eighth row." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(12) ? "<h1>Two layers would be on this row." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(13) ? "<h1>Meta-Prestige and The Hub." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(14) ? "<h1>Meta-Prestige which is my creation," : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(15) ? "<h1>The Hub, which is Aarex's creation." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(16) ? "<h1>But v1.4 of the prestige tree never became..." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["blank", "25px"],
        ["row", [["clickable", 12], ["clickable", 11]]],
        ["raw-html", function () { return player.spacelayer.eq(1) && player.spacecutscene.eq(0) ? "<h4>Unlocked space buildings! Check crafting." : "" }, { "color": "#dfdfdf", "font-size": "24px", "font-family": "monospace" }],
        ["blank", "25px"],
        ["raw-html", function () { return player.spacelayer.eq(1) && player.spacecutscene.eq(0) ? "<h3>You have " + formatWhole(player.c.spacebuildings) + " space buildings." : "" }, { "color": "#dfdfdf", "font-size": "24px", "font-family": "monospace" }],
        ["blank", "25px"],
        ["raw-html", function () { return player.spacelayer.eq(1) && player.spacecutscene.eq(0) ? "<h2>You have " + format(player.sp.space) + " space." : "" }, { "color": "#dfdfdf", "font-size": "24px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacelayer.eq(1) && player.spacecutscene.eq(0) ? "<h3>You are gaining " + format(player.sp.spacepersecond) + " space per second." : "" }, { "color": "#dfdfdf", "font-size": "24px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacelayer.eq(1) && player.spacecutscene.eq(0) ? "<h5>(Space is reset on meta-prestige)" : "" }, { "color": "#dfdfdf", "font-size": "24px", "font-family": "monospace" }],
        ["blank", "25px"],
        ["raw-html", function () { return player.spacelayer.eq(1) && player.spacecutscene.eq(0) && player.i.standardpath.eq(0) && player.i.enhancepath.eq(0) ? "<h3>You must be aligned to a path for an effect." : "" }, { "color": "white", "font-size": "24px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacelayer.eq(1) && player.spacecutscene.eq(0) && player.i.standardpath.eq(1) ? "<h3>Space gives a x" + format(player.sp.spacestandardeffect) + " boost to prestige energy (standard path)." : "" }, { "color": "#ffffaa", "font-size": "24px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacelayer.eq(1) && player.spacecutscene.eq(0) && player.i.enhancepath.eq(1) ? "<h3>Space gives a x" + format(player.sp.spaceenhancedeffect) + " boost to prestige points (enhance path)." : "" }, { "color": "b82fbd", "font-size": "24px", "font-family": "monospace" }],
        ["blank", "25px"],
                           ["raw-html", function () { return player.spacelayer.eq(1) ? "<h3>Space buildings: " + formatWhole(player.c.spacebuildings) + " -> x" + format(player.m.scorefromspacebuildings) : "" }, { "color": "#dfdfdf", "font-size": "18px", "font-family": "monospace" }],
        ["blank", "25px"],
        ["infobox", "jacorblog17"],
    ]

},
},

},

tabFormat: [
["microtabs", "stuff", { 'border-width': '0px' }],
["raw-html", function () { return options.musicToggle && player.spacecutscene.eq(1) ? "<audio controls autoplay loop hidden><source src=music/jacorbcutscene.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
],
layerShown() { return player.spacelayer.eq(1) }
})