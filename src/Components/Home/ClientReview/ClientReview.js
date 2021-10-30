import React from "react";
import "./ClientReview.css";
import { Facebook, Google, Linkedin, Twitter } from "react-bootstrap-icons";

const ClientReview = () => {
  return (
    <div className="client-container">
      <div className="container">
        <h3 className="fs-1 fw-bold text-info bg-dark py-3 mb-3 ">
          Our Best Clients
        </h3>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://picsum.photos/130/130?image=1027"
                />
              </div>
              <div className="team-content">
                <h3 className="name">Michele Miller</h3>
                <h4 className="title">
                  It was very memorable journey in Himalaya
                </h4>
              </div>
              <ul className="social">
                <li>
                  <a href="#" aria-hidden="true">
                    {" "}
                    <Facebook aria-hidden="true"></Facebook>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" aria-hidden="true">
                    <Twitter aria-hidden="true"></Twitter>
                  </a>
                </li>
                <li>
                  <a href="#" aria-hidden="true">
                    <Google aria-hidden="true"></Google>
                  </a>
                </li>
                <li>
                  <a href="#" aria-hidden="true">
                    <Linkedin aria-hidden="true"></Linkedin>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://picsum.photos/130/130?image=839"
                />
              </div>
              <div className="team-content">
                <h3 className="name">Patricia Knott</h3>
                <h4 className="title">
                  I can't imagine how glad the journey was!!!
                </h4>
              </div>
              <ul className="social">
                <li>
                  <a href="#" aria-hidden="true">
                    {" "}
                    <Facebook aria-hidden="true"></Facebook>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" aria-hidden="true">
                    <Twitter aria-hidden="true"></Twitter>
                  </a>
                </li>
                <li>
                  <a href="#" aria-hidden="true">
                    <Google aria-hidden="true"></Google>
                  </a>
                </li>
                <li>
                  <a href="#" aria-hidden="true">
                    <Linkedin aria-hidden="true"></Linkedin>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://picsum.photos/130/130?image=856"
                />
              </div>
              <div className="team-content">
                <h3 className="name">Justin Ramos</h3>
                <h4 className="title">
                  Paris trip was make me happy.They are so amazing!!!
                </h4>
              </div>
              <ul className="social">
                <li>
                  <a href="#" aria-hidden="true">
                    {" "}
                    <Facebook aria-hidden="true"></Facebook>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" aria-hidden="true">
                    <Twitter aria-hidden="true"></Twitter>
                  </a>
                </li>
                <li>
                  <a href="#" aria-hidden="true">
                    <Google aria-hidden="true"></Google>
                  </a>
                </li>
                <li>
                  <a href="#" aria-hidden="true">
                    <Linkedin aria-hidden="true"></Linkedin>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img
                  className="img-fluid"
                  src="https://picsum.photos/130/130?image=836"
                />
              </div>
              <div className="team-content">
                <h3 className="name">Mary Huntley</h3>
                <h4 className="title">
                  I enjoied the cox's bazar journey a lot!!
                </h4>
              </div>
              <ul className="social">
                <li>
                  <a href="#" aria-hidden="true">
                    {" "}
                    <Facebook aria-hidden="true"></Facebook>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" aria-hidden="true">
                    <Twitter aria-hidden="true"></Twitter>
                  </a>
                </li>
                <li>
                  <a href="#" aria-hidden="true">
                    <Google aria-hidden="true"></Google>
                  </a>
                </li>
                <li>
                  <a href="#" aria-hidden="true">
                    <Linkedin aria-hidden="true"></Linkedin>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
