const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  try {
    return res.status(200).json({ message: "Hello World" });
  } catch (err) {
    console.log(err);
  }
});

app.listen(3000, () => {
  console.log("Server Running");
});
