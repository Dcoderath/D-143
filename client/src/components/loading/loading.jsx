// import React, { useEffect, useState } from 'react';
// import './loading.css';
// import { gsap } from 'gsap';

// const Loading = ({ onFinish }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount(prev => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           return 100;
//         }
//         return prev + 1;
//       });
//     }, 10);
//   }, []);

//   useEffect(() => {
//     if (count === 100) {
//       const loader = document.getElementById('loader');
//       if (loader) loader.style.display = 'none';

//       gsap.from('.block', {
//         duration: 0.8,
//         width: '0%',
//         ease: 'power1.in',
//         stagger: 0.04,
//         onComplete: () => {
//           if (onFinish) onFinish(); // Notify parent to show content
//         }
//       });
//     }
//   }, [count, onFinish]);

//   return (
//     <div className="loading-wrapper">
//       <div className="loader" id="loader">{count}%</div>
//       <div className="overlay">
//         {Array.from({ length: 20 }).map((_, index) => (
//           <div key={index} className={`block block-${index + 1}`}></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Loading;



import React, { useEffect, useState } from 'react';
import './loading.css';
import { gsap } from 'gsap';

const Loading = ({ onFinish }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 4; // 4 seconds
    const totalCount = 100;
    const increment = totalCount / (duration * 1000 / 10); // Calculate the increment per 10ms interval

    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= totalCount) {
          clearInterval(interval);
          return totalCount;
        }
        return prev + increment;
      });
    }, 10); // Update every 10ms
  }, []);

  useEffect(() => {
    if (count === 100) {
      const loader = document.getElementById('loader');
      if (loader) loader.style.display = 'none';

      gsap.from('.block', {
        duration: 0.8,
        width: '0%',
        ease: 'power1.in',
        stagger: 0.04,
        onComplete: () => {
          if (onFinish) onFinish(); // Notify parent to show content
        }
      });
    }
  }, [count, onFinish]);

  return (
    <div className="loading-wrapper">
      <div className="loader" id="loader">{Math.round(count)}%</div>
      <div className="overlay">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className={`block block-${index + 1}`}></div>
        ))}
      </div>
      {/* Bottom-left percentage text */}
      <div className="percentage-text">{Math.round(count)}%</div>
    </div>
  );
};

export default Loading;
