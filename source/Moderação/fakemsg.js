const Discord = require('discord.js');
const talkedRecently = new Set();

exports.run = (client, message, args) => {
    if(!args[0]){
        message.channel.send(new Discord.RichEmbed()
        .setDescription("<:settings:514924323618816021>**Comando:** xh!fakemsg")
        .setColor("#a32aff")
        .setImage("https://cdn.discordapp.com/attachments/512727524791287812/514921214871863297/line.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/512727524791287812/514912440765513758/network_1.png")
        .addField("<:st:514922245370413087>Uso:", "\`\`xh!fakemsg <@usuario> <mensagem>\`\`")
        .addField("<:st:514922245370413087>Exemplo:", "\`\`xh!fakemsg @zSpl1nterUS_ Sou lindo\`\`"))
        }
            let volte = args[0];
            if (!volte) return;

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(new Discord.RichEmbed()
    .setColor("#a32aff")
    .setTimestamp()
    .setDescription("<:cancel:504782695667335178> | Você não tem permissão para executar este comando.")).then(m => m.delete(5000))
    if (talkedRecently.has(message.author.id)) return message.channel.send(`${message.author},Espere **5 segundos** para usar outro comando novamente.`);{
        talkedRecently.add(message.author.id);
        
        setTimeout(() => {
        talkedRecently.delete(message.author.id);
        }, 5000);
        }    try {
let user;

if (message.mentions.users.first()) {
  user = message.mentions.users.first();
  
} else if(args[0]) {
    user = client.users.get(args[0]);

}
let botmessage = args.slice(1).join(' ')

if (args[0] == null) {return message.channel.send(`${message.author}, :xShiina: **Mencione um usuário !**`)}


if (args[1] == null) {return message.channel.send(`${message.author}, :xShiina: **Diga algo !**`)}
message.channel.createWebhook(user.username, user.avatarURL).then(w => {
    w.send(botmessage);
    w.delete();
})

} catch (err) {
message.reply(':xShiina: **Eu não tenho permissão para criar um Webhook neste servidor, ou não encontrei este usuário.**')
}   
}

