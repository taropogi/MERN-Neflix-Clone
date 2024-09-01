import { fetchFromTMDB } from "../services/tmdb.service.js";
import { resGeneralError } from "../utils/throwErrors.js";

export async function getTvTrailers(req, res) {
  try {
    const { tvId } = req.params;
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${tvId}/videos?language=en-US`
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

export async function getSimilarTvs(req, res) {
  const { tvId } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${tvId}/similar?language=en-US&page=1`
    );
    res.status(200).json({
      success: true,
      similar: data.results,
    });
  } catch (error) {
    resGeneralError(error, res);
  }
}

export async function getTvDetails(req, res) {
  const { tvId } = req.params;
  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${tvId}?language=en-US`
    );
    res.status(200).json({
      success: true,
      content: data,
    });
  } catch (error) {
    resGeneralError(error, res);
  }
}

export async function getTrendingTv(req, res) {
  try {
    const data = await fetchFromTMDB(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US"
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

export async function getTvsByCategory(req, res) {
  //popular,top_rated,upcoming
  const { category } = req.params;

  try {
    const data = await fetchFromTMDB(
      `https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`
    );
    res.json({
      success: true,
      content: data.results,
    });
  } catch (error) {
    resGeneralError(error, res);
  }
}
