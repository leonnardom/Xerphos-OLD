const Discord = require("discord.js");

module.exports.run = async (client, message, args, prefixo) => {
    const url = `${message.guild.iconURL}?size=2048`;
    const urlPara_Embed = url.replace('.jpg', '.png');
  let member = message.mentions.users.first() || message.author;
  const sayMessage = args.join(" "); 
  const t = '<@409520003256156160> Nova Report de Bug, Leia!'
  const embed = new Discord.RichEmbed()
  .setTitle("Report de Bug:")
  .setColor("#36393e")
  .setDescription(sayMessage)
  .addField("ID do usuário:", member.id)
  .addField("Servidor: ", message.guild.name)
  .addField("ID do servidor: ", message.guild.id)
  .setThumbnail(member.displayAvatarURL)
  .addField("Icone do servidor: ", `↓↓↓↓↓↓↓↓↓↓↓↓`)
  .setImage( urlPara_Embed )
 .setFooter(`Enviado por: ${message.author.tag}`,(message.author.avatarURL)) 
 client.channels.get('531996235129815050').send(t)
client.channels.get('531996235129815050').send(embed)
 let user= message.mentions.users.first() || message.author;
message.channel.send(new Discord.RichEmbed()
.setColor("#36393e")
.setTimestamp()
.setDescription(`${user}, Sua report do **__bug__** foi enviada para o servidor do meu Dono, para entrar no servidor basta digitar o comando **${prefixo}convite** `))


}
