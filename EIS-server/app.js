const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Listening to port ${port}`));


app.get('/inventory', (req, res) => {
    res.send('requesting inventory')
    // console.log("Request receive!")
})

