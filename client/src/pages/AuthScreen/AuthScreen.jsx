import { useState } from "react";
import { ChevronRight } from "lucide-react";
import LineSeparator from "../../UI/LineSeparator";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

export default function AuthScreen() {
  const [email, setEmail] = useState();
  return (
    <>
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
      <Section1 />
      <LineSeparator />
      <Section2 />
      <LineSeparator />
      <Section3 />
      <LineSeparator />
      <Section4 />
    </>
  );
}
