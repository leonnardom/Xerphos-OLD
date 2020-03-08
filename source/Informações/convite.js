
const Discord = require('discord.js');

exports.run = (xerphos, message, args) => {
let convite = new Discord.RichEmbed()

.setAuthor("Xerphos", xerphos.user.displayAvatarURL)
.setFooter(`Xerphos - 2019`, xerphos.user.displayAvatarURL)
.addField("• Meu Convite:", `***[Convite](https://discordapp.com/api/oauth2/authorize?client_id=490305944551686155&permissions=8&scope=bot)***`)
.addField("• Meu Servidor de Suporte:", `***[Convite](https://discord.gg/snTPxW7)***`)
.setColor("#36393e")
message.channel.send(convite)
}