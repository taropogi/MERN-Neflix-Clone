import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
import SiteMap from "./SiteMap";
import LineSeparator from "./LineSeparator";

export default function AppLayout() {
  return (
    <div className="hero-bg h-screen overflow-y-scroll">
      <Header />
      <main>
        <Outlet />
      </main>
      <LineSeparator />
      <SiteMap />
      <Footer />
    </div>
  );
}
