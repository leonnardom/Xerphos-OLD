const Discord = require("discord.js");


module.exports.run = async (client, message, args,) => {

message.channel.send(new Discord.RichEmbed()
.setDescription("<a:loading:529769901582319616>"))
.then(msg => {
setTimeout(()=>{
msg.edit(new Discord.RichEmbed()
.setColor("#a32aff")
.setTimestamp()
.setThumbnail("https://cdn.discordapp.com/attachments/500811624219934720/510972559068495882/stopwatch_1.png")
.setDescription(`<:clooud:529749421450067978>** | Tempo de resposta**\n\n<a:okay:512392301037748251>Ping: **${msg.createdTimestamp - message.createdTimestamp}ms**\n<a:okay:512392301037748251>Latência: **${Math.round(client.ping)}ms**`))

color: "#a32aff"

}, 3 * 1000)

})
}

module.exports.config = {
    name: "ping",
    aliases: ["pong","ping","pingu","gong"]
}
