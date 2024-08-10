import SectionRow from "../../UI/SectionRow";

export default function Section3() {
  return (
    <SectionRow>
      {/* left side */}
      <div className="flex-1 text-center md:text-left  ">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Watch everywhere
        </h2>
        <p className="text-lg md:text-xl">
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </p>
      </div>

      {/* right side */}
      <div className="flex-1 relative  ">
        <img
          src="/device-pile.png"
          alt="Device Image"
          className="z-20 relative"
        />
        <video
          className="absolute top-2   left-1/2 -translate-x-1/2 max-w-[63%] h-4/6"
          playsInline
          autoPlay={true}
          muted
          loop
        >
          <source src="/video-devices.m4v" type="video/mp4" />
        </video>
      </div>
    </SectionRow>
  );
}
