const Jimp = require("jimp")
const fs = require("fs")
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if(!args[0]){
    message.channel.send(new Discord.RichEmbed()
    .setDescription("<:settings:514924323618816021>**Comando:** xh!laranjo")
    .setColor("#a32aff")
    .setImage("https://cdn.discordapp.com/attachments/512727524791287812/514921214871863297/line.png")
    .setThumbnail("https://cdn.discordapp.com/attachments/512727524791287812/514912440765513758/network_1.png")
    .addField("<:st:514922245370413087>Uso:", "\`\`xh!laranjo <mensagem>\`\`")
    .addField("<:st:514922245370413087>Exemplo:", "\`\`xh!laranjo Sou Lindo\`\`"))
    }
        let volte = args[0];
        if (!volte) return;

Jimp.read("https://cdn.glitch.com/b94d084b-e5f6-4bf9-bc57-563c25d6c68e%2Fimagem%20(1).png?1538783939685", function (err, image) {
    if (err) throw err;
    Jimp.loadFont(Jimp.FONT_SANS_64_BLACK).then(function (font) {
    
    image.resize(719, 519)
        image.print(font, 10, 20, gs, 750)
        image.write("maikaimg/laranjo.jpg")

  message.channel.send({
  files: [{
    attachment: 'maikaimg/laranjo.jpg',
    name: 'laranjo.jpg'
  }]
})

          setTimeout(function () {
                fs.unlink("maikaimg/laranjo.jpg");
        }, 5000);
      })
})

}
