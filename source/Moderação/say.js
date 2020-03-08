const Discord = require('discord.js');
const talkedRecently = new Set();

exports.run = (client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(new Discord.RichEmbed()
    .setColor("#3f007c")
    .setTimestamp()
    .setDescription("<:cancel:504782695667335178> | Você não tem permissão para executar este comando.")).then(m => m.delete(5000))
if (talkedRecently.has(message.author.id)) return message.channel.send(`${message.author},Espere **5 segundos** para usar outro comando novamente.`);{
    talkedRecently.add(message.author.id);
    
    setTimeout(() => {
    talkedRecently.delete(message.author.id);
    }, 5000);
    }
    console.log(`Comando Say`)
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});  
    message.channel.send(sayMessage);
  }

