const lista = require('../../configuração/queue.js')

exports.run =  async (xerphos, message, args) => {

console.log(`Comando volume ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

try {

var serverQueue = lista.queue.get(message.guild.id);
var deleteCount = parseInt(args[0], 10);

if(!message.member.roles.some(r=>["DJ", "dj"].includes(r.name))) {
    return message.channel.send({
      embed: {
          title: `<:cancel:504782695667335178> Somente membros com o cargo \`DJ\` podem configurar o volume`,
          color: 0x36393e,
      }
  })
}

if(!message.member.voiceChannel) {
    
    message.channel.send({
        embed: {
            title: `<:cancel:504782695667335178> Você não está em um canal de **voz**`,
            color: 0x36393e,
            }
        }).then(msg => {
        msg.delete(5000)
    })
}

if(!serverQueue) {
    message.channel.send({
        embed: {
            title: `<:cancel:504782695667335178> Não há nada **tocando**`,
            color: 0x36393e,
            }
        }).then(msg => {
        msg.delete(5000)
    })
} else if(serverQueue.radio) {

    message.channel.send({
        embed: {
            title: `<:cancel:504782695667335178> Não posso alterar o **volume** de uma **rádio**`,
            color: 0x36393e,
            }
        }).then(msg => {
        msg.delete(5000)
    })

} else if(serverQueue.music) {
    message.channel.send({
        embed: {
            title: `<:equalizer:514875031042654258> **Volume**`,
            color: 0x36393e,
            description: `O volume atual é: **${serverQueue.volume}**`,
            footer: {
                "text": message.author.username,
                'icon_url': message.author.displayAvatarURL
            },
            timestamp: new Date(),
        }
    })
} else if(isNaN(args[0])) {

        message.channel.send({
            embed: {
                color: 0x36393e,
                description: `<:cancel:518226555668004894> Use **apenas** números para alterar o **\`volume\`**`,
                footer: {
                    "text": message.author.username,
                    'icon_url': message.author.displayAvatarURL
                },
                timestamp: new Date(),
        }
    })
    
} else if(!deleteCount || deleteCount < 1 || deleteCount > 10) {

message.channel.send({
        embed: {
            color: 0x36393e,
            description: `<:cancel:518226555668004894> Use **apenas** números de **\`1\`** à **\`10\`**`,
            footer: {
                "text": message.author.username,
                'icon_url': message.author.displayAvatarURL
                },
            timestamp: new Date(),
        }
    })
} else {
            
message.channel.send({
            embed: {
                title: ` **Volume**`,
                color: 0x36393e,
                description: `Eu configurei o volume para: **\`${args[0]}%\`**`,
                footer: {
                    "text": message.author.username,
                    'icon_url': message.author.displayAvatarURL
                },
                timestamp: new Date(),
                }
            }).then(opa => {
            serverQueue.volume = args[0];
            serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5)
            message.delete(5000)
            opa.delete(5000)
        })
    }


} catch (e) {

console.log(`Erro comando de Volume - guild: id:(${message.guild.id}) - nome:(${message.guild.name}) Erro: ${e}`)
    }
}