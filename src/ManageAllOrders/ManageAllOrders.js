import React, { useEffect, useState } from "react";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/orders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, []);

  return (
    <div className="m-top">
      <h2 className="text-info fw-bold">Manage All Orders</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {orders.map((order) => (
          <div key={order._id}>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">{order.serviceName}</h3>
                  <h6 className="card-title">{order.name}</h6>
                  <p className="card-text">{order.email}</p>
                  <p className="card-text">Address: {order.address}</p>
                </div>
                <button>Delete</button>
                <button>Place</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAllOrders;
