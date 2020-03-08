const database = require("../../configuração/database.js"); 
const Discord = require('discord.js');

exports.run = async (xerphos, message, args) => {

let razaou = args.slice(0).join(' ')

console.log(`comando b-ban ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

database.Users.findOne({_id: message.author.id}, function (erro, usuario) {

      if (usuario) {
        if (usuario.owner) {
          if(!razaou.length < 1) {
            let banir = message.mentions.users.first() ? message.mentions.users.first() : xerphos.users.get(args[0])
            if (banir) {
              if (banir.id === message.author.id) {
                message.channel.send(`<:cancel:504782695667335178> | ${message.author} **não se pode banir a si mesmo**`)
              } else {
                database.Users.findOne({_id: banir.id}, function (arro, alvo) {
                  if (alvo) {
                      if (alvo.ban) {
                        alvo.ban = false
                        alvo.save()
                        message.channel.send(`**<a:okay:512392301037748251> | ${message.author}, ${banir.tag}** foi **\`desbanido\`** com **sucesso**`)
                      } else {
                        alvo.ban = true
                        alvo.save()
                        message.channel.send(`**<a:okay:512392301037748251> | ${message.author}, ${banir.tag}** foi **\`banido\`** com **sucesso**`)
                      }
                    
                  } else {
                    message.channel.send(`<:cancel:504782695667335178> | ${message.author}, o usuário **inserido** não está salvo em minha **\`DataBase\`**`)
                  }
                })
              }
            } else {
                message.channel.send(`<:cancel:504782695667335178> | ${message.author}, **usuário** não **\`encontrado\`**`)
            }
          } else {
            message.channel.send(`<:cancel:504782695667335178> | ${message.author}, **\`mencione\`** ou **insira** o \`ID\` do **usuário**`)
          }
        } else {
          var yEmbed = new Discord.RichEmbed()
    
          .setColor("#36393e")
          .setDescription(`<:cancel:504782695667335178> | ${message.author}, você não tem **permissão** para executar esse **comando**`)
          message.channel.send(yEmbed)
        }
      } else {
       console.log(`Comando b-ban, confused`)
      }
    })

}