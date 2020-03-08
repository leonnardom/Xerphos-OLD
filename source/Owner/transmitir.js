const database = require("../../configuração/database.js"); 
const Discord = require('discord.js');

exports.run =  async (xerphos, message, args) => {

console.log(`comando transmitir ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

database.Users.findOne({_id: message.author.id}, function (erro, usuario) {

    try {
 
    if(usuario.owner) {

    var stats = args.join(" ");

    if(!stats) {
        message.channel.send(`<:cancel:504782695667335178> | ${message.author}, insira meu **status**`)

} else {

    xerphos.user.setPresence({ game: { name: stats, type: 1, url: 'https://www.twitch.tv/xerphos'} });

    let yEmbed = new Discord.RichEmbed()
    
        .setThumbnail(`https://cdn.discordapp.com/emojis/493919635985399823.png?v=1`)
        .setTitle("**<a:okay:512392301037748251> Meus status foi alterado**")
        .setColor("36393e")
        .setFooter(`Xerphos - 2018`, xerphos.user.displayAvatarURL)
        .addField("Transmitindo Agora <:download:495736437849980940>" ,`**> ${stats}**`)
        message.channel.send(yEmbed)
    }
  
} else {

    var yEmbed = new Discord.RichEmbed()
    
        .setColor("#36393e")
        .setDescription(`<:cancel:504782695667335178> | ${message.author}, você não tem **permissão** para executar esse **comando**`)

    message.channel.send(yEmbed)
    }
} catch (e) {
        console.log(`Erro no comando de transmitir - Erro: ${e}`);
        }
    })
}