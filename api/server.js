import express from "express";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";

//routes
import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";

const app = express();

app.use(express.json()); // parse req.body object before reaching the controllers
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", movieRoutes);

app.listen(ENV_VARS.PORT, () => {
  console.log("Server running at PORT " + ENV_VARS.PORT);
  connectDB();
});
