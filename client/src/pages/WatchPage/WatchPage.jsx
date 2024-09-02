import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useGetTrailers from "../../hooks/useGetTrailers";
import useGetMovieDetails from "../../hooks/useGetMovieDetails";
import useGetSimilar from "../../hooks/useGetSimilar";
import { ORIGINAL_IMAGE_BASE_URL } from "../../utils/constants";

export default function WatchPage() {
  const { id } = useParams();
  const { trailers } = useGetTrailers();
  const [currentTrailer, setCurrentTrailer] = useState(0);
  const { content, loading } = useGetMovieDetails();
  const { similarContent } = useGetSimilar();
  const { type: contentType } = useSelector((state) => state.content);

  console.log(similarContent);
  return (
    // <>
    //   <img
    //     src={ORIGINAL_IMAGE_BASE_URL + content?.backdrop_path}
    //     alt="Hero image"
    //     className="absolute top-0 left-0 w-full h-full object-cover -z-10"
    //   />

    <div className="bg-black min-h-screen text-white">
      <div className="mx-auto container px-4 py-8 h-full">asdfasdf</div>
    </div>
    // </>
  );
}
