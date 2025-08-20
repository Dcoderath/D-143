// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Lenis from '@studio-freight/lenis';
// import './OrkenWorld.css';

// import c1 from '../../assets/TriangleCard/c1.png';
// import c2 from '../../assets/TriangleCard/c2.png';
// import c3 from '../../assets/TriangleCard/c3.png';
// import c4 from '../../assets/TriangleCard/c4.png';
// import c5 from '../../assets/TriangleCard/c5.png';
// import c6 from '../../assets/TriangleCard/c6.png';
// import c7 from '../../assets/TriangleCard/c7.png';

// const OrkenWorld = () => {
//   const outlineCanvasRef = useRef(null);
//   const fillCanvasRef = useRef(null);
//   const cardsRef = useRef(null);
//   const stickySectionRef = useRef(null);
//   const triangleStates = useRef(new Map());
//   const canvasXPosition = useRef(0);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const lenis = new Lenis({ smoothWheel: true, smoothTouch: false, duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     const outlineCanvas = outlineCanvasRef.current;
//     const fillCanvas = fillCanvasRef.current;
//     const outlineCtx = outlineCanvas.getContext('2d');
//     const fillCtx = fillCanvas.getContext('2d');

//     const setCanvasSize = (canvas, ctx) => {
//       const dpr = window.devicePixelRatio || 1;
//       const displayedWidth = window.innerWidth;
//       const displayedHeight = stickySectionRef.current.offsetHeight;
//       canvas.width = displayedWidth * dpr;
//       canvas.height = displayedHeight * dpr;
//       ctx.scale(dpr, dpr);
//     };

//     setCanvasSize(outlineCanvas, outlineCtx);
//     setCanvasSize(fillCanvas, fillCtx);

//     const drawTriangle = (ctx, x, y, fillScale = 0, flipped = false, isOutline = false) => {
//       const halfSize = 95 * fillScale;
//       ctx.beginPath();
//       if (!flipped) {
//         ctx.moveTo(x, y - halfSize);
//         ctx.lineTo(x + halfSize, y + halfSize);
//         ctx.lineTo(x - halfSize, y + halfSize);
//       } else {
//         ctx.moveTo(x, y + halfSize);
//         ctx.lineTo(x + halfSize, y - halfSize);
//         ctx.lineTo(x - halfSize, y - halfSize);
//       }
//       ctx.closePath();
//       if (isOutline) {
//         const gradient = ctx.createLinearGradient(0, 0, 0, outlineCanvas.height);
//         gradient.addColorStop(0.3, 'black');
//         gradient.addColorStop(0.8, 'rgba(128, 128, 128, 0.92)');
//         gradient.addColorStop(1, 'white');
//         ctx.strokeStyle = gradient;
//         ctx.lineWidth = 2;
//         ctx.stroke();
//       } else {
//         ctx.fillStyle = '#ff8000';
//         ctx.fill();
//       }
//     };

//     const drawGrid = (progress = 0) => {
//       outlineCtx.clearRect(0, 0, outlineCanvas.width, outlineCanvas.height);
//       fillCtx.clearRect(0, 0, fillCanvas.width, fillCanvas.height);
    
//       const totalTriangles = triangleStates.current.size;
//       const step = Math.ceil(progress * totalTriangles);
    
//       let index = 0;
//       triangleStates.current.forEach((state) => {
//         const x = state.col * 95 + 95 + canvasXPosition.current;
//         const y = state.row * 190 + 95;
//         const flipped = (state.row + state.col) % 2 !== 0;
    
//         drawTriangle(outlineCtx, x, y, 1, flipped, true);
    
//         if (index < step) {
//           const fillScale = index + 1 === step ? 1 : Math.min(1, (progress * totalTriangles - index) * 1.2);
//           drawTriangle(fillCtx, x, y, fillScale, flipped);
//         }
//         index++;
//       });
//     };

//     const initializeTriangles = () => {
//       triangleStates.current.clear();
//       const cols = Math.ceil(window.innerWidth / 95);
//       const rows = Math.ceil(stickySectionRef.current.offsetHeight / 190);
//       let triangleArray = [];
    
//       for (let r = 0; r < rows; r++) {
//         for (let c = 0; c < cols; c++) {
//           triangleArray.push({ row: r, col: c });
//         }
//       }
    
//       triangleArray = triangleArray.sort(() => Math.random() - 0.5);
    
//       triangleArray.forEach((triangle, index) => {
//         triangleStates.current.set(`${triangle.row}-${triangle.col}`, {  // ✅ FIXED BACKTICKS
//           ...triangle, 
//           order: index
//         });
//       });
    
//       drawGrid(0); 
//     };

//     initializeTriangles();
//     drawGrid();

//     window.addEventListener('resize', () => {
//       setCanvasSize(outlineCanvas, outlineCtx);
//       setCanvasSize(fillCanvas, fillCtx);
//       initializeTriangles();
//       drawGrid();
//     });

//     const animationContext = gsap.context(() => {
//       ScrollTrigger.create({
//         trigger: stickySectionRef.current,
//         start: 'top top',
//         end: '+=150%',
//         pin: true,
//         scrub: 1.5,
//         onUpdate: (self) => {
//           const progress = self.progress;
//           gsap.to(cardsRef.current, { x: -progress * window.innerWidth * 2, ease: 'power2.out' });

//           if (progress > 0.8) {
//             const triangleProgress = (progress - 0.8) / 0.2;
//             canvasXPosition.current = -window.innerWidth * 0.5;
//             drawGrid(triangleProgress);
//           } else {
//             drawGrid(0);
//           }
//         },
//       });
//     }, stickySectionRef);

//     return () => {
//       animationContext.revert();
//       ScrollTrigger.getAll().forEach(instance => instance.kill());
//     };
//   }, []);

//   return (
//     <div className="OrkenWorld-container">
//       <section className="OrkenWorld-sticky" ref={stickySectionRef}>
//         <canvas className="OrkenWorld-outline-layer" ref={outlineCanvasRef}></canvas>
//         <div className="OrkenWorld-cards" ref={cardsRef}>
//           {[c1, c2, c3, c4, c5, c6, c7].map((img, i) => (
//             <div className="OrkenWorld-card" key={i}>
//               <img src={img} alt={`Card ${i + 1}`} loading="lazy" />  {/* ✅ FIXED TEMPLATE LITERAL */}
//               <div className="card-content">
//                 <h3>Card Title {i + 1}</h3>
//                 <p>This is some description text.</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <canvas className="OrkenWorld-fill-layer" ref={fillCanvasRef}></canvas>
//       </section>
//     </div>
//   );
// };

// export default OrkenWorld;














import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import './OrkenWorld.css';
import SpiralImg from '../SpiralImg/SpiralImg'; // Import SpiralImg component

const OrkenWorld = () => {
  const outlineCanvasRef = useRef(null);
  const fillCanvasRef = useRef(null);
  const stickySectionRef = useRef(null);
  const triangleStates = useRef(new Map());
  const canvasXPosition = useRef(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ smoothWheel: true, duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const outlineCanvas = outlineCanvasRef.current;
    const fillCanvas = fillCanvasRef.current;
    const outlineCtx = outlineCanvas.getContext('2d');
    const fillCtx = fillCanvas.getContext('2d');

    const setCanvasSize = (canvas, ctx) => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = stickySectionRef.current.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    setCanvasSize(outlineCanvas, outlineCtx);
    setCanvasSize(fillCanvas, fillCtx);

    const drawTriangle = (ctx, x, y, fillScale = 0, flipped = false, isOutline = false) => {
      const halfSize = 95 * fillScale;
      ctx.beginPath();
      if (!flipped) {
        ctx.moveTo(x, y - halfSize);
        ctx.lineTo(x + halfSize, y + halfSize);
        ctx.lineTo(x - halfSize, y + halfSize);
      } else {
        ctx.moveTo(x, y + halfSize);
        ctx.lineTo(x + halfSize, y - halfSize);
        ctx.lineTo(x - halfSize, y - halfSize);
      }
      ctx.closePath();
      if (isOutline) {
        const gradient = ctx.createLinearGradient(0, 0, 0, outlineCanvas.height);
        gradient.addColorStop(0.3, 'white');
        gradient.addColorStop(0.8, 'rgb(255, 255, 255)');
        gradient.addColorStop(1, 'white');
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.1;
        ctx.stroke();
      } else {
        ctx.fillStyle = '#ff8001';
        ctx.fill();
      }
    };

    const drawGrid = (progress = 0) => {
      outlineCtx.clearRect(0, 0, outlineCanvas.width, outlineCanvas.height);
      fillCtx.clearRect(0, 0, fillCanvas.width, fillCanvas.height);
    
      const totalTriangles = triangleStates.current.size;
      const step = Math.ceil(progress * totalTriangles);
    
      let index = 0;
      triangleStates.current.forEach((state) => {
        const x = state.col * 95 + 95 + canvasXPosition.current;
        const y = state.row * 190 + 95;
        const flipped = (state.row + state.col) % 2 !== 0;
    
        drawTriangle(outlineCtx, x, y, 1, flipped, true);
    
        if (index < step) {
          const fillScale = index + 1 === step ? 1 : Math.min(1, (progress * totalTriangles - index) * 1.2);
          drawTriangle(fillCtx, x, y, fillScale, flipped);
        }
        index++;
      });
    };

    const initializeTriangles = () => {
      triangleStates.current.clear();
      const cols = Math.ceil(window.innerWidth / 95);
      const rows = Math.ceil(stickySectionRef.current.offsetHeight / 190);
      let triangleArray = [];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          triangleArray.push({ row: r, col: c });
        }
      }

      triangleArray = triangleArray.sort(() => Math.random() - 0.5);

      triangleArray.forEach((triangle, index) => {
        triangleStates.current.set(`${triangle.row}-${triangle.col}`, { 
          ...triangle, 
          order: index
        });
      });

      drawGrid(0);
    };

    initializeTriangles();
    drawGrid();

    window.addEventListener('resize', () => {
      setCanvasSize(outlineCanvas, outlineCtx);
      setCanvasSize(fillCanvas, fillCtx);
      initializeTriangles();
      drawGrid();
    });

    const animationContext = gsap.context(() => {
      ScrollTrigger.create({
        trigger: stickySectionRef.current,
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: 1.5,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress > 0.8) {
            const triangleProgress = (progress - 0.8) / 0.2;
            canvasXPosition.current = -window.innerWidth * 0.5;
            drawGrid(triangleProgress);
          } else {
            drawGrid(0);
          }
        },
      });
    }, stickySectionRef);

    return () => {
      animationContext.revert();
      ScrollTrigger.getAll().forEach(instance => instance.kill());
    };
  }, []);

  return (
    <div className="OrkenWorld-container">
      <section className="OrkenWorld-sticky" ref={stickySectionRef}>
        <canvas className="OrkenWorld-outline-layer" ref={outlineCanvasRef}></canvas>
        <SpiralImg /> {/* 🔹 Replaced Cards with SpiralImg */}
        <canvas className="OrkenWorld-fill-layer" ref={fillCanvasRef}></canvas>
      </section>
    </div>
  );
};

export default OrkenWorld;
