## tinify-tool

#### 介绍

tinify-tool 是一个基于tinify的图片压缩脚手架，支持png、jpg、jpeg等格式图片的压缩。

> **Tip**
[tinypng](https://tinypng.com/developers)获取ApiKey


#### 使用

```bash
npm install -D tinify-tool
```

```javascript
// tinify.config.js
module.exports = {
    apiKey: 'Your ApiKey',
    sourcePath: './images'
}
```

```json
// package.json
"script": {
   "tinify": "tinifycli compress",
}
```

```bash
npm run tinify 
# or
tinifycli compress
```