const Discord = require('discord.js');

exports.run = (client, message, args) => {

  if(!args[0]){
    message.channel.send(new Discord.RichEmbed()
      .setDescription("<:settings:514924323618816021>**Comando:** xh!luta")
      .setColor("#a32aff")
      .setImage("https://cdn.discordapp.com/attachments/512727524791287812/514921214871863297/line.png")
      .setThumbnail("https://cdn.discordapp.com/attachments/512727524791287812/514912440765513758/network_1.png")
      .addField("<:st:514922245370413087>Uso:", "\`\`xh!luta <@usuario>\`\`")
      .addField("<:st:514922245370413087>Exemplo:", "\`\`xh!luta @zSpl1nterUS_\`\`"))
      }
          let volte = args[0];
          if (!volte) return;
        avatar = message.author.avatarURL
let user = message.mentions.users.first();
const v = "<@" + message.author.id + ">" 
const v2 =  " <@" + user.id + ">"
let gifs = ['https://media.giphy.com/media/jfSb9mx1EpCiQ/giphy.gif'] 
var falas = [" ganho a batalha! ", "foi comer", " desistiu da batalha!  "," perdeu a batalha!", " ficou sem internet! ", "correu da batalha", "apanhou da mãe", "ficou sem energiu", "foi assistir hentai", "ficou com medo é desligou o pc"]
  var embedB = new Discord.RichEmbed()
  .setTitle("<:fight:505172728857231362> | Está ocorrendo uma batalha")
  .setDescription(" O " + v + " e" +  v2 + " **estão disputando uma batalha!**")
  .setImage(gifs[gifs.length == 1 ? 0 : random == 0 ? random + 1 : random - 1])
  .addField("<:info:502905701497176065>Resultado da batalha", "O " + v +  "\n" + falas[Math.round(Math.random() * falas.length)]  + "\n" +  "O " + v2 +  "\n" + falas[Math.round(Math.random() * falas.length)])
  .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
  .setColor("#a32aff")
  .setTimestamp()
  message.channel.send(`${message.author}`)
  message.channel.send(embedB).then(async msg => {
    await msg.react('❌')
  
    const DeleteFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
      const deletee = msg.createReactionCollector(DeleteFilter);

  
deletee.on('collect', async client => {
   await msg.delete()

})
})
}

