const Canvas = require('canvas');
let randomText = (length) => {
    let str = '';
    var range = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for(i = 0; i < length; i++) {
        str += range.charAt(Math.floor(Math.random() * range.length));
    }
    return str;
}
class Captcha {
    constructor(length) {
        if(isNaN(length) || length < 5) {
            var currentText = randomText(5);
        } else {
            var currentText = randomText(length);
        }
        this.length = length
        this.currentString = currentText;
    }
    async image(string) {
        Canvas.registerFont('./assets/Good Brush.ttf', {family: 'Panic'});
        const canvas = Canvas.createCanvas(500, 200);
        const ctx = canvas.getContext('2d');
        const patterns = [
            'https://st4.depositphotos.com/5171687/31244/v/600/depositphotos_312440046-stock-video-seamless-young-animation-psychedelic-animal.jpg',
            'https://cdn.dribbble.com/users/3185269/screenshots/10491989/trippy_art05_4x.png',
            'https://st2.depositphotos.com/6703620/9627/i/950/depositphotos_96275896-stock-photo-black-and-white-marbling-background.jpg'
        ]
        const pattern = await Canvas.loadImage(patterns[Math.floor(Math.random() * patterns.length)]);
        ctx.drawImage(pattern, 0, 0, canvas.width, canvas.height);
        ctx.font = '50px Panic';
        let splitStr = string.split('');
        let colors = ['#4e4ea3', '#22227d', '#0000cc', '#8e00fa'];
        for(i = 0; i < splitStr.length; i++) {
            ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
            let str = splitStr[i]
            let padW = canvas.width / 4
            let padH = canvas.height / 8
            ctx.fillText(str, padW + i * 50,  50 + padH * Math.floor(Math.random() * string.length))
        }
        return canvas.toBuffer('image/png');
    }
}
module.exports.Captcha = Captcha