import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Image} from "react-bootstrap";
import logo from "../imgs/Logo.png"
import search from "../imgs/search.png"
import basket from '../imgs/basket.png'
import searchWhite from "../imgs/search-normal.png"
import { FaBars } from 'react-icons/fa'

function NavBar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showBurgerMenu, setShowBurgerMenu] = useState(false); // Состояние для бургера

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleBurgerMenu = () => {
        setShowBurgerMenu(!showBurgerMenu);
    };

    return (
        <Navbar>

            <Image src={logo} style={{marginRight:"unset"}}/>
            <Container style={{display:"unset"}}>

                <Nav style={{justifyContent:"end"}}>
                    {windowWidth > 1000 && (
                        <Nav
                            style={{
                                textTransform: "uppercase",
                                fontWeight: 600,
                                fontSize: "16px",
                                lineHeight: "16px",
                                display: "flex",
                                justifyContent:"space-between"
                            }}
                        >
                            <Nav.Link href="#action1">
                                Каталог
                            </Nav.Link>
                            <Nav.Link href="#action2">
                                О компании
                            </Nav.Link>
                            <Nav.Link href="#">
                                Контакты
                            </Nav.Link>

                        </Nav>
                    )}


                    {windowWidth > 1000 && (
                        <div style={{display:"flex"}}>
                            {windowWidth < 1600 && windowWidth > 700 ? (
                                <Form className="d-flex">
                                    <button
                                        style={{
                                            position: "relative",
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                            border: "none",
                                            backgroundColor: "black",
                                        }}
                                    >
                                        <Image
                                            src={searchWhite}
                                            style={{
                                                position: "absolute",
                                                top: "50%",
                                                right: "10px",
                                                transform: "translateY(-50%)",
                                            }}
                                        />
                                    </button>
                                </Form>
                            ) : (
                                <Form className="d-flex">
                                    <div style={{ position: "relative" }}>
                                        <Form.Control
                                            style={{ borderRadius: "25px" }}
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                        <Image
                                            src={search}
                                            style={{
                                                position: "absolute",
                                                top: "50%",
                                                right: "10px",
                                                transform: "translateY(-50%)",
                                            }}
                                        />
                                    </div>
                                </Form>
                            )}

                            <div style={{ position: "relative" }}>
                                <button
                                    style={{
                                        backgroundColor: "black",
                                        color: "white",
                                        fontSize: "16px",
                                        width: "138px",
                                        height: "39px",
                                        borderRadius: "25px",
                                    }}
                                >
                                    Корзина
                                </button>
                                <Image
                                    style={{
                                        position: "absolute",
                                        top: "10%",
                                        left: "5px",
                                    }}
                                    src={basket}
                                />
                                <button
                                    style={{
                                        position: "absolute",
                                        top: "10%",
                                        left: "15px",
                                        border: "none",
                                        width: "15px",
                                        height: "15px",
                                        borderRadius:"10px",
                                        fontSize:"10px"
                                    }}
                                >
                                    3
                                </button>
                            </div>
                        </div>
                    )}
                    {/* Бургер меню */}
                    {windowWidth <= 1000 && (
                        <button onClick={toggleBurgerMenu} style={{backgroundColor:"white", border:"none", width:"10%"}}>
                            <FaBars size={30}/> {/* Иконка бургера */}
                        </button>
                    )}
                </Nav>

            </Container>
        </Navbar>
    );
}

export default NavBar;