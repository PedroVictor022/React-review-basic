import { useState, createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider(props) {
  const [theme, setTheme] = useState('dark');


  const handleToggleTheme = () => {
    setTheme(prevState => prevState === "dark" ? "light" : "dark")
  }


  return (
    <ThemeContext.Provider
      value={{
        theme,
        onToggleTheme: handleToggleTheme
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}