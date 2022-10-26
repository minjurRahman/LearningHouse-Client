import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Courses from './Courses';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Categories = () => {
    const [categories, setCategories] = useState([]); 
    
    useEffect(() =>{
        fetch('http://localhost:5000/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
          <div className=''>
            <h1>Courses</h1>
            <div className='inline'>
                {
                    categories.map(category => <h6 key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </h6>)
                }
            </div>
        </div>
       
    );
};

export default Categories;