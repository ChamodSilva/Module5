const express = require("express");
const router = express.Router();

router.get("/add", (req, res) => {
  const number1 = parseInt(req.query?.num1) || 0;
  const number2 = parseInt(req.query?.num2) || 0;

  const result = number1 + number2;
  console.log("result", result);
  res.status(200);
  res.send({ result });
});

router.get("/multiply", (req, res) => {
  const number1 = parseInt(req.query?.num1) || 0;
  const number2 = parseInt(req.query?.num2) || 0;

  const result = number1 * number2;
  console.log("result", result);
  res.status(200);
  res.send({ result });
});

module.exports = router;
