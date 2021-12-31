const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const result = num1 + num2;
  res.send("The result of the calculation is " + result);
})

app.listen(port, () => {
  console.log("Server running on port 3000!");
})

//BMI Calculator
app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", (req, res) => {
  const wgt = Number(req.body.weight);
  const hgt = Number(req.body.height);
  const bmi = (wgt / hgt**2).toFixed(2);
  res.send(`<h2>Your BMI is ${bmi} Kg/Sqm.</h2>`)
})