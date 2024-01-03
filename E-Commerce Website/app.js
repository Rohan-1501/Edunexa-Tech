const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Define routes

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
