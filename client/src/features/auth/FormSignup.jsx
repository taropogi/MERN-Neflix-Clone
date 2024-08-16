import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { signup } from "./thunk";
import toast from "react-hot-toast";

export default function FormSignup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const enteredEmail = searchParams.get("email");

  const [email, setEmail] = useState(enteredEmail || "");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignUp(e) {
    e.preventDefault();

    const response = await dispatch(
      signup({
        email,
        username,
        password,
      })
    );

    if (response.payload) {
      navigate("/");
    } else {
      // console.log(response);
      throw new Error("Invalid data");
    }
  }
  return (
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
  );
}
