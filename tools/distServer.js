import express from 'express';
import path from 'path';
import open from 'open';
/* eslint-disable no-console */

const port = 4500;
const app = express();

app.use(express.static('dist'));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));//if all good it will send out the html file
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});