import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Courses from './Courses';

const Categories = () => {
    const [categories, setCategories] = useState([]); 

    useEffect(() =>{
        fetch('http://localhost:5000/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <Container>
        <Row>
          <Col sm={4}>
          <div>
            <h1>Categoris:{categories.length} </h1>
            <div>
                {
                    categories.map(category => <h5 key={category.id}>
                        <Link to={`/courses/${category.id}`}>{category.name}</Link>
                    </h5>)
                }
            </div>
        </div>
          </Col>
          <Col sm={8}>
            <Courses></Courses>
          </Col>
        </Row>
      </Container>
       
    );
};

export default Categories;