const database = require("../../configuração/database.js"); 

exports.run =  async (xerphos, message, args, prefixo) => {

console.log(`comando unmute ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

let mat = message.author.tag

database.Users.findOne({_id: message.author.id}, async function (erro, usuario) {
  
if(usuario.owner || message.member.hasPermission("ADMINISTRATOR")) {

if (!args[0]) { 
   
    message.channel.send({embed: {
                    description: `**${mat},** Mencione o membro, **USE:** \`${prefixo}unmute\` \`<membro>\``,
                    color:  0x36393e
        }
    })
}
    let muteRole = message.guild.roles.find(x=> x.name == "Muted")
    
    let member = message.mentions.members.first();
    let memberA = message.mentions.members.first();
    
    let memberRole = memberA.roles.find(xa=> xa.name == "Muted")
  

if(!memberRole){
    
        return message.channel.send({embed: {
        description: `**${mat},** Esse membro não está **mutado**`,
        color:  0x36393e
    }})
}


if(!member) return message.channel.send({embed: {
        description: `**${mat},** Mencione quem você quer desmutar`,
        color:  0x36393e
    }})

try {
     member.removeRole(muteRole);
     message.channel.send({embed: {
        description: `${member}, Foi desmutado por: **${message.author.tag}**`,
        color:  0x36393e
    }})

} catch (err) { 
        message.channel.send({embed: {
            description: `**${mat},** Eu não tenho as permissões necessárias para desmutar um membro!`,
            color:  0x36393e
        }})
    }
} else {
    var yEmbed = new Discord.RichEmbed()
    
    .setColor("#36393e")
    .setDescription(`<:314240199406387201:490756225575682049> | ${message.author}, você não tem **permissão** para executar esse **comando**`)
    message.channel.send(yEmbed)
        }
    })
}
