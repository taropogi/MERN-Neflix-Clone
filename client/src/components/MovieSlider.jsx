import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SMALL_IMAGE_BASE_URL } from "../utils/constants";

export default function MovieSlider({ category }) {
  const { type: contentType } = useSelector((state) => state.content);
  const [content, setContent] = useState([]);

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
    <div className="bg-black relative px-5 md:px-20">
      <h2>
        {formattedCategory} {formattedContentType}
      </h2>
      <div className="flex space-x-4">
        {content?.map((item) => (
          <Link
            key={item.id}
            to={`/watch/${item.id}`}
            className="min-w-[250px] relative group"
          >
            <div className="rounded-lg overflow-hidden">
              <img
                src={SMALL_IMAGE_BASE_URL + item.backdrop_path}
                alt="Movie image"
                className="transition-transform duration-300 ease-in-out group-hover:scale-125"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
