const Discord = require('discord.js');


exports.run = (client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(new Discord.RichEmbed()
    .setColor("#a32aff")
    .setTimestamp()
    .setDescription("<:cancel:504782695667335178> | Você não tem permissão para executar este comando.")).then(m => m.delete(5000))
        message.delete().catch(O_o=>{});  
    let topico = args.join(" ")
let canal = message.mentions.channels.first() || message.channel
canal.setTopic(topico).then(() => {
    message.delete().catch(O_o=>{});
    message.channel.send(new Discord.RichEmbed()
    .setTimestamp()
    .setColor("#a32aff")
    .setFooter(`Xerphos™ | 2018`, message.client.user.avatarURL, message.client.user.avatarURL)
    .setTitle("<:lps:501899026086494209> | Novo topico de canal definido ")
    .setDescription(`<:avan1:502900168975187980>O topico do canal: **${canal.name}** foi definido para: \n<:avan1:502900168975187980>**${topico}** \n<:avan1:502900168975187980>Pelo : ${message.author}`)).then(msg=>{
        msg.delete(8000)
        })
})
}
   


