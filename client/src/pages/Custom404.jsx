import { Link } from "react-router-dom";
import ScreenOverlay from "../UI/ScreenOverlay";

export default function Custom404() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: `url('/404.png')`,
      }}
    >
      <main className="text-center z-10">
        <h1 className="text-7xl font-semibold mb-4">Lost your way?</h1>
        <p className="mb-6 text-xl">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>
        <Link
          to={"/"}
          className="bg-red-600 text-white hover:bg-red-800 py-2 px-4 rounded"
        >
          Netflix Home
        </Link>
      </main>
    </div>
  );
}
