// import React, { useState, useEffect } from "react";
// import "./Dashboard.css";
// import Orders from "../orders/Orders";
// import Customers from "../customers/Customers";
// import Products from "../products/Products";

// import { FaTachometerAlt, FaShoppingCart, FaUsers, FaBoxOpen } from "react-icons/fa";
// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// // Register chart.js components
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const Dashboard = () => {
//   const [selectedSection, setSelectedSection] = useState("dashboard");
//   const [data, setData] = useState([]);

//   // Fetch the data (simulating monthly data for Profit, Sales, and Expenses)
//   useEffect(() => {
//     const fetchData = () => {
//       const monthlyData = [
//         { month: "January", profit: Math.random() * 1000 + 500, sales: Math.random() * 2000 + 1000, expenses: Math.random() * 500 + 200 },
//         { month: "February", profit: Math.random() * 1000 + 500, sales: Math.random() * 2000 + 1000, expenses: Math.random() * 500 + 200 },
//         { month: "March", profit: Math.random() * 1000 + 500, sales: Math.random() * 2000 + 1000, expenses: Math.random() * 500 + 200 },
//         { month: "April", profit: Math.random() * 1000 + 500, sales: Math.random() * 2000 + 1000, expenses: Math.random() * 500 + 200 },
//         { month: "May", profit: Math.random() * 1000 + 500, sales: Math.random() * 2000 + 1000, expenses: Math.random() * 500 + 200 },
//         { month: "June", profit: Math.random() * 1000 + 500, sales: Math.random() * 2000 + 1000, expenses: Math.random() * 500 + 200 },
//         { month: "July", profit: Math.random() * 1000 + 500, sales: Math.random() * 2000 + 1000, expenses: Math.random() * 500 + 200 },
//         { month: "August", profit: Math.random() * 1000 + 500, sales: Math.random() * 2000 + 1000, expenses: Math.random() * 500 + 200 },
//         { month: "September", profit: Math.random() * 1000 + 500, sales: Math.random() * 2000 + 1000, expenses: Math.random() * 500 + 200 },
//         { month: "October", profit: Math.random() * 1000 + 500, sales: Math.random() * 2000 + 1000, expenses: Math.random() * 500 + 200 },
//         { month: "November", profit: Math.random() * 1000 + 500, sales: Math.random() * 2000 + 1000, expenses: Math.random() * 500 + 200 },
//         { month: "December", profit: Math.random() * 1000 + 500, sales: Math.random() * 2000 + 1000, expenses: Math.random() * 500 + 200 },
//       ];
//       setData(monthlyData);
//     };

//     fetchData();
//   }, []);

//   // Ensure the data is properly set by logging it
//   useEffect(() => {
//     console.log("Data: ", data);  // Log to check if data is populated
//   }, [data]);

//   // Prepare chart data
//   const chartData = {
//     labels: data.map((data) => data.month), // Months (January, February, etc.)
//     datasets: [
//       {
//         label: "Profit (₹)",
//         data: data.map((data) => data.profit), // Monthly profit values
//         borderColor: "rgba(75, 192, 192, 1)",
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         fill: true,
//       },
//       {
//         label: "Sales (₹)",
//         data: data.map((data) => data.sales), // Monthly sales values
//         borderColor: "rgba(153, 102, 255, 1)",
//         backgroundColor: "rgba(153, 102, 255, 0.2)",
//         fill: true,
//       },
//       {
//         label: "Expenses (₹)",
//         data: data.map((data) => data.expenses), // Monthly expenses values
//         borderColor: "rgba(255, 99, 132, 1)",
//         backgroundColor: "rgba(255, 99, 132, 0.2)",
//         fill: true,
//       },
//     ],
//   };

//   // Chart options
//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       title: {
//         display: true,
//         text: "Profit, Sales, and Expenses Per Month",
//       },
//       tooltip: {
//         mode: 'index',
//         intersect: false,
//       },
//     },
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Month',
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Amount (₹)',
//         },
//       },
//     },
//   };

//   const sections = [
//     { name: "Dashboard", id: "dashboard", icon: <FaTachometerAlt /> },
//     { name: "Orders", id: "orders", icon: <FaShoppingCart /> },
//     { name: "Customers", id: "customers", icon: <FaUsers /> },
//     { name: "Products", id: "products", icon: <FaBoxOpen /> },
//   ];

//   const renderContent = () => {
//     switch (selectedSection) {
//       case "orders":
//         return <Orders />;
//       case "customers":
//         return <Customers />;
//       case "products":
//         return <Products />;
//       default:
//         return (
//           <div>
//             <h1>Welcome to the Dashboard</h1>
//             <p>Select a section from the sidebar</p>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-sidebar">
//         <nav className="dashboard-sidebar-nav">
//           {sections.map((section) => (
//             <button
//               key={section.id}
//               className={`dashboard-nav-button ₹{selectedSection === section.id ? "active" : ""}`}
//               onClick={() => setSelectedSection(section.id)}
//             >
//               <span className="dashboard-nav-icon">{section.icon}</span>
//               {section.name}
//             </button>
//           ))}
//         </nav>
//       </div>

//       <div className="dashboard-main-content">
//         {selectedSection === "dashboard" && (
//           <div className="dashboard-main-left">
//             <div className="dashboard-top-box">
//               <h2>Monthly Profit, Sales, and Expenses Chart</h2>
//               {/* Ensure chart is only rendered after data is fetched */}
//               {data.length > 0 ? (
//                 <div className="profit-chart">
//                   <Line data={chartData} options={chartOptions} />
//                 </div>
//               ) : (
//                 <p>Loading chart...</p> // Show loading message while data is being fetched
//               )}
//             </div>
//             <div className="dashboard-bottom-box">Bottom Box</div>
//           </div>
//         )}
//         <div className={`dashboard-main-right ₹{selectedSection !== "dashboard" ? "full-width" : ""}`}>
//           {renderContent()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Orders from "../orders/Orders";
import Customers from "../customers/Customers";
import Products from "../products/Products";

import { FaTachometerAlt, FaShoppingCart, FaUsers, FaBoxOpen } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState("dashboard");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const monthlyData = months.map((month) => ({
        month,
        profit: Math.random() * 1000 + 500,
        sales: Math.random() * 2000 + 1000,
        expenses: Math.random() * 500 + 200,
      }));
      setData(monthlyData);
    };
    fetchData();
  }, []);

  const totalProfit = data.reduce((total, item) => total + item.profit, 0).toFixed(2);
  const totalSales = data.reduce((total, item) => total + item.sales, 0).toFixed(2);
  const totalExpenses = data.reduce((total, item) => total + item.expenses, 0).toFixed(2);

  const chartData = {
    labels: data.map((data) => data.month),
    datasets: [
      {
        label: "Profit (₹)",
        data: data.map((data) => data.profit),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        label: "Sales (₹)",
        data: data.map((data) => data.sales),
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
      },
      {
        label: "Expenses (₹)",
        data: data.map((data) => data.expenses),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Profit, Sales, and Expenses Per Month",
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Amount (₹)',
        },
      },
    },
  };

  const sections = [
    { name: "Dashboard", id: "dashboard", icon: <FaTachometerAlt /> },
    { name: "Orders", id: "orders", icon: <FaShoppingCart /> },
    { name: "Customers", id: "customers", icon: <FaUsers /> },
    { name: "Products", id: "products", icon: <FaBoxOpen /> },
  ];

  const renderContent = () => {
    switch (selectedSection) {
      case "orders":
        return <Orders />;
      case "customers":
        return <Customers />;
      case "products":
        return <Products />;
      default:
        return (
          <div>
         
          </div>
        );
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <nav className="dashboard-sidebar-nav">
          {sections.map((section) => (
            <button
              key={section.id}
              className={`dashboard-nav-button ₹{selectedSection === section.id ? "active" : ""}`}
              onClick={() => setSelectedSection(section.id)}
            >
              <span className="dashboard-nav-icon">{section.icon}</span>
              {section.name}
            </button>
          ))}
        </nav>
      </div>

      <div className="dashboard-main-content">
        {selectedSection === "dashboard" && (
          <div className="dashboard-main-left">
            <div className="dashboard-top-box">

              {data.length > 0 ? (
                <div className="profit-chart">
                  <Line data={chartData} options={chartOptions} />
                </div>
              ) : (
                <p>Loading chart...</p>
              )}
            </div>
            <div className="dashboard-bottom-box">
              <h3>Total Values</h3>
              <div className="total-cards">
                <div className="total-card profit">
                  <h4>Profit</h4>
                  <p>₹{totalProfit}</p>
                </div>
                <div className="total-card sales">
                  <h4>Sales</h4>
                  <p>₹{totalSales}</p>
                </div>
                <div className="total-card expenses">
                  <h4>Expenses</h4>
                  <p>₹{totalExpenses}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={`dashboard-main-right ₹{selectedSection !== "dashboard" ? "full-width" : ""}`}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
