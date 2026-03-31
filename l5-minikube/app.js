const express = require('express');
const app = express();

app.use(express.json());

app.post('/predict', (req, res) => {
    const x = req.body.input;
    const y = 2 * x;
    res.json({ prediction: y });
});

app.listen(3000, '0.0.0.0', () => {
    console.log("ML service running");
});
