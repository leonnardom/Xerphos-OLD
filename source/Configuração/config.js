const Discord = require("discord.js");
const database = require("../../configuração/database.js"); 

exports.run = async (xerphos, message, args, prefixo) => {
 
console.log(`Comando config ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

database.Guilds.findOne({_id: message.guild.id}, function (erro, servidor) {

    let welcome = servidor.welcome
    let = welcome
    if(welcome === true) welcome = "<:ligado:530515743524126731>"
    if(welcome === false) welcome = "<:desligado:530515719406878720>";

    let saida = servidor.byebye
    let = saida
    if(saida === true) saida = "<:ligado:530515743524126731>"
    if(saida === false) saida = "<:desligado:530515719406878720>";

    let antInv = servidor.ConfirmeInvite
    let = antInv
    if(antInv === true) antInv = "<:ligado:530515743524126731>"
    if(antInv === false) antInv = "<:desligado:530515719406878720>";

    let autorole = servidor.autorole
    let = autorole
    if(autorole === true) autorole = "<:ligado:530515743524126731>"
    if(autorole === false) autorole = "<:desligado:530515719406878720>";
                

    message.channel.startTyping()

    var embedConfig = new Discord.RichEmbed()

    .setTitle('<a:okay:512392301037748251> Minhas Configurações Disponíveis')
        .setThumbnail(xerphos.user.displayAvatarURL)
             .setFooter(message.author.username, message.author.displayAvatarURL)
                .addField(`**Ant-Invite ${antInv}**`, `Use \`${prefixo}ant-invite\`, \nbloqueador de convites de outros **__servidores__**.`)
                    .addField(`**Welcome ${welcome}**`, `Use \`${prefixo}welcome\`, \njeito para configurar a mensagem de **__bem-vindo__**`)
                        .addField(`**Saída ${saida}**`, `Use \`${prefixo}saida\`, \njeito para configurar a mensagem de **__saída__**`)
                            .addField(`**Autorole ${autorole}**`, `Use \`${prefixo}autorole\`, \nmodo de configurar o **__cargo__** que o membro vai receber quando entrar no **__servidor__**`)
                                .addField(`**Prefixo - Atual \`[${servidor.prefix}]\`**`, `Use \`${prefixo}prefixo\`, para alterar meu prefixo sem seu **__servidor__**`)
                                    .setColor('#36393e')
                                    
    message.channel.stopTyping()
    message.channel.send(embedConfig)

    }).catch(e => {
        console.log('Mongoose Duplicada')
      })
}