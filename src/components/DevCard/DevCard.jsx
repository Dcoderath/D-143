import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./DevCard.css";
import dev6 from "../../assets/d/dev6.png";
import dev7 from "../../assets/d/dev7.png";
import dev8 from "../../assets/d/dev8.png";

gsap.registerPlugin(ScrollTrigger);

const DevCard = () => {
  useEffect(() => {
    let revealContainers = document.querySelectorAll(".reveal:not(.no-animation)"); // Exclude text container from animation

    revealContainers.forEach((container) => {
      let frontDiv = container.querySelector(".front");

      gsap.fromTo(
        frontDiv,
        { xPercent: 0, yPercent: 0 }, // Start fully covered
        {
          xPercent: container.classList.contains("reveal-to-right") ? 100 : 0,
          yPercent: container.classList.contains("reveal-to-down") ? 100 : 0,
          ease: "power1.out",  // Slow and smooth animation
          duration: 3,         // Moves slowly for a nice effect
          scrollTrigger: {
            trigger: container,
            start: "top 100%",  
            end: "top 0%",      
            scrub: 6,           
            toggleActions: "play none reverse none",
          }
        }
      );
    });
  }, []);

  return (
    <div className="devcard-main-container">
      <div className="devcard-top-section">
        {/* ❌ No animation on this text container */}
        <div className="devcard-top-left no-animation">
      More than just a notebook—it’s a reflection of you. Find the one that speaks to your style and creativity
        </div>
        {/* ✅ Animation applies here */}
        <div className="devcard-top-right reveal reveal-to-down" style={{ backgroundImage: `url(${dev6})` }}>
          <div className="front"></div>
        </div>
      </div>
      <div className="devcard-bottom-section">
        <div className="devcard-bottom-left reveal reveal-to-right" style={{ backgroundImage: `url(${dev7})` }}>
          <div className="front"></div>
        </div>
        <div className="devcard-bottom-right reveal reveal-to-down" style={{ backgroundImage: `url(${dev8})` }}>
          <div className="front"></div>
        </div>
      </div>
    </div>
  );
};

export default DevCard;
