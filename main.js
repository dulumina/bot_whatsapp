const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

const client = new Client();
const penggunaAksi = new Map();

client.on('qr', qr => {
  qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
  console.log('Client is ready!');
  client.sendMessage("6285212409490@c.us","okee...!")
});

client.on('message', async msg => {
  var kontak = await msg.getContact();
  switch (msg.body.toLowerCase()) {
    case "hi":
      msg.reply("Hi juga.")
      break;
    case "detile":
      // msg.reply(JSON.stringify(msg));
      console.log(msg);
      break;
    default :
      msg.reply("maaf, saya tidak mengerti.");
      break;
  }

  console.log("+" + kontak.number + " (" + kontak.pushname + ") - " + msg.body);
});


client.initialize();
