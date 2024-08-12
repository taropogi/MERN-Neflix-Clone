import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../features/auth/thunk";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { status } = useSelector((state) => state.auth);

  const isLoggingIn = status === "loading";

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await dispatch(
        login({
          email,
          password,
        })
      );

      if (response.payload) {
        navigate("/");
      } else {
        throw new Error("Invalid");
      }
    } catch (error) {
      console.log("error login");
    }
  }
  return (
    <div className="flex justify-center items-center mt-10 mx-3 pb-24">
      <div className="w-full max-w-md p-8 space-y-6 bg-black/40 rounded-md shadow-md  ">
        <h1 className="text-center text-white text-2xl font-bold mb-4  ">
          Login
        </h1>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="text-md font-medium text-gray-300 block"
            >
              Email
            </label>
            <input
              disabled={isLoggingIn}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-full bg-transparent text-white focus:outline-none focus:ring "
              placeholder="example: iniwank@di-kaniya-mahal.com"
              id="email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-md font-medium text-gray-300 block"
            >
              Password
            </label>
            <input
              disabled={isLoggingIn}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-full bg-transparent text-white focus:outline-none focus:ring "
              id="password"
            />
          </div>
          <button
            className="w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none"
            disabled={isLoggingIn}
          >
            Sign In
          </button>
          <div className="text-center text-gray-400 space-x-2">
            <span>New to MERN Netflix?</span>
            <Link to={"/signup"} className="text-white font-bold">
              Sign up now.
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
