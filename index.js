const { Captcha }= require('./captcha');
const { Client, MessageAttachment } = require('discord.js');
const client = new Client();

client.login('YOUR TOKEN HERE');
client.on('ready', () => {
    console.log(`${client.user.username} is ready`);
})
client.on('message', async (message) => {
    if(message.author.bot) return;
    const { channel } = message;

    const captcha = new Captcha();
    const captchaImage = new MessageAttachment(await captcha.image(captcha.currentString));

    // DO SOMETHING WITH IMAGE
    channel.send(captchaImage);
})