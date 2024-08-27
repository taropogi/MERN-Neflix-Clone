import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BtnLogout from "../BtnLogout";
import { useState } from "react";
import { LogOut, Menu, Search } from "lucide-react";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

export default function Header() {
  const { user } = useSelector((state) => state.auth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v);

  return (
    <header className="max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 pb-10 text-white">
      <div className="flex items-center gap-10 z-50">
        <Link to={"/home"}>
          <img
            src="/netflix-logo.png"
            alt="Netflix Logo"
            className="w-32 sm:w-40"
          />
        </Link>

        <DesktopNavbar />
      </div>

      <div className="flex gap-2 items-center z-50">
        <Link to={"/search"}>
          <Search className="size-6 cursor-pointer" />
        </Link>

        {user ? (
          <>
            <img
              src={user.image}
              alt="Avatar"
              className="h-8 rounded cursor-pointer"
            />

            <BtnLogout />
          </>
        ) : (
          <Link
            to={"/login"}
            className="text-white bg-red-600  py-1 px-2 rounded my-auto hover:bg-red-500"
          >
            Sign In
          </Link>
        )}

        <div className="sm:hidden">
          <Menu className="size-6 cursor-pointer" onClick={toggleMobileMenu} />
        </div>
      </div>
      {isMobileMenuOpen && <MobileNavbar />}
    </header>
  );
}
