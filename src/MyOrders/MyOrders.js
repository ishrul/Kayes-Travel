import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://pacific-bayou-55573.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, []);

  // DELETE AN USER
  const handleDeleteAnUser = (id) => {
    const proceed = window.confirm("Are You Sure, You Want To Delete?");
    if (proceed) {
      const url = `https://pacific-bayou-55573.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Successfully Deleted Your Order");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };

  const myOrders = orders.filter((order) => order.email === user.email);

  return (
    <div className="m-top">
      <h2 className="text-info fw-bold">My Orders</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {myOrders.map((order) => (
          <div key={order._id}>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">{order.serviceName}</h3>
                  <h6 className="card-title">{order.name}</h6>
                  <p className="card-text">{order.email}</p>
                  <p className="card-text">Address: {order.address}</p>
                </div>
                <p>
                  Status: <span className="text-info">{order.status}...</span>
                </p>
                <button
                  onClick={() => handleDeleteAnUser(order._id)}
                  className="btn-info text-light m-2 rounded-3"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
