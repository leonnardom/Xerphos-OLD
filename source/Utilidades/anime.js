const Discord = require("discord.js")
const malScraper = require('mal-scraper')

exports.run =  async (xerphos, message, args) => {

console.log(`comando anime ${message.guild.name} ${message.guild.id} ${message.author.tag}`)


const search = `${args}`;

  malScraper.getInfoFromName(search)

    .then((data) => {

    const malEmbed = new Discord.RichEmbed()

      .setTitle(`**Resultado da Pesquisa: \`${args}\`**`.split(',').join(' '))
      .setThumbnail(data.picture)
      .setColor('#36393e') //I personally use bubblegum pink!
      .addField('Título em Japonês', data.japaneseTitle, true)
      .setTimestamp()
      .addField('Título em Inglês', data.englishTitle, true)
      .addField('Tipo', data.type, true)
      .addField('Episódios', data.episodes, true)
      .addField('Pontuação', data.score, true)
      .addField('Criado em', data.aired, true)
      .addField('Avaliação', data.rating, true)
      .addField('Status da Pontuação', data.scoreStats, true)
      .addField('Link', `[Clique Aqui](${data.url})`)
      .setFooter(`${message.author.username}`, message.author.displayAvatarURL)

      message.channel.send(malEmbed);

    })
    .catch((err) => {
    
    const embedy = new Discord.RichEmbed()
        .setTitle(`<:314240199406387201:490756225575682049> **ANIME NÃO ENCONTRADO**`)
        .setColor('36393e')
        .setFooter(`xerphos™ - 2018 | VERIFICADO`, xerphos.user.displayAvatarURL)
        .setThumbnail(message.author.displayAvatarURL)
        .addField("Uso Corretamente <:download:495736437849980940>", `**> d!anime \`<AlgumAnimeExistente>\`**`)
        message.channel.send(embedy).then(msg => msg.delete(5000));

    })
}