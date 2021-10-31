import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import photo from '../../images/notfound.png';

const NotFound = () => {
    return (
        <div className="text-center w-75 mx-auto">
            <img src={photo} alt="" className="img-fluid" />
            <div className="my-5">
                <Link to='/home'>
                    <Button variant="danger">Go Back</Button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;