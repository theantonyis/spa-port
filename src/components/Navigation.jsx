import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import ThemeToggle from './ThemeToggle'; // Підключаємо компонент ThemeToggle

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative">
            {/* Hamburger Menu Icon for Mobile */}
            <button
                className="fixed top-4 right-4 sm:hidden z-50 text-gray-800 dark:text-gray-200 p-3 rounded-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 shadow-lg focus:outline-none transition-all"
                onClick={toggleMenu}
            >
                <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
            </button>

            {/* Navigation Links */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
                    isMenuOpen ? 'opacity-100' : 'opacity-0'
                } sm:bg-transparent sm:opacity-100 sm:relative`}
            >
                <ul
                    className={`sm:flex sm:space-x-6 space-y-4 sm:space-y-0 absolute sm:static top-16 right-0 bg-white dark:bg-gray-900 sm:bg-transparent sm:text-gray-800 dark:sm:text-gray-200 sm:flex-row ${
                        isMenuOpen ? 'block' : 'hidden'
                    }`}
                >
                    <li>
                        <Link
                            to="/"
                            className="text-lg text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/projects"
                            className="text-lg text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/skills"
                            className="text-lg text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300"
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contacts"
                            className="text-lg text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300"
                        >
                            Contacts
                        </Link>
                    </li>
                    <li className="flex items-center">
                        <ThemeToggle /> {/* Додаємо кнопку ThemeToggle */}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
