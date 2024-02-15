const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRoute = require("./routes/product.route.js");
require("dotenv").config();

//keys and  passwords
const mongoUserName = process.env.MONGODB_USERNAME;
const mongoPassword = process.env.MONGODB_PASSWORD;

console.log(mongoUserName);

//middleware
app.use(express.json()); //to pass the json from post api
app.use(express.urlencoded({ extended: false })); // to pass the data from the form

//routes
app.use("/api/product", productRoute);

//mongoDB connnection
mongoose
  .connect(
    `mongodb+srv://${mongoUserName}:${mongoPassword}@backenddb.fgtln4a.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("database is connected!");
  })
  .catch(() => {
    console.log("server is not connected!");
  });

app.listen(5000, () => {
  console.log("server is running on port 5000!");
});
