import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn,faFacebookF,faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../imgs/logo.svg'
import './NavBar.css';
import { useState } from 'react';

const NavBar = ()=>{
    const [activelink, setactivelink] = useState('home');
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setactivelink(sectionId);
        }
    };

    return (
        <Navbar expand="lg" className="nav_bar">
            <Container>
                <Navbar.Brand href="#home" className='navbar_logo' onClick={() => scrollToSection('home')}>
                    <img src={logo} alt="loogoo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" onClick={handleToggle}>
                    <div className={`hamburger-icon ${isToggled ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Navbar.Toggle>
                
                <Navbar.Collapse id="basic-navbar-nav" className='navbar_controls'>
                    <Nav className='navbar_links'>
                        <Nav.Link 
                            href="#home" 
                            className={activelink==='home'? 'active_nav_link' : 'nav_link'} 
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('home');
                            }}
                        >Home</Nav.Link>
                        <Nav.Link 
                            href="#skills" 
                            className={activelink==='skills'? 'active_nav_link' : 'nav_link'} 
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('skills');
                            }}
                        >Skills</Nav.Link>
                        <Nav.Link 
                            href="#projects" 
                            className={activelink==='projects'? 'active_nav_link' : 'nav_link'} 
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('projects');
                            }}
                        >Projects</Nav.Link>
                    </Nav>

                    <div className='navbar_text'>
                        <div className="social_icons">
                            <a href='#'> <span> <FontAwesomeIcon icon={faLinkedinIn} /> </span></a>
                            <a href='#'> <span> <FontAwesomeIcon icon={faFacebookF} /> </span></a>
                            <a href='#'> <span> <FontAwesomeIcon icon={faInstagram} /> </span></a>
                        </div>

                        <button onClick={() => scrollToSection('contact')} className='navbtn'> 
                            <span>Let's connect</span>   
                        </button>
                    </div>    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
} 

export default NavBar;