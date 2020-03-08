const Discord = require('discord.js');
const moment = require("moment")
require("moment-duration-format")

exports.run = (client, message, args) => {

        avatar = message.author.avatarURL
    let channel = message.mentions.channels.first() || message.channel;
    const embed = new Discord.RichEmbed()
    .setAuthor(`<:sobre:503335399603699712> | Informações do canal **${channel.name}**`)
    .setTimestamp()
    .setColor("#a32aff")
    .addField("Nome:", `${channel.name}`)
    .addField("ID do canal:", `${channel.id}`)
    .addField("📆Criado em:", `${moment(channel.createdAt).format("LLLL")}`)
    .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
    message.channel.send(`${message.author}`)
    message.channel.send(embed).then(async msg => {
        await msg.react('518232708028301325')
      
        const DeleteFilter = (reaction, user) => reaction.emoji.name === '518232708028301325' && user.id === message.author.id;
          const deletee = msg.createReactionCollector(DeleteFilter);

      
deletee.on('collect', async bot => {
       await msg.delete()

    })
})
  
  }

module.exports.config = {
    name: "canalinfo",
    aliases: ["channelinfo", "canalinfo"]
    }
