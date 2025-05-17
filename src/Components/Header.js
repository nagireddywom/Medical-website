// import React, { useState, useEffect } from 'react';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
  
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
  
//   return (
//     <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//       isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
//     }`}>
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center">
//           <div className="text-3xl font-bold flex items-center">
//             <svg className="w-10 h-10 mr-2" viewBox="0 0 24 24" fill={isScrolled ? "#3b82f6" : "white"}>
//               <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//             </svg>
//             <span className={isScrolled ? "text-gray-900" : "text-white"}>
//               Healthcare<span className="font-light">Institution</span>
//             </span>
//           </div>
//         </div>
        
//         {/* Navigation */}
//         <nav className="hidden md:flex items-center space-x-1">
//           <div className="relative group px-3 py-2">
//             <button className={`flex items-center font-medium ${
//               isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-white/80'
//             }`}>
//               Demos
//               <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>
//             <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//               <div className="py-1">
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Demo 1</a>
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Demo 2</a>
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Demo 3</a>
//               </div>
//             </div>
//           </div>
          
//           <div className="relative group px-3 py-2">
//             <button className={`flex items-center font-medium ${
//               isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-white/80'
//             }`}>
//               About Us
//               <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>
//             <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//               <div className="py-1">
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Story</a>
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Team</a>
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Careers</a>
//               </div>
//             </div>
//           </div>
          
//           <a href="#" className={`px-3 py-2 font-medium ${
//             isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-white/80'
//           }`}>
//             Departments
//           </a>
          
//           <a href="#" className={`px-3 py-2 font-medium ${
//             isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-white/80'
//           }`}>
//             Services
//           </a>
          
//           <div className="relative group px-3 py-2">
//             <button className={`flex items-center font-medium ${
//               isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-white/80'
//             }`}>
//               All Pages
//               <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>
//             <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//               <div className="py-1">
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blog</a>
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">FAQ</a>
//                 <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pricing</a>
//               </div>
//             </div>
//           </div>
//         </nav>
        
//         {/* Contact Button */}
//         <button className="bg-white/90 hover:bg-white text-gray-900 px-6 py-2 rounded-full font-medium transition-all hover:shadow-md">
//           Contact Us
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Mb from './Assets/MB Logo2.jpg'

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };
  
//   return (
//     <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//       isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
//     }`}>
//       <div className="container mx-auto px-6 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center">
//           <a href="/" className="flex items-center">
//             {/* Replace SVG with image */}
//             <img 
//               src={Mb} 
//               alt="MB Consultancy & Services Logo" 
//               className="h-14 w-auto mr-3"
//             />
//             <div className="flex flex-col">
//               <span className={`text-3xl font-serif tracking-wider ${isScrolled ? "text-teal-600" : "text-white"}`}>
//                 M B
//               </span>
//               <div className={`flex flex-col text-xs ${isScrolled ? "text-gray-700" : "text-white"}`}>
//                 <span className="font-light">Consultancy & Services</span>
//                 <span className="text-xs font-medium">Unlocking Growth with Payment Ease</span>
//               </div>
//             </div>
//           </a>
//         </div>
        
//         {/* Rest of the header remains unchanged */}
//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex items-center space-x-1">
//           <a href="/" className={`px-4 py-2 font-medium relative group ${
//             isScrolled ? 'text-gray-800 hover:text-teal-600' : 'text-white hover:text-white/80'
//           }`}>
//             Home
//             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
//           </a>
//           <a href="/about" className={`px-4 py-2 font-medium relative group ${
//             isScrolled ? 'text-gray-800 hover:text-teal-600' : 'text-white hover:text-white/80'
//           }`}>
//             About Us
//             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
//           </a>
          
//           <a href="/services" className={`px-4 py-2 font-medium relative group ${
//             isScrolled ? 'text-gray-800 hover:text-teal-600' : 'text-white hover:text-white/80'
//           }`}>
//             Services
//             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
//           </a>
          
//           <a href="/contact" className={`px-4 py-2 font-medium relative group ${
//             isScrolled ? 'text-gray-800 hover:text-teal-600' : 'text-white hover:text-white/80'
//           }`}>
//             Contact Us
//             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
//           </a>
//         </nav>
          
//           {/* Other navigation items remain the same */}
       
        
//         {/* Contact Button */}
//         <div className="hidden md:block">
//           <motion.button 
//             className={`${isScrolled 
//               ? 'bg-teal-600 hover:bg-teal-700 text-white' 
//               : 'bg-white/90 hover:bg-white text-teal-700'} 
//               px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-lg`}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Contact Us
//           </motion.button>
//         </div>
        
//         {/* Mobile Menu Button */}
//         <button 
//           className="lg:hidden flex items-center"
//           onClick={toggleMobileMenu}
//           aria-label="Toggle mobile menu"
//         >
//           <div className={`w-7 h-5 flex flex-col justify-between relative ${isMobileMenuOpen ? 'transform' : ''}`}>
//             <span className={`w-full h-0.5 ${isScrolled ? 'bg-gray-800' : 'bg-white'} transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2 absolute' : ''}`}></span>
//             <span className={`w-full h-0.5 ${isScrolled ? 'bg-gray-800' : 'bg-white'} transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
//             <span className={`w-full h-0.5 ${isScrolled ? 'bg-gray-800' : 'bg-white'} transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2 absolute' : ''}`}></span>
//           </div>
//         </button>
//       </div>
      
//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div 
//             className="lg:hidden bg-white shadow-xl"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="container mx-auto px-6 py-4">
//               <nav className="flex flex-col space-y-3">
//                 <a href="/" className="px-3 py-2 text-gray-800 hover:text-teal-600 font-medium border-b border-gray-100">
//                   Home
//                 </a>
//                 <a href="/about" className="px-3 py-2 text-gray-800 hover:text-teal-600 font-medium border-b border-gray-100">
//                   About Us
//                 </a>
//                 <a href="/services" className="px-3 py-2 text-gray-800 hover:text-teal-600 font-medium border-b border-gray-100">
//                   Services
//                 </a>
//                 <a href="/contact" className="px-3 py-2 text-gray-800 hover:text-teal-600 font-medium">
//                   Contact Us
//                 </a>
//                 <div className="pt-2">
//                   <button className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-medium transition-all">
//                     Contact Us
//                   </button>
//                 </div>
//               </nav>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Mb from './Assets/MB Logo2.jpg'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Handle clicks outside the menu to close it
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img 
              src={Mb}
              alt="MB Consultancy & Services Logo" 
              className="h-14 w-auto mr-3"
            />
            <div className="flex flex-col">
              <span className={`text-3xl font-serif tracking-wider ${isScrolled ? "text-teal-600" : "text-white"}`}>
                SV MB
              </span>
              <div className={`flex flex-col text-xs ${isScrolled ? "text-gray-700" : "text-white"}`}>
                <span className="font-light">Consultancy & Services</span>
                {/* <span className="text-xs font-medium">Unlocking Growth with Payment Ease</span> */}
              </div>
            </div>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <a href="/" className={`px-4 py-2 font-medium relative group ${
            isScrolled ? 'text-gray-800 hover:text-teal-600' : 'text-white hover:text-white/80'
          }`}>
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          
          <a href="/about" className={`px-4 py-2 font-medium relative group ${
            isScrolled ? 'text-gray-800 hover:text-teal-600' : 'text-white hover:text-white/80'
          }`}>
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          
          <a href="/services" className={`px-4 py-2 font-medium relative group ${
            isScrolled ? 'text-gray-800 hover:text-teal-600' : 'text-white hover:text-white/80'
          }`}>
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          
          {/* <a href="/contact" className={`px-4 py-2 font-medium relative group ${
            isScrolled ? 'text-gray-800 hover:text-teal-600' : 'text-white hover:text-white/80'
          }`}>
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
          </a> */}
        </nav>
        
        {/* Contact Button */}
        <div className="hidden md:block">
          <motion.button 
            className={`${isScrolled 
              ? 'bg-teal-600 hover:bg-teal-700 text-white' 
              : 'bg-white/90 hover:bg-white text-teal-700'} 
              px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-lg`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          ref={buttonRef}
          className="lg:hidden flex items-center"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className={`w-7 h-5 flex flex-col justify-between relative ${isMobileMenuOpen ? 'transform' : ''}`}>
            <span className={`w-full h-0.5 ${isScrolled ? 'bg-gray-800' : 'bg-white'} transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2 absolute' : ''}`}></span>
            <span className={`w-full h-0.5 ${isScrolled ? 'bg-gray-800' : 'bg-white'} transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 ${isScrolled ? 'bg-gray-800' : 'bg-white'} transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2 absolute' : ''}`}></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            ref={menuRef}
            className="lg:hidden bg-white shadow-xl"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-4">
              <nav className="flex flex-col space-y-3">
                <a href="/" className="px-3 py-2 text-gray-800 hover:text-teal-600 font-medium border-b border-gray-100">
                  Home
                </a>
                <a href="/about" className="px-3 py-2 text-gray-800 hover:text-teal-600 font-medium border-b border-gray-100">
                  About Us
                </a>
                <a href="/services" className="px-3 py-2 text-gray-800 hover:text-teal-600 font-medium border-b border-gray-100">
                  Services
                </a>
                <a href="/contact" className="px-3 py-2 text-gray-800 hover:text-teal-600 font-medium">
                  Contact Us
                </a>
                {/* <div className="pt-2">
                  <button className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-medium transition-all">
                    Contact Us
                  </button>
                </div> */}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;