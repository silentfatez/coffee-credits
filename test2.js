const Telegraf = require('telegraf');
const ogs = require('open-graph-scraper');
const firebase = require('firebase');
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup');
const db = require('./database').database;
const generator = require('./helper');
let randomString = generator.randomStringGenerator(11);
const docItem = String('love' + randomString);
const newRef = db.collection('reminder').doc(docItem);
let config = require('./env.json');
const bot = new Telegraf(config.service.telegram_key)


bot.command('start', ctx => {
  db.collection('user').doc('users').set(ctx.chat)
  db.collection('user').doc('person').set(ctx.from)

  return ctx.reply('Thank you for signing up with coffeetoken')
})



//Pass our payload



bot.on('text', (ctx) =>
      newRef.set({
        dog:'here'
      }))

 bot.launch()
