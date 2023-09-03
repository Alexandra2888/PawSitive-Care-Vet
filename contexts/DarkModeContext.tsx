import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import React from "react";
import { AppContextType } from "../src/interfaces/contexts/AppContextType";
import { AppProviderProps } from "../src/interfaces/contexts/AppProviderProps";


const AppContext = createContext<AppContextType | undefined>(undefined);

const getInitialDarkMode = (): boolean => {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const storedDarkMode = localStorage.getItem("darkTheme") === "true";

  return storedDarkMode || prefersDarkMode;
};


export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(getInitialDarkMode());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme.toString());
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  const contextValue: AppContextType = {
    isDarkTheme,
    toggleDarkTheme,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within an AppProvider");
  }
  return context;
};
