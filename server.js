
//Install express server
const express = require('express');
// const notifier = require('node-notifier');
const path = require('path');
const http = require('http');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/app'));

//initialize a simple http server
const server = http.createServer(app);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/app/index.html'));
});


// Start the app by listening on the default Heroku port
const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
