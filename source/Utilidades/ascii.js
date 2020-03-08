const Discord = require("discord.js");
const ascii = require("ascii-art");

module.exports.run = (client, message, args) => {
    if(!args[0]){
        message.channel.send(new Discord.RichEmbed()
        .setDescription("<:settings:514924323618816021>**Comando:** xh!ascii")
        .setColor("#a32aff")
        .setImage("https://cdn.discordapp.com/attachments/512727524791287812/514921214871863297/line.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/512727524791287812/514912440765513758/network_1.png")
        .addField("<:st:514922245370413087>Uso:", "\`\`xh!ascii <mensagem>\`\`")
        .addField("<:st:514922245370413087>Exemplo:", "\`\`xh!ascii Love\`\`"))
        }
            let volte = args[0];
            if (!volte) return;
   

ascii.font(args.join(" "), 'Doom', function(rendered){

    rendered = rendered.trimRight();

    if(!args[0] > 15) return message.reply('Limite de 15 palavras atingidas')
    message.delete().catch(O_o=>{});  
    message.channel.send(rendered, {
        
        code: 'md'
    }).then(async msg => {
        await msg.react('518232708028301325')
      
        const DeleteFilter = (reaction, user) => reaction.emoji.name === '518232708028301325' && user.id === message.author.id;
          const deletee = msg.createReactionCollector(DeleteFilter);

      
deletee.on('collect', async bot => {
       await msg.delete()

    })
})
});
}

