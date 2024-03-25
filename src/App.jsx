import { ThemeContext } from "./context/ThemeContext";
import Theme from "./components/Theme";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(true);
  return (
    <>
      <div className={`h-screen dark:bg-black grid place-items-center grid-cols-1`}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Theme />
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;
