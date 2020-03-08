const Discord = require('discord.js');


exports.run = (client, message, args) => {

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!message.guild.members.get(message.author.id).roles.find("name" , "*")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(new Discord.RichEmbed()
        .setColor("#a32aff")
        .setTimestamp()
        .setDescription("<:cancel:504782695667335178> | Você não tem permissão para executar este comando.")).then(m => m.delete(5000))        
        }
    var da = message.guild.roles.find("name","@everyone")
    var da1 = message.guild.roles.find('name', "*")
    message.channel.overwritePermissions(da, {
        SEND_MESSAGES: false
        
        
      })
    
      message.channel.overwritePermissions(da1, {
        SEND_MESSAGES: true
    
      })
      message.delete().catch(O_o=>{});  
      message.channel.send(new Discord.RichEmbed()
      .setDescription(`»O canal ${message.channel} foi **DESATIVADO** \n\n»Pelo Staff: ${message.author}`)
      .setTimestamp()
      .setThumbnail("https://cdn.discordapp.com/attachments/504474789231067138/505048536761761795/switch_2.png")
      .setColor("0x36393e")
      .setFooter(`Xerphos | 2019`, message.client.user.avatarURL, message.client.user.avatarURL)).then(msg => msg.react("505048334877327373"))
    
    }

