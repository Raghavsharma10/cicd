const express = require('express');
const app = express();

app.use(express.json());

// Linear Regression: y = 2x + 1
app.post('/predict', (req, res) => {
    const x = req.body.input;
    const y = 2 * x + 1;
    res.json({ prediction: y });
});

app.listen(3000, '0.0.0.0', () => {
    console.log("LR service running");
});
