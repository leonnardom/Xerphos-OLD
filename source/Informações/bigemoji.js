const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if(!args[0]){
        message.channel.send(new Discord.RichEmbed()
        .setDescription("<:settings:514924323618816021>**Comando:** xh!bigemoji")
        .setColor("#a32aff")
        .setImage("https://cdn.discordapp.com/attachments/512727524791287812/514921214871863297/line.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/512727524791287812/514912440765513758/network_1.png")
        .addField("<:st:514922245370413087>Uso:", "\`\`xh!bigemoji <nome do emoji>\`\`")
        .addField("<:st:514922245370413087>Exemplo:", "\`\`xh!bigemoji robot\`\`")
        .addField("<:st:514922245370413087>Alternativas:", "\`\`xh!b.emoji\`\`"))
        }
            let volte = args[0];
            if (!volte) return;
   
    const arg = message.content.split(" ").slice(1);
    let emoji = message.guild.emojis.find(emoji => emoji.name === `${arg.join(" ")}`)
    const embed = new Discord.RichEmbed()
    .setColor("#a32aff")
    .setImage(emoji.url)
    message.channel.send(embed)
  


}
module.exports.config = {
    name: "bigemoji",
    aliases: ["bigemoji", "b.emoji"]
}