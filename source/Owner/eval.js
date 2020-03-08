const Discord = require("discord.js");
const database = require("../../configuração/database.js"); 

function clean(text) {
    if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
    return text;
} 

exports.run =  async (xerphos, message, args) => {

console.log(`comando eval ${message.guild.name} ${message.guild.id} ${message.author.tag}`)
      
database.Users.findOne({_id: message.author.id}, function (erro, usuario) {

    if(usuario) {
      if(usuario.owner) {

    try {

        var code = args.join(" ");
        var evaled = eval(code);
        
    if(!code) {

            var hhEmbed = new Discord.RichEmbed()
            
                .setColor("#36393e")
                .setDescription(`<:314240199406387201:490756225575682049> | ${message.author}, insira o **código** para prosseguir com o **comando**`)

            message.channel.send(hhEmbed)
        } else {

    if(typeof evaled !== "string")
    evaled = require("util").inspect(evaled);

    var embed = new Discord.RichEmbed()

            .setColor("#36393e")
            .setThumbnail(xerphos.user.displayAvatarURL)
            .setFooter(`xerphos™ - 2018 | VERIFICADO`, xerphos.user.displayAvatarURL)
            .addField("<a:hypersquad:489914255861088266> Código:", "```"+code+"```")
            .addField("<:313905428121780225:490744637066313748> Resultado:","```"+evaled+"```")
            
    message.channel.send(embed).then(msg=> {
              msg.react('✅')
        })
    }
} catch (err) {
    const code = args.join(" ");
    const embed = new Discord.RichEmbed()
    .setColor("#36393e")
    .setFooter(`xerphos™ - 2018 | VERIFICADO`, xerphos.user.displayAvatarURL)
    .setThumbnail(xerphos.user.displayAvatarURL)
    .addField("<a:hypersquad:489914255861088266> Código:","```"+code+"```")
    .addField("<:314240199406387201:490756225575682049> Erro:", "```"+`xl\n${clean(err)}`+"```")
  message.channel.send(embed).then(msg=> {
  msg.react('❌')
              })
          }
} else {
        var yEmbed = new Discord.RichEmbed()
    
        .setColor("#36393e")
        .setDescription(`<:314240199406387201:490756225575682049> | ${message.author}, você não tem **permissão** para executar esse **comando**`)
        message.channel.send(yEmbed)
    }
} else {
    console.log('Comando Eval - confused')
        }
    })
}