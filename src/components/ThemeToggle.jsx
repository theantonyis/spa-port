import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@hooks/ThemeContext.jsx';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all text-lg sm:text-xl md:text-2xl"
        >
            <FontAwesomeIcon
                icon={theme === 'light' ? faMoon : faSun}
                className="text-yellow-500 dark:text-yellow-300"
            />
        </button>
    );
};

export default ThemeToggle;
