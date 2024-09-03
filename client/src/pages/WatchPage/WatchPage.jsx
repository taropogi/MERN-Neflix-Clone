import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useGetTrailers from "../../hooks/useGetTrailers";
import useGetMovieDetails from "../../hooks/useGetMovieDetails";
import useGetSimilar from "../../hooks/useGetSimilar";
import { ORIGINAL_IMAGE_BASE_URL } from "../../utils/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PrevNextBtn from "./PrevNextBtn";
import ReactPlayer from "react-player";

export default function WatchPage() {
  const { id } = useParams();
  const { trailers } = useGetTrailers();
  const [currentTrailer, setCurrentTrailer] = useState(0);
  const { content, loading } = useGetMovieDetails();
  const { similarContent } = useGetSimilar();
  const { type: contentType } = useSelector((state) => state.content);

  function handleNext() {
    if (currentTrailer < trailers.length - 1)
      setCurrentTrailer((currentTrailer) => currentTrailer + 1);
  }

  function handlePrev() {
    if (currentTrailer > 0)
      setCurrentTrailer((currentTrailer) => currentTrailer - 1);
  }

  return (
    // <>
    //   <img
    //     src={ORIGINAL_IMAGE_BASE_URL + content?.backdrop_path}
    //     alt="Hero image"
    //     className="absolute top-0 left-0 w-full h-full object-cover -z-10"
    //   />

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
      </div>
    </div>
    // </>
  );
}
