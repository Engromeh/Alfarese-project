import React from "react";
import logo from "../../../Images/alfares_headar_logo 1.png";
import fasebook from "../../../Images/bx_bxl-facebook.svg";
import insta from "../../../Images/bx_bxl-instagram-alt.svg";
import twater from "../../../Images/akar-icons_twitter-fill.svg";
import sendd from "../../../Images/carbon_send.svg";

const Footer = () => {
  return (
    <footer
      className="text-white py-5 px-5 w-100 text-center text-md-start"
      style={{ backgroundColor: "#171a28", padding: "20px" }}
    >
      <div className="container-fluid">
        <div className="row text-center text-md-start">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
              <img src={logo} alt="ALFARES Logo" className="me-2" width="50" height="50" />
              <br />
              <h5 className="mb-0" style={{fontFamily: "Poppins" , fontSize:"16px" ,  color:"#D9D9D9"}}>Marketing <br /> Agency</h5>
            </div>
            <p  style={{fontFamily: "Poppins" , fontSize:"16px" , color:"#D9D9D9"}}>
              Marketing is the key to success. <br /> Understand your customers,<br/> show your value,
              and build lasting loyalty.
            </p>
            <div className="d-flex " style={{gap:"10%" , marginTop:"45px"}}>
              <img src={insta} alt="Instagram" width="24" height="24" />
              <img src={fasebook} alt="Facebook" width="24" height="24" />
              <img src={twater} alt="Twitter" width="24" height="24" />
            </div>
          </div>
          <br />
          <div className="col-lg-2 col-md-6 col-sm-12 mt-4 mt-md-0">
            <p style={{fontFamily: "Poppins" , fontSize:"20px" ,  color:"#D9D9D9"}}>About</p>
            <ul className="list-unstyled " style={{fontFamily: "Poppins" , fontSize:"16px" ,  color:"#D9D9D9"}}>
              <li className="liinfooter" >About Us</li>
              
              <li className="liinfooter">Features</li>
              
              <li className="liinfooter">News</li>
              
              <li className="liinfooter">Menu</li>
            </ul>
          </div>
          <br />
          <div className="col-lg-2 col-md-6 col-sm-12 mt-4 mt-lg-0" >
            <p style={{fontFamily: "Poppins" , fontSize:"20px" ,  color:"#D9D9D9"}}>Company</p>
            <ul className="list-unstyled " style={{fontFamily: "Poppins" , fontSize:"16px" ,  color:"#D9D9D9"}}>
              <li className="liinfooter" >Why Fudo?</li>
              
              <li className="liinfooter">Partner With Us</li>
              
              <li className="liinfooter" >FAQ</li>
              
              <li className="liinfooter">Blog</li>
            </ul>
          </div>
          <br />
          <div className="col-lg-2 col-md-6 col-sm-12 mt-4 mt-lg-0">
            <p style={{fontFamily: "Poppins" , fontSize:"20px" ,  color:"#D9D9D9"}}>Support</p>
            
            <ul className="list-unstyled " style={{fontFamily: "Poppins" , fontSize:"16px" ,  color:"#D9D9D9"}}>
              <li className="liinfooter">Account</li>
              
              <li className="liinfooter" >Support Center</li>
              
              <li className="liinfooter">Feedback</li>
              
              <li className="liinfooter">Contact Us</li>
              
              <li className="liinfooter">Accessibility</li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-12 mt-4 mt-lg-0">
            <p style={{fontFamily: "Poppins" , fontSize:"20px" ,  color:"#D9D9D9"}}>Get in Touch</p>
            <p style={{fontFamily: "Poppins" , fontSize:"18px" ,  color:"#D9D9D9"}}>
              Question or feedback? <br /> <br /> We'd love to hear from you.
            </p>
            <div
              className="d-flex align-items-center justify-content-center px-3 py-2"
              style={{ border: "2px #D9D9D933 solid", borderRadius: "20px" }}
            >
              <input
                type="email"
                placeholder="Send Email"
                className="border-0 bg-transparent text-white fw-bold me-2 p-2 w-100 text-center"
                style={{ outline: "none" , fontFamily: "Poppins" , fontSize:"16px" ,  color:"#D9D9D9"}}
              />
              <img src={sendd} alt="Send" width="20" height="20" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
