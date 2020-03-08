const Discord = require('discord.js');
const moment = require('moment');

exports.run = async(client, message, args) => {
moment.locale('pt-br')

    var razao = args.slice(1).join(" ")
    var membro = message.mentions.members.first() || client.users.get(args[0]);
    if (!message.member.hasPermissions("ADMINISTRATOR")) return message.reply(new Discord.RichEmbed()
    .setColor("#a32aff")
    .setTimestamp()
    .setDescription("<:cancel:504782695667335178> | Você não tem permissão para executar este comando."))

    if(!args[0]){
        message.channel.send(new Discord.RichEmbed()
        .setDescription("<:settings:514924323618816021>**Comando:** xh!warn")
        .setColor("#a32aff")
        .setImage("https://cdn.discordapp.com/attachments/512727524791287812/514921214871863297/line.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/512727524791287812/514912440765513758/network_1.png")
        .addField("<:st:514922245370413087>Uso:", "\`\`xh!ship <@usuario> <motivo>\`\`")
        .addField("<:st:514922245370413087>Exemplo:", "\`\`xh!ship @zSpl1nterUS_ Test\`\`")
        .addField("<:st:514922245370413087>Alternativas:", "\`\`xh!aviso\`\`"))
        }
            let volte = args[0];
            if (!volte) return;
    if (!membro.bannable) return message.reply("Eu não posso punir este usuário, meu cargo é menor que o do usuário a ser punido!")

    message.delete()

    if (razao.length < 1) return message.reply("Adicione um motivo válido!")

    const warnembed = new Discord.RichEmbed()

        .setThumbnail(membro.user.avatarURL)
        .setAuthor(`${message.guild.name}`, message.guild.iconURL)
        .setDescription(`O usuário foi punido(a) por desrespeitar as regras do servidor!`)
        .addField("🚫 | Punição", `Warn`)
        .addField("👮🏻 | Staff", `${message.author.username}`)
        .addField("🔧 | Id do staff", `${message.author.id}`)
        .addField("👤 | Usuário", `${membro}`)
        .addField("⚙️ | Id do usuário:", `${membro.id}`)
        .addField("📑 | Motivo", razao)
        .setColor("#a32aff")
        .setTimestamp(new Date())
message.channel.send(warnembed)
}
