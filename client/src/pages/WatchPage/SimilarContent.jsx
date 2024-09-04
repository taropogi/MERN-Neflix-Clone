import { Link } from "react-router-dom";
import { SMALL_IMAGE_BASE_URL } from "../../utils/constants";
import SliderControls from "../../UI/SliderControls";

export default function SimilarContent({ similarContent, sliderRef }) {
  return (
    <div className="mt-12 max-w-5xl mx-auto relative">
      <h3 className="text-3xl  font-bold mb-4">Similar Movies/TV Shows</h3>
      <div
        className="flex overflow-x-scroll scrollbar-hide gap-4 pb-4 group"
        ref={sliderRef}
      >
        {similarContent.map((content) => (
          <Link
            key={content.id}
            to={`/watch/${content.id}`}
            className="w-52 flex-none"
          >
            <img
              src={SMALL_IMAGE_BASE_URL + content.poster_path}
              alt="Poster Image"
              className="w-full h-auto rounded-md"
            />
            <h4 className="mt-2 text-lg font-semibold">
              {content?.title || content?.name}
            </h4>
          </Link>
        ))}
        <SliderControls sliderRef={sliderRef} />
      </div>
    </div>
  );
}
