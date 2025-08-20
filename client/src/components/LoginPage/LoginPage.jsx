import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // ✅ Correct import for Vite
import './loginPage.css';

const LoginPage = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || (isSignUp && password !== confirmPassword)) {
      setError("Please fill in all fields correctly.");
      return;
    }

    setError("");

    if (isSignUp) {
      alert("Sign Up successful!");
    } else {
      if (email === "admin@example.com" && password === "admin123") {
        const adminUser = { name: "Admin", email };
        localStorage.setItem("loggedInUser", JSON.stringify(adminUser)); // ✅ Save login
        window.open("/admin", "_blank");
      } else {
        const user = { name: "User", email };
        localStorage.setItem("loggedInUser", JSON.stringify(user)); // ✅ Save login
        alert("Login successful!");
      }
      onClose();
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-form">
        <div className="login-form-header">
          <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
          <button onClick={onClose} className="login-close-btn">X</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="login-input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="login-input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          {isSignUp && (
            <div className="login-input-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
              />
            </div>
          )}
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-submit-btn">
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        {/* 🔐 Google Login */}
        <div className="google-login-wrapper" style={{ marginTop: "1rem" }}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const user = jwtDecode(credentialResponse.credential);
              localStorage.setItem("loggedInUser", JSON.stringify(user)); // ✅ Save login
              alert(`Welcome, ${user.name}`);
              console.log("Google User Info:", user);
              onClose();
            }}
            onError={() => {
              alert("Google Login Failed");
            }}
          />
        </div>

        <p className="login-toggle-form" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;



// import React, { useState } from "react";
// import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode"; // ✅ Correct import for Vite
// import './loginPage.css';

// const LoginPage = ({ onClose }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isSignUp, setIsSignUp] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email || !password || (isSignUp && password !== confirmPassword)) {
//       setError("Please fill in all fields correctly.");
//       return;
//     }

//     setError("");

//     if (isSignUp) {
//       alert("Sign Up successful!");
//     } else {
//       if (email === "admin@example.com" && password === "admin123") {
//         const adminUser = { name: "Admin", email };
//         localStorage.setItem("loggedInUser", JSON.stringify(adminUser)); // ✅ Save login
//         window.open("/admin", "_blank");
//       } else {
//         const user = { name: "User", email };
//         localStorage.setItem("loggedInUser", JSON.stringify(user)); // ✅ Save login
//         alert("Login successful!");
//       }
//       onClose();
//     }
//   };

//   return (
//     <div className="login-page-container">
//       <div className="login-form">
//         <div className="login-form-header">
//           <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
//           <button onClick={onClose} className="login-close-btn">X</button>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="login-input-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="login-input-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//             />
//           </div>
//           {isSignUp && (
//             <div className="login-input-group">
//               <label htmlFor="confirmPassword">Confirm Password:</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 placeholder="Confirm your password"
//               />
//             </div>
//           )}
//           {error && <p className="login-error">{error}</p>}
//           <button type="submit" className="login-submit-btn">
//             {isSignUp ? "Sign Up" : "Login"}
//           </button>
//         </form>

//         {/* 🔐 Google Login */}
//         <div className="google-login-wrapper" style={{ marginTop: "1rem" }}>
//           <GoogleLogin
//             onSuccess={(credentialResponse) => {
//               const user = jwtDecode(credentialResponse.credential);
//               localStorage.setItem("loggedInUser", JSON.stringify(user)); // ✅ Save login
//               alert(`Welcome, ${user.name}`);
//               console.log("Google User Info:", user);
//               onClose();
//             }}
//             onError={() => {
//               alert("Google Login Failed");
//             }}
//           />
//         </div>

//         <p className="login-toggle-form" onClick={() => setIsSignUp(!isSignUp)}>
//           {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;






// import React, { useState } from "react";
// import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode"; // JWT decoding for Google login
// import './loginPage.css';

// const LoginPage = ({ onClose }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isSignUp, setIsSignUp] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Please fill in all fields correctly.");
//       return;
//     }

//     setError("");

//     // Assuming successful email/password login
//     const user = { email, password };
//     localStorage.setItem("user", JSON.stringify(user));
//     alert("Login successful!");
//     onClose(); // Close login modal after login
//   };

//   const handleGoogleLogin = (credentialResponse) => {
//     const user = jwtDecode(credentialResponse.credential);
//     const userData = { email: user.email, name: user.name };
//     localStorage.setItem("user", JSON.stringify(userData));
//     alert(`Welcome, ${user.name}`);
//     onClose(); // Close login modal after Google login
//   };

//   const handleGoogleLoginError = () => {
//     alert("Google login failed!");
//   };

//   return (
//     <div className="login-page-container">
//       <div className="login-form">
//         <div className="login-form-header">
//           <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
//           <button onClick={onClose} className="login-close-btn">X</button>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="login-input-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="login-input-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//             />
//           </div>
//           {error && <p className="login-error">{error}</p>}
//           <button type="submit" className="login-submit-btn">
//             {isSignUp ? "Sign Up" : "Login"}
//           </button>
//         </form>

//         {/* Google Login Integration */}
//         <div className="google-login-wrapper" style={{ marginTop: "1rem" }}>
//           <GoogleLogin
//             onSuccess={handleGoogleLogin}
//             onError={handleGoogleLoginError}
//           />
//         </div>

//         <p className="login-toggle-form" onClick={() => setIsSignUp(!isSignUp)}>
//           {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;




// import React, { useState } from "react";
// import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode"; // ✅ Correct import for Vite
// import './loginPage.css';

// const LoginPage = ({ onClose }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isSignUp, setIsSignUp] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email || !password || (isSignUp && password !== confirmPassword)) {
//       setError("Please fill in all fields correctly.");
//       return;
//     }

//     setError("");

//     if (isSignUp) {
//       alert("Sign Up successful!");
//     } else {
//       if (email === "admin@example.com" && password === "admin123") {
//         window.open("/admin", "_blank");
//       } else {
//         alert("Login successful!");
//       }
//       onClose();
//     }
//   };

//   return (
//     <div className="login-page-container">
//       <div className="login-form">
//         <div className="login-form-header">
//           <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
//           <button onClick={onClose} className="login-close-btn">X</button>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="login-input-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="login-input-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//             />
//           </div>
//           {isSignUp && (
//             <div className="login-input-group">
//               <label htmlFor="confirmPassword">Confirm Password:</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 placeholder="Confirm your password"
//               />
//             </div>
//           )}
//           {error && <p className="login-error">{error}</p>}
//           <button type="submit" className="login-submit-btn">
//             {isSignUp ? "Sign Up" : "Login"}
//           </button>
//         </form>

//         {/* 🔐 Google Login Integration */}
//         <div className="google-login-wrapper" style={{ marginTop: "1rem" }}>
//           <GoogleLogin
//             onSuccess={(credentialResponse) => {
//               const user = jwtDecode(credentialResponse.credential);
//               alert(`Welcome, ${user.name}`);
//               console.log("Google User Info:", user);
//               onClose();
//             }}
//             onError={() => {
//               alert("Google Login Failed");
//             }}
//           />
//         </div>

//         <p className="login-toggle-form" onClick={() => setIsSignUp(!isSignUp)}>
//           {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;




// // src/components/LoginPage/LoginPage.jsx
// import React, { useState } from "react";
// import './loginPage.css';

// const LoginPage = ({ onClose }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isSignUp, setIsSignUp] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validation
//     if (!email || !password || (isSignUp && password !== confirmPassword)) {
//       setError("Please fill in all fields correctly.");
//       return;
//     }

//     setError("");

//     // Sign Up logic
//     if (isSignUp) {
//       alert("Sign Up successful!");
//     } else {
//       // ✅ Check admin credentials
//       if (email === "admin@example.com" && password === "admin123") {
//         window.open("/admin", "_blank"); // open Admin Page in new tab
//       } else {
//         alert("Login successful!");
//       }
//       onClose(); // close the login popup
//     }
//   };

//   return (
//     <div className="login-page-container">
//       <div className="login-form">
//         <div className="login-form-header">
//           <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
//           <button onClick={onClose} className="login-close-btn">X</button>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="login-input-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="login-input-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//             />
//           </div>
//           {isSignUp && (
//             <div className="login-input-group">
//               <label htmlFor="confirmPassword">Confirm Password:</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 placeholder="Confirm your password"
//               />
//             </div>
//           )}
//           {error && <p className="login-error">{error}</p>}
//           <button type="submit" className="login-submit-btn">
//             {isSignUp ? "Sign Up" : "Login"}
//           </button>
//         </form>

//         <p className="login-toggle-form" onClick={() => setIsSignUp(!isSignUp)}>
//           {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;













// import React, { useState } from "react";
// import { GoogleLogin } from "@react-oauth/google";
// import jwt_decode from "jwt-decode"; // To decode Google token
// import './loginPage.css';

// const LoginPage = ({ onClose }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isSignUp, setIsSignUp] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email || !password || (isSignUp && password !== confirmPassword)) {
//       setError("Please fill in all fields correctly.");
//       return;
//     }

//     setError("");

//     if (isSignUp) {
//       alert("Sign Up successful!");
//     } else {
//       if (email === "admin@example.com" && password === "admin123") {
//         window.open("/admin", "_blank");
//       } else {
//         alert("Login successful!");
//       }
//       onClose();
//     }
//   };

//   const handleGoogleLoginSuccess = (credentialResponse) => {
//     const decoded = jwt_decode(credentialResponse.credential);
//     console.log("Google login success:", decoded);

//     alert(`Welcome, ${decoded.name || decoded.email}!`);
//     onClose();
//   };

//   const handleGoogleLoginFailure = () => {
//     setError("Google login failed. Please try again.");
//   };

//   return (
//     <div className="login-page-container">
//       <div className="login-form">
//         <div className="login-form-header">
//           <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
//           <button onClick={onClose} className="login-close-btn">X</button>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <div className="login-input-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="login-input-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//             />
//           </div>
//           {isSignUp && (
//             <div className="login-input-group">
//               <label htmlFor="confirmPassword">Confirm Password:</label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 placeholder="Confirm your password"
//               />
//             </div>
//           )}
//           {error && <p className="login-error">{error}</p>}
//           <button type="submit" className="login-submit-btn">
//             {isSignUp ? "Sign Up" : "Login"}
//           </button>
//         </form>

//         <div className="google-login-wrapper">
//           <p>or</p>
//           <GoogleLogin
//             onSuccess={handleGoogleLoginSuccess}
//             onError={handleGoogleLoginFailure}
//           />
//         </div>

//         <p className="login-toggle-form" onClick={() => setIsSignUp(!isSignUp)}>
//           {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
