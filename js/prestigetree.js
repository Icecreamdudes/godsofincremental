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
        ]

            },
        },

    },

    tabFormat: [
            ["microtabs", "stuff", { 'border-width': '0px' }],
    ],
    layerShown() { return player.prestigelayer.eq(1) }
})