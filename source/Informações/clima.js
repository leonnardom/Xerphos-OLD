const Discord = require('discord.js')
const tempo = require('weather-js');

exports.run = (client, message, args) => {
tempo.find({search: args.join(" "), degreeType: 'C'}, function(err, result){

    if(!args[0]){
        message.channel.send(new Discord.RichEmbed()
        .setDescription("<:settings:514924323618816021>**Comando:** xh!clima")
        .setColor("#a32aff")
        .setImage("https://cdn.discordapp.com/attachments/512727524791287812/514921214871863297/line.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/512727524791287812/514912440765513758/network_1.png")
        .addField("<:st:514922245370413087>Uso:", "\`\`xh!clima <cidade>\`\`")
        .addField("<:st:514922245370413087>Exemplo:", "\`\`xh!clima Belo Horizonte\`\`"))
        }
            let volte = args[0];
            if (!volte) return;
        var Tempo = result[0].current; 
        var Local = result[0].location;
        avatar = message.author.avatarURL

        message.channel.send(new Discord.RichEmbed()
        .setDescription("<a:jsjjsjsh:489921317592891392>"))
    .then(msg => {
    setTimeout(()=>{
        msg.edit(new Discord.RichEmbed()
    .setColor("#a32aff")
    .setTitle(`Clima de **${Tempo.observationpoint}**<:sunset:512733972615135242>`)
    .setThumbnail("https://cdn.discordapp.com/attachments/510984986841710614/512730652949348362/sun.png")
    .addField('<:ieueueu:493916663327096866>Fuso horário:', `${Local.timezone} UTC`, true)
    .addField('💭Sensação Térmica:', `${Tempo.feelslike} graus`, true)
    .addField('<:planetearth:512733706113515551>Tipo de grau :', Local.degreetype, true)
    .addField('<:drop:512730598020743207>Umidade do Ar:', `${Tempo.humidity}%`, true)
    .addField('<:thermometer:512730493041639425>Temperatura:', `${Tempo.temperature} graus`, true)
    .addField('<:storm:512731557140627476>Ventos:', Tempo.winddisplay, true)
    .setFooter(`Pedido por: ${message.author.tag}`, message.author.avatarURL)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.displayAvatarURL))
    color: "#a32aff"
    
}, 3 * 1000)

})
})}

module.exports.config = {
    name: "clima",
    aliases: ["clima"]
    }