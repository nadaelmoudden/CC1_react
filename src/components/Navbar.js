import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Switch } from './Switch';

function Navbar({switchTheme, isOn, theme, isLight}) {
    const [expanded, setExpanded] = useState(false);
    const [externalLink, setExternalLink] = useState('');

    const toggleNavbar = () => {
        setExpanded(!expanded);
    };

    const handleExternalLink = (link) => {
        setExternalLink(link);
        setExpanded(false);
    };

    
    return (
        <div>
        <nav className={`navbar ${isLight ? 'bg-light navbar-light' : 'bg-dark navbar-dark'} navbar-expand-lg ${expanded ? 'expanded' : ''}`}>
            <div className="container">
            
            <Link to="/" className="navbar-brand">
                Home
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                onClick={toggleNavbar}
                aria-controls="navbarSupportedContent"
                aria-expanded={expanded ? 'true' : 'false'}
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <button
                    className="nav-link"
                    onClick={() =>
                        handleExternalLink('https://tp1react-nada.surge.sh/')
                    }
                    >
                    Calc
                    </button>
                </li>
                <li className="nav-item">
                    <button
                    className="nav-link"
                    onClick={() =>
                        handleExternalLink(
                        'https://nadaelmoudden.github.io/Tp2_react/'
                        )
                    }
                    >
                    Slider
                    </button>
                </li>
                <li className="nav-item">
                    <button
                    className="nav-link"
                    onClick={() =>
                        handleExternalLink(
                        'https://nadaelmoudden.github.io/Tp3_react/'
                        )
                    }
                    >
                    Todo List
                    </button>
                </li>
                <li className="nav-item">
                    <button
                    className="nav-link"
                    onClick={() =>
                        handleExternalLink(
                        'https://nadaelmoudden.github.io/Tp4_react/'
                        )
                    }
                    >
                    API
                    </button>
                </li>
                {/* Add more buttons for additional external links */}
                </ul>
                <div className='ml-auto'>
                    {/* <Switch switchTheme = {switchTheme} isOn={isOn} /> */}
                    <div >
                        <i onClick={switchTheme} className={isOn ? 'fas fa-toggle-on' : 'fas fa-toggle-off'}></i>
                    </div>
                </div>
                
            </div>
            </div>
        </nav>
        <div className="content-container">
            {externalLink && (
            <iframe
                src={externalLink}
                title="External Content"
                style={{ width: '100%', height: '80vh' }}
            />
            )}
        </div>
        </div>
    );
}

export default Navbar;
