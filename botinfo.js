const Discord = require("discord.js");
const moment = require("moment")
require("moment-duration-format")
const fs = require('fs')
const os = require('os')
const cpuStat = require("cpu-stat");

module.exports.run = (client, message, args) => {
        let bicon = client.user.displayAvatarURL;
        let duration = moment.duration(client.uptime).format('D [d], H [h], m [m], s [s]');
        let botembed = new Discord.RichEmbed()
        avatar = message.author.avatarURL
        moment.locale("pt-BR")
        let file = fs.readdirSync('./commands')
        let comandos = file.length  
        cpuStat.usagePercent(function(err, percent, seconds) {
          if (err) {
            return console.log(err);
          }

        const embed = new Discord.RichEmbed()
          
          .setTitle(`Xerphos`)
          .setFooter(`${message.author.tag}`, message.author.avatarURL)
          .setColor("#a32aff", true)
          .addField("<a:owner:512392346906656778> | Dono", "<@409520003256156160>", true)
          .addField("<:calendar:516018350665629715> | Data de Criação:", `\`\`\n14/07/2018\`\``, true)
          .addField("<:net:516020858280476673> | Servidores:", `\`\`\n${client.guilds.size}\`\``, true)
          .addField("<:team:516020368729702431> | Usuários:", `\`\`\n${client.users.size}\`\``, true)
          .addField("<:tv:516019716637327400> | Canais:", `\`\`\n${client.channels.size}\`\``, true)
          .addField("<a:uptime:512392551618183168> | Uptime:",`\`\`\n${duration}\`\``, true)
          .addField("<:sjsj:493916049746427904> | Latência:",`\`\`\n${Math.round(client.ping)}ms\`\``, true)
          .addField("<a:okay:512392301037748251> | Versão:", "\`\`\n3.0\`\`", true)
          .addField("<:tips:513424911537012766> | Prefixo:", "\`\`\nxh!\`\`", true)
          .addField("<:settings1:497954939742715944> | Total de comandos:", `\`\`\n${comandos}\`\``, true)
          .addField("<:icons8eletrnicos48:509069119304237057> | Uso da CPU", `\`\`${percent.toFixed(2)}%\`\``, true)
          .addField("<:gearr:516026024660828180> | Sistema:", "\`\`x64\`\`", true)
          .addField("<:http:516019137068400675> | Meus Links:", `<:cloud:504475054294302722> [[Convite]](https://discordapp.com/api/oauth2/authorize?client_id=490305944551686155&permissions=8&scope=bot)\n<:cloud:504475054294302722> [[Suporte]](https://discordapp.com/invite/FsthTJM)`)
          message.channel.send(embed).then(async msg => {
            await msg.react('518232708028301325')
          
            const DeleteFilter = (reaction, user) => reaction.emoji.name === '518232708028301325' && user.id === message.author.id;
              const deletee = msg.createReactionCollector(DeleteFilter);

          
deletee.on('collect', async bot => {
           await msg.delete()

        })
})
        })
    }

    module.exports.config = {
        name: "botinfo",
        aliases: ["botinfo"]
        }