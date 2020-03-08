const Discord = require("discord.js")

exports.run =  async (xerphos, message, args) => {

console.log(`comando spotify ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

try {
 
var user = message.mentions.users.first() || message.author;

    if (user.presence.game !== null && user.presence.game.type === 2 && user.presence.game.name === 'Spotify' && user.presence.game.assets !== null) {
     var trackImg = user.presence.game.assets.largeImageURL;
     var trackUrl = `https://open.spotify.com/track/${user.presence.game.syncID}`;
     var trackName = user.presence.game.details;
     var trackAlbum = user.presence.game.assets.largeText;
     var trackAuthor = user.presence.game.state;

const embed = new Discord.RichEmbed()
            .setTitle(`SPOTIFY - **${user.tag}** <:4acb8e52632aa9b7c874b878eaf02bc4:492824922985332736>`)
            .setColor('#36393e')
            .setThumbnail(trackImg)
            .setFooter(`${message.author.username}`, message.author.displayAvatarURL)
            .addField("🎵 Nome da Música", `**${trackName}**`)
            .addField("📀 Álbum", `**${trackAlbum}**`)
            .setTimestamp()
            .addField("🎤 Autor(es)", `**${trackAuthor}**`)
            .addField('**Ouça Também**', `[Clique Aqui](${trackUrl})`);
            
        return message.channel.send(embed);
        
        
   
    } else {
        return message.channel.send({embed: {
            description: `**${user.username},** Não está ouvindo Spotify <:4acb8e52632aa9b7c874b878eaf02bc4:492824922985332736>`,
            color:  0x36393e
        }}).then(msg => msg.delete(5000));
    }
} catch (e) {

    console.log(`Erro comando de Spotify - guild: id:(${message.guild.id}) - nome:(${message.guild.name}) Erro: ${e}`)
    }
}