const Discord = require("discord.js")
const ownerID = '409520003256156160';

module.exports.run = async (client, message, args) => {
    let user= message.mentions.users.first() || message.author;
    if (message.author.id !== ownerID) return message.channel.send(new Discord.RichEmbed()
    .setColor("0x36393e")
    .setTimestamp()
    .setDescription("<:cancel:504782695667335178> | Você não tem permissão para executar este comando.")).then(m => m.delete(5000))
    var error17 = new Discord.RichEmbed().setColor("0x36393e")
    .setTimestamp()
        .setDescription('**Por favor insira um servidor válido ID.**')
        .setColor(0xff0000)

    if (isNaN(args[0])) return message.channel.send(error17).then(msg => {
        msg.delete(9000)
    });

    client.guilds.get(args[0]).leave();
    const embed = new Discord.RichEmbed()
    .setColor("0x36393e")
    .setTimestamp()
   .setDescription(`O Bot foi removido do servidor: id **[${args[0]}]**`)
   message.reply(embed);
}

