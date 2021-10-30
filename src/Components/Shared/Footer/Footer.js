import React from "react";
import "./Footer.css";
import {
  Facebook,
  Twitter,
  Instagram,
  Github,
  Envelope,
  PinMap,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="company-title">
          <h3>
            Kayes<span>Travel</span>
          </h3>

          <p className="footer-links">
            <a href="#">Home</a>·<a href="#">Blog</a>·<a href="#">Pricing</a>·
            <a href="#">About</a>·<a href="#">Faq</a>·<a href="#">Contact</a>
          </p>

          <p className="footer-company-name">KayesTravel &copy; 2021</p>
        </div>

        <div className="footer-center">
          <div>
            <PinMap className="icon" />
            <p>
              <span>2, Kulsi Nasirabad</span> Chittagong, Bangladesh.
            </p>
          </div>

          <div>
            <p>01608804831</p>
          </div>

          <div>
            {/* <i className="fa fa-envelope"></i> */}
            <Envelope className="icon e " />
            <p>
              <a href="mailto:isvskeyes360@gmail.com">isvskeyes360@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Kayes Travel is a travel website for travelling lovers.
          </p>

          <div className="footer-icons">
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Twitter></Twitter>
            </a>
            <a href="#">
              <Instagram></Instagram>
            </a>
            <a href="#">
              <Github></Github>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
