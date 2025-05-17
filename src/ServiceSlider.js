// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { useGLTF, OrbitControls, Environment, Float } from '@react-three/drei';

// // 3D Model Component
// const Model = ({ color, rotate }) => {
//   const { scene } = useGLTF('/models/medical_device.glb');
//   const ref = useRef();
  
//   useFrame((state) => {
//     if (ref.current && rotate) {
//       ref.current.rotation.y = state.clock.getElapsedTime() * 0.2;
//     }
//   });
  
//   useEffect(() => {
//     if (scene) {
//       scene.traverse((child) => {
//         if (child.isMesh) {
//           child.material.color.set(color);
//         }
//       });
//     }
//   }, [scene, color]);
  
//   return <primitive ref={ref} object={scene} scale={1.5} position={[0, -1, 0]} />;
// };

// const services = [
//   {
//     id: 1,
//     icon: "computer",
//     title: "Revenue Cycle Management",
//     description: "Rather than a 'billing service', MBCS can serve as a full billing department that is focused on your specialty and unique needs to supporting your group with U.S. based coding and billing experts.",
//     modelColor: "#3b82f6"
//   },
//   {
//     id: 2,
//     icon: "globe",
//     title: "Coding and Reimbursement",
//     description: "Saying this is a complex area is an understatement. We work with our client to maximize your compensation for the services you provide.",
//     modelColor: "#10b981"
//   },
//   {
//     id: 3,
//     icon: "edit",
//     title: "Strategic Planning",
//     description: "Where are you today and where do you want to go? Our experienced team helps you develop a road map for the future.",
//     modelColor: "#8b5cf6"
//   },
//   {
//     id: 4,
//     icon: "shield",
//     title: "Compliance Solutions",
//     description: "Stay ahead of regulatory changes with our comprehensive compliance solutions designed to protect your practice and ensure adherence to industry standards.",
//     modelColor: "#ef4444"
//   },
//   {
//     id: 5,
//     icon: "chart",
//     title: "Financial Analytics",
//     description: "Gain valuable insights into your practice's financial performance with our advanced analytics tools and customized reporting solutions.",
//     modelColor: "#f59e0b"
//   },
//   {
//     id: 6,
//     icon: "users",
//     title: "Practice Management",
//     description: "Streamline your operations with our integrated practice management solutions that optimize workflow and enhance patient experience.",
//     modelColor: "#06b6d4"
//   },
//   {
//     id: 7,
//     icon: "cloud",
//     title: "Technology Integration",
//     description: "Leverage cutting-edge healthcare technology with our seamless integration services that connect your systems for maximum efficiency.",
//     modelColor: "#ec4899"
//   }
// ];

// const ServiceSlider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const intervalRef = useRef(null);
//   const [isHovered, setIsHovered] = useState(false);
//   const [colorMode, setColorMode] = useState('default');

//   const colorSchemes = {
//     default: [
//       { primary: 'from-blue-600 to-indigo-700', secondary: 'bg-blue-50 text-blue-600', accent: 'bg-blue-600/10' },
//       { primary: 'from-emerald-600 to-teal-700', secondary: 'bg-emerald-50 text-emerald-600', accent: 'bg-emerald-600/10' },
//       { primary: 'from-violet-600 to-purple-700', secondary: 'bg-violet-50 text-violet-600', accent: 'bg-violet-600/10' },
//       { primary: 'from-rose-600 to-pink-700', secondary: 'bg-rose-50 text-rose-600', accent: 'bg-rose-600/10' },
//       { primary: 'from-amber-600 to-orange-700', secondary: 'bg-amber-50 text-amber-600', accent: 'bg-amber-600/10' },
//       { primary: 'from-cyan-600 to-sky-700', secondary: 'bg-cyan-50 text-cyan-600', accent: 'bg-cyan-600/10' },
//       { primary: 'from-fuchsia-600 to-pink-700', secondary: 'bg-fuchsia-50 text-fuchsia-600', accent: 'bg-fuchsia-600/10' },
//     ],
//     luxury: [
//       { primary: 'from-amber-700 to-yellow-500', secondary: 'bg-amber-50 text-amber-700', accent: 'bg-amber-600/10' },
//       { primary: 'from-slate-800 to-slate-600', secondary: 'bg-slate-100 text-slate-700', accent: 'bg-slate-600/10' },
//       { primary: 'from-emerald-800 to-emerald-600', secondary: 'bg-emerald-50 text-emerald-700', accent: 'bg-emerald-600/10' },
//       { primary: 'from-purple-900 to-purple-700', secondary: 'bg-purple-50 text-purple-700', accent: 'bg-purple-600/10' },
//       { primary: 'from-red-800 to-red-600', secondary: 'bg-red-50 text-red-700', accent: 'bg-red-600/10' },
//       { primary: 'from-blue-900 to-blue-700', secondary: 'bg-blue-50 text-blue-700', accent: 'bg-blue-600/10' },
//       { primary: 'from-stone-800 to-stone-600', secondary: 'bg-stone-50 text-stone-700', accent: 'bg-stone-600/10' },
//     ],
//     modern: [
//       { primary: 'from-sky-500 to-indigo-500', secondary: 'bg-sky-50 text-sky-500', accent: 'bg-sky-500/10' },
//       { primary: 'from-pink-500 to-rose-500', secondary: 'bg-pink-50 text-pink-500', accent: 'bg-pink-500/10' },
//       { primary: 'from-lime-500 to-green-500', secondary: 'bg-lime-50 text-lime-600', accent: 'bg-lime-500/10' },
//       { primary: 'from-amber-500 to-red-500', secondary: 'bg-amber-50 text-amber-500', accent: 'bg-amber-500/10' },
//       { primary: 'from-violet-500 to-fuchsia-500', secondary: 'bg-violet-50 text-violet-500', accent: 'bg-violet-500/10' },
//       { primary: 'from-cyan-500 to-blue-500', secondary: 'bg-cyan-50 text-cyan-500', accent: 'bg-cyan-500/10' },
//       { primary: 'from-gray-700 to-gray-900', secondary: 'bg-gray-100 text-gray-700', accent: 'bg-gray-700/10' },
//     ]
//   };

//   useEffect(() => {
//     if (!isHovered) {
//       intervalRef.current = setInterval(() => {
//         setDirection(1);
//         setActiveIndex(prev => (prev + 1) % services.length);
//       }, 5000);
//     }
//     return () => clearInterval(intervalRef.current);
//   }, [isHovered, services.length]);

//   // Change color scheme every 15 seconds
//   useEffect(() => {
//     const colorInterval = setInterval(() => {
//       setColorMode(prev => {
//         const modes = Object.keys(colorSchemes);
//         const currentIndex = modes.indexOf(prev);
//         return modes[(currentIndex + 1) % modes.length];
//       });
//     }, 15000);
    
//     return () => clearInterval(colorInterval);
//   }, []);

//   const handleServiceClick = (index) => {
//     clearInterval(intervalRef.current);
//     setDirection(index > activeIndex ? 1 : -1);
//     setActiveIndex(index);
//   };

//   const getIcon = (iconName) => {
//     switch(iconName) {
//       case 'computer':
//         return (
//           <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//           </svg>
//         );
//       case 'globe':
//         return (
//           <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//         );
//       case 'edit':
//         return (
//           <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//           </svg>
//         );
//       case 'shield':
//         return (
//           <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//           </svg>
//         );
//       case 'chart':
//         return (
//           <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//           </svg>
//         );
//       case 'users':
//         return (
//           <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//           </svg>
//         );
//       case 'cloud':
//         return (
//           <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
//           </svg>
//         );
//       default:
//         return null;
//     }
//   };

//   const getColorScheme = (index) => {
//     return colorSchemes[colorMode][index % colorSchemes[colorMode].length];
//   };

//   return (
//     <div className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <motion.div 
//           className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-20 blur-3xl"
//           animate={{ 
//             backgroundColor: colorMode === 'luxury' ? '#78350f' : colorMode === 'modern' ? '#0ea5e9' : '#3b82f6',
//           }}
//           transition={{ duration: 2 }}
//         />
//         <motion.div 
//           className="absolute top-1/2 -right-48 w-96 h-96 rounded-full opacity-20 blur-3xl"
//           animate={{ 
//             backgroundColor: colorMode === 'luxury' ? '#4c1d95' : colorMode === 'modern' ? '#ec4899' : '#8b5cf6',
//           }}
//           transition={{ duration: 2 }}
//         />
//         <motion.div 
//           className="absolute -bottom-24 left-1/3 w-96 h-96 rounded-full opacity-20 blur-3xl"
//           animate={{ 
//             backgroundColor: colorMode === 'luxury' ? '#065f46' : colorMode === 'modern' ? '#84cc16' : '#10b981',
//           }}
//           transition={{ duration: 2 }}
//         />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="text-center mb-16">
//           <motion.div
//             animate={{ 
//               backgroundColor: colorMode === 'luxury' ? '#fef3c7' : colorMode === 'modern' ? '#f0f9ff' : '#dbeafe',
//               color: colorMode === 'luxury' ? '#78350f' : colorMode === 'modern' ? '#0ea5e9' : '#1e40af',
//             }}
//             transition={{ duration: 1 }}
//             className="inline-block py-1 px-4 rounded-full text-sm font-medium mb-3"
//           >
//             Our Expertise
//           </motion.div>
          
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Premium Services</h2>
          
//           <motion.div 
//             className="w-24 h-1.5 mx-auto rounded-full"
//             animate={{ 
//               background: colorMode === 'luxury' 
//                 ? 'linear-gradient(to right, #78350f, #f59e0b)' 
//                 : colorMode === 'modern'
//                 ? 'linear-gradient(to right, #0ea5e9, #6366f1)'
//                 : 'linear-gradient(to right, #2563eb, #4f46e5)'
//             }}
//             transition={{ duration: 1 }}
//           />
          
//           <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
//             Comprehensive medical billing and practice management solutions tailored to your specific needs
//           </p>
//         </div>

//         {/* Color scheme selector */}
//         <div className="flex justify-center gap-3 mb-10">
//           {Object.keys(colorSchemes).map((mode) => (
//             <button
//               key={mode}
//               onClick={() => setColorMode(mode)}
//               className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
//                 colorMode === mode 
//                   ? 'bg-white text-gray-900' 
//                   : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
//               }`}
//             >
//               {mode.charAt(0).toUpperCase() + mode.slice(1)}
//             </button>
//           ))}
//         </div>

//         {/* Service Cards */}
//         <div 
//           className="relative overflow-hidden py-8"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           {/* Progress bar */}
//           <motion.div 
//             className="w-full max-w-3xl mx-auto h-1 bg-gray-700 rounded-full mb-10 overflow-hidden"
//           >
//             <motion.div 
//               className="h-full rounded-full"
//               animate={{ 
//                 width: `${((activeIndex + 1) / services.length) * 100}%`,
//                 background: colorMode === 'luxury' 
//                   ? 'linear-gradient(to right, #78350f, #f59e0b)' 
//                   : colorMode === 'modern'
//                   ? 'linear-gradient(to right, #0ea5e9, #6366f1)'
//                   : 'linear-gradient(to right, #2563eb, #4f46e5)'
//               }}
//               transition={{ duration: 0.5 }}
//             />
//           </motion.div>

//           <div className="relative">
//             <AnimatePresence initial={false} mode="sync">
//               <motion.div
//                 key={activeIndex}
//                 className="grid grid-cols-1 md:grid-cols-3 gap-8"
//               >
//                 {[
//                   (activeIndex - 1 + services.length) % services.length,
//                   activeIndex,
//                   (activeIndex + 1) % services.length
//                 ].map((index, i) => {
//                   const service = services[index];
//                   const colorScheme = getColorScheme(index);
//                   const isActive = index === activeIndex;
//                   const position = i === 0 ? "left" : i === 1 ? "center" : "right";
                  
//                   return (
//                     <motion.div
//                       key={`${service.id}-${position}`}
//                       className={`rounded-2xl overflow-hidden transform transition-all duration-500 ${
//                         isActive 
//                           ? 'shadow-[0_0_30px_rgba(255,255,255,0.1)] md:scale-105 z-10' 
//                           : 'shadow-lg md:scale-95 opacity-80'
//                       }`}
//                       initial={{ 
//                         x: position === "left" ? -100 : position === "right" ? 100 : 0,
//                         opacity: 0 
//                       }}
//                       animate={{ 
//                         x: 0,
//                         opacity: isActive ? 1 : 0.8,
//                         scale: isActive ? 1.05 : 0.95,
//                         transition: { duration: 0.5 }
//                       }}
//                       whileHover={{ 
//                         scale: isActive ? 1.08 : 1.03,
//                         y: -5,
//                         transition: { duration: 0.3 }
//                       }}
//                       style={{
//                         background: 'rgba(30, 30, 30, 0.8)',
//                         backdropFilter: 'blur(10px)',
//                         WebkitBackdropFilter: 'blur(10px)',
//                         border: '1px solid rgba(255, 255, 255, 0.1)'
//                       }}
//                     >
//                       <motion.div 
//                         className="h-2"
//                         animate={{ 
//                           background: `linear-gradient(to right, ${colorScheme.primary.replace('from-', '').replace('to-', '')})` 
//                         }}
//                         transition={{ duration: 1 }}
//                       />
                      
//                       <div className="p-8">
//                         <div className="flex justify-between items-start mb-6">
//                           <motion.div 
//                             className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden group"
//                             animate={{ 
//                               backgroundColor: colorScheme.secondary.split(' ')[0],
//                               color: colorScheme.secondary.split(' ')[1]
//                             }}
//                             transition={{ duration: 1 }}
//                           >
//                             <motion.div 
//                               className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                               animate={{ 
//                                 background: `linear-gradient(to right, ${colorScheme.primary.replace('from-', '').replace('to-', '')})` 
//                               }}
//                               transition={{ duration: 1 }}
//                             />
//                             <div className="relative z-10 group-hover:text-white transition-colors duration-300">
//                               {getIcon(service.icon)}
//                             </div>
//                           </motion.div>
                          
//                           {/* 3D Model Container */}
//                           <div className="w-24 h-24 rounded-lg overflow-hidden">
//                             <Canvas>
//                               <ambientLight intensity={0.5} />
//                               <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//                               <Environment preset="city" />
//                               <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
//                                 <Model color={service.modelColor} rotate={isActive} />
//                               </Float>
//                               <OrbitControls enableZoom={false} enablePan={false} />
//                             </Canvas>
//                           </div>
//                         </div>
                        
//                         <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
//                         <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                        
//                         <div className="mt-auto">
//                           <motion.a 
//                             href="#" 
//                             className="inline-flex items-center text-sm font-medium group"
//                             animate={{ 
//                               color: colorScheme.secondary.split(' ')[1]
//                             }}
//                             transition={{ duration: 1 }}
//                           >
//                             <span className="mr-2">Learn more</span>
//                             <motion.span 
//                               className="w-6 h-6 rounded-full flex items-center justify-center"
//                               animate={{ 
//                                 backgroundColor: colorScheme.secondary.split(' ')[0],
//                                 color: colorScheme.secondary.split(' ')[1]
//                               }}
//                               whileHover={{
//                                 scale: 1.1,
//                                 backgroundColor: colorScheme.primary.split(' ')[0].replace('from-', ''),
//                                 color: '#ffffff'
//                               }}
//                               transition={{ duration: 0.3 }}
//                             >
//                               <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                               </svg>
//                             </motion.span>
//                           </motion.a>
//                         </div>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </motion.div>
//             </AnimatePresence>

//             {/* Navigation arrows */}
//             <motion.button 
//               onClick={() => {
//                 clearInterval(intervalRef.current);
//                 setDirection(-1);
//                 setActiveIndex(prev => (prev - 1 + services.length) % services.length);
//               }}
//               className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-4 rounded-full shadow-lg z-20 hidden md:flex items-center justify-center transition-transform duration-300 hover:-translate-x-1"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               aria-label="Previous service"
//               style={{
//                 backdropFilter: 'blur(10px)',
//                 WebkitBackdropFilter: 'blur(10px)',
//               }}
//             >
//               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </motion.button>
//             <motion.button 
//               onClick={() => {
//                 clearInterval(intervalRef.current);
//                 setDirection(1);
//                 setActiveIndex(prev => (prev + 1) % services.length);
//               }}
//               className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-4 rounded-full shadow-lg z-20 hidden md:flex items-center justify-center transition-transform duration-300 hover:translate-x-1"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               aria-label="Next service"
//               style={{
//                 backdropFilter: 'blur(10px)',
//                 WebkitBackdropFilter: 'blur(10px)',
//               }}
//             >
//               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </motion.button>
//           </div>

//           {/* Service counter */}
//           <div className="text-center mt-12">
//             <motion.div 
//               className="inline-block px-4 py-1 rounded-full text-sm font-medium"
//               animate={{ 
//                 backgroundColor: colorMode === 'luxury' ? '#fef3c7' : colorMode === 'modern' ? '#f0f9ff' : '#dbeafe',
//                 color: colorMode === 'luxury' ? '#78350f' : colorMode === 'modern' ? '#0ea5e9' : '#1e40af',
//               }}
//               transition={{ duration: 1 }}
//             >
//               {activeIndex + 1} / {services.length}
//             </motion.div>
//           </div>
//         </div>

//         {/* Call to action */}
//         <div className="mt-16 text-center">
//           <motion.a 
//             href="#" 
//             className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white rounded-full shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
//             animate={{ 
//               background: colorMode === 'luxury' 
//                 ? 'linear-gradient(to right, #78350f, #f59e0b)' 
//                 : colorMode === 'modern'
//                 ? 'linear-gradient(to right, #0ea5e9, #6366f1)'
//                 : 'linear-gradient(to right, #2563eb, #4f46e5)'
//             }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//             transition={{ duration: 0.3 }}
//           >
//             Explore All Services
//             <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//             </svg>
//           </motion.a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceSlider;



// import React, { useState, useEffect, useRef, Suspense } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// // Import 3D components conditionally to prevent errors
// const ThreeDModel = React.lazy(() => import('./Components/Model.3d'));

// const services = [
//   {
//     id: 1,
//     icon: "computer",
//     modelType: "revenue",
//     title: "Revenue Cycle Management",
//     description: "Rather than a 'billing service', MBCS can serve as a full billing department that is focused on your specialty and unique needs to supporting your group with U.S. based coding and billing experts.",
//     modelColor: "#3b82f6"
//   },
//   {
//     id: 2,
//     icon: "globe",
//     modelType: "coding",
//     title: "Coding and Reimbursement",
//     description: "Saying this is a complex area is an understatement. We work with our client to maximize your compensation for the services you provide.",
//     modelColor: "#10b981"
//   },
//   {
//     id: 3,
//     icon: "edit",
//     modelType: "planning",
//     title: "Strategic Planning",
//     description: "Where are you today and where do you want to go? Our experienced team helps you develop a road map for the future.",
//     modelColor: "#8b5cf6"
//   },
//   {
//     id: 4,
//     icon: "shield",
//     modelType: "compliance",
//     title: "Compliance Solutions",
//     description: "Stay ahead of regulatory changes with our comprehensive compliance solutions designed to protect your practice and ensure adherence to industry standards.",
//     modelColor: "#ef4444"
//   },
//   {
//     id: 5,
//     icon: "chart",
//     modelType: "analytics",
//     title: "Financial Analytics",
//     description: "Gain valuable insights into your practice's financial performance with our advanced analytics tools and customized reporting solutions.",
//     modelColor: "#f59e0b"
//   },
//   {
//     id: 6,
//     icon: "users",
//     modelType: "management",
//     title: "Practice Management",
//     description: "Streamline your operations with our integrated practice management solutions that optimize workflow and enhance patient experience.",
//     modelColor: "#06b6d4"
//   },
//   {
//     id: 7,
//     icon: "cloud",
//     modelType: "technology",
//     title: "Technology Integration",
//     description: "Leverage cutting-edge healthcare technology with our seamless integration services that connect your systems for maximum efficiency.",
//     modelColor: "#ec4899"
//   }
// ];

// // Medical-themed color schemes
// const colorSchemes = {
//   medical: [
//     { primary: 'from-blue-600 to-cyan-500', secondary: 'bg-blue-50 text-blue-600', accent: 'bg-blue-600/10' },
//     { primary: 'from-teal-600 to-emerald-500', secondary: 'bg-teal-50 text-teal-600', accent: 'bg-teal-600/10' },
//     { primary: 'from-indigo-600 to-purple-500', secondary: 'bg-indigo-50 text-indigo-600', accent: 'bg-indigo-600/10' },
//     { primary: 'from-rose-600 to-red-500', secondary: 'bg-rose-50 text-rose-600', accent: 'bg-rose-600/10' },
//     { primary: 'from-amber-600 to-yellow-500', secondary: 'bg-amber-50 text-amber-600', accent: 'bg-amber-600/10' },
//     { primary: 'from-sky-600 to-blue-500', secondary: 'bg-sky-50 text-sky-600', accent: 'bg-sky-600/10' },
//     { primary: 'from-fuchsia-600 to-pink-500', secondary: 'bg-fuchsia-50 text-fuchsia-600', accent: 'bg-fuchsia-600/10' },
//   ],
//   professional: [
//     { primary: 'from-slate-700 to-slate-600', secondary: 'bg-slate-100 text-slate-700', accent: 'bg-slate-600/10' },
//     { primary: 'from-blue-800 to-blue-700', secondary: 'bg-blue-50 text-blue-700', accent: 'bg-blue-600/10' },
//     { primary: 'from-emerald-800 to-emerald-700', secondary: 'bg-emerald-50 text-emerald-700', accent: 'bg-emerald-600/10' },
//     { primary: 'from-indigo-800 to-indigo-700', secondary: 'bg-indigo-50 text-indigo-700', accent: 'bg-indigo-600/10' },
//     { primary: 'from-gray-800 to-gray-700', secondary: 'bg-gray-100 text-gray-700', accent: 'bg-gray-600/10' },
//     { primary: 'from-cyan-800 to-cyan-700', secondary: 'bg-cyan-50 text-cyan-700', accent: 'bg-cyan-600/10' },
//     { primary: 'from-violet-800 to-violet-700', secondary: 'bg-violet-50 text-violet-700', accent: 'bg-violet-600/10' },
//   ],
//   modern: [
//     { primary: 'from-sky-500 to-indigo-500', secondary: 'bg-sky-50 text-sky-500', accent: 'bg-sky-500/10' },
//     { primary: 'from-pink-500 to-rose-500', secondary: 'bg-pink-50 text-pink-500', accent: 'bg-pink-500/10' },
//     { primary: 'from-lime-500 to-green-500', secondary: 'bg-lime-50 text-lime-600', accent: 'bg-lime-500/10' },
//     { primary: 'from-amber-500 to-red-500', secondary: 'bg-amber-50 text-amber-500', accent: 'bg-amber-500/10' },
//     { primary: 'from-violet-500 to-fuchsia-500', secondary: 'bg-violet-50 text-violet-500', accent: 'bg-violet-500/10' },
//     { primary: 'from-cyan-500 to-blue-500', secondary: 'bg-cyan-50 text-cyan-500', accent: 'bg-cyan-500/10' },
//     { primary: 'from-gray-700 to-gray-900', secondary: 'bg-gray-100 text-gray-700', accent: 'bg-gray-700/10' },
//   ]
// };

// const ServiceSlider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const intervalRef = useRef(null);
//   const [isHovered, setIsHovered] = useState(false);
//   const [colorMode, setColorMode] = useState('medical');
//   const [use3D, setUse3D] = useState(false);

//   useEffect(() => {
//     // Try to enable 3D after component mounts to prevent initial render errors
//     const timer = setTimeout(() => {
//       try {
//         setUse3D(true);
//       } catch (error) {
//         console.error("3D rendering not supported:", error);
//       }
//     }, 1000);
    
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (!isHovered) {
//       intervalRef.current = setInterval(() => {
//         setDirection(1);
//         setActiveIndex(prev => (prev + 1) % services.length);
//       }, 5000);
//     }
//     return () => clearInterval(intervalRef.current);
//   }, [isHovered, services.length]);

//   const handleServiceClick = (index) => {
//     clearInterval(intervalRef.current);
//     setDirection(index > activeIndex ? 1 : -1);
//     setActiveIndex(index);
//   };

//   const getIcon = (iconName) => {
//     switch(iconName) {
//       case 'computer':
//         return (
//           <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//           </svg>
//         );
//       case 'globe':
//         return (
//           <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//         );
//       case 'edit':
//         return (
//           <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//           </svg>
//         );
//       case 'shield':
//         return (
//           <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//           </svg>
//         );
//       case 'chart':
//         return (
//           <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//           </svg>
//         );
//       case 'users':
//         return (
//           <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//           </svg>
//         );
//       case 'cloud':
//         return (
//           <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
//           </svg>
//         );
//       default:
//         return null;
//     }
//   };

//   const getColorScheme = (index) => {
//     return colorSchemes[colorMode][index % colorSchemes[colorMode].length];
//   };

//   // Fallback 2D icon for when 3D fails
//   const getFallbackIcon = (type, color) => {
//     const iconMap = {
//       revenue: '$',
//       coding: '</>', 
//       planning: '📊',
//       compliance: '✓',
//       analytics: '📈',
//       management: '👥',
//       technology: '💻'
//     };
    
//     return (
//       <div 
//         className="w-full h-full flex items-center justify-center text-4xl font-bold"
//         style={{ color }}
//       >
//         {iconMap[type] || '🏥'}
//       </div>
//     );
//   };

//   return (
//     <div className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
//       {/* Medical-themed background elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <svg className="absolute top-0 right-0 w-1/3 h-auto text-blue-50 opacity-30" viewBox="0 0 200 200" fill="currentColor">
//           <path d="M139.2,27.7c-11.4-11.4-25.1-19.4-40.2-23.3C83.5,0.4,67.8-1,52.4,1.6C37,4.2,22.6,10.8,10.8,20.9C-1,31-9.5,44.1-13.4,58.5c-3.9,14.4-3.9,29.7,0,44.1c3.9,14.4,12.4,27.5,24.2,37.6c11.8,10.1,26.2,16.7,41.6,19.3c15.4,2.6,31.1,1.2,45.6-3.7c14.5-4.9,27.5-13.4,37.6-24.8c10.1-11.4,17-25.1,20.1-39.8c3.1-14.7,2.2-30-2.6-44.2C158.6,32.8,150,28.7,139.2,27.7z"/>
//         </svg>
//         <svg className="absolute bottom-0 left-0 w-1/4 h-auto text-green-50 opacity-30" viewBox="0 0 200 200" fill="currentColor">
//           <path d="M42.7,42.7C31.3,54.1,23.3,67.8,19.4,82.9C15.5,98,14.1,113.7,16.7,129.1c2.6,15.4,9.2,29.8,19.3,41.6c10.1,11.8,23.2,20.3,37.6,24.2c14.4,3.9,29.7,3.9,44.1,0c14.4-3.9,27.5-12.4,37.6-24.2c10.1-11.8,16.7-26.2,19.3-41.6c2.6-15.4,1.2-31.1-3.7-45.6c-4.9-14.5-13.4-27.5-24.8-37.6c-11.4-10.1-25.1-17-39.8-20.1c-14.7-3.1-30-2.2-44.2,2.6C47.8,32.3,43.7,40.9,42.7,42.7z"/>
//         </svg>
        
//         {/* Medical cross symbols */}
//         <div className="absolute top-20 left-1/4 w-8 h-8 bg-red-100 opacity-20 rounded-full flex items-center justify-center">
//           <div className="w-6 h-1 bg-red-500 absolute"></div>
//           <div className="w-1 h-6 bg-red-500 absolute"></div>
//         </div>
//         <div className="absolute bottom-40 right-1/4 w-12 h-12 bg-blue-100 opacity-20 rounded-full flex items-center justify-center">
//           <div className="w-8 h-1.5 bg-blue-500 absolute"></div>
//           <div className="w-1.5 h-8 bg-blue-500 absolute"></div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="text-center mb-16">
//           <motion.div
//             animate={{ 
//               backgroundColor: colorMode === 'medical' ? '#eff6ff' : colorMode === 'professional' ? '#f8fafc' : '#f0f9ff',
//               color: colorMode === 'medical' ? '#2563eb' : colorMode === 'professional' ? '#334155' : '#0ea5e9',
//             }}
//             transition={{ duration: 1 }}
//             className="inline-block py-1 px-4 rounded-full text-sm font-medium mb-3"
//           >
//             Healthcare Billing Solutions
//           </motion.div>
          
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Medical Billing Services</h2>
          
//           <motion.div 
//             className="w-24 h-1.5 mx-auto rounded-full"
//             animate={{ 
//               background: colorMode === 'medical' 
//                 ? 'linear-gradient(to right, #2563eb, #06b6d4)' 
//                 : colorMode === 'professional'
//                 ? 'linear-gradient(to right, #334155, #1e40af)'
//                 : 'linear-gradient(to right, #0ea5e9, #6366f1)'
//             }}
//             transition={{ duration: 1 }}
//           />
          
//           <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
//             Comprehensive medical billing and practice management solutions tailored to your hospital's specific needs
//           </p>
//         </div>

//         {/* Color scheme selector */}
//         <div className="flex justify-center gap-3 mb-10">
//           {Object.keys(colorSchemes).map((mode) => (
//             <button
//               key={mode}
//               onClick={() => setColorMode(mode)}
//               className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
//                 colorMode === mode 
//                   ? mode === 'medical' ? 'bg-blue-600 text-white' 
//                   : mode === 'professional' ? 'bg-slate-800 text-white'
//                   : 'bg-sky-500 text-white' 
//                   : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//               }`}
//             >
//               {mode.charAt(0).toUpperCase() + mode.slice(1)}
//             </button>
//           ))}
//         </div>

//         {/* Service Cards */}
//         <div 
//           className="relative overflow-hidden py-8"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           {/* Progress bar */}
//           <motion.div 
//             className="w-full max-w-3xl mx-auto h-1 bg-gray-200 rounded-full mb-10 overflow-hidden"
//           >
//             <motion.div 
//               className="h-full rounded-full"
//               animate={{ 
//                 width: `${((activeIndex + 1) / services.length) * 100}%`,
//                 background: colorMode === 'medical' 
//                   ? 'linear-gradient(to right, #2563eb, #06b6d4)' 
//                   : colorMode === 'professional'
//                   ? 'linear-gradient(to right, #334155, #1e40af)'
//                   : 'linear-gradient(to right, #0ea5e9, #6366f1)'
//               }}
//               transition={{ duration: 0.5 }}
//             />
//           </motion.div>

//           <div className="relative">
//             <AnimatePresence initial={false} mode="sync">
//               <motion.div
//                 key={activeIndex}
//                 className="grid grid-cols-1 md:grid-cols-3 gap-8"
//               >
//                 {[
//                   (activeIndex - 1 + services.length) % services.length,
//                   activeIndex,
//                   (activeIndex + 1) % services.length
//                 ].map((index, i) => {
//                   const service = services[index];
//                   const colorScheme = getColorScheme(index);
//                   const isActive = index === activeIndex;
//                   const position = i === 0 ? "left" : i === 1 ? "center" : "right";
                  
//                   return (
//                     <motion.div
//                       key={`${service.id}-${position}`}
//                       className={`rounded-2xl overflow-hidden transform transition-all duration-500 ${
//                         isActive 
//                           ? 'shadow-[0_10px_40px_rgba(59,130,246,0.2)] md:scale-105 z-10' 
//                           : 'shadow-lg md:scale-95 opacity-80'
//                       }`}
//                       initial={{ 
//                         x: position === "left" ? -100 : position === "right" ? 100 : 0,
//                         opacity: 0 
//                       }}
//                       animate={{ 
//                         x: 0,
//                         opacity: isActive ? 1 : 0.8,
//                         scale: isActive ? 1.05 : 0.95,
//                         transition: { duration: 0.5 }
//                       }}
//                       whileHover={{ 
//                         scale: isActive ? 1.08 : 1.03,
//                         y: -5,
//                         transition: { duration: 0.3 }
//                       }}
//                       style={{
//                         background: 'white',
//                         border: '1px solid rgba(226, 232, 240, 1)'
//                       }}
//                     >
//                       <motion.div 
//                         className="h-2"
//                         animate={{ 
//                           background: `linear-gradient(to right, ${colorScheme.primary.replace('from-', '').replace('to-', '')})` 
//                         }}
//                         transition={{ duration: 1 }}
//                       />
                      
//                       <div className="p-8">
//                         {/* Icon Container - Fallback to 2D if 3D fails */}
//                         <div className="w-full h-40 mb-6 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
//                           {use3D ? (
//                             <Suspense fallback={getFallbackIcon(service.modelType, service.modelColor)}>
//                               <ThreeDModel type={service.modelType} color={service.modelColor} isActive={isActive} />
//                             </Suspense>
//                           ) : (
//                             getFallbackIcon(service.modelType, service.modelColor)
//                           )}
//                         </div>
                        
//                         <div className="flex items-center mb-4">
//                           <motion.div 
//                             className="w-12 h-12 rounded-full flex items-center justify-center relative overflow-hidden mr-4"
//                             animate={{ 
//                               backgroundColor: colorScheme.secondary.split(' ')[0],
//                               color: colorScheme.secondary.split(' ')[1]
//                             }}
//                             transition={{ duration: 1 }}
//                           >
//                             <motion.div 
//                               className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                               animate={{ 
//                                 background: `linear-gradient(to right, ${colorScheme.primary.replace('from-', '').replace('to-', '')})` 
//                               }}
//                               transition={{ duration: 1 }}
//                             />
//                             <div className="relative z-10 group-hover:text-white transition-colors duration-300">
//                               {getIcon(service.icon)}
//                             </div>
//                           </motion.div>
                          
//                           <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
//                         </div>
                        
//                         <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                        
//                         <div className="mt-auto">
//                           <motion.a 
//                             href="#" 
//                             className="inline-flex items-center text-sm font-medium group"
//                             animate={{ 
//                               color: colorScheme.secondary.split(' ')[1]
//                             }}
//                             transition={{ duration: 1 }}
//                           >
//                             <span className="mr-2">Learn more</span>
//                             <motion.span 
//                               className="w-6 h-6 rounded-full flex items-center justify-center"
//                               animate={{ 
//                                 backgroundColor: colorScheme.secondary.split(' ')[0],
//                                 color: colorScheme.secondary.split(' ')[1]
//                               }}
//                               whileHover={{
//                                 scale: 1.1,
//                                 backgroundColor: colorScheme.primary.split(' ')[0].replace('from-', ''),
//                                 color: '#ffffff'
//                               }}
//                               transition={{ duration: 0.3 }}
//                             >
//                               <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                               </svg>
//                             </motion.span>
//                           </motion.a>
//                         </div>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </motion.div>
//             </AnimatePresence>

//             {/* Navigation arrows */}
//             <motion.button 
//               onClick={() => {
//                 clearInterval(intervalRef.current);
//                 setDirection(-1);
//                 setActiveIndex(prev => (prev - 1 + services.length) % services.length);
//               }}
//               className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 p-4 rounded-full shadow-lg z-20 hidden md:flex items-center justify-center transition-transform duration-300 hover:-translate-x-1"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               aria-label="Previous service"
//             >
//               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </motion.button>
//             <motion.button 
//               onClick={() => {
//                 clearInterval(intervalRef.current);
//                 setDirection(1);
//                 setActiveIndex(prev => (prev + 1) % services.length);
//               }}
        
//                 className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 p-4 rounded-full shadow-lg z-20 hidden md:flex items-center justify-center transition-transform duration-300 hover:translate-x-1"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 aria-label="Next service"
//               >
//                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </motion.button>
//             </div>
  
//             {/* Service dots navigation */}
//             <div className="flex justify-center mt-12 space-x-2">
//               {services.map((service, idx) => {
//                 const colorScheme = getColorScheme(idx);
//                 return (
//                   <motion.button
//                     key={service.id}
//                     onClick={() => handleServiceClick(idx)}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                       idx === activeIndex ? 'scale-125' : 'opacity-50'
//                     }`}
//                     animate={{ 
//                       background: idx === activeIndex 
//                         ? `linear-gradient(to right, ${colorScheme.primary.replace('from-', '').replace('to-', '')})` 
//                         : '#e2e8f0'
//                     }}
//                     whileHover={{ scale: 1.2, opacity: 1 }}
//                     aria-label={`Go to service ${idx + 1}`}
//                   />
//                 );
//               })}
//             </div>
//           </div>


          
//         </div>
//       </div>
//     );
//   };
  
//   export default ServiceSlider;

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import 3D components conditionally to prevent errors
const ThreeDModel = React.lazy(() => import('./Components/Model.3d'));

const services = [
  {
    id: 1,
    icon: "computer",
    modelType: "revenue",
    title: "Revenue Cycle Management",
    description: "Rather than a 'billing service', MBCS can serve as a full billing department that is focused on your specialty and unique needs to supporting your group with U.S. based coding and billing experts.",
    modelColor: "#3b82f6"
  },
  {
    id: 2,
    icon: "globe",
    modelType: "coding",
    title: "Coding and Reimbursement",
    description: "Saying this is a complex area is an understatement. We work with our client to maximize your compensation for the services you provide.",
    modelColor: "#10b981"
  },
  {
    id: 3,
    icon: "edit",
    modelType: "planning",
    title: "Strategic Planning",
    description: "Where are you today and where do you want to go? Our experienced team helps you develop a road map for the future.",
    modelColor: "#8b5cf6"
  },
  {
    id: 4,
    icon: "shield",
    modelType: "compliance",
    title: "Compliance Solutions",
    description: "Stay ahead of regulatory changes with our comprehensive compliance solutions designed to protect your practice and ensure adherence to industry standards.",
    modelColor: "#ef4444"
  },
  {
    id: 5,
    icon: "chart",
    modelType: "analytics",
    title: "Financial Analytics",
    description: "Gain valuable insights into your practice's financial performance with our advanced analytics tools and customized reporting solutions.",
    modelColor: "#f59e0b"
  },
  {
    id: 6,
    icon: "users",
    modelType: "management",
    title: "Practice Management",
    description: "Streamline your operations with our integrated practice management solutions that optimize workflow and enhance patient experience.",
    modelColor: "#06b6d4"
  },
  {
    id: 7,
    icon: "cloud",
    modelType: "technology",
    title: "Technology Integration",
    description: "Leverage cutting-edge healthcare technology with our seamless integration services that connect your systems for maximum efficiency.",
    modelColor: "#ec4899"
  }
];

// Medical-themed color schemes
const colorSchemes = {
  medical: [
    { primary: 'from-blue-600 to-cyan-500', secondary: 'bg-blue-50 text-blue-600', accent: 'bg-blue-600/10' },
    { primary: 'from-teal-600 to-emerald-500', secondary: 'bg-teal-50 text-teal-600', accent: 'bg-teal-600/10' },
    { primary: 'from-indigo-600 to-purple-500', secondary: 'bg-indigo-50 text-indigo-600', accent: 'bg-indigo-600/10' },
    { primary: 'from-rose-600 to-red-500', secondary: 'bg-rose-50 text-rose-600', accent: 'bg-rose-600/10' },
    { primary: 'from-amber-600 to-yellow-500', secondary: 'bg-amber-50 text-amber-600', accent: 'bg-amber-600/10' },
    { primary: 'from-sky-600 to-blue-500', secondary: 'bg-sky-50 text-sky-600', accent: 'bg-sky-600/10' },
    { primary: 'from-fuchsia-600 to-pink-500', secondary: 'bg-fuchsia-50 text-fuchsia-600', accent: 'bg-fuchsia-600/10' },
  ],
  professional: [
    { primary: 'from-slate-700 to-slate-600', secondary: 'bg-slate-100 text-slate-700', accent: 'bg-slate-600/10' },
    { primary: 'from-blue-800 to-blue-700', secondary: 'bg-blue-50 text-blue-700', accent: 'bg-blue-600/10' },
    { primary: 'from-emerald-800 to-emerald-700', secondary: 'bg-emerald-50 text-emerald-700', accent: 'bg-emerald-600/10' },
    { primary: 'from-indigo-800 to-indigo-700', secondary: 'bg-indigo-50 text-indigo-700', accent: 'bg-indigo-600/10' },
    { primary: 'from-gray-800 to-gray-700', secondary: 'bg-gray-100 text-gray-700', accent: 'bg-gray-600/10' },
    { primary: 'from-cyan-800 to-cyan-700', secondary: 'bg-cyan-50 text-cyan-700', accent: 'bg-cyan-600/10' },
    { primary: 'from-violet-800 to-violet-700', secondary: 'bg-violet-50 text-violet-700', accent: 'bg-violet-600/10' },
  ],
  modern: [
    { primary: 'from-sky-500 to-indigo-500', secondary: 'bg-sky-50 text-sky-500', accent: 'bg-sky-500/10' },
    { primary: 'from-pink-500 to-rose-500', secondary: 'bg-pink-50 text-pink-500', accent: 'bg-pink-500/10' },
    { primary: 'from-lime-500 to-green-500', secondary: 'bg-lime-50 text-lime-600', accent: 'bg-lime-500/10' },
    { primary: 'from-amber-500 to-red-500', secondary: 'bg-amber-50 text-amber-500', accent: 'bg-amber-500/10' },
    { primary: 'from-violet-500 to-fuchsia-500', secondary: 'bg-violet-50 text-violet-500', accent: 'bg-violet-500/10' },
    { primary: 'from-cyan-500 to-blue-500', secondary: 'bg-cyan-50 text-cyan-500', accent: 'bg-cyan-500/10' },
    { primary: 'from-gray-700 to-gray-900', secondary: 'bg-gray-100 text-gray-700', accent: 'bg-gray-700/10' },
  ]
};

const ServiceSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [colorMode, setColorMode] = useState('medical');
  const [use3D, setUse3D] = useState(false);
  const sliderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationCount, setAnimationCount] = useState(0);

  // Use IntersectionObserver to detect when slider is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    
    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }
    
    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Try to enable 3D after component mounts to prevent initial render errors
    const timer = setTimeout(() => {
      try {
        setUse3D(true);
      } catch (error) {
        console.error("3D rendering not supported:", error);
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Only run auto-rotation when component is visible and not hovered
  useEffect(() => {
    if (isVisible && !isHovered) {
      // Clear existing interval before creating a new one
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      intervalRef.current = setInterval(() => {
        // IMPORTANT: Don't scroll the page when auto-rotating the slider
        // Use requestAnimationFrame to prevent layout thrashing
        requestAnimationFrame(() => {
          setDirection(1);
          setActiveIndex(prev => (prev + 1) % services.length);
          setAnimationCount(prev => prev + 1);
        });
      }, 5000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible, isHovered, services.length]);

  const handleServiceClick = (index) => {
    // Clear interval when user interacts
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    
    // Prevent default behavior that might cause scrolling
    return false;
  };

  const getIcon = (iconName) => {
    switch(iconName) {
      case 'computer':
        return (
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'globe':
        return (
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'edit':
        return (
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        );
      case 'shield':
        return (
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'chart':
        return (
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'users':
        return (
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'cloud':
        return (
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getColorScheme = (index) => {
    return colorSchemes[colorMode][index % colorSchemes[colorMode].length];
  };

  // Fallback 2D icon for when 3D fails
  const getFallbackIcon = (type, color) => {
    const iconMap = {
      revenue: '$',
      coding: '</>', 
      planning: '📊',
      compliance: '✓',
      analytics: '📈',
      management: '👥',
      technology: '💻'
    };
    
    return (
      <div 
        className="w-full h-full flex items-center justify-center text-4xl font-bold"
        style={{ color }}
      >
        {iconMap[type] || '🏥'}
      </div>
    );
  };

  // Animation variants for floating elements
  const floatingAnimation = {
    initial: { y: 0 },
    animate: { 
      y: [0, -10, 0], 
      transition: { 
        repeat: Infinity, 
        duration: 4,
        ease: "easeInOut" 
      } 
    }
  };

  // Pulse animation for dots
  const pulseAnimation = {
    pulse: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div 
      ref={sliderRef}
      className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
      id="service-slider-section" // Add ID for potential direct linking
    >
      {/* Enhanced Medical-themed background elements with animations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.svg 
          className="absolute top-0 right-0 w-1/3 h-auto text-blue-50 opacity-30" 
          viewBox="0 0 200 200" 
          fill="currentColor"
          animate={{ 
            rotate: [0, 10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <path d="M139.2,27.7c-11.4-11.4-25.1-19.4-40.2-23.3C83.5,0.4,67.8-1,52.4,1.6C37,4.2,22.6,10.8,10.8,20.9C-1,31-9.5,44.1-13.4,58.5c-3.9,14.4-3.9,29.7,0,44.1c3.9,14.4,12.4,27.5,24.2,37.6c11.8,10.1,26.2,16.7,41.6,19.3c15.4,2.6,31.1,1.2,45.6-3.7c14.5-4.9,27.5-13.4,37.6-24.8c10.1-11.4,17-25.1,20.1-39.8c3.1-14.7,2.2-30-2.6-44.2C158.6,32.8,150,28.7,139.2,27.7z"/>
        </motion.svg>
        
        <motion.svg 
          className="absolute bottom-0 left-0 w-1/4 h-auto text-green-50 opacity-30" 
          viewBox="0 0 200 200" 
          fill="currentColor"
          animate={{ 
            rotate: [0, -8, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <path d="M42.7,42.7C31.3,54.1,23.3,67.8,19.4,82.9C15.5,98,14.1,113.7,16.7,129.1c2.6,15.4,9.2,29.8,19.3,41.6c10.1,11.8,23.2,20.3,37.6,24.2c14.4,3.9,29.7,3.9,44.1,0c14.4-3.9,27.5-12.4,37.6-24.2c10.1-11.8,16.7-26.2,19.3-41.6c2.6-15.4,1.2-31.1-3.7-45.6c-4.9-14.5-13.4-27.5-24.8-37.6c-11.4-10.1-25.1-17-39.8-20.1c-14.7-3.1-30-2.2-44.2,2.6C47.8,32.3,43.7,40.9,42.7,42.7z"/>
        </motion.svg>
        
        {/* Animated medical cross symbols */}
        <motion.div 
          className="absolute top-20 left-1/4 w-8 h-8 bg-red-100 opacity-20 rounded-full flex items-center justify-center"
          variants={pulseAnimation}
          animate="pulse"
        >
          <div className="w-6 h-1 bg-red-500 absolute"></div>
          <div className="w-1 h-6 bg-red-500 absolute"></div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-40 right-1/4 w-12 h-12 bg-blue-100 opacity-20 rounded-full flex items-center justify-center"
          variants={pulseAnimation}
          animate="pulse"
        >
          <div className="w-8 h-1.5 bg-blue-500 absolute"></div>
          <div className="w-1.5 h-8 bg-blue-500 absolute"></div>
        </motion.div>
        
        {/* New floating elements for more dimension */}
        <motion.div 
          className="absolute top-24 right-1/3 w-6 h-6 bg-green-100 opacity-20 rounded-full"
          variants={floatingAnimation}
          animate="animate"
          custom={1}
        />
        
        <motion.div 
          className="absolute bottom-32 left-1/3 w-10 h-10 bg-purple-100 opacity-15 rounded-full"
          variants={floatingAnimation}
          animate="animate"
          custom={2}
          style={{ animationDelay: "1.5s" }}
        />
        
        {/* DNA-like medical symbol */}
        <div className="absolute right-20 top-1/4 opacity-10 hidden md:block">
          <motion.div 
            animate={{
              rotateZ: [0, 360],
              transition: { duration: 30, repeat: Infinity, ease: "linear" }
            }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i} 
                className="absolute w-3 h-3 bg-blue-400 rounded-full"
                animate={{
                  x: Math.cos(i * Math.PI / 2.5) * 30,
                  y: Math.sin(i * Math.PI / 2.5) * 30,
                }}
              />
            ))}
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i+5} 
                className="absolute w-3 h-3 bg-teal-400 rounded-full"
                animate={{
                  x: Math.cos((i * Math.PI / 2.5) + Math.PI) * 30,
                  y: Math.sin((i * Math.PI / 2.5) + Math.PI) * 30,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            animate={{ 
              backgroundColor: colorMode === 'medical' ? '#eff6ff' : colorMode === 'professional' ? '#f8fafc' : '#f0f9ff',
              color: colorMode === 'medical' ? '#2563eb' : colorMode === 'professional' ? '#334155' : '#0ea5e9',
            }}
            transition={{ duration: 1 }}
            className="inline-block py-1 px-4 rounded-full text-sm font-medium mb-3"
          >
            Healthcare Billing Solutions
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Medical Billing Services
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1.5 mx-auto rounded-full"
            animate={{ 
              background: colorMode === 'medical' 
                ? 'linear-gradient(to right, #2563eb, #06b6d4)' 
                : colorMode === 'professional'
                ? 'linear-gradient(to right, #334155, #1e40af)'
                : 'linear-gradient(to right, #0ea5e9, #6366f1)'
            }}
            transition={{ duration: 1 }}
          />
          
          <motion.p 
            className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Comprehensive medical billing and practice management solutions tailored to your hospital's specific needs
          </motion.p>
        </motion.div>

        {/* Color scheme selector with enhanced animations */}
        <motion.div 
          className="flex justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {Object.keys(colorSchemes).map((mode) => (
            <motion.button
              key={mode}
              onClick={() => setColorMode(mode)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                colorMode === mode 
                  ? mode === 'medical' ? 'bg-blue-600 text-white' 
                  : mode === 'professional' ? 'bg-slate-800 text-white'
                  : 'bg-sky-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Service Cards */}
        <div 
          className="relative overflow-hidden py-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Enhanced Progress bar with animation */}
          <motion.div 
            className="w-full max-w-3xl mx-auto h-1 bg-gray-200 rounded-full mb-10 overflow-hidden"
            initial={{ opacity: 0, scaleX: 0.8 }}
            animate={isVisible ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="h-full rounded-full"
              animate={{ 
                width: `${((activeIndex + 1) / services.length) * 100}%`,
                background: colorMode === 'medical' 
                  ? 'linear-gradient(to right, #2563eb, #06b6d4)' 
                  : colorMode === 'professional'
                  ? 'linear-gradient(to right, #334155, #1e40af)'
                  : 'linear-gradient(to right, #0ea5e9, #6366f1)'
              }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          <div className="relative">
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={activeIndex + "-" + animationCount}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {[
                  (activeIndex - 1 + services.length) % services.length,
                  activeIndex,
                  (activeIndex + 1) % services.length
                ].map((index, i) => {
                  const service = services[index];
                  const colorScheme = getColorScheme(index);
                  const isActive = index === activeIndex;
                  const position = i === 0 ? "left" : i === 1 ? "center" : "right";
                  
                  return (
                    <motion.div
                      key={`${service.id}-${position}-${activeIndex}`}
                      className={`rounded-2xl overflow-hidden transform transition-all duration-500 ${
                        isActive 
                          ? 'shadow-[0_10px_40px_rgba(59,130,246,0.2)] md:scale-105 z-10' 
                          : 'shadow-lg md:scale-95 opacity-80'
                      }`}
                      initial={{ 
                        x: position === "left" ? -100 : position === "right" ? 100 : 0,
                        opacity: 0,
                        y: position === "center" ? 20 : 0
                      }}
                      animate={{ 
                        x: 0,
                        y: 0,
                        opacity: isActive ? 1 : 0.8,
                        scale: isActive ? 1.05 : 0.95,
                        transition: { duration: 0.5 }
                      }}
                      whileHover={{ 
                        scale: isActive ? 1.08 : 1.03,
                        y: -5,
                        boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
                        transition: { duration: 0.3 }
                      }}
                      style={{
                        background: 'white',
                        border: '1px solid rgba(226, 232, 240, 1)'
                      }}
                      onClick={() => handleServiceClick(index)}
                    >
                      {/* Animated gradient top bar */}
                      <motion.div 
                        className="h-2"
                        animate={{ 
                            background: `linear-gradient(to right, ${
                              isActive ? `var(--tw-gradient-${colorScheme.primary.split(' ')[0].split('-')[1]})` : '#f1f5f9'
                            })`
                          }}
                        />
                        
                        <div className="p-6">
                          {/* Icon with enhanced styling */}
                          <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${colorScheme.secondary}`}>
                            {getIcon(service.icon)}
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                          
                          <p className="text-gray-600 mb-6">{service.description}</p>
                          
                          {/* 3D model or fallback icon based on capability */}
                          <div className="h-40 w-full relative overflow-hidden rounded-lg mb-4">
                            {use3D ? (
                              <Suspense fallback={getFallbackIcon(service.modelType, service.modelColor)}>
                                <ThreeDModel type={service.modelType} color={service.modelColor} />
                              </Suspense>
                            ) : (
                              getFallbackIcon(service.modelType, service.modelColor)
                            )}
                            
                            {/* Decorative elements */}
                            <motion.div 
                              className={`absolute bottom-3 right-3 w-4 h-4 rounded-full ${colorScheme.accent}`}
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.7, 1, 0.7]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          </div>
                          
                          {/* Learn more button with animated underline */}
                          <motion.button
                            className="inline-flex items-center text-sm font-medium mt-2"
                            style={{ color: service.modelColor }}
                            whileHover={{ x: 5 }}
                          >
                            Learn more
                            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                            <motion.div 
                              className="h-0.5 w-0 bg-current mt-0.5"
                              initial={{ width: 0 }}
                              whileHover={{ width: "100%" }}
                              transition={{ duration: 0.3 }}
                            />
                          </motion.button>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
  
            {/* Navigation dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {services.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <motion.button
                    key={service.id}
                    className={`w-3 h-3 rounded-full ${isActive ? 'bg-blue-600' : 'bg-gray-300'}`}
                    onClick={() => handleServiceClick(index)}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    animate={isActive ? { 
                      scale: [1, 1.2, 1],
                      backgroundColor: service.modelColor 
                    } : {}}
                    transition={{ duration: 0.5 }}
                  />
                );
              })}
            </div>
  
            {/* Arrow navigation */}
            <motion.button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 z-10 opacity-60 hover:opacity-100"
              onClick={() => handleServiceClick((activeIndex - 1 + services.length) % services.length)}
              whileHover={{ scale: 1.1, backgroundColor: "#f8fafc" }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: isHovered ? 0.8 : 0, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <motion.button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 z-10 opacity-60 hover:opacity-100"
              onClick={() => handleServiceClick((activeIndex + 1) % services.length)}
              whileHover={{ scale: 1.1, backgroundColor: "#f8fafc" }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={isVisible ? { opacity: isHovered ? 0.8 : 0, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
  
          {/* Call-to-action section */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-6"
              animate={{ 
                color: colorMode === 'medical' ? '#1e40af' : colorMode === 'professional' ? '#0f172a' : '#0284c7'
              }}
              transition={{ duration: 1 }}
            >
              Ready to optimize your medical billing and increase revenue?
            </motion.h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-6 py-3 rounded-lg text-white font-medium shadow-lg"
                animate={{ 
                  background: colorMode === 'medical' 
                    ? 'linear-gradient(to right, #2563eb, #06b6d4)' 
                    : colorMode === 'professional'
                    ? 'linear-gradient(to right, #334155, #1e40af)'
                    : 'linear-gradient(to right, #0ea5e9, #6366f1)'
                }}
                whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule a Free Consultation
              </motion.button>
              
              <motion.button
                className="px-6 py-3 rounded-lg font-medium border"
                animate={{ 
                  borderColor: colorMode === 'medical' ? '#2563eb' : colorMode === 'professional' ? '#334155' : '#0ea5e9',
                  color: colorMode === 'medical' ? '#2563eb' : colorMode === 'professional' ? '#334155' : '#0ea5e9'
                }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(241, 245, 249, 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                View All Services
              </motion.button>
            </div>
          </motion.div>
  
          {/* Testimonial quote for social proof */}
          <motion.div 
            className="mt-20 max-w-4xl mx-auto px-6 py-10 rounded-xl"
            animate={{ 
              backgroundColor: colorMode === 'medical' ? 'rgba(239, 246, 255, 0.7)' : colorMode === 'professional' ? 'rgba(248, 250, 252, 0.7)' : 'rgba(240, 249, 255, 0.7)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <svg className="w-12 h-12 text-blue-300 mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            <p className="text-xl italic text-gray-700 mb-6">
              "Switching to Medical Billing Consultants Service transformed our revenue cycle. Their expertise in medical coding and reimbursement strategies has increased our collections by over 23% while reducing our administrative burden."
            </p>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="font-bold text-blue-600">DR</span>
              </div>
              <div className="ml-4">
                <p className="font-bold text-gray-900">Dr. Rebecca Johnson</p>
                <p className="text-gray-600 text-sm">Chief Medical Officer, Westlake Medical Center</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };
  
  export default ServiceSlider;