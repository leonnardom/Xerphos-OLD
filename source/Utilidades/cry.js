const Discord = require("discord.js");

exports.run = async (client, message, args) => {

let defineduser = message.mentions.users.first();

if(!defineduser) {
var Embed = new Discord.RichEmbed()
.setColor("#a32aff")
.setDescription(`**${message.author}** choro de tristeza (╥﹏╥)`)
.setImage('https://media.giphy.com/media/Ui7MfO6OaLz4k/giphy.gif')
.setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL).setTimestamp()

message.channel.send(Embed)
} else {
    
var Embed = new Discord.RichEmbed()
.setColor("#a32aff")
.setDescription(`**${message.author}** gritos de tristeza para **${defineduser}** (╥﹏╥)`)
.setImage('https://media.giphy.com/media/QUKkvRTIYLgMo/giphy.gif')
.setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL).setTimestamp()
}
message.channel.send(Embed)
}

