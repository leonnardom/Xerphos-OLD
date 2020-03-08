const Discord = require("discord.js")

exports.run =  async (xerphos, message, args) => {

    console.log(`Comando emojis - serveremojis ${message.guild.name} ${message.guild.id} ${message.author.tag}`)
    let emojis = message.guild.emojis.map(a => a).join(' ')
    let servernome = message.guild.name
    let cor = '#36393e'

    if(emojis.length > 0) {
    
    
    let emojiembed = new Discord.RichEmbed()
    .setColor(cor)
    .setTitle(`Emojis do Servidor - **${servernome}**`)
    .setDescription(`${emojis}`)
    .setTimestamp()
    .setFooter(`${message.author.username}`, message.author.displayAvatarURL)
    
    message.channel.send(emojiembed);
    
} else {
    return message.channel.send({embed: {
        description: `<:314240199406387201:490756225575682049> ${message.author}, Este servidor não possui emojis, adicione para **\`Prosseguir\`**`,
        color: 0x36393e
    }})
    }

};