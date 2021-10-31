import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./NewService.css";

const NewService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://pacific-bayou-55573.herokuapp.com/services", data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          alert("Successfully Added");
          reset();
        }
      });
  };

  return (
    <div className="new-service m-top  bg-dark pb-5 py-5">
      <h3 className="text-info fw-bold mb-5">Add a new service.</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Enter Service Name" />
        <br />
        <br />
        <textarea
          {...register("description")}
          placeholder="Enter Service Description"
        />
        <br />
        <br />
        <input
          className="px-2"
          type="number"
          {...register("price")}
          placeholder="Enter Service price"
        />
        <br />
        <br />
        <input {...register("img")} placeholder="Enter Service Img URL" />
        <br />
        <br />
        <input className="btn-info fw-bold text-light" type="submit" />
      </form>
    </div>
  );
};

export default NewService;
