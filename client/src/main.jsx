import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';  // Import the Google OAuth provider
import './index.css';  // Your global CSS styles
import App from './App.jsx';  // Your main App component

// Replace 'YOUR_GOOGLE_CLIENT_ID' with your actual Google Client ID
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">  {/* Provide the actual client ID */}
      <App />
    </GoogleOAuthProvider>
  </StrictMode>
);
