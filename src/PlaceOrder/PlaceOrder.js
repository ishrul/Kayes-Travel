import React, { useEffect, useState } from "react";
import "./PlaceOrder.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import { useParams } from "react-router";

const PlaceOrder = () => {
  const [service, setService] = useState([]);
  const { user } = useAuth();
  const { serviceId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.serviceName = service.name;
    console.log(data);
    axios.post("http://localhost:8000/orders", data).then((res) => {
      console.log(res);
      if (res.data.insertedId) {
        alert("Successfully Order Placed");
        reset();
      }
    });
  };

  /* const orderedService = services.filter(
    (service) => service._id === serviceId
  ); */

  return (
    <div className="m-top place-order">
      <h3>Place Your Order</h3>
      <h4 className="my-3">Service Name: {service.name}</h4>
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
        <input className="btn-info fw-bold text-white" type="submit" />
      </form>
    </div>
  );
};

export default PlaceOrder;
