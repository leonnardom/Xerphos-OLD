const lista = require('../../configuração/queue.js')

exports.run =  async (xerphos, message, args) => {

console.log(`Comando leave ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

try {

var voicechannel = message.member.voiceChannel;
var serverQueue = lista.queue.get(message.guild.id);

if(serverQueue) {

    if(serverQueue.music === true) return message.channel.send({
        embed: {
            description: `<:cancel:504782695667335178> | ${message.author}, estou **tocando** música, USE **\`${prefixo}stop\`** para parar de **tocar**`,
            color: 0x36393e,
        }
    })

if(serverQueue.radio === true) return message.channel.send({
        embed: {
            description: `<a:okay:512392301037748251> | ${message.author}, estou **tocando** rádio, USE **\`${prefixo}radio leave\`** para parar de **tocar**`,
            color: 0x36393e,
        }
    })
}

if(message.guild.members.get(xerphos.user.id).voiceChannel) {
    if(voicechannel) {
        if(message.member.voiceChannel.id === message.guild.members.get(xerphos.user.id).voiceChannel.id) {

let vc = message.guild.members.get(xerphos.user.id).voiceChannel

message.guild.voiceConnection.disconnect()

message.channel.send({
        embed: {
            title: `<a:okay:512392301037748251> | Desconectado do canal de voz **\`${vc.name}\`**!`,
            color: 0x36393e,
        
        }
    })
    
} else {

    message.channel.send({
        embed: {
            title: `<:cancel:504782695667335178> | Conecte-se ao canal de **voz** que eu estou conectado`,
            color: 0x36393e,
            }
        })
    }
} else {

    message.channel.send({
        embed: {
            title: `<:cancel:504782695667335178> Conecte-se a um canal de voz`,
            color: 0x36393e,
            }
        })

    }
} else {

    message.channel.send({
        embed: {
            title: `<:cancel:504782695667335178> | Não estou **\`conectado\`** em nenhum canal de **voz**`,
            color: 0x36393e,
            }
        })
    }
} catch (e) {

    console.log(`Erro comando de Leave - guild: id:(${message.guild.id}) - nome:(${message.guild.name}) Erro: ${e}`)
    }
}