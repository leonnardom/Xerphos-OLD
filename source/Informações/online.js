const Discord = require('discord.js');
const moment = require("moment")
require("moment-duration-format")

exports.run = (client, message, args) => {

    avatar = message.author.avatarURL
    let totalSeconds = process.uptime();
    let realTotalSecs = Math.floor(totalSeconds % 60);
    let days = Math.floor((totalSeconds % 31536000) / 86400);
    let hours = Math.floor((totalSeconds / 3600) % 24);
    let mins = Math.floor((totalSeconds / 60) % 60);
    const embed = new Discord.RichEmbed()
    .setDescription(`<a:okay:512392301037748251> | Estou acordado há : \n\n\n**${days}** Dias, **${hours}** Horas, **${mins}** Minutos e **${realTotalSecs}** Segundos`)
    .setTimestamp()
    .setColor("#a32aff")
    .setThumbnail("https://cdn.discordapp.com/attachments/510984986841710614/516030345448128524/clock.png")
    .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(embed)
}

module.exports.config = {
    name: "online",
    aliases: ["online", "uptime"]
    }
