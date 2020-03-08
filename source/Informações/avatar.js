const Discord = require('discord.js');

exports.run = (client, message, args) => {
let member = message.mentions.users.first() || client.users.get(args[0]) || message.author;
let avatar = member.displayAvatarURL;
if (avatar.endsWith(".gif")) {
avatar = `${member.displayAvatarURL}?size=2048`
}

message.channel.send(new Discord.RichEmbed()
.setImage(avatar)
.setColor("#a32aff")
.setDescription(`[**<:http:516019137068400675> | Link**](${avatar})`)
.setTitle(`<:man:505042016745553940> | ${member.tag}`))
}

module.exports.config = {
    name: "avatar",
    aliases: ["perfil", "avatar"]
    }
