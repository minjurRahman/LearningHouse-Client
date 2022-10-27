import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const CourseDetails = () => {
    const course = useLoaderData();
    const {id, title, details, image_url} = course;
    return (
        <Card className='container w-50'>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Link to='/'>Home</Link>
        </Card.Body>
      </Card>
    );
};

export default CourseDetails;