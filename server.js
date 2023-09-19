const express = require('express');
const app = express();
const port = 8080;

app.get('/foo', (req, res) => res.send('bar'));

app.use(express.json());
app.post('/hello', (req, res) => { 
    res.send(`Hello ${req.body.name}!`);

});

app.get('/kill', (req, res) => {

    res.send('Server shutting down');

    server.close(() => {
    console.log('Server has been shut down.');
    });
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
