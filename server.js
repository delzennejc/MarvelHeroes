const express = require('express');
const path = require('path');

const port = 8080;

const app = express();
app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/dist/index.html`));
});

console.log(`Express server listening on port ${port}`);
app.listen(port);
