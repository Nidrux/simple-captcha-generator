# discord-captcha-generator
Generate captcha string with image for discord bot

`npm i` to install modules


create captcha:
```js
const captcha = new Captcha();

captcha.currentString() //Returns generated string
captcha.length() //Returns length of generated string
captcha.image(captcha.currentString()) //Returns image buffer of current generated string (possible to add your own string)
```
![](https://img.shields.io/github/languages/top/Nidrux/discord-captcha-generator)
![](https://img.shields.io/codacy/grade/415e4c6f1c5648098bdd039f7666212f)
![](https://img.shields.io/github/repo-size/Nidrux/discord-captcha-generator)
