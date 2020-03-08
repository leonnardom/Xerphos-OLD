const Discord = require("discord.js")
const moment = require("moment")
require("moment-duration-format")


exports.run =  async (xerphos, message, args, prefixo) => {
    
console.log(`comando emoji.info ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

moment.locale("pt-BR")

    try {

        let emoji = message.guild.emojis.find(emoji => emoji.name === `${args.join(" ")}`)
    

        let animado;
            if (emoji.animated === true) animado = "Sim"
            if (emoji.animated === false) animado = "Não"
        
        let emo;
        if(emoji.animated === true) emo = "**`"+`<a:${emoji.name}:${emoji.id}>`+"`**"
        if(emoji.animated === false) emo = "**`"+`<:${emoji.name}:${emoji.id}>`+"`**"

            
         const embed = new Discord.RichEmbed()

        .setTitle(` Informações do emoji: **__${emoji.name}__**`)
        .setColor('36393e')
        .setThumbnail(`${emoji.url}`)
        .addField("<:choice:504784284305981468> Servidor:", `**`+emoji.guild.name+`**`, true)
        .addField("<a:minecraft:508786928481599490> Animado:", `**`+animado+`**`, true)
        .addField("<:calendar:516018350665629715> Criado em:", `**`+moment(emoji.createdAt).format("LL")+`**`,true)
        .addField("<a:eng:516402604146950146> ID do Emoji:", `**`+emoji.id+`**`,true )
        .addField("<:gearr:516026024660828180> Identificador:", `${emo}`)
        .setTimestamp()
        .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)

        message.channel.send(embed)
    
    } catch (err) {
        
        const embedy = new Discord.RichEmbed()
        .setTitle(` **__Emoji não encontrado__**`)
        .setColor('36393e')
         .setFooter(`Xerphos - 2019`, xerphos.user.displayAvatarURL)
        .addField("Uso Corretamente ", `**> ${prefixo}emoji.info \`<AlgumEmojiDoServidor>\`**`)
        message.channel.send(embedy).then(msg => msg.delete(5000));
       
    }
    }