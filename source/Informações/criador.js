const Discord = require('discord.js');

exports.run = (client, message, args) => {

        const embed = new Discord.RichEmbed()
        .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
        .setColor("#a32aff")
        .setTimestamp()
        .setDescription("<:conec:504763227197145088> | Aqui está o Discord do meu criador: \n**<@409520003256156160>**")
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
    name: "criador",
    aliases: ["criador", "creater"]
    }
