const mongoose = require("mongoose");

const uri = "mongodb+srv://user:user@mongo.27bdz13.mongodb.net/"; // Replace with your MongoDB URI
const connectDb = async () => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((err: any) => {
      console.log(err);
    });
};

export default connectDb;
