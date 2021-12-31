const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
  res.send("Thank you for posting that!");
})

app.listen(port, () => {
  console.log("Server running on port 3000!")
})