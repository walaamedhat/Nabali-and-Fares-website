const express = require('express');
const path = require('path');

const PORT = 8000;

const app = express();

app.use(express.static(path.join(__dirname, '../../public')));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});