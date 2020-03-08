const Discord = require("discord.js")

exports.run = (client,message,args)=> {

message.channel.send("<a:loading:529769901582319616> Estou coletando as minhas informações aguarde!")
.then(msg => {
setTimeout(()=>{
msg.edit(new Discord.RichEmbed()
.setColor("0x36393e")
.setThumbnail(message.client.user.displayAvatarURL)
.setAuthor("Xerphos", message.client.user.displayAvatarURL)
.setTimestamp()
.setDescription(`**Tenho o total dê:**\n\n<:choice:504784284305981468>Canais: \`${client.channels.size}\` \n<:management:514580926794039298>Servidores: \`${client.guilds.size}\` \n<:man:505042016745553940>Usuarios: \`\`\n${client.users.size}\`\`\n<a:minecraft:508786928481599490>Emojis: \`\`${client.emojis.size.toLocaleString()}\`\``))
    
color: "0x36393e"
    
}, 3 * 1000)
})
}
module.exports.config = {
    name: "total",
    aliases: ["total"]
}