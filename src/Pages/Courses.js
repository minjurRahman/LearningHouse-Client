import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courseData = useLoaderData()
    console.log(courseData)
    return (
        <div>aksjdhkAH :dfhgk  </div>
    );
};

export default Courses;



/* 

        <Container>
      <Row>
        <Col sm={4}><Categories></Categories></Col>
        <Col sm={8}>courses summery</Col>
      </Row>
    </Container>

*/