const Discord = require('discord.js');

exports.run = (client, message, args) => {

    avatar = message.author.avatarURL
var msg = ["coroa", "cara"]
let moeda = msg[Math.floor(Math.random() * msg.length)];
if(args[0] == moeda) {
const moedaembed = new Discord.RichEmbed()

.setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
.setTimestamp()
.setColor("#a32aff")
.setDescription("\n<:fhappy:505174945467203614> | Cara | <:fhappy:505174945467203614> ")
.setTitle("<:fhappy:505174945467203614> | Cara ou Coroa | <:crowns:505174933354315776>");
message.channel.send(moedaembed);
} else {
const moedaembed = new Discord.RichEmbed()

.setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
.setTimestamp()
.setColor("#a32aff")
.setDescription("\n<:crowns:505174933354315776> | Coroa | <:crowns:505174933354315776>")
.setTitle("<:fhappy:505174945467203614> | Cara ou Coroa | <:fhappy:505174945467203614>");
message.channel.send(moedaembed).then(async msg => {
    await msg.react('518232708028301325')
  
    const DeleteFilter = (reaction, user) => reaction.emoji.name === '518232708028301325' && user.id === message.author.id;
      const deletee = msg.createReactionCollector(DeleteFilter);

  
deletee.on('collect', async bot => {
   await msg.delete()

})
})
message.channel.send(`${message.author}`)
}
}
