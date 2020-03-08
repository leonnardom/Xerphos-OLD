const database = require("../../configuração/database.js"); 
const Discord = require("discord.js");

exports.run = (xerphos, message, args) => {

console.log(`comando Manu ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

database.Users.findOne({_id: message.author.id}, function (erro, usuario) {
if(usuario) {
      if(usuario.owner) {

  var razaou = args.slice(0).join(' ')

        if (!razaou.length < 1) {

database.Comandos.findOne({_id: args[0].toLowerCase()}, function (cerro, comando) {

            if (comando) {
              if (comando.manutenção) {
                comando.manutenção = false
                comando.save()
                message.channel.send(`<a:okay:512392301037748251> | ${message.author}, o comando \`${args}\` foi retirado da **Manutenção**`)

              } else {
                comando.manutenção = true
                comando.save()
                message.channel.send(`<a:okay:512392301037748251> | ${message.author}, o comando \`${args}\` foi colocado em **Manutenção**`)
              }
            } else {
              message.channel.send(`<:cancel:504782695667335178> | ${message.author}, o comando \`${razaou}\` não foi **achado**`)
            }
          })
        } else {
          message.channel.send(`<:cancel:504782695667335178> | ${message.author}, diga qual \`comando\` deseja colocar em **Manutenção**`)
        }
} else {
  var yEmbed = new Discord.RichEmbed()
    
        .setColor("#36393e")
        .setDescription(`<:cancel:504782695667335178> | ${message.author}, você não tem **permissão** para executar esse **comando**`)
        message.channel.send(yEmbed)
}
} else {
  console.log('Comando manu - confused')
    }
  })
}