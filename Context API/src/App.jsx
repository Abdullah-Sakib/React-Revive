import "./App.css";
import Home from "./components/Home";
import AuthProvider from "./context/AuthContext";
import ThemeProvider from "./context/ThemeContext";

function App() {
  return (
    // * wrapping the Home component with ThemeProvider and AuthProvider
    <ThemeProvider>
      <AuthProvider>
        <Home />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
