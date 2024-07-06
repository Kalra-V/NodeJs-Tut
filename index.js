const express = require('express')
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public')
// console.log(publicPath)

// app.use(express.static(publicPath));

app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.sendFile(`${publicPath}/index.html`)
})
app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`)
})
app.get('/help', (req, res) => {
    res.sendFile(`${publicPath}/help.html`)
})
app.get('/profile', (req, res) => {
    const user = {
        name: 'Vansh Kalra',
        email: 'abc@xyz',
        skills: ['web3', 'mern', 'ai&ml', 'java']
    }
    res.render('profile',{user})
})
app.get('/login', (req,res) => {
    res.render('login')
})
app.get('*', (req, res) => {
    res.sendFile(`${publicPath}/404page.html`)
})

app.listen(5000)
