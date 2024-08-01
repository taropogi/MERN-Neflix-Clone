import express from "express";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";

//routes
import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";
import searchRoutes from "./routes/search.route.js";
import protectRoute from "./middleware/protectRoute.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json()); // parse req.body object before reaching the controllers
app.use(cookieParser()); // to parse cookies using req.cookies
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

app.listen(ENV_VARS.PORT, () => {
  console.log("Server running at PORT " + ENV_VARS.PORT);
  connectDB();
});
