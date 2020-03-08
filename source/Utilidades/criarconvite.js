const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    try {
    const invite = await message.channel.createInvite({maxAge: 0});
    avatar = message.author.avatarURL


    message.channel.send(new Discord.RichEmbed()
    .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
    .setTimestamp()
    .setColor("#a32aff")
    .setDescription(`<:invitation:504807595471798274> | Convite Criado: \n\n ${invite}`)).then(m => m.delete(20000))

} catch (err) {
    message.channel.send(new Discord.RichEmbed()
    .setFooter(`Xerphos™ | 2018`, message.client.user.avatarURL, message.client.user.avatarURL)
    .setTimestamp()
    .setColor("#a32aff")
    .setDescription('<:icons8excluir48:501915822243971082> | Eu não tenho permissão para criar um convite deste servidor.')).then(msg=>{
        msg.delete(8000).then(m => m.delete(5000))
        })
   }

    const embed = new Discord.RichEmbed()
    .setTitle("<a:sininho:497973448648425482> **Anúncio** <a:sininho:497973448648425482>")
    .setFooter(`Xerphos™ | 2018`, message.client.user.avatarURL, message.client.user.avatarURL)
    .setTimestamp()
    .setColor("#a32aff")
    .setDescription(invite.url)
message.channel.send(embed).then(async msg => {
    await msg.react('518232708028301325')
  
    const DeleteFilter = (reaction, user) => reaction.emoji.name === '518232708028301325' && user.id === message.author.id;
      const deletee = msg.createReactionCollector(DeleteFilter);

  
deletee.on('collect', async bot => {
   await msg.delete()

})
})
    }
