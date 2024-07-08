const dbConnect = require("./mongodb");

const updateData = async () => {
  let data = await dbConnect();
  let result = await data.updateMany({ name: "ABC" }, { $set: { name: "A T" } });
  console.log(result);
};

updateData();
