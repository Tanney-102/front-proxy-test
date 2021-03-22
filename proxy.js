const express = require("express");
const cors = require("cors");

const app = express();

app.set("port", 3001);
app.use(cors());

app.get("/test", (req, res) => {
  res.send("Hello");
});

app.listen(app.get("port"), () => {
  console.log(`${app.get("port")}에서 대기중`);
});