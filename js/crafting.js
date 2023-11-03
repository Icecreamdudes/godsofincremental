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
    currentforgedisplay: new Decimal(0),
    unlockedcraftingpoints: new Decimal(0),

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
    solaritycoal: new Decimal(0),
    solaritycoaltoget: new Decimal(0),

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

    //Dimensional Realm Ticket
    dimensionaltickets: new Decimal(0),
    dimensionalticketstoget: new Decimal(1),
    dimensionalticketcosts: [new Decimal(6), new Decimal(6), new Decimal(5)],
    craftingdimensionaltickets: new Decimal(0),
    dimensionalticketcraftingtime: new Decimal(0),
    dimensionalticketcraftingtimereq: new Decimal(120),
    
    //Solar Forge
    solarity: new Decimal(0),
    solaritycapacity: new Decimal(50),
    solaritytoget: new Decimal(10),
    currentlysmelting: new Decimal(0),

    //Solar Sand
    solarsand: new Decimal(0),
    solarsandtoget: new Decimal(1),
    solarsandcosts: [new Decimal(5), new Decimal(1)],
    craftingsolarsand: new Decimal(0),
    solarsandcraftingtime: new Decimal(0),
    solarsandcraftingtimereq: new Decimal(200),
    incrementalpowerdrain: new Decimal(10000),
    solaritydrainsolarsand: new Decimal(0.2),

    //Anvil
    anvils: new Decimal(0),
    anvilstoget: new Decimal(1),
    anvilcosts: [new Decimal(12), new Decimal(12), new Decimal(5), new Decimal(1)],
    craftinganvils: new Decimal(0),
    anvilcraftingtime: new Decimal(0),
    anvilcraftingtimereq: new Decimal(600),
    craftingpointsdrain: new Decimal(0.3),
    solaritydrainanvil: new Decimal(0.3),
    spentanvils: new Decimal(0), 
    totalanvils: new Decimal(0), 

    //Crafting Points
    sacrificedsand: new Decimal(0),
    craftingpoints: new Decimal(0),
    craftingpointstoget: new Decimal(0),

    //Automation
    scrapmetalanvils: new Decimal(0),
    scrapmetaltogetanvil: new Decimal(1),
    scrapmetalcraftingpower: new Decimal(0),
    scrapmetalcraftingpowerreq: new Decimal(750),
    scrapmetalcraftingpowerpersecond: new Decimal(0),
    wirecraftingpower: new Decimal(0),
    wireanvils: new Decimal(0),
    wirestogetanvil: new Decimal(1),
    wirescraftingpowerreq: new Decimal(500),
    wirescraftingpowerpersecond: new Decimal(0),
    enhancepowdercraftingpower: new Decimal(0),
    enhancepowderanvils: new Decimal(0),
    enhancepowdertogetanvil: new Decimal(1),
    enhancepowdercraftingpowerreq: new Decimal(500),
    enhancepowdercraftingpowerpersecond: new Decimal(0),
    celestialcellanvils: new Decimal(0),
    celestialcelltogetanvil: new Decimal(1),
    celestialcellcraftingpower: new Decimal(0),
    celestialcellcraftingpowerreq: new Decimal(5000),
    celestialcellcraftingpowerpersecond: new Decimal(0),

    //Jacorbs
    jacorborbs: new Decimal(0),
    jacorborbstoget: new Decimal(1),
    jacorborbcosts: [new Decimal(100), new Decimal(100), new Decimal(10), new Decimal(1)],
    craftingjacorborbs: new Decimal(0),
    jacorborbcraftingtime: new Decimal(0),
    jacorborbcraftingtimereq: new Decimal(2000),
    jacorbianrunedrain: new Decimal(0.25),
    solaritydrainjacorborbs: new Decimal(2),

    //enhance medals
    enhancemedals: new Decimal(0),
    enhancemedalstoget: new Decimal(1),
    enhancemedalcosts: [new Decimal(1000), new Decimal(1000), new Decimal(1000), new Decimal(300), new Decimal(25), new Decimal(25), new Decimal(10), new Decimal(10)],
    craftingenhancemedals: new Decimal(0),
    enhancemedalcraftingtime: new Decimal(0),
    enhancemedalcraftingtimereq: new Decimal(20000),
    puremachinedrain: new Decimal(100),
    solaritydraincraftingmedals: new Decimal(6),
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
    player.c.scrapmetaltoget = player.i.prestigemachines.pow(0.4).mul(2).mul(player.c.scrapmetalcancel).mul(buyableEffect("h", 14)).floor()

    if (player.i.prestigemachines.gt(0))
    {
        player.c.wirescancel = new Decimal(0)
    }
    player.c.wirestoget = player.i.prestigeenergy.add(1).slog().pow(4.5).mul(2).mul(player.c.wirescancel).mul(buyableEffect("h", 15)).floor()

    if (player.i.enhancedprestigepoints.gt(0) && player.i.enhancedprestigepoints.lt(1))
    {
        player.c.enhancepowdercancel = new Decimal(0)
    }
    player.c.enhancepowdertoget = player.i.enhancepoints.add(1).slog().pow(5).mul(3).mul(player.c.enhancepowdercancel).mul(buyableEffect("h", 16)).floor()

    player.c.celestialcellstoget = player.i.celestialenergy.mul(100).add(1).slog().pow(2).mul(3).mul(buyableEffect("h", 17)).floor()

    //ANVIL
    let craftingspeed = new Decimal(1)
    craftingspeed = new Decimal(1)
    if (hasUpgrade("m", 21)) craftingspeed = craftingspeed.mul(upgradeEffect("m", 21))
    craftingspeed = craftingspeed.mul(buyableEffect("sb", 11))
    craftingspeed = craftingspeed.mul(player.sg.supergeneratorpowereffect)
    craftingspeed = craftingspeed.mul(buyableEffect("h", 13))
    if (player.c.anvilslots.gt(player.c.maxanvilslots)) player.c.maxanvilslots = player.c.anvilslots
    craftingspeed = craftingspeed.mul(buyableEffect("c", 11))
    craftingspeed = craftingspeed.mul(buyableEffect("h", 37))
    craftingspeed = craftingspeed.mul(buyableEffect("h", 65))
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
        player.c.craftingpoints = player.c.craftingpoints.add(player.c.craftingpointstoget.mul(player.c.timemetalcraftingtimereq))
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
        player.c.craftingpoints = player.c.craftingpoints.add(player.c.craftingpointstoget.mul(player.c.spacemetalcraftingtimereq))
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
        player.c.craftingpoints = player.c.craftingpoints.add(player.c.craftingpointstoget.mul(player.c.timecapsulecraftingtimereq))
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
        player.c.craftingpoints = player.c.craftingpoints.add(player.c.craftingpointstoget.mul(player.c.spacebuildingcraftingtimereq))
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
        player.c.craftingpoints = player.c.craftingpoints.add(player.c.craftingpointstoget.mul(player.c.celestialbatterycraftingtimereq))
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
        player.c.craftingpoints = player.c.craftingpoints.add(player.c.craftingpointstoget.mul(player.c.quirklayercraftingtimereq))
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
        player.c.craftingpoints = player.c.craftingpoints.add(player.c.craftingpointstoget.mul(player.c.quirkstarcraftingtimereq))
    }

    player.c.dimensionalticketcosts[0] = new Decimal(6)
    player.c.dimensionalticketcosts[1] = new Decimal(6)
    player.c.dimensionalticketcosts[2] = new Decimal(5)
    if (player.c.craftingdimensionaltickets.eq(1))
    {
        player.c.dimensionalticketcraftingtime = player.c.dimensionalticketcraftingtime.add(player.c.craftingspeed.mul(delta))
    }
    player.c.dimensionalticketcraftingtimereq = new Decimal(120)
    player.c.dimensionalticketstoget = new Decimal(1)
    if (player.c.dimensionalticketcraftingtime.gte(player.c.dimensionalticketcraftingtimereq))
    {
        player.c.dimensionaltickets = player.c.dimensionaltickets.add(player.c.dimensionalticketstoget)
        player.c.craftingdimensionaltickets = new Decimal(0)
        player.c.dimensionalticketcraftingtime = new Decimal(0)
        player.c.anvilslots = player.c.anvilslots.add(1)
        player.c.craftingpoints = player.c.craftingpoints.add(player.c.craftingpointstoget.mul(player.c.dimensionalticketcraftingtimereq))
    }

    //solar forge
     
    if (player.solarforgescene.eq(19)) {
        player.solarforgecutscene = new Decimal(0)
        player.inartiscutscene = new Decimal(0)
    }
    if (player.solarforgescene.gt(0) && player.solarforgecutscene.eq(1))
    {
        player.inartiscutscene = new Decimal(1)
    }

    player.c.solaritytoget = new Decimal(10)
    player.c.solaritytoget = player.c.solaritytoget.mul(buyableEffect("c", 13))
    player.c.solaritycapacity = new Decimal(50)
    player.c.solaritycapacity = player.c.solaritycapacity.mul(buyableEffect("c", 12))
    player.c.solaritycapacity = player.c.solaritycapacity.mul(buyableEffect("h", 67))
    if (player.c.solarity.gt(player.c.solaritycapacity)) player.c.solarity = player.c.solaritycapacity

    //sand
    player.c.solarsandcosts[0] = new Decimal(5)
    player.c.solarsandcosts[1] = new Decimal(1)
    player.c.solaritydrainsolarsand = new Decimal(0.2)
    player.c.incrementalpowerdrain = new Decimal(10000)
    if (player.c.craftingsolarsand.eq(1) && player.c.solarity.gt(0.2) && player.m.points.gt(10000))
    {
        player.c.solarsandcraftingtime = player.c.solarsandcraftingtime.add(player.c.craftingspeed.mul(delta))
        player.c.solarity = player.c.solarity.sub(player.c.solaritydrainsolarsand.mul(delta))
        player.m.points = player.m.points.sub(player.c.incrementalpowerdrain.mul(delta))
    }
    player.c.solarsandcraftingtimereq = new Decimal(200)
    player.c.solarsandtoget = new Decimal(1)
    if (player.c.solarsandcraftingtime.gte(player.c.solarsandcraftingtimereq))
    {
        player.c.solarsand = player.c.solarsand.add(player.c.solarsandtoget)
        player.c.unlockedcraftingpoints = new Decimal(1)
        player.c.craftingsolarsand = new Decimal(0)
        player.c.solarsandcraftingtime = new Decimal(0)
        
        player.c.craftingpoints = player.c.craftingpoints.add(player.c.craftingpointstoget.mul(player.c.solarsandcraftingtimereq))
    }

    //anvil
    player.c.anvilcosts[0] = player.c.totalanvils.add(1).pow(2).mul(12).floor()
    player.c.anvilcosts[1] = player.c.totalanvils.add(1).pow(2).mul(12).floor()
    player.c.anvilcosts[2] = player.c.totalanvils.add(1).pow(1.5).mul(5).floor()
    player.c.anvilcosts[3] = player.c.totalanvils.add(1).pow(1.2).floor()
    player.c.solaritydrainanvil = player.c.totalanvils.add(1).pow(1.5).mul(0.30)
    player.c.craftingpointsdrain = player.c.totalanvils.add(1).pow(2).mul(0.30)
    if (player.c.craftinganvils.eq(1) && player.c.solarity.gt(player.c.solaritydrainanvil) && player.c.craftingpoints.gt(player.c.craftingpointsdrain))
    {
        player.c.anvilcraftingtime = player.c.anvilcraftingtime.add(player.c.craftingspeed.mul(delta))
        player.c.solarity = player.c.solarity.sub(player.c.solaritydrainanvil.mul(delta))
        player.c.craftingpoints = player.c.craftingpoints.sub(player.c.craftingpointsdrain.mul(delta))
    }
    player.c.anvilcraftingtimereq = player.c.totalanvils.add(1).pow(1.5).mul(600)
    player.c.anvilstoget = new Decimal(1)
    if (player.c.anvilcraftingtime.gte(player.c.anvilcraftingtimereq))
    {
        player.c.anvils = player.c.anvils.add(player.c.anvilstoget)
        player.c.craftinganvils = new Decimal(0)
        player.c.anvilcraftingtime = new Decimal(0)
        
        player.c.craftingpoints = player.c.craftingpoints.add(player.c.craftingpointstoget.mul(player.c.anvilcraftingtime))
    }

    //crafting points
    player.c.craftingpointstoget = player.c.sacrificedsand.div(1000)
    player.c.craftingpointstoget = player.c.craftingpointstoget.mul(buyableEffect("h", 39))
    player.c.craftingpointstoget = player.c.craftingpointstoget.mul(buyableEffect("h", 66))

    //automation
    player.c.totalanvils = player.c.anvils.add(player.c.spentanvils)
    player.c.spentanvils = player.c.scrapmetalanvils.add(player.c.wireanvils.add(player.c.enhancepowderanvils.add(player.c.celestialcellanvils)))

    player.c.scrapmetalcraftingpowerpersecond = player.c.craftingspeed.mul(player.c.scrapmetalanvils.mul(0.5))
    player.c.wirecraftingpowerpersecond = player.c.craftingspeed.mul(player.c.wireanvils.mul(0.5))
    player.c.enhancepowdercraftingpowerpersecond = player.c.craftingspeed.mul(player.c.enhancepowderanvils.mul(0.5))
    player.c.celestialcellcraftingpowerpersecond = player.c.craftingspeed.mul(player.c.celestialcellanvils.mul(0.25))
    
    player.c.scrapmetalcraftingpower = player.c.scrapmetalcraftingpower.add(player.c.scrapmetalcraftingpowerpersecond.mul(delta))
    player.c.wirecraftingpower = player.c.wirecraftingpower.add(player.c.wirecraftingpowerpersecond.mul(delta))
    player.c.enhancepowdercraftingpower = player.c.enhancepowdercraftingpower.add(player.c.enhancepowdercraftingpowerpersecond.mul(delta))
    player.c.celestialcellcraftingpower = player.c.celestialcellcraftingpower.add(player.c.celestialcellcraftingpowerpersecond.mul(delta))

    player.c.scrapmetalcraftingpowerreq = new Decimal(750)
    player.c.wirecraftingpowerreq = new Decimal(500)
    player.c.enhancepowdercraftingpowerreq = new Decimal(500)
    player.c.celestialcellcraftingpowerreq = new Decimal(5000)

    player.c.scrapmetaltogetanvil = new Decimal(1)
    player.c.wirestogetanvil = new Decimal(1)
    player.c.enhancepowdertogetanvil = new Decimal(1)
    player.c.celestialcellstogetanvil = new Decimal(1)

    if (player.c.scrapmetalcraftingpower.gte(player.c.scrapmetalcraftingpowerreq))
    {
        player.c.scrapmetal = player.c.scrapmetal.add(player.c.scrapmetaltogetanvil)
        player.c.scrapmetalcraftingpower = new Decimal(0)
    }
    if (player.c.wirecraftingpower.gte(player.c.wirecraftingpowerreq))
    {
        player.c.wires = player.c.wires.add(player.c.wirestogetanvil)
        player.c.wirecraftingpower = new Decimal(0)
    }
    if (player.c.enhancepowdercraftingpower.gte(player.c.enhancepowdercraftingpowerreq))
    {
        player.c.enhancepowder = player.c.enhancepowder.add(player.c.enhancepowdertogetanvil)
        player.c.enhancepowdercraftingpower = new Decimal(0)
    }
    if (player.c.celestialcellcraftingpower.gte(player.c.celestialcellcraftingpowerreq))
    {
        player.c.celestialcells = player.c.celestialcells.add(player.c.celestialcellstogetanvil)
        player.c.celestialcellcraftingpower = new Decimal(0)
    }

    //jacorb orbs
    player.c.jacorborbcosts[0] = new Decimal(100)
    player.c.jacorborbcosts[1] = new Decimal(100)
    player.c.jacorborbcosts[2] = new Decimal(10)
    player.c.jacorborbcosts[3] = new Decimal(1)
    player.c.jacorbianrunedrain = new Decimal(0.25)
    player.c.solaritydrainjacorborbs = new Decimal(2)
    if (player.c.craftingjacorborbs.eq(1) && player.c.solarity.gt(2) && player.i.jacorbianrunes.gt(0.25))
    {
        player.c.jacorborbcraftingtime = player.c.jacorborbcraftingtime.add(player.c.craftingspeed.mul(delta))
        player.c.solarity = player.c.solarity.sub(player.c.solaritydrainjacorborbs.mul(delta))
        player.i.jacorbianrunes = player.i.jacorbianrunes.sub(player.c.jacorbianrunedrain.mul(delta))
    }
    player.c.jacorborbcraftingtimereq = new Decimal(2000)
    player.c.jacorborbstoget = new Decimal(1)
    if (player.c.jacorborbcraftingtime.gte(player.c.jacorborbcraftingtimereq))
    {
        player.c.jacorborbs = player.c.jacorborbs.add(player.c.jacorborbstoget)
        player.c.craftingjacorborbs = new Decimal(0)
        player.c.jacorborbcraftingtime = new Decimal(0)
        
        player.c.craftingpoints = player.c.craftingpoints.add(player.c.craftingpointstoget.mul(player.c.jacorborbcraftingtimereq))
    }

    //enhance medal
    player.c.enhancemedalcosts[0] = new Decimal(1000)
    player.c.enhancemedalcosts[1] = new Decimal(1000)
    player.c.enhancemedalcosts[2] = new Decimal(1000)
    player.c.enhancemedalcosts[3] = new Decimal(300)
    player.c.enhancemedalcosts[4] = new Decimal(25)
    player.c.enhancemedalcosts[5] = new Decimal(25)
    player.c.enhancemedalcosts[6] = new Decimal(10)
    player.c.enhancemedalcosts[7] = new Decimal(10)
    player.c.puremachinedrain = new Decimal(100)
    player.c.solaritydrainenhancemedals = new Decimal(6)
    if (player.c.craftingenhancemedals.eq(1) && player.c.solarity.gt(6) && player.i.puremachines.gt(100))
    {
        player.c.enhancemedalcraftingtime = player.c.enhancemedalcraftingtime.add(player.c.craftingspeed.mul(delta))
        player.c.solarity = player.c.solarity.sub(player.c.solaritydrainenhancemedals.mul(delta))
        player.i.puremachines = player.i.puremachines.sub(player.c.puremachinedrain.mul(delta))
    }
    player.c.enhancemedalcraftingtimereq = new Decimal(20000)
    player.c.enhancemedalstoget = new Decimal(1)
    if (player.c.enhancemedalcraftingtime.gte(player.c.enhancemedalcraftingtimereq))
    {
        player.c.enhancemedals = player.c.enhancemedals.add(player.c.enhancemedalstoget)
        player.c.craftingenhancemedals = new Decimal(0)
        player.c.enhancemedalcraftingtime = new Decimal(0)
        
        player.c.craftingpoints = player.c.craftingpoints.add(player.c.craftingpointstoget.mul(player.c.enhancemedalcraftingtimereq))
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
    47: {
        title() { return format(player.c.dimensionaltickets, 0) + "<img src='resources/dimensionalticket'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return true },
        unlocked() { return player.defeatedce308.eq(1) },
        onClick() {
            player.c.currentcraftingdisplay = new Decimal(8)
        },
        style: { "background-color": "#90EE90", width: '100px', "min-height": '100px' },
    },
    48: {
        title() { return "Start Crafting" },
        canClick() { return player.c.anvilslots.gte(1) && player.c.craftingdimensionaltickets.eq(0) && player.c.timemetal.gte(player.c.dimensionalticketcosts[0]) && player.c.spacemetal.gte(player.c.dimensionalticketcosts[1]) && player.c.celestialcells.gte(player.c.dimensionalticketcosts[2]) },
        unlocked() { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(8) },
        onClick() {
            player.c.craftingdimensionaltickets = new Decimal(1)
            player.c.anvilslots = player.c.anvilslots.sub(1)

            player.c.timemetal = player.c.timemetal.sub(player.c.dimensionalticketcosts[0])
            player.c.spacemetal = player.c.spacemetal.sub(player.c.dimensionalticketcosts[1])
            player.c.celestialcells = player.c.celestialcells.sub(player.c.dimensionalticketcosts[2])
        },
        style: { width: '150px', "min-height": '100px' },
    },
    49: {
        title() { return "Stop Crafting" },
        canClick() { return player.c.craftingdimensionaltickets.eq(1) },
        unlocked() { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(8) },
        onClick() {
            
            player.c.dimensionalticketcraftingtime = new Decimal(0)
            player.c.anvilslots = player.c.anvilslots.add(1)
            player.c.craftingdimensionaltickets = new Decimal(0)

            player.c.timemetal = player.c.timemetal.add(player.c.dimensionalticketcosts[0])
            player.c.spacemetal = player.c.spacemetal.add(player.c.dimensionalticketcosts[1])
            player.c.celestialcells = player.c.celestialcells.add(player.c.dimensionalticketcosts[2])
        },
        style: { width: '150px', "min-height": '100px' },
    },
    51: {
        title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.solarforgecutscene.eq(1) },
        unlocked() { return player.solarforgescene.lt(19) },
        onClick() {
            player.solarforgescene = player.solarforgescene.add(1)
        },
    },
    52: {
        title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.solarforgecutscene.eq(1) },
        unlocked() { return player.solarforgescene.lt(19) && player.solarforgescene.neq(0) },
        onClick() {
            player.solarforgescene = player.solarforgescene.sub(1)
        },
    },
    53: {
        title() { return format(player.c.solaritycoal, 0)  + "<img src='resources/solaritycoal.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return true },
        unlocked() { return player.solarforgecutscene.eq(0) },
        onClick() {
            player.c.currentresourcedisplay = new Decimal(5)
        },
        style: { background: "radial-gradient(#ffcd00, #ff4300)", width: '100px', "min-height": '100px' },
    },
    54: {
        title() { return "Turn solarity coal into solarity." },
        canClick() { return player.c.solaritycoal.gt(0) && player.c.solarity.lt(player.c.solaritycapacity) },
        unlocked() { return player.solarforgecutscene.eq(0) },
        onClick() {
            player.c.solaritycoal = player.c.solaritycoal.sub(1)
            player.c.solarity = player.c.solarity.add(player.c.solaritytoget)
        },
        style: { background: "radial-gradient(#ffcd00, #ff4300)", width: '200px', "min-height": '70px' },
    },
    55: {
        title() { return format(player.c.solarsand, 0)  + "<img src='resources/solarsand.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return true },
        unlocked() { return player.solarforgecutscene.eq(0) },
        onClick() {
            player.c.currentforgedisplay = new Decimal(1)
        },
        style: { background: "radial-gradient(#ffcd00, #ff4300)", width: '100px', "min-height": '100px' },
    },
    56: {
        title() { return "Start Crafting" },
        canClick() { return player.c.craftingsolarsand.eq(0) && player.c.enhancepowder.gte(player.c.solarsandcosts[0]) && player.c.celestialcells.gte(player.c.solarsandcosts[1]) && player.c.solarity.gt(0) && player.m.points.gt(0) },
        unlocked() { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(1) },
        onClick() {
            player.c.craftingsolarsand = new Decimal(1)

            player.c.enhancepowder = player.c.enhancepowder.sub(player.c.solarsandcosts[0])
            player.c.celestialcells = player.c.celestialcells.sub(player.c.solarsandcosts[1])
        },
        style: { width: '150px', "min-height": '100px' },
    },
    57: {
        title() { return "Stop Crafting" },
        canClick() { return player.c.craftingsolarsand.eq(1) },
        unlocked() { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(1) },
        onClick() {
            player.c.solarsandcraftingtime = new Decimal(0)
            player.c.craftingsolarsand = new Decimal(0)

            player.c.enhancepowder = player.c.enhancepowder.add(player.c.solarsandcosts[0])
            player.c.celestialcells = player.c.celestialcells.add(player.c.solarsandcosts[1])
        },
        style: { width: '150px', "min-height": '100px' },
    },
    58: {
        title() { return "Sacrifice your solar sand." },
        canClick() { return player.c.solarsand.gt(0)},
        unlocked() { return true },
        onClick() {
            player.c.sacrificedsand = player.c.sacrificedsand.add(player.c.solarsand)
            player.c.solarsand = new Decimal(0)
        },
        style: { width: '200px', "min-height": '70px' },
    },
    59: {
        title() { return "Start Crafting" },
        canClick() { return player.c.craftinganvils.eq(0) && player.c.timemetal.gte(player.c.anvilcosts[0]) && player.c.spacemetal.gte(player.c.anvilcosts[1]) && player.c.solarsand.gte(player.c.anvilcosts[2]) && player.c.celestialbatteries.gte(player.c.anvilcosts[3]) && player.c.solarity.gt(0) && player.c.craftingpoints.gt(0) },
        unlocked() { return hasUpgrade("c", 12) && player.c.currentforgedisplay.eq(2) },
        onClick() {
            player.c.craftinganvils = new Decimal(1)

            player.c.timemetal = player.c.timemetal.sub(player.c.anvilcosts[0])
            player.c.spacemetal = player.c.spacemetal.sub(player.c.anvilcosts[1])
            player.c.solarsand = player.c.solarsand.sub(player.c.anvilcosts[2])
            player.c.celestialbatteries = player.c.celestialbatteries.sub(player.c.anvilcosts[3])
        },
        style: { width: '150px', "min-height": '100px' },
    },
    61: {
        title() { return "Stop Crafting" },
        canClick() { return player.c.craftinganvils.eq(1) },
        unlocked() { return hasUpgrade("c", 12) && player.c.currentforgedisplay.eq(2) },
        onClick() {
            player.c.anvilcraftingtime = new Decimal(0)
            player.c.craftinganvils = new Decimal(0)

            player.c.timemetal = player.c.timemetal.add(player.c.anvilcosts[0])
            player.c.spacemetal = player.c.spacemetal.add(player.c.anvilcosts[1])
            player.c.solarsand = player.c.solarsand.add(player.c.anvilcosts[2])
            player.c.celestialbatteries = player.c.celestialbatteries.add(player.c.anvilcosts[3])
        },
        style: { width: '150px', "min-height": '100px' },
    },
    62: {
        title() { return format(player.c.anvils, 0)  + "<img src='resources/anvil.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return true },
        unlocked() { return hasUpgrade("c", 12) },
        onClick() {
            player.c.currentforgedisplay = new Decimal(2)
        },
        style: { background: "radial-gradient(#ffcd00, #ff4300)", width: '100px', "min-height": '100px' },
    },
    63: {
        title() { return "Allocate an Anvil" },
        canClick() { return player.c.anvils.gt(0) },
        unlocked() { return hasUpgrade("c", 12) && player.c.currentresourcedisplay.eq(1) },
        onClick() {
            player.c.anvils = player.c.anvils.sub(1)
            player.c.scrapmetalanvils = player.c.scrapmetalanvils.add(1)
        },
        style: { width: '150px', "min-height": '100px' },
    },
    64: {
        title() { return "Allocate an Anvil" },
        canClick() { return player.c.anvils.gt(0) },
        unlocked() { return hasUpgrade("c", 12) && player.c.currentresourcedisplay.eq(2) },
        onClick() {
            player.c.anvils = player.c.anvils.sub(1)
            player.c.wireanvils = player.c.wireanvils.add(1)
        },
        style: { width: '150px', "min-height": '100px' },
    },
    65: {
        title() { return "Allocate an Anvil" },
        canClick() { return player.c.anvils.gt(0) },
        unlocked() { return hasUpgrade("c", 12) && player.c.currentresourcedisplay.eq(3) },
        onClick() {
            player.c.anvils = player.c.anvils.sub(1)
            player.c.enhancepowderanvils = player.c.enhancepowderanvils.add(1)
        },
        style: { width: '150px', "min-height": '100px' },
    },
    66: {
        title() { return "Relocate Anvils" },
        canClick() { return player.c.spentanvils.gt(0) },
        unlocked() { return hasUpgrade("c", 12) },
        onClick() {
            player.c.anvils = player.c.anvils.add(player.c.spentanvils)
            player.c.scrapmetalanvils = new Decimal(0)
            player.c.wireanvils = new Decimal(0)
            player.c.enhancepowderanvils = new Decimal(0)
            player.c.celestialcellanvils = new Decimal(0)
        },             
        style: { width: '150px', "min-height": '100px' },
    },
    67: {
        title() { return format(player.c.jacorborbs, 0)  + "<img src='resources/jacorborb.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return true },
        unlocked() { return player.m.jacorborbunlock.eq(1) },
        onClick() {
            player.c.currentforgedisplay = new Decimal(3)
        },
        style: { background: "radial-gradient(purple, #b82fbd)", width: '100px', "min-height": '100px' },
    },
    68: {
        title() { return "Start Crafting" },
        canClick() { return player.c.craftingjacorborbs.eq(0) && player.c.wires.gte(player.c.jacorborbcosts[0]) && player.c.enhancepowder.gte(player.c.jacorborbcosts[1]) && player.c.celestialcells.gte(player.c.jacorborbcosts[2]) && player.c.celestialbatteries.gte(player.c.jacorborbcosts[3]) && player.c.solarity.gt(0) && player.i.jacorbianrunes.gt(0) },
        unlocked() { return player.c.currentforgedisplay.eq(3) },
        onClick() {
            player.c.craftingjacorborbs = new Decimal(1)

            player.c.wires = player.c.wires.sub(player.c.jacorborbcosts[0])
            player.c.enhancepowder = player.c.enhancepowder.sub(player.c.jacorborbcosts[1])
            player.c.celestialcells = player.c.celestialcells.sub(player.c.jacorborbcosts[2])
            player.c.celestialbatteries = player.c.celestialbatteries.sub(player.c.jacorborbcosts[3])
        },
        style: { width: '150px', "min-height": '100px' },
    },
    69: {
        title() { return "Stop Crafting" },
        canClick() { return player.c.craftingjacorborbs.eq(1) },
        unlocked() { return player.c.currentforgedisplay.eq(3) },
        onClick() {
            player.c.jacorborbcraftingtime = new Decimal(0)
            player.c.craftingjacorborbs = new Decimal(0)

            player.c.wires = player.c.wires.add(player.c.jacorborbcosts[0])
            player.c.enhancepowder = player.c.enhancepowder.add(player.c.jacorborbcosts[1])
            player.c.celestialcells = player.c.celestialcells.add(player.c.jacorborbcosts[2])
            player.c.celestialbatteries = player.c.celestialbatteries.add(player.c.jacorborbcosts[3])
        },
        style: { width: '150px', "min-height": '100px' },
    },
    71: {
        title() { return "Allocate an Anvil" },
        canClick() { return player.c.anvils.gt(0) },
        unlocked() { return hasUpgrade("c", 13) && player.c.currentresourcedisplay.eq(4) },
        onClick() {
            player.c.anvils = player.c.anvils.sub(1)
            player.c.celestialcellanvils = player.c.celestialcellanvils.add(1)
        },
        style: { width: '150px', "min-height": '100px' },
    },
    72: {
        title() { return format(player.c.enhancemedals, 0)  + "<img src='resources/enhancemedal.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return true },
        unlocked() { return player.sitraunlockcutscene.eq(0) },
        onClick() {
            player.c.currentforgedisplay = new Decimal(4)
        },
        style: { background: "radial-gradient(#c20282, #b82fbd)", width: '100px', "min-height": '100px' },
    },
    73: {
        title() { return "Start Crafting" },
        canClick() { return player.c.craftingenhancemedals.eq(0) && player.c.scrapmetal.gte(player.c.enhancemedalcosts[0]) && player.c.wires.gte(player.c.enhancemedalcosts[1]) && player.c.enhancepowder.gte(player.c.enhancemedalcosts[2]) && player.c.celestialcells.gte(player.c.enhancemedalcosts[3]) && player.c.celestialbatteries.gte(player.c.enhancemedalcosts[4]) && player.c.quirkstars.gte(player.c.enhancemedalcosts[5]) && player.c.jacorborbs.gte(player.c.enhancemedalcosts[6]) && player.c.dimensionaltickets.gte(player.c.enhancemedalcosts[7]) && player.c.solarity.gt(0) && player.i.puremachines.gt(0) },
        unlocked() { return player.c.currentforgedisplay.eq(4) },
        onClick() {
            player.c.craftingenhancemedals = new Decimal(1)

            player.c.scrapmetal = player.c.scrapmetal.sub(player.c.enhancemedalcosts[0])
            player.c.wires = player.c.wires.sub(player.c.enhancemedalcosts[1])
            player.c.enhancepowder = player.c.enhancepowder.sub(player.c.enhancemedalcosts[2])
            player.c.celestialcells = player.c.celestialcells.sub(player.c.enhancemedalcosts[3])
            player.c.celestialbatteries = player.c.celestialbatteries.sub(player.c.enhancemedalcosts[4])
            player.c.quirkstars = player.c.quirkstars.sub(player.c.enhancemedalcosts[5])
            player.c.jacorborbs = player.c.jacorborbs.sub(player.c.enhancemedalcosts[6])
            player.c.dimensionaltickets = player.c.dimensionaltickets.sub(player.c.enhancemedalcosts[7])
        },
        style: { width: '150px', "min-height": '100px' },
    },
    74: {
        title() { return "Stop Crafting" },
        canClick() { return player.c.craftingenhancemedals.eq(1) },
        unlocked() { return player.c.currentforgedisplay.eq(4) },
        onClick() {
            player.c.enhancemedalcraftingtime = new Decimal(0)
            player.c.craftingenhancemedals = new Decimal(0)

            player.c.scrapmetal = player.c.scrapmetal.add(player.c.enhancemedalcosts[0])
            player.c.wires = player.c.wires.add(player.c.enhancemedalcosts[1])
            player.c.enhancepowder = player.c.enhancepowder.add(player.c.enhancemedalcosts[2])
            player.c.celestialcells = player.c.celestialcells.add(player.c.enhancemedalcosts[3])
            player.c.celestialbatteries = player.c.celestialbatteries.add(player.c.enhancemedalcosts[4])
            player.c.quirkstars = player.c.quirkstars.add(player.c.enhancemedalcosts[5])
            player.c.jacorborbs = player.c.jacorborbs.add(player.c.enhancemedalcosts[6])
            player.c.dimensionaltickets = player.c.dimensionaltickets.add(player.c.enhancemedalcosts[7])
        },
        style: { width: '150px', "min-height": '100px' },
    },
},
upgrades: {
    11:
    {
        title: "Crafting Points Upgrade I",
        unlocked() { return true },
        description: "Unlocks buyables.",
        cost: new Decimal(20),
        currencyDisplayName: "Crafting Points",
        currencyInternalName: "craftingpoints",
        currencyLocation() { return player.c },
    },
    12:
    {
        title: "Crafting Points Upgrade II",
        unlocked() { return hasUpgrade("c", 11) },
        description: "Unlocks resource automation.",
        cost: new Decimal(60),
        currencyDisplayName: "Crafting Points",
        currencyInternalName: "craftingpoints",
        currencyLocation() { return player.c },
    },
    13:
    {
        title: "Crafting Points Upgrade II",
        unlocked() { return hasUpgrade("c", 12) && player.m.jacorborbunlock.eq(1) },
        description: "Unlocks anvil production for celestial cells.",
        cost: new Decimal(2400),
        currencyDisplayName: "Crafting Points",
        currencyInternalName: "craftingpoints",
        currencyLocation() { return player.c },
    },
},
buyables: {
    11: {
        cost(x) { return new Decimal(1.4).pow(x || getBuyableAmount(this.layer, this.id)).mul(5) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.05).add(1) },
        unlocked() { return hasUpgrade("c", 11) },
        canAfford() { return player.c.craftingpoints.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Crafting Powerer"
        },
        tooltip() {
            return "<h5>Artis and Sitra have a very tragic past..."
        },
        display() {
            return "which are boosting crafting power by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Crafting Points"
        },
        buy() {
            let base = new Decimal(5)
            let growth = 1.4
            let max = Decimal.affordGeometricSeries(player.c.craftingpoints, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.c.craftingpoints = player.c.craftingpoints.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    12: {
        cost(x) { return new Decimal(1.45).pow(x || getBuyableAmount(this.layer, this.id)).mul(8) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.1).add(1) },
        unlocked() { return hasUpgrade("c", 11) },
        canAfford() { return player.c.craftingpoints.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Solarity Capacity"
        },
        tooltip() {
            return "<h5>They were scarred by the memories of Hevipelle's actions."
        },
        display() {
            return "which are increasing solarity capacity by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Crafting Points"
        },
        buy() {
            let base = new Decimal(8)
            let growth = 1.45
            let max = Decimal.affordGeometricSeries(player.c.craftingpoints, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.c.craftingpoints = player.c.craftingpoints.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    13: {
        cost(x) { return new Decimal(1.5).pow(x || getBuyableAmount(this.layer, this.id)).mul(10) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.2).add(1) },
        unlocked() { return hasUpgrade("c", 11) },
        canAfford() { return player.c.craftingpoints.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Solarity Gain"
        },
        tooltip() {
            return "<h5>They had a sister..."
        },
        display() {
            return "which are increasing solarity gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Crafting Points"
        },
        buy() {
            let base = new Decimal(10)
            let growth = 1.5
            let max = Decimal.affordGeometricSeries(player.c.craftingpoints, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.c.craftingpoints = player.c.craftingpoints.sub(cost)
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
    dimensionalticketbar: {
        unlocked() { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(8) },
        direction: RIGHT,
        width: 476,
        height: 50,
        progress() {
            return player.c.dimensionalticketcraftingtime.div(player.c.dimensionalticketcraftingtimereq)
        },
        fillStyle: {
            "background-color": "#ff5500",
        },
        display() {
            return "<h5>" + format(player.c.dimensionalticketcraftingtime) + "/" + format(player.c.dimensionalticketcraftingtimereq) + " crafting power<h5></h5>";
        },
    },
    solaritybar: {
        unlocked() { return player.solarforgecutscene.eq(0) },
        direction: RIGHT,
        width: 476,
        height: 50,
        progress() {
            return player.c.solarity.div(player.c.solaritycapacity)
        },
        fillStyle: {
            background: "radial-gradient(#ffcd00, #ff4300)", 
        },
        display() {
            return "<h5>" + format(player.c.solarity) + "/" + format(player.c.solaritycapacity) + " solarity (+" + format(player.c.solaritytoget) + ")<h5></h5>";
        },
        style: { color: "red" },
    },
    solarsandbar: {
        unlocked() { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(1) },
        direction: RIGHT,
        width: 476,
        height: 50,
        progress() {
            return player.c.solarsandcraftingtime.div(player.c.solarsandcraftingtimereq)
        },
        fillStyle: {
            background: "radial-gradient(#ffcd00, #ff4300)", 
        },
        display() {
            return "<h5>" + format(player.c.solarsandcraftingtime) + "/" + format(player.c.solarsandcraftingtimereq) + " crafting power<h5></h5>";
        },
        style: { color: "red" },
    },
    anvilbar: {
        unlocked() { return hasUpgrade("c", 12) && player.c.currentforgedisplay.eq(2) },
        direction: RIGHT,
        width: 476,
        height: 50,
        progress() {
            return player.c.anvilcraftingtime.div(player.c.anvilcraftingtimereq)
        },
        fillStyle: {
            background: "radial-gradient(#ffcd00, #ff4300)", 
        },
        display() {
            return "<h5>" + format(player.c.anvilcraftingtime) + "/" + format(player.c.anvilcraftingtimereq) + " crafting power<h5></h5>";
        },
        style: { color: "red" },
    },
    scrapmetalbar: {
        unlocked() { return hasUpgrade("c", 12) && player.c.currentresourcedisplay.eq(1) },
        direction: RIGHT,
        width: 476,
        height: 50,
        progress() {
            return player.c.scrapmetalcraftingpower.div(player.c.scrapmetalcraftingpowerreq)
        },
        fillStyle: {
            "background-color": "#ff5500",
        },
        display() {
            return "<h5>" + format(player.c.scrapmetalcraftingpower) + "/" + format(player.c.scrapmetalcraftingpowerreq) + " crafting power<h5></h5>";
        },
    },
    wirebar: {
        unlocked() { return hasUpgrade("c", 12) && player.c.currentresourcedisplay.eq(2) },
        direction: RIGHT,
        width: 476,
        height: 50,
        progress() {
            return player.c.wirecraftingpower.div(player.c.wirecraftingpowerreq)
        },
        fillStyle: {
            "background-color": "#ff5500",
        },
        display() {
            return "<h5>" + format(player.c.wirecraftingpower) + "/" + format(player.c.wirecraftingpowerreq) + " crafting power<h5></h5>";
        },
    },
    enhancepowderbar: {
        unlocked() { return hasUpgrade("c", 12) && player.c.currentresourcedisplay.eq(3) },
        direction: RIGHT,
        width: 476,
        height: 50,
        progress() {
            return player.c.enhancepowdercraftingpower.div(player.c.enhancepowdercraftingpowerreq)
        },
        fillStyle: {
            "background-color": "#ff5500",
        },
        display() {
            return "<h5>" + format(player.c.enhancepowdercraftingpower) + "/" + format(player.c.enhancepowdercraftingpowerreq) + " crafting power<h5></h5>";
        },
    },
    jacorborbbar: {
        unlocked() { return player.c.currentforgedisplay.eq(3) },
        direction: RIGHT,
        width: 476,
        height: 50,
        progress() {
            return player.c.jacorborbcraftingtime.div(player.c.jacorborbcraftingtimereq)
        },
        fillStyle: {
            background: "radial-gradient(#ffcd00, #ff4300)", 
        },
        display() {
            return "<h5>" + format(player.c.jacorborbcraftingtime) + "/" + format(player.c.jacorborbcraftingtimereq) + " crafting power<h5></h5>";
        },
        style: { color: "red" },
    },
    celestialcellbar: {
        unlocked() { return hasUpgrade("c", 13) && player.c.currentresourcedisplay.eq(4) },
        direction: RIGHT,
        width: 476,
        height: 50,
        progress() {
            return player.c.celestialcellcraftingpower.div(player.c.celestialcellcraftingpowerreq)
        },
        fillStyle: {
            "background-color": "#ff5500",
        },
        display() {
            return "<h5>" + format(player.c.celestialcellcraftingpower) + "/" + format(player.c.celestialcellcraftingpowerreq) + " crafting power<h5></h5>";
        },
    },
    enhancemedalbar: {
        unlocked() { return player.c.currentforgedisplay.eq(4) },
        direction: RIGHT,
        width: 476,
        height: 50,
        progress() {
            return player.c.enhancemedalcraftingtime.div(player.c.enhancemedalcraftingtimereq)
        },
        fillStyle: {
            background: "radial-gradient(#ffcd00, #ff4300)", 
        },
        display() {
            return "<h5>" + format(player.c.enhancemedalcraftingtime) + "/" + format(player.c.enhancemedalcraftingtimereq) + " crafting power<h5></h5>";
        },
        style: { color: "red" },
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
        body() { return "This battery, which contains time, space and enhance powers within it. Truly encapsulates the prestige tree's third row. Once it powers up the pseudo-celestial, get ready, because the presence of a celestial caused your predecessor to vanish... also makes a good regular battery!" },         
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
    dimensionalticket: {
        unlocked() { return player.c.currentcraftingdisplay.eq(8) },
        title: "Item Description",
        body() { return "These tickets have been developed to help travel between realms for mortal beings. The time and space metal's power transfers your physical body over to different realms, and back. However, it burns up when used." },         
    }, 
    solaritycoal: {
        unlocked() { return player.c.currentresourcedisplay.eq(5) },
        title: "Item Description",
        body() { return "Solarity coal can be processed into solarity, which is used as fuel for the solar forge. Its distinct orange color makes it stand out. One can only gain solarity coal by luck." },         
    }, 
    solarsand: {
        unlocked() { return player.c.currentforgedisplay.eq(1) },
        title: "Item Description",
        body() { return "Solar sand is the just enhance powder but amplified with the power of solarity. It is basically just a better version of enhance powder. It can also provide massive boosts to crafting." },         
    }, 
    anvil: {
        unlocked() { return player.c.currentforgedisplay.eq(2) },
        title: "Item Description",
        body() { return "You may be asking, why do you need extra anvils? Because these anvils are imbued with the power of automation. You can use them to autogenerate base crafting materials. (I don't get paid enough to write these)." },         
    }, 
    jacorborb: {
        unlocked() { return player.c.currentforgedisplay.eq(3) },
        title: "Item Description",
        body() { return "Jacorb's orb. It is a concentrated form of jacorbian runes and energy. It can be used to trap quirk energy and maintain it through meta-prestiges. When you use it, make sure to go through standard path and get as much as you can so you can deliver it back to the enhance path." },         
    }, 
    enhancemedal: {
        unlocked() { return player.c.currentforgedisplay.eq(4) },
        title: "Item Description",
        body() { return "There isn't a real significant value of this item, but it could eventually be used for something. It is only a trinket that is used to prove to Sitra that you are worthy." },         
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
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(8) ? "<h2>You have " + formatWhole(player.c.dimensionaltickets) + "<h2> dimensional realm tickets (+" + formatWhole(player.c.dimensionalticketstoget) + ")<br><h5>(CHECK META PRESTIGE FOR TRAVELLING)": "" }, { "color": "#90EE90", "font-size": "18px", "font-family": "monospace" }],
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
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(8) ? "<h2>Recipe:" : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(8) ? "<h4>" + formatWhole(player.c.dimensionalticketcosts[0]) + " time metal (you have " + formatWhole(player.c.timemetal) + ")": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(8) ? "<h4>" + formatWhole(player.c.dimensionalticketcosts[1]) + " space metal (you have " + formatWhole(player.c.spacemetal) + ")": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentcraftingdisplay.eq(8) ? "<h4>" + formatWhole(player.c.dimensionalticketcosts[2]) + " celestial cells (you have " + formatWhole(player.c.celestialcells) + ")": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["blank", "25px"],
            ["row", [["clickable", 24], ["clickable", 25], ["bar", "timemetalbar"]]],
            ["row", [["clickable", 26], ["clickable", 27], ["bar", "spacemetalbar"]]],
            ["row", [["clickable", 31], ["clickable", 32] ,["bar", "timecapsulebar"]]],
            ["row", [["clickable", 35], ["clickable", 36], ["bar", "spacebuildingbar"]]],
            ["row", [["clickable", 37], ["clickable", 38] ,["bar", "celestialbatterybar"]]],
            ["row", [["clickable", 42], ["clickable", 43], ["bar", "quirklayerbar"]]],
            ["row", [["clickable", 45], ["clickable", 46], ["bar", "quirkstarbar"]]],
            ["row", [["clickable", 48], ["clickable", 49], ["bar", "dimensionalticketbar"]]],
            ["blank", "25px"],
            ["row", [["clickable", 21], ["clickable", 29], ["clickable", 22], ["clickable", 34], ["clickable", 23], ["clickable", 41], ["clickable", 44], ["clickable", 47]]],
            ["blank", "25px"],          
            ["row", [["clickable", 28], ["infobox", "jacorblog16"], ["infobox", "timemetal"]]],
            ["row", [["clickable", 33], ["infobox", "jacorblog14"], ["infobox", "spacemetal"]]],
            ["infobox", "celestialbattery"],
            ["infobox", "timecapsule"],
            ["infobox", "spacebuilding"],
            ["infobox", "quirklayer"],
            ["infobox", "quirkstar"],
            ["infobox", "dimensionalticket"],
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
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentresourcedisplay.eq(5) ? "<h2>You have " + formatWhole(player.c.solaritycoal) + "<h2> solarity coal. (+" + formatWhole(player.c.solaritycoaltoget) + ")": "" }, { "color": "#ffcd00", "font-size": "18px", "font-family": "monospace" }],
            ["blank", "25px"],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentresourcedisplay.eq(1) ? "<h3>In order to earn scrap metal, one must NOT produce prestige energy. (Based on machines)": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentresourcedisplay.eq(2) ? "<h3>In order to earn wires, one must NOT produce prestige machines. (Based on prestige energy)": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentresourcedisplay.eq(3) ? "<h3>In order to earn enhance powder, one must NOT let enhanced prestige points decay to nothing. (Based on enhance points)": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentresourcedisplay.eq(4) ? "<h3>In order to earn celestial cells, one must FEED the pseudo-celestial. (Based on celestial energy)": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentresourcedisplay.eq(5) ? "<h3>In order to earn solarity coal, one must COUNT. (Based on [REDACTED])": "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
            ["blank", "25px"],
            ["row", [["clickable", 17], ["clickable", 18], ["clickable", 19], ["clickable", 39], ["clickable", 53]]],
            ["blank", "25px"],
            ["infobox", "scrapmetal"],
            ["infobox", "wires"],
            ["infobox", "enhancepowder"],
            ["infobox", "celestialcells"],
            ["infobox", "solaritycoal"],
            ["blank", "25px"],
            ["raw-html", function () { return hasUpgrade("c", 12) ? "<h3>You have " + formatWhole(player.c.anvils) + "<h3> anvils (+" + formatWhole(player.c.anvilstoget) + ") (No crafting points are earned)": "" }, { "color": "grey", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return hasUpgrade("c", 12) && player.c.currentresourcedisplay.eq(1) ? "<h2>You have " + formatWhole(player.c.scrapmetalanvils) + "<h2> anvils producing scrap metal. (+" + formatWhole(player.c.scrapmetaltogetanvil) + ")" : "" }, { "color": "#ff5500", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return hasUpgrade("c", 12) && player.c.currentresourcedisplay.eq(1) ? "<h3>+" + format(player.c.scrapmetalcraftingpowerpersecond) + "<h3> crafting power per second." : "" }, { "color": "#ff5500", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return hasUpgrade("c", 12) && player.c.currentresourcedisplay.eq(2) ? "<h2>You have " + formatWhole(player.c.wireanvils) + "<h2> anvils producing wires.  (+" + formatWhole(player.c.wirestogetanvil) + ")"  : "" }, { "color": "#ff5500", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return hasUpgrade("c", 12) && player.c.currentresourcedisplay.eq(2) ? "<h3>+" + format(player.c.wirecraftingpowerpersecond) + "<h3> crafting power per second." : "" }, { "color": "#ff5500", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return hasUpgrade("c", 12) && player.c.currentresourcedisplay.eq(3) ? "<h2>You have " + formatWhole(player.c.enhancepowderanvils) + "<h2> anvils producing enhance powder. (+" + formatWhole(player.c.enhancepowdertogetanvil) + ")" : "" }, { "color": "#ff5500", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return hasUpgrade("c", 12) && player.c.currentresourcedisplay.eq(3) ? "<h3>+" + format(player.c.enhancepowdercraftingpowerpersecond) + "<h3> crafting power per second." : "" }, { "color": "#ff5500", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return hasUpgrade("c", 13) && player.c.currentresourcedisplay.eq(4) ? "<h2>You have " + formatWhole(player.c.celestialcellanvils) + "<h2> anvils producing celestial cells. (+" + formatWhole(player.c.enhancepowdertogetanvil) + ")" : "" }, { "color": "#ff5500", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return hasUpgrade("c", 13) && player.c.currentresourcedisplay.eq(4) ? "<h3>+" + format(player.c.celestialcellcraftingpowerpersecond) + "<h3> crafting power per second." : "" }, { "color": "#ff5500", "font-size": "18px", "font-family": "monospace" }],
            ["blank", "25px"],
            ["row", [["clickable", 63], ["bar", "scrapmetalbar"]]],
            ["row", [["clickable", 64], ["bar", "wirebar"]]],
            ["row", [["clickable", 65], ["bar", "enhancepowderbar"]]],
            ["row", [["clickable", 71], ["bar", "celestialcellbar"]]],
            ["row", [["clickable", 66]]],
        ]
        
        },
        "Forge": {
            buttonStyle() { return { 'color': 'orange' } },
            unlocked() { return player.solaritylayer.eq(1) && player.defeatedce308.eq(1) },
            content:
            
                [
                    ["raw-html", function () { return player.solarforgescene.eq(1) ? "<h1>Hey! So you are ready to use the solarity forge now." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                    ["raw-html", function () { return player.solarforgescene.eq(2) ? "<h1>It is very powerful. One of the GODS OF INCREMENTAL made it, you know?" : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                    ["raw-html", function () { return player.solarforgescene.eq(3) ? "<h1>Solaris, the high god of solarity. Extremely powerful guy." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                    ["raw-html", function () { return player.solarforgescene.eq(4) ? "<h1>There are five other relics from each god. The forge happens to be Solaris' thing." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                    ["raw-html", function () { return player.solarforgescene.eq(5) ? "<h1>Spaceon has the FINAL SPACE BUILDING. Cool, right? You'll craft it one day." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                    ["raw-html", function () { return player.solarforgescene.eq(6) ? "<h1>Drigganiz has something... I forgot." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                    ["raw-html", function () { return player.solarforgescene.eq(7) ? "<h1>This forge will help you create new materials! However, you need fuel." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                    ["raw-html", function () { return player.solarforgescene.eq(8) ? "<h1>However, it's not hard to get. You must progress through Aarex's hub first." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                    ["raw-html", function () { return player.solarforgescene.eq(9) ? "<h1>The annoying part is that it's a part of a mini-feature, counting." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                    ["raw-html", function () { return player.solarforgescene.eq(10) ? "<h1>The fuel will come at random, and you must claim it." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                    ["raw-html", function () { return player.solarforgescene.eq(11) ? "<h1>Don't worry. The fuel is very long-lasting." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                    ["raw-html", function () { return player.solarforgescene.eq(12) ? "<h1>The first material is solar sand. You would use it for many things. " : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                    ["raw-html", function () { return player.solarforgescene.eq(13) ? "<h1>Your goal is to craft the enhance emblem." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                    ["raw-html", function () { return player.solarforgescene.eq(14) ? "<h1>This will help you go further in the enhance path." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                    ["raw-html", function () { return player.solarforgescene.eq(15) ? "<h1>Also, I suggest you craft quirk layers and stars." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                    ["raw-html", function () { return player.solarforgescene.eq(16) ? "<h1>The enhance path extension will require a lot of crafting and hub work." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                    ["raw-html", function () { return player.solarforgescene.eq(17) ? "<h1>And there is also a celestial you must fight." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                    ["raw-html", function () { return player.solarforgescene.eq(18) ? "<h1>That celestial is MY BROTHER." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "18px"}],
                    ["blank", "25px"],
                    ["row", [["clickable", 52], ["clickable", 51]]],
                ["raw-html", function () { return player.solarforgecutscene.eq(1) ? " <div class=spinning-symbol>☭</div>" : "" }],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) ? "<h2>You have " + formatWhole(player.c.solaritycoal) + "<h2> solarity coal. (+" + formatWhole(player.c.solaritycoaltoget) + ")": "" }, { "color": "#ffcd00", "font-size": "18px", "font-family": "monospace" }],
            ["row", [["bar", "solaritybar"], ["blank", "25px"], ["clickable", 54]]],
            ["blank", "25px"],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentforgedisplay.eq(1) ? "<h2>You have " + formatWhole(player.c.solarsand) + "<h2> solar sand (+" + formatWhole(player.c.solarsandtoget) + ")": "" }, { "color": "#ffcd00", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentforgedisplay.eq(2) ? "<h2>You have " + formatWhole(player.c.anvils) + "<h2> anvils (+" + formatWhole(player.c.anvilstoget) + ")": "" }, { "color": "grey", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentforgedisplay.eq(3) ? "<h2>You have " + formatWhole(player.c.jacorborbs) + "<h2> jacorb orbs (+" + formatWhole(player.c.jacorborbstoget) + ")": "" }, { "color": "purple", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return player.crafting2cutscene.eq(0) && player.c.currentforgedisplay.eq(4) ? "<h2>You have " + formatWhole(player.c.enhancemedals) + "<h2> enhance medals (+" + formatWhole(player.c.enhancemedalstoget) + ")": "" }, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
            ["blank", "25px"],
                    ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(1) ? "<h2>Recipe:" : "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(1) ? "<h4>" + formatWhole(player.c.solarsandcosts[0]) + " enhance powder (you have " + formatWhole(player.c.enhancepowder) + ")": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(1) ? "<h4>" + formatWhole(player.c.solarsandcosts[1]) + " celestial cells (you have " + formatWhole(player.c.celestialcells) + ")": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(1) ? "<h4>-" + format(player.c.solaritydrainsolarsand) + " solarity per second": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(1) ? "<h5>-" + format(player.c.incrementalpowerdrain) + " incremental power per second (you have " + format(player.m.points) + ")": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(2) ? "<h2>Recipe:" : "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(2) ? "<h4>" + formatWhole(player.c.anvilcosts[0]) + " time metal (you have " + formatWhole(player.c.timemetal) + ")": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(2) ? "<h4>" + formatWhole(player.c.anvilcosts[1]) + " space metal (you have " + formatWhole(player.c.spacemetal) + ")": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(2) ? "<h4>" + formatWhole(player.c.anvilcosts[2]) + " solar sand (you have " + formatWhole(player.c.solarsand) + ")": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(2) ? "<h4>" + formatWhole(player.c.anvilcosts[3]) + " celestial batteries (you have " + formatWhole(player.c.celestialbatteries) + ")": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(2) ? "<h4>-" + format(player.c.solaritydrainanvil) + " solarity per second": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(2) ? "<h5>-" + format(player.c.craftingpointsdrain) + " crafting points per second (you have " + format(player.c.craftingpoints) + ")": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(3) ? "<h2>Recipe:" : "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(3) ? "<h4>" + formatWhole(player.c.jacorborbcosts[0]) + " wires (you have " + formatWhole(player.c.wires) + ")": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(3) ? "<h4>" + formatWhole(player.c.jacorborbcosts[1]) + " enhance powder (you have " + formatWhole(player.c.enhancepowder) + ")": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(3) ? "<h4>" + formatWhole(player.c.jacorborbcosts[2]) + " celestial cells (you have " + formatWhole(player.c.celestialcells) + ")": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(3) ? "<h4>" + formatWhole(player.c.jacorborbcosts[3]) + " celestial batteries (you have " + formatWhole(player.c.celestialbatteries) + ")": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(3) ? "<h4>-" + format(player.c.solaritydrainjacorborbs) + " solarity per second": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(3) ? "<h5>-" + format(player.c.jacorbianrunedrain) + " jacorbian runes per second (you have " + format(player.i.jacorbianrunes) + ")": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(4) ? "<h2>Recipe:" : "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(4) ? "<h4>" + formatWhole(player.c.enhancemedalcosts[0]) + " scrap metal (you have " + formatWhole(player.c.scrapmetal) + ")": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(4) ? "<h4>" + formatWhole(player.c.enhancemedalcosts[1]) + " wires (you have " + formatWhole(player.c.wires) + ")": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(4) ? "<h4>" + formatWhole(player.c.enhancemedalcosts[2]) + " enhance powder (you have " + formatWhole(player.c.enhancepowder) + ")": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(4) ? "<h4>" + formatWhole(player.c.enhancemedalcosts[3]) + " celestial cells (you have " + formatWhole(player.c.celestialcells) + ")": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(4) ? "<h4>" + formatWhole(player.c.enhancemedalcosts[4]) + " celestial batteries (you have " + formatWhole(player.c.celestialbatteries) + ")": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(4) ? "<h4>" + formatWhole(player.c.enhancemedalcosts[5]) + " quirk stars (you have " + formatWhole(player.c.quirkstars) + ")": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(4) ? "<h4>" + formatWhole(player.c.enhancemedalcosts[6]) + " jacorb orbs (you have " + formatWhole(player.c.jacorborbs) + ")": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(4) ? "<h4>" + formatWhole(player.c.enhancemedalcosts[7]) + " dimensional realm tickets (you have " + formatWhole(player.c.dimensionaltickets) + ")": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(4) ? "<h4>-" + format(player.c.solaritydrainenhancemedals) + " solarity per second": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["raw-html", function () { return player.solarforgecutscene.eq(0) && player.c.currentforgedisplay.eq(4) ? "<h5>-" + format(player.c.puremachinedrain) + " pure machines per second (you have " + format(player.i.puremachines) + ")": "" }, { "font-style": "italic", "color": "#ffcd00", "font-size": "18px"}],
            ["blank", "25px"],
            ["row", [["clickable", 56], ["clickable", 57], ["bar", "solarsandbar"]]],
            ["row", [["clickable", 59], ["clickable", 61], ["bar", "anvilbar"]]],
            ["row", [["clickable", 68], ["clickable", 69], ["bar", "jacorborbbar"]]],
            ["row", [["clickable", 73], ["clickable", 74], ["bar", "enhancemedalbar"]]],
            ["blank", "25px"],
    ["row", [["clickable", 55], ["clickable", 62], ["clickable", 67], ["clickable", 72]]],
    ["blank", "25px"],
    ["infobox", "solarsand"],
    ["infobox", "anvil"],
    ["infobox", "jacorborb"],
    ["infobox", "enhancemedal"],
]
            
            },      
            "Points": {
                buttonStyle() { return { 'color': 'orange' } },
                unlocked() { return player.c.unlockedcraftingpoints.eq(1) },
                content:
                
                    [
            ["raw-html", function () { return "<h2>You have " + format(player.c.craftingpoints) + "<h2> crafting points." }, { "color": "#ffcd00", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return "<h3>You will earn " + format(player.c.craftingpointstoget) + "<h3> crafting points per crafting power on craft." }, { "color": "#ffcd00", "font-size": "18px", "font-family": "monospace" }],
            ["blank", "25px"],
            ["raw-html", function () { return "<h3>You have sacrificed " + formatWhole(player.c.sacrificedsand) + "<h3> solar sand." }, { "color": "#ffcd00", "font-size": "18px", "font-family": "monospace" }],
            ["row", [["clickable", 58]]],
            ["blank", "25px"],
            ["row", [["buyable", 11], ["buyable", 12], ["buyable", 13]]],
            ["blank", "25px"],
            ["row", [["upgrade", 11], ["upgrade", 12], ["upgrade", 13]]],
            ["blank", "25px"],
        ]
                
                },      
},


},
tabFormat: [
    ["microtabs", "stuff", { 'border-width': '0px' }],
    ["raw-html", function () { return options.musicToggle && player.inartiscutscene.eq(0) && player.insitracutscene.eq(0) ? "<audio controls autoplay loop hidden><source src=music/crafting.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
    ["raw-html", function () { return options.musicToggle && player.inartiscutscene.eq(1) && player.insitracutscene.eq(0) ? "<audio controls autoplay loop hidden><source src=music/craftingcutscene.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
    ["raw-html", function () { return options.musicToggle && player.inartiscutscene.eq(0) && player.insitracutscene.eq(1) ? "<audio controls autoplay loop hidden><source src=music/craftingcutscene.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
],
    layerShown() { return hasUpgrade("m", 19) && player.dimensionalrealm.eq(0) }
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

