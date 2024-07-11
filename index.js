const express = require('express')
const conn = require("./config")

const app = express();
app.use(express.json())

app.get("/", (req,res) => {
    conn.query("select * from user", (err,result) => {
        if(err) {
            res.send("ERROR!")
        } else {
            res.send(result)
        }
    })
})

app.post("/", (req,res) => {
    const data = req.body;
    conn.query("insert into user set ?", data, (err,result,fields) =>{
        if(err) err;
        res.send(result)
    })
})

app.listen(5000);
