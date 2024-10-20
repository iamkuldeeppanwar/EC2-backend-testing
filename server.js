require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT || 6000;

app.use(express.json());

app.get("/api", (req, res) => {
  try {
    res.status(200).json({
      name: process.env.USER,
      message: "Hosted Successfully!",
      data: "checked !!! hurray",
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
