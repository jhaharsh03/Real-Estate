import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <secion className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
            <div className="flexColStart f-left">
            <img src="./logo2.png" alt="" width={120} />
            <span className="secondayText">
                Our vision is to make all people <br />the best place to live for them.
            </span>
            </div>
        {/* Right Side */}
            <div className="flexColStart f-right">
            <span className="primaryText">Information</span>
            <span className="secondayText">145 New York, FL 5467, USA</span>
                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
       </div>
    </secion>
  );
};

export default Footer;
