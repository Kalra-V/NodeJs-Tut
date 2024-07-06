const express = require('express')
const app = express();

const reqFilter = (req, res, next) => {
    if(!req.query.age) {
        res.send("Please provide age")
    } else if(req.query.age<=18) {
        res.send("You cannot access this page. Try again a few years later.")
    } else {
        next()
    }
}

app.use(reqFilter)

app.get('', (req,res) => {
    res.send('Welcome to home page')
})
app.get('/user', (req,res) => {
    res.send('Welcome to user page')
})

app.listen(5000)