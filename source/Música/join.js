exports.run =  async (xerphos, message, args) => {

console.log(`Comando join ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

try {

var voicechannel = message.member.voiceChannel;

if(!voicechannel) return message.channel.send({
        embed: {
            title: `<:cancel:504782695667335178> Conecte-se a um canal de voz`,
            color: 0x36393e,
        
        }
    })

return new Promise((resolve, reject) => {

var permissions = voicechannel.permissionsFor(message.client.user);

if(!permissions.has('CONNECT')) {
			return message.channel.send({
                embed: {
                    title: `<:cancel:504782695667335178> Sem permissão para conectar ao canal de **voz**`,
                    color: 0x36393e,
                
                }
            }).then(msg => {
                msg.delete(5000)
            })
        }

if(voicechannel && voicechannel.type == 'voice') {

    voicechannel.join().then(connection => {
        xerphos.speakers = [];
        
        resolve(connection);

        message.channel.send({
            embed: {
                title: `<a:okay:512392301037748251> | Conectado ao canal de voz **\`${voicechannel.name}\`**!`,
                color: 0x36393e,
            
            }
        })

    }).catch(err => reject(err));

} else {

    message.channel.send({
        embed: {
            title: `<:cancel:504782695667335178> | Conecte-se a um canal de voz`,
            color: 0x36393e,
        
                }
            })
        }
    })
} catch (e) {

    console.log(`Erro comando de Join - guild: id:(${message.guild.id}) - nome:(${message.guild.name}) Erro: ${e}`)
    }
}
