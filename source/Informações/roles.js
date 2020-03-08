const Discord = require('discord.js');

module.exports.run = (client, message, args, language) => {

    var cargos = message.guild.roles.map(a => a).slice(0, 50).join(', ')
  
    message.channel.send(new Discord.RichEmbed()
    .setTimestamp()
    .setColor("#a32aff")
    .setTitle("Lista de todos os cargos:")
    .setDescription(`${cargos}`))
  }

module.exports.config = {
    name: "roles",
    aliases: ["roles", "cargos"]
    }
 