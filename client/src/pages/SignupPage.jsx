import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../UI/Header";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleSignUp(e) {
    e.preventDefault();
  }
  return (
    <div className="h-screen w-full hero-bg ">
      <Header />
      <div className="flex justify-center items-center mt-10 mx-3  ">
        <div className="w-full max-w-md p-8 space-y-6 bg-black/40 rounded-md shadow-md  ">
          <h1 className="text-center text-white text-2xl font-bold mb-4  ">
            Sign Up
          </h1>
          <form className="space-y-4" onSubmit={handleSignUp}>
            <div>
              <label
                htmlFor="email"
                className="text-md font-medium text-gray-300 block"
              >
                Email
              </label>
              <input
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
                htmlFor="username"
                className="text-md font-medium text-gray-300 block"
              >
                Username
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-full bg-transparent text-white focus:outline-none focus:ring "
                id="username"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-full bg-transparent text-white focus:outline-none focus:ring "
                id="password"
              />
            </div>
            <button className="w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none">
              Sign Up
            </button>
            <div className="text-center text-gray-400 space-x-2">
              <span>Already have an account?</span>
              <Link to={"/login"} className="text-red-500">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
