import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const { user } = useSelector((state) => state.auth);
  return (
    <header className="max-w-6xl mx-auto flex item-center justify-between p-4 pb-10 ">
      <Link to={"/home"}>
        <img src="/netflix-logo.png" alt="Netflix Logo" className="w-52" />
      </Link>

      {!user && (
        <Link
          to={"/login"}
          className="text-white bg-red-600  py-1 px-2 rounded my-auto hover:bg-red-500"
        >
          Sign In
        </Link>
      )}
    </header>
  );
}
