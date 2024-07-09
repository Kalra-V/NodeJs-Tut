const express = require('express');
const dbConnect = require('./mongodb')
const app = express();
const mongodb = require('mongodb')

app.use(express.json())

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray()
    // console.log(data)
    res.send(data)
})

app.post('/', async (req, res) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    res.send(result)
})

app.put("/", async (req, res) => {
    let data = await dbConnect();
    let result = await data.updateOne({name: req.body.name}, 
        { $set:req.body });
    console.log(req.body)
    console.log("Updated successfully.")
    res.send({result:"updated"})
})

app.delete("/:id", async (req, res) => {
    let data = await dbConnect();
    let result = await data.deleteOne({_id: new mongodb .ObjectId(req.params.id)})
    console.log(req.params.id)
    res.send(result);
})

app.listen(5000)