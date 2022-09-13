import React from "react";
import "./Footer.css";
import { GrFacebookOption } from "@react-icons/all-files/gr/GrFacebookOption";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { AiFillGoogleCircle } from "@react-icons/all-files/ai/AiFillGoogleCircle";
import { ImYoutube } from "@react-icons/all-files/im/ImYoutube";
const Footer = () => {
  return (
    <div className="footer pt-5">
      <div className="d-sm-flex flex-sm-row flex-lg-row  align-items-center justify-content-around">
        <div className="d-sm-block foooter-responsive">
          <p className="footer-doc fs-2">
            <span className="text-primary">Doc</span>
            <span className="secondary">mic.</span>
          </p>
          <span>
            simply dummy text of the printing <br /> and typesetting industry.
            Lorem <br /> Ipsum has bee
          </span>
          <br />
          <div style={{ marginTop: "24px", display: "flex", color: "#FFFFFF" }}>
            <span className="icons bg-primary">
              <GrFacebookOption />
            </span>
            <span className="icons bg-primary" style={{ color: "#FFFFFF" }}>
              <AiOutlineInstagram />
            </span>
            <span className="icons bg-primary">
              <AiFillGoogleCircle />
            </span>
            <span className="icons bg-primary">
              <FaTwitter />
            </span>
            <span className="icons bg-primary">
              <ImYoutube />
            </span>
          </div>
        </div>

        <div className="d-sm-block foooter-responsive">
            <p className="secondary">Quick Linls</p>
            <p style={{color:"#1E1E1E",fontSize:"12px"}}>About Us</p>
            <p style={{color:"#1E1E1E",fontSize:"12px"}}>Our Pricing</p>
            <p style={{color:"#1E1E1E",fontSize:"12px"}}>Our Gallery</p>
            <p style={{color:"#1E1E1E",fontSize:"12px"}}>Appointment</p>
            <p style={{color:"#1E1E1E",fontSize:"12px"}}>About Us</p>
            <p style={{color:"#1E1E1E",fontSize:"12px"}}>Privacy Policy</p>
        </div>

        <div className="d-sm-block foooter-responsive">
        <p style={{color:"#1E1E1E",fontSize:"12px"}}>Services</p>
        <p style={{color:"#1E1E1E",fontSize:"12px"}}>Our Doctors</p>
        <p style={{color:"#1E1E1E",fontSize:"12px"}}>Our Latest News</p>
        <p style={{color:"#1E1E1E",fontSize:"12px"}}>Careers</p>
        <p style={{color:"#1E1E1E",fontSize:"12px"}}>Contact Us</p>
        </div>
        <div className="d-sm-block foooter-responsive">
            <p className="secondary">Opening Hours</p>
            <p style={{fontSize:"12px"}}> <span className="text-primary me-2">Mon- Tue</span> <span style={{color:"#575757"}}>08:00 AM- 05:00 PM</span></p>
            <p style={{fontSize:"12px"}}> <span className="text-primary me-2">Wed- Thu</span> <span style={{color:"#575757"}}>09:00 AM- 06:00 PM</span></p>
            <p style={{fontSize:"12px"}}> <span className="text-primary me-2">Fri- Sat</span> <span style={{color:"#575757"}}>10:00 AM- 07:00 PM</span></p>
            <p style={{fontSize:"12px"}}> <span className="text-primary me-2">Sunday</span> <span style={{color:"#575757"}}>Emergency Only</span></p>
            <p style={{fontSize:"12px"}}> <span className="text-primary me-2">Personal</span> <span style={{color:"#575757"}}>Mon- 05:00 PM</span></p>
        </div>
      </div>
      <span className="foo" style={{color:"#575757"}}>Copyright @222 Medicom All Rights Reserved</span>
    </div>
  );
};

export default Footer;
