// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const slides = [
//   {
//     id: 1,
//     title: "Your Journey To Health",
//     description: "Welcome to the dynamic world of healthcare innovation and personalized wellness.",
//     image: "https://img.freepik.com/free-photo/copy-space-heart-shape-stethoscope_23-2148519790.jpg?ga=GA1.1.95786444.1738247124&semt=ais_hybrid&w=740",
//     buttonText: "Learn More"
//   },
//   {
//     id: 2,
//     title: "Expert Medical Care",
//     description: "Our team of specialists provides comprehensive care tailored to your unique needs.",
//     image: "https://img.freepik.com/premium-photo/clinical-wallpaper_1134901-142119.jpg?ga=GA1.1.95786444.1738247124&semt=ais_hybrid&w=740",
//     buttonText: "Our Doctors"
//   },
//   {
//     id: 3,
//     title: "Advanced Technology",
//     description: "Experience healthcare powered by the latest medical innovations and technology.",
//     image: "https://img.freepik.com/premium-vector/medical-health-care-science-innovation-background_115579-832.jpg?ga=GA1.1.95786444.1738247124&semt=ais_hybrid&w=740",
//     buttonText: "Discover More"
//   }
// ];



// const HeroSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);
  
//   useEffect(() => {
//     // Only auto-advance slides when not hovered
//     if (!isHovered) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//       }, 6000);
      
//       return () => clearInterval(interval);
//     }
//   }, [isHovered]);
  
//   const handleDotClick = (index) => {
//     setCurrentIndex(index);
//   };
  
//   return (
//     <div 
//       className="relative w-full h-screen overflow-hidden"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentIndex}
//           className="absolute inset-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.2 }}
//         >
//           {/* Background Image with zoom effect */}
//           <motion.div 
//             className="absolute inset-0 bg-cover bg-center"
//             initial={{ scale: 1.1 }}
//             animate={{ 
//               scale: isHovered ? 1 : 1.05,
//               filter: isHovered ? 'brightness(0.8) contrast(1.1)' : 'brightness(0.7)'
//             }}
//             transition={{ duration: 6, ease: "easeInOut" }}
//             style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
//           />
          
//           {/* White reflection overlay on hover */}
//           <motion.div 
//             className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent"
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ 
//               opacity: isHovered ? 1 : 0,
//               x: isHovered ? 0 : -100
//             }}
//             transition={{ duration: 0.8 }}
//           />
          
//           {/* Base overlay */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          
//           {/* Content */}
//           <div className="relative h-full flex items-center">
//             <div className="container mx-auto px-6 md:px-12 z-10">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2, duration: 0.8 }}
//                 className="max-w-xl"
//               >
//                 <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
//                   {slides[currentIndex].title}
//                 </h1>
//                 <p className="text-lg md:text-xl text-white/90 mb-8">
//                   {slides[currentIndex].description}
//                 </p>
//                 <div className="flex gap-4">
//                   <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-medium transition-all hover:-translate-y-1 hover:shadow-lg relative overflow-hidden group">
//                     <span className="relative z-10">{slides[currentIndex].buttonText}</span>
//                     <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/80 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
//                   </button>
//                   <button className="group relative overflow-hidden rounded-full border border-white/30 bg-transparent px-8 py-3 font-medium text-white transition-all hover:bg-white/10">
//                     <span className="flex items-center gap-2">
//                       <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                       </svg>
//                     </span>
//                     <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
//                   </button>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>
      
//       {/* Navigation dots with enhanced hover effect */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`w-3 h-3 rounded-full transition-all duration-300 relative overflow-hidden ${
//               index === currentIndex 
//                 ? 'bg-white scale-125 shadow-[0_0_10px_rgba(255,255,255,0.7)]' 
//                 : 'bg-white/50 hover:bg-white/80'
//             }`}
//             onClick={() => handleDotClick(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           >
//             {index === currentIndex && (
//               <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/90 to-white/0 -translate-x-full animate-shimmer"></span>
//             )}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroSlider;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: "Your Journey To Health",
    description: "Welcome to the dynamic world of healthcare innovation and personalized wellness.",
    image: "https://img.freepik.com/free-photo/copy-space-heart-shape-stethoscope_23-2148519790.jpg?ga=GA1.1.95786444.1738247124&semt=ais_hybrid&w=740",
    buttonText: "Learn More"
  },
  {
    id: 2,
    title: "Expert Medical Care",
    description: "Our team of specialists provides comprehensive care tailored to your unique needs.",
    image: "https://img.freepik.com/premium-vector/medical-health-care-science-innovation-background_115579-832.jpg?ga=GA1.1.95786444.1738247124&semt=ais_hybrid&w=740",
    buttonText: "Our Doctors"
  },
  {
    id: 3,
    title: "Advanced Technology",
    description: "Experience healthcare powered by the latest medical innovations and technology.",
    image: "https://img.freepik.com/premium-vector/medical-health-care-science-innovation-background_115579-832.jpg?ga=GA1.1.95786444.1738247124&semt=ais_hybrid&w=740",
    buttonText: "Discover More"
  }
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    // Only auto-advance slides when not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 6000);
      
      return () => clearInterval(interval);
    }
  }, [isHovered]);
  
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  
  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 1.2,
            ease: "easeInOut"
          }}
        >
          {/* Background Image with zoom effect */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-center"
            initial={{ scale: 1.1 }}
            animate={{ 
              scale: isHovered ? 1 : 1.05,
              filter: isHovered ? 'brightness(0.8) contrast(1.1)' : 'brightness(0.7)'
            }}
            transition={{ duration: 6, ease: "easeInOut" }}
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          />
          
          {/* Base overlay - removed white reflection */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          
          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-6 md:px-12 z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="max-w-xl"
              >
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {slides[currentIndex].title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8">
                  {slides[currentIndex].description}
                </p>
                <div className="flex gap-4">
                  <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-medium transition-all hover:-translate-y-1 hover:shadow-lg relative overflow-hidden group">
                    <span className="relative z-10">{slides[currentIndex].buttonText}</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/40 to-blue-50/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  </button>
                  <button className="group relative overflow-hidden rounded-full border border-white/30 bg-transparent px-8 py-3 font-medium text-white transition-all hover:bg-white/10">
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation dots with subtle effect */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;