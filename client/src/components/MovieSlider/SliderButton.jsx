import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SliderButton({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 ${direction}-5 md:${direction}-24 flex items-center justify-center size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10`}
    >
      {direction === "left" ? (
        <ChevronLeft size="24" />
      ) : (
        <ChevronRight size="24" />
      )}
    </button>
  );
}
