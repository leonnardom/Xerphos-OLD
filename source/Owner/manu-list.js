const database = require("../../configuração/database.js"); 
const Discord = require('discord.js')

exports.run = async (xerphos, message, args) => {

console.log(`comando manu-list ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

database.Users.findOne({_id: message.author.id}, function (erro, usuario) {

    if (usuario) {
      if (usuario.owner) {
        
database.Comandos.find({}, function (cerro, doc) {

                if(doc) {
                   
                    var cmd = doc.filter(a => a.manutenção === true).map(a => a._id).join('\n')
                    if(!cmd) return message.reply(`<:cancel:504782695667335178> | Nenhum **\`comando\`** em **Manutenção**`)

                    var yEmbed = new Discord.RichEmbed()
  
            .setThumbnail(` https://cdn.discordapp.com/emojis/493919635985399823.png?v=1`)
            .setTitle("**Meus comandos que estão em manutenção:**")
            .setColor("#36393e")
            .setFooter(`Xerphos - 2019`, xerphos.user.displayAvatarURL)
            .setDescription(`**\`\`\`${cmd}\`\`\`**`)
            return message.channel.send(yEmbed)
            
        } else {}
    })

    } else {

        var yEmbed = new Discord.RichEmbed()
    
        .setColor("#36393e")
        .setDescription(`<:cancel:504782695667335178> | ${message.author}, você não tem **permissão** para executar esse **comando**`)
        message.channel.send(yEmbed)
        }

    } else {
            console.log('Comando MANU-LIST, confused')
        }
    })
}

