import { useSelector } from "react-redux";

export default function MovieSlider({ category }) {
  const { type: contentType } = useSelector((state) => state.content);

  const formattedCategory =
    category.replaceAll("_", " ")[0].toUpperCase() +
    category.replaceAll("_", " ").slice(1);
  const formattedContentType = contentType === "movie" ? "Movies" : "TV Shows";

  return (
    <div className="bg-black relative px-5 md:px-20">
      <h2>
        {formattedCategory} {formattedContentType}
      </h2>
    </div>
  );
}
