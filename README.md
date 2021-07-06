<div align="center">

# simple-captcha-generator
  
Generate a simple captcha string and or captcha image.
  
 <img src="https://img.shields.io/github/languages/top/Nidrux/simple-captcha-generator">
 <img src="https://img.shields.io/codacy/grade/415e4c6f1c5648098bdd039f7666212f">
 <img src="https://img.shields.io/github/repo-size/Nidrux/simple-captcha-generator">
 <a href="https://www.npmjs.com/package/simple-captcha-generator"><img src="https://img.shields.io/npm/v/simple-captcha-generator"></a>
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
