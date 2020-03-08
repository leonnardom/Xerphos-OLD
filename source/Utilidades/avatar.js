const Discord = require("discord.js")

exports.run =  async (xerphos, message, args) => {

console.log(`Comando avatar ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

    let member = message.mentions.users.first() || xerphos.users.get(args[0]) || message.author;
    let avatar = member.displayAvatarURL;
   
    if (avatar.endsWith(".gif")) {
        avatar = `${member.displayAvatarURL}?size=2048`
    }

    const embed = new Discord.RichEmbed()
      
      .setTitle(`${member.tag}`)
       .setFooter(`Xerphos - 2019`, xerphos.user.displayAvatarURL)
      .setColor("RANDOM", true)
      .setDescription(`[<:checked3:493918444366856213> LINK](${avatar})`)
      .setImage(avatar)
      
    message.channel.send(embed)

}