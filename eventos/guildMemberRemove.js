var database = require('../configuração/database.js')

module.exports = (xerphos, member) => {

try {

database.Guilds.findOne({_id: member.guild.id}, function (erro, servidor) {
    
    if(servidor) {
      if(servidor.byebye) {
        if(member.guild.channels.get(servidor.byebyechannel)){
            
            try { 
                member.guild.channels.get(servidor.byebyechannel).send(servidor.byebyemsg.replace(/{member}/g, `<@${member.id}>`).replace(/{guild}/g, `${member.guild.name}`).replace(/{name}/g, `${member.user.username}`).replace(/{users}/g, `${member.guild.members.size}`));

            } catch(e) {
                console.log(e)
            }

        } else {
          servidor.byebye = false
          servidor.byebyechannel = 'None'
          servidor.byebyemsg = 'None'
          servidor.save()
        }
      } else {}
    } else {}
  });

} catch (err) {

  console.log(`Erro no meu evendo de GuildMemberRemove - Erro:\n${err}`)
  }
}