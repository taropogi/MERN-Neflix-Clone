import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AppLayout from "./UI/AppLayout";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

export default function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<HomePage />} />
          <Route
            path="login"
            element={!user ? <LoginPage /> : <Navigate to={"/"} />}
          />
          <Route
            path="signup"
            element={!user ? <SignupPage /> : <Navigate to={"/"} />}
          />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}
