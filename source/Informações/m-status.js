const Discord = require("discord.js")


exports.run =  async (xerphos, message, args) => {

console.log(`comando m.status ${message.guild.name} ${message.guild.id} ${message.author.tag}`)
 
    
    let MembrosOnline = message.guild.members.filter(a => a.presence.status == "online").size;
    let MembrosOcupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
    let MembrosAusente = message.guild.members.filter(a => a.presence.status == "idle").size;
    let MembrosOffline = message.guild.members.filter(a => a.presence.status == "offline").size;

    let statusembed = new Discord.RichEmbed()
    .setColor('36393e')
    .addField('Membros', `**Online:** ${MembrosOnline} | **Ausente:** ${MembrosAusente} | **Ocupado:** ${MembrosOcupado} | **Offline:** ${MembrosOffline} `);
   
    
    message.channel.send(statusembed)

};