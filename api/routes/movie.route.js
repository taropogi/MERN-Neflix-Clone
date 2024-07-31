import express from "express";
const router = express.Router();

import {
  getMovieTrailers,
  getTrendingMovie,
  getMovieDetails,
  getSimilarMovies,
} from "../controllers/movie.controller.js";

router.get("/trending", getTrendingMovie); // get only one movie
router.get("/:movieId/trailers", getMovieTrailers);
router.get("/:movieId/details", getMovieDetails);
router.get("/:movieId/similar", getSimilarMovies);

//https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US
export default router;
