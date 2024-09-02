import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SMALL_IMAGE_BASE_URL } from "../../utils/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SliderButton from "./SliderButton";

export default function MovieSlider({ category }) {
  const { type: contentType } = useSelector((state) => state.content);
  const [content, setContent] = useState([]);
  const [showArrows, setShowArrows] = useState(false);

  const sliderRef = useRef(null);

  const formattedCategory =
    category.replaceAll("_", " ")[0].toUpperCase() +
    category.replaceAll("_", " ").slice(1);
  const formattedContentType = contentType === "movie" ? "Movies" : "TV Shows";

  useEffect(() => {
    const getContent = async () => {
      const res = await axios.get(`/api/v1/${contentType}/${category}`);

      setContent(res.data.content);
    };
    getContent();
  }, [contentType, category]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="bg-black relative px-5 md:px-20"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <h2 className="mb-4 text-2xl font-bold">
        {formattedCategory} {formattedContentType}
      </h2>
      <div
        className="flex  space-x-4  overflow-x-scroll   scrollbar-hide"
        ref={sliderRef}
      >
        {content?.map((item) => (
          <Link
            key={item.id}
            to={`/watch/${item.id}`}
            className="min-w-[250px] relative group "
          >
            <div className="rounded-lg overflow-hidden">
              <img
                src={SMALL_IMAGE_BASE_URL + item.backdrop_path}
                alt="Movie image"
                className="transition-transform duration-300 ease-in-out group-hover:scale-125   "
              />
            </div>
            <p className="mt-2 text-center">{item.title || item.name}</p>
          </Link>
        ))}
      </div>
      {showArrows && (
        <>
          <SliderButton direction={"left"} onClick={scrollLeft} />
          <SliderButton direction={"right"} onClick={scrollRight} />

          {/* <button
            className={`absolute top-1/2 -translate-y-1/2 left-5 md:left-24 flex items-center justify-center size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10`}
          >
            <ChevronLeft size="24" />
          </button> */}
        </>
      )}
    </div>
  );
}
