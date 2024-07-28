import React from 'react';
import {Container} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import DeviceList from "../components/DeviceList";
import NavBar from "../components/NavBar";
import DutyNav from "../components/DutyNav";
import Footer from "../components/Footer";

const Shop = () => {
    return (<>
            <DutyNav/>
            <Container>
                <NavBar/>
            <Col>
                <DeviceList/>
            </Col>
        </Container>
        <Footer/>
</>
    );
};

export default Shop;