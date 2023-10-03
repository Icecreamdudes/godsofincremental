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

    player.h.shrinepower = player.h.shrinepower.add(player.h.shrinepowerpersecond.mul(delta))
    player.h.shrinepowereffect = player.h.shrinepower.add(1).pow(0.3)
    player.h.shrinepowerpersecond = player.h.buyables[14].add(player.h.buyables[15].add(player.h.buyables[16].add(player.h.buyables[17].add(player.h.buyables[18].add(player.h.buyables[19].add(player.h.buyables[21].add(player.h.buyables[22].add(player.h.buyables[23].add(player.h.buyables[24]))))))))).mul(0.01)

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
    player.h.countingpointseffect = player.h.countingpoints.mul(0.02).add(1)
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

    player.h.norulesduration = player.h.norulesduration.sub(onepersec.mul(delta))
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
            player.h.willpower = player.h.willpower.sub(cost)
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
            player.h.willpower = player.h.willpower.sub(cost)
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
            player.h.willpower = player.h.willpower.sub(cost)
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
            player.h.willpower = player.h.willpower.sub(cost)
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
            player.h.willpower = player.h.willpower.sub(cost)
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
            player.h.willpower = player.h.willpower.sub(cost)
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
            player.h.willpower = player.h.willpower.sub(cost)
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
            player.h.willpower = player.h.willpower.sub(cost)
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
            player.h.willpower = player.h.willpower.sub(cost)
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
            player.h.willpower = player.h.willpower.sub(cost)
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
            player.h.willpower = player.h.willpower.sub(cost)
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
            player.h.willpower = player.h.willpower.sub(cost)
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
            player.h.willpower = player.h.willpower.sub(cost)
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
            player.h.willpower = player.h.willpower.sub(cost)
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
            player.h.willpower = player.h.willpower.sub(cost)
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
        effect(x) { return new getBuyableAmount(this.layer, this.id).mul(0.05).add(1) },
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
    ["row", [["upgrade", 16], ["upgrade", 17], ["upgrade", 18], ["upgrade", 19], ["upgrade", 22], ["upgrade", 23], ["upgrade", 24]]],
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
},
tabFormat: [
    ["raw-html", function () { return "<h2>You have " + format(player.h.willpower) + " willpower, which boosts points by x" + format(player.h.willpowereffect) + "."}, { "color": "#68e8f4", "font-size": "24px", "font-family": "monospace" }],
    ["raw-html", function () { return "<h3>You are gaining " + format(player.h.willpowerpersecond) + " willpower per second." }, { "color": "#68e8f4", "font-size": "24px", "font-family": "monospace" }],
                ["microtabs", "stuff", { 'border-width': '0px' }],
    ["raw-html", function () { return options.musicToggle && player.inaarexhubcutscene.eq(0) ? "<audio controls autoplay loop hidden><source src=music/hub.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
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