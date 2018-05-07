const express = require('express');
const ReactSSR = require('react-dom/server');
const fs = require('fs');
const path = require('path');
const app = express();
const serverEntry = require('./dist/app.bundle.js').default;
const template = fs.readFileSync(path.join(__dirname, './template/dev_app.html'), 'utf8');
app.use('/public', express.static(path.join(__dirname, '../dist')))

app.get('*', function (req, res) {
  const appString = ReactSSR.renderToString(serverEntry);
  res.send(template.replace('<!-- stark -->', appString))
})

app.listen(3006, function () {
  console.log('====================================')
  console.log('open url view website')
  console.log('====================================')
  console.log("http://localhost:3006")
})