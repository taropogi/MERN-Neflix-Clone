import axios from "axios";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useGetTrailers from "../../hooks/useGetTrailers";
import useGetMovieDetails from "../../hooks/useGetMovieDetails";
import useGetSimilar from "../../hooks/useGetSimilar";
import { ORIGINAL_IMAGE_BASE_URL } from "../../utils/constants";
import PrevNextBtn from "./PrevNextBtn";
import ReactPlayer from "react-player";
import { formatReleaseDate } from "../../utils/DateHelper";
import SimilarContent from "./SimilarContent";
import WatchPageSkeleton from "../../components/skeletons/WatchPageSkeleton";

export default function WatchPage() {
  const { id } = useParams();
  const { trailers } = useGetTrailers();
  const [currentTrailer, setCurrentTrailer] = useState(0);
  const { content, loading } = useGetMovieDetails();
  const { similarContent } = useGetSimilar();
  const { type: contentType } = useSelector((state) => state.content);
  const sliderRef = useRef(null);

  function handleNext() {
    if (currentTrailer < trailers.length - 1)
      setCurrentTrailer((currentTrailer) => currentTrailer + 1);
  }

  function handlePrev() {
    if (currentTrailer > 0)
      setCurrentTrailer((currentTrailer) => currentTrailer - 1);
  }

  if (loading)
    return (
      <div className="min-h-screen bg-black p-10">
        <WatchPageSkeleton />
      </div>
    );

  if (!content) {
    return (
      <div className="bg-black text-white h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mx-auto px-4 py-8 h-full mt-40">
            <h2 className="text-2xl sm:text-5xl font-bold text-balance">
              Content not found 😁
            </h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="mx-auto container px-4 py-8 h-full">
        {trailers.length > 0 && (
          <PrevNextBtn
            onPrev={handlePrev}
            onNext={handleNext}
            trailers={trailers}
            currentTrailer={currentTrailer}
          />
        )}
        <div className="aspect-video mb-8 p-2 sm:px-10 md:px-32">
          {trailers.length > 0 ? (
            <ReactPlayer
              controls={true}
              width={"100%"}
              height={"70vh"}
              className="mx-auto overflow-hidden rounded-lg"
              url={`https://www.youtube.com/watch?v=${trailers[currentTrailer].key}`}
            />
          ) : (
            <h2 className="text-xl text-center mt-5">
              No trailers available for
              <span className="font-bold text-red-600">
                {content?.title || content?.name}
              </span>
            </h2>
          )}
        </div>

        {/* movie details */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-20 max-w-6xl mx-auto">
          <div className="mb-4 md:mb-0">
            <h2 className="text-5xl font-bold text-balance">
              {content?.title || content?.name}
            </h2>
            <p className="mt-2 text-lg">
              {formatReleaseDate(
                content?.release_date || content?.first_air_date
              )}{" "}
              |{" "}
              {content?.adult ? (
                <span className="text-red-600">18+</span>
              ) : (
                <span className="text-green-600">PG-13</span>
              )}
            </p>
            <p className="mt-4 text-lg">{content?.overview}</p>
          </div>
          <img
            className="max-h-[600px] rounded-md"
            src={ORIGINAL_IMAGE_BASE_URL + content?.poster_path}
            alt="Poster image"
          />
        </div>
        {similarContent.length > 0 && (
          <SimilarContent
            similarContent={similarContent}
            sliderRef={sliderRef}
          />
        )}
      </div>
    </div>
    // </>
  );
}
