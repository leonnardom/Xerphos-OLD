const Discord = require("discord.js")

exports.run =  async (xerphos, message, args) => {

console.log(`comando pescaria ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

var falas = ['Fisgou o peixe, mas ele conseguiu escapar, que pena', 'Pescou um tubarão huuuu', 'Olha só olha lá, é um baiacu', 'Pescou uma tilápia, parabéns é pra poucos', 'Ué cadê o anzol, isso lá é pescador rapa', 'Duas piranha pra não passar fome', 'Motô do barco quebrou e teve que voltar', ]

const falas2 = falas[Math.floor(Math.random() * falas.length)]

let yEmbed = new Discord.RichEmbed()
        
            .setTitle(":tropical_fish: **SOBRE A PESCA**")
            .setColor("RANDOM")
            .setDescription(`${falas2}`)
            .setTimestamp()
            .setFooter(`Pescaria de ${message.author.tag}`, message.author.avatarURL)
            message.channel.send(yEmbed)

};