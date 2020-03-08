const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    let user = message.mentions.users.first();
    if(message.mentions.users.size < 1) return message.reply("Você precisa mencionar alguém.")
    if(user.id == message.author.id) return message.reply("Você não pode abraçar a si mesmo.")
    var HugEmbed = new Discord.RichEmbed()
    .setColor("#a32aff")
    .setTitle(`**${message.author.username}** deu um abraço no(a) **${user.username}**`)
    .setImage('https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif')
    .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL).setTimestamp()

    message.channel.send(HugEmbed)

}


