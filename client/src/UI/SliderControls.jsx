import SliderButton from "../components/MovieSlider/SliderButton";

export default function SliderControls({ sliderRef }) {
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
    <>
      <SliderButton direction={"left"} onClick={scrollLeft} />

      {/* <button
  className={`absolute top-1/2 -translate-y-1/2 right-5 md:right-24 flex items-center justify-center size-12 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 text-white z-10`}
>
  <ChevronRight size="24" />
</button> */}
      <SliderButton direction={"right"} onClick={scrollRight} />
    </>
  );
}
