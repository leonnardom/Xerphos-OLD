const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if(!args[0]){
        message.channel.send(new Discord.RichEmbed()
        .setDescription("<:settings:514924323618816021>**Comando:** xh!setarnome")
        .setColor("#a32aff")
        .setImage("https://cdn.discordapp.com/attachments/512727524791287812/514921214871863297/line.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/512727524791287812/514912440765513758/network_1.png")
        .addField("<:st:514922245370413087>Uso:", "\`\`xh!setarnome <@usuario> <nome>\`\`")
        .addField("<:st:514922245370413087>Exemplo:", "\`\`xh!setarnome @zSpl1nterUS_ Sprinter\`\`"))
        }
                let volte = args[0];
                if (!volte) return;
        
if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply(new Discord.RichEmbed()
.setColor("#a32aff")
.setTimestamp()
.setDescription("<:cancel:504782695667335178> | Você não tem permissão para executar este comando.")).then(m => m.delete(5000))  
    if (!args[1]) return message.channel.send(new Discord.RichEmbed()
    .setColor("#a32aff")
    .setTimestamp()
    .setDescription('<:cancel:504782695667335178> | Você deve informar o novo nick!')).then(m => m.delete(5000)) 
    var usuario = message.mentions.users.first(); 
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send(`<:cancel:504782695667335178> | Não consegui encontrar o usuário mencionado.`).then(m => m.delete(5000))  
    let sNick = args[1];
    if(bUser.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(new Discord.RichEmbed()
    .setColor("#a32aff")
    .setTimestamp()
    .setDescription(`<:cancel:504782695667335178> | Eu não tenho permissão de trocar o nick deste usuário!`))

    message.delete().catch(O_o=>{});  
    message.guild.member(bUser).setNickname(sNick);
    message.react("508114778695139348")
    message.channel.send(new Discord.RichEmbed()
    .setColor("#a32aff")
    .setTimestamp()
    .setDescription(`<:shuffle:508114778695139348> | O nick do usuário, **${usuario.username}** foi alterado!`))
}

