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
    currentcraftingdisplay: new Decimal(0),

    //Resources
    scrapmetal: new Decimal(0),
    scrapmetaltoget: new Decimal(0),
    scrapmetalcancel: new Decimal(1),
    wires: new Decimal(0),
    wirestoget: new Decimal(0),
    wirescancel: new Decimal(1),
    enhancepowder: new Decimal(0),
    enhancepowdertoget: new Decimal(0),
    enhancepowdercancel: new Decimal(1),
    celestialcells: new Decimal(0),
    celestialcellstoget: new Decimal(0),
     
    //Anvil
    craftingspeed: new Decimal(1),
    anvilslots: new Decimal(1),
    maxanvilslots: new Decimal(1),

    //Crafted Resources

    //Time Metal
    timemetal: new Decimal(0),
    timemetaltoget: new Decimal(1),
    timemetalcosts: [new Decimal(1), new Decimal(2)],
    craftingtimemetal: new Decimal(0),
    timemetalcraftingtime: new Decimal(0),
    timemetalcraftingtimereq: new Decimal(20),

    //Space Metal
    spacemetal: new Decimal(0),
    spacemetaltoget: new Decimal(1),
    spacemetalcosts: [new Decimal(1), new Decimal(2)],
    craftingspacemetal: new Decimal(0),
    spacemetalcraftingtime: new Decimal(0),
    spacemetalcraftingtimereq: new Decimal(25),

    //Time Capsule
    timecapsules: new Decimal(0),
    timecapsulestoget: new Decimal(1),
    timecapsulecosts: [new Decimal(3), new Decimal(1), new Decimal(600)],
    craftingtimecapsules: new Decimal(0),
    timecapsulecraftingtime: new Decimal(0),
    timecapsulecraftingtimereq: new Decimal(80),

    //Space Building
    spacebuildings: new Decimal(0),
    spacebuildingstoget: new Decimal(1),
    spacebuildingcosts: [new Decimal(4), new Decimal(2), new Decimal(8)],
    craftingspacebuildings: new Decimal(0),
    spacebuildingcraftingtime: new Decimal(0),
    spacebuildingcraftingtimereq: new Decimal(150),

    //Celestial Battery
    celestialbatteries: new Decimal(0),
    celestialbatteriestoget: new Decimal(1),
    celestialbatterycosts: [new Decimal(25), new Decimal(25), new Decimal(10), new Decimal(10), new Decimal(10), new Decimal(2), new Decimal(1)],
    craftingcelestialbatteries: new Decimal(0),
    celestialbatterycraftingtime: new Decimal(0),
    celestialbatterycraftingtimereq: new Decimal(400),

    //Quirk Layer
    quirklayers: new Decimal(0),
    quirklayerstoget: new Decimal(1),
    quirklayercosts: [new Decimal(2), new Decimal(8), new Decimal(3)],
    craftingquirklayers: new Decimal(0),
    quirklayercraftingtime: new Decimal(0),
    quirklayercraftingtimereq: new Decimal(100),

    //Quirk Star
    quirkstars: new Decimal(0),
    quirkstarstoget: new Decimal(1),
    quirkstarcosts: [new Decimal(2), new Decimal(4), new Decimal(5)],
    craftingquirkstars: new Decimal(0),
    quirkstarcraftingtime: new Decimal(0),
    quirkstarcraftingtimereq: new Decimal(220),
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

    //RESOURCES
    if (player.i.prestigeenergy.gt(0))
    {
        player.c.scrapmetalcancel = new Decimal(0)
    }
    player.c.scrapmetaltoget = player.i.prestigemachines.pow(0.4).mul(2).mul(player.c.scrapmetalcancel).floor()

    if (player.i.prestigemachines.gt(0))
    {
        player.c.wirescancel = new Decimal(0)
    }
    player.c.wirestoget = player.i.prestigeenergy.add(1).slog().pow(4.5).mul(2).mul(player.c.wirescancel).floor()

    if (player.i.enhancedprestigepoints.gt(0) && player.i.enhancedprestigepoints.lt(1))
    {
        player.c.enhancepowdercancel = new Decimal(0)
    }
    player.c.enhancepowdertoget = player.i.enhancepoints.add(1).slog().pow(5).mul(3).mul(player.c.enhancepowdercancel).floor()

    player.c.celestialcellstoget = player.i.celestialenergy.mul(100).add(1).slog().pow(2).mul(3).floor()

    //ANVIL
    let craftingspeed = new Decimal(1)
    craftingspeed = new Decimal(1)
    if (hasUpgrade("m", 21)) craftingspeed = craftingspeed.mul(upgradeEffect("m", 21))
    craftingspeed = craftingspeed.mul(buyableEffect("sb", 11))
    craftingspeed = craftingspeed.mul(player.sg.supergeneratorpowereffect)
    if (player.c.anvilslots.gt(player.c.maxanvilslots)) player.c.maxanvilslots = player.c.anvilslots

    player.c.craftingspeed = craftingspeed

    //time metal
    player.c.timemetalcosts[0] = new Decimal(1)
    player.c.timemetalcosts[1] = new Decimal(2)
    if (player.c.craftingtimemetal.eq(1))
    {
        player.c.timemetalcraftingtime = player.c.timemetalcraftingtime.add(player.c.craftingspeed.mul(delta))
    }
    player.c.timemetalcraftingtimereq = new Decimal(20)
    if (hasUpgrade("m", 32)) player.c.timemetalcraftingtimereq = new Decimal(12)
    player.c.timemetaltoget = new Decimal(1)
    if (player.c.timemetalcraftingtime.gte(player.c.timemetalcraftingtimereq))
    {
        player.c.timemetal = player.c.timemetal.add(player.c.timemetaltoget)
            player.c.craftingtimemetal = new Decimal(0)
            player.c.timemetalcraftingtime = new Decimal(0)
        player.c.anvilslots = player.c.anvilslots.add(1)
    }

    //space metal
    player.c.spacemetalcosts[0] = new Decimal(1)
    player.c.spacemetalcosts[1] = new Decimal(2)
    if (player.c.craftingspacemetal.eq(1))
    {
        player.c.spacemetalcraftingtime = player.c.spacemetalcraftingtime.add(player.c.craftingspeed.mul(delta))
    }
    player.c.spacemetalcraftingtimereq = new Decimal(25)
    if (hasUpgrade("m", 32)) player.c.spacemetalcraftingtimereq = new Decimal(16)
    player.c.spacemetaltoget = new Decimal(1)
    if (player.c.spacemetalcraftingtime.gte(player.c.spacemetalcraftingtimereq))
    {
        player.c.spacemetal = player.c.spacemetal.add(player.c.spacemetaltoget)
            player.c.craftingspacemetal = new Decimal(0)
            player.c.spacemetalcraftingtime = new Decimal(0)
        player.c.anvilslots = player.c.anvilslots.add(1)
    }

    //time capsule
    player.c.timecapsulecosts[0] = new Decimal(3)
    player.c.timecapsulecosts[1] = new Decimal(1)
    player.c.timecapsulecosts[2] = new Decimal(600)
    if (player.c.craftingtimecapsules.eq(1))
    {
        player.c.timecapsulecraftingtime = player.c.timecapsulecraftingtime.add(player.c.craftingspeed.mul(delta))
    }
    player.c.timecapsulecraftingtimereq = new Decimal(80)
    if (hasUpgrade("m", 33)) player.c.timecapsulecraftingtimereq = new Decimal(50)
    player.c.timecapsulestoget = new Decimal(1)
    if (player.c.timecapsulecraftingtime.gte(player.c.timecapsulecraftingtimereq))
    {
        player.c.timecapsules = player.c.timecapsules.add(player.c.timecapsulestoget)
        player.c.craftingtimecapsules = new Decimal(0)
        player.c.timecapsulecraftingtime = new Decimal(0)
        player.c.anvilslots = player.c.anvilslots.add(1)
    }

    //space building
    player.c.spacebuildingcosts[0] = new Decimal(4)
    player.c.spacebuildingcosts[1] = new Decimal(2)
    player.c.spacebuildingcosts[2] = new Decimal(8)
    if (player.c.craftingspacebuildings.eq(1))
    {
        player.c.spacebuildingcraftingtime = player.c.spacebuildingcraftingtime.add(player.c.craftingspeed.mul(delta))
    }
    player.c.spacebuildingcraftingtimereq = new Decimal(150)
    if (hasUpgrade("m", 33)) player.c.spacebuildingcraftingtimereq = new Decimal(80)
    player.c.spacebuildingstoget = new Decimal(1)
    if (player.c.spacebuildingcraftingtime.gte(player.c.spacebuildingcraftingtimereq))
    {
        player.c.spacebuildings = player.c.spacebuildings.add(player.c.spacebuildingstoget)
        player.c.craftingspacebuildings = new Decimal(0)
        player.c.spacebuildingcraftingtime = new Decimal(0)
        player.c.anvilslots = player.c.anvilslots.add(1)
    }

    //battery
    player.c.celestialbatterycosts[0] = new Decimal(25)
    player.c.celestialbatterycosts[1] = new Decimal(25)
    player.c.celestialbatterycosts[2] = new Decimal(10)
    player.c.celestialbatterycosts[3] = new Decimal(10)
    player.c.celestialbatterycosts[4] = new Decimal(10)
    player.c.celestialbatterycosts[5] = new Decimal(2)
    player.c.celestialbatterycosts[6] = new Decimal(1)
    if (player.c.craftingcelestialbatteries.eq(1))
    {
        player.c.celestialbatterycraftingtime = player.c.celestialbatterycraftingtime.add(player.c.craftingspeed.mul(delta))
    }
    player.c.celestialbatterycraftingtimereq = new Decimal(400)
    player.c.celestialbatteriestoget = new Decimal(1)
    if (player.c.celestialbatterycraftingtime.gte(player.c.celestialbatterycraftingtimereq))
    {
        player.c.celestialbatteries = player.c.celestialbatteries.add(player.c.celestialbatteriestoget)
        player.c.craftingcelestialbatteries = new Decimal(0)
        player.c.celestialbatterycraftingtime = new Decimal(0)
        player.c.anvilslots = player.c.anvilslots.add(1)
    }

    //quirk layer
    player.c.quirklayercosts[0] = new Decimal(2)
    player.c.quirklayercosts[1] = new Decimal(8)
    player.c.quirklayercosts[2] = new Decimal(3)
    if (player.c.craftingquirklayers.eq(1))
    {
        player.c.quirklayercraftingtime = player.c.quirklayercraftingtime.add(player.c.craftingspeed.mul(delta))
    }
    player.c.quirklayercraftingtimereq = new Decimal(150)
    player.c.quirklayerstoget = new Decimal(1)
    if (player.c.quirklayercraftingtime.gte(player.c.quirklayercraftingtimereq))
    {
        player.c.quirklayers = player.c.quirklayers.add(player.c.quirklayerstoget)
        player.c.craftingquirklayers = new Decimal(0)
        player.c.quirklayercraftingtime = new Decimal(0)
        player.c.anvilslots = player.c.anvilslots.add(1)
    }

    //quirk star
    player.c.quirkstarcosts[0] = new Decimal(2)
    player.c.quirkstarcosts[1] = new Decimal(4)
    player.c.quirkstarcosts[2] = new Decimal(5)
    if (player.c.craftingquirkstars.eq(1))
    {
        player.c.quirkstarcraftingtime = player.c.quirkstarcraftingtime.add(player.c.craftingspeed.mul(delta))
    }
    player.c.quirkstarcraftingtimereq = new Decimal(220)
    player.c.quirkstarstoget = new Decimal(1)
    if (player.c.quirkstarcraftingtime.gte(player.c.quirkstarcraftingtimereq))
    {
        player.c.quirkstars = player.c.quirkstars.add(player.c.quirkstarstoget)
        player.c.craftingquirkstars = new Decimal(0)
        player.c.quirkstarcraftingtime = new Decimal(0)
        player.c.anvilslots = player.c.anvilslots.add(1)
    }
},
clickables: {
    11: {
        title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.craftingcutscene.eq(1) },
        unlocked() { return player.craftingscene.lt(20) },
        onClick() {
            player.craftingscene = player.craftingscene.add(1)
        },
    },
    12: {
        title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.craftingcutscene.eq(1) },
        unlocked() { return player.craftingscene.lt(20) && player.craftingscene.neq(0) },
        onClick() {
            player.craftingscene = player.craftingscene.sub(1)
        },
    },
    //DONT MIND THIS CODE LOL
    13: { title() { return "<h2>Unlock the standard path lock." }, canClick() { return player.bestpoints.gte(1e36) && player.i.bestprestigeenergy.gte(1e9) && player.i.bestpureenergy.gte(1e6) && player.i.prestigemachines.gte(125) && player.i.boosterenergy.gte(10000000) && player.i.generatorenergy.gte(10000000) && player.m.incrementalenergy.gte(40) && player.i.standardpath.eq(1) && player.c.standardkey.eq(0) }, unlocked() { return player.craftingcutscene.eq(0) && player.c.standardkey.eq(0) }, onClick() { player.c.standardkey = new Decimal(1) }, style: { "background-color": "#ffffaa", width: '300px', "min-height": '75px' }, },
    14: {
        title() { return "<h2>Unlock the enhance path lock." },
        canClick() { return player.bestpoints.gte(1e14) && player.i.bestenhancepoints.gte(500) && player.i.prestigepoints.gte(5e8) && player.i.buyables[101].gte(15) && player.i.enhancebeaconlevel.gte(8) && player.m.points.gte(5000) && player.i.enhancepath.eq(1) && player.c.enhancekey.eq(0) },
        unlocked() { return player.craftingcutscene.eq(0) && player.c.enhancekey.eq(0) },
        onClick() {
            player.c.enhancekey = new Decimal(1)
        },
        style: { "background-color": "#b82fbd", width: '300px', "min-height": '75px' },
    },
    15: {
        title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.crafting2cutscene.eq(1) },
        unlocked() { return player.crafting2scene.lt(10) },
        onClick() {
            player.crafting2scene = player.crafting2scene.add(1)
        },
    },
    16: {
        title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.crafting2cutscene.eq(1) },
        unlocked() { return player.crafting2scene.lt(10) && player.crafting2scene.neq(0) },
        onClick() {
            player.craftingscene = player.crafting2scene.sub(1)
        },
    },
    17: {
        title() { return format(player.c.scrapmetal, 0) + "<img src='resources/scrapmetal'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return true },
        unlocked() { return true },
        onClick() {
            player.c.currentresourcedisplay = new Decimal(1)
        },
        style: { "background-color": "#ffffaa", width: '100px', "min-height": '100px' },
    },
    18: {
        title() { return format(player.c.wires, 0) + "<img src='resources/wires.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return true },
        unlocked() { return true },
        onClick() {
            player.c.currentresourcedisplay = new Decimal(2)
        },
        style: { "background-color": "#ffffaa", width: '100px', "min-height": '100px' },
    },
    19: {
        title() { return format(player.c.enhancepowder, 0) + "<img src='resources/enhancepowder'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return true },
        unlocked() { return true },
        onClick() {
            player.c.currentresourcedisplay = new Decimal(3)
        },
        style: { "background-color": "#b82fbd", width: '100px', "min-height": '100px' },
    },
    21: {
        title() { return format(player.c.timemetal, 0) + "<img src='resources/timemetal'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return true },
        unlocked() { return player.crafting2cutscene.eq(0) },
        onClick() {
            player.c.currentcraftingdisplay = new Decimal(1)
        },
        style: { "background-color": "#006609", width: '100px', "min-height": '100px' },
    },
    22: {
        title() { return format(player.c.spacemetal, 0) + "<img src='resources/spacemetal'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return true },
        unlocked() { return player.crafting2cutscene.eq(0) },
        onClick() {
            player.c.currentcraftingdisplay = new Decimal(2)
        },
        style: { "background-color": "#dfdfdf", width: '100px', "min-height": '100px' },
    },
    23: {
        title() { return format(player.c.celestialbatteries, 0) + "<img src='resources/celestialbattery'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return true },
        unlocked() { return player.crafting2cutscene.eq(0) },
        onClick() {
            player.c.currentcraftingdisplay = new Decimal(3)
        },
        style: { "background-color": "#72a4d4", width: '100px', "min-height": '100px' },
    },
    24: {
        title() { return "Start Crafting" },
        canClick() { return player.c.anvilslots.gte(1) && player.c.craftingtimemetal.eq(0) && player.c.scrapmetal.gte(player.c.timemetalcosts[0]) && player.c.enhancepowder.gte(player.c.timemetalcosts[1]) },
        unlocked() { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(1) },
        onClick() {
            player.c.craftingtimemetal = new Decimal(1)
            player.c.anvilslots = player.c.anvilslots.sub(1)

            player.c.scrapmetal = player.c.scrapmetal.sub(player.c.timemetalcosts[0])
            player.c.enhancepowder = player.c.enhancepowder.sub(player.c.timemetalcosts[1])
        },
        style: { width: '150px', "min-height": '100px' },
    },
    25: {
        title() { return "Stop Crafting" },
        canClick() { return player.c.craftingtimemetal.eq(1) },
        unlocked() { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(1) },
        onClick() {
            
            player.c.timemetalcraftingtime = new Decimal(0)
            player.c.anvilslots = player.c.anvilslots.add(1)
            player.c.craftingtimemetal = new Decimal(0)

            player.c.scrapmetal = player.c.scrapmetal.add(player.c.timemetalcosts[0])
            player.c.enhancepowder = player.c.enhancepowder.add(player.c.timemetalcosts[1])
        },
        style: { width: '150px', "min-height": '100px' },
    },
    26: {
        title() { return "Start Crafting" },
        canClick() { return player.c.anvilslots.gte(1) && player.c.craftingspacemetal.eq(0) && player.c.scrapmetal.gte(player.c.spacemetalcosts[0]) && player.c.wires.gte(player.c.spacemetalcosts[1]) },
        unlocked() { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(2) },
        onClick() {
            player.c.craftingspacemetal = new Decimal(1)
            player.c.anvilslots = player.c.anvilslots.sub(1)

            player.c.scrapmetal = player.c.scrapmetal.sub(player.c.spacemetalcosts[0])
            player.c.wires = player.c.wires.sub(player.c.spacemetalcosts[1])
        },
        style: { width: '150px', "min-height": '100px' },
    },
    27: {
        title() { return "Stop Crafting" },
        canClick() { return player.c.craftingspacemetal.eq(1) },
        unlocked() { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(2) },
        onClick() {
            
            player.c.spacemetalcraftingtime = new Decimal(0)
            player.c.anvilslots = player.c.anvilslots.add(1)
            player.c.craftingspacemetal = new Decimal(0)

            player.c.scrapmetal = player.c.scrapmetal.add(player.c.spacemetalcosts[0])
            player.c.wires = player.c.wires.add(player.c.spacemetalcosts[1])
        },
        style: { width: '150px', "min-height": '100px' },
    },
    28: {
        title() { return "<h2>Layer 5: Time <br><h3>Req: 5 Time Metal" },
        canClick() { return player.c.timemetal.gte(5) },
        unlocked() { return player.c.currentcraftingdisplay.eq(1) && player.timelayer.eq(0)},
        onClick() {
            player.timelayer = new Decimal(1)
            // Particle effect
            alert("You have found the fifth layer.")
            alert("The fourth dimension.")
            alert("On the third row.")
            alert("On the second orbiting layer.")
            alert("On your first time crafting.")
            alert("Numbers are truly beautiful, aren't they?")
            createParticles();
            createParticles();
            createParticles();
        },
        style: {   background: '#006609',
        width: '275px', height: '150px',
        position: 'relative',
        overflow: 'hidden', 
        boxShadow: '0 0 20px 10px #006609',
        textShadow: '1px 1px 2px rgba(0.8, 0.8, 0.8, 0.8)', // Text shadow
        border: '4px solid rgba(255, 255, 255, 0.3)', // Glowing border
        },
    },
    29: {
        title() { return format(player.c.timecapsules, 0) + "<img src='resources/timecapsule'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return true },
        unlocked() { return player.timelayer.eq(1) },
        onClick() {
            player.c.currentcraftingdisplay = new Decimal(4)
        },
        style: { "background-color": "#006609", width: '100px', "min-height": '100px' },
    },
    31: {
        title() { return "Start Crafting" },
        canClick() { return player.c.anvilslots.gte(1) && player.c.craftingtimecapsules.eq(0) && player.c.timemetal.gte(player.c.timecapsulecosts[0]) && player.c.spacemetal.gte(player.c.timecapsulecosts[1]) && player.m.points.gte(player.c.timecapsulecosts[2]) },
        unlocked() { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(4) },
        onClick() {
            player.c.craftingtimecapsules = new Decimal(1)
            player.c.anvilslots = player.c.anvilslots.sub(1)

            player.c.timemetal = player.c.timemetal.sub(player.c.timecapsulecosts[0])
            player.c.spacemetal = player.c.spacemetal.sub(player.c.timecapsulecosts[1])
            player.m.points = player.m.points.sub(player.c.timecapsulecosts[2])
        },
        style: { width: '150px', "min-height": '100px' },
    },
    32: {
        title() { return "Stop Crafting" },
        canClick() { return player.c.craftingtimecapsules.eq(1) },
        unlocked() { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(4) },
        onClick() {
            
            player.c.timecapsulecraftingtime = new Decimal(0)
            player.c.anvilslots = player.c.anvilslots.add(1)
            player.c.craftingtimecapsules = new Decimal(0)

            player.c.timemetal = player.c.timemetal.add(player.c.timecapsulecosts[0])
            player.c.spacemetal = player.c.spacemetal.add(player.c.timecapsulecosts[1])
            player.m.points = player.m.points.add(player.c.timecapsulecosts[2])
        },
        style: { width: '150px', "min-height": '100px' },
    },
    33: {
        title() { return "<h2>Layer 6: Space <br><h3>Req: 4 Time Capsules, 6 Space Metal" },
        canClick() { return player.c.timecapsules.gte(4) && player.c.spacemetal.gte(6) },
        unlocked() { return player.c.currentcraftingdisplay.eq(2) && player.timelayer.eq(1) && player.spacelayer.eq(0) },
        onClick() {
            player.spacelayer = new Decimal(1)
            // Particle effect
            alert("You have found the sixth layer.")
            alert("Space. The most important law of reality.")
            alert("Can contain matter, energy, everything.")
            alert("22 layers left. You are more than a fifth done.")
            alert("I can feel it; we are almost free.")
            createParticles();
            createParticles();
            createParticles();
        },
        style: {   background: '#eeefff',
        width: '275px', height: '150px',
        position: 'relative',
        overflow: 'hidden', 
        boxShadow: '0 0 20px 10px #eeefff',
        textShadow: '1px 1px 2px rgba(0.8, 0.8, 0.8, 0.8)', // Text shadow
        border: '4px solid rgba(255, 255, 255, 0.3)', // Glowing border
        },
    },
    34: {
        title() { return format(player.c.spacebuildings, 0) + "<img src='resources/spacebuilding'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return true },
        unlocked() { return player.spacecutscene.eq(0) },
        onClick() {
            player.c.currentcraftingdisplay = new Decimal(5)
        },
        style: { "background-color": "#dfdfdf", width: '100px', "min-height": '100px' },
    },
    35: {
        title() { return "Start Crafting" },
        canClick() { return player.c.anvilslots.gte(1) && player.c.craftingspacebuildings.eq(0) && player.c.spacemetal.gte(player.c.spacebuildingcosts[0]) && player.c.timemetal.gte(player.c.spacebuildingcosts[1]) && player.m.incrementalenergy.gte(player.c.spacebuildingcosts[2]) },
        unlocked() { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(5) },
        onClick() {
            player.c.craftingspacebuildings = new Decimal(1)
            player.c.anvilslots = player.c.anvilslots.sub(1)

            player.c.spacemetal = player.c.spacemetal.sub(player.c.spacebuildingcosts[0])
            player.c.timemetal = player.c.timemetal.sub(player.c.spacebuildingcosts[1])
            player.m.incrementalenergy = player.m.incrementalenergy.sub(player.c.spacebuildingcosts[2])
        },
        style: { width: '150px', "min-height": '100px' },
    },
    36: {
        title() { return "Stop Crafting" },
        canClick() { return player.c.craftingspacebuildings.eq(1) },
        unlocked() { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(5) },
        onClick() {
            
            player.c.spacebuildingcraftingtime = new Decimal(0)
            player.c.anvilslots = player.c.anvilslots.add(1)
            player.c.craftingspacebuildings = new Decimal(0)

            player.c.spacemetal = player.c.spacemetal.add(player.c.spacebuildingcosts[0])
            player.c.timemetal = player.c.timemetal.add(player.c.spacebuildingcosts[1])
            player.m.incrementalenergy = player.m.incrementalenergy.add(player.c.spacebuildingcosts[2])
        },
        style: { width: '150px', "min-height": '100px' },
    },
    37: {
        title() { return "Start Crafting" },
        canClick() { return player.c.anvilslots.gte(1) && player.c.craftingcelestialbatteries.eq(0) && player.c.enhancepowder.gte(player.c.celestialbatterycosts[0]) && player.c.wires.gte(player.c.celestialbatterycosts[1]) && player.c.scrapmetal.gte(player.c.celestialbatterycosts[2]) && player.c.timemetal.gte(player.c.celestialbatterycosts[3])  && player.c.spacemetal.gte(player.c.celestialbatterycosts[4]) && player.c.timecapsules.gte(player.c.celestialbatterycosts[5]) && player.c.spacebuildings.gte(player.c.celestialbatterycosts[6]) },
        unlocked() { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(3) },
        onClick() {
            player.c.craftingcelestialbatteries = new Decimal(1)
            player.c.anvilslots = player.c.anvilslots.sub(1)

            player.c.enhancepowder = player.c.enhancepowder.sub(player.c.celestialbatterycosts[0])
            player.c.wires = player.c.wires.sub(player.c.celestialbatterycosts[1])
            player.c.scrapmetal = player.c.scrapmetal.sub(player.c.celestialbatterycosts[2])
            player.c.timemetal = player.c.timemetal.sub(player.c.celestialbatterycosts[3])
            player.c.spacemetal = player.c.spacemetal.sub(player.c.celestialbatterycosts[4])
            player.c.timecapsules = player.c.timecapsules.sub(player.c.celestialbatterycosts[5])
            player.c.spacebuildings = player.c.spacebuildings.sub(player.c.celestialbatterycosts[6])
        },
        style: { width: '150px', "min-height": '100px' },
    },
    38: {
        title() { return "Stop Crafting" },
        canClick() { return player.c.craftingcelestialbatteries.eq(1) },
        unlocked() { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(3) },
        onClick() {
            
            player.c.celestialbatterycraftingtime = new Decimal(0)
            player.c.anvilslots = player.c.anvilslots.add(1)
            player.c.craftingcelestialbatteries = new Decimal(0)

            player.c.enhancepowder = player.c.enhancepowder.add(player.c.celestialbatterycosts[0])
            player.c.wires = player.c.wires.add(player.c.celestialbatterycosts[1])
            player.c.scrapmetal = player.c.scrapmetal.add(player.c.celestialbatterycosts[2])
            player.c.timemetal = player.c.timemetal.add(player.c.celestialbatterycosts[3])
            player.c.spacemetal = player.c.spacemetal.add(player.c.celestialbatterycosts[4])
            player.c.timecapsules = player.c.timecapsules.add(player.c.celestialbatterycosts[5])
            player.c.spacebuildings = player.c.spacebuildings.add(player.c.celestialbatterycosts[6])
        },
        style: { width: '150px', "min-height": '100px' },
    },
    39: {
        title() { return format(player.c.celestialcells, 0)  + "<img src='resources/celestialcell'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return true },
        unlocked() { return player.m.ce308unlock.eq(1) },
        onClick() {
            player.c.currentresourcedisplay = new Decimal(4)
        },
        style: { "background-color": "#72a4d4", width: '100px', "min-height": '100px' },
    },
    41: {
        title() { return format(player.c.quirklayers, 0) + "<img src='resources/quirklayer'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return true },
        unlocked() { return player.quirkenergycutscene.eq(0) },
        onClick() {
            player.c.currentcraftingdisplay = new Decimal(6)
        },
        style: { "background-color": "#c20282", width: '100px', "min-height": '100px' },
    },
    42: {
        title() { return "Start Crafting" },
        canClick() { return player.c.anvilslots.gte(1) && player.c.craftingquirklayers.eq(0) && player.c.spacemetal.gte(player.c.quirklayercosts[0]) && player.c.enhancepowder.gte(player.c.quirklayercosts[1]) && player.c.celestialcells.gte(player.c.quirklayercosts[2]) },
        unlocked() { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(6) },
        onClick() {
            player.c.craftingquirklayers = new Decimal(1)
            player.c.anvilslots = player.c.anvilslots.sub(1)

            player.c.spacemetal = player.c.spacemetal.sub(player.c.quirklayercosts[0])
            player.c.enhancepowder = player.c.enhancepowder.sub(player.c.quirklayercosts[1])
            player.c.celestialcells = player.c.celestialcells.sub(player.c.quirklayercosts[2])
        },
        style: { width: '150px', "min-height": '100px' },
    },
    43: {
        title() { return "Stop Crafting" },
        canClick() { return player.c.craftingquirklayers.eq(1) },
        unlocked() { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(6) },
        onClick() {
            
            player.c.quirklayercraftingtime = new Decimal(0)
            player.c.anvilslots = player.c.anvilslots.add(1)
            player.c.craftingquirklayers = new Decimal(0)

            player.c.spacemetal = player.c.spacemetal.add(player.c.quirklayercosts[0])
            player.c.enhancepowder = player.c.enhancepowder.add(player.c.quirklayercosts[1])
            player.c.celestialcells = player.c.celestialcells.add(player.c.quirklayercosts[2])
        },
        style: { width: '150px', "min-height": '100px' },
    },
    44: {
        title() { return format(player.c.quirkstars, 0) + "<img src='resources/quirkstar'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return true },
        unlocked() { return player.quirklayer.eq(1) },
        onClick() {
            player.c.currentcraftingdisplay = new Decimal(7)
        },
        style: { "background-color": "#c20282", width: '100px', "min-height": '100px' },
    },
    45: {
        title() { return "Start Crafting" },
        canClick() { return player.c.anvilslots.gte(1) && player.c.craftingquirkstars.eq(0) && player.c.quirklayers.gte(player.c.quirkstarcosts[0]) && player.c.timemetal.gte(player.c.quirkstarcosts[1]) && player.c.celestialcells.gte(player.c.quirkstarcosts[2]) },
        unlocked() { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(7) },
        onClick() {
            player.c.craftingquirkstars = new Decimal(1)
            player.c.anvilslots = player.c.anvilslots.sub(1)

            player.c.quirklayers = player.c.quirklayers.sub(player.c.quirkstarcosts[0])
            player.c.timemetal = player.c.timemetal.sub(player.c.quirkstarcosts[1])
            player.c.celestialcells = player.c.celestialcells.sub(player.c.quirkstarcosts[2])
        },
        style: { width: '150px', "min-height": '100px' },
    },
    46: {
        title() { return "Stop Crafting" },
        canClick() { return player.c.craftingquirkstars.eq(1) },
        unlocked() { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(7) },
        onClick() {
            
            player.c.quirkstarcraftingtime = new Decimal(0)
            player.c.anvilslots = player.c.anvilslots.add(1)
            player.c.craftingquirkstars = new Decimal(0)

            player.c.quirklayers = player.c.quirklayers.add(player.c.quirkstarcosts[0])
            player.c.timemetal = player.c.timemetal.add(player.c.quirkstarcosts[1])
            player.c.celestialcells = player.c.celestialcells.add(player.c.quirkstarcosts[2])
        },
        style: { width: '150px', "min-height": '100px' },
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
    timemetalbar: {
        unlocked() { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(1) },
        direction: RIGHT,
        width: 476,
        height: 50,
        progress() {
            return player.c.timemetalcraftingtime.div(player.c.timemetalcraftingtimereq)
        },
        fillStyle: {
            "background-color": "#ff5500",
        },
        display() {
            return "<h5>" + format(player.c.timemetalcraftingtime) + "/" + format(player.c.timemetalcraftingtimereq) + " crafting power<h5></h5>";
        },
    },
    spacemetalbar: {
        unlocked() { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(2) },
        direction: RIGHT,
        width: 476,
        height: 50,
        progress() {
            return player.c.spacemetalcraftingtime.div(player.c.spacemetalcraftingtimereq)
        },
        fillStyle: {
            "background-color": "#ff5500",
        },
        display() {
            return "<h5>" + format(player.c.spacemetalcraftingtime) + "/" + format(player.c.spacemetalcraftingtimereq) + " crafting power<h5></h5>";
        },
    },
    timecapsulebar: {
        unlocked() { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(4) },
        direction: RIGHT,
        width: 476,
        height: 50,
        progress() {
            return player.c.timecapsulecraftingtime.div(player.c.timecapsulecraftingtimereq)
        },
        fillStyle: {
            "background-color": "#ff5500",
        },
        display() {
            return "<h5>" + format(player.c.timecapsulecraftingtime) + "/" + format(player.c.timecapsulecraftingtimereq) + " crafting power<h5></h5>";
        },
    },
    spacebuildingbar: {
        unlocked() { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(5) },
        direction: RIGHT,
        width: 476,
        height: 50,
        progress() {
            return player.c.spacebuildingcraftingtime.div(player.c.spacebuildingcraftingtimereq)
        },
        fillStyle: {
            "background-color": "#ff5500",
        },
        display() {
            return "<h5>" + format(player.c.spacebuildingcraftingtime) + "/" + format(player.c.spacebuildingcraftingtimereq) + " crafting power<h5></h5>";
        },
    },
    celestialbatterybar: {
        unlocked() { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(3) },
        direction: RIGHT,
        width: 476,
        height: 50,
        progress() {
            return player.c.celestialbatterycraftingtime.div(player.c.celestialbatterycraftingtimereq)
        },
        fillStyle: {
            "background-color": "#ff5500",
        },
        display() {
            return "<h5>" + format(player.c.celestialbatterycraftingtime) + "/" + format(player.c.celestialbatterycraftingtimereq) + " crafting power<h5></h5>";
        },
    },
    quirklayerbar: {
        unlocked() { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(6) },
        direction: RIGHT,
        width: 476,
        height: 50,
        progress() {
            return player.c.quirklayercraftingtime.div(player.c.quirklayercraftingtimereq)
        },
        fillStyle: {
            "background-color": "#ff5500",
        },
        display() {
            return "<h5>" + format(player.c.quirklayercraftingtime) + "/" + format(player.c.quirklayercraftingtimereq) + " crafting power<h5></h5>";
        },
    },
    quirkstarbar: {
        unlocked() { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(7) },
        direction: RIGHT,
        width: 476,
        height: 50,
        progress() {
            return player.c.quirkstarcraftingtime.div(player.c.quirkstarcraftingtimereq)
        },
        fillStyle: {
            "background-color": "#ff5500",
        },
        display() {
            return "<h5>" + format(player.c.quirkstarcraftingtime) + "/" + format(player.c.quirkstarcraftingtimereq) + " crafting power<h5></h5>";
        },
    },
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
    timemetal: {
        unlocked() { return player.c.currentcraftingdisplay.eq(1) && player.c.craftingspacemetal.eq(0)},
        title: "Item Description",
        body() { return "Time, the fourth dimension. This piece of metal contains the energy of this dimension, however in small amounts. This metal is used to make time capsules, which produce time energy. Time energy is the weaker version of eternity..." },         
    }, 
    spacemetal: {
        unlocked() { return player.c.currentcraftingdisplay.eq(2) && player.c.craftingtimemetal.eq(0)},
        title: "Item Description",
        body() { return "Space, three dimensions of our reality. Space metal is used to create space buildings, which can have many benefits, but none are needed right now. Aarex and Jacorb would find many towns of space buildings in the dimensional realm. They knew what they were doing." },         
    }, 
    celestialbattery: {
        unlocked() { return player.c.currentcraftingdisplay.eq(3) },
        title: "Item Description",
        body() { return "This battery, which contains time, space and enhance powers within it. Truly encapsulates the prestige tree's third row. Once it powers up the pseudo-celestial, get ready, because the presence of a celestial caused your predecessor to vanish..." },         
    }, 
    jacorblog14: {
        unlocked() { return player.c.currentcraftingdisplay.eq(2) && player.c.craftingtimemetal.eq(1) },
        title: "Log XIV",
        body() { return "Log XIV: We keep working on the fourth row. One of the layers, ????????, is based on one of the gods, ??????? and ???????? ?????? is based off ???????. ??????? pitches the idea of using ????? for the fifth row. Sounds like a good idea, but I still don't fully trust him. Aarex thinks it's a good idea. Hevipelle finished two more celestials. One holds the power of singularity within and the other remembers. They aren't named yet." },         
    },
    jacorblog16: {
        unlocked() { return player.c.currentcraftingdisplay.eq(1) && player.c.craftingspacemetal.eq(1) },
        title: "Log XVI",
        body() { return "Log XVI: ???????? did it. He gave up his position and gave it to ????. It makes sense. ???????? said he wanted to do other things in other realms. Makes sense. He's been very interested in researching the ??????? ?????. And ???? has been very interested in becoming a ?????. It's all good." },         
    },
    timecapsule: {
        unlocked() { return player.c.currentcraftingdisplay.eq(4) },
        title: "Item Description",
        body() { return "Time capsules contain and produce time energy. They are durable and are very useful. Time energy is a very good source of incremental power. Getting time energy into a singularity can produce eternal remnants..." },         
    }, 
    spacebuilding: {
        unlocked() { return player.c.currentcraftingdisplay.eq(5) },
        title: "Item Description",
        body() { return "Space buildings take up space, provided by space energy. You can give them specialized functions that will boost certain aspects of the prestige tree. However it will only serve one purpose right now..." },         
    }, 
    celestialcells: {
        unlocked() { return player.c.currentresourcedisplay.eq(4) },
        title: "Item Description",
        body() { return "Celestials are made out of these cells. Hevipelle designed it to be durable and regenerative. Has strange manipulative properties to incremental power. Can also improve quality of life. About the size of an apple. Really shows the true size of celestials..." },         
    }, 
    quirklayer: {
        unlocked() { return player.c.currentcraftingdisplay.eq(6) },
        title: "Item Description",
        body() { return "Quirk layers are made out of many quirks that form folds on top of each other. They produce quirk energy. Its state of matter is unknown, as it seems to clip through solid objects and float on air, whilst taking up no mass." },         
    }, 
    quirkstar: {
        unlocked() { return player.c.currentcraftingdisplay.eq(7) },
        title: "Item Description",
        body() { return "Quirk stars are made out of quirk layers and other materials. They are more powerful than quirk layers, as they generate quirk radiation which produces quirk energy. Sitra was the first to design such technology." },         
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
        ["raw-html", function () { return player.craftingscene.eq(6) ? "<h1>It's okay, because I am very, very talented." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(7) ? "<h1>My skill is an art like no other; I have mastered the art of crafting." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(8) ? "<h1>I have even been appointed by high incremental officials to help improve their tech." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(9) ? "<h1>Me and my brother Sitra (celestial of machines) have crafted the standard path." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(10) ? "<h1>Sitra has crafted a celestial like none other. A pseudo-celestial." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(11) ? "<h1>A completely mechanical celestial made by other celestials. How meta." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(12) ? "<h1>You will actually fight this celestial very, very, soon." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(13) ? "<h1>Sitra has requested me to make the battery that powers the celestial." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(14) ? "<h1>However, I didn't make it. It's up to YOU to make the battery." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(15) ? "<h1>Well, you must have good crafting skills if you intend to be savior of the multiverse." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
        ["raw-html", function () { return player.craftingscene.eq(16) ? "<h1>You should be grateful. Your predecessor didn't receive this much care and attention." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
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
"Anvil": {
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
            ["raw-html", function () { return player.crafting2cutscene.eq(0) ? "<h3>" + formatWhole(player.c.anvilslots) + "<h3>/" + formatWhole(player.c.maxanvilslots) + " slots": "" }, { "color": "#ff5500", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) ? "<h3>+" + format(player.c.craftingspeed) + " crafting power per second": "" }, { "color": "#ff5500", "font-size": "18px", "font-family": "monospace" }],
    ["raw-html", function () { return player.crafting2cutscene.eq(1) ? " <div class=spinning-symbol>☭</div>" : "" }],
    ["blank", "25px"],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(1) ? "<h2>You have " + formatWhole(player.c.timemetal) + "<h2> time metal (+" + formatWhole(player.c.timemetaltoget) + ")": "" }, { "color": "#006609", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(2) ? "<h2>You have " + formatWhole(player.c.spacemetal) + "<h2> space metal (+" + formatWhole(player.c.spacemetaltoget) + ")": "" }, { "color": "#dfdfdf", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(4) ? "<h2>You have " + formatWhole(player.c.timecapsules) + "<h2> time capsules (+" + formatWhole(player.c.timecapsulestoget) + ")<br><h5>(Check time layer on prestige tree for details)": "" }, { "color": "#006609", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(5) ? "<h2>You have " + formatWhole(player.c.spacebuildings) + "<h2> space buildings (+" + formatWhole(player.c.spacebuildingstoget) + ")<br><h5>(Check space layer on prestige tree for details)": "" }, { "color": "#dfdfdf", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(3) ? "<h2>You have " + formatWhole(player.c.celestialbatteries) + "<h2> celestial batteries (+" + formatWhole(player.c.spacebuildingstoget) + ")<br><h5>(Buy the standard path upgrade to unlock the celestial)": "" }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(6) ? "<h2>You have " + formatWhole(player.c.quirklayers) + "<h2> quirk layers (+" + formatWhole(player.c.quirklayerstoget) + ")<br><h5>(Check the quirk energy tab in the celestial tab)": "" }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(7) ? "<h2>You have " + formatWhole(player.c.quirkstars) + "<h2> quirk stars (+" + formatWhole(player.c.quirkstarstoget) + ")<br><h5>(Check the quirk prestige tree tab)": "" }, { "color": "#c20282", "font-size": "18px", "font-family": "monospace" }],
            ["blank", "25px"],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(1) ? "<h2>Recipe:" : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(1) ? "<h4>" + formatWhole(player.c.timemetalcosts[0]) + " scrap metal (you have " + formatWhole(player.c.scrapmetal) + ")": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(1) ? "<h4>" + formatWhole(player.c.timemetalcosts[1]) + " enhance powder (you have " + formatWhole(player.c.enhancepowder) + ")": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(2) ? "<h2>Recipe:" : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(2) ? "<h4>" + formatWhole(player.c.spacemetalcosts[0]) + " scrap metal (you have " + formatWhole(player.c.scrapmetal) + ")": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(2) ? "<h4>" + formatWhole(player.c.spacemetalcosts[1]) + " wires (you have " + formatWhole(player.c.wires) + ")": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(4) ? "<h2>Recipe:" : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(4) ? "<h4>" + formatWhole(player.c.timecapsulecosts[0]) + " time metal (you have " + formatWhole(player.c.timemetal) + ")": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(4) ? "<h4>" + formatWhole(player.c.timecapsulecosts[1]) + " space metal (you have " + formatWhole(player.c.spacemetal) + ")": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(4) ? "<h4>" + formatWhole(player.c.timecapsulecosts[2]) + " incremental power (you have " + formatWhole(player.m.points) + ")": "" }, { "font-style": "italic", "color": "#8a00a9", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(5) ? "<h2>Recipe:" : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(5) ? "<h4>" + formatWhole(player.c.spacebuildingcosts[0]) + " space metal (you have " + formatWhole(player.c.spacemetal) + ")": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(5) ? "<h4>" + formatWhole(player.c.spacebuildingcosts[1]) + " time metal (you have " + formatWhole(player.c.timemetal) + ")": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(5) ? "<h4>" + formatWhole(player.c.spacebuildingcosts[2]) + " incremental energy (you have " + formatWhole(player.m.incrementalenergy) + ")": "" }, { "font-style": "italic", "color": "#ffffaa", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(3) ? "<h2>Recipe:" : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(3) ? "<h4>" + formatWhole(player.c.celestialbatterycosts[0]) + " enhance powder (you have " + formatWhole(player.c.enhancepowder) + ")": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(3) ? "<h4>" + formatWhole(player.c.celestialbatterycosts[1]) + " wires (you have " + formatWhole(player.c.wires) + ")": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(3) ? "<h4>" + formatWhole(player.c.celestialbatterycosts[2]) + " scrap metal (you have " + formatWhole(player.c.scrapmetal) + ")": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(3) ? "<h4>" + formatWhole(player.c.celestialbatterycosts[3]) + " time metal (you have " + formatWhole(player.c.timemetal) + ")": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(3) ? "<h4>" + formatWhole(player.c.celestialbatterycosts[4]) + " space metal (you have " + formatWhole(player.c.spacemetal) + ")": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(3) ? "<h4>" + formatWhole(player.c.celestialbatterycosts[5]) + " time capsules (you have " + formatWhole(player.c.timecapsules) + ")": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(3) ? "<h4>" + formatWhole(player.c.celestialbatterycosts[6]) + " space buildings (you have " + formatWhole(player.c.spacebuildings) + ")": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(6) ? "<h2>Recipe:" : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(6) ? "<h4>" + formatWhole(player.c.quirklayercosts[0]) + " space metal (you have " + formatWhole(player.c.spacemetal) + ")": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(6) ? "<h4>" + formatWhole(player.c.quirklayercosts[1]) + " enhance powder (you have " + formatWhole(player.c.enhancepowder) + ")": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(6) ? "<h4>" + formatWhole(player.c.quirklayercosts[2]) + " celestial cells (you have " + formatWhole(player.c.celestialcells) + ")": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(7) ? "<h2>Recipe:" : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(7) ? "<h4>" + formatWhole(player.c.quirkstarcosts[0]) + " quirk layers (you have " + formatWhole(player.c.quirklayers) + ")": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(7) ? "<h4>" + formatWhole(player.c.quirkstarcosts[1]) + " time metal (you have " + formatWhole(player.c.timemetal) + ")": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(7) ? "<h4>" + formatWhole(player.c.quirkstarcosts[2]) + " celestial cells (you have " + formatWhole(player.c.celestialcells) + ")": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["blank", "25px"],
            ["row", [["clickable", 24], ["clickable", 25], ["bar", "timemetalbar"]]],
            ["row", [["clickable", 26], ["clickable", 27], ["bar", "spacemetalbar"]]],
            ["row", [["clickable", 31], ["clickable", 32] ,["bar", "timecapsulebar"]]],
            ["row", [["clickable", 35], ["clickable", 36], ["bar", "spacebuildingbar"]]],
            ["row", [["clickable", 37], ["clickable", 38] ,["bar", "celestialbatterybar"]]],
            ["row", [["clickable", 42], ["clickable", 43], ["bar", "quirklayerbar"]]],
            ["row", [["clickable", 45], ["clickable", 46], ["bar", "quirkstarbar"]]],
            ["blank", "25px"],
            ["row", [["clickable", 21], ["clickable", 29], ["clickable", 22], ["clickable", 34], ["clickable", 23], ["clickable", 41], ["clickable", 44]]],
            ["blank", "25px"],          
            ["row", [["clickable", 28], ["infobox", "jacorblog16"], ["infobox", "timemetal"]]],
            ["row", [["clickable", 33], ["infobox", "jacorblog14"], ["infobox", "spacemetal"]]],
            ["infobox", "celestialbattery"],
            ["infobox", "timecapsule"],
            ["infobox", "spacebuilding"],
            ["infobox", "quirklayer"],
            ["infobox", "quirkstar"],
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
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentresourcedisplay.eq(4) ? "<h2>You have " + formatWhole(player.c.celestialcells) + "<h2> celestial cells. (+" + formatWhole(player.c.celestialcellstoget) + ")": "" }, { "color": "#72a4d4", "font-size": "18px", "font-family": "monospace" }],
            ["blank", "25px"],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentresourcedisplay.eq(1) ? "<h3>In order to earn scrap metal, one must NOT produce prestige energy. (Based on machines)": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentresourcedisplay.eq(2) ? "<h3>In order to earn wires, one must NOT produce prestige machines. (Based on prestige energy)": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentresourcedisplay.eq(3) ? "<h3>In order to earn enhance powder, one must NOT let enhanced prestige points decay to nothing. (Based on enhance points)": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentresourcedisplay.eq(4) ? "<h3>In order to earn celestial cells, one must FEED the pseudo-celestial. (Based on celestial energy)": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["blank", "25px"],
            ["row", [["clickable", 17], ["clickable", 18], ["clickable", 19], ["clickable", 39]]],
            ["blank", "25px"],
            ["infobox", "scrapmetal"],
            ["infobox", "wires"],
            ["infobox", "enhancepowder"],
            ["infobox", "celestialcells"],
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

