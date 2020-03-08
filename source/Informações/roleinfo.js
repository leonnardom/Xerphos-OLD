const Discord = require("discord.js")
const moment = require("moment")
require("moment-duration-format")

exports.run =  async (xerphos, message, args) => {

console.log(`comando roleinfo ${message.guild.name} ${message.guild.id} ${message.author.tag}`)


        var rol = args[0]
        let role = message.guild.roles.find(x=> x.name == `${rol}`)  || message.mentions.roles.first()
        var hata = new Discord.RichEmbed()
        .setColor('#36393e')
        .setDescription("**<:314240199406387201:490756225575682049> Escreva o nome de alguma role válida**");
        if(!role) return message.channel.send(hata);
        
        moment.locale("pt-BR")
        var roleinfoEmbed = new Discord.RichEmbed()
        .setColor('#36393e')
        .setThumbnail(`https://cdn3.iconfinder.com/data/icons/macosxstyle/macosxstyle_png/512/Setting.png`)
        .addField('<:s7ssssjs3:495610519932108821> Nome', "**"+role.name+"**", true)
        .addField('<:s7ssssjs6:495610520326635535> ID', "**"+role.id+"**", true)
        .addField('<:s7ssssjs1:495610518065643542> Membros Setados', "**"+role.members.size+"**", true)
        .addField('<:s7ssssjs4:495610520116658186> Hexadecimal', "**"+role.hexColor+"**", true)
        .addField('<:s7ssssjs5:495610521504972821> Mencionável', role.mentionable ? '**Sim**' : '**Não**', true)
        .addField('<:s7ssssjs2:495610519823056907> Data de Criação', "**"+moment(role.createdAt).format("LL")+"**", true)
        .setFooter("xerphos™ - 2018 | VERIFICADO");
        message.channel.send(roleinfoEmbed)
 
};