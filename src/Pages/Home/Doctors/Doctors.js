import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor'
const Doctors = () => {
    const [doctors,setDoctors]=useState()
    useEffect(()=>{
        fetch("FakeData2.json")
        .then(res=> res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <div className="container mt-5" id="doctors">
            <p>Meet Our Doctors</p>
            <h1 className="text-danger">Professional and<span className="text-dark">Enthusiastic</span> </h1>
           <div className="row ">
          {
                doctors?.map(doctor =><Doctor
                    key={doctor.name}
                    doctor={doctor}
                ></Doctor>)
          }
           </div>
        </div>
    );
};

export default Doctors;