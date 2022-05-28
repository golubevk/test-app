const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/hello", (req, res) => {
  return res.send('Hello World');
});

const port = process.env.PORT || 3000;

app.listen(process.env.PORT, () => {
  console.log(`App listening at port ${process.env.PORT}`);
});