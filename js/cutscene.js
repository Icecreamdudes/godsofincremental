                   addLayer("cu", {
                    name: "cutscene", // This is optional, only used in a few places, If absent it just uses the layer id.
                    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
                    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    tooltip: "cutscene", // Row the layer is in on the tree (0 is the first row)
    color: "white",
    startData() { return {
        unlocked: true,
        pelletext: "",
        pelletexttime: new Decimal(0),
    }
    },
    update(delta) {
        player.cu.pelletexttime = player.cu.pelletexttime.add(2)
        if (player.cu.pelletexttime.gte(180))
        {
            player.cu.pelletexttime = new Decimal(0)
        }
        if (player.cu.pelletexttime.gt(0) && player.cu.pelletexttime.lt(60) && player.celestialflashbackscene.eq(1))
        {
            player.cu.pelletext = "dieties"
        }
        if (player.cu.pelletexttime.gt(60) && player.cu.pelletexttime.lt(120) && player.celestialflashbackscene.eq(1))
        {
            player.cu.pelletext = "lesser"
        }
        if (player.cu.pelletexttime.gt(120) && player.cu.pelletexttime.lt(180) && player.celestialflashbackscene.eq(1))
        {
            player.cu.pelletext = "monarchs"
        }
        if (player.cu.pelletexttime.gt(0) && player.cu.pelletexttime.lt(60) && player.celestialflashbackscene.eq(2))
        {
            player.cu.pelletext = "crumble"
        }
        if (player.cu.pelletexttime.gt(60) && player.cu.pelletexttime.lt(120) && player.celestialflashbackscene.eq(2))
        {
            player.cu.pelletext = "fall"
        }
        if (player.cu.pelletexttime.gt(120) && player.cu.pelletexttime.lt(180) && player.celestialflashbackscene.eq(2))
        {
            player.cu.pelletext = "end"
        }
        if (player.cu.pelletexttime.gt(0) && player.cu.pelletexttime.lt(60) && player.celestialflashbackscene.eq(3))
        {
            player.cu.pelletext = "cause"
        }
        if (player.cu.pelletexttime.gt(60) && player.cu.pelletexttime.lt(120) && player.celestialflashbackscene.eq(3))
        {
            player.cu.pelletext = "goal"
        }
        if (player.cu.pelletexttime.gt(120) && player.cu.pelletexttime.lt(180) && player.celestialflashbackscene.eq(3))
        {
            player.cu.pelletext = "mission"
        }
    },
    clickables: {
        11: {
            title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.celestialflashbackcutscene.eq(1) },
            unlocked() { return player.celestialflashbackscene.lt(27) },
            onClick() {
                player.celestialflashbackscene = player.celestialflashbackscene.add(1)
            },
        },
        12: {
            title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
            canClick() { return player.celestialflashbackcutscene.eq(1) },
            unlocked() { return player.celestialflashbackscene.lt(27) && player.celestialflashbackscene.neq(0) },
            onClick() {
                player.celestialflashbackscene = player.celestialflashbackscene.sub(1)
            },
        },
    },
    upgrades: {
    },
    automate() {
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

    tabFormat: [
        ["blank", "50px"],
        ["raw-html", function () { return player.celestialflashbackscene.eq(1) ? "There are only twelve " + player.cu.pelletext + " left. " : "" }, { "color": "#c31235", "font-size": "36px", }],
        ["raw-html", function () { return player.celestialflashbackscene.eq(2) ? "We are slowly going to " + player.cu.pelletext + "." : "" }, { "color": "#c31235", "font-size": "36px", }],
        ["raw-html", function () { return player.celestialflashbackscene.eq(3) ? "We need to be structured! We are meant to work towards the " + player.cu.pelletext + "." : "" }, { "color": "#c31235", "font-size": "36px", }],
        ["raw-html", function () { return player.celestialflashbackscene.eq(4) ? "If not, we have failed our master." : "" }, { "color": "#c31235", "font-size": "36px", }],
        ["raw-html", function () { return player.celestialflashbackscene.eq(5) ? "I get your point. But this was never something I signed up for!" : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "36px"}],
        ["raw-html", function () { return player.celestialflashbackscene.eq(6) ? "Freeing nobles, we don't even know who they are! You are doing a bad job." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "36px"}],
        ["raw-html", function () { return player.celestialflashbackscene.eq(7) ? "Brother. We must stay! Pelle is the only one who can revert us back. Please!" : "" }, { "color": "#880808", "font-size": "36px", "font-family": "monospace" }],
        ["raw-html", function () { return player.celestialflashbackscene.eq(8) ? "I'd rather be human and work for Pelle than spend the rest of eternity a celestial." : "" }, { "color": "#880808", "font-size": "36px", "font-family": "monospace" }],
        ["raw-html", function () { return player.celestialflashbackscene.eq(9) ? "YOU ALL STAY" : "" }, { "color": "#c31235", "font-size": "36px", "font-family": "monospace" }],
        ["raw-html", function () { return player.celestialflashbackscene.eq(10) ? "I'm staying. This power is enlightening." : "" }, { "color": "#ead584", "font-size": "36px", "font-family": "monospace" }],
        ["raw-html", function () { return player.celestialflashbackscene.eq(11) ? "I don't care if you leave. You guys are useless anyways." : "" }, { "color": "#ead584", "font-size": "36px", "font-family": "monospace" }],
        ["raw-html", function () { return player.celestialflashbackscene.eq(12) ? "Even if you did help Teresa with her machines, you barely contributed." : "" }, { "color": "#ead584", "font-size": "36px", "font-family": "monospace" }],
        ["raw-html", function () { return player.celestialflashbackscene.eq(13) ? "I'm going to stay for a bit I guess. I just don't want to be celestial anymore." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "36px"}],
        ["raw-html", function () { return player.celestialflashbackscene.eq(14) ? "What's with the look, celestial of dilation?" : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "36px"}],
        ["raw-html", function () { return player.celestialflashbackscene.eq(15) ? "I'm leaving now. I am joining Cante and Nova's group." : "" }, { "color": "#64dd17", "font-size": "36px"}],
        ["raw-html", function () { return player.celestialflashbackscene.eq(16) ? "We are going to create a new dimension and play god using our powers." : "" }, { "color": "#64dd17", "font-size": "36px"}],
        ["raw-html", function () { return player.celestialflashbackscene.eq(17) ? "We will rule over this dimension and have them worship. It's going to be fun." : "" }, { "color": "#64dd17", "font-size": "36px"}],
        ["raw-html", function () { return player.celestialflashbackscene.eq(18) ? "You can join us if you want, Artis and Sitra." : "" }, { "color": "#64dd17", "font-size": "36px"}],
        ["raw-html", function () { return player.celestialflashbackscene.eq(19) ? "Being a celestial is a curse! Not a blessing!" : "" }, { "color": "#880808", "font-size": "36px", "font-family": "monospace" }],
        ["raw-html", function () { return player.celestialflashbackscene.eq(20) ? "Just give me time to think." : "" }, { "color": "#880808", "font-size": "36px", "font-family": "monospace" }],
        ["raw-html", function () { return player.celestialflashbackscene.eq(21) ? "It's been a very hard time ever since I turned celestial." : "" }, { "color": "#880808", "font-size": "36px", "font-family": "monospace" }],
        ["raw-html", function () { return player.celestialflashbackscene.eq(22) ? "It all started when King Hevi appeared in our dimension." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "36px"}],
        ["raw-html", function () { return player.celestialflashbackscene.eq(23) ? "Everything was destroyed with a giant bomb of antimatter." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "36px"}],
        ["raw-html", function () { return player.celestialflashbackscene.eq(24) ? "Everything was destroyed, except for us. Hevi turned us celestials." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "36px"}],
        ["raw-html", function () { return player.celestialflashbackscene.eq(25) ? "We were all happy. We were so naive. None of this was predictable." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "36px"}],
        ["raw-html", function () { return player.celestialflashbackscene.eq(26) ? "He ruined everything..." : "" }, { "font-style": "italic", "color": "#ff5500", "font-size": "36px"}],
        ["blank", "25px"],
        ["row", [["clickable", 12], ["clickable", 11]]],
        ["blank", "25px"],
        ["raw-html", function () { return player.celestialflashbackscene.gte(1) && player.celestialflashbackscene.lt(5) || player.celestialflashbackscene.eq(9)  ? "♅" : "" }, { "color": "#c31235", "font-size": "336px", }],
                ["raw-html", function () { return player.celestialflashbackscene.gte(5) && player.celestialflashbackscene.lt(7) ? "<div class=spinning-symbol>☭</div>" : "" }],
                ["raw-html", function () { return player.celestialflashbackscene.gte(7) && player.celestialflashbackscene.lt(9) ? "<div class=spinning-symbol3>⚙</div>" : "" }],
                ["raw-html", function () { return player.celestialflashbackscene.gte(10) && player.celestialflashbackscene.lt(13) ? "⌬" : "" }, { "color": "#ead584", "font-size": "336px", }],
                ["raw-html", function () { return player.celestialflashbackscene.gte(13) && player.celestialflashbackscene.lt(15) ? "<div class=spinning-symbol>☭</div>" : "" }],
                ["raw-html", function () { return player.celestialflashbackscene.gte(15) && player.celestialflashbackscene.lt(19) ? "Ψ" : "" }, { "color": "#64dd17", "font-size": "336px", }],
                ["raw-html", function () { return player.celestialflashbackscene.gte(19) && player.celestialflashbackscene.lt(22) ? "<div class=spinning-symbol3>⚙</div>" : "" }],
                ["raw-html", function () { return player.celestialflashbackscene.gte(22) && player.celestialflashbackscene.lt(28) ? "<div class=spinning-symbol>☭</div>" : "" }],
                ["raw-html", function () { return options.musicToggle && player.celestialflashbackcutscene.eq(1) ? "<audio controls autoplay loop hidden><source src=music/pathless.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
],
    layerShown() { return true }
})