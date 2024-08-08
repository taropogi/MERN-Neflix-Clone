import { useState } from "react";
import Header from "../../UI/Header";
import { ChevronRight } from "lucide-react";
import LineSeparator from "../../UI/LineSeparator";

export default function AuthScreen() {
  const [email, setEmail] = useState();
  return (
    <div className="relative">
      {/* Navbar here */}
      <Header />
      <div className="flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-2xl mb-4">Watch anywhere. Cancel anytime.</p>
        <p className=" text-lg mb-4">
          Ready to watch? Enter you email to create or restart your membership.
        </p>
        <form className="flex flex-col md:flex-row gap-4 w-4/5 md:w-2/3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="p-2 rounded flex-1 bg-black/80 border border-gray-700"
          />
          <button className="bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center">
            Get Started
            <ChevronRight className="size-8 md:size-10" />
          </button>
        </form>
      </div>

      <LineSeparator />

      {/* first section */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl items-center justify-center md:flex-row flex-col px-4 md:px-2 mx-auto">
          {/* left side */}
          <div className="flex-1 text-center md:text-left  ">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Enjoy on your TV
            </h2>
            <p className="text-lg md:text-xl">
              Watch on Smart TVs, PlayStation, Xbox, Chromecast, AppleTV,
              Blu-ray players, and more.
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
        </div>
      </div>
    </div>
  );
}
