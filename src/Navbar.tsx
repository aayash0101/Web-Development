import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import logo from './assets/Logo.png';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        setIsLoggedIn(!!userId);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
        setIsLoggedIn(false);
        navigate('/login');
    };

    return (
        <header className="home-header">
            <div className="home-logo">
                <Link to="/">
                    {/* <img src={logo} alt="Logo" className="home-img" /> */}
                </Link>
            </div>

            <nav>
                <ul className="home-nav-list">
                    <li>
                        <Link to="/" className="home-nav-link">Home</Link>
                    </li>
                    <li className="dropdown">
                        <span className="home-nav-link">Rent</span>
                        <ul className="dropdown-content">
                            <li><Link to="/car" className="home-nav-link">Car Rental</Link></li>
                           
                        </ul>
                    </li>
                </ul>
            </nav>
            <div className="home-auth">
                {isLoggedIn ? (
                    <button className="home-Logout" onClick={handleLogout}>Logout</button>
                ) : (
                    <Link to="/login">
                        <button className="home-Logout">Login</button>
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Navbar;
