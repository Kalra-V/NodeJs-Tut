const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-comm");

const ProductSchema = new mongoose.Schema({
    name: String,
    "Age": Number,
    "Net Worth": String,
  });

const saveInDB = async () => {
  
  const Product = mongoose.model("products", ProductSchema);
  let data = new Product({
    name: "U T",
    "Age": 22,
    "Net Worth": "$400,000",
  });
  let result = await data.save();
  console.log(result);
};

const updateInDB = async () =>{
    const Product = mongoose.model("products", ProductSchema);
    let data = await Product.updateOne(
        {name:"Shivani Kalra"},
        {
            $set:{"Net Worth": "$500,000", "Age": 25}
        }
    )
    console.log(data)
}

const deleteInDB = async () => {
    const Product = mongoose.model("products", ProductSchema);
    let data = await Product.deleteMany({name:"U T"});
    console.log(data);
}

const findInDB = async () => {
    const Product = mongoose.model("products", ProductSchema);
    let data = await Product.findOne({name:"Vansh Kalra"});
    console.log(data);
}
findInDB()
