const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insertMany([
    {
      name: "A T",
      age: 21,
      "Net Worth": "$150,000",
    },
    {
      name: "ABC",
      age: 22,
      "Net Worth": "$250,000",
    },
  ]);
  if (result.acknowledged) {
    console.log("Data inserted successfully.");
  }
};

insert();
