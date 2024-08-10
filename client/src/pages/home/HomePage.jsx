import AuthScreen from "../AuthScreen/AuthScreen";
import HomeScreen from "./HomeScreen";

export default function HomePage() {
  const user = false;
  return (
    <div className="hero-bg h-screen overflow-y-scroll">
      {user ? <HomeScreen /> : <AuthScreen />}
    </div>
  );
}
