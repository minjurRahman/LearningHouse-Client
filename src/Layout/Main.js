import React, { createContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Categories from '../Pages/Categories';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import Navbar2 from '../Shared/Navbar2';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Navbar2></Navbar2>
            <Container>
            <Row>
                <Col sm={2}><Categories></Categories></Col>
                <Col sm={10}><Outlet></Outlet></Col>
            </Row>
            </Container>
            
            <Footer></Footer>
        </div>
    );
};

export default Main;