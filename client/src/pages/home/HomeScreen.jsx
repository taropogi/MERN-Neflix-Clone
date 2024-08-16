import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/thunk";

export default function HomeScreen() {
  const dispatch = useDispatch();
  function handleLogout() {
    try {
      dispatch(logout());
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div>
      <button onClick={handleLogout} className="bg-white p-2 rounded">
        Logout
      </button>
    </div>
  );
}
