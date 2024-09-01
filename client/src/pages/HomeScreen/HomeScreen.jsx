import { Link } from "react-router-dom";
import ScreenOverlay from "../../UI/ScreenOverlay";
import { Info, Play } from "lucide-react";
import useGetTrendingContent from "../../hooks/useGetTrendingContent";
import {
  MOVIE_CATEGORIES,
  ORIGINAL_IMAGE_BASE_URL,
  TV_CATEGORIES,
} from "../../utils/constants";
import { useSelector } from "react-redux";
import MovieSlider from "../../components/MovieSlider/MovieSlider";
export default function HomeScreen() {
  const { trendingContent } = useGetTrendingContent();
  const { type: contentType } = useSelector((state) => state.content);
  if (!trendingContent) {
    return (
      <div className="h-screen text-white relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center z-10 shimmer"></div>
      </div>
    );
  }
  return (
    <>
      <img
        src={ORIGINAL_IMAGE_BASE_URL + trendingContent?.backdrop_path}
        alt="Hero image"
        className="absolute top-0 left-0 w-full h-full object-cover -z-0"
      />
      <ScreenOverlay />
      <div className="h-screen  relative text-white bg-black">
        <div className="max-w-2xl   mx-10 my-10">
          <h1 className="mt-4 text-6xl font-extrabold text-balance">
            {trendingContent?.title || trendingContent?.name}
          </h1>
          <p className="mt-2 text-lg">
            {trendingContent?.release_date?.split("-")[0] ||
              trendingContent?.first_air_date.split("-")[0]}
            | {trendingContent?.adult ? "18+" : "PG-13"}
          </p>
          <p className="mt-4 text-lg">
            {trendingContent?.overview.length > 200
              ? trendingContent?.overview.slice(0, 200) + "..."
              : trendingContent?.overview}
          </p>

          <div className="flex mt-8">
            <Link
              to={`/watch/${trendingContent?.id}`}
              className="bg-white hover:bg-white/80 text-black font-bold py-2 px-4 rounded mr-4 flex items-center"
            >
              <Play className="size-6 inline-block mr-2 fill-black" />
              Play
            </Link>
            <Link
              to="/watch/123"
              className="bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded flex items-center"
            >
              <Info className="size-6 inline-block mr-2" />
              More Info
            </Link>
          </div>
        </div>

        <div className="flex flex-col bg-black py-10  gap-10">
          {contentType === "movie" &&
            MOVIE_CATEGORIES.map((category) => (
              <MovieSlider key={category} category={category} />
            ))}

          {contentType === "tv" &&
            TV_CATEGORIES.map((category) => (
              <MovieSlider key={category} category={category} />
            ))}
        </div>
      </div>
    </>
  );
}
