import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import LinkImage from "./LinkImage";
import SliderControls from "../../UI/SliderControls";

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
          <LinkImage item={item} key={item.id} />
        ))}
      </div>
      {showArrows && <SliderControls sliderRef={sliderRef} />}
    </div>
  );
}
