// // import React, { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';

// // const Slider = ({ slides }) => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
  
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
// //     }, 5000);
    
// //     return () => clearInterval(interval);
// //   }, [slides.length]);
  
// //   const handleDotClick = (index) => {
// //     setCurrentIndex(index);
// //   };
  
// //   return (
// //     <div className="relative w-[600px] h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
// //       <AnimatePresence mode="wait">
// //         <motion.div
// //           key={currentIndex}
// //           className={`absolute inset-0 flex p-8 rounded-2xl bg-gradient-to-r ${slides[currentIndex].color}`}
// //           initial={{ opacity: 0, x: 100 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           exit={{ opacity: 0, x: -100 }}
// //           transition={{ duration: 0.5 }}
// //         >
// //           <div className="flex-1 flex flex-col justify-center">
// //             <h2 className="text-2xl font-bold mb-4 text-white">{slides[currentIndex].title}</h2>
// //             <p className="text-base mb-6 text-white/90">{slides[currentIndex].description}</p>
// //             <button className="self-start bg-white text-gray-800 border-none py-3 px-6 rounded-full font-semibold cursor-pointer transition-transform hover:-translate-y-1">
// //               Learn More
// //             </button>
// //           </div>
// //           <div className="flex-1 flex items-center justify-center">
// //             <img 
// //               src={slides[currentIndex].image} 
// //               alt={slides[currentIndex].title} 
// //               className="max-w-full max-h-full object-contain rounded-lg shadow-lg shadow-black/20"
// //             />
// //           </div>
// //         </motion.div>
// //       </AnimatePresence>
      
// //       <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3">
// //         {slides.map((_, index) => (
// //           <button
// //             key={index}
// //             className={`w-3 h-3 rounded-full transition-all ${
// //               index === currentIndex 
// //                 ? 'bg-white scale-110' 
// //                 : 'bg-white/50 hover:scale-110'
// //             }`}
// //             onClick={() => handleDotClick(index)}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Slider;


// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Slider = ({ slides }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
  
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, [slides.length]);
  
//   const handleDotClick = (index) => {
//     setCurrentIndex(index);
//   };
  
//   return (
//     <div className="relative w-full md:w-[700px] h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.3)] backdrop-blur-sm">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentIndex}
//           className={`absolute inset-0 flex flex-col md:flex-row rounded-3xl bg-gradient-to-br ${slides[currentIndex].color} overflow-hidden`}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           {/* Glass panel for text */}
//           <div className="relative z-10 flex-1 flex flex-col justify-center p-10 md:p-12 backdrop-blur-md bg-white/10">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//             >
//               <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-white/20 text-white/90">
//                 Feature {currentIndex + 1}
//               </span>
//               <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
//                 {slides[currentIndex].title}
//               </h2>
//               <p className="text-base md:text-lg mb-8 text-white/80 leading-relaxed max-w-md">
//                 {slides[currentIndex].description}
//               </p>
//               <button className="group relative overflow-hidden rounded-full bg-white/10 backdrop-blur-sm border border-white/30 px-6 py-3 font-medium text-white transition-all hover:bg-white/20">
//                 <span className="relative z-10 flex items-center gap-2">
//                   Learn More
//                   <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                   </svg>
//                 </span>
//               </button>
//             </motion.div>
            
//             {/* Decorative elements */}
//             <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-white/5 blur-xl"></div>
//             <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-white/5 blur-xl"></div>
//           </div>
          
//           {/* Image container */}
//           <motion.div 
//             className="relative flex-1 overflow-hidden"
//             initial={{ scale: 1.1 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.7 }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
//             <img 
//               src={slides[currentIndex].image} 
//               alt={slides[currentIndex].title} 
//               className="absolute inset-0 w-full h-full object-cover"
//             />
            
//             {/* Floating medical icons */}
//             <div className="absolute inset-0 z-20 pointer-events-none">
//               <div className="absolute top-[20%] left-[30%] w-10 h-10 opacity-30 animate-pulse">
//                 <svg viewBox="0 0 24 24" fill="white">
//                   <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
//                 </svg>
//               </div>
//               <div className="absolute top-[60%] right-[20%] w-8 h-8 opacity-20 animate-pulse delay-300">
//                 <svg viewBox="0 0 24 24" fill="white">
//                   <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
//                 </svg>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </AnimatePresence>
      
//       {/* Custom navigation */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`w-12 h-1.5 rounded-full transition-all ${
//               index === currentIndex 
//                 ? 'bg-white scale-100 w-16' 
//                 : 'bg-white/40 hover:bg-white/60'
//             }`}
//             onClick={() => handleDotClick(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
      
//       {/* Slide number indicator */}
//       <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-full px-4 py-1 text-sm font-medium text-white/90 z-30">
//         {currentIndex + 1} / {slides.length}
//       </div>
//     </div>
//   );
// };

// export default Slider;


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };
  
  return (
    <div className="relative w-full h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-[0_20px_80px_rgba(59,130,246,0.2)] backdrop-blur-sm">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className={`absolute inset-0 flex flex-col rounded-[2rem] bg-gradient-to-br ${slides[currentIndex].color} overflow-hidden`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Glass panel for text */}
          <div className="relative z-10 flex-1 flex flex-col justify-center p-10 md:p-12 backdrop-blur-md bg-white/30">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-white/30 text-gray-800">
                Feature {currentIndex + 1}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
                {slides[currentIndex].title}
              </h2>
              <p className="text-base md:text-lg mb-8 text-gray-800 leading-relaxed max-w-md">
                {slides[currentIndex].description}
              </p>
              <button className="group relative overflow-hidden rounded-full bg-white/40 backdrop-blur-sm border border-white/50 px-6 py-3 font-medium text-gray-900 transition-all hover:bg-white/60">
                <span className="relative z-10 flex items-center gap-2">
                  Learn More
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-white/20 blur-xl"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-white/20 blur-xl"></div>
          </div>
          
          {/* Image container */}
          <motion.div 
            className="relative flex-1 overflow-hidden"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
            <img 
              src={slides[currentIndex].image} 
              alt={slides[currentIndex].title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Floating medical icons */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              <div className="absolute top-[20%] left-[30%] w-10 h-10 opacity-30 animate-pulse">
                <svg viewBox="0 0 24 24" fill="white">
                  <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
                </svg>
              </div>
              <div className="absolute top-[60%] right-[20%] w-8 h-8 opacity-20 animate-pulse delay-300">
                <svg viewBox="0 0 24 24" fill="white">
                  <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation arrows */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-gray-900 hover:bg-white/50 transition-all"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-gray-900 hover:bg-white/50 transition-all"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Custom navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-12 h-1.5 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-gray-900 scale-100 w-16' 
                : 'bg-gray-900/40 hover:bg-gray-900/60'
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Slide number indicator */}
      <div className="absolute top-6 right-6 bg-white/30 backdrop-blur-md rounded-full px-4 py-1 text-sm font-medium text-gray-900 z-30">
        {currentIndex + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Slider;