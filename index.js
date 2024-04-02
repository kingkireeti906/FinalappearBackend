const express = require("express");
const app = express();
const auth = require("./Routes/auth.js")
const UserData = require("./Routes/cart.js")
const product = require("./Routes/Product.js")
const feedback = require("./Routes/feedback.js")
//env files access
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.port;
//Db connection
const Db = require("./Config/Db");
app.use(express.json());

const cors = require("cors");
app.use(cors());

//health api
app.get("/health", (req, res) => {
    res.json({
      status: "Api is in Active",
    });
  });
app.use("/api/v1/auth",auth)
app.use ("/api/v1/product",product)
app.use ("/api/v1/cart",UserData)
app.use ("/api/v1/feedback",feedback)
  app.listen(port, (err) => {
    if (err) console.log("something went wrng on port");
    else console.log(`'port is working ${port}...`);
  });