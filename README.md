# discord-captcha-generator
Generate captcha string with image for discord bot


`npm i` to install modules


create captcha:
```js
const captcha = new Captcha();

captcha.currentString() //Returns generated string
captcha.length() //Returns length of generated string
captcha.image(captcha.currentString()) //Returns image of current generated string (possible to add your own string)
```
