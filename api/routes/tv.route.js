import express from "express";
const router = express.Router();

import {
  getTrendingTv,
  getTvTrailers,
  getTvDetails,
  getSimilarTvs,
  getTvsByCategory,
} from "../controllers/tv.controller.js";

router.get("/trending", getTrendingTv); // get only one TV
router.get("/:tvId/trailers", getTvTrailers);
router.get("/:tvId/details", getTvDetails);
router.get("/:tvId/similar", getSimilarTvs);
router.get("/:category", getTvsByCategory);

export default router;
