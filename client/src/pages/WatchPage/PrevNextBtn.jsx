import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PrevNextBtn({
  onPrev,
  onNext,
  currentTrailer,
  trailers,
}) {
  return (
    <div className="flex justify-between items-center mb-4">
      <button
        className={`bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded ${
          currentTrailer === 0 ? "opacity-50 cursor-not-allowed " : ""
        }`}
        disabled={currentTrailer === 0}
        onClick={onPrev}
      >
        <ChevronLeft size="24" />
      </button>
      <button
        className={`bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded ${
          currentTrailer === trailers.length - 1
            ? "cursor-not-allowed opacity-50"
            : ""
        }`}
        disabled={currentTrailer === trailers.length - 1}
        onClick={onNext}
      >
        <ChevronRight size="24" />
      </button>
    </div>
  );
}
