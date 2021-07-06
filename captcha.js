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
        if(isNaN(length) || !length) {
            var currentText = randomText(5);
        } else if(length < 5 || length > 10){
            console.log(`captcha: Given length '${length}' was too long. Defaulted to 10 (Min: 5 Max: 10)`);
            var currentText = randomText(10);
        } else {
            var currentText = randomText(length);
        }
        this.length = length;
        this.currentString = currentText;
    }
    async image(string) {
        Canvas.registerFont('node_modules/simple-captcha-generator/assets/captcha-font.ttf', {family: 'captcha'});
        const canvas = Canvas.createCanvas(500, 200);
        const ctx = canvas.getContext('2d');
        const patterns = [
            'https://assets.mica.edu/files/resources/ultrawide-xsml-mica_pattern_organic.jpg',
            'https://assets.mica.edu/files/resources/ultrawide-xsml-mica_pattern_linear_square-150px.jpg',
            'https://thumbs.dreamstime.com/b/abstract-pattern-wavy-stripes-rippled-d-relief-black-white-lines-background-vector-twisted-curved-stripe-modern-trendy-103290482.jpg'
        ];
        ctx.font = '50px captcha';
        let colors = ['#4e4ea3', '#22227d', '#0000cc', '#8e00fa'];
        let minH = 50;
        let maxH = canvas.height - minH;
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillText(string, canvas.height / 2,  Math.floor(Math.random() * maxH) +  minH);
        ctx.globalAlpha = 0.3
        const pattern = await Canvas.loadImage(patterns[Math.floor(Math.random() * patterns.length)]);
        ctx.drawImage(pattern, 0, 0, canvas.width, canvas.height);
        
        return canvas.toBuffer('image/png');
    }
}
module.exports.Captcha = Captcha;