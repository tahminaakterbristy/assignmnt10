import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../Images/404.jpg'
const Notfound = () => {
    return (
        <div>
            <img src={notFoundImg} alt="" className="w-50" />
            <Link to ='/home'><button className="btn btn-danger">Go Back</button></Link>
        </div>
    );
};

export default Notfound;