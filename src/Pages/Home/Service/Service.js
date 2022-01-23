import React from 'react';
import { Link } from 'react-router-dom';


const Service = (props) => {
    const {name,description,img}=props.service
    return (
        <div className=" col-lg-4 col-md-6 col-sm-12 g-4 ">
           <div className="border  shadow p-3  bg-body rounded h-100 card">
           <img className="w-100 card-img-top " src={img} alt="" />
            <h5 className="card-title text-danger text-start p-1 ">{name}</h5>
            <p className="card-text text-start p-1">{description}</p>
           <Link to="/details"> <button className="btn btn-danger rounded w-100 ">Details</button></Link>
           </div>
           
        </div>
    );
};

export default Service;