const mongoose = require('mongoose')
const Schema = mongoose.Schema;
mongoose.connect('mongodb://pip004@ds247674.mlab.c74/xerphos', { useNewUrlParser: true }, (err) => {
  if (err) return console.log('[DataBase] > Erroao tentar conectar na DATABASE')
  console.log('[DataBase] > Conectado com sucesso a DataBase')
})


var User = new Schema({
  _id: {
    type: String
  },
  ban: {
    type: Boolean,
    default: false
  },
  dev: {
    type: Boolean,
    default: false
  },
  sup: {
    type: Boolean,
    default: false
  },
  dzn: {
    type: Boolean,
    default: false
  },
  owner: {
    type: Boolean,
    default: false
  },
  subowner: {
    type: Boolean,
    default: false
  },
  ban: {
    type: Boolean,
    default: false
  }
})

var Guild = new Schema({
    _id: {
      type: String
    },
    prefix: {
      type: String,
      default: 'xh!'
    },
    welcome: {
      type: Boolean,
      default: false
    },
    welcomechannel: {
      type: String,
      default: 'Nenhum'
    },
    welcomemsg: {
      type: String,
      default: 'Nenhum'
    },
    byebye: {
      type: Boolean,
      default: false
    },
    byebyechannel: {
      type: String,
      default: 'Nenhum'
    },
    byebyemsg: {
      type: String,
      default: 'Nenhum'
    },
    autorole: {
      type: Boolean,
      default: false
    },
    autoroleid: {
      type: String,
      dafault: 'Nenhum'
    },
    antinvite: {
      type: Boolean,
      default: false
    },
    inviteChannels: {
      type: [],
      dafault: 'Nenhum'
    },
    ConfirmeInvite: {
      type: Boolean,
      default: false
    },
  })

var Comando = new Schema({
    _id: {
      type: String
    },
    usos: {
      type: Number,
      default: 0
    },
    manutenção: {
      type: Boolean,
      default: false
    },
    lastError: {
      type: String,
      default: "Nenhum"
    }
  })

var Guilds = mongoose.model('Guilds', Guild)
var Users = mongoose.model('Users', User)
var Comandos = mongoose.model('Comandos', Comando)
exports.Guilds = Guilds
exports.Users = Users
exports.Comandos = Comandos
