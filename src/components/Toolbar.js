import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import lightModeIcon from "../assets/light.svg"
import darkModeIcon from "../assets/dark.svg"

export default function Toolbar({ setIsDarkMode, isDarkMode }) {

    return (

        <Navbar className='NavBar'  >
            <Container >
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/flash-cards.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    <span className='header-btns '>React Flashcard</span>
                </Navbar.Brand>
                <Button className='dark-mode-btn d-flex justify-content-center align-items-center gap-3' onClick={() => { setIsDarkMode(!isDarkMode); }}>
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                    <img className='object-fit-scale' src={isDarkMode ? lightModeIcon : darkModeIcon} />
                </Button>
            </Container>
        </Navbar>

    )
}
