const express = require('express');
const inventory = require('./routes/inventory');

const app = express();

app.use('/inventory', inventory)

app.use((err, req, res, next) => {
    res.json(err);
})

const port = 3000;

app.listen(port, () => console.log(`Listening to port ${port}`));

module.exports = app;

//repush