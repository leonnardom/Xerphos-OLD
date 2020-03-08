const Discord = require("discord.js");

exports.run = async(client, message, args) => {
    let embed = new Discord.RichEmbed()

    message.channel.send("<a:spinner:490972759162093578> Coletando lista de parceiros!")
.then(msg => {
setTimeout(()=>{
msg.edit(new Discord.RichEmbed()
.setColor("#a32aff")
.setAuthor("Xerphos", message.client.user.displayAvatarURL)
.setTimestamp()
.setDescription(`O quê séria \`Partners\`? Isso é a lista de parceiros do \`Xerphos\`, alguém que já colaborou com ele alguma vez.\n<:partners:529434293014102025> Lista:\n\n<@399322747215544330> **»** \`(󠂪󠂪NexxyZ_#0800)\`\n<@309482128398221313> **»** \`(</D̶e̶l̶e̶t̶e̶d̶U̶s̶e̶r̶/>#0666)\`\n<@408762620770779138> **»** \`(AvengerSuicide#0001)\`\n<@493498025478717503> **»** \`(@Paosz#4303)\``))
    
color: "#a32aff"
    
}, 3 * 1000)
})
}

module.exports.config = {
    name: "partners",
    aliases: ["partners", "parceiros"]
}