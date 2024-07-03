const express = require('express')
const app = express();
app.get('', (req, res) => {
    res.send('Hello, from express MF.')
})
app.get('/about', (req, res) => {
    res.send('Hello, from about AND express MF.')
})

app.listen(5000)
