import React, { useState } from "react";
import LoginPage from "../LoginPage/LoginPage"; // Import LoginPage
import Customers from "../admin/customers/Customers"; // Import Customers component

const ParentComponent = () => {
  // State to hold logged-in users
  const [users, setUsers] = useState([]);

  // Function to handle user login from Google
  const handleUserLogin = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]); // Add new logged-in user to the list
  };

  return (
    <div>
      {/* Render the LoginPage and pass the login handler */}
      <LoginPage onClose={() => console.log("Close Login")} onUserLogin={handleUserLogin} />
      
      {/* Render Customers component and pass the list of users */}
      <Customers users={users} />
    </div>
  );
};

export default ParentComponent;
