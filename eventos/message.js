const database = require("../configuração/database.js"); 
const Discord = require('discord.js')

var cmdCol = new Set()
var dbCol = new Set()

module.exports = async (xerphos, message) => {

try {

    if(message.author.bot) return;
        if(message.channel.type === "dm") {
        message.channel.send({
        embed: {
            title: `<:cancel:504782695667335178> **${message.author.tag},** Você não pode **ExecutarComandos/Conversar** em minha DM`,
            color: 0x36393e,
        }
    }).then(msg => { 
        msg.delete(5000)
    })
}

database.Guilds.findOne({_id: message.guild.id}, function(servro, servidor) {
database.Users.findOne({_id: message.author.id}, function(erro, usuario) {
    
    if(usuario) { 
        if(servidor) {
            if(servidor.antinvite) {
                //if(servidor.inviteChannels) {
                        if(message.content.includes("https://discord.gg/") || message.content.includes("discord.gg/")) {
                            if(!message.member.hasPermission("ADMINISTRATOR") || usuario.owner) { 

                message.channel.send({embed: {
                    title: `:warning:  WARNING`,
                    description: `<:cancel:504782695667335178> | ${message.author}, **você nao pode divulgar aqui**`,
                    color: 0xff0000
                }}).then(gg => {
                    message.delete().catch(o=> {
                        console.log(`Erro ao deletar mensagem - Ant-Invite - Erro: ${o}`)
                });
            });
        } else {}
    } else {}
} else {}

    var prefixo
    prefixo = servidor.prefix

    if(message.content.indexOf(prefixo) !== 0) return;
        if(message.guild.me.hasPermission(['SEND_MESSAGES', 'ADD_REACTIONS', 'VIEW_CHANNEL'])) {
    
     const args = message.content.slice(prefixo.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = xerphos.commands.get(command);

    if(cmd) {

        if(!usuario.ban || usuario.owner) {
            if(!cmdCol.has(message.author.id)) {

database.Comandos.findOne({_id: command}, function(cerro, comando) {

            if(comando) {
                if(comando.manutenção && !usuario.owner) {
                    
                    message.channel.send(`O comando \`${comando._id}\` está em **Manutenção**`)
                    cooldownCMD()
               
            } else {
                    
                    cmd.run(xerphos, message, args, prefixo)

                    var num = comando.usos
                    num = num+1
                    
                    comando.usos = num
                    comando.save() 

                    cooldownCMD()
                }
                    
            } else {

                var comandoC = new database.Comandos({
                    _id: command,
                    usos: 0,
                    manutenção: false,
                    lastError: "Nenhum"
                })

                comandoC.save()
            } 
        })
    } else {
        
    var yEmbed = new Discord.RichEmbed()
    
        .setDescription(`<a:okay:512392301037748251> | ${message.author}, espere um **pouco** antes de executar outro **comando**`)
            .setColor('#36393e')

    message.channel.send(yEmbed).then(colldown => {

        setTimeout(() => {
            colldown.delete()
        }, 3000)

    message.delete(3000)

        }) 
    }
    
} else {

    var yEmbed = new Discord.RichEmbed()
    
    .setDescription(`<:cancel:504782695667335178> | ${message.author}, você está **banido** de usar meus **comandos**`)
        .setColor('#36393e')

    message.channel.send(yEmbed)

    }

} else if(!cmd) {
        console.log(`${message.author.tag} tentou executar um comando inexistente na Guild: id(${message.guild.id}) - nome(${message.guild.name})`);
        }
    } else {
        console.log(`Sem permissão de Enviar/Reagir/Falar -> ${message.guild.name} - ${message.guild.id} - ${message.author.tag}`)
        message.channel.send("Este comando não existe")
    }
    
    } else if(!servidor) {

        var saveG = new database.Guilds({_id: message.guild.id})
            saveG.save()

    
}
    } else if(!usuario) {

        var saveU = new database.Users({_id: message.author.id})
        saveU.save()
        
        }
    }).catch(e => {
        console.log('Mongoose Duplicada')
    })
}).catch(e2 => {
    console.log('Mongoose Duplicada')
})

if(!dbCol.has(message.author.id)) {
    dbCol.add(message.author.id)
    setTimeout(function() {
        dbCol.delete(message.author.id)
    }, 60 * 1000)

database.Users.findOne({_id: message.author.id}, function(userro, usuario) {

if(usuario) {

database.Guilds.findOne({_id: message.guild.id}, function(servro, servidor) {
                
if(servidor) {
    if(message.mentions.users.size > 0) {
    
database.Users.findOne({_id: message.author.id}, function(menrro, mencionado) {
            
if(!mencionado) {
    if(!message.mentions.users.first().bot) {

                    res = message.mentions.users.first()
                    var saveUu = new database.Users({_id: res.id})
                    saveUu.save()
                    
                    }
                }
            }).catch(e2 => {
                console.log('Mongoose Duplicada')
            })
        }
        
    } else {
        var saveG = new database.Guilds({_id: message.guild.id})
            saveG.save()
        }
    }).catch(e2 => {
        console.log('Mongoose Duplicada')
    })

} else {}
    }).catch(e2 => {
        console.log('Mongoose Duplicada')
    })
};

async function cooldownCMD() {
        cmdCol.add(message.author.id)
        setTimeout(function() {
            cmdCol.delete(message.author.id)
        }, 3000)
    };

} catch (err) {

    console.log(`Erro no meu evendo de Message - Erro:\n${err}`)
  }
}