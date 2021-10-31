import React, { useEffect, useState } from "react";
import "./PlaceOrder.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const [service, setService] = useState([]);
  const { user } = useAuth();
  const { serviceId } = useParams();

  useEffect(() => {
    fetch(`https://pacific-bayou-55573.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.serviceName = service.name;
    console.log(data);
    axios
      .post("https://pacific-bayou-55573.herokuapp.com/orders", data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          alert("Successfully Added To Your orders");
          reset();
        }
      });
  };

  return (
    <div className="m-top place-order">
      <h3 className="text-info">Confirm Your Order</h3>
      <h4 className="my-3 text-light">Service Name: {service.name}</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue={user.displayName}
          {...register("name")}
          required
          placeholder="Enter Your Name"
        />
        <br />
        <br />
        <input
          defaultValue={user.email}
          {...register("email")}
          required
          placeholder="Enter Your Email"
        />
        <br />
        <br />
        <input
          {...register("address")}
          required
          placeholder="Enter your Address"
        />
        <br />
        <br />
        <input {...register("city")} required placeholder="Enter your City" />
        <br />
        <br />
        <input
          {...register("phone")}
          required
          placeholder="Enter your Phone Number"
        />
        <br />
        <br />
        <input className="btn-info fw-bold text-white my-3" type="submit" />
      </form>
      <Link className=" fw-bold" to="/myOrders">
        Want To See All Of Your Orders?
      </Link>
    </div>
  );
};

export default PlaceOrder;
