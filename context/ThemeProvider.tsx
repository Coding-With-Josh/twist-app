import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { DefaultTheme } from "@/themes";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(DefaultTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
