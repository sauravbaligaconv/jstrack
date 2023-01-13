const express = require('express');
const app = express();
var cors = require("cors");
const corsOpts = {
    origin: '*',

    methods: [
        'GET',
        'POST',
    ],

    allowedHeaders: [
        'Content-Type',
    ],
};

app.use(cors(corsOpts));


const IP = require('ip');

app.get('/', (req, res) => {
    //const ipAddress = IP.address();
    const ipAddress = req.connection.remoteAddress;
    res.json({ ipAddress: ipAddress });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
}); 
