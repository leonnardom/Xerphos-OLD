const Discord = require("discord.js");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("API DO YOUTUBE AQUI");

exports.run = async (client, message, args) => {

  youtube.searchVideos(args, 1)
    .then(results => {
      const ytEmbed = new Discord.RichEmbed()
        .setTitle(`<:youtube:514806812143517725> Resultados dê: \`\`${args}\`\``.split(',').join(' '))
        .setImage(results[0].thumbnails.high.url)
        .setColor("#a32aff")
        .addField('**•»** Nome do canal', `\`\`\n${results[0].channel.title}\`\``, true)
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