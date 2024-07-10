const express = require("express")
const EventEmitter = require("events")
const app = express();

const event = new EventEmitter();

let count = 0;
event.on("countAPI", ()=> {
    count++;
    console.log("Event called. ", count)
})

app.get("/", async(req, res) => {
    res.send("Working")
    event.emit("countAPI")
})
app.get("/search", async(req, res) => {
    res.send("Working")
    event.emit("countAPI")
})
app.get("/update", async(req, res) => {
    res.send("Working")
    event.emit("countAPI")
})

app.listen(5000);