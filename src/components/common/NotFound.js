import React from 'react';
import { Link } from 'react-router';
const NotFound = () => {
    return (
        <div className="jumbotron">
            <h3>404 page not found</h3>
            <p>We are sorry but the page you are looking for does not exist.</p>
            <p>Click <Link to="/" activeClassName="active">here</Link> to go to home page </p>
        </div>
    )
};
export default NotFound;