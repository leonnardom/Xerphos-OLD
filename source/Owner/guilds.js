const database = require("../../configuração/database.js"); 
const Discord = require('discord.js');

exports.run = async (xerphos, message, args) => {

console.log(`comando guilds ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

database.Users.findOne({_id: message.author.id}, function (erro, usuario) {

      if (usuario) {
        if (usuario.owner) {
        
            var servers = xerphos.guilds
            var num = 0;
            var pagina = 1;
            var totalPages = parseInt(servers.size/10+1);
            
            var embed = new Discord.RichEmbed()

            .setDescription(`${servers.map(se=> `Nome: \`${se.name}\` - ID: \`${se.id}\``).slice(0,10).join('\n')}`)
            .setFooter(`Página ${pagina} de ${totalPages}`, message.author.displayAvatarURL)
            .setAuthor('Todas as guilds em que estou:', xerphos.displayAvatarURL)
            .setColor('#36393e')
            .setThumbnail(xerphos.user.displayAvatarURL)
            message.channel.send(embed).then(async ser => {

                if(servers.size > 10) {

                    await ser.react("⬅");
                    await ser.react("➡");
                    
                    const voltar = ser.createReactionCollector((r, u) => r.emoji.name === "⬅" && u.id === message.author.id, { time: 100000 });
                    const proximo = ser.createReactionCollector((r, u) => r.emoji.name === "➡" && u.id === message.author.id, { time: 100000 });
                
                                voltar.on("collect", async r => {
                                    if(pagina !== 1) {
                                        num = num-10
                                        num = num.toString().length > 1 ? num-parseInt(num.toString().slice(num.toString().length-1)) : 0
                                        pagina -= 1
                                        var embed = new Discord.RichEmbed()

                                    .addField(`Servidores:`, `${servers.map(se=> `Nome: \`${se.name}\` - ID: \`${se.id}\``).slice(pagina*10-10,pagina*10).join('\n')}`)
                                    .setFooter(`Página ${pagina} de ${totalPages}`, message.author.displayAvatarURL)
                                    .setColor('#36393e')
                                    .setAuthor('Todas as guilds em que estou:', xerphos.displayAvatarURL)
                                    .setThumbnail(xerphos.user.displayAvatarURL)
                                    ser.edit(embed)
                                        r.remove(r.users.last().id)
                                    } else {
                                        pagina = totalPages
                                        num = totalPages*10-20

                                        var embedb = new Discord.RichEmbed()

                                        .setDescription(`${servers.map(se=> `Nome: \`${se.name}\` - ID: \`${se.id}\``).slice(totalPages*10-10,pagina*10).join('\n')}`)
                                        .setFooter(`Página ${pagina} de ${totalPages}`, message.author.displayAvatarURL)
                                        .setThumbnail(xerphos.user.displayAvatarURL)
                                        .setAuthor('Todas as guilds em que estou:', xerphos.displayAvatarURL)
                                        .setColor('#36393e')
                                    ser.edit(embedb)

                                        r.remove(r.users.last().id)
                                    }
                                })
                
                                proximo.on("collect", async r => {
                                    if(pagina !== totalPages) {
                                        num = num.toString().length > 1 ? num-parseInt(num.toString().slice(num.toString().length-1)) : 0
                                        num = num+10
                                        pagina += 1

                                        var embedc = new Discord.RichEmbed()

                                        .setDescription(`${servers.map(se=> `Nome: \`${se.name}\` - ID: \`${se.id}\``).slice(pagina*10-10,pagina*10).join('\n')}`)
                                        .setFooter(`Página ${pagina} de ${totalPages}`, message.author.displayAvatarURL)
                                        .setThumbnail(xerphos.user.displayAvatarURL)
                                        .setAuthor('Todas as guilds em que estou:', xerphos.displayAvatarURL)
                                        .setColor('#36393e')
                                    ser.edit(embedc)

                                        r.remove(r.users.last().id)
                                    } else {
                                        pagina = 1
                                        num = 0

                                        var embedd = new Discord.RichEmbed()

                                        .setDescription(`${servers.map(se=> `Nome: \`${se.name}\` - ID: \`${se.id}\``).slice(0,pagina*10).join('\n')}`)
                                        .setFooter(`Página ${pagina} de ${totalPages}`, message.author.displayAvatarURL)
                                        .setThumbnail(xerphos.user.displayAvatarURL)
                                        .setAuthor('Todas as guilds em que estou:', xerphos.displayAvatarURL)
                                        .setColor('#36393e')
                                        ser.edit(embedd)

                                        r.remove(r.users.last().id)
                        }
                    })
                }
            })

        } else {
            var yEmbed = new Discord.RichEmbed()
    
        .setColor("#36393e")
        .setDescription(`<:cancel:504782695667335178> | ${message.author}, você não tem **permissão** para executar esse **comando**`)
        message.channel.send(yEmbed)
        }
      } else {
       console.log('Comando GUILDS, confused')
      }
    })
}