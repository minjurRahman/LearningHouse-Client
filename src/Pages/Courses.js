import React, {  } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursSummary from './CoursSummary';

const Courses = () => {
    const courseData = useLoaderData()
    
    return (
        <div >
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


