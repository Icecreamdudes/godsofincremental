addLayer("c", {
    name: "crafting", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    row: 2,
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
tooltip: "Crafting", // Row the layer is in on the tree (0 is the first row)
color: "orange",
nodeStyle() {
    // Helper function to convert degrees to radians
    function degreesToRadians(degrees) {
        return (degrees * Math.PI) / 180;
    }

    // Define the base hue values for orange and red (between 0 and 360 degrees)
    const orangeHue = 30;
    const redHue = 0;

    // Calculate the current hue value based on time (smoothly oscillating between orange and red)
    const currentTime = new Date().getTime();
    const hueOffset = (Math.sin(currentTime / 400) + 1) / 2; // Adjust the divisor to change oscillation speed
    const hue1 = orangeHue + (hueOffset * (redHue - orangeHue));
    const hue2 = redHue + (hueOffset * (orangeHue - redHue));

    // Create the gradient string using the HSL colors
    const gradient = `linear-gradient(to right, hsl(${hue1}, 80%, 50%), hsl(${hue2}, 80%, 50%), hsl(${hue1}, 80%, 50%), hsl(${hue2}, 80%, 50%))`;

    return {
        background: gradient,
        "background-origin": "border-box",
        animation: "otherorbit 25s infinite linear",
        position: "absolute",
        top: "25.5%",
        left: "46.5%",
    };
},
startData() { return {
    unlocked: true,
    standardkey: new Decimal(0),
    enhancekey: new Decimal(0),
    currentresourcedisplay: new Decimal(0),

    //Tier one resources
    scrapmetal: new Decimal(0),
    scrapmetaltoget: new Decimal(0),
    scrapmetalcancel: new Decimal(1),
    wires: new Decimal(0),
    wirestoget: new Decimal(0),
    wirescancel: new Decimal(1),
    enhancepowder: new Decimal(0),
    enhancepowdertoget: new Decimal(0),
    enhancepowdercancel: new Decimal(1),
}
},
update(delta) {
    if (player.craftingscene.eq(20)) {
        player.craftingcutscene = new Decimal(0)
        player.inartiscutscene = new Decimal(0)
    }
    if (player.craftingscene.gt(0) && player.craftingcutscene.eq(1))
    {
        player.inartiscutscene = new Decimal(1)
    }

    if (player.c.standardkey.eq(1) && player.c.enhancekey.eq(1))
    {
        player.m.craftingunlock = new Decimal(1)
    }

    if (player.crafting2scene.eq(10)) {
        player.crafting2cutscene = new Decimal(0)
        player.inartiscutscene = new Decimal(0)
    }
    if (player.crafting2scene.gt(0) && player.crafting2cutscene.eq(1))
    {
        player.inartiscutscene = new Decimal(1)
    }

    //TIER ONE CRAFTING
    if (player.i.prestigeenergy.gt(0))
    {
        player.c.scrapmetalcancel = new Decimal(0)
    }
    player.c.scrapmetaltoget = player.i.prestigemachines.pow(0.35).mul(player.c.scrapmetalcancel).floor()

    if (player.i.prestigemachines.gt(0))
    {
        player.c.wirescancel = new Decimal(0)
    }
    player.c.wirestoget = player.i.prestigeenergy.add(1).slog().pow(4).mul(player.c.wirescancel).floor()

    if (player.i.enhancedprestigepoints.gt(0) && player.i.enhancedprestigepoints.lt(1))
    {
        player.c.enhancepowdercancel = new Decimal(0)
    }
    player.c.enhancepowdertoget = player.i.enhancepoints.add(1).slog().pow(4).mul(player.c.enhancepowdercancel).floor()
},
clickables: {
    11: {
        title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.craftingcutscene.eq(1) },
        unlocked() { return player.craftingscene.neq(20) },
        onClick() {
            player.craftingscene = player.craftingscene.add(1)
        },
    },
    12: {
        title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.craftingcutscene.eq(1) },
        unlocked() { return player.craftingscene.neq(20) && player.craftingscene.neq(0) },
        onClick() {
            player.craftingscene = player.craftingscene.sub(1)
        },
    },
    //DONT MIND THIS CODE LOL
    13: { title() { return "<h2>Unlock the standard path lock." }, canClick() { return player.bestpoints.gte(1e36) && player.i.bestprestigeenergy.gte(1e9) && player.i.bestpureenergy.gte(1e6) && player.i.prestigemachines.gte(125) && player.i.boosterenergy.gte(10000000) && player.i.generatorenergy.gte(10000000) && player.m.incrementalenergy.gte(40) && player.i.standardpath.eq(1) && player.c.standardkey.eq(0) }, unlocked() { return player.craftingcutscene.eq(0) }, onClick() { player.c.standardkey = new Decimal(1) }, style: { "background-color": "#ffffaa", width: '300px', "min-height": '75px' }, },
    14: {
        title() { return "<h2>Unlock the enhance path lock." },
        canClick() { return player.bestpoints.gte(1e14) && player.i.bestenhancepoints.gte(500) && player.i.prestigepoints.gte(5e8) && player.i.buyables[101].gte(15) && player.i.enhancebeaconlevel.gte(8) && player.m.points.gte(5000) && player.i.enhancepath.eq(1) && player.c.enhancekey.eq(0) },
        unlocked() { return player.craftingcutscene.eq(0) },
        onClick() {
            player.c.enhancekey = new Decimal(1)
        },
        style: { "background-color": "#b82fbd", width: '300px', "min-height": '75px' },
    },
    15: {
        title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.crafting2cutscene.eq(1) },
        unlocked() { return player.crafting2scene.neq(10) },
        onClick() {
            player.crafting2scene = player.crafting2scene.add(1)
        },
    },
    16: {
        title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.crafting2cutscene.eq(1) },
        unlocked() { return player.crafting2scene.neq(10) && player.crafting2scene.neq(0) },
        onClick() {
            player.craftingscene = player.crafting2scene.sub(1)
        },
    },
    17: {
        title() { return format(player.c.scrapmetal, 0) + "<br>Scrap Metal" },
        canClick() { return true },
        unlocked() { return true },
        onClick() {
            player.c.currentresourcedisplay = new Decimal(1)
        },
        style: { "background-color": "#ffffaa", width: '100px', "min-height": '100px' },
    },
    18: {
        title() { return format(player.c.wires, 0) + "<br>Wires" },
        canClick() { return true },
        unlocked() { return true },
        onClick() {
            player.c.currentresourcedisplay = new Decimal(2)
        },
        style: { "background-color": "#ffffaa", width: '100px', "min-height": '100px' },
    },
    19: {
        title() { return format(player.c.enhancepowder, 0) + "<br>Enhance Powder" },
        canClick() { return true },
        unlocked() { return true },
        onClick() {
            player.c.currentresourcedisplay = new Decimal(3)
        },
        style: { "background-color": "#b82fbd", width: '100px', "min-height": '100px' },
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
    scrapmetal: {
        unlocked() { return player.c.currentresourcedisplay.eq(1) },
        title: "Item Description",
        body() { return "Scrap metal found in worn-out prestige machines. Not very durable. Same durability as wood. However, this scrap metal is efficient in containing energy, as the energy contained within it won't escape, making this scrap metal useful." },         
    }, 
    wires: {
        unlocked() { return player.c.currentresourcedisplay.eq(2) },
        title: "Item Description",
        body() { return "Wires that could have been in prestige machines, but you decided to not produce them. This wire is specific to prestige energy and prestige energy only. " },         
    }, 
    enhancepowder: {
        unlocked() { return player.c.currentresourcedisplay.eq(3) },
        title: "Item Description",
        body() { return "This powder is enhance points in a dormant state. Can be great for powering batteries. This powder is fatal when consumed, as it will burn your internal organs and make your blood's pH level basic. It can be used to track other prestige tree layers." },         
    }, 
},
microtabs: {
stuff: {
"Unlock": {
buttonStyle() { return { 'color': 'orange' } },
unlocked() { return player.m.craftingunlock.eq(0) },
content:

    [
        ["raw-html", function () { return player.craftingscene.eq(0) ? "<h1>Hello there." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(1) ? "<h1>I am Artis. The passionate celestial of crafting." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(2) ? "<h1>Unlike the other celestials, there is no need to defeat me." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(3) ? "<h1>I will assist you through your crafting journey." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(4) ? "<h1>Ah, I am the first celestial that you meet." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(5) ? "<h1>It's also sad how I am the weakest. A mere 3 on the celestial power scale." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(6) ? "<h1>It's okay, because I am very, very talented" : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(7) ? "<h1>My skill is an art like no other; I have mastered the art of crafting." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(8) ? "<h1>I have even been appointed by high incremental officials to help improve their tech." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(9) ? "<h1>Me and my brother Sitra (celestial of machines) have crafted the standard path." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(10) ? "<h1>Sitra, has crafted a celestial like none other. A pseudo-celestial." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(11) ? "<h1>A completely mechanical celestial made by other celestials. How meta." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(12) ? "<h1>You will actually fight this celestial very, very, soon." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(13) ? "<h1>Sitra has requested me to make the battery that powers the celestial." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(14) ? "<h1>However, I didn't make it. It's up to YOU to make the battery." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(15) ? "<h1>Well, you must have good crafting skills in order to be savior of the multiverse." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(16) ? "<h1>You must be grateful. Your predecessor didn't recieve this much care and attention." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(17) ? "<h1>You have meta-prestige, crafting, the standard path; what more is there to have?" : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(18) ? "<h1>But you must prove yourself to me." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(19) ? "<h1>There are requirements you must fill out. I'll see you when you are done." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["blank", "25px"],
        ["row", [["clickable", 12], ["clickable", 11]]],
    ["raw-html", function () { return player.craftingcutscene.eq(1) ? " <div class=spinning-symbol>☭</div>" : "" }],
    ["raw-html", function () { return player.craftingcutscene.eq(0) ? "<h2>" + format(player.bestpoints) + "/1e36<h2> best points. " : ""}, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
    ["raw-html", function () { return player.craftingcutscene.eq(0) ? "<h2>" + format(player.i.bestprestigeenergy) + "/1e9<h2> best prestige energy. " : ""}, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
    ["raw-html", function () { return player.craftingcutscene.eq(0) ? "<h2>" + format(player.i.bestpureenergy) + "/1,000,000<h2> best pure energy. " : ""}, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
    ["raw-html", function () { return player.craftingcutscene.eq(0) ? "<h2>" + format(player.i.prestigemachines) + "/125<h2> prestige machines. " : ""}, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
    ["raw-html", function () { return player.craftingcutscene.eq(0) ? "<h2>" + format(player.i.prestigepoints) + "/1e20<h2> prestige points. " : ""}, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
    ["raw-html", function () { return player.craftingcutscene.eq(0) ? "<h2>" + format(player.i.boosterenergy) + "/10,000,000<h2> booster energy. " : ""}, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
    ["raw-html", function () { return player.craftingcutscene.eq(0) ? "<h2>" + format(player.i.generatorenergy) + "/10,000,000<h2> generator energy. " : ""}, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
    ["raw-html", function () { return player.craftingcutscene.eq(0) ? "<h2>" + format(player.m.incrementalenergy) + "/40<h2> incremental energy. " : ""}, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
    ["raw-html", function () { return player.craftingcutscene.eq(0) ? "<h2>" + format(player.i.standardpath) + "/1<h2> standard path. " : ""}, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
    ["blank", "25px"],
        ["row", [["clickable", 13]]],
    ["blank", "25px"],
    ["raw-html", function () { return player.craftingcutscene.eq(0) ? "<h2>" + format(player.bestpoints) + "/1e14<h2> best points. " : ""}, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
    ["raw-html", function () { return player.craftingcutscene.eq(0) ? "<h2>" + format(player.i.bestenhancepoints) + "/500<h2> best enhance points. " : ""}, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
    ["raw-html", function () { return player.craftingcutscene.eq(0) ? "<h2>" + format(player.i.prestigepoints) + "/500,000,000<h2> prestige points. " : ""}, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
    ["raw-html", function () { return player.craftingcutscene.eq(0) ? "<h2>" + format(player.i.buyables[101]) + "/15<h2> true enhancers " : ""}, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
    ["raw-html", function () { return player.craftingcutscene.eq(0) ? "<h2>" + format(player.i.enhancebeaconlevel) + "/8<h2> beacon level " : ""}, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
    ["raw-html", function () { return player.craftingcutscene.eq(0) ? "<h2>" + format(player.m.points) + "/5000<h2> incremental power " : ""}, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
    ["raw-html", function () { return player.craftingcutscene.eq(0) ? "<h2>" + format(player.i.enhancepath) + "/1<h2> enhance path. " : ""}, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
    ["blank", "25px"],
    ["row", [["clickable", 14]]],
    ["blank", "25px"],
    ["raw-html", function () { return player.craftingcutscene.eq(0) ? "<h2>Singularity unlock requirement ptsd? Maybe you are linked to your predecessor. " : ""}, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
]

},
"Crafting": {
    buttonStyle() { return { 'color': 'orange' } },
    unlocked() { return player.m.craftingunlock.eq(1) },
    content:
    
        [
            ["raw-html", function () { return player.crafting2scene.eq(1) ? "<h1>So you did it." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2scene.eq(2) ? "<h1>My requirements have been fulfilled." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2scene.eq(3) ? "<h1>You can start crafting now." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2scene.eq(4) ? "<h1>Each path can reap different materials." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2scene.eq(5) ? "<h1>It won't be much, as you are a beginner. You would be able to make some basic stuff." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2scene.eq(6) ? "<h1>Once you defeat the pseudo-celestial," : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2scene.eq(7) ? "<h1>I will give you access to the next tier of crafting." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2scene.eq(8) ? "<h1>Your true crafting journey will begin then." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2scene.eq(9) ? "<h1>See you when you have made the battery." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["blank", "25px"],
            ["row", [["clickable", 16], ["clickable", 15]]],
    ]
    
    },
    "Resources": {
        buttonStyle() { return { 'color': 'orange' } },
        unlocked() { return player.crafting2cutscene.eq(0) },
        content:
        [
            ["blank", "25px"],
            ["raw-html", function () { return "<h3>You must meta-prestige in order to claim the resources."  }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["blank", "25px"],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentresourcedisplay.eq(1) ? "<h2>You have " + formatWhole(player.c.scrapmetal) + "<h2> scrap metal. (+" + formatWhole(player.c.scrapmetaltoget) + ")": "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentresourcedisplay.eq(2) ? "<h2>You have " + formatWhole(player.c.wires) + "<h2> wires. (+" + formatWhole(player.c.wirestoget) + ")": "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentresourcedisplay.eq(3) ? "<h2>You have " + formatWhole(player.c.enhancepowder) + "<h2> enhance powder. (+" + formatWhole(player.c.enhancepowdertoget) + ")": "" }, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
            ["blank", "25px"],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentresourcedisplay.eq(1) ? "<h3>In order to earn scrap metal, one must NOT produce prestige energy. (Based on machines)": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentresourcedisplay.eq(2) ? "<h3>In order to earn wires, one must NOT produce prestige machines. (Based on prestige energy)": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentresourcedisplay.eq(3) ? "<h3>In order to earn enhance powder, one must NOT let enhanced prestige points decay to nothing.. (Based on enhance points)": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["blank", "25px"],
            ["row", [["clickable", 17], ["clickable", 18], ["clickable", 19]]],
            ["blank", "25px"],
            ["infobox", "scrapmetal"],
            ["infobox", "wires"],
            ["infobox", "enhancepowder"],
        ]
        
        },
},


},
tabFormat: [
    ["microtabs", "stuff", { 'border-width': '0px' }],
    ["raw-html", function () { return options.musicToggle && player.inartiscutscene.eq(0) ? "<audio controls autoplay loop hidden><source src=music/crafting.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
    ["raw-html", function () { return options.musicToggle && player.inartiscutscene.eq(1) ? "<audio controls autoplay loop hidden><source src=music/craftingcutscene.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
],
    layerShown() { return hasUpgrade("m", 19) }
})

    const styleSheet3 = document.createElement('style');
    styleSheet3.innerHTML = `
    @keyframes otherorbit {
        0% {
            transform: rotate(-180deg) translateX(175px) rotate(180deg);
          }
          100% {
            transform: rotate(180deg) translateX(175px) rotate(-180deg);
          }
      }
      `;
    
    document.head.appendChild(styleSheet3);