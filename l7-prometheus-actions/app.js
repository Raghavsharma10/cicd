const express = require('express');
const app = express();

app.get('/location', (req, res) => {
    res.json({
        latitude: 13.0827,
        longitude: 80.2707
    });
});

app.listen(3000, '0.0.0.0', () => {
    console.log("GPS service running");
});
