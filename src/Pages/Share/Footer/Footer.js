import React from 'react';
import logo2 from '../../../Images/logo/logo-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faEnvelope,faMobile} from '@fortawesome/free-solid-svg-icons'
import footerImg from '../../../Images/footer.jpg'
const Footer = () => {
    return (
        <div className="mt-3">
           <div className=" bg-dark p-3">
           <div  className="row">
                <div className=" col-lg-4 col-md-6 col-sm-12 g-4 ">
                    <div>
                    <img className="w-25 h-25" src={logo2} alt="" />
                    <p className="text-white text-start"> Our main goal is to ensure a better treatment for our clients.Our service is our religion.we belive in god supermarcy </p>
                    </div>
                    <FontAwesomeIcon className="text-danger float-start"size="2x" icon={faCompass} />
                    <span className="text-white text-start">69 Halsey St, New York, Ny 10002, United States</span><br /><hr className="text-white" />
                    <FontAwesomeIcon className="text-danger float-start"size="2x" icon={faEnvelope} />
                    <span className="text-white text-start">hello@yourdomain.com</span><br /><hr  className="text-white"/>
                    <FontAwesomeIcon className="text-danger float-start"size="2x" icon={faMobile} />
                    <span className="text-white text-start">(0091) 8547 632521</span>
                    
                
                </div>
                <div className=" col-lg-4 col-md-6 col-sm-12 g-4 text-white text-center pt-3">
                    <h1>SUPPORT</h1>
                    <br />
                    <br />
                    <p>TrubleShooting </p>
                    <p>Common Questions</p>
                    <p>Get Help</p>
                </div>
                <div className=" col-lg-4 col-md-6 col-sm-12 g-4 pt-3">
                    <h1 className="text-white text-start ">Get in touch</h1>
                    <br /><br/>
                   <img src={footerImg} className="w-50 float-start" alt="" />
                </div>
            </div>
            <p className="text-white text-center">© 2021 BM  Hospital Care. Made with love</p>
           </div>
        </div>
    );
};

export default Footer;