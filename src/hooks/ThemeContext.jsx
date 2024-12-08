import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a Context for the theme
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => {
    return useContext(ThemeContext);
};

// ThemeProvider to wrap the app and provide the theme context
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    // Update the theme when it changes
    useEffect(() => {
        document.body.classList.remove(theme === 'light' ? 'dark' : 'light');
        document.body.classList.add(theme);
        localStorage.setItem('theme', theme); // Store theme in localStorage
    }, [theme]);

    // Toggle between light and dark themes
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
