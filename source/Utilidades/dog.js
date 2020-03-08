const Discord = require('discord.js');
const superagent = require("superagent");

exports.run = async(client, message, args) => {
            avatar = message.author.avatarURL
        let {body} = await superagent
        .get(`https://random.dog/woof.json`);
    
        let dogembed = new Discord.RichEmbed()
        .setColor("#a32aff")
        .setTimestamp()
        .setDescription("<:dog:508029671930200074> | Dog")
        .setImage(body.url)
        .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL);
    
        message.channel.send(dogembed);
    }
