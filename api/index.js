const PORT = 8443;

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ a: 1 });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listened: ${PORT}`);
});
