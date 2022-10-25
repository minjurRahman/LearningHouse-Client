import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h1>this is tail wind</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;