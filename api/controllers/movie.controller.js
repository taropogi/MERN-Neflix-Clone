import { fetchFromTMDB } from "../services/tmdb.service.js";
import { resGeneralError } from "../utils/throwErrors.js";

export async function getMovieTrailers(req, res) {
  try {
    const { movieId } = req.params;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`
    );
    const trailers = data.results;

    res.json({
      success: true,
      trailers,
    });
  } catch (error) {
    resGeneralError(error, res);
  }
}

export async function getSimilarMovies(req, res) {
  const { movieId } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`
    );
    res.status(200).json({
      success: true,
      similar: data.results,
    });
  } catch (error) {
    resGeneralError(error, res);
  }
}

export async function getMovieDetails(req, res) {
  const { movieId } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`
    );
    res.status(200).json({
      success: true,
      content: data,
    });
  } catch (error) {
    resGeneralError(error, res);
  }
}

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
    resGeneralError(error, res);
  }
}
