import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursSummary from './CoursSummary';

const Courses = () => {
    const courseData = useLoaderData()
    
    return (
        <div>
        {
          courseData.map(course => <CoursSummary
          key={course.id}
          course={course}
          ></CoursSummary>)
        }
        </div>
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