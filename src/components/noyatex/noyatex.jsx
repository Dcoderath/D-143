import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./noyatex.css";

gsap.registerPlugin(ScrollTrigger);

const Noyatex = () => {
  const notyraTextRef = useRef(null);

  useEffect(() => {
    // Scroll reveal for image containers
    let revealContainers = document.querySelectorAll(".noyatex-reveal");

    revealContainers.forEach((container) => {
      let frontDiv = container.querySelector(".noyatex-front");

      gsap.fromTo(
        frontDiv,
        { xPercent: 0, yPercent: 0 },
        {
          xPercent: container.classList.contains("noyatex-reveal-to-right") ? 100 : 0,
          yPercent: container.classList.contains("noyatex-reveal-to-down") ? 100 : 0,
          ease: "power1.out",
          duration: 3,
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

    // Scroll-triggered 3D dice roll for text
    gsap.fromTo(
      notyraTextRef.current,
      {
        rotationX: -720,
        rotationY: 720,
        opacity: 0,
        transformPerspective: 1000,
      },
      {
        rotationX: 0,
        rotationY: 0,
        opacity: 1,
        duration: 3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: notyraTextRef.current,
          start: "top 80%", // You can adjust this to start earlier/later
          end: "top 20%",
          scrub: 3, // Smooth scroll-linked animation
          toggleActions: "play reverse play reverse",
        }
      }
    );
  }, []);

  return (
    <div className="main-container">
      <div className="top-container">
        <div className="content" ref={notyraTextRef}>YOUR NOTYRA</div>
      </div>
      <div className="bottom-container">
        <div className="left-box noyatex-reveal noyatex-reveal-to-right">
          <div className="noyatex-front"></div>
          <img src="src/assets/d/dev1.png" alt="Dev1" className="image" />
        </div>
        <div className="right-box-container">
          <div className="right-box1 noyatex-reveal noyatex-reveal-to-down">
            <div className="noyatex-front"></div>
            <img src="src/assets/d/dev4.png" alt="Dev4" className="image" />
          </div>
          <div className="right-box2">
            <div className="box1 noyatex-reveal noyatex-reveal-to-right">
              <div className="noyatex-front"></div>
              <img src="src/assets/d/dev2.png" alt="Dev2" className="image" />
            </div>
            <div className="box2 noyatex-reveal noyatex-reveal-to-right">
              <div className="noyatex-front"></div>
              <img src="src/assets/d/dev3.png" alt="Dev3" className="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noyatex;
