import React, { useEffect, useState } from "react";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [placeOrder, setPlaceOrder] = useState({});

  useEffect(() => {
    fetch("https://pacific-bayou-55573.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, [orders]);

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

  const handlePlaceOrderChange = (id) => {
    const url = `https://pacific-bayou-55573.herokuapp.com/orders/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPlaceOrder(data);
      });

    /* const updatedOrder = {
      name: orders.name,
       order.serviceName
    } */
    placeOrder.status = "Approved";

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(placeOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Successfully Order placed");
        }
      });
  };

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
                <p>
                  Status: <span className="text-info">{order.status}...</span>
                </p>
                <button
                  className="btn-info text-light rounded-3 m-2"
                  onClick={() => handleDeleteAnUser(order._id)}
                >
                  Delete
                </button>
                <button
                  onClick={() => handlePlaceOrderChange(order._id)}
                  className="btn-info text-light rounded-3 m-2"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAllOrders;
