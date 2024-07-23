import express from "express";
const app = express();

//routes
import authRoutes from "./routes/auth.route.js";

app.use("/api/v1/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server running...");
});
