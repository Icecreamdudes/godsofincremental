addLayer("h", {
    name: "hub", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "<p style='transform: scale(3, 3)'><alternate>H</alternate></p>",
    row: 2,
    displayRow: 1,
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
tooltip: "Hub", // Row the layer is in on the tree (0 is the first row)
color: "#68e8f4",
nodeStyle() {
    return {
        "background-image": "linear-gradient(85deg, #fbef53, #68e8f4, #fbef53)",
        "width": 400,
        "height": 400,
        'min-height': '150px',
        'min-width': '150px',
    }
},
startData() { return {
    unlocked: true,
    willpower: new Decimal(0),
    willpowereffect: new Decimal(1),
    willpowerpersecond: new Decimal(0),
    shrinepower: new Decimal(0),
    shrinepowerpersecond: new Decimal(0),
    shrinepowereffect: new Decimal(1),

    //counting
    count: new Decimal(0),
    counteffect: new Decimal(1),
    nextcount: new Decimal(1),
    countinput: "",
    countingchat: ["", "", "", "", "", "", "", "", "", ""],
    yourturncounting: new Decimal(1),
    countingpowerpersecond: new Decimal(1),
    downvoidcountingpower: new Decimal(0),
    downvoidunlock: new Decimal(0),
    downvoidturn: new Decimal(0),
    countingpoints: new Decimal(0),
    countingpointseffect: new Decimal(1),
    countingpointstoget: new Decimal(0),
    cancountingreset: new Decimal(0),
    unlockedcountingpoints: new Decimal(0),
    incrementalgamercountingpower: new Decimal(0),
    incrementalgamerunlock: new Decimal(0),
    incrementalgamerturn: new Decimal(0),
    ducdatcountingpower: new Decimal(0),
    ducdatcountingpowerreq: new Decimal(0),
    ducdatunlock: new Decimal(0),
    ducdatturn: new Decimal(0),
    flamecountingpower: new Decimal(0),
    flameunlock: new Decimal(0),
    flameturn: new Decimal(0),
    solaritycoalchance: new Decimal(0),
    canclaimsolaritycoal: new Decimal(0),
    solaritycoalclaimed: new Decimal(0),
    papercountingpower: new Decimal(0),
    paperunlock: new Decimal(0),
    paperturn: new Decimal(0),
    norulesduration: new Decimal(0),

    //user points
    downvoidpoints: new Decimal(0),
    downvoidpointstoget: new Decimal(1),
    incrementalgamerpoints: new Decimal(0),
    incrementalgamerpointstoget: new Decimal(1),
    ducdatpoints: new Decimal(0),
    ducdatpointstoget: new Decimal(1),
    flamepoints: new Decimal(0),
    flamepointstoget: new Decimal(1),
    paperpoints: new Decimal(0),
    paperpointstoget: new Decimal(1),

    //control
    countingspeed: new Decimal(1),

    //prestige power
    prestigepower: new Decimal(0),
    prestigepowereffect: new Decimal(1),
    prestigepowerpause: new Decimal(0),
    prestigepowertogetdivide: new Decimal(0),
    prestigepowertoget: new Decimal(0),

    //assembly line
    assemblylineselect: new Decimal(0),
    assemblylinetypeselect: new Decimal(0), //1 - Red 2 - Green 3 - Blue 4 - Transport 5 - Finish
    slotstatus: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],
    slotstatuspic: ["", "", "", "", "", "", ""],
    redenergy: new Decimal(0),
    greenenergy: new Decimal(0),
    blueenergy: new Decimal(0),
    slotredenergy: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],
    slotgreenenergy: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],
    slotblueenergy: [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)],
    slotbuyablepage: new Decimal(1),
}
},
automate() {
    if (hasUpgrade("m", 36))
    {
        buyBuyable("h", 11)
        buyBuyable("h", 12)
        buyBuyable("h", 13)
        buyBuyable("h", 14)
        buyBuyable("h", 15)
        buyBuyable("h", 16)
        buyBuyable("h", 17)
        buyBuyable("h", 18)
        buyBuyable("h", 19)
        buyBuyable("h", 21)
        buyBuyable("h", 22)
        buyBuyable("h", 23)
        buyBuyable("h", 24)
        buyBuyable("h", 25)
        buyBuyable("h", 26)
    }
},
update(delta) {
    let onepersec = new Decimal(1)
    if (player.hubscene.eq(13)) {
        player.hubcutscene = new Decimal(0)
        player.inaarexhubcutscene = new Decimal(0)
    }
    if (player.hubscene.gt(0) && player.hubcutscene.eq(1))
    {
        player.inaarexhubcutscene = new Decimal(1)
    }

    player.h.willpower = player.h.willpower.add(player.h.willpowerpersecond.mul(delta))
    player.h.willpowereffect = player.h.willpower.mul(4).pow(0.9).add(1)

    player.h.willpowerpersecond = new Decimal(0)
    if (hasUpgrade("h", 11)) player.h.willpowerpersecond = new Decimal(0.01)
    player.h.willpowerpersecond = player.h.willpowerpersecond.mul(buyableEffect("h", 11))
    player.h.willpowerpersecond = player.h.willpowerpersecond.mul(buyableEffect("h", 25))
    player.h.willpowerpersecond = player.h.willpowerpersecond.mul(buyableEffect("h", 26))
    player.h.willpowerpersecond = player.h.willpowerpersecond.mul(player.h.shrinepowereffect)
    player.h.willpowerpersecond = player.h.willpowerpersecond.mul(player.h.counteffect)
    if (hasUpgrade("h", 21)) player.h.willpowerpersecond = player.h.willpowerpersecond.mul(upgradeEffect("h", 21))
    player.h.willpowerpersecond = player.h.willpowerpersecond.mul(buyableEffect("h", 31))
    player.h.willpowerpersecond = player.h.willpowerpersecond.mul(player.h.prestigepowereffect)
    player.h.willpowerpersecond = player.h.willpowerpersecond.mul(buyableEffect("h", 42))
    player.h.willpowerpersecond = player.h.willpowerpersecond.mul(buyableEffect("h", 45))
    player.h.willpowerpersecond = player.h.willpowerpersecond.mul(buyableEffect("h", 46))
    player.h.willpowerpersecond = player.h.willpowerpersecond.mul(buyableEffect("h", 48))
    player.h.willpowerpersecond = player.h.willpowerpersecond.mul(buyableEffect("h", 49))
    player.h.willpowerpersecond = player.h.willpowerpersecond.mul(buyableEffect("h", 51))
    player.h.willpowerpersecond = player.h.willpowerpersecond.mul(buyableEffect("h", 52))

    player.h.shrinepower = player.h.shrinepower.add(player.h.shrinepowerpersecond.mul(delta))
    player.h.shrinepowereffect = player.h.shrinepower.add(1).pow(0.3)
    player.h.shrinepowerpersecond = player.h.buyables[14].add(player.h.buyables[15].add(player.h.buyables[16].add(player.h.buyables[17].add(player.h.buyables[18].add(player.h.buyables[19].add(player.h.buyables[21].add(player.h.buyables[22].add(player.h.buyables[23].add(player.h.buyables[24]))))))))).mul(0.01)
    player.h.shrinepowerpersecond = player.h.shrinepowerpersecond.mul(buyableEffect("h", 41))
    player.h.shrinepowerpersecond = player.h.shrinepowerpersecond.mul(buyableEffect("h", 43))
    player.h.shrinepowerpersecond = player.h.shrinepowerpersecond.mul(buyableEffect("h", 45))
    player.h.shrinepowerpersecond = player.h.shrinepowerpersecond.mul(buyableEffect("h", 47))
    player.h.shrinepowerpersecond = player.h.shrinepowerpersecond.mul(buyableEffect("h", 48))
    player.h.shrinepowerpersecond = player.h.shrinepowerpersecond.mul(buyableEffect("h", 49))
    player.h.shrinepowerpersecond = player.h.shrinepowerpersecond.mul(buyableEffect("h", 51))
    player.h.shrinepowerpersecond = player.h.shrinepowerpersecond.mul(buyableEffect("h", 53))

    //counting

    if (player.countingscene.eq(14)) {
        player.countingcutscene = new Decimal(0)
        player.inaarexhubcutscene = new Decimal(0)
    }
    if (player.countingscene.gt(0) && player.countingcutscene.eq(1))
    {
        player.inaarexhubcutscene = new Decimal(1)
    }

    player.h.nextcount = player.h.count.add(1)
    player.h.counteffect = player.h.count.pow(0.2).add(1)
    
    player.h.countingpointstoget = player.h.count.div(25).floor()
    if (hasUpgrade("h", 28)) player.h.countingpointstoget = player.h.countingpointstoget.mul(upgradeEffect("h", 28))
    player.h.countingpointstoget = player.h.countingpointstoget.mul(buyableEffect("h", 63))
    player.h.countingpointseffect = player.h.countingpoints.mul(0.02).add(1).pow(0.7)
    if (player.h.countinput == player.h.nextcount && player.h.yourturncounting.eq(1))
    {
        countingPrint("You: " + formatWhole(player.h.nextcount))
        player.h.count = player.h.count.add(1)
        player.h.countinput = "";
        player.h.yourturncounting = new Decimal(0)
        player.h.downvoidturn = new Decimal(1)
        player.h.incrementalgamerturn = new Decimal(1)
            player.h.ducdatturn = new Decimal(1)
            player.h.paperturn = new Decimal(1)
            layers.h.checkforcountingreset()
            layers.h.checkforclaimsolaritycoal()
            if (player.h.ducdatunlock.eq(1) && player.h.ducdatturn.eq(1)) player.h.ducdatcountingpower = player.h.ducdatcountingpower.add(player.h.countingpowerpersecond)
        if (player.solarforgecutscene.eq(0)) player.h.solaritycoalchance = Math.random()
        player.h.solaritycoalclaimed = new Decimal(0)
    }
    if (player.h.count.gte(1))
    {
        player.h.downvoidunlock = new Decimal(1)
    }
    if (player.h.countinput == "-1" && player.h.cancountingreset.eq(1))
    {
        layers.h.countingreset()
    }
    if (player.h.countinput == "-2" && player.h.canclaimsolaritycoal.eq(1) && player.solarforgecutscene.eq(0) && player.h.solaritycoalclaimed.eq(0))
    {
        player.c.solaritycoaltoget = player.c.solaritycoaltoget.add(1)
        player.h.solaritycoalchance = Math.random()
        countingPrint("Cool. Now you will gain +" + formatWhole(player.c.solaritycoaltoget) + " solarity coal.")
        player.h.solaritycoalclaimed = new Decimal(1)
    }

    player.h.countingpowerpersecond = new Decimal(1)
    player.h.countingpowerpersecond = player.h.countingpowerpersecond.mul(player.h.countingpointseffect)
    if (hasUpgrade("h", 17)) player.h.countingpowerpersecond = player.h.countingpowerpersecond.mul(upgradeEffect("h", 17))
    player.h.countingpowerpersecond = player.h.countingpowerpersecond.mul(player.h.countingspeed)
    player.h.countingpowerpersecond = player.h.countingpowerpersecond.mul(buyableEffect("h", 62))
    if (player.h.norulesduration.gt(0)) 
    {
    player.h.countingpowerpersecond = player.h.countingpowerpersecond.mul(2)
    player.h.papercountingpower = new Decimal(0)
    player.h.yourturncounting = new Decimal(1)
    player.h.downvoidturn = new Decimal(1)
    player.h.incrementalgamerturn = new Decimal(1)
    player.h.ducdatturn = new Decimal(1)
    player.h.flameturn = new Decimal(1)
}

    if (player.h.downvoidunlock.eq(1) && player.h.downvoidturn.eq(1))
    {
        player.h.downvoidcountingpower = player.h.downvoidcountingpower.add(player.h.countingpowerpersecond.mul(delta))
        if (player.h.downvoidcountingpower.gte(6))
        {
           countingPrint("Downvoid: " + formatWhole(player.h.nextcount))
                //downvoid cutscene
            if (player.downvoidcountingcutscene.eq(0))
            {
                if (player.h.count.eq(3))
                {
                     countingPrint("Downvoid: Hi, I'm Downvoid. You must be the hero, aren't you?")
                }
                if (player.h.count.eq(5))
                {
                     countingPrint("Downvoid: I've come from the void. ")
                }
                if (player.h.count.eq(7))
                {
                     countingPrint("Downvoid: The void is a scary place. War. Tragedy. Loss.")
                }
                if (player.h.count.eq(9))
                {
                     countingPrint("Downvoid: I was created to be the strongest warrior, but not a hero like you.")
                }
                if (player.h.count.eq(11))
                {
                     countingPrint("Downvoid: After THEY took Voidcloud from us, they needed someone like me.")
                }
                if (player.h.count.eq(13))
                {
                     countingPrint("Downvoid: Someone reliable. Someone independent.")
                }
                if (player.h.count.eq(15))
                {
                     countingPrint("Downvoid: I was created to destroy someone.")
                }
                if (player.h.count.eq(17))
                {
                     countingPrint("Downvoid: But I can't tell you. Eventually you will know.")
                }
                if (player.h.count.eq(19))
                {
                     countingPrint('Downvoid: But I will tell you one thing:')
                }
                if (player.h.count.eq(21))
                {
                     countingPrint('Downvoid: This "quest" of yours, maybe you should not trust every bit of it...')
                     player.downvoidcountingcutscene = new Decimal(1)
                }
            }   
                            //inc gamer cutscene
                            if (player.rementalcountingcutscene.eq(0) && player.h.incrementalgamerunlock.eq(1) && player.h.count.gte(4))
                            {
                                if (player.rementalcountingscene.eq(0))
                                {
                                     countingPrint("Downvoid: Incremental Gamer, you joined this server too?")
                                }
                                if (player.rementalcountingscene.eq(1))
                                {
                                     countingPrint('incremental_gamer: Yeah. This is weird. This server is called "The Hub".')
                                }
                                if (player.rementalcountingscene.eq(2))
                                {
                                     countingPrint("Downvoid: And there's only one channel which is counting. And why is your counting power so slow?")
                                }
                                if (player.rementalcountingscene.eq(3))
                                {
                                     countingPrint("incremental_gamer: That's how I was designed. It would be overpowered the requirement was lower.")
                                }
                                if (player.rementalcountingscene.eq(4))
                                {
                                     countingPrint("Downvoid: Also, the prophesied hero is here as well.")
                                }
                                if (player.rementalcountingscene.eq(5))
                                {
                                     countingPrint("incremental_gamer: Hmm, never heard much about it. I know about the realm reuniting tho.")
                                }
                                if (player.rementalcountingscene.eq(6))
                                {
                                     countingPrint("Downvoid: I want more people in this server, but not a lot. Should I invite one person?")
                                }
                                if (player.rementalcountingscene.eq(7))
                                {
                                     countingPrint("incremental_gamer: Let's invite Ducky. Maybe we can invite Flame as well afterwards.")
                                }
                                if (player.rementalcountingscene.eq(8))
                                {
                                     countingPrint("Downvoid: Good idea. Not much has been going on in Meta Studio. However we have recovered from the incident.")
                                }
                                if (player.rementalcountingscene.eq(9))
                                {
                                     countingPrint("incremental_gamer: That's nice to hear. Haven't been there in a while. Mostly been working with galaxy, since Yhvr is exiled.")
                                }
                                if (player.rementalcountingscene.eq(10))
                                {
                                     countingPrint("Downvoid: Okay. When the time is right, we will initialize operation thunder. You're a part of it right?")
                                }
                                if (player.rementalcountingscene.eq(11))
                                {
                                     countingPrint("incremental_gamer: Yup. Especially the tragedy that happened after the TLI incident.")
                                }
                                if (player.rementalcountingscene.eq(12))
                                {
                                     countingPrint("Downvoid: Alright great. We should end the discussion now because the hero can't know all of this.")
                                     player.rementalcountingcutscene = new Decimal(1)
                                }
                                player.rementalcountingscene = player.rementalcountingscene.add(1)
                            }   
                                                        //dingle bat cutscene
                                                        if (player.ducdatcountingcutscene.eq(0) && player.h.ducdatunlock.eq(1) && player.h.count.gte(4))
                                                        {
                                                            if (player.ducdatcountingscene.eq(0))
                                                            {
                                                                 countingPrint("Downvoid: DUC YOU'RE HERE!!!")
                                                            }
                                                            if (player.ducdatcountingscene.eq(1))
                                                            {
                                                                 countingPrint("ducdat0507: Hi. Don't bother me I'm working on JANOARG.")
                                                            }
                                                            if (player.ducdatcountingscene.eq(2))
                                                            {
                                                                 countingPrint("incremental_gamer: Oh yeah duck the prophecy hero is here.")
                                                            }
                                                            if (player.ducdatcountingscene.eq(3))
                                                            {
                                                                 countingPrint("ducdat0507: May I speak to them?")
                                                            }
                                                            if (player.ducdatcountingscene.eq(4))
                                                            {
                                                                 countingPrint("Downvoid: Sure. Just don't reveal anything too confidential.")
                                                            }
                                                            if (player.ducdatcountingscene.eq(5))
                                                            {
                                                                 countingPrint("ducdat0507: Alright. So I was on a task to help free the nobles.")
                                                            }
                                                            if (player.ducdatcountingscene.eq(6))
                                                            {
                                                                 countingPrint("ducdat0507: I was tasked to construct a tree so powerful it can replicate even the og prestige tree itself.")
                                                            }
                                                            if (player.ducdatcountingscene.eq(7))
                                                            {
                                                                 countingPrint("incremental_gamer: Communitree?")
                                                            }
                                                            if (player.ducdatcountingscene.eq(8))
                                                            {
                                                                 countingPrint("ducdat0507: Yup. However, my plan failed. Out of nowhere, the tree disappeared.")
                                                            }
                                                            if (player.ducdatcountingscene.eq(9))
                                                            {
                                                                 countingPrint("ducdat0507: Someone must have stole it. And only the community members know about it...")
                                                            }
                                                            if (player.ducdatcountingscene.eq(10))
                                                            {
                                                                 countingPrint("Downvoid: The point is that there are some very untrustworthy people here.")
                                                                 player.ducdatcountingcutscene = new Decimal(1)
                                                            }
                                                            player.ducdatcountingscene = player.ducdatcountingscene.add(1)
                                                                                                                                                                           //flamester cutscene
    
                                                        }  
                                                        if (player.flamecountingcutscene.eq(0) && player.h.flameunlock.eq(1) && player.h.count.gte(4))
                                                        {
                                                            if (player.flamecountingscene.eq(0))
                                                            {
                                                                 countingPrint("Flamemaster: Hi hat")
                                                            }
                                                            if (player.flamecountingscene.eq(1))
                                                            {
                                                                 countingPrint("Downvoid: FLAME!!!!!!")
                                                            }
                                                            if (player.flamecountingscene.eq(2))
                                                            {
                                                                 countingPrint("Flamemaster: Looks like Duc and I_G are also here.")
                                                            }
                                                            if (player.flamecountingscene.eq(3))
                                                            {
                                                                 countingPrint("Flamemaster: And the hero. I'm so glad I'm able to meet you.")
                                                            }
                                                            if (player.flamecountingscene.eq(4))
                                                            {
                                                                 countingPrint("Flamemaster: I want to tell you who I am, but for now I can't.")
                                                            }
                                                            if (player.flamecountingscene.eq(5))
                                                            {
                                                                 countingPrint("ducdat0507: How's pringles going?")
                                                            }
                                                            if (player.flamecountingscene.eq(6))
                                                            {
                                                                 countingPrint("Flamemaster: Great. Mkey gave me his passed down power and I'm using it well!")
                                                            }
                                                            if (player.flamecountingscene.eq(7))
                                                            {
                                                                 countingPrint("incremental_gamer: Dude you're already strong enough you don't need this.")
                                                            }
                                                            if (player.flamecountingscene.eq(8))
                                                            {
                                                                 countingPrint("Flamemaster: Eh why not. It's kinda necessary if you will one day rule the void.")
                                                            }
                                                            if (player.flamecountingscene.eq(9))
                                                            {
                                                                 countingPrint("Downvoid: So when will we commence operation thunder? Since you are the one commanding.")
                                                            }
                                                            if (player.flamecountingscene.eq(10))
                                                            {
                                                                 countingPrint("Flamemaster: Uhh, I dunno. Maybe once the nobles are freed.")
                                                            }
                                                            if (player.flamecountingscene.eq(11))
                                                            {
                                                                 countingPrint("Flamemaster: And we must keep the prophecy safe. We can't let anything happen.")
                                                            }
                                                            if (player.flamecountingscene.eq(12))
                                                            {
                                                                 countingPrint("Downvoid: Alright. After the operation, we will continue the grand mission. Reuniting the realms.")
                                                            }
                                                            if (player.flamecountingscene.eq(13))
                                                            {
                                                                 countingPrint("Flamemaster: We will have new nobles afterwards. You must prove to me you are worthy, Downvoid.")
                                                            }
                                                            if (player.flamecountingscene.eq(14))
                                                            {
                                                                 countingPrint("Downvoid: Of course. I will try my best and work my hardest.")
                                                            }
                                                            if (player.flamecountingscene.eq(15))
                                                            {
                                                                 countingPrint("Flamemaster: And the hero, you will be a noble too.")
                                                                 player.ducdatcountingcutscene = new Decimal(1)
                                                            }
                                                            player.flamecountingscene = player.flamecountingscene.add(1)
                                                        }  
            player.h.count = player.h.count.add(1)
            player.h.yourturncounting = new Decimal(1)
            player.h.downvoidcountingpower = new Decimal(0)
            player.h.downvoidturn = new Decimal(0)
            player.h.incrementalgamerturn = new Decimal(1)
            player.h.ducdatturn = new Decimal(1)
            player.h.paperturn = new Decimal(1)
            layers.h.checkforcountingreset()
            layers.h.checkforclaimsolaritycoal()
            if (player.h.ducdatunlock.eq(1) && player.h.ducdatturn.eq(1)) player.h.ducdatcountingpower = player.h.ducdatcountingpower.add(player.h.countingpowerpersecond)
            if (hasUpgrade("h", 18)) player.h.downvoidpoints = player.h.downvoidpoints.add(player.h.downvoidpointstoget)
            if (player.solarforgecutscene.eq(0)) player.h.solaritycoalchance = Math.random()
        player.h.solaritycoalclaimed = new Decimal(0)
    }
    }
    player.h.downvoidpointstoget = new Decimal(1)
    player.h.downvoidpointstoget = player.h.downvoidpointstoget.mul(buyableEffect("h", 27))
    player.h.downvoidpointstoget = player.h.downvoidpointstoget.mul(buyableEffect("h", 64))
    
    if (player.h.incrementalgamerunlock.eq(1) && player.h.incrementalgamerturn.eq(1))
    {
        player.h.incrementalgamercountingpower = player.h.incrementalgamercountingpower.add(player.h.countingpowerpersecond.mul(delta))
        if (player.h.incrementalgamercountingpower.gte(140))
        {
           countingPrint("incremental_gamer: " + formatWhole(player.h.nextcount))
            player.h.count = player.h.count.add(1)
            player.h.yourturncounting = new Decimal(1)
            player.h.incrementalgamercountingpower = new Decimal(0)
            player.h.downvoidturn = new Decimal(1)
            player.h.incrementalgamerturn = new Decimal(0)
            player.h.ducdatturn = new Decimal(1)
            player.h.paperturn = new Decimal(1)
            layers.h.checkforcountingreset()
            layers.h.checkforclaimsolaritycoal()
            if (player.h.ducdatunlock.eq(1) && player.h.ducdatturn.eq(1)) player.h.ducdatcountingpower = player.h.ducdatcountingpower.add(player.h.countingpowerpersecond)
            if (hasUpgrade("h", 18)) player.h.incrementalgamerpoints = player.h.incrementalgamerpoints.add(player.h.incrementalgamerpointstoget)
            if (player.solarforgecutscene.eq(0)) player.h.solaritycoalchance = Math.random()
        player.h.solaritycoalclaimed = new Decimal(0)
    }
    }
    player.h.incrementalgamerpointstoget = new Decimal(1)
    player.h.incrementalgamerpointstoget = player.h.incrementalgamerpointstoget.mul(buyableEffect("h", 28))
    player.h.incrementalgamerpointstoget = player.h.incrementalgamerpointstoget.mul(buyableEffect("h", 64))
    if (hasUpgrade("h", 16)) player.h.incrementalgamerunlock = new Decimal(1)

    if (player.h.ducdatunlock.eq(1) && player.h.ducdatturn.eq(1))
    {
        if (player.h.ducdatcountingpower.gte(player.h.ducdatcountingpowerreq))
        {
            player.h.count = player.h.count.add(1)
            player.h.yourturncounting = new Decimal(1)
            player.h.ducdatcountingpower = new Decimal(0)
            player.h.downvoidturn = new Decimal(1)
            player.h.incrementalgamerturn = new Decimal(1)
            player.h.ducdatturn = new Decimal(0)
            player.h.paperturn = new Decimal(1)
            countingPrint("ducdat0507: " + formatWhole(player.h.count))
            layers.h.checkforcountingreset()
            layers.h.checkforclaimsolaritycoal()
            if (hasUpgrade("h", 18)) player.h.ducdatpoints = player.h.ducdatpoints.add(player.h.ducdatpointstoget)
            if (player.solarforgecutscene.eq(0)) player.h.solaritycoalchance = Math.random()
        player.h.solaritycoalclaimed = new Decimal(0)
    }
    }
    player.h.ducdatcountingpowerreq = player.h.count.div(10).add(10)
    player.h.ducdatpointstoget = new Decimal(1)
    player.h.ducdatpointstoget = player.h.ducdatpointstoget.mul(buyableEffect("h", 29))
    player.h.ducdatpointstoget = player.h.ducdatpointstoget.mul(buyableEffect("h", 64))
    if (hasUpgrade("h", 18)) player.h.ducdatunlock = new Decimal(1)

    if (hasUpgrade("h", 22)) player.h.flameunlock = new Decimal(1)
    if (isPrime(player.h.count) && player.h.count.neq(3))
    {
        player.h.flameturn = new Decimal(1)
    }
    if (!isPrime(player.h.count))
    {
        player.h.flameturn = new Decimal(0)
    }
    if (player.h.flameunlock.eq(1) && player.h.flameturn.eq(1))
    {
        player.h.flamecountingpower = player.h.flamecountingpower.add(player.h.countingpowerpersecond.mul(delta))
        if (player.h.flamecountingpower.gte(3))
        {
            player.h.count = player.h.count.add(1)
            player.h.yourturncounting = new Decimal(1)
            player.h.flamecountingpower = new Decimal(0)
            player.h.downvoidturn = new Decimal(1)
            player.h.incrementalgamerturn = new Decimal(1)
            player.h.ducdatturn = new Decimal(1)
            player.h.flameturn = new Decimal(0)
            player.h.paperturn = new Decimal(1)
            countingPrint("Flamemaster: " + formatWhole(player.h.count))
            layers.h.checkforcountingreset()
            layers.h.checkforclaimsolaritycoal()
            if (player.h.ducdatunlock.eq(1) && player.h.ducdatturn.eq(1)) player.h.ducdatcountingpower = player.h.ducdatcountingpower.add(player.h.countingpowerpersecond)
            if (hasUpgrade("h", 18)) player.h.flamepoints = player.h.flamepoints.add(player.h.flamepointstoget)
            if (player.solarforgecutscene.eq(0)) player.h.solaritycoalchance = Math.random()
        player.h.solaritycoalclaimed = new Decimal(0)
    }
    }
    player.h.flamepointstoget = new Decimal(0.1)
    player.h.flamepointstoget = player.h.flamepointstoget.mul(buyableEffect("h", 34))
    player.h.flamepointstoget = player.h.flamepointstoget.mul(buyableEffect("h", 64))

    if (hasUpgrade("h", 24)) player.h.paperunlock = new Decimal(1)
    if (player.h.paperunlock.eq(1) && player.h.paperturn.eq(1))
    {
        player.h.papercountingpower = player.h.papercountingpower.add(player.h.countingpowerpersecond.mul(delta))
        if (player.h.papercountingpower.gte(500))
        {
           countingPrint("thepaperpilot: " + formatWhole(player.h.nextcount))
            player.h.count = player.h.count.add(1)
            player.h.yourturncounting = new Decimal(1)
            player.h.papercountingpower = new Decimal(0)
            player.h.downvoidturn = new Decimal(1)
            player.h.incrementalgamerturn = new Decimal(1)
            player.h.ducdatturn = new Decimal(1)
            player.h.paperturn = new Decimal(0)
            layers.h.checkforcountingreset()
            layers.h.checkforclaimsolaritycoal()
            if (player.h.ducdatunlock.eq(1) && player.h.ducdatturn.eq(1)) player.h.ducdatcountingpower = player.h.ducdatcountingpower.add(player.h.countingpowerpersecond)
            if (hasUpgrade("h", 18)) player.h.paperpoints = player.h.paperpoints.add(player.h.paperpointstoget)
            if (player.solarforgecutscene.eq(0)) player.h.solaritycoalchance = Math.random()
        player.h.solaritycoalclaimed = new Decimal(0)
            player.h.norulesduration = new Decimal(10)
    }
    }
    player.h.paperpointstoget = new Decimal(1)
    player.h.paperpointstoget = player.h.paperpointstoget.mul(buyableEffect("h", 36))
    player.h.paperpointstoget = player.h.paperpointstoget.mul(buyableEffect("h", 64))

    player.h.norulesduration = player.h.norulesduration.sub(onepersec.mul(delta))

    //prestige power

    player.h.prestigepowertoget = player.h.willpower.pow(0.5)
    let divide = new Decimal(0)
    divide = player.h.prestigepower.add(player.h.prestigepowertoget.add(1))
    player.h.prestigepowertogetdivide = divide.pow(0.8)
    player.h.prestigepowertoget = player.h.prestigepowertoget.div(player.h.prestigepowertogetdivide)
    player.h.prestigepowertoget = player.h.prestigepowertoget.mul(buyableEffect("h", 44))
    player.h.prestigepowertoget = player.h.prestigepowertoget.mul(buyableEffect("h", 46))
    player.h.prestigepowertoget = player.h.prestigepowertoget.mul(buyableEffect("h", 47))
    player.h.prestigepowertoget = player.h.prestigepowertoget.mul(buyableEffect("h", 48))
    player.h.prestigepowertoget = player.h.prestigepowertoget.mul(buyableEffect("h", 49))
    player.h.prestigepowertoget = player.h.prestigepowertoget.mul(buyableEffect("h", 51))
    player.h.prestigepowertoget = player.h.prestigepowertoget.mul(buyableEffect("h", 54))

    player.h.prestigepowerpause = player.h.prestigepowerpause.sub(1)
    if (player.h.prestigepowerpause.gt(0))
    {
        layers.h.prestigepowerreset();
    }

    player.h.prestigepowereffect = player.h.prestigepower.pow(0.7).add(1)

    //factor grid
    if (player.factorgridscene.eq(14)) {
        player.factorgridcutscene = new Decimal(0)
    }

    if (player.assemblylinescene.eq(12)) {
        player.assemblylinecutscene = new Decimal(0)
        player.inaarexhubcutscene = new Decimal(0)
    }
    if (player.assemblylinescene.gt(0) && player.assemblylinecutscene.eq(1))
    {
        player.inaarexhubcutscene = new Decimal(1)
    }

            //assembly line
            if (player.h.assemblylinetypeselect.eq(1))
            {
                player.h.slotstatus[player.h.assemblylineselect] = new Decimal(1)
                player.h.slotstatuspic[player.h.assemblylineselect] = "<img src='resources/assemblylinered.png'style='width:calc(5%);height:calc(5%);'></img>"
            }
            if (player.h.assemblylinetypeselect.eq(2)) {
                player.h.slotstatus[player.h.assemblylineselect] = new Decimal(2)
                player.h.slotstatuspic[player.h.assemblylineselect] = "<img src='resources/assemblylinegreen.png'style='width:calc(5%);height:calc(5%);'></img>"
            }
            if (player.h.assemblylinetypeselect.eq(3)) {
                player.h.slotstatus[player.h.assemblylineselect] = new Decimal(3)
                player.h.slotstatuspic[player.h.assemblylineselect] = "<img src='resources/assemblylineblue.png'style='width:calc(5%);height:calc(5%);'></img>"
            }
            if (player.h.assemblylinetypeselect.eq(4)) {
                player.h.slotstatus[player.h.assemblylineselect] = new Decimal(4)
                player.h.slotstatuspic[player.h.assemblylineselect] = "<img src='resources/assemblylinearrowwhite.png'style='width:calc(5%);height:calc(5%);'></img>"
            }
            if (player.h.assemblylinetypeselect.eq(5)) {
                player.h.slotstatus[player.h.assemblylineselect] = new Decimal(5)
                player.h.slotstatuspic[player.h.assemblylineselect] = "<img src='resources/assemblylinex.png'style='width:calc(5%);height:calc(5%);'></img>"
            }
    
            let redenergypersecond = new Decimal(1)
            let greenenergypersecond = new Decimal(1)
            let blueenergypersecond = new Decimal(1)
            let transportspeed = new Decimal(0.5)
            let harvestspeed = new Decimal(5)
            let assemblylinespeed = new Decimal(1)
            assemblylinespeed = assemblylinespeed.mul(buyableEffect("h", 58))

            redenergypersecond = redenergypersecond.mul(assemblylinespeed)
            redenergypersecond = redenergypersecond.mul(buyableEffect("h", 55))
            greenenergypersecond = greenenergypersecond.mul(assemblylinespeed)
            greenenergypersecond = greenenergypersecond.mul(buyableEffect("h", 56))
            blueenergypersecond = blueenergypersecond.mul(assemblylinespeed)
            blueenergypersecond = blueenergypersecond.mul(buyableEffect("h", 57))
            transportspeed = transportspeed.mul(assemblylinespeed)
            transportspeed = transportspeed.mul(buyableEffect("h", 59))
            harvestspeed = harvestspeed.mul(assemblylinespeed)
            harvestspeed = harvestspeed.mul(buyableEffect("h", 61))
    
            if (player.h.slotstatus[1].eq(1)) {
                player.h.slotredenergy[1] = player.h.slotredenergy[1].add(redenergypersecond.mul(delta))
            }
            if (player.h.slotstatus[2].eq(1)) {
                player.h.slotredenergy[2] = player.h.slotredenergy[2].add(redenergypersecond.mul(delta))
            }
            if (player.h.slotstatus[3].eq(1)) {
                player.h.slotredenergy[3] = player.h.slotredenergy[3].add(redenergypersecond.mul(delta))
            }
            if (player.h.slotstatus[4].eq(1)) {
                player.h.slotredenergy[4] = player.h.slotredenergy[4].add(redenergypersecond.mul(delta))
            }
            if (player.h.slotstatus[5].eq(1)) {
                player.h.slotredenergy[5] = player.h.slotredenergy[5].add(redenergypersecond.mul(delta))
            }
            if (player.h.slotstatus[6].eq(1)) {
                player.h.slotredenergy[6] = player.h.slotredenergy[6].add(redenergypersecond.mul(delta))
            }
            if (player.h.slotstatus[7].eq(1)) {
                player.h.slotredenergy[7] = player.h.slotredenergy[7].add(redenergypersecond.mul(delta))
            }
            if (player.h.slotstatus[1].eq(2)) {
                player.h.slotgreenenergy[1] = player.h.slotgreenenergy[1].add(greenenergypersecond.mul(delta))
            }
            if (player.h.slotstatus[2].eq(2)) {
                player.h.slotgreenenergy[2] = player.h.slotgreenenergy[2].add(greenenergypersecond.mul(delta))
            }
            if (player.h.slotstatus[3].eq(2)) {
                player.h.slotgreenenergy[3] = player.h.slotgreenenergy[3].add(greenenergypersecond.mul(delta))
            }
            if (player.h.slotstatus[4].eq(2)) {
                player.h.slotgreenenergy[4] = player.h.slotgreenenergy[4].add(greenenergypersecond.mul(delta))
            }
            if (player.h.slotstatus[5].eq(2)) {
                player.h.slotgreenenergy[5] = player.h.slotgreenenergy[5].add(greenenergypersecond.mul(delta))
            }
            if (player.h.slotstatus[6].eq(2)) {
                player.h.slotgreenenergy[6] = player.h.slotgreenenergy[6].add(greenenergypersecond.mul(delta))
            }
            if (player.h.slotstatus[7].eq(2)) {
                player.h.slotgreenenergy[7] = player.h.slotgreenenergy[7].add(greenenergypersecond.mul(delta))
            }
            if (player.h.slotstatus[1].eq(3)) {
                player.h.slotblueenergy[1] = player.h.slotblueenergy[1].add(blueenergypersecond.mul(delta))
            }
            if (player.h.slotstatus[2].eq(3)) {
                player.h.slotblueenergy[2] = player.h.slotblueenergy[2].add(blueenergypersecond.mul(delta))
            }
            if (player.h.slotstatus[3].eq(3)) {
                player.h.slotblueenergy[3] = player.h.slotblueenergy[3].add(blueenergypersecond.mul(delta))
            }
            if (player.h.slotstatus[4].eq(3)) {
                player.h.slotblueenergy[4] = player.h.slotblueenergy[4].add(blueenergypersecond.mul(delta))
            }
            if (player.h.slotstatus[5].eq(3)) {
                player.h.slotblueenergy[5] = player.h.slotblueenergy[5].add(blueenergypersecond.mul(delta))
            }
            if (player.h.slotstatus[6].eq(3)) {
                player.h.slotblueenergy[6] = player.h.slotblueenergy[6].add(blueenergypersecond.mul(delta))
            }
            if (player.h.slotstatus[7].eq(3)) {
                player.h.slotblueenergy[7] = player.h.slotblueenergy[7].add(blueenergypersecond.mul(delta))
            }
            if (player.h.slotstatus[1].eq(4)) {
                if (player.h.slotredenergy[1].gt(1)) {
                    player.h.slotredenergy[1] = player.h.slotredenergy[1].sub(transportspeed.mul(delta))
                    player.h.slotredenergy[2] = player.h.slotredenergy[2].add(transportspeed.mul(delta))
                }
                if (player.h.slotblueenergy[1].gt(1)) {
                    player.h.slotblueenergy[1] = player.h.slotblueenergy[1].sub(transportspeed.mul(delta))
                    player.h.slotblueenergy[2] = player.h.slotblueenergy[2].add(transportspeed.mul(delta))
                }
                if (player.h.slotgreenenergy[1].gt(1)) {
                    player.h.slotgreenenergy[1] = player.h.slotgreenenergy[1].sub(transportspeed.mul(delta))
                    player.h.slotgreenenergy[2] = player.h.slotgreenenergy[2].add(transportspeed.mul(delta))
                }
            }
            if (player.h.slotstatus[2].eq(4)) {
                if (player.h.slotredenergy[1].gt(1)) {
                    player.h.slotredenergy[1] = player.h.slotredenergy[1].sub(transportspeed.mul(delta))
                    player.h.slotredenergy[3] = player.h.slotredenergy[3].add(transportspeed.mul(delta))
                }
                if (player.h.slotblueenergy[1].gt(1)) {
                    player.h.slotblueenergy[1] = player.h.slotblueenergy[1].sub(transportspeed.mul(delta))
                    player.h.slotblueenergy[3] = player.h.slotblueenergy[3].add(transportspeed.mul(delta))
                }
                if (player.h.slotgreenenergy[1].gt(1)) {
                    player.h.slotgreenenergy[1] = player.h.slotgreenenergy[1].sub(transportspeed.mul(delta))
                    player.h.slotgreenenergy[3] = player.h.slotgreenenergy[3].add(transportspeed.mul(delta))
                }
            }
            if (player.h.slotstatus[3].eq(4)) {
                if (player.h.slotredenergy[2].gt(1)) {
                    player.h.slotredenergy[2] = player.h.slotredenergy[2].sub(transportspeed.mul(delta))
                    player.h.slotredenergy[4] = player.h.slotredenergy[4].add(transportspeed.mul(delta))
                }
                if (player.h.slotblueenergy[2].gt(1)) {
                    player.h.slotblueenergy[2] = player.h.slotblueenergy[2].sub(transportspeed.mul(delta))
                    player.h.slotblueenergy[4] = player.h.slotblueenergy[4].add(transportspeed.mul(delta))
                }
                if (player.h.slotgreenenergy[2].gt(1)) {
                    player.h.slotgreenenergy[2] = player.h.slotgreenenergy[2].sub(transportspeed.mul(delta))
                    player.h.slotgreenenergy[4] = player.h.slotgreenenergy[4].add(transportspeed.mul(delta))
                }
            }
            if (player.h.slotstatus[4].eq(4)) {
                if (player.h.slotredenergy[3].gt(1)) {
                    player.h.slotredenergy[3] = player.h.slotredenergy[3].sub(transportspeed.mul(delta))
                    player.h.slotredenergy[5] = player.h.slotredenergy[5].add(transportspeed.mul(delta))
                }
                if (player.h.slotblueenergy[3].gt(1)) {
                    player.h.slotblueenergy[3] = player.h.slotblueenergy[3].sub(transportspeed.mul(delta))
                    player.h.slotblueenergy[5] = player.h.slotblueenergy[5].add(transportspeed.mul(delta))
                }
                if (player.h.slotgreenenergy[3].gt(1)) {
                    player.h.slotgreenenergy[3] = player.h.slotgreenenergy[3].sub(transportspeed.mul(delta))
                    player.h.slotgreenenergy[5] = player.h.slotgreenenergy[5].add(transportspeed.mul(delta))
                }
            }
            if (player.h.slotstatus[5].eq(4)) {
                if (player.h.slotredenergy[4].gt(1)) {
                    player.h.slotredenergy[4] = player.h.slotredenergy[4].sub(transportspeed.mul(delta))
                    player.h.slotredenergy[6] = player.h.slotredenergy[6].add(transportspeed.mul(delta))
                }
                if (player.h.slotblueenergy[4].gt(1)) {
                    player.h.slotblueenergy[4] = player.h.slotblueenergy[4].sub(transportspeed.mul(delta))
                    player.h.slotblueenergy[6] = player.h.slotblueenergy[6].add(transportspeed.mul(delta))
                }
                if (player.h.slotgreenenergy[4].gt(1)) {
                    player.h.slotgreenenergy[4] = player.h.slotgreenenergy[4].sub(transportspeed.mul(delta))
                    player.h.slotgreenenergy[6] = player.h.slotgreenenergy[6].add(transportspeed.mul(delta))
                }
            }
            if (player.h.slotstatus[6].eq(4)) {
                if (player.h.slotredenergy[5].gt(1)) {
                    player.h.slotredenergy[5] = player.h.slotredenergy[5].sub(transportspeed.mul(delta))
                    player.h.slotredenergy[7] = player.h.slotredenergy[7].add(transportspeed.mul(delta))
                }
                if (player.h.slotblueenergy[5].gt(1)) {
                    player.h.slotblueenergy[5] = player.h.slotblueenergy[5].sub(transportspeed.mul(delta))
                    player.h.slotblueenergy[7] = player.h.slotblueenergy[7].add(transportspeed.mul(delta))
                }
                if (player.h.slotgreenenergy[5].gt(1)) {
                    player.h.slotgreenenergy[5] = player.h.slotgreenenergy[5].sub(transportspeed.mul(delta))
                    player.h.slotgreenenergy[7] = player.h.slotgreenenergy[7].add(transportspeed.mul(delta))
                }
            }
            if (player.h.slotstatus[7].eq(4)) {
                console.log("bro this is useless lol")
            }
            if (player.h.slotstatus[1].eq(5)) {
                if (player.h.slotredenergy[1].gt(1)) {
                    player.h.redenergy = player.h.redenergy.add(harvestspeed.mul(delta))
                    player.h.slotredenergy[1] = player.h.slotredenergy[1].sub(harvestspeed.mul(delta))
                }
                if (player.h.slotgreenenergy[1].gt(1)) {
                    player.h.greenenergy = player.h.greenenergy.add(harvestspeed.mul(delta))
                    player.h.slotgreenenergy[1] = player.h.slotgreenenergy[1].sub(harvestspeed.mul(delta))
                }
                if (player.h.slotblueenergy[1].gt(1)) {
                    player.h.blueenergy = player.h.blueenergy.add(harvestspeed.mul(delta))
                    player.h.slotblueenergy[1] = player.h.slotblueenergy[1].sub(harvestspeed.mul(delta))
                }
            }
            if (player.h.slotstatus[2].eq(5)) {
                if (player.h.slotredenergy[2].gt(1)) {
                    player.h.redenergy = player.h.redenergy.add(harvestspeed.mul(delta))
                    player.h.slotredenergy[2] = player.h.slotredenergy[2].sub(harvestspeed.mul(delta))
                }
                if (player.h.slotgreenenergy[2].gt(1)) {
                    player.h.greenenergy = player.h.greenenergy.add(harvestspeed.mul(delta))
                    player.h.slotgreenenergy[2] = player.h.slotgreenenergy[2].sub(harvestspeed.mul(delta))
                }
                if (player.h.slotblueenergy[2].gt(1)) {
                    player.h.blueenergy = player.h.blueenergy.add(harvestspeed.mul(delta))
                    player.h.slotblueenergy[2] = player.h.slotblueenergy[2].sub(harvestspeed.mul(delta))
                }
            }
            if (player.h.slotstatus[3].eq(5)) {
                if (player.h.slotredenergy[3].gt(1)) {
                    player.h.redenergy = player.h.redenergy.add(harvestspeed.mul(delta))
                    player.h.slotredenergy[3] = player.h.slotredenergy[3].sub(harvestspeed.mul(delta))
                }
                if (player.h.slotgreenenergy[3].gt(1)) {
                    player.h.greenenergy = player.h.greenenergy.add(harvestspeed.mul(delta))
                    player.h.slotgreenenergy[3] = player.h.slotgreenenergy[3].sub(harvestspeed.mul(delta))
                }
                if (player.h.slotblueenergy[3].gt(1)) {
                    player.h.blueenergy = player.h.blueenergy.add(harvestspeed.mul(delta))
                    player.h.slotblueenergy[3] = player.h.slotblueenergy[3].sub(harvestspeed.mul(delta))
                }
            }
            if (player.h.slotstatus[4].eq(5)) {
                if (player.h.slotredenergy[4].gt(1)) {
                    player.h.redenergy = player.h.redenergy.add(harvestspeed.mul(delta))
                    player.h.slotredenergy[4] = player.h.slotredenergy[4].sub(harvestspeed.mul(delta))
                }
                if (player.h.slotgreenenergy[4].gt(1)) {
                    player.h.greenenergy = player.h.greenenergy.add(harvestspeed.mul(delta))
                    player.h.slotgreenenergy[4] = player.h.slotgreenenergy[4].sub(harvestspeed.mul(delta))
                }
                if (player.h.slotblueenergy[4].gt(1)) {
                    player.h.blueenergy = player.h.blueenergy.add(harvestspeed.mul(delta))
                    player.h.slotblueenergy[4] = player.h.slotblueenergy[4].sub(harvestspeed.mul(delta))
                }
            }
            if (player.h.slotstatus[5].eq(5)) {
                if (player.h.slotredenergy[5].gt(1)) {
                    player.h.redenergy = player.h.redenergy.add(harvestspeed.mul(delta))
                    player.h.slotredenergy[5] = player.h.slotredenergy[5].sub(harvestspeed.mul(delta))
                }
                if (player.h.slotgreenenergy[5].gt(1)) {
                    player.h.greenenergy = player.h.greenenergy.add(harvestspeed.mul(delta))
                    player.h.slotgreenenergy[5] = player.h.slotgreenenergy[5].sub(harvestspeed.mul(delta))
                }
                if (player.h.slotblueenergy[5].gt(1)) {
                    player.h.blueenergy = player.h.blueenergy.add(harvestspeed.mul(delta))
                    player.h.slotblueenergy[5] = player.h.slotblueenergy[5].sub(harvestspeed.mul(delta))
                }
            }
            if (player.h.slotstatus[6].eq(5)) {
                if (player.h.slotredenergy[6].gt(1)) {
                    player.h.redenergy = player.h.redenergy.add(harvestspeed.mul(delta))
                    player.h.slotredenergy[6] = player.h.slotredenergy[6].sub(harvestspeed.mul(delta))
                }
                if (player.h.slotgreenenergy[6].gt(1)) {
                    player.h.greenenergy = player.h.greenenergy.add(harvestspeed.mul(delta))
                    player.h.slotgreenenergy[6] = player.h.slotgreenenergy[6].sub(harvestspeed.mul(delta))
                }
                if (player.h.slotblueenergy[6].gt(1)) {
                    player.h.blueenergy = player.h.blueenergy.add(harvestspeed.mul(delta))
                    player.h.slotblueenergy[6] = player.h.slotblueenergy[6].sub(harvestspeed.mul(delta))
                }
            }
            if (player.h.slotstatus[7].eq(5)) {
                if (player.h.slotredenergy[7].gt(1)) {
                    player.h.redenergy = player.h.redenergy.add(harvestspeed.mul(delta))
                    player.h.slotredenergy[7] = player.h.slotredenergy[7].sub(harvestspeed.mul(delta))
                }
                if (player.h.slotgreenenergy[7].gt(1)) {
                    player.h.greenenergy = player.h.greenenergy.add(harvestspeed.mul(delta))
                    player.h.slotgreenenergy[7] = player.h.slotgreenenergy[7].sub(harvestspeed.mul(delta))
                }
                if (player.h.slotblueenergy[7].gt(1)) {
                    player.h.blueenergy = player.h.blueenergy.add(harvestspeed.mul(delta))
                    player.h.slotblueenergy[7] = player.h.slotblueenergy[7].sub(harvestspeed.mul(delta))
                }
            }
            if (player.h.slotredenergy[1].lt(0)) {
                player.h.slotredenergy[1] = new Decimal(0)
            }
            if (player.h.slotgreenenergy[1].lt(0)) {
                player.h.slotgreenenergy[1] = new Decimal(0)
            }
            if (player.h.slotblueenergy[1].lt(0)) {
                player.h.slotblueenergy[1] = new Decimal(0)
            }
            if (player.h.slotredenergy[2].lt(0)) {
                player.h.slotredenergy[2] = new Decimal(0)
            }
            if (player.h.slotgreenenergy[2].lt(0)) {
                player.h.slotgreenenergy[2] = new Decimal(0)
            }
            if (player.h.slotblueenergy[2].lt(0)) {
                player.h.slotblueenergy[2] = new Decimal(0)
            }
            if (player.h.slotredenergy[3].lt(0)) {
                player.h.slotredenergy[3] = new Decimal(0)
            }
            if (player.h.slotgreenenergy[3].lt(0)) {
                player.h.slotgreenenergy[3] = new Decimal(0)
            }
            if (player.h.slotblueenergy[3].lt(0)) {
                player.h.slotblueenergy[3] = new Decimal(0)
            }
            if (player.h.slotredenergy[4].lt(0)) {
                player.h.slotredenergy[4] = new Decimal(0)
            }
            if (player.h.slotgreenenergy[4].lt(0)) {
                player.h.slotgreenenergy[4] = new Decimal(0)
            }
            if (player.h.slotblueenergy[4].lt(0)) {
                player.h.slotblueenergy[4] = new Decimal(0)
            }
            if (player.h.slotredenergy[5].lt(0)) {
                player.h.slotredenergy[5] = new Decimal(0)
            }
            if (player.h.slotgreenenergy[5].lt(0)) {
                player.h.slotgreenenergy[5] = new Decimal(0)
            }
            if (player.h.slotblueenergy[5].lt(0)) {
                player.h.slotblueenergy[5] = new Decimal(0)
            }
            if (player.h.slotredenergy[6].lt(0)) {
                player.h.slotredenergy[6] = new Decimal(0)
            }
            if (player.h.slotgreenenergy[6].lt(0)) {
                player.h.slotgreenenergy[6] = new Decimal(0)
            }
            if (player.h.slotblueenergy[6].lt(0)) {
                player.h.slotblueenergy[6] = new Decimal(0)
            }
            if (player.h.slotredenergy[7].lt(0)) {
                player.h.slotredenergy[7] = new Decimal(0)
            }
            if (player.h.slotgreenenergy[7].lt(0)) {
                player.h.slotgreenenergy[7] = new Decimal(0)
            }
            if (player.h.slotblueenergy[7].lt(0)) {
                player.h.slotblueenergy[7] = new Decimal(0)
            }
},
clickables: {
    11: {
        title() { return "RETURN TO HOME BASE (You won't get travels back, so use them wisely)" },
        canClick() { return true },
        unlocked() { return true },
        onClick() {
            player.dimensionalrealm = new Decimal(0)
            player.tab = "m"
        },
        style: { "background-color": "#90EE90", width: '300px', "min-height": '100px' },
    },
    12: {
        title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.hubcutscene.eq(1) },
        unlocked() { return player.hubscene.lt(13) },
        onClick() {
            player.hubscene = player.hubscene.add(1)
        },
    },
    13: {
        title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.hubcutscene.eq(1) },
        unlocked() { return player.hubscene.lt(13) && player.hubscene.neq(0) },
        onClick() {
            player.hubscene = player.hubscene.sub(1)
        },
    },
    14: {
        title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.countingcutscene.eq(1) },
        unlocked() { return player.countingscene.lt(14) },
        onClick() {
            player.countingscene = player.countingscene.add(1)
        },
    },
    15: {
        title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.countingcutscene.eq(1) },
        unlocked() { return player.countingscene.lt(14) && player.countingscene.neq(0) },
        onClick() {
            player.countingscene = player.countingscene.sub(1)
        },
    },
    16: {
        title() { return "+10%" },
        canClick() { return player.h.countingspeed.lt(1.5) },
        unlocked() { return hasUpgrade("h", 23)},
        onClick() {
            player.h.countingspeed = player.h.countingspeed.add(0.1)
        },
        style: { width: '50px', "min-height": '50px' },
    },
    17: {
        title() { return "-10%" },
        canClick() { return player.h.countingspeed.gt(0.01) },
        unlocked() { return hasUpgrade("h", 23)},
        onClick() {
            player.h.countingspeed = player.h.countingspeed.sub(0.1)

        },
        style: { width: '50px', "min-height": '50px' },
    },
    18: {
        title() { return "<h2>Reset for prestige power." },
        canClick() { return player.h.prestigepowertoget.gte(1) },
        unlocked() { return true },
        onClick() {
            player.h.prestigepowerpause = new Decimal(3)
            player.h.prestigepower = player.h.prestigepower.add(player.h.prestigepowertoget)
        },
        style: { width: '400px', "min-height": '100px' },
    },
    19: {
        title() { return "+" + format(player.h.prestigepowertoget) + " PP" },
        canClick() { return player.h.prestigepowertoget.gte(1)  },
        unlocked() { return hasUpgrade("h", 26) },
        onClick() {
            player.h.prestigepowerpause = new Decimal(3)
            player.h.prestigepower = player.h.prestigepower.add(player.h.prestigepowertoget)
        },
        style: {  width: '150px', "min-height": '60px', }
    },
    21: {
        title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.factorgridcutscene.eq(1) },
        unlocked() { return player.factorgridscene.lt(14) },
        onClick() {
            player.factorgridscene = player.factorgridscene.add(1)
        },
    },
    22: {
        title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.factorgridcutscene.eq(1) },
        unlocked() { return player.factorgridscene.lt(14) && player.factorgridscene.neq(0) },
        onClick() {
            player.factorgridscene = player.factorgridscene.sub(1)
        },
    },
    23: {
        title() { return "<img src='resources/assemblylinearrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.assemblylinecutscene.eq(1) },
        unlocked() { return player.assemblylinescene.lt(12) },
        onClick() {
            player.assemblylinescene = player.assemblylinescene.add(1)
        },
    },
    24: {
        title() { return "<img src='resources/backarrow.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return player.assemblylinecutscene.eq(1) },
        unlocked() { return player.assemblylinescene.lt(12) && player.assemblylinescene.neq(0) },
        onClick() {
            player.assemblylinescene = player.assemblylinescene.sub(1)
        },
    },
    25: {
        title() { return "Slot 1" },
        canClick() { return true },
        unlocked() { return player.assemblylinecutscene.eq(0) },
        onClick() {
            player.h.assemblylineselect = new Decimal(1)
        },
        style: { width: '80px', "min-height": '80px' }
    },
    26: {
        title() { return "Slot 2" },
        canClick() { return true },
        unlocked() { return player.assemblylinecutscene.eq(0) },
        onClick() {
            player.h.assemblylineselect = new Decimal(2)
        },
        style: { width: '80px', "min-height": '80px' }
    },
    27: {
        title() { return "Slot 3" },
        canClick() { return true },
        unlocked() { return player.assemblylinecutscene.eq(0) },
        onClick() {
            player.h.assemblylineselect = new Decimal(3)
        },
        style: { width: '80px', "min-height": '80px' }
    },
    28: {
        title() { return "Slot 4" },
        canClick() { return true },
        unlocked() { return player.assemblylinecutscene.eq(0) },
        onClick() {
            player.h.assemblylineselect = new Decimal(4)
        },
        style: { width: '80px', "min-height": '80px' }
    },
    29: {
        title() { return "Slot 5" },
        canClick() { return true },
        unlocked() { return player.assemblylinecutscene.eq(0) },
        onClick() {
            player.h.assemblylineselect = new Decimal(5)
        },
        style: { width: '80px', "min-height": '80px' }
    },
    31: {
        title() { return "Slot 6" },
        canClick() { return true },
        unlocked() { return player.assemblylinecutscene.eq(0) },
        onClick() {
            player.h.assemblylineselect = new Decimal(6)
        },
        style: { width: '80px', "min-height": '80px' }
    },
    32: {
        title() { return "Slot 7" },
        canClick() { return true },
        unlocked() { return player.assemblylinecutscene.eq(0) },
        onClick() {
            player.h.assemblylineselect = new Decimal(7)
        },
        style: { width: '80px', "min-height": '80px' }
    },
    33: {
        title() { return "<img src='resources/assemblylinered.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return true },
        unlocked() { return player.assemblylinecutscene.eq(0) },
        onClick() {
            player.h.assemblylinetypeselect = new Decimal(1)
        },
        style: { width: '80px', "min-height": '80px' }
    },
    34: {
        title() { return "<img src='resources/assemblylinegreen.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return true },
        unlocked() { return player.assemblylinecutscene.eq(0) },
        onClick() {
            player.h.assemblylinetypeselect = new Decimal(2)
        },
        style: { width: '80px', "min-height": '80px' }
    },
    35: {
        title() { return "<img src='resources/assemblylineblue.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return true },
        unlocked() { return player.assemblylinecutscene.eq(0) },
        onClick() {
            player.h.assemblylinetypeselect = new Decimal(3)
        },
        style: { width: '80px', "min-height": '80px' }
    },
    36: {
        title() { return "<img src='resources/assemblylinearrowblack.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return true },
        unlocked() { return player.assemblylinecutscene.eq(0) },
        onClick() {
            player.h.assemblylinetypeselect = new Decimal(4)
        },
        style: { width: '80px', "min-height": '80px' }
    },
    37: {
        title() { return "<img src='resources/assemblylinex.png'style='width:calc(80%);height:calc(80%);margin:10%'></img>" },
        canClick() { return true },
        unlocked() { return player.assemblylinecutscene.eq(0) },
        onClick() {
            player.h.assemblylinetypeselect = new Decimal(5)
        },
        style: { width: '80px', "min-height": '80px' }
    },
    38: {
        title() { return "->" },
        canClick() { return player.h.slotbuyablepage.lt(7) },
        unlocked() { return player.assemblylinecutscene.eq(0) && hasUpgrade("h", 31) },
        onClick() {
            player.h.slotbuyablepage = player.h.slotbuyablepage.add(1)
        },
        style: { width: '50px', "min-height": '50px' }
    },
    39: {
        title() { return "<-" },
        canClick() { return player.h.slotbuyablepage.gt(1) },
        unlocked() { return player.assemblylinecutscene.eq(0) && hasUpgrade("h", 31) },
        onClick() {
            player.h.slotbuyablepage = player.h.slotbuyablepage.sub(1)
        },
        style: { width: '50px', "min-height": '50px' }
    },
},
checkforcountingreset()
{
    if (player.h.count.eq(roundToNearestMultipleOf25(player.h.count)))
    {
        player.h.cancountingreset = new Decimal(1)
        countingPrint("Counting Bot: Hey! You can reset for +" + formatWhole(player.h.count.add(1).div(25).floor()) + " Counting Points.")
        countingPrint('Type "-1" if you want to reset!')
        countingPrint("(You can only reset while your count is a multiple of 25)")
    }
    if (player.h.count.neq(roundToNearestMultipleOf25(player.h.count)))
    {
        player.h.cancountingreset = new Decimal(0)
    }
},
countingreset()
{
    player.h.countingpoints = player.h.countingpoints.add(player.h.countingpointstoget)
    countingPrint("----------------------------------------")
    countingPrint("----------------------------------------")
    countingPrint("----------------------------------------")
    countingPrint("----------------------------------------")
    countingPrint("-----------NEW COUNTING START-----------")
    countingPrint("--------------YOU HAVE " + formatWhole(player.h.countingpoints) + " CP-------------")
    countingPrint("----------------------------------------")
    countingPrint("----------------------------------------")
    countingPrint("----------------------------------------")
    countingPrint("----------------------------------------")
    player.h.count = new Decimal(0)
    player.h.unlockedcountingpoints = new Decimal(1)
},
checkforclaimsolaritycoal()
{
    if (player.h.solaritycoalchance > 0 && player.h.solaritycoalchance < 0.05)
    {
        player.h.canclaimsolaritycoal = new Decimal(1)
        countingPrint("Counting Bot: Oi! Do you want some solarity coal?")
        countingPrint('Type "-2" if you want solarity coal!')
        countingPrint("(Solarity Coal is claimed on meta-prestige reset)")
    }
    if (!(player.h.solaritycoalchance > 0 && player.h.solaritycoalchance < 0.05))
    {
        player.h.canclaimsolaritycoal = new Decimal(0)
    }
},
prestigepowerreset()
{
    player.h.willpower = new Decimal(0)
    player.h.shrinepower = new Decimal(0)

    player.h.buyables[11] = new Decimal(0)
    player.h.buyables[12] = new Decimal(0)
    player.h.buyables[13] = new Decimal(0)
    player.h.buyables[14] = new Decimal(0)
    player.h.buyables[15] = new Decimal(0)
    player.h.buyables[16] = new Decimal(0)
    player.h.buyables[17] = new Decimal(0)
    player.h.buyables[18] = new Decimal(0)
    player.h.buyables[19] = new Decimal(0)
    player.h.buyables[21] = new Decimal(0)
    player.h.buyables[22] = new Decimal(0)
    player.h.buyables[23] = new Decimal(0)
    player.h.buyables[24] = new Decimal(0)
    player.h.buyables[25] = new Decimal(0)
    player.h.buyables[26] = new Decimal(0)
},
upgrades: {
    11:
    {
        title: "Willpower Upgrade I",
        unlocked() { return player.hubcutscene.eq(0) },
        description: "Unlocks willpower buyables and generate 0.01 willpower per second.",
        cost: new Decimal(0),
        currencyDisplayName: "Willpower",
        currencyInternalName: "willpower",
        currencyLocation() { return player.h },
    },
    12:
    {
        title: "Willpower Upgrade II",
        unlocked() { return hasUpgrade("h", 11) },
        description: "Unlocks crafting shrines.",
        cost: new Decimal(20),
        currencyDisplayName: "Willpower",
        currencyInternalName: "willpower",
        currencyLocation() { return player.h },
    },
    13:
    {
        title: "Willpower Upgrade III",
        unlocked() { return hasUpgrade("h", 12) },
        description: "Unlocks prestige tree shrines.",
        cost: new Decimal(60),
        currencyDisplayName: "Willpower",
        currencyInternalName: "willpower",
        currencyLocation() { return player.h },
    },
    14:
    {
        title: "Willpower Upgrade IV",
        unlocked() { return hasUpgrade("h", 13) },
        description: "Unlocks more willpower buyables.",
        cost: new Decimal(400),
        currencyDisplayName: "Willpower",
        currencyInternalName: "willpower",
        currencyLocation() { return player.h },
    },
    15:
    {
        title: "Willpower Upgrade V",
        unlocked() { return hasUpgrade("h", 14) },
        description: "Unlocks counting.",
        cost: new Decimal(1200),
        currencyDisplayName: "Willpower",
        currencyInternalName: "willpower",
        currencyLocation() { return player.h },
    },
    16:
    {
        title: "Incremental Gamer",
        unlocked() { return true },
        description: ":trol:",
        cost: new Decimal(2),
        currencyDisplayName: "Counting Points",
        currencyInternalName: "countingpoints",
        currencyLocation() { return player.h },
    },
    17:
    {
        title: "More Active Counting",
        unlocked() { return hasUpgrade("h", 16) },
        description: "Boosts counting power based off current count.",
        effect() 
        {
             return player[this.layer].count.mul(0.05).add(1).pow(0.25)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        cost: new Decimal(3),
        currencyDisplayName: "Counting Points",
        currencyInternalName: "countingpoints",
        currencyLocation() { return player.h },
    },
    18:
    {
        title: "Duck Fat",
        unlocked() { return hasUpgrade("h", 17) },
        description: "Don't bother me I'm working on JANOARG.",
        cost: new Decimal(5),
        currencyDisplayName: "Counting Points",
        currencyInternalName: "countingpoints",
        currencyLocation() { return player.h },
    },
    19:
    {
        title: "User Points",
        unlocked() { return hasUpgrade("h", 18) },
        description: "Unlocks user points.",
        cost: new Decimal(7),
        currencyDisplayName: "Counting Points",
        currencyInternalName: "countingpoints",
        currencyLocation() { return player.h },
    },
    21:
    {
        title: "Willpower Upgrade VI",
        unlocked() { return hasUpgrade("h", 18) },
        description: "Boosts willpower based on meta-prestige score.",
        effect() 
        {
             return player.m.score.add(1).pow(0.08)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        cost: new Decimal(25000),
        currencyDisplayName: "Willpower",
        currencyInternalName: "willpower",
        currencyLocation() { return player.h },
    },
    22:
    {
        title: "Take them all without hesitation",
        unlocked() { return hasUpgrade("h", 19) },
        description: "Flame.",
        cost: new Decimal(12),
        currencyDisplayName: "Counting Points",
        currencyInternalName: "countingpoints",
        currencyLocation() { return player.h },
    },
    23:
    {
        title: "Control",
        unlocked() { return hasUpgrade("h", 22) },
        description: "Unlocks counting control.",
        cost: new Decimal(20),
        currencyDisplayName: "Counting Points",
        currencyInternalName: "countingpoints",
        currencyLocation() { return player.h },
    },
    24:
    {
        title: "Pape",
        unlocked() { return hasUpgrade("h", 23) && hasUpgrade("c", 12) },
        description: "Curse you Perry the Platypus!",
        cost: new Decimal(34),
        currencyDisplayName: "Counting Points",
        currencyInternalName: "countingpoints",
        currencyLocation() { return player.h },
    },
    25:
    {
        title: "Buyables",
        unlocked() { return hasUpgrade("h", 24) && player.m.quirkenhanceunlock.eq(1) },
        description: "Unlocks counting point buyables.",
        cost: new Decimal(64),
        currencyDisplayName: "Counting Points",
        currencyInternalName: "countingpoints",
        currencyLocation() { return player.h },
    },
    26:
    {
        title: "Willpower Upgrade VII",
        unlocked() { return player.m.translatorunlock.eq(1) },
        description: "Unlocks prestige power.",
        cost: new Decimal(1000000),
        currencyDisplayName: "Willpower",
        currencyInternalName: "willpower",
        currencyLocation() { return player.h },
    },
    27:
    {
        title: "Prestige Power Upgrade I",
        unlocked() { return hasUpgrade("h", 26) },
        description: "Unlocks the factor grid.",
        cost: new Decimal(10),
        currencyDisplayName: "Prestige Power",
        currencyInternalName: "prestigepower",
        currencyLocation() { return player.h },
    },
    28:
    {
        title: "Prestige Power Upgrade II",
        unlocked() { return hasUpgrade("h", 27) },
        description: "Boosts counting points based on crafting points.",
        effect() 
        {
             return player.c.craftingpoints.add(1).div(20).pow(0.08)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        cost: new Decimal(222),
        currencyDisplayName: "Prestige Power",
        currencyInternalName: "prestigepower",
        currencyLocation() { return player.h },
    },
    29:
    {
        title: "Prestige Power Upgrade III",
        unlocked() { return hasUpgrade("h", 28) },
        description: "Unlocks the assembly line.",
        cost: new Decimal(10000),
        currencyDisplayName: "Prestige Power",
        currencyInternalName: "prestigepower",
        currencyLocation() { return player.h },
    },
    31:
    {
        title: "Prestige Power Upgrade IV",
        unlocked() { return hasUpgrade("h", 29) },
        description: "Unlocks slot-specialized assembly buyables.",
        cost: new Decimal(44444),
        currencyDisplayName: "Prestige Power",
        currencyInternalName: "prestigepower",
        currencyLocation() { return player.h },
    },
},
buyables: {
    11: {
        cost(x) { return new Decimal(1.15).pow(x || getBuyableAmount(this.layer, this.id)).mul(0.1) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.1).add(1) },
        unlocked() { return hasUpgrade("h", 11) },
        canAfford() { return player.h.willpower.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Willpower Generator"
        },
        tooltip() {
            return "<h5>Willpower is a form of incremental power that manifests in one's soul."
        },
        display() {
            return "which are boosting willpower by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Willpower"
        },
        buy() {
            let base = new Decimal(0.1)
            let growth = 1.15
            let max = Decimal.affordGeometricSeries(player.h.willpower, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            if (!hasUpgrade("m", 36)) player.h.willpower = player.h.willpower.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    12: {
        cost(x) { return new Decimal(4).pow(x || getBuyableAmount(this.layer, this.id)).mul(0.4) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.01).add(1) },
        unlocked() { return hasUpgrade("h", 11) },
        canAfford() { return player.h.willpower.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Score Bumper"
        },
        tooltip() {
            return "<h5>Willpower is proven to be more effective than incremental power, however it is harder to contain."
        },
        display() {
            return "which are boosting score by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Willpower"
        },
        buy() {
            let base = new Decimal(0.4)
            let growth = 4
            let max = Decimal.affordGeometricSeries(player.h.willpower, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            if (!hasUpgrade("m", 36)) player.h.willpower = player.h.willpower.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    13: {
        cost(x) { return new Decimal(1.5).pow(x || getBuyableAmount(this.layer, this.id)).mul(1.5) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.015).add(1) },
        unlocked() { return hasUpgrade("h", 11) },
        canAfford() { return player.h.willpower.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Crafting Power Booster"
        },
        tooltip() {
            return "<h5>Willpower is a form very much like points. You will unlock layers of prestige in the hub as well."
        },
        display() {
            return "which are boosting crafting power by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Willpower"
        },
        buy() {
            let base = new Decimal(1.5)
            let growth = 1.5
            let max = Decimal.affordGeometricSeries(player.h.willpower, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            if (!hasUpgrade("m", 36)) player.h.willpower = player.h.willpower.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    14: {
        cost(x) { return new Decimal(2.2).pow(x || getBuyableAmount(this.layer, this.id)).mul(0.4) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.03).add(1) },
        unlocked() { return hasUpgrade("h", 12) },
        canAfford() { return player.h.willpower.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Shrine of Scrap Metal"
        },
        display() {
            return "which are boosting scrap metal by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Willpower"
        },
        buy() {
            let base = new Decimal(0.4)
            let growth = 2
            let max = Decimal.affordGeometricSeries(player.h.willpower, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            if (!hasUpgrade("m", 36)) player.h.willpower = player.h.willpower.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    15: {
        cost(x) { return new Decimal(2).pow(x || getBuyableAmount(this.layer, this.id)).mul(1.0) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.03).add(1) },
        unlocked() { return hasUpgrade("h", 12) },
        canAfford() { return player.h.willpower.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Shrine of Wire"
        },
        display() {
            return "which are boosting wires by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Willpower"
        },
        buy() {
            let base = new Decimal(1.0)
            let growth = 2
            let max = Decimal.affordGeometricSeries(player.h.willpower, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            if (!hasUpgrade("m", 36)) player.h.willpower = player.h.willpower.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    16: {
        cost(x) { return new Decimal(2).pow(x || getBuyableAmount(this.layer, this.id)).mul(1.0) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.03).add(1) },
        unlocked() { return hasUpgrade("h", 12) },
        canAfford() { return player.h.willpower.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Shrine of Enhance Powder"
        },
        display() {
            return "which are boosting enhance powder by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Willpower"
        },
        buy() {
            let base = new Decimal(1.0)
            let growth = 2
            let max = Decimal.affordGeometricSeries(player.h.willpower, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            if (!hasUpgrade("m", 36)) player.h.willpower = player.h.willpower.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    17: {
        cost(x) { return new Decimal(2.5).pow(x || getBuyableAmount(this.layer, this.id)).mul(2.5) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.03).add(1) },
        unlocked() { return hasUpgrade("h", 12) },
        canAfford() { return player.h.willpower.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Shrine of Celestial Cells"
        },
        display() {
            return "which are boosting celestial cells by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Willpower"
        },
        buy() {
            let base = new Decimal(2.5)
            let growth = 2.5
            let max = Decimal.affordGeometricSeries(player.h.willpower, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            if (!hasUpgrade("m", 36)) player.h.willpower = player.h.willpower.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    18: {
        cost(x) { return new Decimal(1.5).pow(x || getBuyableAmount(this.layer, this.id)).mul(6) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.1).add(1) },
        unlocked() { return hasUpgrade("h", 13) },
        canAfford() { return player.h.willpower.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Shrine of Time Energy"
        },
        display() {
            return "which are boosting time energy by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Willpower"
        },
        buy() {
            let base = new Decimal(6)
            let growth = 1.5
            let max = Decimal.affordGeometricSeries(player.h.willpower, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            if (!hasUpgrade("m", 36)) player.h.willpower = player.h.willpower.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    19: {
        cost(x) { return new Decimal(1.55).pow(x || getBuyableAmount(this.layer, this.id)).mul(9) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.15).add(1) },
        unlocked() { return hasUpgrade("h", 13) },
        canAfford() { return player.h.willpower.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Shrine of Time Energy Capacity"
        },
        display() {
            return "which are boosting time energy capacity by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Willpower"
        },
        buy() {
            let base = new Decimal(9)
            let growth = 1.55
            let max = Decimal.affordGeometricSeries(player.h.willpower, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            if (!hasUpgrade("m", 36)) player.h.willpower = player.h.willpower.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    21: {
        cost(x) { return new Decimal(1.45).pow(x || getBuyableAmount(this.layer, this.id)).mul(12) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.1).add(1) },
        unlocked() { return hasUpgrade("h", 13) },
        canAfford() { return player.h.willpower.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Shrine of Space"
        },
        display() {
            return "which are boosting space by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Willpower"
        },
        buy() {
            let base = new Decimal(12)
            let growth = 1.45
            let max = Decimal.affordGeometricSeries(player.h.willpower, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            if (!hasUpgrade("m", 36)) player.h.willpower = player.h.willpower.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    22: {
        cost(x) { return new Decimal(1.4).pow(x || getBuyableAmount(this.layer, this.id)).mul(16) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.2).add(1) },
        unlocked() { return hasUpgrade("h", 13) },
        canAfford() { return player.h.willpower.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Shrine of Super Generator Power"
        },
        display() {
            return "which are boosting super generator power by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Willpower"
        },
        buy() {
            let base = new Decimal(16)
            let growth = 1.4
            let max = Decimal.affordGeometricSeries(player.h.willpower, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            if (!hasUpgrade("m", 36)) player.h.willpower = player.h.willpower.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    23: {
        cost(x) { return new Decimal(1.6).pow(x || getBuyableAmount(this.layer, this.id)).mul(25) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.1).add(1) },
        unlocked() { return hasUpgrade("h", 13) },
        canAfford() { return player.h.willpower.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Shrine of Subspace"
        },
        display() {
            return "which are boosting subspace by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Willpower"
        },
        buy() {
            let base = new Decimal(25)
            let growth = 1.6
            let max = Decimal.affordGeometricSeries(player.h.willpower, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            if (!hasUpgrade("m", 36)) player.h.willpower = player.h.willpower.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    24: {
        cost(x) { return new Decimal(1.65).pow(x || getBuyableAmount(this.layer, this.id)).mul(36) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.05).add(1) },
        unlocked() { return hasUpgrade("h", 13) },
        canAfford() { return player.h.willpower.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Shrine of Hindrance Spirit"
        },
        display() {
            return "which are boosting hindrance spirits by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Willpower"
        },
        buy() {
            let base = new Decimal(36)
            let growth = 1.65
            let max = Decimal.affordGeometricSeries(player.h.willpower, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            if (!hasUpgrade("m", 36)) player.h.willpower = player.h.willpower.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    25: {
        cost(x) { return new Decimal(1.175).pow(x || getBuyableAmount(this.layer, this.id)).mul(22) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.1).add(1) },
        unlocked() { return hasUpgrade("h", 14) },
        canAfford() { return player.h.willpower.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Willpower Factor I"
        },
        tooltip() {
            return "<h5>The predecessor gained a decent amount of willpower. Even used the old assembly line."
        },
        display() {
            return "which are boosting willpower by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Willpower"
        },
        buy() {
            let base = new Decimal(22)
            let growth = 1.175
            let max = Decimal.affordGeometricSeries(player.h.willpower, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            if (!hasUpgrade("m", 36)) player.h.willpower = player.h.willpower.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    26: {
        cost(x) { return new Decimal(1.2).pow(x || getBuyableAmount(this.layer, this.id)).mul(222) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.1).add(1) },
        unlocked() { return hasUpgrade("h", 14) },
        canAfford() { return player.h.willpower.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Willpower Factor II"
        },
        tooltip() {
            return "<h5>Willpower can only be generated from the hub. The reason is unknown."
        },
        display() {
            return "which are boosting willpower by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Willpower"
        },
        buy() {
            let base = new Decimal(222)
            let growth = 1.2
            let max = Decimal.affordGeometricSeries(player.h.willpower, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            if (!hasUpgrade("m", 36)) player.h.willpower = player.h.willpower.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    27: {
        cost(x) { return new Decimal(1.3).pow(x || getBuyableAmount(this.layer, this.id)).mul(8) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).add(1) },
        unlocked() { return hasUpgrade("h", 18) },
        canAfford() { return player.h.downvoidpoints.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> More Downvoidness"
        },
        tooltip() {
            return "<h5>Downvoid, the Embodiment of Void. His true power has not awoken yet."
        },
        display() {
            return "which are boosting downvoid points by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Downvoid Points"
        },
        buy() {
            let base = new Decimal(8)
            let growth = 1.3
            let max = Decimal.affordGeometricSeries(player.h.downvoidpoints, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.downvoidpoints = player.h.downvoidpoints.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "#363940",}
    },
    28: {
        cost(x) { return new Decimal(1.3).pow(x || getBuyableAmount(this.layer, this.id)).mul(8) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).add(1) },
        unlocked() { return hasUpgrade("h", 18) },
        canAfford() { return player.h.incrementalgamerpoints.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> More Rementalness"
        },
        tooltip() {
            return "<h5>incremental_gamer. One of galaxy's contributors."
        },
        display() {
            return "which are boosting i_g points by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Incremental Gamer Points"
        },
        buy() {
            let base = new Decimal(8)
            let growth = 1.3
            let max = Decimal.affordGeometricSeries(player.h.incrementalgamerpoints, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.incrementalgamerpoints = player.h.incrementalgamerpoints.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "#ffffff",}
    },
    29: {
        cost(x) { return new Decimal(1.3).pow(x || getBuyableAmount(this.layer, this.id)).mul(8) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).add(1) },
        unlocked() { return hasUpgrade("h", 18) },
        canAfford() { return player.h.ducdatpoints.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> More Ducdatness"
        },
        tooltip() {
            return "<h5>Not much is known about Ducdat's origins."
        },
        display() {
            return "which are boosting ducdat points by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Ducdat Points"
        },
        buy() {
            let base = new Decimal(8)
            let growth = 1.3
            let max = Decimal.affordGeometricSeries(player.h.ducdatpoints, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.ducdatpoints = player.h.ducdatpoints.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "#078493",}
    },
    31: {
        cost(x) { return new Decimal(1.4).pow(x || getBuyableAmount(this.layer, this.id)).mul(12) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.1).add(1) },
        unlocked() { return hasUpgrade("h", 18) },
        canAfford() { return player.h.downvoidpoints.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> More Willpower"
        },
        tooltip() {
            return "<h5>His true power might be more powerful than an incremental god..."
        },
        display() {
            return "which are boosting willpower by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Downvoid Points"
        },
        buy() {
            let base = new Decimal(12)
            let growth = 1.4
            let max = Decimal.affordGeometricSeries(player.h.downvoidpoints, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.downvoidpoints = player.h.downvoidpoints.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "#363940",}
    },
    32: {
        cost(x) { return new Decimal(1.3).pow(x || getBuyableAmount(this.layer, this.id)).mul(8) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.2).add(1) },
        unlocked() { return hasUpgrade("h", 18) },
        canAfford() { return player.h.incrementalgamerpoints.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> More Pure Machines"
        },
        tooltip() {
            return "<h5>He kept a close eye on galaxy after the exile of Yhvr."
        },
        display() {
            return "which are boosting pure machines by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Incremental Gamer Points"
        },
        buy() {
            let base = new Decimal(4)
            let growth = 1.3
            let max = Decimal.affordGeometricSeries(player.h.incrementalgamerpoints, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.incrementalgamerpoints = player.h.incrementalgamerpoints.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "#ffffff",}
    },
    33: {
        cost(x) { return new Decimal(1.35).pow(x || getBuyableAmount(this.layer, this.id)).mul(10) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.1).add(1) },
        unlocked() { return hasUpgrade("h", 18) },
        canAfford() { return player.h.ducdatpoints.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> More Energeciness"
        },
        tooltip() {
            return "<h5>He took leadership over galaxy after the exile of Yhvr."
        },
        display() {
            return "which are boosting incremental energy by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Ducdat Points"
        },
        buy() {
            let base = new Decimal(10)
            let growth = 1.35
            let max = Decimal.affordGeometricSeries(player.h.ducdatpoints, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.ducdatpoints = player.h.ducdatpoints.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "#078493",}
    },
    34: {
        cost(x) { return new Decimal(1.3).pow(x || getBuyableAmount(this.layer, this.id)).mul(1) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.25).add(1) },
        unlocked() { return player.h.flameunlock.eq(1) },
        canAfford() { return player.h.flamepoints.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> More Flameness"
        },
        tooltip() {
            return "<h5>Flame is the ?????? of ???? ??????. He is also the ??????? of ???."
        },
        display() {
            return "which are boosting flame points by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Flame Points"
        },
        buy() {
            let base = new Decimal(1)
            let growth = 1.3
            let max = Decimal.affordGeometricSeries(player.h.flamepoints, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.flamepoints = player.h.flamepoints.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "#A40A67",}
    },
    35: {
        cost(x) { return new Decimal(1.4).pow(x || getBuyableAmount(this.layer, this.id)).mul(2) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.02).add(1) },
        unlocked() { return player.h.flameunlock.eq(1) },
        canAfford() { return player.h.flamepoints.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> More Score"
        },
        tooltip() {
            return "<h5>Flame ?????????? about the ????. He was also an apprentice of ??? ????."
        },
        display() {
            return "which are boosting score by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Flame Points"
        },
        buy() {
            let base = new Decimal(2)
            let growth = 1.4
            let max = Decimal.affordGeometricSeries(player.h.flamepoints, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.flamepoints = player.h.flamepoints.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "#A40A67",}
    },
    36: {
        cost(x) { return new Decimal(1.25).pow(x || getBuyableAmount(this.layer, this.id)).mul(1) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.5).add(1) },
        unlocked() { return player.h.paperunlock.eq(1) },
        canAfford() { return player.h.paperpoints.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> More Profectusness"
        },
        tooltip() {
            return "<h5>Thepaperpilot. Most known for developing profectus. Also a galaxy staff member."
        },
        display() {
            return "which are boosting paper points by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Paper Points"
        },
        buy() {
            let base = new Decimal(1)
            let growth = 1.25
            let max = Decimal.affordGeometricSeries(player.h.paperpoints, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.paperpoints = player.h.paperpoints.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "#2C313D",}
    },
    37: {
        cost(x) { return new Decimal(1.4).pow(x || getBuyableAmount(this.layer, this.id)).mul(3) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.05).add(1).pow(0.6) },
        unlocked() { return player.h.paperunlock.eq(1) },
        canAfford() { return player.h.paperpoints.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> More Craftiness"
        },
        tooltip() {
            return "<h5>Thepaperpilot used the power of the modding tree and amplified it by orders of magnitude. However, only the most skilled can use it for real."
        },
        display() {
            return "which are boosting crafting power by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Paper Points"
        },
        buy() {
            let base = new Decimal(3)
            let growth = 1.4
            let max = Decimal.affordGeometricSeries(player.h.paperpoints, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.paperpoints = player.h.paperpoints.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "#2C313D",}
    },
    38: {
        cost(x) { return new Decimal(1.2).pow(x || getBuyableAmount(this.layer, this.id)).mul(2) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.1).add(1)},
        unlocked() { return hasUpgrade("h", 25) },
        canAfford() { return player.h.countingpoints.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Jacorbian Boost"
        },
        tooltip() {
            return "<h5>1. 2. 3. 4. 5. 6. 7. 8. 9. 10. 11. 12. 13. 14. 15. 16. 17. 18. 19. 20."
        },
        display() {
            return "which are boosting jacorbian energy gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Counting Points"
        },
        buy() {
            let base = new Decimal(2)
            let growth = 1.2
            let max = Decimal.affordGeometricSeries(player.h.countingpoints, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.countingpoints = player.h.countingpoints.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    39: {
        cost(x) { return new Decimal(1.2).pow(x || getBuyableAmount(this.layer, this.id)).mul(4) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.05).add(1).pow(0.55) },
        unlocked() { return hasUpgrade("h", 25) },
        canAfford() { return player.h.countingpoints.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Crafting Point Boost"
        },
        tooltip() {
            return "<h5>21. 22. 23. 24. 25. 26. 27. 28. 29. 30. 31. 32. 33. 34. 35. 36. 37. 38. 39. 40."
        },
        display() {
            return "which are boosting crafting point gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Counting Points"
        },
        buy() {
            let base = new Decimal(4)
            let growth = 1.2
            let max = Decimal.affordGeometricSeries(player.h.countingpoints, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.countingpoints = player.h.countingpoints.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    41: {
        cost(x) { return new Decimal(1.3).pow(x || getBuyableAmount(this.layer, this.id)).mul(7) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.05).add(1).pow(0.65) },
        unlocked() { return hasUpgrade("h", 25) },
        canAfford() { return player.h.countingpoints.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Shrine Power Boost"
        },
        tooltip() {
            return "<h5>0. 1. 10. 11. 100. 101. 110. 111. 1000. 1001. 1010. 1011. 1100. 1101. 1110. 1111."
        },
        display() {
            return "which are boosting shrine power gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Counting Points"
        },
        buy() {
            let base = new Decimal(7)
            let growth = 1.3
            let max = Decimal.affordGeometricSeries(player.h.countingpoints, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.countingpoints = player.h.countingpoints.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    42: {
        cost(x) { return new Decimal(1.175).pow(x || getBuyableAmount(this.layer, this.id)).mul(1) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.06).add(1) },
        unlocked() { return player.factorgridcutscene.eq(0) },
        canAfford() { return player.h.prestigepower.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Grid Factor (1, 1)"
        },
        display() {
            return "which are boosting willpower by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Prestige Power"
        },
        buy() {
            let base = new Decimal(1)
            let growth = 1.175
            let max = Decimal.affordGeometricSeries(player.h.prestigepower, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.prestigepower = player.h.prestigepower.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    43: {
        cost(x) { return new Decimal(1.2).pow(x || getBuyableAmount(this.layer, this.id)).mul(2) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.06).add(1) },
        unlocked() { return player.factorgridcutscene.eq(0) },
        canAfford() { return player.h.prestigepower.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Grid Factor (2, 1)"
        },
        display() {
            return "which are boosting shrine power by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Prestige Power"
        },
        buy() {
            let base = new Decimal(2)
            let growth = 1.2
            let max = Decimal.affordGeometricSeries(player.h.prestigepower, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.prestigepower = player.h.prestigepower.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    44: {
        cost(x) { return new Decimal(1.225).pow(x || getBuyableAmount(this.layer, this.id)).mul(4) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.06).add(1) },
        unlocked() { return player.factorgridcutscene.eq(0) },
        canAfford() { return player.h.prestigepower.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Grid Factor (3, 1)"
        },
        display() {
            return "which are boosting prestige power by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Prestige Power"
        },
        buy() {
            let base = new Decimal(4)
            let growth = 1.225
            let max = Decimal.affordGeometricSeries(player.h.prestigepower, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.prestigepower = player.h.prestigepower.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    45: {
        cost(x) { return new Decimal(1.215).pow(x || getBuyableAmount(this.layer, this.id)).mul(3) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.04).add(1) },
        unlocked() { return player.factorgridcutscene.eq(0) },
        canAfford() { return player.h.prestigepower.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Grid Factor (1, 2)"
        },
        display() {
            return "which are boosting willpower and shrine power by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Prestige Power"
        },
        buy() {
            let base = new Decimal(3)
            let growth = 1.215
            let max = Decimal.affordGeometricSeries(player.h.prestigepower, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.prestigepower = player.h.prestigepower.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    46: {
        cost(x) { return new Decimal(1.235).pow(x || getBuyableAmount(this.layer, this.id)).mul(6) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.04).add(1) },
        unlocked() { return player.factorgridcutscene.eq(0) },
        canAfford() { return player.h.prestigepower.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Grid Factor (2, 2)"
        },
        display() {
            return "which are boosting willpower and prestige power by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Prestige Power"
        },
        buy() {
            let base = new Decimal(6)
            let growth = 1.235
            let max = Decimal.affordGeometricSeries(player.h.prestigepower, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.prestigepower = player.h.prestigepower.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    47: {
        cost(x) { return new Decimal(1.265).pow(x || getBuyableAmount(this.layer, this.id)).mul(10) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.04).add(1) },
        unlocked() { return player.factorgridcutscene.eq(0) },
        canAfford() { return player.h.prestigepower.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Grid Factor (3, 2)"
        },
        display() {
            return "which are boosting shrine power and prestige power by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Prestige Power"
        },
        buy() {
            let base = new Decimal(10)
            let growth = 1.265
            let max = Decimal.affordGeometricSeries(player.h.prestigepower, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.prestigepower = player.h.prestigepower.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    48: {
        cost(x) { return new Decimal(1.4).pow(x || getBuyableAmount(this.layer, this.id)).mul(16) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.03).add(1) },
        unlocked() { return player.factorgridcutscene.eq(0) },
        canAfford() { return player.h.prestigepower.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Grid Factor (1, 3)"
        },
        display() {
            return "which are boosting willpower, shrine power and prestige power by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Prestige Power"
        },
        buy() {
            let base = new Decimal(16)
            let growth = 1.4
            let max = Decimal.affordGeometricSeries(player.h.prestigepower, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.prestigepower = player.h.prestigepower.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    49: {
        cost(x) { return new Decimal(1.42).pow(x || getBuyableAmount(this.layer, this.id)).mul(25) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.045).add(1) },
        unlocked() { return player.factorgridcutscene.eq(0) },
        canAfford() { return player.h.prestigepower.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Grid Factor (2, 3)"
        },
        display() {
            return "which are boosting willpower, shrine power and prestige power by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Prestige Power"
        },
        buy() {
            let base = new Decimal(25)
            let growth = 1.42
            let max = Decimal.affordGeometricSeries(player.h.prestigepower, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.prestigepower = player.h.prestigepower.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    51: {
        cost(x) { return new Decimal(1.44).pow(x || getBuyableAmount(this.layer, this.id)).mul(36) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.06).add(1) },
        unlocked() { return player.factorgridcutscene.eq(0) },
        canAfford() { return player.h.prestigepower.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Grid Factor (3, 3)"
        },
        display() {
            return "which are boosting willpower, shrine power and prestige power by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Prestige Power"
        },
        buy() {
            let base = new Decimal(36)
            let growth = 1.44
            let max = Decimal.affordGeometricSeries(player.h.prestigepower, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.prestigepower = player.h.prestigepower.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', }
    },
    52: {
        cost(x) { return new Decimal(1.2).pow(x || getBuyableAmount(this.layer, this.id)).mul(25) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.1).add(1) },
        unlocked() { return player.assemblylinecutscene.eq(0) },
        canAfford() { return player.h.redenergy.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Red Boost"
        },
        display() {
            return "which are boosting willpower gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Red Energy"
        },
        buy() {
            let base = new Decimal(25)
            let growth = 1.2
            let max = Decimal.affordGeometricSeries(player.h.redenergy, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.redenergy = player.h.redenergy.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "red",}
    },
    53: {
        cost(x) { return new Decimal(1.2).pow(x || getBuyableAmount(this.layer, this.id)).mul(25) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.075).add(1) },
        unlocked() { return player.assemblylinecutscene.eq(0) },
        canAfford() { return player.h.greenenergy.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Green Boost"
        },
        display() {
            return "which are boosting shrine power gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Green Energy"
        },
        buy() {
            let base = new Decimal(25)
            let growth = 1.2
            let max = Decimal.affordGeometricSeries(player.h.greenenergy, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.greenenergy = player.h.greenenergy.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "green",}
    },
    54: {
        cost(x) { return new Decimal(1.2).pow(x || getBuyableAmount(this.layer, this.id)).mul(25) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.05).add(1) },
        unlocked() { return player.assemblylinecutscene.eq(0) },
        canAfford() { return player.h.blueenergy.gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Blue Boost"
        },
        display() {
            return "which are boosting prestige power gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Blue Energy"
        },
        buy() {
            let base = new Decimal(25)
            let growth = 1.2
            let max = Decimal.affordGeometricSeries(player.h.blueenergy, base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.blueenergy = player.h.blueenergy.sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "blue",}
    },
    55: {
        cost(x) { return new Decimal(1.22).pow(x || getBuyableAmount(this.layer, this.id)).mul(8) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.05).add(1) },
        unlocked() { return player.h.slotbuyablepage.eq(1) },
        canAfford() { return player.h.slotredenergy[1].gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Slot 1 Red"
        },
        display() {
            return "which are boosting red energy gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Slot 1 Red Energy"
        },
        buy() {
            let base = new Decimal(8)
            let growth = 1.22
            let max = Decimal.affordGeometricSeries(player.h.slotredenergy[1], base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.slotredenergy[1] = player.h.slotredenergy[1].sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "red",}
    },
    56: {
        cost(x) { return new Decimal(1.22).pow(x || getBuyableAmount(this.layer, this.id)).mul(8) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.05).add(1) },
        unlocked() { return player.h.slotbuyablepage.eq(1) },
        canAfford() { return player.h.slotgreenenergy[1].gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Slot 1 Green"
        },
        display() {
            return "which are boosting green energy gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Slot 1 Green Energy"
        },
        buy() {
            let base = new Decimal(8)
            let growth = 1.22
            let max = Decimal.affordGeometricSeries(player.h.slotgreenenergy[1], base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.slotgreenenergy[1] = player.h.slotgreenenergy[1].sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "green",}
    },
    57: {
        cost(x) { return new Decimal(1.22).pow(x || getBuyableAmount(this.layer, this.id)).mul(8) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.05).add(1) },
        unlocked() { return player.h.slotbuyablepage.eq(1) },
        canAfford() { return player.h.slotblueenergy[1].gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Slot 1 Blue"
        },
        display() {
            return "which are boosting blue energy gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Slot 1 Blue Energy"
        },
        buy() {
            let base = new Decimal(8)
            let growth = 1.22
            let max = Decimal.affordGeometricSeries(player.h.slotblueenergy[1], base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.slotblueenergy[1] = player.h.slotblueenergy[1].sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "blue",}
    },
    58: {
        cost(x) { return new Decimal(1.24).pow(x || getBuyableAmount(this.layer, this.id)).mul(12) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.03).add(1) },
        unlocked() { return player.h.slotbuyablepage.eq(2) },
        canAfford() { return player.h.slotredenergy[2].gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Slot 2 Red"
        },
        display() {
            return "which are boosting total assembly line speed by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Slot 2 Red Energy"
        },
        buy() {
            let base = new Decimal(12)
            let growth = 1.24
            let max = Decimal.affordGeometricSeries(player.h.slotredenergy[2], base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.slotredenergy[2] = player.h.slotredenergy[2].sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "red",}
    },
    59: {
        cost(x) { return new Decimal(1.24).pow(x || getBuyableAmount(this.layer, this.id)).mul(12) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.075).add(1) },
        unlocked() { return player.h.slotbuyablepage.eq(2) },
        canAfford() { return player.h.slotgreenenergy[2].gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Slot 2 Green"
        },
        display() {
            return "which are boosting harvest speed by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Slot 2 Green Energy"
        },
        buy() {
            let base = new Decimal(12)
            let growth = 1.24
            let max = Decimal.affordGeometricSeries(player.h.slotgreenenergy[2], base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.slotgreenenergy[2] = player.h.slotgreenenergy[2].sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "green",}
    },
    61: {
        cost(x) { return new Decimal(1.24).pow(x || getBuyableAmount(this.layer, this.id)).mul(12) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.075).add(1) },
        unlocked() { return player.h.slotbuyablepage.eq(2) },
        canAfford() { return player.h.slotblueenergy[2].gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Slot 2 Blue"
        },
        display() {
            return "which are boosting transfer speed by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Slot 2 Blue Energy"
        },
        buy() {
            let base = new Decimal(12)
            let growth = 1.24
            let max = Decimal.affordGeometricSeries(player.h.slotblueenergy[2], base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.slotblueenergy[2] = player.h.slotblueenergy[2].sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "blue",}
    },
    62: {
        cost(x) { return new Decimal(1.18).pow(x || getBuyableAmount(this.layer, this.id)).mul(7) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.025).add(1) },
        unlocked() { return player.h.slotbuyablepage.eq(3) },
        canAfford() { return player.h.slotredenergy[3].gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Slot 3 Red"
        },
        display() {
            return "which are boosting counting power gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Slot 3 Red Energy"
        },
        buy() {
            let base = new Decimal(7)
            let growth = 1.18
            let max = Decimal.affordGeometricSeries(player.h.slotredenergy[3], base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.slotredenergy[3] = player.h.slotredenergy[3].sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "red",}
    },
    63: {
        cost(x) { return new Decimal(1.18).pow(x || getBuyableAmount(this.layer, this.id)).mul(7) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.04).add(1) },
        unlocked() { return player.h.slotbuyablepage.eq(3) },
        canAfford() { return player.h.slotgreenenergy[3].gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Slot 3 Green"
        },
        display() {
            return "which are boosting counting points gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Slot 3 Green Energy"
        },
        buy() {
            let base = new Decimal(7)
            let growth = 1.18
            let max = Decimal.affordGeometricSeries(player.h.slotgreenenergy[3], base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.slotgreenenergy[3] = player.h.slotgreenenergy[3].sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "green",}
    },
    64: {
        cost(x) { return new Decimal(1.18).pow(x || getBuyableAmount(this.layer, this.id)).mul(7) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.035).add(1) },
        unlocked() { return player.h.slotbuyablepage.eq(3) },
        canAfford() { return player.h.slotblueenergy[3].gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Slot 3 Blue"
        },
        display() {
            return "which are boosting user points gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Slot 3 Blue Energy"
        },
        buy() {
            let base = new Decimal(7)
            let growth = 1.18
            let max = Decimal.affordGeometricSeries(player.h.slotblueenergy[3], base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.slotblueenergy[3] = player.h.slotblueenergy[3].sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "blue",}
    },
    65: {
        cost(x) { return new Decimal(1.2).pow(x || getBuyableAmount(this.layer, this.id)).mul(15) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.025).add(1) },
        unlocked() { return player.h.slotbuyablepage.eq(4) },
        canAfford() { return player.h.slotredenergy[4].gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Slot 4 Red"
        },
        display() {
            return "which are boosting crafting power gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Slot 4 Red Energy"
        },
        buy() {
            let base = new Decimal(15)
            let growth = 1.2
            let max = Decimal.affordGeometricSeries(player.h.slotredenergy[4], base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.slotredenergy[4] = player.h.slotredenergy[4].sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "red",}
    },
    66: {
        cost(x) { return new Decimal(1.22).pow(x || getBuyableAmount(this.layer, this.id)).mul(18) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.04).add(1) },
        unlocked() { return player.h.slotbuyablepage.eq(4) },
        canAfford() { return player.h.slotgreenenergy[4].gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Slot 4 Green"
        },
        display() {
            return "which are boosting crafting points gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Slot 4 Green Energy"
        },
        buy() {
            let base = new Decimal(18)
            let growth = 1.22
            let max = Decimal.affordGeometricSeries(player.h.slotgreenenergy[4], base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.slotgreenenergy[4] = player.h.slotgreenenergy[4].sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "green",}
    },
    67: {
        cost(x) { return new Decimal(1.18).pow(x || getBuyableAmount(this.layer, this.id)).mul(21) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.035).add(1) },
        unlocked() { return player.h.slotbuyablepage.eq(4) },
        canAfford() { return player.h.slotblueenergy[4].gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Slot 4 Blue"
        },
        display() {
            return "which are increasing solarity capacity by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Slot 4 Blue Energy"
        },
        buy() {
            let base = new Decimal(21)
            let growth = 1.18
            let max = Decimal.affordGeometricSeries(player.h.slotblueenergy[4], base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.slotblueenergy[4] = player.h.slotblueenergy[4].sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "blue",}
    },
    68: {
        cost(x) { return new Decimal(1.15).pow(x || getBuyableAmount(this.layer, this.id)).mul(13) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.005).add(1) },
        unlocked() { return player.h.slotbuyablepage.eq(5) },
        canAfford() { return player.h.slotredenergy[5].gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Slot 5 Red"
        },
        display() {
            return "which are boosting meta-prestige score by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Slot 5 Red Energy"
        },
        buy() {
            let base = new Decimal(13)
            let growth = 1.15
            let max = Decimal.affordGeometricSeries(player.h.slotredenergy[5], base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.slotredenergy[5] = player.h.slotredenergy[5].sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "red",}
    },
    69: {
        cost(x) { return new Decimal(1.16).pow(x || getBuyableAmount(this.layer, this.id)).mul(14) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.02).add(1) },
        unlocked() { return player.h.slotbuyablepage.eq(5) },
        canAfford() { return player.h.slotgreenenergy[5].gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Slot 5 Green"
        },
        display() {
            return "which are boosting incremental energy gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Slot 5 Green Energy"
        },
        buy() {
            let base = new Decimal(14)
            let growth = 1.16
            let max = Decimal.affordGeometricSeries(player.h.slotgreenenergy[5], base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.slotgreenenergy[5] = player.h.slotgreenenergy[5].sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "green",}
    },
    71: {
        cost(x) { return new Decimal(1.17).pow(x || getBuyableAmount(this.layer, this.id)).mul(15) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.03).add(1) },
        unlocked() { return player.h.slotbuyablepage.eq(5) },
        canAfford() { return player.h.slotblueenergy[5].gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Slot 5 Blue"
        },
        display() {
            return "which are boosting meta-prestige time gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Slot 5 Blue Energy"
        },
        buy() {
            let base = new Decimal(15)
            let growth = 1.17
            let max = Decimal.affordGeometricSeries(player.h.slotblueenergy[5], base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.slotblueenergy[5] = player.h.slotblueenergy[5].sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "blue",}
    },
    72: {
        cost(x) { return new Decimal(1.155).pow(x || getBuyableAmount(this.layer, this.id)).mul(15) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.05).add(1) },
        unlocked() { return player.h.slotbuyablepage.eq(6) },
        canAfford() { return player.h.slotredenergy[6].gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Slot 6 Red"
        },
        display() {
            return "which are boosting space gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Slot 6 Red Energy"
        },
        buy() {
            let base = new Decimal(15)
            let growth = 1.155
            let max = Decimal.affordGeometricSeries(player.h.slotredenergy[6], base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.slotredenergy[6] = player.h.slotredenergy[6].sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "red",}
    },
    73: {
        cost(x) { return new Decimal(1.16).pow(x || getBuyableAmount(this.layer, this.id)).mul(11) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.05).add(1) },
        unlocked() { return player.h.slotbuyablepage.eq(6) },
        canAfford() { return player.h.slotgreenenergy[6].gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Slot 6 Green"
        },
        display() {
            return "which are boosting time energy gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Slot 6 Green Energy"
        },
        buy() {
            let base = new Decimal(11)
            let growth = 1.16
            let max = Decimal.affordGeometricSeries(player.h.slotgreenenergy[6], base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.slotgreenenergy[6] = player.h.slotgreenenergy[6].sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "green",}
    },
    74: {
        cost(x) { return new Decimal(1.165).pow(x || getBuyableAmount(this.layer, this.id)).mul(9) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.075).add(1) },
        unlocked() { return player.h.slotbuyablepage.eq(6) },
        canAfford() { return player.h.slotblueenergy[6].gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Slot 6 Blue"
        },
        display() {
            return "which are boosting time energy capacity by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Slot 6 Blue Energy"
        },
        buy() {
            let base = new Decimal(9)
            let growth = 1.165
            let max = Decimal.affordGeometricSeries(player.h.slotblueenergy[6], base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.slotblueenergy[6] = player.h.slotblueenergy[6].sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "blue",}
    },
    75: {
        cost(x) { return new Decimal(1.23).pow(x || getBuyableAmount(this.layer, this.id)).mul(25) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.05).add(1) },
        unlocked() { return player.h.slotbuyablepage.eq(7) },
        canAfford() { return player.h.slotredenergy[7].gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Slot 7 Red"
        },
        display() {
            return "which are boosting jacorbian energy gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Slot 7 Red Energy"
        },
        buy() {
            let base = new Decimal(25)
            let growth = 1.23
            let max = Decimal.affordGeometricSeries(player.h.slotredenergy[7], base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.slotredenergy[7] = player.h.slotredenergy[7].sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "red",}
    },
    76: {
        cost(x) { return new Decimal(1.16).pow(x || getBuyableAmount(this.layer, this.id)).mul(22) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.02).add(1) },
        unlocked() { return player.h.slotbuyablepage.eq(7) },
        canAfford() { return player.h.slotgreenenergy[7].gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Slot 7 Green"
        },
        display() {
            return "which are boosting jacorbian runes gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Slot 7 Green Energy"
        },
        buy() {
            let base = new Decimal(22)
            let growth = 1.225
            let max = Decimal.affordGeometricSeries(player.h.slotgreenenergy[7], base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.slotgreenenergy[7] = player.h.slotgreenenergy[7].sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "green",}
    },
    77: {
        cost(x) { return new Decimal(1.165).pow(x || getBuyableAmount(this.layer, this.id)).mul(24) },
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.03).add(1) },
        unlocked() { return player.h.slotbuyablepage.eq(7) },
        canAfford() { return player.h.slotblueenergy[7].gte(this.cost()) },
        title() {
            return format(getBuyableAmount(this.layer, this.id), 0) + "<br/> Slot 7 Blue"
        },
        display() {
            return "which are boosting beacon level gain by x" + format(tmp[this.layer].buyables[this.id].effect) + ".\n\
                Cost: " + format(tmp[this.layer].buyables[this.id].cost) + " Slot 7 Blue Energy"
        },
        buy() {
            let base = new Decimal(24)
            let growth = 1.22
            let max = Decimal.affordGeometricSeries(player.h.slotblueenergy[7], base, growth, getBuyableAmount(this.layer, this.id))
            let cost = Decimal.sumGeometricSeries(max, base, growth, getBuyableAmount(this.layer, this.id))
            player.h.slotblueenergy[7] = player.h.slotblueenergy[7].sub(cost)
            setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(max))
        },
        style: { width: '275px', height: '150px', "background-color": "blue",}
    },
},
milestones: {

},
challenges: {
},
bars: {
    downvoidbar: {
        unlocked() { return player.h.downvoidunlock.eq(1) && player.countingcutscene.eq(0) },
        direction: RIGHT,
        width: 250,
        height: 100,
        progress() {
            return player.h.downvoidcountingpower.div(6)
        },
        fillStyle: {
            "background-color": "#363940",
        },
        style: {
            "color": "white",
        },
        display() {
            return player.h.downvoidturn.eq(1) ? "Downvoid<br><img src='resources/downvoid.jpg' style='width:calc(15%);height:calc(15%);'></img><h5>" + format(player.h.downvoidcountingpower) + "/6.00<h5> counting power for #counting.</h5>" : "Downvoid<br><img src='resources/downvoid.jpg' style='width:calc(15%);height:calc(15%);'></img><h5>It is not downvoid's turn.</h5>";
        },
    },
    incrementalgamerbar: {
        unlocked() { return player.h.incrementalgamerunlock.eq(1) },
        direction: RIGHT,
        width: 250,
        height: 100,
        progress() {
            return player.h.incrementalgamercountingpower.div(140)
        },
        fillStyle: {
            "background-color": "#ffffff",
        },
        style: {
            "color": "black",
        },
        display() {
            return player.h.incrementalgamerturn.eq(1) ? "incremental_gamer<br><img src='resources/troll.png' style='width:calc(15%);height:calc(15%);'></img><h5>" + format(player.h.incrementalgamercountingpower) + "/140.00<h5> counting power for #counting.</h5>" : "incremental_gamer<br><img src='resources/troll.png' style='width:calc(15%);height:calc(15%);'></img><h5>It is not incremental_gamer's turn.</h5>";
        },
    },
    ducdatbar: {
        unlocked() { return player.h.ducdatunlock.eq(1) },
        direction: RIGHT,
        width: 250,
        height: 100,
        progress() {
            return player.h.ducdatcountingpower.div(player.h.ducdatcountingpowerreq)
        },
        fillStyle: {
            "background-color": "#078493",
        },
        style: {
            "color": "white",
        },
        display() {
            return player.h.ducdatturn.eq(1) ? "Ducdat0507<br><img src='resources/ducdat.png' style='width:calc(15%);height:calc(15%);'></img><h6>" + format(player.h.ducdatcountingpower) + "/" + format(player.h.ducdatcountingpowerreq) + " power for #counting. (gained per count, not per second)</h5>" : "Ducdat0507<br><img src='resources/ducdat.png' style='width:calc(15%);height:calc(15%);'></img><h5>It is not ducdat's turn.</h5>";
        },
    },
    flamebar: {
        unlocked() { return player.h.flameunlock.eq(1) },
        direction: RIGHT,
        width: 250,
        height: 100,
        progress() {
            return player.h.flamecountingpower.div(3)
        },
        fillStyle: {
            "background-color": "#A40A67",
        },
        style: {
            "color": "white",
        },
        display() {
            return player.h.flameturn.eq(1) ? "Flamemaster<br><img src='resources/flamemaster.png' style='width:calc(15%);height:calc(15%);'></img><h5>" + format(player.h.flamecountingpower) + "/3.00<br> counting power for #counting.</h5>" : "Flamemaster<br><img src='resources/flamemaster.png' style='width:calc(15%);height:calc(15%);'></img><h5>Flame will go on prime numbers.</h5>";
        },
    },
    paperbar: {
        unlocked() { return player.h.paperunlock.eq(1) && player.h.norulesduration.lte(0) },
        direction: RIGHT,
        width: 250,
        height: 100,
        progress() {
            return player.h.papercountingpower.div(500)
        },
        fillStyle: {
            "background-color": "#2C313D",
        },
        style: {
            "color": "white",
        },
        display() {
            return player.h.paperturn.eq(1) ? "Thepaperpilot<br><img src='resources/paperpilot.png' style='width:calc(15%);height:calc(15%);'></img><h5>" + format(player.h.papercountingpower) + "/500.00<br> counting power for #counting.</h5>" : "Thepaperpilot<br><img src='resources/paperpilot.png' style='width:calc(15%);height:calc(15%);'></img><h5>It is not Paper's turn.</h5>";
        },
    },
    norulesbar: {
        unlocked() { return player.h.paperunlock.eq(1) && player.h.norulesduration.gt(0) },
        direction: RIGHT,
        width: 250,
        height: 100,
        progress() {
            return player.h.norulesduration.div(10)
        },
        fillStyle: {
            "background-color": "#2C313D",
        },
        style: {
            "color": "white",
        },
        display() {
            return "NO RULES! Unlimited turns and double counting power.";
        },
    },
},
infoboxes: {
},
microtabs: {
stuff: {
    "Realm Travel": {
        buttonStyle() { return { 'color': '#68e8f4' } },
        unlocked() { return true },
        content:
            [
                ["blank", "25px"],
                ["raw-html", function () { return "<h2>You have " + formatWhole(player.c.dimensionaltickets) + " dimensional realm tickets." }, { "color": "#90EE90", "font-size": "18px", "font-family": "monospace" }],
                ["raw-html", function () { return "<h3>You have " + formatWhole(player.m.dimensionalrealmtravels) + " dimensional realm travels." }, { "color": "#90EE90", "font-size": "18px", "font-family": "monospace" }],
                ["blank", "25px"],
                ["row", [["clickable", 11]]],
            ]

    },
    "Willpower": {
        buttonStyle() { return { 'color': '#68e8f4' } },
        unlocked() { return true },
        content:
            [
    ["microtabs", "willpower", { 'border-width': '0px' }],

        ]

    },
    "Prestige Power": {
        buttonStyle() { return { 'color': '#68e8f4' } },
        unlocked() { return hasUpgrade("h", 26) },
        content:
            [
    ["microtabs", "prestigepower", { 'border-width': '0px' }],

        ]

    },
},
shrines: {
    "Crafting": {
        buttonStyle() { return { 'color': '#68e8f4' } },
        unlocked() { return true },
        content:
            [
    ["raw-html", function () { return "<h3>You have " + format(player.h.shrinepower) + " shrine power, which boosts willpower by x" + format(player.h.shrinepowereffect) + "." }, { "color": "#68e8f4", "font-size": "24px", "font-family": "monospace" }],
    ["raw-html", function () { return "<h4>You are gaining " + format(player.h.shrinepowerpersecond) + " shrine power per second." }, { "color": "#68e8f4", "font-size": "24px", "font-family": "monospace" }],
    ["blank", "25px"],
            ["row", [["buyable", 14], ["buyable", 15], ["buyable", 16], ["buyable", 17]]],
]

    },
    "Prestige Tree": {
        buttonStyle() { return { 'color': '#68e8f4' } },
        unlocked() { return hasUpgrade("h", 13) },
        content:
            [
    ["raw-html", function () { return "<h3>You have " + format(player.h.shrinepower) + " shrine power, which boosts willpower by x" + format(player.h.shrinepowereffect) + "."}, { "color": "#68e8f4", "font-size": "24px", "font-family": "monospace" }],
    ["raw-html", function () { return "<h4>You are gaining " + format(player.h.shrinepowerpersecond) + " shrine power per second." }, { "color": "#68e8f4", "font-size": "24px", "font-family": "monospace" }],
    ["blank", "25px"],
            ["row", [["buyable", 18], ["buyable", 19], ["buyable", 21], ["buyable", 22]]],
            ["row", [["buyable", 23], ["buyable", 24]]],
]

    },
},
willpower: {
    "Main": {
        buttonStyle() { return { 'color': '#68e8f4' } },
        unlocked() { return true },
        content:
            [
            ["raw-html", function () { return player.hubscene.eq(1) ? "<h1>Welcome to the hub. One of my creations for the prestige tree." : "" }, { "color": "#68e8f4", "font-size": "18px"}],
            ["raw-html", function () { return player.hubscene.eq(2) ? "<h1>If meta-prestige and hub got added, who knows how powerful the tree could've been." : "" }, { "color": "#68e8f4", "font-size": "18px"}],
            ["raw-html", function () { return player.hubscene.eq(3) ? "<h1>Your predecessor used to use the hub. It helped with a lot." : "" }, { "color": "#68e8f4", "font-size": "18px"}],
            ["raw-html", function () { return player.hubscene.eq(4) ? "<h1>Why are you using the hub? Because you will return to singularity." : "" }, { "color": "#68e8f4", "font-size": "18px"}],
            ["raw-html", function () { return player.hubscene.eq(5) ? "<h1>However, this time, the hub is much more harsh and painful." : "" }, { "color": "#68e8f4", "font-size": "18px"}],
            ["raw-html", function () { return player.hubscene.eq(6) ? "<h1>Instead of being put under one Aarex timewall, now it's under two." : "" }, { "color": "#68e8f4", "font-size": "18px"}],
            ["raw-html", function () { return player.hubscene.eq(7) ? "<h1>Before you get to singularity, you must pass a part of the enhance path." : "" }, { "color": "#68e8f4", "font-size": "18px"}],
            ["raw-html", function () { return player.hubscene.eq(8) ? "<h1>Singularity is harsh. You know what happened." : "" }, { "color": "#68e8f4", "font-size": "18px"}],
            ["raw-html", function () { return player.hubscene.eq(9) ? "<h1>We must get you the most preparation for this task." : "" }, { "color": "#68e8f4", "font-size": "18px"}],
            ["raw-html", function () { return player.hubscene.eq(10) ? "<h1>You can free us. Me, Jacorb, and Yhvr." : "" }, { "color": "#68e8f4", "font-size": "18px"}],
            ["raw-html", function () { return player.hubscene.eq(11) ? "<h1>You just beat Ce308! Even witnessing those horrors, you keep going. Good luck." : "" }, { "color": "#68e8f4", "font-size": "18px"}],
            ["raw-html", function () { return player.hubscene.eq(12) ? "<h1>CHAPTER 2: PREDECESSOR" : "" }, { "color": "white", "font-size": "36px"}],
            ["blank", "25px"],
            ["row", [["clickable", 13], ["clickable", 12]]],
            ["row", [["buyable", 11], ["buyable", 12], ["buyable", 13]]],
            ["row", [["buyable", 25], ["buyable", 26]]],
            ["blank", "25px"],
            ["row", [["upgrade", 11], ["upgrade", 12], ["upgrade", 13], ["upgrade", 14], ["upgrade", 15], ["upgrade", 21]]],
            ["row", [["upgrade", 26]]],
        ]

    },
    "Shrines": {
        buttonStyle() { return { 'color': '#68e8f4' } },
        unlocked() { return hasUpgrade("h", 12) },
        content:
            [
    ["microtabs", "shrines", { 'border-width': '0px' }],
            ]

    },
    "Counting": {
        buttonStyle() { return { 'color': '#7289DA', 'border-color': '#7289DA' } },
        unlocked() { return hasUpgrade("h", 15) },
        content:
            [
    ["microtabs", "counting", { 'border-width': '0px' }],
            ]

    },
},
counting: {
    "#counting": {
        buttonStyle() { return {  'color': '#7289DA', 'border-color': '#7289DA' } },
        unlocked() { return true },
        content:
            [
                ["raw-html", function () { return player.countingscene.eq(1) ? "<h1>Counting. You've made it to this point." : "" }, { "color": "#68e8f4", "font-size": "18px"}],
                ["raw-html", function () { return player.countingscene.eq(2) ? "<h1>It has been tradition to count together in incremental communities." : "" }, { "color": "#68e8f4", "font-size": "18px"}],
                ["raw-html", function () { return player.countingscene.eq(3) ? "<h1>Basically, it was a way to play a multiplayer incremental." : "" }, { "color": "#68e8f4", "font-size": "18px"}],
                ["raw-html", function () { return player.countingscene.eq(4) ? "<h1>Some people took counting seriously, and did it for hours at a time." : "" }, { "color": "#68e8f4", "font-size": "18px"}],
                ["raw-html", function () { return player.countingscene.eq(5) ? "<h1>It's sad that I cannot count while in exile." : "" }, { "color": "#68e8f4", "font-size": "18px"}],
                ["raw-html", function () { return player.countingscene.eq(6) ? "<h1>You must do it in my name." : "" }, { "color": "#68e8f4", "font-size": "18px"}],
                ["raw-html", function () { return player.countingscene.eq(7) ? "<h1>I hope you will become a great counter one day." : "" }, { "color": "#68e8f4", "font-size": "18px"}],
                ["raw-html", function () { return player.countingscene.eq(8) ? "<h1>There are also many other types of counting." : "" }, { "color": "#68e8f4", "font-size": "18px"}],
                ["raw-html", function () { return player.countingscene.eq(9) ? "<h1>You'll unlock those later." : "" }, { "color": "#68e8f4", "font-size": "18px"}],
                ["raw-html", function () { return player.countingscene.eq(10) ? "<h1>In the meantime, make sure to work on the SOLAR FORGE." : "" }, { "color": "#68e8f4", "font-size": "18px"}],
                ["raw-html", function () { return player.countingscene.eq(11) ? "<h1>Once you get far enough in both crafting and hub, you'll unlock more content." : "" }, { "color": "#68e8f4", "font-size": "18px"}],
                ["raw-html", function () { return player.countingscene.eq(12) ? "<h1>This content will be the gateway to finding your predecessor." : "" }, { "color": "#68e8f4", "font-size": "18px"}],
                ["raw-html", function () { return player.countingscene.eq(13) ? "<h1>Now go on, start counting. -Aarex out." : "" }, { "color": "#68e8f4", "font-size": "18px"}],
                ["row", [["clickable", 15], ["clickable", 14]]],
    ["raw-html", function () { return player.countingcutscene.eq(0) ? "<h3>+" + format(player.h.countingpowerpersecond) + " counting power per second": "" }, { "color": "#7289DA", "font-size": "18px", "font-family": "monospace" }],
    ["blank", "25px"],
    ["row", [    ["column", [
        ["raw-html", function () { return player.countingcutscene.eq(0) ? formatWhole(player.h.count) + " -> x" + format(player.h.counteffect) + " to willpower." : ""}, { "color": "#7289DA", "font-size": "24px", "font-family": "monospace" }],
        ["raw-html", function () { return player.countingcutscene.eq(0) ? "Next: " + formatWhole(player.h.nextcount) : ""}, { "color": "#7289DA", "font-size": "16px", "font-family": "monospace" }],
        ["raw-html", () => `<div style="width:$404px;text-align:center;margin:20px;">
        ${player.h.countingchat.map((x, i) => `<span style="opacity:1">${x}</span><br/>`).join("")}
        &gt;`],
        ["text-input", "countinput", { 
                        color: "var(--color)", 
                        width: "400px",
                        "text-align": "left",
                        "font-size": "32px",
                        border: "2px solid #ffffff17", 
                        background: "var(--background)", 
                    }],
                    ["raw-html", function () { return player.countingcutscene.eq(0) && player.h.yourturncounting.eq(1) ? "It is your turn" : ""}, { "color": "#68e8f4", "font-size": "32px", "font-family": "monospace" }],
                    ["raw-html", function () { return player.countingcutscene.eq(0) && player.h.yourturncounting.eq(0) ? "It is not your turn" : ""}, { "color": "#68e8f4", "font-size": "32px", "font-family": "monospace" }], ["blank", "25px"], 
        ]], ["blank", "25px"], ["column", [["bar", "downvoidbar"], ["bar", "incrementalgamerbar"], ["bar", "ducdatbar"], ["bar", "flamebar"]]], ["column", [["bar", "paperbar"], ["bar", "norulesbar"]]]]],
    ["blank", "25px"], 
    ["raw-html", function () { return player.countingcutscene.eq(0) && hasUpgrade("h", 23) ? "<h3>Counting Speed: x" + format(player.h.countingspeed) + ".": "" }, { "color": "#7289DA", "font-size": "18px", "font-family": "monospace" }],
    ["blank", "25px"], 
    ["row", [["clickable", 16], ["clickable", 17]]],
    ],
    },
    "Counting Points": {
        buttonStyle() { return {  'color': '#7289DA', 'border-color': '#7289DA' } },
        unlocked() { return player.h.unlockedcountingpoints.eq(1) },
        content:
        [
    ["raw-html", function () { return "<h2>You have " + format(player.h.countingpoints) + " counting points, which boost counting power by x" + format(player.h.countingpointseffect) + "."}, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
    ["raw-html", function () { return "<h3>You will gain " + format(player.h.countingpointstoget) + " counting points on reset."}, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
    ["blank", "25px"], 
    ["row", [["upgrade", 16], ["upgrade", 17], ["upgrade", 18], ["upgrade", 19], ["upgrade", 22], ["upgrade", 23], ["upgrade", 24], ["upgrade", 25]]],
    ["blank", "25px"], 
    ["row", [["buyable", 38], ["buyable", 39], ["buyable", 41]]], 
],
    },
    "User Points": {
        buttonStyle() { return {  'color': '#7289DA', 'border-color': '#7289DA' } },
        unlocked() { return hasUpgrade("h", 19) },
        content:
        [
            ["row", [
            ["column", [
    ["raw-html", function () { return "<h2>You have " + format(player.h.downvoidpoints) + " downvoid points. (+" + format(player.h.downvoidpointstoget) + ")"}],
    ["row", [["buyable", 27] ,["buyable", 31]]],
    ["blank", "25px"], 
    ["raw-html", function () { return "<h2>You have " + format(player.h.incrementalgamerpoints) + " i_g points. (+" + format(player.h.incrementalgamerpointstoget) + ")"}],
    ["row", [["buyable", 28], ["buyable", 32]]],
    ["blank", "25px"], 
    ["raw-html", function () { return "<h2>You have " + format(player.h.ducdatpoints) + " ducdat points. (+" + format(player.h.ducdatpointstoget) + ")"}],                        
    ["row", [["buyable", 29], ["buyable", 33]]]
            ]], ["blank", "25px"],
            ["column", [
                ["raw-html", function () { return player.h.flameunlock.eq(1) ?  "<h2>You have " + format(player.h.flamepoints) + " flame points. (+" + format(player.h.flamepointstoget) + ")" : ""}],
    ["row", [["buyable", 34], ["buyable", 35]]], 
    ["blank", "25px"], 
    ["raw-html", function () { return player.h.paperunlock.eq(1) ?  "<h2>You have " + format(player.h.paperpoints) + " paper points. (+" + format(player.h.paperpointstoget) + ")" : ""}],
    ["row", [["buyable", 36], ["buyable", 37]]], 
]],
        ]],
    ["raw-html", function () { return "<h2>User points are earned every time a user counts."}, { "color": "#7289DA", "font-size": "18px", "font-family": "monospace" }],

],
    },
},
prestigepower: {
    "Main": {
        buttonStyle() { return {  'color': '#68e8f4', 'border-color': '#68e8f4' } },
        unlocked() { return hasUpgrade("h", 26) },
        content:
        [
            ["blank", "25px"],
            ["raw-html", function () { return "<h2>You have " + format(player.h.prestigepower) + " prestige power."}, { "color": "#68e8f4", "font-size": "24px", "font-family": "monospace" }],
            ["raw-html", function () { return "<h3>Your prestige power is boosting willpower gain by x" + format(player.h.prestigepowereffect) + "."}, { "color": "#68e8f4", "font-size": "24px", "font-family": "monospace" }],
            ["raw-html", function () { return "<h3>You will gain " + format(player.h.prestigepowertoget) + " on reset."}, { "color": "#68e8f4", "font-size": "24px", "font-family": "monospace" }],
            ["raw-html", function () { return "<h5>Prestige power and willpower are dividing prestige power gain by /" + format(player.h.prestigepowertogetdivide) + "."}, { "color": "#68e8f4", "font-size": "24px", "font-family": "monospace" }],
            ["blank", "25px"],
            ["row", [["clickable", 18]]],
            ["raw-html", function () { return "<h5>(Resets willpower buyables and basic shrines.)"}, { "color": "#68e8f4", "font-size": "24px", "font-family": "monospace" }],
            ["blank", "25px"],
            ["row", [["upgrade", 27], ["upgrade", 28], ["upgrade", 29], ["upgrade", 31]]],
],
},
"Factor Grid": {
    buttonStyle() { return {  'color': '#68e8f4', 'border-color': '#68e8f4' } },
    unlocked() { return hasUpgrade("h", 27) },
    content:
    [
        ["blank", "25px"],
        ["raw-html", function () { return player.factorgridscene.eq(1) ? "<h1>Today marks the day when we begin to retrieve the lost dimensions!" : "" }, { "color": "black", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.factorgridscene.eq(2) ? "<h1>Commander, how are we going to complete such a task?" : "" }, { "color": "green", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.factorgridscene.eq(3) ? "<h1>Listen to me lieutenant, My son was born with immeasurable power." : "" }, { "color": "black", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.factorgridscene.eq(4) ? "<h1>Ever since he was little, he has shown me nothing but strength." : "" }, { "color": "black", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.factorgridscene.eq(5) ? "<h1>One day, he may be powerful enough to go face to face with that stupid dragon!" : "" }, { "color": "black", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.factorgridscene.eq(6) ? "<h1>Commander! The dragon was way too powerful. Remember the previous king?" : "" }, { "color": "green", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.factorgridscene.eq(7) ? "<h1>We are stronger now. Nothing like that is going to happen again." : "" }, { "color": "black", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.factorgridscene.eq(8) ? "<h1>My child, his soul resonates almost the same as god himself!" : "" }, { "color": "black", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.factorgridscene.eq(9) ? "<h1>We will only begin the true battle once my son gets into his teenage years." : "" }, { "color": "black", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.factorgridscene.eq(10) ? "<h1>At the age of seven, he already managed to destroy and absorb the mass of an entire universe." : "" }, { "color": "black", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.factorgridscene.eq(11) ? "<h1>His growth is expected to increase exponentially." : "" }, { "color": "black", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.factorgridscene.eq(12) ? "<h1>He may be able to match the power of the high gods of each realm." : "" }, { "color": "black", "font-size": "18px", "font-family": "monospace" }],
        ["raw-html", function () { return player.factorgridscene.eq(13) ? "<h1>Or maybe extend through the whole multiverse..." : "" }, { "color": "black", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return "<h3>You have " + format(player.h.prestigepower) + " prestige power."}, { "color": "#68e8f4", "font-size": "24px", "font-family": "monospace" }],
            ["blank", "25px"],
        ["row", [["clickable", 22], ["clickable", 21]]],
        ["row", [["buyable", 42], ["buyable", 43], ["buyable", 44]]], 
        ["row", [["buyable", 45], ["buyable", 46], ["buyable", 47]]], 
        ["row", [["buyable", 48], ["buyable", 49], ["buyable", 51]]], 
    ],
},
"Assembly Line": {
    buttonStyle() { return {  'color': '#68e8f4', 'border-color': '#68e8f4' } },
    unlocked() { return hasUpgrade("h", 29) },
    content:
    [
        ["microtabs", "assemblyline", { 'border-width': '0px' }],
    ],
},
},
assemblyline: {
    "Main": {
        buttonStyle() { return {  'color': '#68e8f4', 'border-color': '#68e8f4' } },
        unlocked() { return true },
        content:
        [
            ["raw-html", function () { return player.assemblylinescene.eq(1) ? "<h1>You have unlocked the assembly line." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return player.assemblylinescene.eq(2) ? "<h1>It played a significant role in your predecessor's journey." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return player.assemblylinescene.eq(3) ? "<h1>This will be very useful for you as well." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return player.assemblylinescene.eq(4) ? "<h1>You will eventually unlock aarexian energy." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return player.assemblylinescene.eq(5) ? "<h1>In order to produce energy, you need a lot of help with the assembly line." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return player.assemblylinescene.eq(6) ? "<h1>The assembly line produces color energy, which will help a lot." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return player.assemblylinescene.eq(7) ? "<h1>The assembly line is also one of the gods' of incremental relics." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return player.assemblylinescene.eq(8) ? "<h1>This used to belong to Drigganiz, who then gave it to Jacorb." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return player.assemblylinescene.eq(9) ? "<h1>Jacorb then gave it to me." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return player.assemblylinescene.eq(10) ? "<h1>I was able to find my own energy with it." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return player.assemblylinescene.eq(11) ? "<h1>Maybe one day, you can find your own energy." : "" }, { "color": "#68e8f4", "font-size": "18px", "font-family": "monospace" }],
            ["blank", "25px"],
            ["row", [["clickable", 24], ["clickable", 23]]],
            ["raw-html", function () { return player.assemblylinecutscene.eq(0) ? "You have " + format(player.h.redenergy) + " red energy." : ""}, { "color": "red", "font-size": "24px", "font-family": "monospace" }],
            ["raw-html", function () { return player.assemblylinecutscene.eq(0) ? "You have " + format(player.h.greenenergy) + " green energy." : ""}, { "color": "green", "font-size": "24px", "font-family": "monospace" }],
            ["raw-html", function () { return player.assemblylinecutscene.eq(0) ? "You have " + format(player.h.blueenergy) + " blue energy." : ""}, { "color": "blue", "font-size": "24px", "font-family": "monospace" }],
            ["blank", "25px"],
            ["raw-html", function () { return player.assemblylinecutscene.eq(0) ? "You are picking for slot " + format(player.h.assemblylineselect, 0) : ""}, { "color": "white", "font-size": "24px", "font-family": "monospace" }],
            ["blank", "25px"],
            ["raw-html", function () { return player.assemblylinecutscene.eq(0) ? player.h.slotstatuspic[1] + player.h.slotstatuspic[2] + player.h.slotstatuspic[3] + player.h.slotstatuspic[4] + player.h.slotstatuspic[5] + player.h.slotstatuspic[6] + player.h.slotstatuspic[7] : ""}],
            ["row", [["clickable", 25], ["clickable", 26], ["clickable", 27], ["clickable", 28], ["clickable", 29], ["clickable", 31], ["clickable", 32]]],
            ["blank", "25px"],
            ["raw-html", function () { return player.assemblylinecutscene.eq(0) ? "R1: " + format(player.h.slotredenergy[1], 0) + " R2: " + format(player.h.slotredenergy[2], 0) + " R3: " + format(player.h.slotredenergy[3], 0) + " R4: " + format(player.h.slotredenergy[4], 0) + " R5: " + format(player.h.slotredenergy[5], 0) + " R6: " + format(player.h.slotredenergy[6], 0) + " R7: " + format(player.h.slotredenergy[7], 0) : ""}, { "color": "red", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return player.assemblylinecutscene.eq(0) ? "G1: " + format(player.h.slotgreenenergy[1], 0) + " G2: " + format(player.h.slotgreenenergy[2], 0) + " G3: " + format(player.h.slotgreenenergy[3], 0) + " G4: " + format(player.h.slotgreenenergy[4], 0) + " G5: " + format(player.h.slotgreenenergy[5], 0) + " G6: " + format(player.h.slotgreenenergy[6], 0) + " G7: " + format(player.h.slotgreenenergy[7], 0) : ""}, { "color": "green", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return player.assemblylinecutscene.eq(0) ? "B1: " + format(player.h.slotblueenergy[1], 0) + " B2: " + format(player.h.slotblueenergy[2], 0) + " B3: " + format(player.h.slotblueenergy[3], 0) + " B4: " + format(player.h.slotblueenergy[4], 0) + " B5: " + format(player.h.slotblueenergy[5], 0) + " B6: " + format(player.h.slotblueenergy[6], 0) + " B7: " + format(player.h.slotblueenergy[7], 0) : ""}, { "color": "blue", "font-size": "18px", "font-family": "monospace" }],
            ["blank", "25px"],
            ["row", [["clickable", 33], ["clickable", 34], ["clickable", 35], ["clickable", 36], ["clickable", 37]]],
            ["blank", "25px"],
            ["raw-html", function () { return player.h.assemblylinetypeselect.eq(1) && player.assemblylinecutscene.eq(0) ? "<h2>Produces red energy " : "" }, { "color": "red", "font-size": "16px", "font-family": "monospace" }],
            ["raw-html", function () { return player.h.assemblylinetypeselect.eq(2) && player.assemblylinecutscene.eq(0) ? "<h2>Produces green energy " : "" }, { "color": "green", "font-size": "16px", "font-family": "monospace" }],
            ["raw-html", function () { return player.h.assemblylinetypeselect.eq(3) && player.assemblylinecutscene.eq(0) ? "<h2>Produces blue energy " : "" }, { "color": "blue", "font-size": "16px", "font-family": "monospace" }],
            ["raw-html", function () { return player.h.assemblylinetypeselect.eq(4) && player.assemblylinecutscene.eq(0) ? "<h2>Transports energy across the line " : "" }, { "color": "white", "font-size": "16px", "font-family": "monospace" }],
            ["raw-html", function () { return player.h.assemblylinetypeselect.eq(5) && player.assemblylinecutscene.eq(0) ? "<h2>Harvests the energy in the line " : "" }, { "color": "white", "font-size": "16px", "font-family": "monospace" }],
],
},
"Buyables and Upgrades": {
    buttonStyle() { return {  'color': '#68e8f4', 'border-color': '#68e8f4' } },
    unlocked() { return true },
    content:
    [
        ["raw-html", function () { return player.assemblylinecutscene.eq(0) ? "You have " + format(player.h.redenergy) + " red energy." : ""}, { "color": "red", "font-size": "24px", "font-family": "monospace" }],
        ["raw-html", function () { return player.assemblylinecutscene.eq(0) ? "You have " + format(player.h.greenenergy) + " green energy." : ""}, { "color": "green", "font-size": "24px", "font-family": "monospace" }],
        ["raw-html", function () { return player.assemblylinecutscene.eq(0) ? "You have " + format(player.h.blueenergy) + " blue energy." : ""}, { "color": "blue", "font-size": "24px", "font-family": "monospace" }],
        ["blank", "25px"],
        ["row", [["buyable", 52], ["buyable", 53], ["buyable", 54]]], 
        ["blank", "25px"],
        ["row", [["clickable", 39], ["blank", "25px"], ["raw-html", function () { return player.assemblylinecutscene.eq(0) && hasUpgrade("h", 31) ? formatWhole(player.h.slotbuyablepage) + "/7" : ""}, { "color": "white", "font-size": "24px", "font-family": "monospace" }], ["blank", "25px"], ["clickable", 38]]], 
        ["row", [["raw-html", function () { return player.h.slotbuyablepage.eq(1) ? "<h3>R: " + format(player.h.slotredenergy[1]) + "&nbsp"  : ""}, { "color": "red", "font-size": "18px", "font-family": "monospace" }], ["raw-html", function () { return player.h.slotbuyablepage.eq(1) ? "<h3>G: " + format(player.h.slotgreenenergy[1])+ "&nbsp"    : ""}, { "color": "green", "font-size": "18px", "font-family": "monospace" }],  ["raw-html", function () { return player.h.slotbuyablepage.eq(1) ? "<h3>B: " + format(player.h.slotblueenergy[1]) + "&nbsp" : ""}, { "color": "blue", "font-size": "18px", "font-family": "monospace" }], 
        ["raw-html", function () { return player.h.slotbuyablepage.eq(2) ? "<h3>R: " + format(player.h.slotredenergy[2])+ "&nbsp"  : ""}, { "color": "red", "font-size": "18px", "font-family": "monospace" }], ["raw-html", function () { return player.h.slotbuyablepage.eq(2) ? "<h3>G: " + format(player.h.slotgreenenergy[2])+ "&nbsp"  : ""}, { "color": "green", "font-size": "18px", "font-family": "monospace" }],  ["raw-html", function () { return player.h.slotbuyablepage.eq(2) ? "<h3>B: " + format(player.h.slotblueenergy[2]) + "&nbsp" : ""}, { "color": "blue", "font-size": "18px", "font-family": "monospace" }], 
        ["raw-html", function () { return player.h.slotbuyablepage.eq(3) ? "<h3>R: " + format(player.h.slotredenergy[3])+ "&nbsp"  : ""}, { "color": "red", "font-size": "18px", "font-family": "monospace" }],  ["raw-html", function () { return player.h.slotbuyablepage.eq(3) ? "<h3>G: " + format(player.h.slotgreenenergy[3])+ "&nbsp"  : ""}, { "color": "green", "font-size": "18px", "font-family": "monospace" }], ["raw-html", function () { return player.h.slotbuyablepage.eq(3) ? "<h3>B: " + format(player.h.slotblueenergy[3])  + "&nbsp": ""}, { "color": "blue", "font-size": "18px", "font-family": "monospace" }], 
        ["raw-html", function () { return player.h.slotbuyablepage.eq(4) ? "<h3>R: " + format(player.h.slotredenergy[4])+ "&nbsp"  : ""}, { "color": "red", "font-size": "18px", "font-family": "monospace" }],  ["raw-html", function () { return player.h.slotbuyablepage.eq(4) ? "<h3>G: " + format(player.h.slotgreenenergy[4]) + "&nbsp" : ""}, { "color": "green", "font-size": "18px", "font-family": "monospace" }],  ["raw-html", function () { return player.h.slotbuyablepage.eq(4) ? "<h3>B: " + format(player.h.slotblueenergy[4]) + "&nbsp" : ""}, { "color": "blue", "font-size": "18px", "font-family": "monospace" }], 
        ["raw-html", function () { return player.h.slotbuyablepage.eq(5) ? "<h3>R: " + format(player.h.slotredenergy[5])+ "&nbsp"  : ""}, { "color": "red", "font-size": "18px", "font-family": "monospace" }],  ["raw-html", function () { return player.h.slotbuyablepage.eq(5) ? "<h3>G: " + format(player.h.slotgreenenergy[5]) + "&nbsp" : ""}, { "color": "green", "font-size": "18px", "font-family": "monospace" }],  ["raw-html", function () { return player.h.slotbuyablepage.eq(5) ? "<h3>B: " + format(player.h.slotblueenergy[5]) + "&nbsp" : ""}, { "color": "blue", "font-size": "18px", "font-family": "monospace" }], 
        ["raw-html", function () { return player.h.slotbuyablepage.eq(6) ? "<h3>R: " + format(player.h.slotredenergy[6])+ "&nbsp"  : ""}, { "color": "red", "font-size": "18px", "font-family": "monospace" }],  ["raw-html", function () { return player.h.slotbuyablepage.eq(6) ? "<h3>G: " + format(player.h.slotgreenenergy[6]) + "&nbsp" : ""}, { "color": "green", "font-size": "18px", "font-family": "monospace" }],  ["raw-html", function () { return player.h.slotbuyablepage.eq(6) ? "<h3>B: " + format(player.h.slotblueenergy[6]) + "&nbsp" : ""}, { "color": "blue", "font-size": "18px", "font-family": "monospace" }], 
        ["raw-html", function () { return player.h.slotbuyablepage.eq(7) ? "<h3>R: " + format(player.h.slotredenergy[7])+ "&nbsp" : ""}, { "color": "red", "font-size": "18px", "font-family": "monospace" }],  ["raw-html", function () { return player.h.slotbuyablepage.eq(7) ? "<h3>G: " + format(player.h.slotgreenenergy[7]) + "&nbsp" : ""}, { "color": "green", "font-size": "18px", "font-family": "monospace" }],  ["raw-html", function () { return player.h.slotbuyablepage.eq(7) ? "<h3>B: " + format(player.h.slotblueenergy[7])+ "&nbsp"  : ""}, { "color": "blue", "font-size": "18px", "font-family": "monospace" }]]], 
        ["blank", "25px"],
        ["row", [["buyable", 55], ["buyable", 56], ["buyable", 57]]], 
        ["row", [["buyable", 58], ["buyable", 59], ["buyable", 61]]], 
        ["row", [["buyable", 62], ["buyable", 63], ["buyable", 64]]], 
        ["row", [["buyable", 65], ["buyable", 66], ["buyable", 67]]], 
        ["row", [["buyable", 68], ["buyable", 69], ["buyable", 71]]], 
        ["row", [["buyable", 72], ["buyable", 73], ["buyable", 74]]], 
        ["row", [["buyable", 75], ["buyable", 76], ["buyable", 77]]], 
],
},
},
},
tabFormat: [
    ["raw-html", function () { return "<h2>You have " + format(player.h.willpower) + " willpower, which boosts points by x" + format(player.h.willpowereffect) + "."}, { "color": "#68e8f4", "font-size": "24px", "font-family": "monospace" }],
    ["raw-html", function () { return "<h3>You are gaining " + format(player.h.willpowerpersecond) + " willpower per second." }, { "color": "#68e8f4", "font-size": "24px", "font-family": "monospace" }],
            ["row", [["clickable", 19]]],
            ["microtabs", "stuff", { 'border-width': '0px' }],
    ["raw-html", function () { return options.musicToggle && player.inaarexhubcutscene.eq(0) && !(player.factorgridscene.gte(1) && player.factorgridscene.lt(14)) ? "<audio controls autoplay loop hidden><source src=music/hub.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
    ["raw-html", function () { return options.musicToggle && player.inaarexhubcutscene.eq(1) ? "<audio controls autoplay loop hidden><source src=music/aarexcutscene.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
],
    layerShown() { return hasUpgrade("m", 34) && player.dimensionalrealm.eq(1) }
})
function countingPrint(line) {
    player.h.countingchat.push(line.replaceAll(' ', '&nbsp;'))
    player.h.countingchat.shift()
}
function roundToNearestMultipleOf25(value) {
    const decimalValue = new Decimal(value);
    const twentyFive = new Decimal(25);
  
    // Calculate the division result and round it to the nearest integer
    const divisionResult = decimalValue.div(twentyFive).floor();
  
    // Calculate the rounded value by multiplying the division result by 25
    const roundedValue = divisionResult.mul(twentyFive);
  
    return roundedValue;
  }
  function isPrime(number) {
    // Convert the input number to a Decimal using your library
    const num = new Decimal(number);
  
    // Check if the number is less than or equal to 1; 0 and 1 are not prime
    if (num.lte(1)) {
      return false;
    }
  
    // Start checking for divisibility from 2 up to the square root of the number
    const sqrtNum = num.sqrt();
    const two = new Decimal(2);
  
    for (let i = two; i.lte(sqrtNum); i = i.add(1)) {
      const remainder = num.minus(i.times(num.div(i).floor()));
  
      // If the remainder is zero, it's divisible, and the number is not prime
      if (remainder.eq(0)) {
        return false;
      }
    }
  
    // If the loop completes without finding a divisor, the number is prime
    return true;
  }