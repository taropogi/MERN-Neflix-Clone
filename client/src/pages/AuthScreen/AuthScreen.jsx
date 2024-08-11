import { useState } from "react";
import { ChevronRight } from "lucide-react";
import LineSeparator from "../../UI/LineSeparator";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5/Section5";
import FormGetStarted from "./FormGetStarted";

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
        <FormGetStarted />
      </div>
      <LineSeparator />
      <Section1 />
      <LineSeparator />
      <Section2 />
      <LineSeparator />
      <Section3 />
      <LineSeparator />
      <Section4 />
      <LineSeparator />
      <Section5 />
    </>
  );
}
