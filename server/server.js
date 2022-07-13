const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(require("./Router/router"));

app.listen(3001, () => {
  console.log("Server running on port no: 3001");
});
