const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/')));

app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
    console.log("Server started successfully at port 3000. Open http://localhost:3000 to view it in the browser");
  });