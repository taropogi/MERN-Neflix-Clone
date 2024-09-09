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

import path from "path";
const __dirname = path.resolve(); // this will return the root directory (for deployment)

const app = express();

app.use(express.json()); // parse req.body object before reaching the controllers
app.use(cookieParser()); // to parse cookies using req.cookies
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

// if (ENV_VARS.NODE_ENV === "production") {
app.use(express.static(path.join(__dirname, "client", "dist"))); // serve dist folder as static / after build. The __dirname means the root folder
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});
// }

app.listen(ENV_VARS.PORT, () => {
  console.log("Server running at PORT " + ENV_VARS.PORT);
  connectDB();
});
