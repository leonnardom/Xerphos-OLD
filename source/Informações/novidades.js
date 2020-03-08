const Discord = require('discord.js');

exports.run = async(client, message, args, prefixo) => {
 let embed = new Discord.RichEmbed()

 .setTitle("<a:okay:512392301037748251> Novidades do Bot **__Xerphos__**")   
 .setColor("#36393e")
 .setDescription(`\nNovo comando, digite \`${prefixo}lockdown\`\nDesgin de todos os comandos de músicas alterados.\nNovo comando: \`${prefixo}partners\`\nComandos: \`${prefixo}autorole - ${prefixo}welcome - ${prefixo}saída - ${prefixo}ant-invite - ${prefixo}prefixo\` Funcionando.\n\n${prefixo}bug <report do bug> para enviar o report de um bug ao meu servidor de suporte.\n\nUsem os comandos duas vezes na primeira vez que adicionarem o Bot.`)
message.channel.send(embed)
}
