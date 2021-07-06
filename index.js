const { Captcha }= require('./captcha');
const { Client, MessageAttachment } = require('discord.js');
const client = new Client();

client.login('');
client.on('ready', () => {
    console.log(`${client.user.username} is ready`);
})
client.on('message', async (message) => {
    if(message.author.bot) return;
    const { channel } = message;

    const captcha = new Captcha(11);
    const captchaImage = new MessageAttachment(await captcha.image(captcha.currentString));
    console.log(captcha.currentString);
    // DO SOMETHING WITH IMAGE
    channel.send(captchaImage);
})