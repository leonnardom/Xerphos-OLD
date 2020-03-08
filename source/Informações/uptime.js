const Discord = require("discord.js")

function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {
        d: d
        , h: h
        , m: m
        , s: s
    };
};


exports.run =  async (xerphos, message, args) => {

    console.log(`comando uptime ${message.guild.name} ${message.guild.id} ${message.author.tag}`);
    
    let u = convertMS(xerphos.uptime);

    let segundo = u.s + " Segundos"
    let minuto = u.m + " Minutos"
    let hora =u.h + " Horas" 
    let dia = u.d + " Dias"  



    let uptimeE = new Discord.RichEmbed()
        
            .setThumbnail(`http://atomicgroup.com/wp-content/uploads/2017/08/Consulting.png`)
            .setColor("#36393e")
             .setFooter(`xerphos™ - 2018 | VERIFICADO`, xerphos.user.displayAvatarURL)
            .addField('<:ieueueu:493916663327096866> **UPTIME**', `**${dia}\n${hora}\n${minuto}\n${segundo}**`)
            message.channel.send(uptimeE)
 
};