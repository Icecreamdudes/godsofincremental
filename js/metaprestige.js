                   addLayer("m", {
    name: "Meta-Prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "<p style='transform: scale(3, 3)'><alternate>M</alternate></p>",
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    row: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        score: new Decimal(0),

        //PATHLESS FACTORS
        scorefrombestpoints: new Decimal(0),

        //STANDARD PATH FACTORS
        scorefrombestprestigeenergy: new Decimal(1),

        incrementalenergy: new Decimal(0),
        incrementalenergytoget: new Decimal(0),
        incrementalenergyeffect: new Decimal(1),
    }
    },
    onPrestige()
    {
        player.bestpoints = new Decimal(0)
        player.m.incrementalenergy = player.m.incrementalenergy.add(player.m.incrementalenergytoget)
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
        //SCORE CALC
        player.m.scorefrombestpoints = player.bestpoints.add(1).slog().pow(2)

        if (player.i.standardpath.eq(0)) player.m.scorefrombestprestigeenergy = new Decimal(1)
        if (player.i.standardpath.eq(1)) player.m.scorefrombestprestigeenergy = player.i.bestprestigeenergy.slog().div(5).add(1)

        player.m.score = player.m.scorefrombestpoints.mul(player.m.scorefrombestprestigeenergy)

        player.m.incrementalenergytoget = player.i.prestigemachines.slog().pow(3).add(1)
        player.m.incrementalenergyeffect = player.m.incrementalenergy.pow(1.2).add(1)
    },
    clickables: {
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
                alert("It's time to introduce myself.")
                alert("My name is Yhvr. The ranger of numbers.")
                alert("I am one of the four great nobles of incremental powers.")
                alert("You will know it's me becasue I am communication via alerts.")
                alert("I am in exile, as well as my other fellow nobles Jacorb and Aarex.")
                alert("However, I can still communicate with the outside world.")
                alert("My creation, galaxy.click is very useful as it lets me do this.")
                alert("Please. Help us get out of here!")
                alert("Jacorb and Aarex tried helping the other hero, but it was no use.")
                alert("The path of singularity was too weak to handle a single celestial.")
                alert("I want you to access galaxy.click, so you can be able to defeat celestials.")
                alert("Not even true singularities are capable of this power.")
                alert("Anyways, THE DEATH REALM will eventually catch on to this convo. Gotta go.")
            },
        },
        12:
        {
            title: "Boost I",
            unlocked() { return true },
            description: "Boosts points based on unspent incremental power.",
            cost: new Decimal(2),
            currencyLocation() { return player.m },
            currencyDisplayName: "Incremental Power",
            currencyInternalName: "points",
            effect() 
            {
                 return player[this.layer].points.add(2)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        13:
        {
            title: "Boost II",
            unlocked() { return true },
            description: "Boosts prestige points based on unspent incremental power.",
            cost: new Decimal(4),
            currencyLocation() { return player.m },
            currencyDisplayName: "Incremental Power",
            currencyInternalName: "points",
            effect() 
            {
                 return player[this.layer].points.mul(0.5).add(2)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
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
                           ["raw-html", function () { return "<h3>Best points: " + format(player.bestpoints) + " -> " + format(player.m.scorefrombestpoints) + " base score" }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                           ["blank", "25px"],
                           ["raw-html", function () { return "<h3>Standard Path Factors " }, { "color": "#ffffaa", "font-size": "24px", "font-family": "monospace" }],
                           ["raw-html", function () { return "<h3>Best prestige energy: " + format(player.i.bestprestigeenergy) + " -> x" + format(player.m.scorefrombestprestigeenergy) }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                           ["blank", "25px"],
                           ["raw-html", function () { return "<h3>TOTAL SCORE: " + format(player.m.score) }, { "color": "white", "font-size": "24px", "font-family": "monospace" }],
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
            ["raw-html", function () { return "<h2>You have " + format(player.m.incrementalenergy) + " incremental energy." }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return "<h3>Your incremental energy give a x" + format(player.m.incrementalenergyeffect) + " boost to points and prestige energy." }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return "<h3>Your prestige machines will give you " + format(player.m.incrementalenergytoget) + " incremental energy on reset." }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],

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
                        ["row", [["upgrade", 11], ["upgrade", 12], ["upgrade", 13]]],
        ]

            },
        },
    },

    tabFormat: [
            ["microtabs", "stuff", { 'border-width': '0px' }],
    ],
    layerShown() { return player.unlockedmetaprestige.eq(1) }
})