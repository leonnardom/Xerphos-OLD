const database = require("../../configuração/database.js"); 

exports.run = async (xerphos, message, args, prefixo) => {

console.log(`Comando autorole ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

let razaou = args.slice(0).join(' ')
let razaod = args.slice(1).join(' ')

database.Users.findOne({_id: message.author.id}, function (erro, usuario) {
  
if(usuario.owner || message.member.hasPermission("ADMINISTRATOR")) {

database.Guilds.findOne({_id: message.guild.id}, function (servro, servidor) {

          if(servidor) {
            if(!razaou.length < 1) {
                if(args[0] == "set") {

                if(!razaod.length < 1) {

                if (message.mentions.roles.size > 0) {
                if (message.guild.roles.get(message.mentions.roles.first().id).position < message.guild.members.get(xerphos.user.id).highestRole.position) {
                      servidor.autorole = true
                      servidor.autoroleid = message.mentions.roles.first().id
                      servidor.save()
                      message.channel.send(`<:ligado:530515743524126731> | **Autorole setado para:** ${message.mentions.roles.first().name}`)
                    } else {
                      message.channel.send('<:cancel:504782695667335178> | **O cargo deve estar abaixo do meu**')
                    }
                  } else {
                    message.channel.send('<:cancel:504782695667335178> | **Por favor, mencione o cargo que deseja setar**')
                  }
                } else {
                  message.channel.send(`<:cancel:504782695667335178> | ${message.author}, Use: **\`${prefixo}autorole set [role]\`**`)
                }
              } else if(args[0] == "remove"){ 
                if (servidor.autorole) {
                  servidor.autorole = false
                  servidor.autoroleid = 'Nenhum'
                  servidor.save()
                  message.channel.send(`<:desligado:530515719406878720> | ${message.author}, **\`Autorole\`** desativado neste **servidor**`)
                } else {
                  message.channel.send(`**<:cancel:504782695667335178> | ${message.author}, não há nenhum **\`Autorole\`** setado neste **servidor**`)
                }
              } else if(args[0] == "ajuda") {
                message.channel.send({
                  'embed': {
                    'title': '<a:okay:512392301037748251> Autorole:',
                    'description': `**Cargo setado:** <@&${servidor.autoroleid}>`,
                    'color': 0x36393e,
                    'timestamp': new Date(),
                    'footer': {
                      'icon_url': message.author.displayAvatarURL,
                      'text': message.author.username
                    },
                    'thumbnail': {
                      'url': xerphos.user.displayAvatarURL
                    }
                  }
                })
              } else {
                message.channel.send(`<:cancel:504782695667335178> | ${message.author}, argumento **Inválido**`)
              }
            } else {
              message.channel.send({
                'embed': {
                  'title': '<a:okay:512392301037748251> Autorole:',
                  'description': `\`\`\`\n${prefixo}autorole set <menção do cargo>\n${prefixo}autorole remove\n${prefixo}autorole ajuda\`\`\``,
                  'color': 0x36393e,
                  'timestamp': new Date(),
                  'footer': {
                    'icon_url': message.author.displayAvatarURL,
                    'text': message.author.username
                  },
                  'thumbnail': {
                    'url': xerphos.user.displayAvatarURL
                  }
                }
              })
            }
          } else {
            var save = new database.Guilds({_id: message.guild.id})
            save.save()
          }
        }).catch(e => {
          console.log('Mongoose Duplicada')
        })
        
      } else {
        var yEmbed = new Discord.RichEmbed()
    
        .setColor("#36393e")
        .setDescription(`<:cancel:504782695667335178> | ${message.author}, você não tem **permissão** para executar esse **comando**`)
        message.channel.send(yEmbed)
    } 
  }).catch(e => {
    console.log('Mongoose Duplicada')
  })
}