<div align="center">

# simple-captcha-generator
  
Generate captcha string with image for discord bot
  
![](https://img.shields.io/github/languages/top/Nidrux/simple-captcha-generator)
![](https://img.shields.io/codacy/grade/415e4c6f1c5648098bdd039f7666212f)
![](https://img.shields.io/github/repo-size/Nidrux/simple-captcha-generator)

 </div>
 
### Installation

Type `npm i simple-captcha-generator` in your cmd to install the package


create captcha:
```js
const Captcha = require("simple-captcha-generator");
const captcha = new Captcha();

captcha.currentString() //Returns generated string
captcha.length() //Returns length of generated string
captcha.image(captcha.currentString()) //Returns image buffer of current generated string (possible to add your own string)
```
