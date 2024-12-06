import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
            <button className={styles.menuButton} onClick={toggleMenu}>
                ☰
            </button>
            <ul>
                <li><Link to="/">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
