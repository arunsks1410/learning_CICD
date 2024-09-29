const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  console.log("inside get request");
  return res.status(200).send({ msg: "successfull" });
});

app.listen(PORT, () => {
  console.log(`server listening to the port ${PORT}!!!`);
});
