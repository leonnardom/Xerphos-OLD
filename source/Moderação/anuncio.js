const Discord = require("discord.js");
const database = require("../../configuração/database.js"); 

exports.run =  async (xerphos, message, args) => {

console.log(`Comando anc - used adm ${message.guild.name} ${message.guild.id} ${message.author.tag}`)
    

database.Users.findOne({_id: message.author.id}, function (erro, usuario) {
  
    if(usuario.owner || message.member.hasPermission("ADMINISTRATOR")) {

if(!args[0]) {
    return message.channel.send({embed: {
        description: `**${message.author},** Desculpe, você não **escreveu** nada`,
        color:  0x36393e
    }}).then(msg => msg.delete(5000));
}


var sayMessage = args.join(" ");

const embed = new Discord.RichEmbed()

.setTitle('**ANÚNCIO**📢')
.setDescription(sayMessage)
.setFooter(`Enviado por ${message.author.username}`, message.author.displayAvatarURL)
.setTimestamp(new Date())
.setColor('RANDOM')
.setThumbnail('http://icons.iconarchive.com/icons/graphicloads/100-flat/256/announcement-icon.png')

message.channel.send(embed).then(async msg => {
    
    await msg.react('📢')
    message.delete()

            })
        } else {
            var yEmbed = new Discord.RichEmbed()
    
            .setColor("#36393e")
            .setDescription(`<:314240199406387201:490756225575682049> | ${message.author}, você não tem **permissão** para executar esse **comando**`)
            message.channel.send(yEmbed)
        }
    })
}
