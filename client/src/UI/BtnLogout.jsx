import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/thunk";
import { LogOut } from "lucide-react";

export default function BtnLogout() {
  const dispatch = useDispatch();
  function handleLogout() {
    try {
      dispatch(logout());
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <LogOut className="size-6 cursor-pointer" onClick={handleLogout} />
    // <div>
    //   <button
    //     onClick={handleLogout}
    //     className="bg-red-500 text-white p-2 rounded"
    //   >
    //     Logout
    //   </button>
    // </div>
  );
}
