import React from "react";
import logo from "../../../Images/alfares_headar_logo 1.png";
import fasebook from "../../../Images/bx_bxl-facebook.svg";
import insta from "../../../Images/bx_bxl-instagram-alt.svg";
import twater from "../../../Images/akar-icons_twitter-fill.svg";
import sendd from "../../../Images/carbon_send.svg";

const Footer = () => {
  return (
    <footer
      className="text-white py-5 px-3 w-100"
      style={{ backgroundColor: "#171a28" }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 text-center text-md-start">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3" >
              <img
                src={logo}
                alt="ALFARES Logo"
                className="me-2"
                width="50"
                height="50"
              />
              <h5 className="mb-0">
                Marketing <br />
                Agency
              </h5>
            </div>

            <p className="text-white">
              Marketing is the key to success. <br />
              Understand your customers,<br/> show your value,
               and build lasting
              loyalty.
            </p>

            <div className="d-flex gap-4 justify-content-center justify-content-md-start">
              <img src={insta} alt="Instagram" width="24" height="24" />
              <img src={fasebook} alt="Facebook" width="24" height="24" />
              <img src={twater} alt="Twitter" width="24" height="24" />
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-12 mt-4 mt-md-0">
            <h6>About</h6>
            <br />
            <ul className="list-unstyled text-white">
              <li>About Us</li>
              <br />
              <li>Features</li>
              <br />
              <li>News</li>
              <br />
              <li>Menu</li>
              <br />
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-12 mt-4 mt-lg-0">
            <h6>Company</h6>
            <br />
            <ul className="list-unstyled text-white">
              <li>Why Fudo?</li>
              <br />
              <li>Partner With Us</li>
              <br />
              <li>FAQ</li>
              <br />
              <li>Blog</li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-12 mt-4 mt-lg-0">
            <h6>Support</h6>
            <br />
            <ul className="list-unstyled text-white">
              <li>Account</li>
              <br />
              <li>Support Center</li>
              <br />
              <li>Feedback</li>
              <br />
              <li>Contact Us</li>
              <br />
              <li>Accessibility</li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-12 mt-4 mt-lg-0">
            <h6>Get in Touch</h6>
            <br />
            <p className="text-white">
              Question or feedback? <br />
              <br />
              We'd love to hear from you.
            </p>
            <div
              className="d-flex align-items-center justify-content-center justify-content-md-start px-3 py-2"
              style={{ border: "2px #D9D9D933 solid", borderRadius: "20px" }}
            >
              <input
                type="email"
                placeholder="Send Email"
                className="border-0 bg-transparent text-white fw-bold me-2 p-2 w-100"
                style={{ outline: "none" }}
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
