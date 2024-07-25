import express from "express";
const router = express.Router();

import { getTrendingMovie } from "../controllers/movie.controller.js";

router.get("/trending", getTrendingMovie); // get only one movie

export default router;
