import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative">
            {/* Hamburger Menu Icon for Mobile */}
            <button
                className="sm:hidden text-gray-800 dark:text-gray-200 p-2"
                onClick={toggleMenu}
            >
                <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>

            {/* Navigation Links */}
            <ul
                className={`sm:flex sm:space-x-6 space-y-4 sm:space-y-0 absolute sm:static top-16 left-0 right-0 bg-white dark:bg-gray-900 sm:bg-transparent sm:text-gray-800 dark:sm:text-gray-200 sm:flex-row ${isMenuOpen ? 'block' : 'hidden'}`}
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
            </ul>
        </nav>
    );
};

export default Navigation;
