import React, { useState } from 'react';
import AboutHero from './AboutHero';
import './about.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutValues from './AboutValues';
import OurStory from './OurStory';
import MeetTeam from './MeetTeam';

const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
            {/* Header */}
            <header>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Ecoyaan</Link>
                        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                            <ul className="navbar-nav m-0" >
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sell">Sell on Ecoyaan</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/careers">Careers</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            {/* About Hero Section */}
            <div className="div-section">
                <AboutHero />
            </div>

            {/* About Values Section */}
            <AboutValues />

            {/* Our Story Section */}
            <OurStory />

            {/* Meet Team Section */}
            <MeetTeam />
        </>
    );
}

export default About;
