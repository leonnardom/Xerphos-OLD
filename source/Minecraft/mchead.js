const Discord = require("discord.js")

exports.run =  async (xerphos, message, args) => {

console.log(`comando mchead ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

let reason = args.slice(0).join(' ');
    
if (reason.length < 1){
    return message.channel.send({embed: {
        description: `<:314240199406387201:490756225575682049> ${message.author}, Diga o nick da **\`Skin\`**`,
        color: 0x36393e
    }}).then(msg => msg.delete(5000));
}

let MCEmbed = new Discord.RichEmbed()
        
            .setDescription(`${message.author}`)
            .setColor("#36393e")
            .setTimestamp()
            .setImage(`https://mc-heads.net/head/${args[0]}/200`)
            .setFooter(`${message.author.username}`, message.author.avatarURL)
            message.channel.send(MCEmbed)

};
