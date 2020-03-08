const database = require("../configuração/database.js"); 

module.exports = (client, guild, message) => {
  guild.channels.random().createInvite({maxAge: 0}).then(a => {

try {

  database.Guilds.deleteOne({_id: guild.id})
  let canal2 = client.channels.get('532233013308948480')
  let embedsaida = new Discord.RichEmbed()
  .setAuthor(client.user.username)
  .setTitle(`• Acabei de sair do servidor: \`${guild2.name}\``)
  .addField('• Dono', `${guild.owner}`, true)
  .addField('• ID do dono', `\`\`\`fix\n${guild.ownerID}\`\`\``, true)
  .addField('• Criado em', `\`\`\`fix\n${moment.utc(guild.createdAt).format('lll')}\`\`\``, true)
  .addField(`• Nome do servidor`, `\`\`\`fix\n${guild.name}\`\`\`` )
  .addField(`• ID do servidor`, `\`\`\`fix\n${guild.id}\`\`\``, true)
  .addField('• Membros:', `\`\`\`fix\n${guild.memberCount}\`\`\``, true)
  .addField('• Região do servidor:', `\`\`\`fix\n${guild.region}\`\`\``, true)
  .addField(`**• Convite do Servidor:**`, `***${a.toString()}***`)
  .setTimestamp()
  .setColor("#36393e")

  canal2.send(embedsaida)
    console.log(`Removido da Guild:\nInformações da Guild\nNome: ${guild.name}\nID: ${guild.id}\nMembros: ${guild.memberCount}`);
    client.user.setPresence({game: `Xerphos | xh!ajuda`, type: 1, url: "https://www.twitch.tv/xerphos"});
    
} catch (err) {
    console.log(`Erro no meu evendo de GuildDelete - Erro:\n${err}`)
  }
  })
}

