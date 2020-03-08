const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
      let m421 = args.join(" ");
      if (!m421) return message.reply(new Discord.RichEmbed()
      .setColor("#a32aff")
      .setTimestamp()
      .setDescription(`Por favor fale um nome primeiro!`))
      
      if (m421.length > 30) return message.reply(new Discord.RichEmbed()
      .setColor("#a32aff")
      .setTimestamp()
      .setDescription(`${user1}, Eu não posso avaliar o seu waifu, por ter mais de 30 palavras`))
      let result = Math.floor((Math.random() * 100) + 0);
      
        const happyrate = new Discord.RichEmbed()
      .setDescription(`Eu classificaria **${m421}** ${result}/100 ❤`)
      .setColor("#a32aff")
      .setTimestamp()
        
          const sadembed = new Discord.RichEmbed()
      .setDescription(`Eu classificaria **${m421}** ${result}/100 😭`)
      .setColor("#a32aff")
      .setTimestamp()
          
            const idkembed = new Discord.RichEmbed()
      .setDescription(`Eu classificaria **${m421}** ${result}/100 🤔`)
      .setColor("#a32aff")
      .setTimestamp()
            
          const shrugembed = new Discord.RichEmbed()
      .setDescription(`Eu classificaria **${m421}** ${result}/100 🤷`)
      .setColor("#a32aff")
      .setTimestamp()
                    
              const okembed = new Discord.RichEmbed()
      .setDescription(`Eu classificaria **${m421}** ${result}/100 👌`)
      .setColor("#a32aff")
      .setTimestamp()
                            
      const thumbupembed = new Discord.RichEmbed()
      .setDescription(`Eu classificaria **${m421}** ${result}/100 👍`)
      .setColor("#a32aff")
      .setTimestamp()
      
      const eyesembed = new Discord.RichEmbed()
      .setDescription(`Eu classificaria **${m421}** ${result}/100 👀`)
      .setColor("#a32aff")
      .setTimestamp()
      
      if (result > 90) return message.channel.send(happyrate)
      if (result < 30) return message.channel.send(sadembed)
      if (result > 40) return message.channel.send(idkembed)
      if (result > 50) return message.channel.send(shrugembed)
      if (result > 60) return message.channel.send(okembed)
      if (result > 70) return message.channel.send(thumbupembed)
      if (result > 80) return message.channel.send(eyesembed)
}
