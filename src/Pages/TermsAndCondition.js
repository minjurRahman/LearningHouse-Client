import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h3>Here is our Terms and Condition</h3>
            <p>You have to accept our all the terms and condition. We may handle your data for our future purposes</p>
            <p>Go back to: <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndCondition;