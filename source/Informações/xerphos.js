const Discord = require('discord.js');

exports.run = async (xerphos, message, args) => {


console.log(`comando xerphos ${message.guild.name} ${message.guild.id} ${message.author.tag}`)


try {
            var connections = xerphos.voiceConnections

            if(connections.size === 0) {

                message.reply('<:cancel:504782695667335178> | Nenhuma **\`conexão\`** de voz no **Momento**')

            } else {

            var embed = new Discord.RichEmbed();

            connections.forEach(a=> {
                embed.setColor('#36393e')
                embed.setThumbnail(xerphos.user.displayAvatarURL)
                embed.setFooter(`Xerphos - 2019`, message.guild.iconURL)
                embed.addField(`<a:music:512400492836683791>Servidor: **${a.channel.guild.name}**`, `**Canal: \`${a.channel.name}\`**\n**Membros Ouvindo: \`${a.channel.members.size}\`**`)
            })

            message.channel.send(embed)

        }

      } catch (e) {

       console.log(`Erro - Comando xerphos\n${e}`)
    }
}