const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is Running on Port No ${process.env.PORT || 8000}`);
});
