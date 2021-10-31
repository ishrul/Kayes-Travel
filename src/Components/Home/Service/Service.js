import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, description, _id } = service;
  return (
    <div className="service">
      <div className="container page-wrapper cols">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
                <img className="img" src={img} alt="" />
                <div className="img-info">
                  <div className="info-inner  ">
                    <span className="p-name text-info p-2">{name}</span>
                    <span className="p-company text-info p-2">
                      {description.slice(0, 50)}...
                    </span>
                  </div>
                </div>
              </div>

              <Link to={`/services/${_id}`}>
                <div className="box-down">
                  <div className="h-bg">
                    <div className="h-bg-inner"></div>
                  </div>
                  <a className="cart" href="#">
                    <span className="add-to-cart">
                      <span className="txt">Book Now</span>
                    </span>
                  </a>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
