const express = require('express');

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('hello world, from express');
});

app.listen(port, () => console.log(`Sports API app listening on port ${port}`))

