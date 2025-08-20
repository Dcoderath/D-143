// import { useEffect, useState } from "react";
// import "./navbar.css";

// const CIRCLE_ANIMATION_DURATION = 600;

// const Navbar = () => {
//   const [active, setActive] = useState(false);
//   const [circleExpanded, setCircleExpanded] = useState(false);
//   const [hasMounted, setHasMounted] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setHasMounted(true);
//     }, 10);

//     return () => clearTimeout(timeout);
//   }, []);

//   const toggleMenu = () => {
//     if (!active) {
//       setCircleExpanded(true);
//       setTimeout(() => setActive(true), CIRCLE_ANIMATION_DURATION);
//     } else {
//       setActive(false);
//       setTimeout(() => setCircleExpanded(false), CIRCLE_ANIMATION_DURATION);
//     }
//   };

//   const scrollToSection = (id) => {
//     const element = document.querySelector(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       setActive(false);
//       setTimeout(() => setCircleExpanded(false), CIRCLE_ANIMATION_DURATION);
//     }
//   };

//   return (
//     <div
//       id="wrapper"
//       className={`${active ? "menu-open" : ""} ${!hasMounted ? "no-animation" : ""}`}
//     >
//       {/* Website Title */}
//       <div className="site-title">Notryax</div>

//       {/* Toggle Button */}
//       <button
//         className={`navbar-toggle ${active ? "active" : ""}`}
//         onClick={toggleMenu}
//         aria-label="Toggle navigation"
//         aria-expanded={active}
//       >
//         <svg viewBox="0 0 100 100" width={60}>
//           <path
//             className="line top"
//             d="M 30,33 H 70 C 70,33 79.044,32.345 79.044,23.491 79.044,15.637 70.976,11.542 64.1,12.643 57.225,13.742 50.637,20.858 50.637,32.368 V 70"
//           />
//           <path className="line middle" d="M 30,50 H 70" />
//           <path
//             className="line bottom"
//             d="M 30,67 H 70 C 82.796,67 85.358,55.282 85.358,40.149 85.358,25.015 80.614,12.726 68.733,12.726 56.852,12.726 50.501,19.721 50.501,30.656 L 50.754,70"
//           />
//         </svg>
//       </button>

//       {/* Navigation Menu */}
//       <nav className={`navbar ${active ? "show" : ""}`} aria-hidden={!active}>
//         <ul>
//           {[{ text: "Home", section: ".home-container" }, { text: "Card", section: ".Card" }].map(
//             (item, index) => (
//               <li key={item.text} style={{ transitionDelay: `${0.1 + index * 0.15}s` }}>
//                 <a
//                   data-text={item.text}
//                   onClick={() => scrollToSection(item.section)}
//                   role="button"
//                   tabIndex={active ? 0 : -1}
//                 >
//                   <span>{item.text}</span>
//                 </a>
//               </li>
//             )
//           )}
//           {/* Login Button */}
//           <li style={{ transitionDelay: "0.4s" }}>
//             <a
//               data-text="Login"
//               onClick={() => scrollToSection(".login-section")}
//               role="button"
//               tabIndex={active ? 0 : -1}
//             >
//               <span>Login</span>
//             </a>
//           </li>
//         </ul>
//       </nav>

//       {/* Expanding Circle */}
//       <div
//         id="bg-circle"
//         className={`${circleExpanded ? "expand" : ""} ${!hasMounted ? "no-animation" : ""}`}
//         aria-hidden="true"
//       />
//     </div>
//   );
// };

// export default Navbar;








// import { useEffect, useState } from "react";
// import LoginPage from '../LoginPage/LoginPage';  
// import Grid from '../Grid/Grid'; 
// import "./navbar.css";

// const CIRCLE_ANIMATION_DURATION = 600;

// const Navbar = () => {
//   const [active, setActive] = useState(false);
//   const [circleExpanded, setCircleExpanded] = useState(false);
//   const [hasMounted, setHasMounted] = useState(false);
//   const [showLoginPage, setShowLoginPage] = useState(false); // State to show the login page
//   const [showGridPage, setShowGridPage] = useState(false); // State to show the grid page

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setHasMounted(true);
//     }, 10);

//     return () => clearTimeout(timeout);
//   }, []);

//   const toggleMenu = () => {
//     if (!active) {
//       setCircleExpanded(true);
//       setTimeout(() => setActive(true), CIRCLE_ANIMATION_DURATION);
//     } else {
//       setActive(false);
//       setTimeout(() => setCircleExpanded(false), CIRCLE_ANIMATION_DURATION);
//     }
//   };

//   const scrollToSection = (id) => {
//     const element = document.querySelector(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       setActive(false);
//       setTimeout(() => setCircleExpanded(false), CIRCLE_ANIMATION_DURATION);
//     }
//   };

//   const openLoginPage = () => {
//     setShowLoginPage(true); // Show the login page when Login is clicked
//   };

//   const closeLoginPage = () => {
//     setShowLoginPage(false); // Close the login page when the close button is clicked
//   };

//   const openGridPage = () => {
//     setShowGridPage(true); // Show the Grid page when "Grid" is clicked
//     setActive(false); // Close the menu when "Grid" is clicked
//     setTimeout(() => setCircleExpanded(false), CIRCLE_ANIMATION_DURATION); // Close circle animation
//   };

//   const closeGridPage = () => {
//     setShowGridPage(false); // Close the Grid page when it's closed
//   };

//   return (
//     <div
//       id="wrapper"
//       className={`${active ? "menu-open" : ""} ${!hasMounted ? "no-animation" : ""}`}
//     >
//       {/* Website Title */}
//       <div className="site-title">Notryax</div>

//       {/* Toggle Button */}
//       <button
//         className={`navbar-toggle ${active ? "active" : ""}`}
//         onClick={toggleMenu}
//         aria-label="Toggle navigation"
//         aria-expanded={active}
//       >
//         <svg viewBox="0 0 100 100" width={60}>
//           <path
//             className="line top"
//             d="M 30,33 H 70 C 70,33 79.044,32.345 79.044,23.491 79.044,15.637 70.976,11.542 64.1,12.643 57.225,13.742 50.637,20.858 50.637,32.368 V 70"
//           />
//           <path className="line middle" d="M 30,50 H 70" />
//           <path
//             className="line bottom"
//             d="M 30,67 H 70 C 82.796,67 85.358,55.282 85.358,40.149 85.358,25.015 80.614,12.726 68.733,12.726 56.852,12.726 50.501,19.721 50.501,30.656 L 50.754,70"
//           />
//         </svg>
//       </button>

//       {/* Navigation Menu */}
//       <nav className={`navbar ${active ? "show" : ""}`} aria-hidden={!active}>
//         <ul>
//           {[{ text: "Home", section: ".home-container" }, { text: "Grid", section: ".grid-container" }].map(
//             (item, index) => (
//               <li key={item.text} style={{ transitionDelay: `${0.1 + index * 0.15}s` }}>
//                 <a
//                   data-text={item.text}
//                   onClick={item.text === "Home" ? () => scrollToSection(item.section) : openGridPage}
//                   role="button"
//                   tabIndex={active ? 0 : -1}
//                 >
//                   <span>{item.text}</span>
//                 </a>
//               </li>
//             )
//           )}
//           {/* Login Button */}
//           <li style={{ transitionDelay: "0.4s" }}>
//             <a
//               data-text="Login"
//               onClick={openLoginPage} // Open the login page
//               role="button"
//               tabIndex={active ? 0 : -1}
//             >
//               <span>Login</span>
//             </a>
//           </li>
//         </ul>
//       </nav>

//       {/* Expanding Circle */}
//       <div
//         id="bg-circle"
//         className={`${circleExpanded ? "expand" : ""} ${!hasMounted ? "no-animation" : ""}`}
//         aria-hidden="true"
//       />

//       {/* Show Login Page */}
//       {showLoginPage && <LoginPage onClose={closeLoginPage} />}

//       {/* Show Grid Page */}
//       {showGridPage && <Grid onClose={closeGridPage} />}
//     </div>
//   );
// };

// export default Navbar;






// import { useEffect, useState } from "react";
// import LoginPage from "../LoginPage/LoginPage";
// import "./navbar.css";

// const CIRCLE_ANIMATION_DURATION = 600;

// const Navbar = () => {
//   const [active, setActive] = useState(false);
//   const [circleExpanded, setCircleExpanded] = useState(false);
//   const [hasMounted, setHasMounted] = useState(false);
//   const [showLoginPage, setShowLoginPage] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setHasMounted(true);
//     }, 10);

//     return () => clearTimeout(timeout);
//   }, []);

//   const toggleMenu = () => {
//     if (!active) {
//       setCircleExpanded(true);
//       setTimeout(() => setActive(true), CIRCLE_ANIMATION_DURATION);
//     } else {
//       setActive(false);
//       setTimeout(() => setCircleExpanded(false), CIRCLE_ANIMATION_DURATION);
//     }
//   };

//   const scrollToSection = (id) => {
//     const element = document.querySelector(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       setActive(false);
//       setTimeout(() => setCircleExpanded(false), CIRCLE_ANIMATION_DURATION);
//     }
//   };

//   const openLoginPage = () => {
//     setShowLoginPage(true);
//   };

//   const closeLoginPage = () => {
//     setShowLoginPage(false);
//   };

//   const openGridPage = () => {
//     window.open("/grid", "_blank");
//     setActive(false);
//     setTimeout(() => setCircleExpanded(false), CIRCLE_ANIMATION_DURATION);
//   };

//   return (
//     <div
//       id="wrapper"
//       className={`${active ? "menu-open" : ""} ${!hasMounted ? "no-animation" : ""}`}
//     >
//       {/* Website Title */}
//       <div className="site-title">Notryax</div>

//       {/* Toggle Button */}
//       <button
//         className={`navbar-toggle ${active ? "active" : ""}`}
//         onClick={toggleMenu}
//         aria-label="Toggle navigation"
//         aria-expanded={active}
//       >
//         <svg viewBox="0 0 100 100" width={60}>
//           <path
//             className="line top"
//             d="M 30,33 H 70 C 70,33 79.044,32.345 79.044,23.491 79.044,15.637 70.976,11.542 64.1,12.643 57.225,13.742 50.637,20.858 50.637,32.368 V 70"
//           />
//           <path className="line middle" d="M 30,50 H 70" />
//           <path
//             className="line bottom"
//             d="M 30,67 H 70 C 82.796,67 85.358,55.282 85.358,40.149 85.358,25.015 80.614,12.726 68.733,12.726 56.852,12.726 50.501,19.721 50.501,30.656 L 50.754,70"
//           />
//         </svg>
//       </button>

//       {/* Navigation Menu */}
//       <nav className={`navbar ${active ? "show" : ""}`} aria-hidden={!active}>
//         <ul>
//           {/* Home */}
//           <li className="nav-home" style={{ transitionDelay: "0.2s" }}>
//             <a
//               data-text="Home"
//               onClick={() => scrollToSection(".home-container")}
//               role="button"
//               tabIndex={active ? 0 : -1}
//             >
//               <span>Home</span>
//             </a>
//           </li>

//           {/* Notebooks */}
//           <li className="nav-notebooks" style={{ transitionDelay: "0.4s" }}>
//             <a
//               data-text="NOTEBOOKS"
//               onClick={openGridPage}
//               role="button"
//               tabIndex={active ? 0 : -1}
//             >
//               <span>NOTEBOOKS</span>
//             </a>
//           </li>

//           {/* Login */}
//           <li className="nav-login" style={{ transitionDelay: "0.6s" }}>
//             <a
//               data-text="Login"
//               onClick={openLoginPage}
//               role="button"
//               tabIndex={active ? 0 : -1}
//             >
//               <span>Login</span>
//             </a>
//           </li>
//         </ul>
//       </nav>

//       {/* Expanding Circle */}
//       <div
//         id="bg-circle"
//         className={`${circleExpanded ? "expand" : ""} ${!hasMounted ? "no-animation" : ""}`}
//         aria-hidden="true"
//       />

//       {/* Login Page */}
//       {showLoginPage && <LoginPage onClose={closeLoginPage} />}
//     </div>
//   );
// };

// export default Navbar;



// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import LoginPage from "../LoginPage/LoginPage";
// import "./navbar.css";

// const CIRCLE_ANIMATION_DURATION = 600;

// const Navbar = () => {
//   const location = useLocation();
//   const [active, setActive] = useState(false);
//   const [circleExpanded, setCircleExpanded] = useState(false);
//   const [hasMounted, setHasMounted] = useState(false);
//   const [showLoginPage, setShowLoginPage] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setHasMounted(true);
//     }, 10);

//     return () => clearTimeout(timeout);
//   }, []);

//   const toggleMenu = () => {
//     if (!active) {
//       setCircleExpanded(true);
//       setTimeout(() => setActive(true), CIRCLE_ANIMATION_DURATION);
//     } else {
//       setActive(false);
//       setTimeout(() => setCircleExpanded(false), CIRCLE_ANIMATION_DURATION);
//     }
//   };

//   const scrollToSection = (id) => {
//     const element = document.querySelector(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//       setActive(false);
//       setTimeout(() => setCircleExpanded(false), CIRCLE_ANIMATION_DURATION);
//     }
//   };

//   const openLoginPage = () => {
//     setShowLoginPage(true);
//   };

//   const closeLoginPage = () => {
//     setShowLoginPage(false);
//   };

//   const openGridPage = () => {
//     window.open("/grid", "_blank");
//     setActive(false);
//     setTimeout(() => setCircleExpanded(false), CIRCLE_ANIMATION_DURATION);
//   };

//   // ❌ Hide navbar on admin routes
//   if (location.pathname.startsWith("/admin")) {
//     return null;
//   }

//   return (
//     <div
//       id="wrapper"
//       className={`${active ? "menu-open" : ""} ${!hasMounted ? "no-animation" : ""}`}
//     >
//       {/* Website Title */}
//       <div className="site-title">Notryax</div>

//       {/* Toggle Button */}
//       <button
//         className={`navbar-toggle ${active ? "active" : ""}`}
//         onClick={toggleMenu}
//         aria-label="Toggle navigation"
//         aria-expanded={active}
//       >
//         <svg viewBox="0 0 100 100" width={60}>
//           <path
//             className="line top"
//             d="M 30,33 H 70 C 70,33 79.044,32.345 79.044,23.491 79.044,15.637 70.976,11.542 64.1,12.643 57.225,13.742 50.637,20.858 50.637,32.368 V 70"
//           />
//           <path className="line middle" d="M 30,50 H 70" />
//           <path
//             className="line bottom"
//             d="M 30,67 H 70 C 82.796,67 85.358,55.282 85.358,40.149 85.358,25.015 80.614,12.726 68.733,12.726 56.852,12.726 50.501,19.721 50.501,30.656 L 50.754,70"
//           />
//         </svg>
//       </button>

//       {/* Navigation Menu */}
//       <nav className={`navbar ${active ? "show" : ""}`} aria-hidden={!active}>
//         <ul>
//           {/* Home */}
//           <li className="nav-home" style={{ transitionDelay: "0.2s" }}>
//             <a
//               data-text="Home"
//               onClick={() => scrollToSection(".home-container")}
//               role="button"
//               tabIndex={active ? 0 : -1}
//             >
//               <span>Home</span>
//             </a>
//           </li>

//           {/* Notebooks */}
//           <li className="nav-notebooks" style={{ transitionDelay: "0.4s" }}>
//             <a
//               data-text="NOTEBOOKS"
//               onClick={openGridPage}
//               role="button"
//               tabIndex={active ? 0 : -1}
//             >
//               <span>NOTEBOOKS</span>
//             </a>
//           </li>

//           {/* Login */}
//           <li className="nav-login" style={{ transitionDelay: "0.6s" }}>
//             <a
//               data-text="Login"
//               onClick={openLoginPage}
//               role="button"
//               tabIndex={active ? 0 : -1}
//             >
//               <span>Login</span>
//             </a>
//           </li>
//         </ul>
//       </nav>

//       {/* Expanding Circle */}
//       <div
//         id="bg-circle"
//         className={`${circleExpanded ? "expand" : ""} ${!hasMounted ? "no-animation" : ""}`}
//         aria-hidden="true"
//       />

//       {/* Login Page */}
//       {showLoginPage && <LoginPage onClose={closeLoginPage} />}
//     </div>
//   );
// };

// export default Navbar;

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import "./navbar.css";

const CIRCLE_ANIMATION_DURATION = 600;

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const [circleExpanded, setCircleExpanded] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasMounted(true);
    }, 10);

    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }

    return () => clearTimeout(timeout);
  }, []);

  const toggleMenu = () => {
    if (!active) {
      setCircleExpanded(true);
      setTimeout(() => setActive(true), CIRCLE_ANIMATION_DURATION);
    } else {
      setActive(false);
      setTimeout(() => setCircleExpanded(false), CIRCLE_ANIMATION_DURATION);
    }
  };

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(false);
      setTimeout(() => setCircleExpanded(false), CIRCLE_ANIMATION_DURATION);
    }
  };

  const openLoginPage = () => {
    setShowLoginPage(true);
  };

  const closeLoginPage = () => {
    setShowLoginPage(false);
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    setActive(false);
    setTimeout(() => setCircleExpanded(false), CIRCLE_ANIMATION_DURATION);
  };

  const openGridPage = () => {
    window.open("/grid", "_blank");
    setActive(false);
    setTimeout(() => setCircleExpanded(false), CIRCLE_ANIMATION_DURATION);
  };

  if (location.pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <div
      id="wrapper"
      className={`${active ? "menu-open" : ""} ${!hasMounted ? "no-animation" : ""}`}
    >
      <div className="site-title">Notryax</div>

      {loggedInUser && (
        <div className="user-icon">
          {loggedInUser.picture ? (
            <img src={loggedInUser.picture} className="user-avatar" alt="User Avatar" />
          ) : (
            <span>{loggedInUser.name[0]}</span>
          )}
        </div>
      )}

      <button
        className={`navbar-toggle ${active ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={active}
      >
        <svg viewBox="0 0 100 100" width={60}>
          <path
            className="line top"
            d="M 30,33 H 70 C 70,33 79.044,32.345 79.044,23.491 
              79.044,15.637 70.976,11.542 64.1,12.643 
              57.225,13.742 50.637,20.858 50.637,32.368 V 70"
          />
          <path className="line middle" d="M 30,50 H 70" />
          <path
            className="line bottom"
            d="M 30,67 H 70 C 82.796,67 85.358,55.282 85.358,40.149 
              85.358,25.015 80.614,12.726 68.733,12.726 
              56.852,12.726 50.501,19.721 50.501,30.656 L 50.754,70"
          />
        </svg>
      </button>

      <nav className={`navbar ${active ? "show" : ""}`} aria-hidden={!active}>
        <ul>
          <li className="nav-home" style={{ transitionDelay: "0.2s" }}>
            <a data-text="Home" onClick={() => scrollToSection(".home-container")} role="button">
              <span>Home</span>
            </a>
          </li>
          <li className="nav-notebooks" style={{ transitionDelay: "0.4s" }}>
            <a data-text="NOTEBOOKS" onClick={openGridPage} role="button">
              <span>NOTEBOOKS</span>
            </a>
          </li>
          <li className="nav-login" style={{ transitionDelay: "0.6s" }}>
            <a
              data-text={loggedInUser ? "Logout" : "Login"}
              onClick={loggedInUser ? handleLogout : openLoginPage}
              role="button"
            >
              <span>{loggedInUser ? "Logout" : "Login"}</span>
            </a>
          </li>
        </ul>
      </nav>

      <div
        id="bg-circle"
        className={`${circleExpanded ? "expand" : ""} ${!hasMounted ? "no-animation" : ""}`}
        aria-hidden="true"
      />

      {showLoginPage && <LoginPage onClose={closeLoginPage} />}
    </div>
  );
};

export default Navbar;
