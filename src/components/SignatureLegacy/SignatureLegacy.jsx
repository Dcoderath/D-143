import React, { useEffect } from "react";

import "./SignatureLegacy.css";

function SignatureLegacy() {
  return (
    <div className="signature-legacy-container">
      <div className="signature-marquee-container">
        <div className="signature-marquee">
          {[...Array(10)].map((_, i) => (
            <span key={i} className={i % 2 === 0 ? "solid" : "outlined"}>
              NOTYRA<span className="trademark">®</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SignatureLegacy;
