const Discord = require('discord.js')

exports.run = (client, message, args) => {
 
    var embed = new Discord.RichEmbed()
.setTimestamp()
.setTitle("<:tips:513424911537012766> | Informação")
.setDescription('<:st:514922245370413087>\`\`\nxh!emojis\`\` - Mostra a lista de emojis do Servidor.\n<:st:514922245370413087>\`\`\nxh!sugestão\`\` `(Sugestão)` - Manda uma sugestão pro servidor do meu Dono.\n<:st:514922245370413087>\`\`\nxh!perguntar\`\` `(Dúvida)` - Manda uma pergunta pro servidor de Test do Dono.\n<:st:514922245370413087>\`\`\nxh!calc\`\` - Faz uma conta de matemática.\n<:st:514922245370413087>\`\`\nxh!total\`\` - Mostra todas as informações do Bot.\n<:st:514922245370413087>\`\`\nxh!iconedoservidor\`\` - Manda a foto do ícone do Servidor.\n<:st:514922245370413087>\`\`\nxh!emojinfo\`\` `(Nome do emoji)` - Mostra a informação do emoji mencionado.')
.setColor("#a32aff")
.setThumbnail(message.client.user.avatarURL)

message.author.send(embed).then((c) => {
    c.react('513424911537012766').then(() => {
 })
})
}

module.exports.config = {
    name: "info",
    aliases: ["info"]
}