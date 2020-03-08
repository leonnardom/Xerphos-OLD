const Discord = require("discord.js")

exports.run =  async (xerphos, message, args) => {

console.log(`comando calcular ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

try {

    let mat = message.author.tag
    let input = args.join(" ");
    if (!input) {
       
    return message.channel.send({embed: {
        description: `**${mat}**, Diga uma equação`,
        color:  0x36393e
    }}).then(msg => msg.delete(3000));
    }

    const question = args.join(" ");

    let answer;
    try {
        answer = eval(question);
    } catch (err) {
        const embed8 = new Discord.RichEmbed()
        .setThumbnail("")
        .setColor('#36393eM')
        .setTitle("<:314240199406387201:490756225575682049> EQUAÇÃO INVÁLIDA")
        .setThumbnail(message.author.displayAvatarURL)
        .addField("USE:", `**\`*\` = Multiplicação
        \`-\` = Subtração
        \`+\` = Adição
        **`)
         .setFooter(`Xerphos - 2019`, xerphos.user.displayAvatarURL)
        return message.channel.send(embed8);
    }

    const embed = new Discord.RichEmbed()
        .setThumbnail("https://images-na.ssl-images-amazon.com/images/I/31QYTepQomL.png")
        .setColor('#36393e')
        .addField("QUESTÃO", "**"+question+"**", true)
        .addField("RESPOSTA", "**"+answer+"**")
         .setFooter(`Xerphos - 2019`, xerphos.user.displayAvatarURL)

    message.channel.send(embed)

    } catch (e) {
        console.log('err cal', e)
    }
 }