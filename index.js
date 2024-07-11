const express = require('express')
const conn = require("./config")

const app = express();

app.get("/", (req,res) => {
    conn.query("select * from user", (err,result) => {
        if(err) {
            res.send("ERROR!")
        } else {
            res.send(result)
        }
    })
})

app.listen(5000);
