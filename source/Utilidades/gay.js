const Discord = require("discord.js");

module.exports.run = async (client, message, args,) => {
    if(!args[0]){
        message.channel.send(new Discord.RichEmbed()
        .setDescription("<:settings:514924323618816021>**Comando:** xh!gay")
        .setColor("#a32aff")
        .setImage("https://cdn.discordapp.com/attachments/512727524791287812/514921214871863297/line.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/512727524791287812/514912440765513758/network_1.png")
        .addField("<:st:514922245370413087>Uso:", "\`\`xh!gay <@usuario>\`\`")
        .addField("<:st:514922245370413087>Exemplo:", "\`\`xh!gay @zSpl1nterUS_\`\`"))
        }
            let volte = args[0];
            if (!volte) return;
    let user1 = message.mentions.users.first() || message.author;
    let gay = Math.round(Math.random() * 100);
    
    let gayembed = new Discord.RichEmbed()
    
        .setColor("#f442d4")
        .setDescription(`<:flag:511299147903664128> | Eu acho que o(a) **${user1.tag}** e **${gay}%** gay!`);
    return message.channel.send(gayembed);
}; 
