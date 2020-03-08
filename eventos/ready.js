const Discord = require("discord.js")
const xerphos = new Discord.Client({})
const DBL = require('dblapi.js')
const dbl = new DBL("", xerphos)

module.exports = (xerphos, prefixo) => {

try {

console.log(`[Êxito] > Bot Conectado e Ativo`)

setTimeout(function () {
    
console.log(`[Limite] > Xerphos | OPERANDO PARA:\n\nGuilds: ${xerphos.guilds.size}\nUsuários: ${xerphos.users.size}\nCanais: ${xerphos.channels.size}`)

}, 1000)

/*

client.shard.fetchClientValues('guilds.size').then(servers => {
client.shard.fetchClientValues('users.size').then(users => {
client.shard.fetchClientValues('channels.size').then(channels => {
    
        })
    })
})

/*

///////

/*
    //  0 = Jogando
    //  1 = Transmitindo
    //  2 = Ouvindo
    //  3 = Assistindo
*/
  
let status = [
    { name: `🔧 Fui desenvolvido pelo: zSpl1nterUS_#8611`,  type: 'STREAMING', url: 'https://www.twitch.tv/yunogasayxvii' },
    { name: `${xerphos.users.size}, pessoas em: ${xerphos.guilds.size} servidores! 🎧`,  type: 'LISTENING', url: 'https://www.twitch.tv/yunogasayxvii' },
    { name: `Para ${xerphos.users.size} pessoas, quanta gente. 😍`,  type: 'STREAMING', url: 'https://www.twitch.tv/yunogasayxvii' },
    { name: `⚙Sabia que você pode fazer uma mensagem de boas-vindas personalizado? | xh!!welcome`,  type: 'WATCHING', url: 'https://www.twitch.tv/yunogasayxvii' },
    { name: `❤Gostou de usar meus comandos? Me convide para seu servidor usando: xh!convite`,  type: 'STREAMING', url: 'https://www.twitch.tv/yunogasayxvii' },
    { name: `Em: ${xerphos.guilds.size} servidores.`,  type: 'JOGANDO', url: 'https://www.twitch.tv/yunogasayxvii' }

];

//STREAMING = Transmitindo
//LISTENING = Ouvindo
//PLAYING = Jogando
//WATCHING = Assistindo

function setStatus() {
    let randomStatus = status[Math.floor(Math.random() * status.length)];
    xerphos.user.setPresence({ game: randomStatus });
}

setStatus();
setInterval(() => setStatus(), 10000);  //10000 = 10Ms = 10 segundos
} catch (err) {

    console.log(`Erro no meu evendo de Ready - Erro:\n${err}`)
  }
}
