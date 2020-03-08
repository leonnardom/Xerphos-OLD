var database = require('../configuração/database.js')

module.exports = (xerphos, member) => {

try {

database.Guilds.findOne({_id: member.guild.id}, function (erro, servidor) {
    
    if(servidor) {
      if(servidor.welcome) {

        if(member.guild.channels.get(servidor.welcomechannel)){
          
          try {
              
            member.guild.channels.get(servidor.welcomechannel).send(servidor.welcomemsg.replace(/{member}/g, `<@${member.id}>`).replace(/{guild}/g, `${member.guild.name}`).replace(/{name}/g, `${member.user.username}`).replace(/{users}/g, `${member.guild.members.size}`))
         
            } catch (e) {
              console.log(e)
          }
      }
    } else {}

      if(servidor.autorole) {
        if(member.guild.roles.get(servidor.autoroleid)) {
          member.guild.members.get(member.id).addRole(servidor.autoroleid).catch(err => {
            servidor.autorole = false
            servidor.autoroleid = 'None'
            servidor.save()
          })
        } else {
          servidor.autorole = false
          servidor.autoroleid = 'None'
          servidor.save()
        }
      } else {}
    
    } else {
      
      var save = new database.Guilds({_id:member.guild.id})
      save.save()
      
    }
  })
} catch (err) {

    console.log(`Erro no meu evendo de GuildMemberAdd - Erro:\n${err}`)
  }
}
