const Discord = require("discord.js");

module.exports.run = async (client, message, args,) => {

    if(!args[0]){
        message.channel.send(new Discord.RichEmbed()
        .setDescription("<:settings:514924323618816021>**Comando:** xh!sugestão")
        .setColor("#a32aff")
        .setImage("https://cdn.discordapp.com/attachments/512727524791287812/514921214871863297/line.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/512727524791287812/514912440765513758/network_1.png")
        .addField("<:st:514922245370413087>Uso:", "\`\`xh!sugestão <sugestão>\`\`")
        .addField("<:st:514922245370413087>Exemplo:", "\`\`xh!sugestão Deveria adicionar mais comandos\`\`"))
        }
                let volte = args[0];
                if (!volte) return;
        
    const url = `${message.guild.iconURL}?size=2048`;
    const urlPara_Embed = url.replace('.jpg', '.png');
  let member = message.mentions.users.first() || message.author;
  const sayMessage = args.join(" "); 
  const t = '<@409520003256156160> Nova Sugestão, Leia!'
  const embed = new Discord.RichEmbed()
  .setTitle("Sugestão:")
  .setColor("#a32aff")
  .setDescription(sayMessage)
  .addField("ID do usuário:", member.id)
  .addField("Servidor: ", message.guild.name)
  .addField("ID do servidor: ", message.guild.id)
  .setThumbnail(member.displayAvatarURL)
  .addField("Icone do servidor: ", `↓↓↓↓↓↓↓↓↓↓↓↓`)
  .setImage( urlPara_Embed )
 .setFooter(`Enviado por: ${message.author.tag}`,(message.author.avatarURL)) 
 client.channels.get('503699552432291858').send(t)
client.channels.get('503699552432291858').send(embed)
 let user= message.mentions.users.first() || message.author;
message.channel.send(new Discord.RichEmbed()
.setColor("#a32aff")
.setTimestamp()
.setDescription(`${user}, Sua sugestão foi enviada para o servidor do meu Dono, para entrar no servidor basta digitar o comando **x!convite** `)).then(m => m.delete(5000));


}
