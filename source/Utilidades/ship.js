const Discord = require("discord.js")
const Jimp = require("jimp")
const fs = require("fs")

exports.run = async (client, message, args) => {

var porcentagem = 0
var aleatorio = Math.round(Math.random() * 100)
porcentagem = aleatorio
let user1 = message.mentions.users.first() || message.author
let user2 = message.mentions.users.array()[1]
if(!args[0]){
  message.channel.send(new Discord.RichEmbed()
  .setDescription("<:settings:514924323618816021>**Comando:** xh!ship")
  .setColor("#a32aff")
  .setImage("https://cdn.discordapp.com/attachments/512727524791287812/514921214871863297/line.png")
  .setThumbnail("https://cdn.discordapp.com/attachments/512727524791287812/514912440765513758/network_1.png")
  .addField("<:st:514922245370413087>Uso:", "\`\`xh!ship <@usuario> <@usuario2>\`\`")
  .addField("<:st:514922245370413087>Exemplo:", "\`\`xh!ship @zSpl1nterUS_ @Xerphos\`\`"))
  }
          let volte = args[0];
          if (!volte) return;
let richard_lindu = await Jimp.read(user1.avatarURL)
let richard_dmais = await Jimp.read(user2.avatarURL)
await richard_lindu.resize(115, 115)
await richard_dmais.resize(115, 115)
let eu_amo_o_richard = await Jimp.read("https://cdn.discordapp.com/attachments/486016051851689994/509883077707694100/ships.png")
await eu_amo_o_richard.composite(richard_lindu, 1, 1)
await eu_amo_o_richard.composite(richard_dmais, 229, 1)
.write(`./img/${user1.id}${user2.id}.png`)
let aido = new Array ()
aido[1] = "Msg 1"
aido[2] = "Msg 2"
var i = Math.floor(2*Math.random())
var mensagem = porcentagem <= 5 ? `${porcentagem}% Infelizmente esse casal é impossivel` : porcentagem <= 10 ? `${porcentagem}% [█████-----] Talvez um dia dê certo` : porcentagem <= 50 ? `${porcentagem}% [███████-----] Se o ${message.author}, tomasse alguma atitude` : porcentagem <= 70 ? `${porcentagem}% [███████----] Deveriam se casar agora ` : porcentagem <= 100 ? `${porcentagem}% [██████████] Casal perfeito, vão ficar juntos para sempre` : `Casal perfeito, vão ficar juntos para sempre`
message.channel.send({
embed: {
"fields": [
{
"name": `Será que teremos um novo casal?`,
"value": `${user1} + ${user2} = ${mensagem}`
}],
"color": 0x0000,
image: {
url: 'attachment://file.jpg'
}
},
files: [{
attachment: "./img/" + user1.id + user2.id + ".png",
name: 'file.jpg'
}]
})
      setTimeout(function() {      
        fs.unlink(`./img/${user1.id}${user2.id}.png`)
      }, 2000)
}
