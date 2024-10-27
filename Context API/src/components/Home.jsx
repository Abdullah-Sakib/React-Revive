import { useContext } from "react";
import Child from "./Child";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <h1>User {isLoggedIn ? "Logged In" : "Not Logged In"}</h1>
      <h1>Home page</h1>
      <p>Theme: {theme}</p>
      <Child />
    </div>
  );
};

export default Home;
