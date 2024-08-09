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

      <LineSeparator />

      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2">
          <div className=" flex-1 ">
            <div className="relative">
              <img
                src="/stranger-things-lg.png"
                alt="Stranger Things Image"
                className="mt-4"
              />
              <div className="flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black w-3/4 lg:w-1/2 h-24 border border-slate-500 rounded-md px-2">
                <img
                  src="/stranger-things-sm.png"
                  alt="Image"
                  className="h-10 sm:h-20"
                />
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-0">
                    <span className="text-md lg:text-lg font-bold">
                      Stranger Things
                    </span>
                    <span className="text-sm text-blue-600">
                      Downloading...
                    </span>
                  </div>
                  <img
                    src="/download-icon.gif"
                    alt="Download Icon"
                    className="h-12"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 md:text-left text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Download your shows to watch offline
            </h2>
            <p className="text-lg md:text-xl">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
