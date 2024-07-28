import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import logo from "../static/logoWhite.png";
import visa from '../static/visaLogo.png';
import mastercard from "../static/mastercardLogo.png";
import mir from "../static/mirLogo.png"

const Footer = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <footer className="bg-black py-4">
            <Container>
                {windowWidth < 770 && (<div>
                    <Image src={logo} alt="Логотип" fluid style={{marginTop:"50px"}} />
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div style={{display:"flex", flexDirection:"column", marginTop:"36px", color:"white"}}>
                            <h3 style={{fontSize:"18px", fontWeight:700}}>Адрес</h3>
                            <span style={{color:"white", marginTop:"20px"}}>Текст, Текст, Текст</span>

                            <div className="d-flex, flex-column" style={{marginTop:"50px"}}>
                                <p style={{color:"#808080"}}>
                                    Публичная оферта
                                </p>
                                <p style={{color:"#808080"}}>
                                    Политика персональных данных
                                </p>
                            </div>

                        </div>

                        <div style={{display:"flex", flexDirection:"column", color:"white", marginTop:"36px"}}>
                            <h3 style={{fontSize:"18px", fontWeight:700}}>Контакты</h3>
                            <span className="d-block" style={{color:"white", marginBottom:"20px",fontSize:"16px"}}>Email:urban.dwelling@yandex.com</span>
                            <span className="d-block" style={{color:"white", fontSize:"16px"}}>Телефон: 8 (999) 999-99-99</span>
                        </div>
                        <div style={{display:"flex", flexDirection:"column", color:"white", marginTop:"36px"}}>
                            <h3 style={{fontSize:"18px", fontWeight:700}}>Услуги</h3>
                            <ul className="list-unstyled">
                                <li className="mt-3">
                                    <a href="#" className="text-white" style={{textDecoration:"none"}}>
                                        Каталог
                                    </a>
                                </li>
                                <li className="mt-3">
                                    <a href="#" className="text-white" style={{textDecoration:"none"}}>
                                        О компании
                                    </a>
                                </li>
                                <li className="mt-3">
                                    <a href="#" className="text-white" style={{textDecoration:"none"}}>
                                        Контакты
                                    </a>
                                </li>
                                <li className="mt-3">
                                    <a href="#" className="text-white" style={{textDecoration:"none"}}>
                                        Доставка и оплата
                                    </a>
                                </li>
                                <li className="mt-3">
                                    <a href="#" className="text-white" style={{textDecoration:"none"}}>
                                        Гарантия и возврат
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <div style={{display:"flex", alignItems:"center"}}>
                            <Image src={mir} alt="Mir" style={{height:"auto"}}/>
                            <Image src={visa} alt="Visa" style={{height:"auto"}}/>
                            <Image src={mastercard} alt="Mastercard"style={{height:"auto"}} />
                        </div>

                        <div style={{display:"flex", flexDirection:"column"}}>
                            <p className="mt-5">
                                <span style={{color:"#808080", fontSize:"16px"}}>Этот сайт защищен от спама службой reCAPTCHA Google. </span>
                                <a href="#" style={{color:"#808080"}}>
                                    Политика конфиденциальности/Условия предоставления услуг
                                </a>
                            </p>
                        </div>
                    </div>




                </div>)}
                <Row>
                    <Col md={3}>
                        <Image src={logo} alt="Логотип" fluid style={{marginTop:"50px"}} />



                        <p className="mt-5">
                            <span style={{color:"#808080"}}>Этот сайт защищен от спама службой reCAPTCHA Google. </span>
                            <a href="#" style={{color:"#808080"}}>
                                Политика конфиденциальности/Условия предоставления услуг
                            </a>
                        </p>
                    </Col>
                    <Col md={3}>

                        <ul className="list-unstyled, mt-5">
                            <li>
                                <p className="text-white" style={{textDecoration:"none", fontSize:"18px", fontWeight:700}}>
                                    Адрес
                                </p>
                                <span className="d-block" style={{color:"white", marginTop:"20px"}}>Текст, Текст, Текст</span>
                            </li>
                            <li>
                                <p className="text-white" style={{textDecoration:"none",  fontSize:"18px", fontWeight:700, marginTop:"45px"}}>
                                    Контакты
                                </p>
                                <span className="d-block" style={{color:"white", marginBottom:"20px"}}>Email:urban.dwelling@yandex.com</span>
                                <span className="d-block" style={{color:"white"}}>Телефон: 8 (999) 999-99-99</span>
                            </li>

                        </ul>
                    </Col>
                    <Col md={3}>
                        <p className="mt-5" style={{textDecoration:"none", fontSize:"18px", fontWeight:700, color:"white"}}>
                            Услуги
                        </p>
                        <ul className="list-unstyled">
                            <li className="mt-3">
                                <a href="#" className="text-white" style={{textDecoration:"none"}}>
                                    Каталог
                                </a>
                            </li>
                            <li className="mt-3">
                                <a href="#" className="text-white" style={{textDecoration:"none"}}>
                                    О компании
                                </a>
                            </li>
                            <li className="mt-3">
                                <a href="#" className="text-white" style={{textDecoration:"none"}}>
                                    Контакты
                                </a>
                            </li>
                            <li className="mt-3">
                                <a href="#" className="text-white" style={{textDecoration:"none"}}>
                                    Доставка и оплата
                                </a>
                            </li>
                            <li className="mt-3">
                                <a href="#" className="text-white" style={{textDecoration:"none"}}>
                                    Гарантия и возврат
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <div className="d-flex, flex-column" style={{marginTop:"50px", textAlign:"end"}}>
                            <p style={{color:"#808080"}}>
                                Публичная оферта
                            </p>
                            <p style={{color:"#808080"}}>
                                Политика персональных данных
                            </p>
                        </div>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                            <Image src={mir} alt="Mir" style={{height:"auto"}}/>
                            <Image src={visa} alt="Visa" style={{height:"auto"}}/>
                            <Image src={mastercard} alt="Mastercard"style={{height:"auto"}} />
                        </div>


                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
