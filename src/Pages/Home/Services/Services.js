import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
const Services = () => {
   const [services,setServices]=useState();
   useEffect(()=>{
       fetch("FakeData.json")
       .then(res=>res.json())
       .then(data =>setServices(data))
   },[])
    return (
        <div className="container" id="services">
            <p>Our services</p>
            <h1 className="text-danger">Best Solution <span className="text-dark">For Your Health</span> </h1>
           <div className="row ">
           {
                services?.map(service =><Service
                key={service.name}
                service={service}
                ></Service>)
            }
           </div>
        </div>
    );
};

export default Services;