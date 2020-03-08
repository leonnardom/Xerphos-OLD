const Discord = require('discord.js');

exports.run = async(client, message, args) => {

    if(!args[0]){
        message.channel.send(new Discord.RichEmbed()
          .setDescription("<:settings:514924323618816021>**Comando:** xh!votação")
          .setColor("#a32aff")
          .setImage("https://cdn.discordapp.com/attachments/512727524791287812/514921214871863297/line.png")
          .setThumbnail("https://cdn.discordapp.com/attachments/512727524791287812/514912440765513758/network_1.png")
          .addField("<:st:514922245370413087>Uso:", "\`\`xh!votação <conteudo>\`\`")
          .addField("<:st:514922245370413087>Exemplo:", "\`\`xh!votação Sou lindo?\`\`"))
          }
              let volte = args[0];
              if (!volte) return;
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(new Discord.RichEmbed()
    .setColor("#a32aff")
    .setTimestamp()
    .setDescription(":cancel: | Você não tem permissão para executar este comando.")).then(m => m.delete(5000))

avatar = message.author.avatarURL
message.channel.send(new Discord.RichEmbed()
.setColor("#a32aff")
.setTimestamp()
.setDescription(`**<:vote:508785616763486208> | Uma votação foi aberta:**\n\n ${args.slice(0).join(' ')}`)).then(async msg => {
    await msg.react('493920971670028291')
    await msg.react('504782695667335178')
  


message.delete().catch(O_o=>{});  

})
}

