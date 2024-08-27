export default function ScreenOverlay() {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full bg-black/50 -z-0"
        aria-hidden="true"
      ></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32">
        <div className="bg-gradient-to-b from-black via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-0"></div>
      </div>
    </>
  );
}
