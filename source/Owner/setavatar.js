const Discord = require("discord.js")
const database = require("../../configuração/database.js"); 

exports.run =  async (xerphos, message, args) => {

console.log(`comando setavatar ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

database.Users.findOne({_id: message.author.id}, async function (erro, usuario) {
 
if(usuario.owner) {
    
    try {

        if(!args[0]) {

        message.channel.send(`<:314240199406387201:490756225575682049> | ${message.author}, insira meu **status**`)

} else {

        if (!/^(https?:\/\/)((([-a-z0-9]{1,})?(-?)+[-a-z0-9]{1,})(\.))+([a-z]{1,63})\/((([a-z0-9._\-~#%])+\/)+)?([a-z0-9._\-~#%]+)\.(jpg|jpeg|gif|png|bmp)$/i.test(args.join(' '))) {
      
        var gEmbed = new Discord.RichEmbed()
        
            .setTitle("<:314240199406387201:490756225575682049> **LINK INVÁLIDO**")
            .setColor("#36393e")
            .setThumbnail(` https://cdn.discordapp.com/emojis/493919635985399823.png?v=1`)
            .setFooter(`Xerphos - 2019`, xerphos.user.displayAvatarURL)
            .addField("Utilize um Link Válido", `**Formato: \`https://LinkDoAavatar.(jpg|jpeg|gif|png|bmp)\`**`)
            
        message.channel.send(gEmbed)
   } else {
    
        await xerphos.user.setAvatar(args.join(' '));

        let xerphosavatar = xerphos.user.displayAvatarURL;
    
        var avatard = new Discord.RichEmbed()
        
        .setThumbnail(` https://cdn.discordapp.com/emojis/493919635985399823.png?v=1`)
        .setTitle("<:checked3:493918444366856213> AVATAR ALTERADO")
        .setColor("#36393e")
        .setFooter(`xerphos™ - 2018 | VERIFICADO`, xerphos.user.displayAvatarURL)
        .addField(`Alterado Por: **${message.author.tag}**`,
        `[[Meu Avatar]](${xerphosavatar})`)

        message.channel.send(avatard).then(a => {
            message.delete()
            })
        }
    }
} catch (e) {
    console.log(`Erro no comando de Setavatar - Erro: ${e}`)
    }
} else {
        var yEmbed = new Discord.RichEmbed()
    
        .setColor("#36393e")
        .setDescription(`<:314240199406387201:490756225575682049> | ${message.author}, você não tem **permissão** para executar esse **comando**`)
        message.channel.send(yEmbed)
        };
    })
}
