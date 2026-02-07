import { useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const containerStyle = {
    backgroundColor: theme === "light" ? "white" : "#222",
    color: theme === "light" ? "black" : "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  };

  return (
    <div style={containerStyle}>
      <h1>Theme Toggle Example</h1>
      <p>Click the button to switch Light/Dark Mode</p>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <p>Text color also changes according to selected Theme</p>
    </div>
  );
}

export default App
