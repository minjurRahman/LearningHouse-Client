import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]); 

    useEffect(() =>{
        fetch('http://localhost:5000/course-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h1>Categoris:{categories.length} </h1>
            <div>
                {
                    categories.map(category => <h5 key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </h5>)
                }
            </div>
        </div>
    );
};

export default Categories;