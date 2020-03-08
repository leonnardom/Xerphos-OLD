const Discord = require('discord.js');

exports.run = (client, message, args) => {

        avatar = message.author.avatarURL
    let reason = args.slice(0).join(' ');

        if (reason.length < 1) return message.channel.send(`<:cancel:504782695667335178> | ${message.author.tag}, você deve digitar uma palavra.`);

    message.channel.sendMessage(new Discord.RichEmbed()
    .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
    .setColor("#a32aff")
    .setTimestamp()
    .setDescription(`<:lps:501899026086494209> Menssagem reversa por: **${message.author.username}** \n \n **` + args.join(' ').split('').reverse().join('') + '**'));
    message.delete().catch(O_o=>{});  
}

