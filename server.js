const express = require('express');
const path = require('path');

const app = express();

app.use('/assets',express.static(__dirname + '/assets/'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 8000);