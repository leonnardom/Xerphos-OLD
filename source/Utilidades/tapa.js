const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if(!args[0]){
        message.channel.send(new Discord.RichEmbed()
        .setDescription("<:settings:514924323618816021>**Comando:** xh!tapa")
        .setColor("#a32aff")
        .setImage("https://cdn.discordapp.com/attachments/512727524791287812/514921214871863297/line.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/512727524791287812/514912440765513758/network_1.png")
        .addField("<:st:514922245370413087>Uso:", "\`\`xh!tapa <@usuario>\`\`")
        .addField("<:st:514922245370413087>Exemplo:", "\`\`xh!tapa @zSpl1nterUS_\`\`"))
        }
                let volte = args[0];
                if (!volte) return;
        

        avatar = message.author.avatarURL
let user = message.mentions.users.first();
let gifs = ['https://media.giphy.com/media/cmzpDyYUthnOQ9uNB4/giphy.gif'] 
let random = Math.round(Math.random() * gifs.length);
let embed = new Discord.RichEmbed()
    .setDescription(`<:swords:505172178216550412> | **${message.author.username}** deu um tapa no(a) **${user.username}**`)
    .setImage(gifs[gifs.length == 1 ? 0 : random == 0 ? random + 1 : random - 1])
    .setColor("#a32aff")
    .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
    .setTimestamp()
    message.channel.send(embed).then(async msg => {
        await msg.react('❌')
      
        const DeleteFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
          const deletee = msg.createReactionCollector(DeleteFilter);

      
deletee.on('collect', async bot => {
       await msg.delete()

    })
})
    }


