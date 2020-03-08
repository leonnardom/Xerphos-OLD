const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if(message.content.split(' ').slice(1).join(' ').length < 1) return message.reply(new Discord.RichEmbed()
    .setColor("#a32aff")
    .setTimestamp()
    .setDescription('Faça uma pergunta pra o ET Bilu responder. exemplo ``x!et eu sou legal?``'))
let replies = ["Sim.","Sei lá.¯\_(ツ)_/¯","Só sei que nada sei.","Nunca nem vi ( ͡° ͜ʖ ͡°）","O importante é o que importa.", "Não.", "Eu não sei.", "Talvez.","Acho que sim.","Não tenho certeza","Provavelmente.","Ao meu ponto de vista sim.","Creio que sim","Creio que nao."]

let result = Math.floor((Math.random() * replies.length));
const embed2 =  new Discord.RichEmbed()
    .setColor("#a32aff")
    .addField('Resposta:', `${replies[result]}`)
    .setFooter(`Pergunta feita  por ${message.author.tag}`, (message.author.displayAvatarURL))
message.channel.send(embed2)
}
