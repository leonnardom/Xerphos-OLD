const database = require("../../configuração/database.js"); 
const Discord = require("discord.js");

exports.run = async (xerphos, message, args, prefixo) => {

try {

database.Users.find({}, function (erro, documento) {

    var donos = documento.filter(a => a.owner).map(a => xerphos.users.get(a._id) ? `\`${xerphos.users.get(a._id).tag}\`` : '**Não encontrado**').join(' **||** ')
    var subdonos = documento.filter(a => a.subowner).map(a => xerphos.users.get(a._id) ? `\`${xerphos.users.get(a._id).tag}\`` : '**Não encontrado**').join(' **||** ')
    var programadores = documento.filter(a => a.dev).map(a => xerphos.users.get(a._id) ? `\`${xerphos.users.get(a._id).tag}\`` : '**Não encontrado**').join(' **||** ')
    var supervisores = documento.filter(a => a.sup).map(a => xerphos.users.get(a._id) ? `\`${xerphos.users.get(a._id).tag}\`` : '**Não encontrado**').join(' **||** ')
    var designers = documento.filter(a => a.dzn).map(a => xerphos.users.get(a._id) ? `\`${xerphos.users.get(a._id).tag}\`` : '**Não encontrado**').join(' **||** ')
  
    if(!donos) donos = "Nenhum"
        if(!subdonos) subdonos = "Nenhum"
            if(!programadores) programadores = "Nenhum"
                if(!supervisores) supervisores = "Nenhum"
                    if(!designers) designers = "Nenhum"

    message.channel.startTyping()
    const embedSTAFF = new Discord.RichEmbed()

    .setAuthor('Xerphos - Staff', xerphos.user.displayAvatarURL)
        .addField('Donos', donos)
            .addField('SubDonos', `${subdonos}`)
                .addField('Programadores', `${programadores}`)
                    .addField('Supervisores', `${supervisores}`)
                        .addField('Designers', `${designers}`)
                            .setColor('#36393e')
                                .setTimestamp()
                                    .setFooter(`${message.author.username}`, message.author.displayAvatarURL)    
                                        .setThumbnail(xerphos.user.displayAvatarURL)

    message.channel.send(embedSTAFF)
    message.channel.stopTyping();

    })
} catch (e) {
    console.log(`Erro no comando de Staff - Erro: ${e}`);
    }
}