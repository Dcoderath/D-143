import React, { useEffect, useState } from "react";
import './Customers.css'; // Import the updated CSS

const Customers = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Retrieve logged-in user data from localStorage
    const userData = localStorage.getItem("loggedInUser");
    if (userData) {
      setLoggedInUser(JSON.parse(userData)); // If user is logged in, set their data to state
    }
  }, []);

  const handleLogout = () => {
    // Remove user from localStorage and update the state
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null); // Clear the logged-in user data
    alert("Logged out successfully");
  };

  return (
    <div className="customer-container">
      <h2 className="customer-heading">Customer List</h2>

      {loggedInUser ? (
        // Only show if the user is logged in
        <table className="customer-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr key={loggedInUser.id}>
              <td>{loggedInUser.name}</td>
              <td>{loggedInUser.email}</td>
              <td>
                {/* Logout button for the logged-in user */}
                <button onClick={handleLogout} className="customer-logout-btn">
                  Logout
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p className="customer-no-user">No user is currently logged in.</p>
      )}
    </div>
  );
};

export default Customers;
