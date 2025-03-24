const express = require("express");
const testRoutes = require("./routes/testRoutes");
const calculatorRoutes = require("./routes/calculatorRoutes");
// const productRoutes = require("./routes/productRoutes");

const app = express();

const port = 3000;

app.use("/", express.static("public"));
app.use("/tests", testRoutes);
app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});
