import React from 'react';

const Doctor = (props) => {
    const {name,about ,img}=props.doctor
    return (
        <div  className=" col-lg-4 col-md-6 col-sm-12 g-4 ">
            <div className="border  shadow p-3  bg-body rounded h-100 card">
            <img className="w-100 card-img-top " src={img} alt="" />
            <h5 className="card-title text-danger text-start p-1 ">{name}</h5>
            <p className="card-text text-start p-1">{about}</p>
            </div>
        </div>
    );
};

export default Doctor;