
const Discord = require('discord.js');
var math = require('mathjs');

exports.run = (client, message, args, command) => {
    if(!args[0]){
        message.channel.send(new Discord.RichEmbed()
        .setDescription("<:settings:514924323618816021>**Comando:** xh!calc")
        .setColor("#a32aff")
        .setImage("https://cdn.discordapp.com/attachments/512727524791287812/514921214871863297/line.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/512727524791287812/514912440765513758/network_1.png")
        .addField("<:st:514922245370413087>Uso:", "\`\`xh!calc <conta>\`\`")
        .addField("<:st:514922245370413087>Exemplo:", "\`\`xh!calc 8*8\`\`")
        .addField("<:st:514922245370413087>Alternativas:", "\`\`xh!calcular\`\`"))
        }
            let volte = args[0];
            if (!volte) return;
    console.log(`[${message.author.tag}] [${message.author.id}] fez o comando [${command}.js]`)
   


    const question = args.join(" ");

    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        return message.reply(new Discord.RichEmbed()
        .setDescription(`<:cancel:504782695667335178> | Sua questão é inválida! ${err}`)).then(m => m.delete(5000))
    }
    avatar = message.author.avatarURL
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/493254617241747459/505150153573924866/calculator.png")
        .setColor("#a32aff")
        .addField("Questão:", question, true)
        .addField("Resposta:", answer)
        .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
        .setTimestamp()

    message.channel.send({
        embed
    }).then(async msg => {
        await msg.react('518232708028301325')
      
        const DeleteFilter = (reaction, user) => reaction.emoji.name === '518232708028301325' && user.id === message.author.id;
          const deletee = msg.createReactionCollector(DeleteFilter);

      
deletee.on('collect', async bot => {
       await msg.delete()

    })
}).then(msg => msg.react("505147112468774922"))
};

module.exports.config = {
    name: "calc",
    aliases: ["calcular", "calc"]
    }