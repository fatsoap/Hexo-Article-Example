const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', function(req, res, next) {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/user', function (req, res, next) {
	res.sendFile(path.join(__dirname, "user.html"));
});

app.listen(PORT);