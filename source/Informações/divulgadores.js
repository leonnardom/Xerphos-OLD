const Discord = require("discord.js");

module.exports.run = async (client, message) => {
    if(message.channel.type === 'dm') return;
    var invites = await message.guild.fetchInvites();

    if (invites.size < 1) {
        message.reply("**Nenhum convite no servidor**");
        return 0;
    }

    var checkedUsers = new Map();

    invites.forEach(invite => {
        let user = checkedUsers.get(invite.inviter.id);
        if (!user) {
            user = invite.inviter;
            user.sum = 0;
            user.invites = 0;
            user.biggest = invite;
        } else {
            if (invite.uses > user.biggest.uses ||
            ( invite.uses === user.biggest.uses && invite.createdTimestamp > user.biggest.createdTimestamp)) {
                user.biggest = invite;
            }
        }
        user.sum += invite.uses;
        if (invite.uses > 0) user.invites += 1;
        checkedUsers.set(user.id, user);
        return;
    });

    var top = new Array();

    checkedUsers.forEach(user => {
        if (user.sum === 0) return;
        if (top.length === 0) {
            top[0] = user;
            return;
        }
        for (let i = 0; i < top.length; ++i) {
            if (user.sum > top[i].sum ||
            ( user.sum === top[i].sum && user.biggest.createdTimestamp > top[i].biggest.createdTimestamp)) {
                top.splice(i, 0, user);
                if (top.lenght > 5) top.pop();
                return;
            } else if (i === 5) {
                checkedUsers.delete(user.id);
                return;
            }
        }
        if (top.length < 5) top.push(user);
        return;
    });

    if (top.length < 1) {
        message.reply("**Nenhum convite com mais que `0` usos**");
        return 0;
    }

    var trofeu = client.emojis.find(e => e.name === "trofeu");

    let embed = new Discord.RichEmbed()
    .setTitle("**• Top Divulgadores •**")
    .setThumbnail('https://images.emojiterra.com/mozilla/512px/1f3c6.png')
    .setColor("#a32aff");

    var sum = 0;

    var numInvites = 0;

    top.forEach((user, index) => {
        sum += user.sum;
        numInvites += user.invites;
        var emoji;


        embed.addField(`**:white_small_square:** ${user.username}`, `\`\`\`js\nConvidou: (${user.sum})\`\`\``);
    });

    let expInvite = numInvites !== 1;
    let expSum = sum !== 1;

    embed.addField("**Total:**", ` \`👤\` \`${sum}\` Usuário${expSum ? "s" : ""} Recrutado${expSum ? "s" : ""}`, true)
    .addField(`**Gerados:**`, `\`⭐\` \`${numInvites}\` Convite${expInvite ? "s" : ""} Gerado${expInvite ? "s" : ""}`, true);

    message.channel.send(embed).then(msg => msg.react(trofeu));
    return 0;
};

module.exports.config = {
    name: "divulgadores",
    aliases: ["convites", "topinvites", "divulgadores"]
    }
