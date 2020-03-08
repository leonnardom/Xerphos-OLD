const Discord = require('discord.js');

exports.run = async(client, message, args) => {

const agree    = "512392301037748251";
    const disagree = "504782695667335178";


    if(!args[0]){
        message.channel.send(new Discord.RichEmbed()
        .setDescription("<:settings:514924323618816021>**Comando:** xh!votekick")
        .setColor("#a32aff")
        .setImage("https://cdn.discordapp.com/attachments/512727524791287812/514921214871863297/line.png")
        .setThumbnail("https://cdn.discordapp.com/attachments/512727524791287812/514912440765513758/network_1.png")
        .addField("<:st:514922245370413087>Uso:", "\`\`xh!votekick <@usuario>\`\`")
        .addField("<:st:514922245370413087>Exemplo:", "\`\`xh!votekick @zSpl1nterUS_\`\`"))
        }
            let volte = args[0];
            if (!volte) return;

  let kickmember = message.guild.member(message.mentions.users.first());
  if(!kickmember){
    message.reply("❌ " + "| Este Usuário Esta Invalido!");
  }

  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")){
    return message.reply("❌ " + "| Você Tem Tem Permissão \"KICK_MEMBERS").catch(console.error);
  }

  let msg = await message.channel.send("Vote agora, votação será encerrada em \`\`1 minuto\`\`");
  await msg.react(agree);
  await msg.react(disagree);

  const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 100000});
  msg.delete();

  var NO_Count = reactions.get(disagree).count;
  var YES_Count = reactions.get(agree);

  if(YES_Count == undefined){
    var YES_Count = 1;
  }else{
    var YES_Count = reactions.get(agree).count;
  }

  var sumsum = new Discord.RichEmbed()
  
            .addField("Votos Encerrados:", "----------------------------------------\n" +
                                          "Total votos (Não.): " + `\`\`${NO_Count-1}\`\`\n` +
                                          "Total votos (Sim.): " + `\`\`${YES_Count-1}\`\`\n` +
                                          "----------------------------------------\n" +
                                          "Observação: Votos Necessários Para Kickar \`\`(3+)\`\`\n" +
                                          "----------------------------------------", true)

            .setColor("#a32aff")

  await message.channel.send({embed: sumsum});

  if(YES_Count >= 4 && YES_Count > NO_Count){

    kickmember.kick().then(member => {
      message.reply(`${member.user.username} Foi Kickado Com Sucesso!!`)
    })
  }else{

    message.channel.send("\n" + "Seguro..... Por Enquanto!?");
  }

}

