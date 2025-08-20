import React, { useEffect, useRef } from "react";
import "./Footer.css";
import n from "../../assets/d/n.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const notyraRef = useRef(null);

  useEffect(() => {
    const letters = notyraRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: notyraRef.current,
          start: "top 65%",
          end: "top 34%",
          scrub: true, // <- this makes it scroll-synced both ways
        },
      }
    );
  }, []);

  const notyraLetters = "NOTYRA".split("").map((char, i) => (
    <span key={i} className="notyra-letter">
      {char}
    </span>
  ));

  return (
    <div className="fofoter-container">
      <div className="fofoter-content">
        <div
          className="fofoter-left"
          style={{ backgroundImage: `url(${n})` }}
        ></div>

        <svg
          className="fofoter-divider"
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="100%"
          viewBox="0 0 2 100"
        >
          <line x1="1" y1="0" x2="1" y2="100" stroke="white" strokeWidth="2" />
        </svg>

        <div className="fofoter-right">
          <p ref={notyraRef} className="notyra-text">
            {notyraLetters}
          </p>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <p>Imprint © 2025 Notrya</p>
        </div>
        <div className="footer-container">
          3IXMOREVODKA STUDIO BOXHAGENER STRASSE 16 18245 BERLIN, GERMANY PHONE:
          +49 (8) 38 / 7623183 INFO@5IXMOREVODKA.COM
        </div>
        <div className="footer-container">Website By DECODERATH</div>
      </footer>
    </div>
  );
};

export default Footer;
