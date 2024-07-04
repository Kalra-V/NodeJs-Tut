const express = require('express')
const app = express();
app.get('', (req, res) => {
    res.send(`
        <h1>Hello, from express MF.</h1>
        <a href="/about"> Go to about page. </a>
        `)
})
app.get('/about', (req, res) => {
    res.send(`
        <input type="text" placeholder="Username" value="${req.query.name}"/>
        <a href="/"> Go to home page. </a>
        <button>Click me</button>
        `)
})
app.get('/help', (req, res) => {
    res.send([
        {
            name:'vansh',
            email:'kalra@xyz'
        },
        {
            name:'kalra',
            email:'kalra@xyz'
        }
    ])
})

app.listen(5000)
