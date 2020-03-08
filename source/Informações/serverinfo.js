const Discord = require('discord.js');
const moment = require("moment")
require("moment-duration-format")

exports.run = (client, message, args) => {

        avatar = message.author.avatarURL

    moment.locale("pt-BR")
    let online = message.guild.members.filter(a => a.presence.status == "online").size;
    let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
    let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
    let offline = message.guild.members.filter(a => a.presence.status == "offline").size;
    let bot = message.guild.members.filter(a => a.user.bot).size;
    let totalmembros = message.guild.memberCount;
    let canaistexto = message.guild.channels.filter(a => a.type === "text").size;
    let canaisvoz = message.guild.channels.filter(a => a.type === "voice").size;
    let cargos = message.guild.roles.map(a => a).join(", ")
        const embed = new Discord.RichEmbed()
        .setTimestamp()
        .setColor("#a32aff")
        .setDescription(`<a:okay:512392301037748251> Informações do servidor \`\`${message.guild.name}\`\``)
        .addField('<a:owner:512392346906656778> Dono:', `<@${message.guild.owner.id}>`)
        .addField('Criado em:', moment(message.guild.createdAt).format('LLLL'))
        .addField("<:network:516020899342712852> ID:", message.guild.id)
        .addField(`<:team:516020368729702431> Membros: (${totalmembros})`, `<:on:521116720149168148> Online: \`\`${online}\`\`\n<:ausente:521116753816846346> Ausente: \`\`${ausente}\`\`\n<:oucupado:521116741594513409> Ocupado: \`\`${ocupado}\`\`\n<:off:521116730161102858> Offline: \`\`${offline}\`\`\n<:support:511297634628141076> Bots: \`\`${bot}\`\``)
        .addField(`<:shuffle:508114778695139348> Canais: ${canaistexto+canaisvoz}`, `Texto: \`\`${canaistexto}\`\`\n Voz: \`\`${canaisvoz}\`\``)
        .addField(`<:boss:523685918390091802> Você entrou aqui em:`, moment(message.member.joinedAt).format(`LLLL`))
        .addField(`<:management:514580926794039298> Entrei aqui em:`, moment(client.user.joinedAt).format(`LLLL`))
        .addField(`<:sett:529756794025803776> Cargos:`, `\`\`${message.guild.roles.size}\`\``)
        .setThumbnail(message.guild.iconURL)
        .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
        message.channel.send(embed)
}

module.exports.config = {
    name: "serverinfo",
    aliases: ["serverinfo", "infoserver"]
    }
