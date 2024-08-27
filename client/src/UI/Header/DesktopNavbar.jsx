import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setContentType } from "../../features/content/contentSlice";

export default function DesktopNavbar() {
  const dispatch = useDispatch();
  return (
    <div className="hidden sm:flex gap-2 items-center">
      <Link
        to={"/home"}
        className="hover:underline"
        onClick={() => dispatch(setContentType("movie"))}
      >
        Movies
      </Link>
      <Link
        to={"/home"}
        className="hover:underline"
        onClick={() => dispatch(setContentType("tv"))}
      >
        TV Shows
      </Link>
      <Link to={"/home"} className="hover:underline">
        Search History
      </Link>
    </div>
  );
}
