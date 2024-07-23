import express from "express";
const app = express();

app.get("/signup", (req, res) => {
  res.send("signup");
});

app.listen(5000, () => {
  console.log("Server running...");
});
