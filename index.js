console.log("NICE bot is starting up")
console.log("NICE bot is loading files")
const Discord = require("discord.js")
//const commando = require("discord.js-commando")
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
console.log("NICE bot is loading vars")
const embedRed = 0xff0000
const embedOrange = 0xff790c
const embedYellow = 0xffff00
const embedGreen = 0x00ff00
const embedBlue = 0x0064ff
const embedPurple = 0x6a00b0
const embedMagenta = 0x9600ff
const embedPink = 0xff00ff
const embedBlack = 0x000000
const embedWhite = 0xffffff
const embedGray = 0x777777
const prefix = "NICE:"
console.log("NICE bot is loading discord bot")
const bot = new Discord.Client()
let messageCount = 0
bot.on("ready" , () => {
    bot.user.setActivity("I'm NICE")
    console.log("NICE bot is ready")
    //console.log(bot.channels.get)
    //bot.user.send("I'm here")
})
bot.on("message", async (message) => {
    if(message.content.includes(process.env.BOT_TOKEN) && message.deletable) {
        console.log("ALERT: NICE has found that the bot token was posted. Said message will now be deleted and the Message's auther will be kicked")
        let user = message.author
        let reason = "Posted an offensive string to the NICE bot"
        message.guild.member(user).kick(reason + "\n NEVER POST THAT STRING AGAIN!!!")
        const kembed = new Discord.RichEmbed()
        .setAuthor(`${user.username} has been kicked from the server.`, user.displayAvatarURL)
        .addField("Kick information", `**Kicked User:** ${user.tag}\n**Moderator:** ${bot.user.tag}\n**Reason:** ${reason}`)
        .setColor(embedRed);
        message.channel.send({
            embed : kembed
        })
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    } else if(message.content.includes(process.env.BOT_TOKEN) && !message.deletable) {
        console.log("ALERT: NICE has found that the bot token was posted. Said message is not deletable. TIP: Because said message is not deletable you should reset your token before someone steals it. Message's auther will be kicked.")
        let user = message.author
        let reason = "Posted an offensive string to the NICE bot"
        message.guild.member(user).kick(reason + "\n NEVER POST THAT STRING AGAIN!!!")
        const kembed = new Discord.RichEmbed()
        .setAuthor(`${user.username} has been kicked from the server.`, user.displayAvatarURL)
        .addField("Kick information", `**Kicked User:** ${user.tag}\n**Moderator:** ${bot.user.tag}\n**Reason:** ${reason}`)
        .setColor(embedRed);
        message.channel.send({
            embed : kembed
        })
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if(message.author.bot){return}
    if(message.content.indexOf(prefix) !== 0){return}
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    //var command = message.content.toLowerCase().split(prefix.toLowerCase())
    if(command == "nice_words") {
        console.log("NICE is finding nice words")
        message.channel.sendMessage("you're all nice :)")
    }
    if(messageCount == 100) {
        console.log("yay 100 messages")
        message.channel.sendMessage("yay I've read, moderated, and answed 100 messages")
    }
    if(messageCount == 1000) {
        console.log("yay 1000 messages")
        message.channel.sendMessage("yay I've read, moderated, and answed 1000 messages")
    }
    if(messageCount == 10000) {
        console.log("yay 10000 messages")
        message.channel.sendMessage("yay I've read, moderated, and answed 10000 messages")
    }
    if(messageCount == 10000) {
        console.log("yay 100000 messages")
        message.channel.sendMessage("yay I've read, moderated, and answed 100000 messages")
    }
    if (message.content.toLowerCase().includes("fuck") || message.content.toLowerCase().includes("bitch") || message.content.toLowerCase().includes("ass") || message.content.toLowerCase().includes("shit") || message.content.toLowerCase().includes("penis") || message.content.toLowerCase().includes("pussy") || message.content.toLowerCase().includes("vagina") || message.content.toLowerCase().includes("sex")) {
        let user = message.author
        let reason = "No Swearing"
        message.guild.member(user).kick(reason + "\n You can rejoin if you imporve your behavior")
        const kembed = new Discord.RichEmbed()
        .setAuthor(`${user.username} has been kicked from the server.`, user.displayAvatarURL)
        .addField("Kick information", `**Kicked User:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`)
        .setColor(embedRed);
        message.channel.send({
            embed : kembed
        })
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);
    }
    if(message.content.toLowerCase().includes("gay")) {
        let user = message.author
        const kembed = new Discord.RichEmbed()
        .setAuthor(`${user.username} 🏳️‍🌈 .`, user.displayAvatarURL)
        .setColor(embedGreen)
        message.channel.send({
            embed : kembed
        })
    }
    /*if(message.content.toLowerCase().includes("nice:will") || message.content.toLowerCase().includes("nice:am")) {
        var yesnoapi = new XMLHttpRequest()
        yesnoapi.onreadystatechange = function () {
            console.log(yesnoapi.readyState)
            console.log(yesnoapi.status)
            if (yesnoapi.readyState == 1 && yesnoapi.status == 0) {
                console.log(yesnoapi)
            }
        }
        console.log(yesnoapi)
        yesnoapi.open("GET", "http://yesno.wtf")
        yesnoapi.send()
    }*/
    if(command == "ping") {
        const m = await message.channel.send("Ping?");
        //console.log(m)
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. api Latency is ${Math.round(bot.ping)}ms`)
    }
    //console.log(command)
    messageCount++
    console.log("message #"+messageCount+":"+message.content+" - "+message.author.tag)
})
bot.on("warning", (warning) => {
    console.log("NICE has found a warning:" + warning.stack)
    bot.channels.get("general")
})
/*bot.on("leave", () => {
    console.log("someone left the server")
})*/
bot.login("NDYyNzI5ODk3Mjk5NjczMDg5.DhvKag.IOQWSG-QJGvWnk_4uuiiDd4o9EU")
