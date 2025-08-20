import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google'; // ✅ NEW

import Home from "./components/Home/Home";
import OrkenWorld from "./components/OrkenWorld/OrkenWorld";
import Plusup from "./components/Plusup/Plusup";
import SignatureLegacy from "./components/SignatureLegacy/SignatureLegacy";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Loading from "./components/loading/loading";
import Grid from './components/Grid/Grid';
import AdminDashboard from "./components/admin/dashboard/Dashboard";
// import "./index.css";
import "./App.css"

function App() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const [expanded, setExpanded] = useState(false);
  const [loadingDone, setLoadingDone] = useState(false);
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("hasLoaded")) {
      sessionStorage.setItem("hasLoaded", "true");
      setFirstLoad(true);
    } else {
      setFirstLoad(false);
    }
  }, []);

  useEffect(() => {
    setLoadingDone(!firstLoad);
  }, [firstLoad]);

  useEffect(() => {
    if (inView) setExpanded(true);
  }, [inView]);

  return (
    <GoogleOAuthProvider clientId="666053885982-2v6imu45rh8ffbs054a6oag930ogffjs.apps.googleusercontent.com"> {/* ✅ Replace with your actual Client ID */}
      <div className="app-container">
        {firstLoad && !loadingDone && <Loading onFinish={() => setLoadingDone(true)} />}

        {loadingDone && (
          <Router>
            <div className="Navbar">
              <Navbar />
            </div>

            <Routes>
              <Route path="/grid" element={<Grid />} />
              <Route path="/admin" element={<AdminDashboard />} />

              <Route
                path="/"
                element={
                  <>
                    <div className="home-container">
                      <Home />
                    </div>

                    <motion.div
                      ref={ref}
                      className="orken-container"
                      initial={{
                        width: "80%",
                        borderRadius: "30px",
                        left: "10%",
                      }}
                      animate={{
                        width: expanded ? "100%" : "80%",
                        borderRadius: expanded ? "0px" : "30px",
                        left: expanded ? "0%" : "10%",
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                    >
                      <OrkenWorld />
                    </motion.div>

                    <div className="Plusup">
                      <Plusup />
                    </div>

                    <div className="SignatureLegacy">
                      <SignatureLegacy />
                    </div>

                    <div className="Footer">
                      <Footer />
                    </div>
                  </>
                }
              />
            </Routes>
          </Router>
        )}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;


// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Home from "./components/Home/Home";
// import OrkenWorld from "./components/OrkenWorld/OrkenWorld";
// import Plusup from "./components/Plusup/Plusup";
// import SignatureLegacy from "./components/SignatureLegacy/SignatureLegacy";
// import Footer from "./components/Footer/Footer";
// import Navbar from "./components/Navbar/Navbar";
// import Loading from "./components/loading/loading";
// import Grid from './components/Grid/Grid';
// import AdminDashboard from "./components/admin/dashboard/Dashboard"; // ✅ NEW

// import "./index.css";

// function App() {
//   const { ref, inView } = useInView({ threshold: 0.1 });

//   const [expanded, setExpanded] = useState(false);
//   const [loadingDone, setLoadingDone] = useState(false);
//   const [firstLoad, setFirstLoad] = useState(false);

//   useEffect(() => {
//     if (!sessionStorage.getItem("hasLoaded")) {
//       sessionStorage.setItem("hasLoaded", "true");
//       setFirstLoad(true);
//     } else {
//       setFirstLoad(false);
//     }
//   }, []);

//   useEffect(() => {
//     setLoadingDone(!firstLoad);
//   }, [firstLoad]);

//   useEffect(() => {
//     if (inView) setExpanded(true);
//   }, [inView]);

//   return (
//     <div className="app-container">
//       {firstLoad && !loadingDone && <Loading onFinish={() => setLoadingDone(true)} />}

//       {loadingDone && (
//         <Router>
//           <div className="Navbar">
//             <Navbar />
//           </div>

//           <Routes>
//             <Route path="/grid" element={<Grid />} />
//             <Route path="/admin" element={<AdminDashboard />} /> {/* ✅ NEW ADMIN ROUTE */}

//             <Route
//               path="/"
//               element={
//                 <>
//                   <div className="home-container">
//                     <Home />
//                   </div>

//                   <motion.div
//                     ref={ref}
//                     className="orken-container"
//                     initial={{
//                       width: "80%",
//                       borderRadius: "30px",
//                       left: "10%",
//                     }}
//                     animate={{
//                       width: expanded ? "100%" : "80%",
//                       borderRadius: expanded ? "0px" : "30px",
//                       left: expanded ? "0%" : "10%",
//                     }}
//                     transition={{
//                       duration: 0.6,
//                       ease: "easeInOut",
//                     }}
//                   >
//                     <OrkenWorld />
//                   </motion.div>

//                   <div className="Plusup">
//                     <Plusup />
//                   </div>

//                   <div className="SignatureLegacy">
//                     <SignatureLegacy />
//                   </div>

//                   <div className="Footer">
//                     <Footer />
//                   </div>
//                 </>
//               }
//             />
//           </Routes>
//         </Router>
//       )}
//     </div>
//   );
// }

// export default App;













// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// import Home from "./components/Home/Home";
// import OrkenWorld from "./components/OrkenWorld/OrkenWorld";
// import Plusup from "./components/Plusup/Plusup";
// import SignatureLegacy from "./components/SignatureLegacy/SignatureLegacy";
// import Footer from "./components/Footer/Footer";
// import Navbar from "./components/Navbar/Navbar";
// import Loading from "./components/loading/loading";

// import "./index.css";

// function App() {
//   const { ref, inView } = useInView({ threshold: 0.1 });

//   const [expanded, setExpanded] = useState(false);
//   const [loadingDone, setLoadingDone] = useState(false); // Wait until reveal finishes

//   useEffect(() => {
//     if (inView) {
//       setExpanded(true);
//     }
//   }, [inView]);

//   return (
//     <div className="app-container">
//       {/* Show loading screen until finished */}
//       {!loadingDone && <Loading onFinish={() => setLoadingDone(true)} />}

//       {/* Website only appears when loading animation finishes */}
//       {loadingDone && (
//         <>
//           <div className="Navbar">
//             <Navbar />
//           </div>

//           <div className="home-container">
//             <Home />
//           </div>

//           <motion.div
//             ref={ref}
//             className="orken-container"
//             initial={{
//               width: "80%",
//               borderRadius: "30px",
//               left: "10%",
//             }}
//             animate={{
//               width: expanded ? "100%" : "80%",
//               borderRadius: expanded ? "0px" : "30px",
//               left: expanded ? "0%" : "10%",
//             }}
//             transition={{
//               duration: 0.6,
//               ease: "easeInOut",
//             }}
//           >
//             <OrkenWorld />
//           </motion.div>

//           <div className="Plusup">
//             <Plusup />
//           </div>

//           <div className="SignatureLegacy">
//             <SignatureLegacy />
//           </div>

//           <div className="Footer">
//             <Footer />
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default App;











// import DevCard from "./components/DevCard/DevCard";
// import Home from "./components/Home/Home";
// import Noyatex from "./components/noyatex/noyatex";
// import OrkenWorld from "./components/OrkenWorld/OrkenWorld";

// import Plusup from "./components/Plusup/Plusup";
// import SpiralImg from "./components/SpiralImg/SpiralImg";

// import "./index.css";

// function App() {
//   return (
//     <>
//       {/* <div className="home">
//         <Home />
//       </div>
     
//       <div className="orken-world">
//         <OrkenWorld />
//       </div>
//       <div className="dev-card">
//         <DevCard />
//       </div> */}
//       {/* <SpiralImg /> */}
//       {/* <Noyatex /> */}
//       {/* <DevCard /> */}
//       { < Plusup />}
      
//     </>
//   );
// }

// export default App;
















// import { useEffect, useState } from "react";
// import DevCard from "./components/DevCard/DevCard";
// import Home from "./components/Home/Home";
// import OrkenWorld from "./components/OrkenWorld/OrkenWorld";
// import SpiralImg from "./components/SpiralImg/SpiralImg";
// import "./index.css";

// function App() {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <div className="home">
//         <Home />
//       </div>
//       <div
//         className="spiral-img"
//         style={{ transform: `rotate(${scrollY / 5}deg)` }}
//       >
//         <SpiralImg />
//       </div>
//       <div
//         className="orken-world"
//         style={{ opacity: scrollY > 300 ? 1 : 0 }}
//       >
//         <OrkenWorld />
//       </div>
//       <div
//         className="dev-card"
//         style={{
//           opacity: scrollY > 600 ? 1 : 0,
//           transform: scrollY > 600 ? "translateY(0)" : "translateY(50px)",
//         }}
//       >
//         <DevCard />
//       </div>
//     </>
//   );
// }

// export default App;
