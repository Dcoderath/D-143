import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import './plusup.css';
import Noyatex from '../noyatex/noyatex';
import DevCard from '../DevCard/DevCard';
import Card from "../Card/Card";

const Plusup = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Pin and scroll animations
    const pinnedTrigger = ScrollTrigger.create({
      trigger: ".pinned",
      start: "top top",
      endTrigger: ".whitespace",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
    });

    const headerInfoTrigger = ScrollTrigger.create({
      trigger: ".header-info",
      start: "top top",
      end: "bottom+=50% top",
      pin: true,
      pinSpacing: false,
    });

    const rotationTrigger = ScrollTrigger.create({
      trigger: ".pinned",
      start: "top top",
      endTrigger: ".header-info",
      end: "bottom bottom",
      onUpdate: (self) => {
        const rotation = self.progress * 360;
        gsap.to(".revealer", { rotation });
      },
    });

    const clipPathTrigger = ScrollTrigger.create({
      trigger: ".pinned",
      start: "top top",
      endTrigger: ".header-info",
      end: "bottom bottom",
      onUpdate: (self) => {
        const progress = self.progress;
        const clipPath = `polygon(
          ${45 - 45 * progress}% ${0}%,
          ${55 + 45 * progress}% ${0}%,
          ${55 + 45 * progress}% 100%,
          ${45 - 45 * progress}% 100%
        )`;
        gsap.to(".revealer-1, .revealer-2", {
          clipPath: clipPath,
          ease: "none",
          duration: 0,
        });
      },
    });

    const horizontalTrigger = ScrollTrigger.create({
      trigger: ".header-info",
      start: "top top",
      end: "bottom 80%",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const left = 35 + 15 * progress;
        gsap.to(".revealer", {
          left: `${left}%`,
          ease: "none",
          duration: 0,
        });
      },
    });

    const scaleTrigger = ScrollTrigger.create({
      trigger: ".header-info",
      start: "bottom bottom",
      end: "bottom top",
      scrub: 0.5,
      pin: true,
      onUpdate: (self) => {
        const maxScaleX = 15;
        const maxScaleY = 7;

        const scaleX = 1 + (maxScaleX - 1) * self.progress;
        const scaleY = 1 + (maxScaleY - 1) * self.progress;

        gsap.to(".revealer", {
          scaleX,
          scaleY,
          transformOrigin: "center center",
          ease: "power2.out",
          duration: 0,
        });
      },
    });
// 🎲 Dice-like full rotation on .header-row
const headerRowsRoll = gsap.utils.toArray(".header-row").map((row) => {
  // Ensure perspective for 3D effect
  row.parentNode.style.perspective = "1000px";
  
  return ScrollTrigger.create({
    trigger: row,
    start: "top 60%",
    end: "bottom top",
    scrub: true,
    onUpdate: (self) => {
      const rotate = self.progress * 360; // Full rotation
      gsap.set(row, {
        rotateX: rotate,
        transformOrigin: "center center",
        transformStyle: "preserve-3d",
      });
    },
  });
});

    return () => {
      [
        pinnedTrigger,
        headerInfoTrigger,
        rotationTrigger,
        clipPathTrigger,
        horizontalTrigger,
        scaleTrigger,
        ...headerRowsRoll
      ].forEach(trigger => trigger.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <div className="container">
      <section className="hero">
        <Noyatex />
      </section>

      <section className="info">
        <div className="header-rows">
          <div className="header-row"><h1>Motion</h1></div>
          <div className="header-row"><h1>Stills</h1></div>
        </div>
      </section>

      <section className="header-info">
        <DevCard />
      </section>

      <section className="pinned">
        <div className="revealer">
          <div className="revealer-1"></div>
          <div className="revealer-2"></div>
        </div>
      </section>

      <section className="whitespace"></section>

      <section className="website-content">
        <Card />
      </section>
    </div>
  );
};

export default Plusup;









// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Lenis from '@studio-freight/lenis';
// import './plusup.css';
// import Noyatex from '../noyatex/noyatex';
// import DevCard from '../DevCard/DevCard';
// import Card from "../Card/Card";

// const Plusup = () => {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Initialize Lenis for smooth scrolling
//     const lenis = new Lenis();
//     lenis.on('scroll', ScrollTrigger.update);
//     gsap.ticker.add((time) => {
//       lenis.raf(time * 1000);
//     });

//     gsap.ticker.lagSmoothing(0);

//     // Adjust pinnedTrigger to align with the new height of header-info (150vh)
//     const pinnedTrigger = ScrollTrigger.create({
//       trigger: ".pinned",
//       start: "top top",
//       endTrigger: ".whitespace",
//       end: "bottom top",
//       pin: true,
//       pinSpacing: false,
//     });

//     // Adjust rotation trigger based on the new header-info height
//     const rotationTrigger = ScrollTrigger.create({
//       trigger: ".pinned",
//       start: "top top",
//       endTrigger: ".header-info",
//       end: "bottom bottom",
//       onUpdate: (self) => {
//         const rotation = self.progress * 360;
//         gsap.to(".revealer", { rotation });
//       },
//     });

//     const clipPathTrigger = ScrollTrigger.create({
//       trigger: ".pinned",
//       start: "top top",
//       endTrigger: ".header-info",
//       end: "bottom bottom",
//       onUpdate: (self) => {
//         const progress = self.progress;
//         const clipPath = `polygon(
//           ${45 - 45 * progress}% ${0 + 0 * progress}%,
//           ${55 + 45 * progress}% ${0 + 0 * progress}%,
//           ${55 + 45 * progress}% ${100 - 0 * progress}%,
//           ${45 - 45 * progress}% ${100 - 0 * progress}%
//         )`;
//         gsap.to(".revealer-1, .revealer-2", {
//           clipPath: clipPath,
//           ease: "none",
//           duration: 0,
//         });
//       },
//     });

//     const horizontalTrigger = ScrollTrigger.create({
//       trigger: ".header-info",
//       start: "top top",
//       end: "bottom 50%",
//       scrub: 1,
//       onUpdate: (self) => {
//         const progress = self.progress;
//         const left = 35 + 15 * progress;
//         gsap.to(".revealer", {
//           left: `${left}%`,
//           ease: "none",
//           duration: 0,
//         });
//       },
//     });

//     const scaleTrigger = ScrollTrigger.create({
//       trigger: ".whitespace",
//       start: "top 50%",
//       end: "bottom bottom",
//       scrub: 0.5,
//       onUpdate: (self) => {
//         const maxScaleX = 15;
//         const maxScaleY = 7;

//         const scaleX = 1 + (maxScaleX - 1) * self.progress;
//         const scaleY = 1 + (maxScaleY - 1) * self.progress;

//         gsap.to(".revealer", {
//           scaleX,
//           scaleY,
//           transformOrigin: "center center",
//           ease: "power2.out",
//           duration: 0,
//         });
//       },
//     });

//     return () => {
//       // Cleanup
//       [pinnedTrigger, rotationTrigger, clipPathTrigger, horizontalTrigger, scaleTrigger].forEach(trigger => trigger.kill());
//       lenis.destroy();
//     };
//   }, []);

//   return (
//     <div className="plusup-container">
//       <section className="hero">
//         <Noyatex />
//       </section>

//       <section className="info">
//         <div className="header-rows">
//           <div className="header-row"><h1>Motion</h1></div>
//           <div className="header-row"><h1>Stills</h1></div>
//         </div>
//       </section>

//       <section className="header-info">
//         <DevCard />
//       </section>

//       <section className="pinned">
//         <div className="revealer">
//           <div className="revealer-1"></div>
//           <div className="revealer-2"></div>
//         </div>
//       </section>

//       <section className="whitespace"></section>

//       <section className="website-content">
//         <Card />
//       </section>
//     </div>
//   );
// };

// export default Plusup;
