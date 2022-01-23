import React from 'react';
import { Accordion } from 'react-bootstrap';
import sidePic from '../../Images/sidepic.jpg'
const ServiceDetails = () => {
    return (
        <div>
            <h1>Welcome </h1>
            <div className="row">
                <div className=" mt-5 col-lg-6 col-sm-12 ">
                <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header className="text-danger">Psychiatry</Accordion.Header>
    <Accordion.Body>
    Cardiology is the study and treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular disease may be referred to a cardiologist.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header className="text-danger">Opthalmology</Accordion.Header>
    <Accordion.Body>
    Cardiology is the study and treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular disease may be referred to a cardiologist.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header className="text-danger">Cardiology</Accordion.Header>
    <Accordion.Body>
    Cardiology is the study and treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular disease may be referred to a cardiologist.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header className="text-danger">Immumnology</Accordion.Header>
    <Accordion.Body>
    Cardiology is the study and treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular disease may be referred to a cardiologist.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header className="text-danger">Hematology</Accordion.Header>
    <Accordion.Body>
    Cardiology is the study and treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular disease may be referred to a cardiologist.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
<p className="mt-3 text-start">Meditex Clinics Department of Dental Specialties in Minnesota provides coordinated care for adults and children who require specialized dental care. Depending on the persons needs, care may include one specialty or more than one (multispecialty care, also called multidisciplinary care).

An attractive, healthy smile is an important part of life. Our General Dentistry Department provides a broad range of services to meet your family’s dental needs including:</p>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <img className="w-75" src={sidePic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;