import { fetchFromTMDB } from "../services/tmdb.service.js";
import { resGeneralError } from "../utils/throwErrors.js";

export async function getTrendingMovie(req, res) {
  try {
    const data = await fetchFromTMDB(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
    );
    const randomMovie =
      data.results[Math.floor(Math.random() * data.results?.length)];

    res.json({
      success: true,
      content: randomMovie,
    });
  } catch (error) {
    resGeneralError(error);
  }
}
