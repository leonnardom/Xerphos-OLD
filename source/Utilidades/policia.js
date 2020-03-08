const Discord = require('discord.js');


exports.run = (client, message, args)  => {
    if(!args[0]){
        message.channel.send(new Discord.RichEmbed()
        .setDescription("<:settings:514924323618816021>**Comando:** xh!policia")
        .setColor("#a32aff")
        .setImage("https://cdn.discordapp.com/attachments/512727524791287812/514921214871863297/line.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/512727524791287812/514912440765513758/network_1.png")
        .addField("<:st:514922245370413087>Uso:", "\`\`xh!policia <@usuario>\`\`")
        .addField("<:st:514922245370413087>Exemplo:", "\`\`xh!policia @zSpl1nterUS_\`\`"))
        }
                let volte = args[0];
                if (!volte) return;
        

    avatar = message.author.avatarURL
    var falas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]
    let user = message.mentions.users.first();
    var variavel = falas[Math.floor(Math.random() * falas.length)]
    message.channel.send(new Discord.RichEmbed()
    .setDescription(`${message.author} Chamou a Policia para o(a) ${user}`)
    .setColor(0x000)
    .setTimestamp()
    .setImage("https://static1.squarespace.com/static/5a8272ac8fd4d2d419948712/5b805b2ab8a045cacc76f3f9/5b8066d0352f53cbba24672b/1535141779603/a8e6de7fa2b31402cadb3efdca5b4a6d.gif?format=1000w")
    .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL))

}
