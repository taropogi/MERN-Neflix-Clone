import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AppLayout from "./UI/AppLayout";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import WatchPage from "./pages/WatchPage/WatchPage";
import ScrollToTop from "./components/ScrollToTop";
import SearchPage from "./pages/SearchPage/SearchPage";
import SearchHistory from "./pages/SearchHistory/SearchHistory";

export default function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/login"
            element={!user ? <LoginPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="/signup"
            element={!user ? <SignupPage /> : <Navigate to={"/"} />}
          />

          <Route
            path="/watch/:id"
            element={user ? <WatchPage /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/search"
            element={user ? <SearchPage /> : <Navigate to={"/login"} />}
          />

          <Route
            path="/history"
            element={user ? <SearchHistory /> : <Navigate to={"/login"} />}
          />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}
