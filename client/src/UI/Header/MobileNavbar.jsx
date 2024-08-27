import { Link } from "react-router-dom";

export default function MobileNavbar() {
  return (
    <div className="w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800">
      <Link to={"/home"} className="block hover:underline p-2">
        Movies
      </Link>
      <Link to={"/home"} className="block hover:underline p-2">
        TV Shows
      </Link>
      <Link to={"/search"} className="block hover:underline p-2">
        Search History
      </Link>
    </div>
  );
}
