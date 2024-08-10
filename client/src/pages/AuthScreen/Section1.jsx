import SectionRow from "../../UI/SectionRow";

export default function Section1() {
  return (
    <SectionRow>
      {/* left side */}
      <div className="flex-1 text-center md:text-left  ">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Enjoy on your TV
        </h2>
        <p className="text-lg md:text-xl">
          Watch on Smart TVs, PlayStation, Xbox, Chromecast, AppleTV, Blu-ray
          players, and more.
        </p>
      </div>

      {/* right side */}
      <div className="flex-1 relative">
        <img src="/tv.png" alt="TV Image" className="z-20 relative" />
        <video
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10 "
          playsInline
          autoPlay={true}
          muted
          loop
        >
          <source src="/hero-vid.m4v" type="video/mp4" />
        </video>
      </div>
    </SectionRow>
  );
}
