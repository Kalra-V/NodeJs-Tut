const mongoose = require('mongoose')

const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/e-comm")
    const ProductSchema = new mongoose.Schema({
        name: String,
        age: Number
    });
    const ProductModel = mongoose.model('products', ProductSchema);
    let data = new ProductModel({
        name:"U T", age: 22
    });
    let result = await data.save();
    console.log(result);
}
main();