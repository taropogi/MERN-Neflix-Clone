import { useSelector } from "react-redux";
import AuthScreen from "../AuthScreen/AuthScreen";
import HomeScreen from "../HomeScreen/HomeScreen";

export default function HomePage() {
  const { user } = useSelector((state) => state.auth);
  return <>{user ? <HomeScreen /> : <AuthScreen />}</>;
}
