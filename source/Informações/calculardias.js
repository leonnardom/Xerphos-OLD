const Discord = require('discord.js');
exports.run = async (client, message, args) => {

    let owo = message.guild.member(message.mentions.users.first() || client.users.get(args[0]) || message.author);

    let embed = new Discord.RichEmbed();
    embed.setColor("#a32aff");
    embed.setTimestamp()
    embed.setDescription(`${message.author}, a conta do usuário existe há **${Math.round(Math.abs((owo.user.createdAt.getTime() - new Date().getTime())/(24*60*60*1000)))} dias**.`);

    client.channels.get(message.channel.id).send(embed);
}

module.exports.config = {
    name: "calculardias",
    aliases: ["dias", "calculardias"]
}