const database = require("../../configuração/database.js"); 

exports.run =  async (xerphos, message, args, prefixo) => {

console.log(`comando mute ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

let mat = message.author.tag

database.Users.findOne({_id: message.author.id}, async function (erro, usuario) {
  
  if(usuario.owner || message.member.hasPermission("ADMINISTRATOR")) {

  if (!args[0]) return message.channel.send({embed: {
    description: `**${mat},** Mencione o membro, **USE:** \`${prefixo}mute\` \`<membro>\` \`<motivo>\``,
    color:  0x36393e
}})

  var user = message.mentions.members.first()
  var razao = args.slice(1).join(' ') 
  if (!razao) razao = "Sem Motivo"
  var muteRole = message.guild.roles.find(x=> x.name == "Muted")
    

  if(!muteRole) return message.channel.send({embed: {
    description: `**${mat},** Não encontrei o cargo **\`Muted\`**`,
    color:  0x36393e
}})

if(user.roles.find(th=> th.name == "Muted")){

    return message.channel.send({embed: {
        description: `**${mat},** Esse membro já está **\`Mutado\`**`,
        color:  0x36393e
    }})   
}

  try {
    user.addRole(muteRole)
    return message.channel.send({embed: {
        description: `${user}, foi mutado por: **${mat}**\nMotivo: **${razao}**`,
        color:  0x36393e
    }})

    
  } catch (err) { 
    message.channel.send({embed: {
        description: `**${mat},** Eu não tenho as permissões necessárias para mutar um membro!`,
        color:  0x36393e
  }})
};
  
} else {

var yEmbed = new Discord.RichEmbed()
    
        .setColor("#36393e")
        .setDescription(`<:314240199406387201:490756225575682049> | ${message.author}, você não tem **permissão** para executar esse **comando**`)
        message.channel.send(yEmbed)
    }
  })
}