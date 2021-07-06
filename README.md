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


#### create captcha:
```js
const Captcha = require("simple-captcha-generator");
const captcha = new Captcha();
captcha.image(captcha.currentString()) //Returns image buffer of current generated string (possible to add your own string)
```
#### How to set string length?

You can have have a `min length of 5` and a `max length of 10`. When no length is specified it will default to 5. Every length above 10 will default to 10.

```js
const captcha = new Captcha(5);
```
### Options

.currentString() `string`

  <i>Returns a generated string with the given length</i><br>
  <strong>Example: '0e6ji'</strong>

.length() `int`

  <i>Returns the given length</i><br>
  <strong>Example: 8</strong>

.image() `Buffer`

  <i>Returns and image buffer of the generated captcha</i><br>
  <strong>Usage</strong>
  ```js
  captcha.image(captcha.currentString) //Return image buffer of current generated string
  ```

<div align="center">
  
### Example images
  
<img src="https://cdn.discordapp.com/attachments/861785154980806696/861981966785576960/file.jpg" display="inline-block" width="200px" height="auto">
<img src="https://media.discordapp.net/attachments/861785154980806696/861981905394335775/file.jpg" display="inline-block" width="200px" height="auto">
<img src="https://cdn.discordapp.com/attachments/861785154980806696/861982300664234004/file.jpg" display="inline-block" width="200px" height="auto">
</div>
