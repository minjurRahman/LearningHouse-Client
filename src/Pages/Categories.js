import React, { useEffect, useState } from 'react';
import { Link, } from 'react-router-dom';


const Categories = () => {
    const [categories, setCategories] = useState([]); 
    
    useEffect(() =>{
        fetch('https://b610-lerning-platform-server-side-minjurrahman.vercel.app/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
          <div >
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