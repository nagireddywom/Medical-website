import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: 1,
    icon: "claim-processing",
    modelType: "Claim",
    title: "Claim Processing",
    description: "Streamline your revenue cycle. We handle the entire claim submission process—from accurate coding to timely electronic filing. Our experts work to reduce errors, avoid rejections, and speed up reimbursements, so your practice can focus on patient care.",
    modelColor: "#3b82f6"
  },
  {
    id: 2,
    icon: "payment-posting",
    modelType: "Payment",
    title: "Payment Posting",
    description: "Gain clear visibility into your cash flow. We post payments swiftly and accurately, reconciling Explanation of Benefits (EOBs), Electronic Remittance Advice (ERAs), and patient payments. Our transparent reporting ensures you always know where your revenue stands.",
    modelColor: "#10b981"
  },
  {
    id: 3,
    icon: "accounts-receivable",
    modelType: "Accounts",
    title: "Accounts Receivable Management",
    description: "Accelerate your collections and reduce aging AR. Our dedicated team monitors unpaid claims, follows up diligently, and works to resolve issues quickly. We maximize your collections while minimizing write-offs—keeping your practice financially healthy.",
    modelColor: "#8b5cf6"
  },
  {
    id: 4,
    icon: "shield",
    modelType: "Verification",
    title: "Insurance Verification",
    description: "Ensure accurate coverage from the start. Our team verifies patient insurance benefits before services are rendered, minimizing claim denials and improving billing efficiency. We confirm eligibility, coverage limits, co-pays, and deductibles, providing your practice with the clarity needed to move forward confidently.",
    modelColor: "#ef4444"
  },
  {
    id: 5,
    icon: "utilization-review'",
    modelType: "Utilization",
    title: "Utilization Review",
    description: "Optimize care and reimbursement outcomes. Our utilization review services ensure that patient treatments meet clinical guidelines and payer requirements. We help you reduce denials and improve care planning through proactive and compliant reviews.",
    modelColor: "#f59e0b"
  },
  {
    id: 6,
    icon: "provider-enrollment",
    modelType: "management",
    title: "Provider Enrollment & Credentialing",
    description: "Get enrolled and stay compliant. We manage the end-to-end provider enrollment process with payers and handle credentialing with accuracy and speed. Whether you’re onboarding a new provider or updating existing credentials, we ensure minimal disruption to your revenue stream.",
    modelColor: "#06b6d4"
  },
//   {
//     id: 7,
//     icon: "server",
//     modelType: "technology",
//     title: "Technology Integration",
//     description: "Leverage cutting-edge healthcare technology with our seamless integration services that connect your systems for maximum efficiency.",
//     modelColor: "#ec4899"
//   }
];

// Enhanced theme color schemes
const colorSchemes = {
  vibrant: [
    { primary: 'from-blue-500 to-indigo-600', secondary: 'bg-blue-50 text-blue-600', accent: 'bg-blue-600/10' },
    { primary: 'from-emerald-500 to-teal-600', secondary: 'bg-emerald-50 text-emerald-600', accent: 'bg-emerald-600/10' },
    { primary: 'from-violet-500 to-purple-600', secondary: 'bg-violet-50 text-violet-600', accent: 'bg-violet-600/10' },
    { primary: 'from-rose-500 to-pink-600', secondary: 'bg-rose-50 text-rose-600', accent: 'bg-rose-600/10' },
    { primary: 'from-amber-500 to-orange-600', secondary: 'bg-amber-50 text-amber-600', accent: 'bg-amber-600/10' },
    { primary: 'from-cyan-500 to-sky-600', secondary: 'bg-cyan-50 text-cyan-600', accent: 'bg-cyan-600/10' },
    { primary: 'from-fuchsia-500 to-pink-600', secondary: 'bg-fuchsia-50 text-fuchsia-600', accent: 'bg-fuchsia-600/10' },
  ],
  professional: [
    { primary: 'from-blue-700 to-blue-900', secondary: 'bg-blue-50 text-blue-700', accent: 'bg-blue-600/10' },
    { primary: 'from-slate-700 to-slate-900', secondary: 'bg-slate-100 text-slate-700', accent: 'bg-slate-600/10' },
    { primary: 'from-emerald-700 to-emerald-900', secondary: 'bg-emerald-50 text-emerald-700', accent: 'bg-emerald-600/10' },
    { primary: 'from-indigo-700 to-indigo-900', secondary: 'bg-indigo-50 text-indigo-700', accent: 'bg-indigo-600/10' },
    { primary: 'from-gray-700 to-gray-900', secondary: 'bg-gray-100 text-gray-700', accent: 'bg-gray-600/10' },
    { primary: 'from-cyan-700 to-cyan-900', secondary: 'bg-cyan-50 text-cyan-700', accent: 'bg-cyan-600/10' },
    { primary: 'from-violet-700 to-violet-900', secondary: 'bg-violet-50 text-violet-700', accent: 'bg-violet-600/10' },
  ],
  modern: [
    { primary: 'from-sky-500 via-blue-600 to-indigo-700', secondary: 'bg-sky-50 text-sky-600', accent: 'bg-sky-500/10' },
    { primary: 'from-pink-500 via-rose-600 to-red-700', secondary: 'bg-pink-50 text-pink-600', accent: 'bg-pink-500/10' },
    { primary: 'from-lime-500 via-green-600 to-emerald-700', secondary: 'bg-lime-50 text-lime-600', accent: 'bg-lime-500/10' },
    { primary: 'from-amber-500 via-orange-600 to-red-700', secondary: 'bg-amber-50 text-amber-600', accent: 'bg-amber-500/10' },
    { primary: 'from-violet-500 via-purple-600 to-fuchsia-700', secondary: 'bg-violet-50 text-violet-600', accent: 'bg-violet-500/10' },
    { primary: 'from-cyan-500 via-teal-600 to-blue-700', secondary: 'bg-cyan-50 text-cyan-600', accent: 'bg-cyan-500/10' },
    { primary: 'from-gray-600 via-gray-700 to-gray-900', secondary: 'bg-gray-100 text-gray-700', accent: 'bg-gray-700/10' },
  ]
};

const MedicalServiceSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [colorMode, setColorMode] = useState('vibrant');
  const sliderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationCount, setAnimationCount] = useState(0);
  const [activeTab, setActiveTab] = useState('carousel'); // 'carousel' or 'grid'

  // Use IntersectionObserver to detect when slider is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
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

  // Only run auto-rotation when component is visible and not hovered
  useEffect(() => {
    if (isVisible && !isHovered && activeTab === 'carousel') {
      // Clear existing interval before creating a new one
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      intervalRef.current = setInterval(() => {
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
  }, [isVisible, isHovered, services.length, activeTab]);

  const handleServiceClick = (index) => {
    // Clear interval when user interacts
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    
    return false;
  };

  const getIcon = (iconName) => {
    switch(iconName) {
        case 'claim-processing':
            return (
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            );
          case 'payment-posting':
            return (
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
              </svg>
            );
          case 'accounts-receivable':
            return (
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            );
          case 'provider-enrollment':
            return (
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
              </svg>
            );
          case 'utilization-review':
            return (
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
              </svg>
            );
      case 'shield':
        return (
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        );
    //   case 'calculator':
    //     return (
    //       <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
    //       </svg>
    //     );
    //   case 'users':
    //     return (
    //       <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    //       </svg>
    //     );
    //   case 'server':
    //     return (
    //       <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z" />
    //       </svg>
    //     );
      default:
        return (
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
          </svg>
        );
    }
  };

  const getColorScheme = (index) => {
    return colorSchemes[colorMode][index % colorSchemes[colorMode].length];
  };

  // Animation variants
  const floatingAnimation = {
    initial: { y: 0 },
    animate: { 
      y: [0, -10, 0], 
      transition: { 
        repeat: Infinity, 
        duration: 3,
        ease: "easeInOut" 
      } 
    }
  };

  const pulseAnimation = {
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Animation for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut" 
      }
    }),
    hover: { 
      y: -10, 
      scale: 1.03, 
      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    }
  };

  // Shadow animation for cards
  const shadowVariants = {
    rest: { 
      boxShadow: "0 4px 20px rgba(0,0,0,0.05)" 
    },
    hover: { 
      boxShadow: "0 20px 30px rgba(0,0,0,0.1)" 
    }
  };

  return (
    <div 
      ref={sliderRef}
      className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
      id="medical-services"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 right-0 w-1/3 h-1/3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <svg viewBox="0 0 200 200" fill="none">
            <path 
              d="M139.2,27.7c-11.4-11.4-25.1-19.4-40.2-23.3C83.5,0.4,67.8-1,52.4,1.6C37,4.2,22.6,10.8,10.8,20.9C-1,31-9.5,44.1-13.4,58.5c-3.9,14.4-3.9,29.7,0,44.1c3.9,14.4,12.4,27.5,24.2,37.6c11.8,10.1,26.2,16.7,41.6,19.3c15.4,2.6,31.1,1.2,45.6-3.7c14.5-4.9,27.5-13.4,37.6-24.8c10.1-11.4,17-25.1,20.1-39.8c3.1-14.7,2.2-30-2.6-44.2C158.6,32.8,150,28.7,139.2,27.7z"
              fill={colorMode === 'vibrant' ? '#3b82f6' : colorMode === 'professional' ? '#1e40af' : '#0ea5e9'}
              opacity="0.1"
            />
          </svg>
          <motion.div
            animate={{ 
              rotate: [0, 10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 18, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Additional decorative elements here */}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-0 left-0 w-1/3 h-1/3" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
            <path 
              d="M42.7,42.7C31.3,54.1,23.3,67.8,19.4,82.9C15.5,98,14.1,113.7,16.7,129.1c2.6,15.4,9.2,29.8,19.3,41.6c10.1,11.8,23.2,20.3,37.6,24.2c14.4,3.9,29.7,3.9,44.1,0c14.4-3.9,27.5-12.4,37.6-24.2c10.1-11.8,16.7-26.2,19.3-41.6c2.6-15.4,1.2-31.1-3.7-45.6c-4.9-14.5-13.4-27.5-24.8-37.6c-11.4-10.1-25.1-17-39.8-20.1c-14.7-3.1-30-2.2-44.2,2.6C47.8,32.3,43.7,40.9,42.7,42.7z"
              fill={colorMode === 'vibrant' ? '#10b981' : colorMode === 'professional' ? '#065f46' : '#059669'}
              opacity="0.1"
            />
          </svg>
          <motion.div
            animate={{ 
              rotate: [0, -8, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{ 
              duration: 14, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            {/* Additional decorative elements here */}
          </motion.div>
        </motion.div>
        
        {/* Medical themed animated elements */}
        <motion.div
          className="absolute top-40 right-1/4"
          variants={floatingAnimation}
          animate="animate"
        >
          <motion.div 
            className="w-6 h-6 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(239, 68, 68, 0.1)' }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-4 h-1 bg-red-500 absolute"></div>
            <div className="w-1 h-4 bg-red-500 absolute"></div>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-40 left-1/4"
          variants={floatingAnimation}
          animate="animate"
          transition={{ delay: 1.5 }}
        >
          <motion.div 
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(59, 130, 246, 0.1)' }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{ 
              duration: 4.5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <div className="w-6 h-1.5 bg-blue-500 absolute"></div>
            <div className="w-1.5 h-6 bg-blue-500 absolute"></div>
          </motion.div>
        </motion.div>
        
        {/* DNA-like medical symbol */}
        <div className="absolute right-20 top-1/4 opacity-10 hidden lg:block">
          <motion.div 
            animate={{
              rotateZ: [0, 360],
              transition: { duration: 50, repeat: Infinity, ease: "linear" }
            }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div 
                key={i} 
                className="absolute w-3 h-3 rounded-full"
                style={{
                  backgroundColor: colorMode === 'vibrant' ? '#3b82f6' : colorMode === 'professional' ? '#1e40af' : '#0ea5e9'
                }}
                animate={{
                  x: Math.cos(i * Math.PI / 3) * 30,
                  y: Math.sin(i * Math.PI / 3) * 30,
                }}
              />
            ))}
            {[...Array(6)].map((_, i) => (
              <motion.div 
                key={`second-${i}`} 
                className="absolute w-3 h-3 rounded-full"
                style={{
                  backgroundColor: colorMode === 'vibrant' ? '#10b981' : colorMode === 'professional' ? '#065f46' : '#059669'
                }}
                animate={{
                  x: Math.cos((i * Math.PI / 3) + Math.PI) * 30,
                  y: Math.sin((i * Math.PI / 3) + Math.PI) * 30,
                }}
              />
            ))}
          </motion.div>
        </div>
        
        {/* Medical grid pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
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
            className="inline-block py-1 px-4 rounded-full text-sm font-medium mb-3"
            animate={{ 
              backgroundColor: colorMode === 'vibrant' ? '#eff6ff' : colorMode === 'professional' ? '#f8fafc' : '#e0f2fe',
              color: colorMode === 'vibrant' ? '#2563eb' : colorMode === 'professional' ? '#0f172a' : '#0284c7'
            }}
            transition={{ duration: 0.8 }}
          >
            Healthcare Billing Solutions
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ 
              background: colorMode === 'vibrant' 
                ? 'linear-gradient(to right, #2563eb, #06b6d4)' 
                : colorMode === 'professional'
                ? 'linear-gradient(to right, #0f172a, #1e40af)'
                : 'linear-gradient(to right, #0284c7, #4f46e5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textFillColor: 'transparent'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
          Medical Billing <span className="text-gray-700">& Consulting Services</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Explore our comprehensive suite of services designed to streamline your medical practice operations, optimize revenue cycles, and enhance patient care.
          </motion.p>
          
          {/* View toggle for carousel/grid */}
          <motion.div 
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {/* <div className="bg-white shadow-md rounded-full p-1 flex items-center">
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === 'carousel' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-gray-800'}`}
                onClick={() => setActiveTab('carousel')}
              >
                Carousel
              </button>
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-gray-800'}`}
                onClick={() => setActiveTab('grid')}
              >
                Grid View
              </button>
            </div> */}
          </motion.div>
          
          {/* Theme picker */}
          {/* <motion.div 
            className="flex justify-center mt-6 space-x-2"
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {['vibrant', 'professional', 'modern'].map((theme) => (
              <button 
                key={theme}
                className={`px-3 py-1 rounded-full text-xs font-medium transition ${colorMode === theme ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                onClick={() => setColorMode(theme)}
              >
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </button>
            ))}
          </motion.div> */}
        </motion.div>
        
        {/* Carousel View */}
        {activeTab === 'carousel' && (
          <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative max-w-4xl mx-auto">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`service-${activeIndex}-${animationCount}`}
                  className="relative"
                  initial={{ 
                    opacity: 0, 
                    x: direction > 0 ? 100 : -100 
                  }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                      duration: 0.5, 
                      ease: "easeOut"
                    } 
                  }}
                  exit={{ 
                    opacity: 0, 
                    x: direction > 0 ? -100 : 100,
                    transition: { 
                      duration: 0.5, 
                      ease: "easeIn"
                    }
                  }}
                >
                  <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg p-6 md:p-8">
                    <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
                      <motion.div 
                        className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-4 bg-gradient-to-br ${getColorScheme(activeIndex).primary}`}
                        variants={pulseAnimation}
                        animate="pulse"
                      >
                        <span className="text-white">
                          {getIcon(services[activeIndex].icon)}
                        </span>
                      </motion.div>
                      <motion.div
                        className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${getColorScheme(activeIndex).secondary}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {services[activeIndex].modelType.charAt(0).toUpperCase() + services[activeIndex].modelType.slice(1)}
                      </motion.div>
                    </div>
                    
                    <div className="w-full md:w-2/3 md:pl-8">
                      <motion.h3 
                        className="text-2xl font-bold mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {services[activeIndex].title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-600 mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {services[activeIndex].description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <button className={`px-6 py-2 rounded-lg text-white bg-gradient-to-r ${getColorScheme(activeIndex).primary} hover:shadow-lg transition duration-300 transform hover:-translate-y-1`}>
                          Learn More
                        </button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? `w-10 bg-gradient-to-r ${getColorScheme(index).primary}` 
                        : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Prev/Next buttons */}
              <div className="absolute inset-y-0 left-0 md:-left-12 flex items-center">
                <button
                  onClick={() => {
                    setDirection(-1);
                    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
                  }}
                  className="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center focus:outline-none hover:bg-gray-50 transition"
                  aria-label="Previous slide"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              
              <div className="absolute inset-y-0 right-0 md:-right-12 flex items-center">
                <button
                  onClick={() => {
                    setDirection(1);
                    setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
                  }}
                  className="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center focus:outline-none hover:bg-gray-50 transition"
                  aria-label="Next slide"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Grid View */}
        {activeTab === 'grid' && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="h-full"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                whileHover="hover"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="bg-white rounded-xl h-full overflow-hidden shadow-md transition-all duration-300"
                  variants={shadowVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  <div className={`h-3 bg-gradient-to-r ${getColorScheme(index).primary}`}></div>
                  <div className="p-6">
                    <div className="mb-5 flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getColorScheme(index).accent}`}>
                        <span className={getColorScheme(index).secondary.split(' ')[1]}>
                          {getIcon(service.icon)}
                        </span>
                      </div>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getColorScheme(index).secondary}`}>
                        {service.modelType.charAt(0).toUpperCase() + service.modelType.slice(1)}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="mt-auto">
                      <button className={`px-4 py-2 rounded-lg text-white bg-gradient-to-r ${getColorScheme(index).primary} hover:shadow-lg transition duration-300 transform hover:-translate-y-1 text-sm`}>
                        Learn More
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MedicalServiceSlider;