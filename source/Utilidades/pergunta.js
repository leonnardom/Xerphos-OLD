const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
if(!args[0]){
message.channel.send(new Discord.RichEmbed()
.setDescription("<:settings:514924323618816021>**Comando:** xh!perguntar")
.setColor("#a32aff")
.setImage("https://cdn.discordapp.com/attachments/512727524791287812/514921214871863297/line.png")
.setThumbnail("https://cdn.discordapp.com/attachments/512727524791287812/514912440765513758/network_1.png")
.addField("<:st:514922245370413087>Uso:", "\`\`xh!perguntar <pergunta>\`\`")
.addField("<:st:514922245370413087>Exemplo:", "\`\`xh!perguntar Vou pegar a 10/10?\`\`"))
}
        let volte = args[0];
        if (!volte) return;

const argss = message.content.split(" ").slice(1);
const prefix = 'xh!'
if(!args[2]) return message.reply(new Discord.RichEmbed()
.setColor("#a32aff")
.setTimestamp()
.setDescription("<:cancel:504782695667335178> | Por favor, faça a pergunta completa")).then(m => m.delete(5000));
let replies = ["Sim", "Não", "Eu não sei", "Talvez", "Eu responderia mais não quero ferir seus sentimentos", "Tudo que importa é oque você acha", "Não quero responder"]
       
let result = Math.floor((Math.random() * replies.length));
let question = args.join(" ");
avatar = message.author.avatarURL

let ballembed = new Discord.RichEmbed()
.setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
.setColor("#a32aff")
.setTimestamp()
.addField('<:conversation:504810781398007808> | Pergunta:', question)
.addField("<:love:504765420113231872> | Resposta:", replies[result])

message.channel.send(ballembed)
}

