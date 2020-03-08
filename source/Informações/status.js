const Discord = require('discord.js');

exports.run = (client, message, args) => {

                avatar = message.author.avatarURL
    let MembrosOnline = message.guild.members.filter(a => a.presence.status == "online").size;
    let MembrosOcupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
    let MembrosAusente = message.guild.members.filter(a => a.presence.status == "idle").size;
    let MembrosOffline = message.guild.members.filter(a => a.presence.status == "offline").size;

let statusembed = new Discord.RichEmbed()
    
.setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
.setColor("#a32aff")
.setTimestamp()
.addField('<a:sininho:528681227520311326> | Aqui está o status de todos os Membros', `**<:on:521116720149168148>Online:** \`${MembrosOnline}\` \n\n**<:ausente:521116753816846346>Ausente:** \`${MembrosAusente}\` \n\n**<:oucupado:521116741594513409>Ocupado:** \`${MembrosOcupado}\` \n\n**<:off:521116730161102858>Offline:** \`${MembrosOffline}\`\n\n\ **<:support:511297634628141076> Bots:** `+message.guild.members.filter(m => m.user.bot).size);
   
message.channel.send(statusembed).then(async msg => {
    await msg.react('❌')
  
    const DeleteFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
      const deletee = msg.createReactionCollector(DeleteFilter);

  
deletee.on('collect', async bot => {
   await msg.delete()

})
}).then(msg => msg.react("504805152805355520"))
            }

module.exports.config = {
    name: "status",
    aliases: ["status", "membrostatus", "memberstats"]
    }

    
