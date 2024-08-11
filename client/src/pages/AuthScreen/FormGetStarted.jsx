import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormGetStarted() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  function handleFormSubmit(e) {
    e.preventDefault();
    navigate("/signup?email=" + email);
  }
  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col md:flex-row gap-4 w-4/5 md:w-2/3"
    >
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
  );
}
