import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

const Child = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  return (
    <div>
      <button onClick={toggleTheme}>Change</button>
      <button
        onClick={() => {
          if (isLoggedIn) {
            logout();
          } else {
            login();
          }
        }}
      >
        {isLoggedIn ? "Log out" : "Log in"}
      </button>
    </div>
  );
};

export default Child;
