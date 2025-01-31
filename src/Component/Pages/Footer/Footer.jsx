import React from "react";
import logo from "../../../Images/alfares_headar_logo 1.png";
const Footer = () => {
  return (
    <>
      <footer className=" text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-end">
              <div className="d-flex align-items-center justify-content-end">
                <img src={logo} alt="لوجو" className="ms-3" width="50" />
                <h5 className="m-0">Marketing Agency</h5>
              </div>
              <p className="mt-3">
                {" "}
                Marketing is the key to success. Understand your customers, show
                your value, and build lasting loyalty.
              </p>
              <div className="d-flex justify-content-end gap-2">
                <i className="bi bi-facebook fs-4"></i>
                <i className="bi bi-instagram fs-4"></i>
                <i className="bi bi-twitter fs-4"></i>
                <i className="bi bi-linkedin fs-4"></i>
              </div>
            </div>
            <div className="col-md-2 text-end">
              <h5>About</h5>
              <ul className="list-unstyled">
                <li>About Us</li>
                <li>Features</li>
                <li>News</li>
                <li>Menu</li>
              </ul>
            </div>
            <div className="col-md-2 text-end">
              <h5>Company</h5>
              <ul className="list-unstyled">
                <li>Why Fudo?</li>
                <li>Partner With Us</li>
                <li>FAQ</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="col-md-2 text-end">
              <h5>Support</h5>{" "}
              <ul className="list-unstyled">
                <li>Account</li>
                <li>Support Center</li>
                <li>Reviewed nutrition</li>
                <li>Contact Us</li>
                <li>Accessibility</li>
              </ul>
            </div>
            <div className="col-md-3 text-end">
              <h5>Get in Touch</h5>
              <p>Question or feedback? We'd love to hear from you.</p>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Addres"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
