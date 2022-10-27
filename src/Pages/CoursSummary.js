import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const CoursSummary = ({course}) => {
    const { id, title, details, image_url } = course;
    return (
        <Row xs={1} md={2} className="container g-4 mb-4 ">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={image_url} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {details?.length > 100 ?
                   <>{details?.slice(0, 100) + '...'} <Link to={`/courses-details/${id}`}>See More</Link></> : <> {details}</>}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
};

export default CoursSummary;