const Discord = require("discord.js");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyBVMQAInu6m5JPZyFfy8PiMZ977jgyOMtE");



exports.run = async (client, message, args) => {
    if(!args[0]){
        message.channel.send(new Discord.RichEmbed()
          .setDescription("<:settings:514924323618816021>**Comando:** xh!youtube")
          .setColor("#a32aff")
          .setImage("https://cdn.discordapp.com/attachments/512727524791287812/514921214871863297/line.png")
          .setThumbnail("https://cdn.discordapp.com/attachments/512727524791287812/514912440765513758/network_1.png")
          .addField("<:st:514922245370413087>Uso:", "\`\`xh!youtube <nome de um vídeo>\`\`")
          .addField("<:st:514922245370413087>Exemplo:", "\`\`xh!youtube Summer\`\`")
          .addField("<:st:514922245370413087>Alternativas:", "\`\`xh!youtube-search, xh!ytsearch, \`\`"))
          }
              let volte = args[0];
              if (!volte) return;

    youtube.searchVideos(args, 1)
        .then(results => {
          const ytEmbed = new Discord.RichEmbed()
            .setTitle(`<:youtube:514806812143517725> Resultados dê: \`\`${args}\`\``.split(',').join(' '))
            .setImage(results[0].thumbnails.high.url)
            .setColor("#a32aff") 
            .addField('**•»** Nome do canal',  `\`\`\n${results[0].channel.title}\`\``, true)
            .addField('**•»** Titulo', `\`\`\n${results[0].title} \`\``, true)
            .addField('**•»** Descrição', `\`\`\n${results[0].description}\`\``)
            .addField("**•»** Publicado em", ` \`\`\n${results[0].publishedAt}\`\``)
            .addField('**•»** Link', `[Clique Aqui](https://youtu.be/${results[0].id})`);
            
  
            message.channel.send(ytEmbed);
            
        }).catch()
        
  
        
  
  }

  module.exports.config = {
    name: "youtube",
    aliases: ["youtube", "ytsearch", "youtube-search"]
}