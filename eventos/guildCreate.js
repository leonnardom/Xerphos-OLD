const database = require("../configuração/database.js"); 
const Discord = require('discord.js')
const moment = require('moment')
require('moment-duration-format')

module.exports = (client, guild, message) => {
  guild.channels.random().createInvite({maxAge: 0}).then(a => {

try {

database.Guilds.findOne({_id: guild.id}, function(servro, servidor) {

if(!servidor) {
  var saveG = new database.Guilds({_id: guild.id})
    saveG.save()
  }
}).catch(e => {
  console.log('Mongoose Duplicada')
})

let canal = client.channels.get('532232974314504192')
let embedentrada = new Discord.RichEmbed()
.setAuthor(`${client.user.username}`, client.user.displayAvatarURL)
.setTitle(`• Acabei de entrar no servidor: **__${guild.name}__**`)
.addField('**• Dono**', `${guild.owner}`, true)
.addField('**• ID do Dono**', `${guild.ownerID}`, true)
.addField('**• Criado em**', `${moment.utc(guild.createdAt).format('lll')}`, true)
.addField(`**• Nome do servidor**`, `${guild.name}` )
.addField(`**• ID do servidor**`, `${guild.id}`, true)
.addField('**• Membros:**', `${guild.memberCount}`, true)
.addField('**• Região do servidor:**', `${guild.region}`, true)
.addField(`**• Convite do Servidor:**`, `***${a.toString()}***`)
.setTimestamp()
.setColor("#36393e")

canal.send(embedentrada)

client.user.setPresence({game: `Xerphos | xh!ajuda`, type: 1, url: "https://www.twitch.tv/xerphos"});
console.log(`Entrei na Guild:\nInformações da Guild\nNome: ${guild.name}\nID: ${guild.id}\nMembros: ${guild.memberCount}`);

} catch (err) {

console.log(`Erro no meu evendo de GuildCreate - Erro:\n${err}`)
    }
  })
}