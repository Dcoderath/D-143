// import React, { useEffect, useRef, useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import c1 from '../../assets/SpiralImg/c1.png';
// import c2 from '../../assets/SpiralImg/c2.png';
// import base from '../../assets/SpiralImg/base.png';
// import './SpiralImg.css';

// gsap.registerPlugin(ScrollTrigger);

// const SpiralImg = () => {
//     const [showc2, setShowc2] = useState(false);
//     const containerRef = useRef(null);
//     const topTextRef = useRef(null);
//     const bookRef = useRef(null);
//     const baseRef = useRef(null);

//     useEffect(() => {
//         const switchBooks = () => setShowc2(prev => !prev);
//         const interval = setInterval(switchBooks, 2000);

//         // Top left text animation
//         gsap.fromTo(topTextRef.current, {
//             opacity: 0,
//             x: -100
//         }, {
//             opacity: 1,
//             x: 0,
//             duration: 1.5,
//             scrollTrigger: {
//                 trigger: topTextRef.current,
//                 start: 'top 80%',
//                 end: 'top 50%',
//                 scrub: true
//             }
//         });

//         // Book animation
//         gsap.fromTo(bookRef.current, {
//             scale: 0.5,
//             y: 50,
//             opacity: 0,
//             rotate: -45
//         }, {
//             scale: 1,
//             y: 0,
//             opacity: 1,
//             rotate: 0,
//             duration: 2,
//             scrollTrigger: {
//                 trigger: bookRef.current,
//                 start: 'top 80%',
//                 end: 'top 30%',
//                 scrub: true
//             }
//         });

//         // Base animation
//         gsap.fromTo(baseRef.current, {
//             scale: 0.5,
//             opacity: 0,
//             y: 100
//         }, {
//             scale: 1.1,
//             opacity: 1,
//             y: 0,
//             duration: 2.5,
//             scrollTrigger: {
//                 trigger: baseRef.current,
//                 start: 'top 90%',
//                 end: 'top 50%',
//                 scrub: true
//             }
//         });

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="spiralImg-mainContainer" ref={containerRef}>
//             <div className="spiralImg-topLeftText" ref={topTextRef}>
//                 For those who stand out with <br />
//                 every word they write, embracing <br />
//                 confidence and luxury on every page.
//             </div>

//             <div className="spiralImg-topContainer">
//                 <img
//                     src={showc2 ? c2 : c1}
//                     alt="Book"
//                     className="spiralImg-topImage"
//                     ref={bookRef}
//                 />
//             </div>

//             <div className="spiralImg-bottomContainer">
//                 <img
//                     src={base}
//                     alt="Base"
//                     className="spiralImg-baseImage"
//                     ref={baseRef}
//                 />
//             </div>
//         </div>
//     );
// };

// export default SpiralImg;


import React, { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import c1 from "../../assets/SpiralImg/c1.png";
import c2 from "../../assets/SpiralImg/c2.png";
import base from "../../assets/SpiralImg/base.png";
import "./SpiralImg.css";

gsap.registerPlugin(ScrollTrigger);

const SpiralImg = () => {
    const [showc2, setShowc2] = useState(false);
    const bookRef = useRef(null);
    const baseRef = useRef(null);

    // UseMemo to prevent unnecessary re-renders
    const bookImage = useMemo(() => (showc2 ? c2 : c1), [showc2]);

    useEffect(() => {
        const switchBooks = () => {
            if (bookRef.current) {
                gsap.to(bookRef.current, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {
                        setShowc2((prev) => !prev);
                        gsap.to(bookRef.current, { opacity: 1, duration: 0.5 });
                    },
                });
            }
        };

        const interval = setInterval(switchBooks, 3000);

        // Base animation
        if (baseRef.current) {
            gsap.fromTo(
                baseRef.current,
                { scale: 0.6, opacity: 0, y: 120 },
                {
                    scale: 1.1,
                    opacity: 1,
                    y: 0,
                    duration: 2.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: baseRef.current,
                        start: "top 95%",
                        end: "top 50%",
                        scrub: 0.5,
                    },
                }
            );
        }

        return () => {
            clearInterval(interval);
            gsap.killTweensOf(bookRef.current);
            gsap.killTweensOf(baseRef.current);
        };
    }, []);

    return (
        <div className="spiralImg-mainContainer">
            <div className="spiralImg-topContainer">
                <img
                    src={bookImage}
                    alt="Book"
                    className="spiralImg-topImage"
                    ref={bookRef}
                    onLoad={() => {
                        gsap.fromTo(bookRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
                    }}
                />
            </div>

            <div className="spiralImg-bottomContainer">
                <img
                    src={base}
                    alt="Base"
                    className="spiralImg-baseImage"
                    ref={baseRef}
                />
            </div>
        </div>
    );
};

export default SpiralImg;
