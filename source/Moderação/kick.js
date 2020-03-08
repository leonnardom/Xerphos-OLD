const database = require("../../configuração/database.js"); 

exports.run =  async (xerphos, message, args) => {

console.log(`Comando kick ${message.guild.name} ${message.guild.id} ${message.author.tag}`)
    
let mat = message.author.tag
    
database.Users.findOne({_id: message.author.id}, async function (erro, usuario) {
  
    if(usuario.owner || message.member.hasPermission("ADMINISTRATOR")) {

    if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send({embed: {
        description: `**${mat}**, Eu não tenho permissão para banir membros`,
        color:  0x36393e
    }})

      let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      
      if(!member)
      return message.channel.send({embed: {
        description: `**${mat}**, Mencione um membro **válido** deste servidor`,
        color:  0x36393e
    }})

      if(!member.kickable) 
      return message.channel.send({
        embed: {
            description: `Eu não posso **expulsar** este usuário! Ele pode ter um cargo mais alto ou eu não tenho permissões de expulsar`,
            color:  0x36393e
        }
    })
      
      let reason = args.slice(1).join(' ');
      if(!reason) reason = "Não Informado";
      
      await member.kick(reason)
        .catch(error => message.channel.send({
            embed: {
                description: `**${mat}**, Eu não consegui banir o membro: **${member.user.tag}** pelo erro: ${error}`,
                color:  0x36393e
            }
        })
        )
        
        message.channel.send({embed: {
            title: `**Usuário Kickado com Sucesso**`,
            fields: [
                {
                    name: "Nome:",
                    value: `${member.user.tag}`
                },
                {
                    name: "ID:",
                    value: `${member.user.id}`
                },
            {
                name: "Kickado Por:",
                value: `${mat}`
            },
            {
                name: "Motivo:",
                value: `${reason}`
            }

            ],
            color: 0x36393e,
            thumbnail: {
                url: member.user.displayAvatarURL
                }
            }})
        } else {
            var yEmbed = new Discord.RichEmbed()
    
            .setColor("#36393e")
            .setDescription(`<:314240199406387201:490756225575682049> | ${message.author}, você não tem **permissão** para executar esse **comando**`)
            message.channel.send(yEmbed)
        }
    })
}