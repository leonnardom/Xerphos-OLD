const Discord = require('discord.js')

let string = ''
module.exports.run = (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply(new Discord.RichEmbed()
    .setColor("#a32aff")
    .setTimestamp()
    .setDescription("<:cancel:504782695667335178> | Você não tem permissão para executar este comando.")).then(m => m.delete(5000))
   message.guild.channels.forEach((f, a) => {
    if(f.parentID === message.channel.parentID) {
  

   var da = message.guild.roles.find("name","@everyone")
    f.overwritePermissions(da, {
        SEND_MESSAGES: false
      })
    
      string += f.name + ', ' 
    }
   })
    setTimeout(function() {
      message.channel.send(new Discord.RichEmbed()
      .setTimestamp()
      .setColor("0x36393e")
      .setDescription(`»${message.author} desativou os canais: ${string}`))
}, 1000)
}

