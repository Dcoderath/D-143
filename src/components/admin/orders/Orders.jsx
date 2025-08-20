import React from "react";
import "./Orders.css";

const Orders = () => {
  const orders = [
    {
      orderId: "001",
      customerName: "John Doe",
      orderDate: "2025-04-19 10:30 AM",
      productName: "Wireless Headphones",
      quantity: 1,
      unitPrice: "$99.99",
      totalAmount: "$99.99",
      deliveryAddress: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      phone: "123-456-7890",
      email: "john@example.com",
      paymentMethod: "Credit Card",
      orderStatus: "Shipped",
      trackingNumber: "TRK123456",
      courierService: "FedEx",
      deliveryInstructions: "Leave at front door",
    },
  ];

  return (
    <div className="orders-container">
      <div className="table-wrapper">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Name</th>
              <th>Time</th>
              <th>Product</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th>Total</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>ZIP</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Tracking #</th>
              <th>Courier</th>
              <th>Instructions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td contentEditable suppressContentEditableWarning={true}>
                  {order.orderId}
                </td>
                <td contentEditable suppressContentEditableWarning={true}>
                  {order.customerName}
                </td>
                <td contentEditable suppressContentEditableWarning={true}>
                  {order.orderDate}
                </td>
                <td contentEditable suppressContentEditableWarning={true}>
                  {order.productName}
                </td>
                <td contentEditable suppressContentEditableWarning={true}>
                  {order.quantity}
                </td>
                <td contentEditable suppressContentEditableWarning={true}>
                  {order.unitPrice}
                </td>
                <td contentEditable suppressContentEditableWarning={true}>
                  {order.totalAmount}
                </td>
                <td contentEditable suppressContentEditableWarning={true}>
                  {order.deliveryAddress}
                </td>
                <td contentEditable suppressContentEditableWarning={true}>
                  {order.city}
                </td>
                <td contentEditable suppressContentEditableWarning={true}>
                  {order.state}
                </td>
                <td contentEditable suppressContentEditableWarning={true}>
                  {order.zip}
                </td>
                <td contentEditable suppressContentEditableWarning={true}>
                  {order.phone}
                </td>
                <td contentEditable suppressContentEditableWarning={true}>
                  {order.email}
                </td>
                <td contentEditable suppressContentEditableWarning={true}>
                  {order.paymentMethod}
                </td>
                <td contentEditable suppressContentEditableWarning={true}>
                  {order.orderStatus}
                </td>
                <td contentEditable suppressContentEditableWarning={true}>
                  {order.trackingNumber}
                </td>
                <td contentEditable suppressContentEditableWarning={true}>
                  {order.courierService}
                </td>
                <td contentEditable suppressContentEditableWarning={true}>
                  {order.deliveryInstructions}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
