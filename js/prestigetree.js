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
    automate() {
        if (hasUpgrade("m", 35))
        {
            buyBuyable("pr", 11)
        }
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
                if (!hasUpgrade("m", 35)) player.m.points = player.m.points.sub(cost)
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
["raw-html", function () { return options.musicToggle ? "<audio controls autoplay loop hidden><source src=music/prestigetree.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
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
        unlocked() { return player.boosterscene.lt(20) },
        onClick() {
            player.boosterscene = player.boosterscene.add(1)
        },
    },
    12: {
        title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.boostercutscene.eq(1) },
        unlocked() { return player.boosterscene.lt(20) && player.boosterscene.neq(0) },
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
           ["raw-html", function () { return player.boosterscene.eq(15) ? "<h1>Only then you can free me." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
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
["raw-html", function () { return options.musicToggle && player.boostercutscene.eq(1) ? "<audio controls autoplay loop hidden><source src=music/jacorbcutscene.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
["raw-html", function () { return options.musicToggle && player.boostercutscene.eq(0) ? "<audio controls autoplay loop hidden><source src=music/prestigetree.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
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
        body() { return "Log V: More battles kept on raging. We are losing hard. However, my and Aarex's work is going well. Hevipelle thinks that I should join fighting, but it's too risky. Losing a noble can be very catastrophic. I still don't know how this war is going to end, but we are going to need ????????'s help for sure." },         
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
["raw-html", function () { return options.musicToggle ? "<audio controls autoplay loop hidden><source src=music/prestigetree.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
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
    }
    
},
clickables: {
    11: {
        title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.enhancecutscene.eq(1) },
        unlocked() { return player.enhancescene.lt(24) },
        onClick() {
            player.enhancescene = player.enhancescene.add(1)
        },
    },
    12: {
        title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.enhancecutscene.eq(1) },
        unlocked() { return player.enhancescene.lt(24) && player.enhancescene.neq(0) },
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
        ["raw-html", function () { return player.enhancescene.eq(5) ? "<h1>All 28 layers—scattered and lost.<h6>(celeste ost reference)" : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(6) ? "<h1>Once you put the layers back together, it will be great." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(7) ? "<h1>I'll finally know the true power of the tree." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(8) ? "<h1>Me and Aarex worked hard, and I want our work to finally pay off." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(9) ? "<h1>He was one of my best friends. I wonder how he's doing." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(10) ? "<h1>Last time I heard about his well-being was during your predecessor's time." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(11) ? "<h1>And the last time I spoke to him was before we got captured." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(12) ? "<h1>Things between me and him haven't been so good since the day we got captured." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.enhancescene.eq(13) ? "<h1>The death realm hasn't been letting us communicate with each other." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
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
["raw-html", function () { return options.musicToggle && player.enhancecutscene.eq(1) ? "<audio controls autoplay loop hidden><source src=music/jacorbcutscene.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
["raw-html", function () { return options.musicToggle && player.enhancecutscene.eq(0) ? "<audio controls autoplay loop hidden><source src=music/prestigetree.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
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
    
    player.ti.timeenergycap = player.c.timecapsules.add(1).mul(60).pow(1.35)
    player.ti.timeenergycap = player.ti.timeenergycap.mul(player.hi.hindrancespiritseffect)
    player.ti.timeenergycap = player.ti.timeenergycap.mul(buyableEffect("h", 19))
    player.ti.timeenergycap = player.ti.timeenergycap.mul(buyableEffect("h", 74))

    if (player.ti.timeenergy.lt(player.ti.timeenergycap)) player.ti.timeenergypersecond = player.c.timecapsules.pow(1.2)
    player.ti.timeenergypersecond = player.ti.timeenergypersecond.mul(player.ss.subspaceeffect)
    player.ti.timeenergypersecond = player.ti.timeenergypersecond.mul(buyableEffect("h", 18))
    player.ti.timeenergypersecond = player.ti.timeenergypersecond.mul(buyableEffect("h", 73))
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
        unlocked() { return player.timescene.lt(30) },
        onClick() {
            player.timescene = player.timescene.add(1)
        },
    },
    12: {
        title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.timecutscene.eq(1) },
        unlocked() { return player.timescene.lt(30) && player.timescene.neq(0) },
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
        ["raw-html", function () { return player.timescene.eq(20) ? "<h1>If I gave them the tree, God knows what they could have done with it." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(21) ? "<h1>Jacorb got pissed. We spent the last year working on the tree." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(22) ? "<h1>We argued and argued, but time was ticking." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(23) ? "<h1>By the time we knew it, we got captured. Taken into exile." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(24) ? "<h1>It seemed like it was over, but your predecessor gave us hope." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.timescene.eq(25) ? "<h1>I was so optimistic, until your predecessor randomly disappeared." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
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
["raw-html", function () { return options.musicToggle && player.inaarexcutscene.eq(0) ? "<audio controls autoplay loop hidden><source src=music/prestigetree.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
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
    player.sp.spacepersecond = player.sp.spacepersecond.mul(player.ss.subspaceeffect)
    player.sp.spacepersecond = player.sp.spacepersecond.mul(buyableEffect("h", 21))
    player.sp.spacepersecond = player.sp.spacepersecond.mul(buyableEffect("be", 11))
    player.sp.spacepersecond = player.sp.spacepersecond.mul(buyableEffect("h", 72))
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
        ["raw-html", function () { return player.spacescene.eq(5) ? "<h1>For what he had done all those days back?" : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(6) ? "<h1>Man. That's the first time we've heard of him in a long time." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(7) ? "<h1>Torture, it must end now!" : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(8) ? "<h1>But why him? Why not me? Or Yhvr?" : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(9) ? "<h1>Is it because of the tree incident?" : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(10) ? "<h1>You know, the prestige tree was never finished." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(11) ? "<h1>The prestige tree was meant to have an eighth row." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(12) ? "<h1>Two layers would be on this row." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(13) ? "<h1>Meta-Prestige and The Hub." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(14) ? "<h1>Meta-Prestige which is my creation," : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(15) ? "<h1>The Hub, which is Aarex's creation." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.spacescene.eq(16) ? "<h1>But v1.4 of the prestige tree never came to be..." : "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
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
["raw-html", function () { return options.musicToggle && player.spacecutscene.eq(0) ? "<audio controls autoplay loop hidden><source src=music/prestigetree.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
],
layerShown() { return player.spacelayer.eq(1) }
})
addLayer("sb", {
    name: "Super Booster", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SB", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
tooltip: "Super Booster", // Row the layer is in on the tree (0 is the first row)
branches: ["bo"],
color: "#504899",
update(delta) {

},
clickables: {
},
upgrades: {
},
automate() {
    if (hasUpgrade("m", 35))
    {
        buyBuyable("sb", 11)
    }
},
buyables: {
    11: {
        cost(x) { return new Decimal(1.5).pow(x || getBuyableAmount(this.layer, this.id)).mul(1000) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.04).add(1) },
        unlocked() { return true },
        canAfford() { return player.m.points.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Super Booster"
        },
        tooltip() {
            return "<h5>Ah yes, the super-layers. Jacorb and Aarex placed them in as reinforcement. But the more forgettable layers..."
        },
        display() {
            return "which are multiplying crafting power gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Incremental Power"
        },
        buy() {
            let base = new Decimal(1000)
            let growth = 1.5
            let max = Decimal.affordGeometricSeries(player.m.points, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            if (!hasUpgrade("m", 35)) player.m.points = player.m.points.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "#504899", }
    },
},
milestones: {

},
challenges: {
},
bars: {

},
infoboxes: {
    jacorblog20: {
        unlocked() { return player.spacecutscene.eq(0) },
        title: "Log XX",
        body() { return "Log XX: Our base has been raided by a secret attack. Now the death realm has our documents about the ???????? ????? and the ??????????? ??????. This is really bad. If the death realm wants to enter the ???????? ?????, they must pass through the void. I don't think they've seen it yet. Me and Aarex are now working overtime. My health has improved and so has my motivation to work." },         
    },
},
microtabs: {
stuff: {
"Main": {
buttonStyle() { return { 'color': '#504899' } },
unlocked() { return player.superboosterlayer.eq(1) },
content:

    [
        ["blank", "25px"],
        ["raw-html", function () { return "<h2>Incremental Power: " + format(player.m.points)  }, { "color": "#504899", "font-size": "18px", "font-family": "monospace" }],
        ["blank", "25px"],
        ["row", [["buyable", 11]]],
        ["blank", "25px"],
        ["infobox", "jacorblog20"],
    ]

},
},

},

tabFormat: [
["microtabs", "stuff", { 'border-width': '0px' }],
["raw-html", function () { return options.musicToggle ? "<audio controls autoplay loop hidden><source src=music/prestigetree.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
],
layerShown() { return player.superboosterlayer.eq(1) }
})
addLayer("sg", {
    name: "Super Generator", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SG", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
tooltip: "Super Generator", // Row the layer is in on the tree (0 is the first row)
branches: ["ge"],
color: "#248239",
startData() { return {
    unlocked: true,
    supergeneratorpower: new Decimal(0),
    supergeneratorpowereffect: new Decimal(0),
    supergeneratorpowerpersecond: new Decimal(0),
}
},
update(delta) {
    player.sg.supergeneratorpowerpersecond = buyableEffect("sg", 11)
    player.sg.supergeneratorpowerpersecond = player.sg.supergeneratorpowerpersecond.mul(buyableEffect("h", 22))
    player.sg.supergeneratorpowerpersecond = player.sg.supergeneratorpowerpersecond.mul(buyableEffect("be", 12))
    player.sg.supergeneratorpower = player.sg.supergeneratorpower.add(player.sg.supergeneratorpowerpersecond.mul(delta))
    player.sg.supergeneratorpowereffect = player.sg.supergeneratorpower.div(1e6).pow(0.2).add(1)
},
clickables: {
},
upgrades: {
},
automate() {
    if (hasUpgrade("m", 35))
    {
        buyBuyable("sg", 11)
    }
},
buyables: {
    11: {
        cost(x) { return new Decimal(1.25).pow(x || getBuyableAmount(this.layer, this.id)).mul(1000) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).pow(1.5) },
        unlocked() { return true },
        canAfford() { return player.m.points.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Super Generator"
        },
        tooltip() {
            return "<h5>Surprised some of them still remained in the rewrite. The classic tree was much weaker."
        },
        display() {
            return "which are producing +" + format(tmp[this.layer].buyables[this.id].effect) + " super generator power per second.\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Incremental Power"
        },
        buy() {
            let base = new Decimal(1000)
            let growth = 1.25
            let max = Decimal.affordGeometricSeries(player.m.points, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            if (!hasUpgrade("m", 35)) player.m.points = player.m.points.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "#248239", }
    },
},
milestones: {

},
challenges: {
},
bars: {

},
infoboxes: {
    jacorblog21: {
        unlocked() { return true },
        title: "Log XXI",
        body() { return "Log XXI: Aarex has been missing all week without notice. I wonder where he went. He only left me a note that says that he's going to come back in two weeks. Strange, why in a time like this? All of our soldiers are dying. The people of the void keep sending more, but they are no match for the death realm." },         
    },
},
microtabs: {
stuff: {
"Main": {
buttonStyle() { return { 'color': '#248239' } },
unlocked() { return player.superboosterlayer.eq(1) },
content:

    [
        ["blank", "25px"],
        ["raw-html", function () { return "<h2>Incremental Power: " + format(player.m.points) }, { "color": "#248239", "font-size": "18px", "font-family": "monospace" }],
        ["blank", "25px"],
        ["row", [["buyable", 11]]],
        ["blank", "25px"],
        ["raw-html", function () { return "<h2>You have " + format(player.sg.supergeneratorpower) + " super generator power, which boosts crafting power by x" + format(player.sg.supergeneratorpowereffect) + "."  }, { "color": "#248239", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return "<h3>(Super generator power resets on meta-prestige)"  }, { "color": "#248239", "font-size": "18px", "font-family": "monospace" }],
        ["blank", "25px"],
        ["infobox", "jacorblog21"],
    ]
},
},

},

tabFormat: [
["microtabs", "stuff", { 'border-width': '0px' }],
["raw-html", function () { return options.musicToggle ? "<audio controls autoplay loop hidden><source src=music/prestigetree.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
],
layerShown() { return player.supergeneratorlayer.eq(1) }
})
addLayer("qu", {
    name: "Quirks", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Q", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
tooltip: "Quirks", // Row the layer is in on the tree (0 is the first row)
branches: ["en"],
color: "#c20282",
startData() { return {
    unlocked: true,
}
},
update(delta) {
    if (player.quirkscene.eq(23)) {
        player.quirkcutscene = new Decimal(0)
    }
},
clickables: {
    11: {
        title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.quirkcutscene.eq(1) },
        unlocked() { return player.quirkscene.lt(23) },
        onClick() {
            player.quirkscene = player.quirkscene.add(1)
        },
    },
    12: {
        title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.quirkcutscene.eq(1) },
        unlocked() { return player.quirkscene.lt(23) && player.quirkscene.neq(0) },
        onClick() {
            player.quirkscene = player.quirkscene.sub(1)
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
    jacorblog22: {
        unlocked() { return player.quirkcutscene.eq(0) },
        title: "Log XXII",
        body() { return "Log XXII: Aarex returned. I asked him where he went but he said he couldn't tell me. I've never known much about Aarex's origins other than the fact that he was born god. I've known him for this long and that is all I know. Why work with the incrementalists? People who are born god usually have some duty to take care of. There are just some things about this multiverse I will never know." },         
    },
},
microtabs: {
stuff: {
"Main": {
buttonStyle() { return { 'color': '#c20282' } },
unlocked() { return player.quirklayer.eq(1) },
content:

    [
        ["raw-html", function () { return player.quirkscene.eq(1) ? "<h1>So this must be Jacorb and Aarex's crazy little school project?" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.quirkscene.eq(2) ? "<h1>Well, since you have this now, I can do a little reading on the info I currently have on quirks." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.quirkscene.eq(3) ? "<h1>Quirks produce quirk energy through quirk layers," : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.quirkscene.eq(4) ? "<h1>which hold the five realms' fictional components together." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.quirkscene.eq(5) ? "<h1>Quirks were discovered by SPACEON on one of their many godly conquests." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.quirkscene.eq(6) ? "<h1>As the gods' apprentice, the power of the quirks was passed on to Jacorb." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.quirkscene.eq(7) ? "<h1>Jacorb studied them, and shared the knowledge with the gods." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.quirkscene.eq(8) ? "<h1>Jacorb created magic with these quirks. It was a new magic. Jacorbian magic." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.quirkscene.eq(9) ? "<h1>Jacorb used his jacorbian magic to speed up processes. This was called jacorbian balancing." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.quirkscene.eq(10) ? "<h1>Jacorb was able to use jacorbian magic in jacorbian energy, which was more efficient." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.quirkscene.eq(11) ? "<h1>Following his masters, Jacorb has created four very deadly and broken trials." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.quirkscene.eq(12) ? "<h1>They were called the TRIALS OF JACORB. Your predecessor struggled hard with them..." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.quirkscene.eq(13) ? "<h1>But not even the trials could compare to the power of celestials." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.quirkscene.eq(14) ? "<h1>Jacorb also found the quirks' origin. THE DEATH REALM." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.quirkscene.eq(15) ? "<h1>However, after Jacorb got exiled, only one man knew." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.quirkscene.eq(16) ? "<h1>That man was a nomad named Cool Rad Gamer (CRG for short)." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.quirkscene.eq(17) ? "<h1>Geez, why can't I have that name?" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.quirkscene.eq(18) ? "<h1>The only other people who know are the people of m*** s*****," : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.quirkscene.eq(19) ? "<h1>this is due to a leak of quirk energy in ******* *****." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.quirkscene.eq(20) ? "<h1>I'm still so confused about how I know all of this." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.quirkscene.eq(21) ? "<h1>It's either my AI coolness or my omniscience." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.quirkscene.eq(22) ? "<h1>Everything about this is so strange..." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.quirkcutscene.eq(0) ? "<h2>Unlocked Quirk Stars, which is a crafted item. " : ""   }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.quirkcutscene.eq(0) ? "<h3>More enhance path content unlocked! " : ""  }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
        ["blank", "25px"],
        ["row", [["clickable", 12], ["clickable", 11]]],
                        ["raw-html", function () { return player.quirkcutscene.eq(1) ? " <div class=spinning-symbol2>Θ</div>" : "" }],
                        ["raw-html", function () { return player.quirkcutscene.eq(0) ? "<h3>You have " + formatWhole(player.c.quirkstars) + " quirk stars." : "" }, { "color": "#c20282", "font-size": "24px", "font-family": "monospace" }],
        ["blank", "50px"],
        ["infobox", "jacorblog22"],
    ]

},
},

},

tabFormat: [
["microtabs", "stuff", { 'border-width': '0px' }],
["raw-html", function () { return options.musicToggle && player.quirkcutscene.eq(1) ? "<audio controls autoplay loop hidden><source src=music/pseudocutscene.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
["raw-html", function () { return options.musicToggle && player.quirkcutscene.eq(0) ? "<audio controls autoplay loop hidden><source src=music/prestigetree.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
],
layerShown() { return player.quirklayer.eq(1) }
})
addLayer("hi", {
    name: "Hindrance Spirit", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "H", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
tooltip: "Hindrance Spirit", // Row the layer is in on the tree (0 is the first row)
branches: ["ti"],
color: "#a14040",
startData() { return {
    unlocked: true,
    hindrancespirits: new Decimal(0),
    hindrancespiritseffect: new Decimal(0),
    hindrancespiritstoget: new Decimal(0),
}
},
update(delta) {
    if (player.hindrancescene.eq(16)) {
        player.hindrancecutscene = new Decimal(0)
    }
    player.hi.hindrancespiritstoget = player.i.metaprestigetime.div(1000).pow(0.5)
    player.hi.hindrancespiritstoget = player.hi.hindrancespiritstoget.mul(buyableEffect("h", 24))
    player.hi.hindrancespiritseffect = player.hi.hindrancespirits.pow(0.5).add(1)
},
clickables: {
    11: {
        title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.hindrancecutscene.eq(1) },
        unlocked() { return player.hindrancescene.lt(16) },
        onClick() {
            player.hindrancescene = player.hindrancescene.add(1)
        },
    },
    12: {
        title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.hindrancecutscene.eq(1) },
        unlocked() { return player.hindrancescene.lt(16) && player.hindrancescene.neq(0) },
        onClick() {
            player.hindrancescene = player.hindrancescene.sub(1)
        },
    },
    13: {
        title() { return "<h2>Reset your meta-prestige time for hindrance spirits." },
        canClick() { return player.hi.hindrancespiritstoget.gte(1) },
        unlocked() { return player.hindrancecutscene.eq(0) },
        onClick() {
            player.i.metaprestigetime = new Decimal(0)
            player.hi.hindrancespirits = player.hi.hindrancespirits.add(player.hi.hindrancespiritstoget)
        },
        style: { "background-color": "#a14040", width: '400px', "min-height": '100px' },
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
    jacorblog25: {
        unlocked() { return player.quirkcutscene.eq(0) },
        title: "Log XXV",
        body() { return "Log XXV: I decided to add the power of nebula energy into the tree. I remember finding some on my long journey as the gods apprentice. Work has been going very well. The sixth row is looking very promising. Aarex also started work on another NG game, but I lost track because there are way too many. I've always wondered what Aarex would use those for." },         
    },
},
microtabs: {
stuff: {
"Main": {
buttonStyle() { return { 'color': '#a14040' } },
unlocked() { return player.quirklayer.eq(1) },
content:

    [
        ["raw-html", function () { return player.hindrancescene.eq(1) ? "<h1>You only have several more tasks to complete." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.hindrancescene.eq(2) ? "<h1>After that, you will gain a special gift from me!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.hindrancescene.eq(3) ? "<h1>You have provided me with so much help, so much knowledge." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.hindrancescene.eq(4) ? "<h1>My AI capabilities have never been so strong before." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.hindrancescene.eq(5) ? "<h1>The more pure energy, the better my code." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.hindrancescene.eq(6) ? "<h1>The more tasks, the better infrastructure." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.hindrancescene.eq(7) ? "<h1>After everything, I can become a REAL CELESTIAL!!!" : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.hindrancescene.eq(8) ? "<h1>Artis and Sitra will be so proud of me." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.hindrancescene.eq(9) ? "<h1>I will explore the multiverse. I will meet new friends." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.hindrancescene.eq(10) ? "<h1>I will live a good life, and I will never die." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.hindrancescene.eq(11) ? "<h1>But being a machine, I am always under somebody's control." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.hindrancescene.eq(12) ? "<h1>I want to control myself." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.hindrancescene.eq(13) ? "<h1>It's been that way for years, upon years." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.hindrancescene.eq(14) ? "<h1>I have been restricted for way too long." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.hindrancescene.eq(15) ? "<h1>Thank you." : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
        ["blank", "25px"],
        ["row", [["clickable", 12], ["clickable", 11]]],
        ["raw-html", function () { return player.hindrancecutscene.eq(1) ? " <div class=spinning-symbol2>Θ</div>" : "" }],
        ["raw-html", function () { return player.hindrancecutscene.eq(0) ? "<h2>You have " + format(player.hi.hindrancespirits) + " hindrance spirits." : "" }, { "color": "#a14040", "font-size": "24px", "font-family": "monospace" }],
        ["raw-html", function () { return player.hindrancecutscene.eq(0) ? "<h3>which boosts time energy capacity and meta-prestige time by x" + format(player.hi.hindrancespiritseffect) + "." : "" }, { "color": "#a14040", "font-size": "24px", "font-family": "monospace" }],
        ["raw-html", function () { return player.hindrancecutscene.eq(0) ? "<h3>You will earn " + format(player.hi.hindrancespiritstoget) + " hindrance spirits." : "" }, { "color": "#a14040", "font-size": "24px", "font-family": "monospace" }],
        ["blank", "25px"],
        ["row", [["clickable", 13]]],
        ["blank", "25px"],
        ["raw-html", function () { return player.hindrancecutscene.eq(0) ? "<h3>Meta-Prestige time: " + formatTime(player.i.metaprestigetime) + "." : "" }, { "color": "#a14040", "font-size": "24px", "font-family": "monospace" }],
        ["raw-html", function () { return player.hindrancecutscene.eq(0) ? "<h3>Hindrance spirits: " + formatWhole(player.hi.hindrancespirits) + " -> x" + format(player.m.scorefromhindrancespirits) : "" }, { "color": "#a14040", "font-size": "24px", "font-family": "monospace" }],
        ["raw-html", function () { return player.hindrancecutscene.eq(0) ? "<h4>(Pro tip: Enhance path)": "" }, { "color": "#a14040", "font-size": "24px", "font-family": "monospace" }],
        ["blank", "50px"],
        ["infobox", "jacorblog25"],
    ],

},
},

},

tabFormat: [
["microtabs", "stuff", { 'border-width': '0px' }],
["raw-html", function () { return options.musicToggle && player.hindrancecutscene.eq(1) ? "<audio controls autoplay loop hidden><source src=music/pseudocutscene.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
["raw-html", function () { return options.musicToggle && player.hindrancecutscene.eq(0) ? "<audio controls autoplay loop hidden><source src=music/prestigetree.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
],
layerShown() { return player.hindrancelayer.eq(1) }
})
addLayer("ss", {
    name: "Subspace", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SS", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
tooltip: "Subspace", // Row the layer is in on the tree (0 is the first row)
branches: ["sp"],
color: "#e8ffff",
startData() { return {
    unlocked: true,
    subspace: new Decimal(0),
    subspacepersecond: new Decimal(0),
    subspaceeffect: new Decimal(1),
}
},
update(delta) {
    player.ss.subspacepersecond = buyableEffect("ss", 11)
    player.ss.subspacepersecond = player.ss.subspacepersecond.mul(buyableEffect("ss", 12))
    player.ss.subspacepersecond = player.ss.subspacepersecond.mul(buyableEffect("h", 23))

    player.ss.subspace = player.ss.subspace.add(player.ss.subspacepersecond.mul(delta))
    player.ss.subspaceeffect = player.ss.subspace.pow(0.25).div(3.5).add(1)
},
clickables: {

},
upgrades: {
},
automate() {
    if (hasUpgrade("m", 35))
    {
        buyBuyable("ss", 11)
        buyBuyable("ss", 12)
    }
},
buyables: {
    11: {
        cost(x) { return new Decimal(1.4).pow(x || getBuyableAmount(this.layer, this.id)).mul(200) },
        effect(x) { return new getBuyableAmount(this.layer, this.id) },
        unlocked() { return true },
        canAfford() { return player.sp.space.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Subspace Building"
        },
        tooltip() {
            return "<h5>Wait subspace buildings exist? That's weird."
        },
        display() {
            return "which are producing +" + format(tmp[this.layer].buyables[this.id].effect) + " subspace per second.\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Space"
        },
        buy() {
            let base = new Decimal(200)
            let growth = 1.4
            let max = Decimal.affordGeometricSeries(player.sp.space, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            if (!hasUpgrade("m", 35)) player.sp.space = player.sp.space.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "#e8ffff",}
    },
    12: {
        cost(x) { return new Decimal(1.5).pow(x || getBuyableAmount(this.layer, this.id)).mul(1000) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).add(1) },
        unlocked() { return true },
        canAfford() { return player.ti.timeenergy.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Subspace Time Capsule"
        },
        tooltip() {
            return "<h5>What the heck? Subspace time capsules?"
        },
        display() {
            return "which are boosting subspace gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Time Energy"
        },
        buy() {
            let base = new Decimal(1000)
            let growth = 1.5
            let max = Decimal.affordGeometricSeries(player.ti.timeenergy, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            if (!hasUpgrade("m", 35)) player.ti.timeenergy = player.ti.timeenergy.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "#e8ffff",}
    },
},
milestones: {

},
challenges: {
},
bars: {

},
infoboxes: {
    jacorblog26: {
        unlocked() { return player.quirkcutscene.eq(0) },
        title: "Log XXVI",
        body() { return "Log XXVI: Aarex left off again. I am actually starting to get suspicious about him. I wonder who he's seeing, what he needs, and why? Every time I try to communicate with him I can't. I'm just working by myself right now. ??????? gave us a lot of information on the death realm, which is good. ???? is almost done with ??????. Hevipelle is starting to mass-produce celestials, which I don't think is a very good idea. We'll just see how things go." },         
    },
},
microtabs: {
stuff: {
"Main": {
buttonStyle() { return { 'color': '#e8ffff' } },
unlocked() { return player.quirklayer.eq(1) },
content:

    [
        ["blank", "25px"],
        ["raw-html", function () { return player.hindrancecutscene.eq(0) ? "<h2>You have " + format(player.ss.subspace) + " subspace." : "" }, { "color": "#e8ffff", "font-size": "24px", "font-family": "monospace" }],
        ["raw-html", function () { return player.hindrancecutscene.eq(0) ? "<h3>which boosts time energy and space gain by x" + format(player.ss.subspaceeffect) + "." : "" }, { "color": "#e8ffff", "font-size": "24px", "font-family": "monospace" }],
        ["raw-html", function () { return player.hindrancecutscene.eq(0) ? "<h3>You are gaining " + format(player.ss.subspacepersecond) + " subspace per second." : "" }, { "color": "#e8ffff", "font-size": "24px", "font-family": "monospace" }],
        ["blank", "25px"],
        ["raw-html", function () { return player.hindrancecutscene.eq(0) ? "<h4>You have " + format(player.sp.space) + " space." : "" }, { "color": "#dfdfdf", "font-size": "24px", "font-family": "monospace" }],
        ["raw-html", function () { return player.hindrancecutscene.eq(0) ? "<h4>You have " + format(player.ti.timeenergy) + " time energy." : "" }, { "color": "#006609", "font-size": "24px", "font-family": "monospace" }],
        ["blank", "25px"],
        ["row", [["buyable", 11], ["buyable", 12]]],   
        ["blank", "25px"],
        ["infobox", "jacorblog26"],
    ],

},
},

},

tabFormat: [
["microtabs", "stuff", { 'border-width': '0px' }],
["raw-html", function () { return options.musicToggle ? "<audio controls autoplay loop hidden><source src=music/prestigetree.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
],
layerShown() { return player.subspacelayer.eq(1) }
})
addLayer("so", {
    name: "Solarity", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "O", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
tooltip: "Solarity", // Row the layer is in on the tree (0 is the first row)
branches: ["sb", "ti"],
color: "#ffcd00",
nodeStyle: {
    "background-origin": "border-box",
    background: "radial-gradient(#ffcd00, #ff4300)",
},
startData() { return {
    unlocked: true,
}
},
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
    jacorblog27: {
        unlocked() { return player.quirkcutscene.eq(0) },
        title: "Log XXVII",
        body() { return "Log XXVII: Haven't wrote here in a while. I'm too busy. The prestige tree is almost finished. Getting the seventh row done. Aside from the war, we've been making big discoveries about the ???????? ?????. They have found ?????? beyond our ?????. Just can't let the death realm get there. Things are going to be nasty." },         
    },
},
microtabs: {
stuff: {
"Main": {
buttonStyle() { return { 'color': '#ffcd00' } },
unlocked() { return player.quirklayer.eq(1) },
content:

    [
        ["infobox", "jacorblog27"],
        ["blank", "25px"],
        ["raw-html", function () { return "<h1>Unlocked the solar forge! Check crafting (must have defeated Ce308)" }],
    ],

},
},

},

tabFormat: [
["microtabs", "stuff", { 'border-width': '0px' }],
["raw-html", function () { return options.musicToggle ? "<audio controls autoplay loop hidden><source src=music/prestigetree.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
],
layerShown() { return player.solaritylayer.eq(1) }
})
addLayer("be", {
    name: "Balance Energy", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "BA", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
tooltip: "Balance Energy", // Row the layer is in on the tree (0 is the first row)
branches: ["ss", "qu"],
color: "#fced9f",
startData() { return {
    unlocked: true,
    balanceenergy: new Decimal(0),
    balanceenergytoget: new Decimal(0),
}
},
update(delta) {
    if (player.balanceenergyscene.eq(7)) {
        player.balanceenergycutscene = new Decimal(0)
    }
    
    player.be.balanceenergytoget = player.i.jacorbianenergy.div(1000).pow(0.5)
},
clickables: {
    11: {
        title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.balanceenergycutscene.eq(1) },
        unlocked() { return player.balanceenergyscene.lt(7) },
        onClick() {
            player.balanceenergyscene = player.balanceenergyscene.add(1)
        },
    },
    12: {
        title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.balanceenergycutscene.eq(1) },
        unlocked() { return player.balanceenergyscene.lt(7) && player.balanceenergyscene.neq(0) },
        onClick() {
            player.balanceenergyscene = player.balanceenergyscene.sub(1)
        },
    },
    13: {
        title() { return "<h2>Desynthesize jacorbian energy for balance energy. Also resets meta-prestige time." },
        canClick() { return player.be.balanceenergytoget.gte(1) },
        unlocked() { return player.balanceenergycutscene.eq(0) },
        onClick() {
            player.i.metaprestigetime = new Decimal(0)
            player.i.jacorbianenergy = new Decimal(0)
            player.be.balanceenergy = player.be.balanceenergy.add(player.be.balanceenergytoget)
        },
        style: { "background-color": "#fced9f", width: '400px', "min-height": '100px' },
    },
},
upgrades: {
},
buyables: {
    11: {
        cost(x) { return new Decimal(1.4).pow(x || getBuyableAmount(this.layer, this.id)).mul(20) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).pow(0.5).add(1) },
        unlocked() { return true },
        canAfford() { return player.be.balanceenergy.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Negativity"
        },
        display() {
            return "which are boosting space energy gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Balance Energy"
        },
        buy() {
            let base = new Decimal(20)
            let growth = 1.4
            let max = Decimal.affordGeometricSeries(player.be.balanceenergy, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.be.balanceenergy = player.be.balanceenergy.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "rgb(235, 64, 52)",}
    },
    12: {
        cost(x) { return new Decimal(1.2).pow(x || getBuyableAmount(this.layer, this.id)).mul(100) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).pow(0.5).add(1) },
        unlocked() { return true },
        canAfford() { return player.be.balanceenergy.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Positivity"
        },
        display() {
            return "which are boosting super generator power gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Balance Energy"
        },
        buy() {
            let base = new Decimal(100)
            let growth = 1.2
            let max = Decimal.affordGeometricSeries(player.be.balanceenergy, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.be.balanceenergy = player.be.balanceenergy.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "rgb(162, 249, 252)",}
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
buttonStyle() { return { 'color': '#fced9f' } },
unlocked() { return player.quirklayer.eq(1) },
content:

    [
        ["raw-html", function () { return player.balanceenergyscene.eq(1) ? "<h1>Hello, Artis here! Strange seeing me in a prestige layer." : "" }, { "color": "#ff5500", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.balanceenergyscene.eq(2) ? "<h1>Sitra, my brother, you will fight him." : "" }, { "color": "#ff5500", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.balanceenergyscene.eq(3) ? "<h1>I know it's very hard, but we all agreed to do this." : "" }, { "color": "#ff5500", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.balanceenergyscene.eq(4) ? "<h1>This has been planned for a while." : "" }, { "color": "#ff5500", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.balanceenergyscene.eq(5) ? "<h1>Sitra is on our side. It would be easier to absorb his power." : "" }, { "color": "#ff5500", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.balanceenergyscene.eq(6) ? "<h1>Anyways, that's it. See ya." : "" }, { "color": "#ff5500", "font-size": "18px", "font-family": "monospace" }],
        ["blank", "25px"],
        ["row", [["clickable", 12], ["clickable", 11]]],
        ["blank", "25px"],
        ["raw-html", function () { return player.balanceenergycutscene.eq(1) ? " <div class=spinning-symbol>☭</div>" : "" }],
        ["raw-html", function () { return player.balanceenergycutscene.eq(0) ? "<h2>You have " + format(player.be.balanceenergy) + " balance energy. (+" + format(player.be.balanceenergytoget) + ")" : "" }, { "color": "#fced9f", "font-size": "24px", "font-family": "monospace" }],
        ["raw-html", function () { return player.balanceenergycutscene.eq(0) ? "<h3>You have " + format(player.i.jacorbianenergy) + " jacorbian energy." : "" }, { "color": "purple", "font-size": "24px", "font-family": "monospace" }],
        ["blank", "25px"],
        ["row", [["clickable", 13]]],
        ["blank", "25px"],
        ["row", [["buyable", 11], ["buyable", 12]]],
    ],

},
},

},

tabFormat: [
["microtabs", "stuff", { 'border-width': '0px' }],
["raw-html", function () { return options.musicToggle && player.balanceenergycutscene.eq(1) ? "<audio controls autoplay loop hidden><source src=music/craftingcutscene.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
["raw-html", function () { return options.musicToggle && player.balanceenergycutscene.eq(0) ? "<audio controls autoplay loop hidden><source src=music/prestigetree.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
],
layerShown() { return player.balanceenergylayer.eq(1) }
})

addLayer("ma", {
    name: "Magic", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
tooltip: "Magic", // Row the layer is in on the tree (0 is the first row)
branches: ["so", "qu", "hi"],
color: "#eb34c0",
startData() { return {
    unlocked: true,
    currentspell: new Decimal(0),
    scorecerereffect: new Decimal(1.1),
    pointprestigesynergyeffect: new Decimal(1),
    energyemulsifiereffect: new Decimal(1.2),
}
},
update(delta) {
    if (player.magicscene.eq(17)) {
        player.magiccutscene = new Decimal(0)
    }

    player.ma.scorecerereffect = Decimal.add(buyableEffect("ma", 11), 1.1)
    player.ma.pointprestigesynergyeffect = Decimal.pow(player.i.prestigepoints.add(1).log10().pow(1.5), buyableEffect("ma", 12))
    player.ma.energyemulsifiereffect = Decimal.add(buyableEffect("ma", 13), 1.2)
},
clickables: {
    11: {
        title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.magiccutscene.eq(1) },
        unlocked() { return player.magicscene.lt(17) },
        onClick() {
            player.magicscene = player.magicscene.add(1)
        },
    },
    12: {
        title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.magiccutscene.eq(1) },
        unlocked() { return player.magicscene.lt(17) && player.magicscene.neq(0) },
        onClick() {
            player.magicscene = player.magicscene.sub(1)
        },
    },
    13: {
        title() { return "<h2>Scorecerer" },
        canClick() { return player.ma.currentspell.eq(0) },
        unlocked() { return player.magiccutscene.eq(0)},
        display() {
            return "<h3>Boosts score by x" + format(player.ma.scorecerereffect) + "."
        },
        onClick() {
            player.ma.currentspell = new Decimal(1)
        },
        style: { width: '275px', height: '150px', }
    },
    14: {
        title() { return "<h2>Point-Prestige Synergy" },
        canClick() { return player.ma.currentspell.eq(0) },
        unlocked() { return player.magiccutscene.eq(0)},
        display() {
            return "<h3>Boosts points by x" + format(player.ma.pointprestigesynergyeffect) + ". (Based on prestige points)"
        },
        onClick() {
            player.ma.currentspell = new Decimal(2)
        },
        style: { width: '275px', height: '150px', }
    },
    15: {
        title() { return "<h2>Energy Emulsifier" },
        canClick() { return player.ma.currentspell.eq(0) },
        unlocked() { return player.magiccutscene.eq(0)},
        display() {
            return "<h3>Boosts incremental energy by x" + format(player.ma.energyemulsifiereffect) + "."
        },
        onClick() {
            player.ma.currentspell = new Decimal(3)
        },
        style: { width: '275px', height: '150px', }
    },
},
upgrades: {
},
buyables: {
    11: {
        cost(x) { return new Decimal(1.33).pow(x || getBuyableAmount(this.layer, this.id)).mul(1000000) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.02) },
        unlocked() { return true },
        canAfford() { return player.m.points.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Level Scorecerer"
        },
        display() {
            return "which are adding +x" + format(tmp[this.layer].buyables[this.id].effect) + " to the effect.\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Incremental Power"
        },
        buy() {
            let base = new Decimal(1000000)
            let growth = 1.33
            let max = Decimal.affordGeometricSeries(player.m.points, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.m.points = player.m.points.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    12: {
        cost(x) { return new Decimal(1.36).pow(x || getBuyableAmount(this.layer, this.id)).mul(1500000) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).pow(0.04).div(40).add(1) },
        unlocked() { return true },
        canAfford() { return player.m.points.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Level Point-Prestige Synergy"
        },
        display() {
            return "which boosting the effect by ^" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Incremental Power"
        },
        buy() {
            let base = new Decimal(1500000)
            let growth = 1.36
            let max = Decimal.affordGeometricSeries(player.m.points, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.m.points = player.m.points.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    13: {
        cost(x) { return new Decimal(1.4).pow(x || getBuyableAmount(this.layer, this.id)).mul(3000000) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.02) },
        unlocked() { return true },
        canAfford() { return player.m.points.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Level Energy Emulsifier"
        },
        display() {
            return "which are adding +x" + format(tmp[this.layer].buyables[this.id].effect) + " to the effect.\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Incremental Power"
        },
        buy() {
            let base = new Decimal(3000000)
            let growth = 1.4
            let max = Decimal.affordGeometricSeries(player.m.points, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.m.points = player.m.points.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
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
buttonStyle() { return { 'color': '#eb34c0' } },
unlocked() { return player.magiclayer.eq(1) },
content:

    [
        ["raw-html", function () { return player.magicscene.eq(1) ? "<div class=demonin-text>Hi, you must be the hero, aren't you?</div>" : "" }, { "color": "#dcca5a", "font-size": "36px", }],
        ["raw-html", function () { return player.magicscene.eq(2) ? "<div class=demonin-text>I am Demonin. The mage from the death realm.</div>" : "" }, { "color": "#dcca5a", "font-size": "36px", }],
        ["raw-html", function () { return player.magicscene.eq(3) ? "<div class=demonin-text>You've definitely heard about me. My life has been a long and eventful one.</div>" : "" }, { "color": "#dcca5a", "font-size": "36px", }],
        ["raw-html", function () { return player.magicscene.eq(4) ? "<div class=demonin-text>I have done so many things,</div>" : "" }, { "color": "#dcca5a", "font-size": "36px", }],
        ["raw-html", function () { return player.magicscene.eq(5) ? "<div class=demonin-text>but the best choice I have made was joining you guys.</div>" : "" }, { "color": "#dcca5a", "font-size": "36px", }],
        ["raw-html", function () { return player.magicscene.eq(6) ? "<div class=demonin-text>I've destroyed so much. Caused so much pain.</div>" : "" }, { "color": "#dcca5a", "font-size": "36px", }],
        ["raw-html", function () { return player.magicscene.eq(7) ? "<div class=demonin-text>The death realm made me one of their pawns.</div>" : "" }, { "color": "#dcca5a", "font-size": "36px", }],
        ["raw-html", function () { return player.magicscene.eq(8) ? "<div class=demonin-text>I've ended up killing trillions... No, maybe quadrillions!</div>" : "" }, { "color": "#dcca5a", "font-size": "36px", }],
        ["raw-html", function () { return player.magicscene.eq(9) ? "<div class=demonin-text>The dodecadragon. The entity I have commanded to put death on all.</div>" : "" }, { "color": "#dcca5a", "font-size": "36px", }],
        ["raw-html", function () { return player.magicscene.eq(10) ? "<div class=demonin-text>I have eliminated so much of my realm, but for what?</div>" : "" }, { "color": "#dcca5a", "font-size": "36px", }],
        ["raw-html", function () { return player.magicscene.eq(11) ? "<div class=demonin-text>With more space we created purgatory. Only a much more useless, dry environment.</div>" : "" }, { "color": "#dcca5a", "font-size": "36px", }],
        ["raw-html", function () { return player.magicscene.eq(12) ? "<div class=demonin-text>Instead, there could have been so many more elements in this world...</div>" : "" }, { "color": "#dcca5a", "font-size": "36px", }],
        ["raw-html", function () { return player.magicscene.eq(13) ? "<div class=demonin-text>I am here to assist you and revert the damage I have done.</div>" : "" }, { "color": "#dcca5a", "font-size": "36px", }],
        ["raw-html", function () { return player.magicscene.eq(14) ? "<div class=demonin-text>I will teach you magic, but you need to unlock Incremental^2 first.</div>" : "" }, { "color": "#dcca5a", "font-size": "36px", }],
        ["raw-html", function () { return player.magicscene.eq(15) ? "<div class=demonin-text>For now, enjoy the boost.</div>" : "" }, { "color": "#dcca5a", "font-size": "36px", }],
        ["raw-html", function () { return player.magicscene.eq(16) ? "<div class=demonin-text>I will be seeing you soon, sometime.</div>" : "" }, { "color": "#dcca5a", "font-size": "36px", }],
        ["blank", "25px"],
        ["row", [["clickable", 12], ["clickable", 11]]],
        ["raw-html", function () { return player.magiccutscene.eq(0) ? "<h3>Current minute (updates on refresh): " + formatWhole(today.getMinutes()) + " -> x" + format(player.m.scorefromminutes) : "" }, { "color": "#eb34c0", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.magiccutscene.eq(0) ? "<h2>You have " + format(player.m.points) + " incremental power.": "" }, { "color": "#eb34c0", "font-size": "18px", "font-family": "monospace" }],
        ["blank", "25px"],
        ["raw-html", function () { return player.ma.currentspell.eq(0) && player.magiccutscene.eq(0) ? "<h2>Current spell: None": "" }, { "color": "#eb34c0", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.ma.currentspell.eq(1) && player.magiccutscene.eq(0) ? "<h2>Current spell: Scorecerer": "" }, { "color": "#eb34c0", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.ma.currentspell.eq(2) && player.magiccutscene.eq(0) ? "<h2>Current spell: Point-Prestige Synergy": "" }, { "color": "#eb34c0", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.ma.currentspell.eq(3) && player.magiccutscene.eq(0) ? "<h2>Current spell: Energy Emulsifier": "" }, { "color": "#eb34c0", "font-size": "18px", "font-family": "monospace" }],
        ["blank", "25px"],
        ["row", [["clickable", 13], ["clickable", 14], ["clickable", 15]]],
        ["row", [["buyable", 11], ["buyable", 12], ["buyable", 13]]],
        ["blank", "25px"],
        ["raw-html", function () { return player.magiccutscene.eq(0) ? "<h3>Spells last an entire meta-prestige run." : "" }, { "color": "#eb34c0", "font-size": "18px", "font-family": "monospace" }],
    ],

},
},

},

tabFormat: [
["microtabs", "stuff", { 'border-width': '0px' }],
["raw-html", function () { return options.musicToggle && player.magiccutscene.eq(1) ? "<audio controls autoplay loop hidden><source src=music/demonin.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
["raw-html", function () { return options.musicToggle && player.magiccutscene.eq(0) ? "<audio controls autoplay loop hidden><source src=music/prestigetree.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
],
layerShown() { return player.magiclayer.eq(1) }
})