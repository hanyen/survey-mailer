const express = require('express');

const app = express();
//express route handler
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(80);
