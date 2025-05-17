// import React, { useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import styled from 'styled-components';
// import '../Components/WorkFlow.css';

// const WorkflowProcess = () => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//   }, [controls, inView]);

//   const steps = [
//     {
//       number: '01',
//       title: 'Streamline',
//       description: 'It is essential to streamline your coding and data entry.',
//       color: '#3a4a5a',
//     },
//     {
//       number: '02',
//       title: 'Accelerate',
//       description: 'The billing process can take time but we have the skillset to speed up this process.',
//       color: '#4a5a6a',
//     },
//     {
//       number: '03',
//       title: 'Perform',
//       description: 'Analysis and reporting are important to find trends.',
//       color: '#5a6a7a',
//     },
//     {
//       number: '04',
//       title: 'Reduce',
//       description: 'Billing delays and denials hurt your cash flow.',
//       color: '#1E88E5',
//     },
//     {
//       number: '05',
//       title: 'Leverage',
//       description: 'We can help you accomplish your business goals.',
//       color: '#3a4a5a',
//     },
//   ];

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: 'easeOut',
//       },
//     },
//   };

//   const lineVariants = {
//     hidden: { width: 0 },
//     visible: {
//       width: '100%',
//       transition: {
//         duration: 1.5,
//         ease: 'easeInOut',
//       },
//     },
//   };

//   return (
//     <WorkflowContainer>
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="workflow-header"
//       >
//         <h3>We focus on the things we do well.</h3>
//         <h1>Our Work Process</h1>
//       </motion.div>

//       <motion.div
//         ref={ref}
//         variants={containerVariants}
//         initial="hidden"
//         animate={controls}
//         className="workflow-steps"
//       >
//         {steps.map((step, index) => (
//           <React.Fragment key={step.number}>
//             <motion.div
//               className="step-container"
//               variants={itemVariants}
//             >
//               <motion.div 
//                 className="step-circle"
//                 style={{ backgroundColor: step.color }}
//                 whileHover={{ 
//                   scale: 1.1, 
//                   boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
//                   transition: { duration: 0.3 }
//                 }}
//               >
//                 <span>{step.number}</span>
//               </motion.div>
//               <motion.div 
//                 className="step-content"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
//               >
//                 <h3>{step.title}</h3>
//                 <p>{step.description}</p>
//               </motion.div>
//             </motion.div>
            
//             {index < steps.length - 1 && (
//               <motion.div 
//                 className="connector-line"
//                 variants={lineVariants}
//               />
//             )}
//           </React.Fragment>
//         ))}
//       </motion.div>
//     </WorkflowContainer>
//   );
// };

// const WorkflowContainer = styled.section`
//   padding: 80px 20px;
//   background: linear-gradient(135deg, #2c3e50 0%, #4a5a6a 100%);
//   color: white;
//   text-align: center;
// `;

// export default WorkflowProcess;


//design 2
// import React, { useEffect, useState } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const MedicalWorkflowProcess = () => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     threshold: 0.2,
//     triggerOnce: true,
//   });
//   const [activeStep, setActiveStep] = useState(0);

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//   }, [controls, inView]);

//   // Auto-hovering effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveStep((prev) => (prev + 1) % 5);
//     }, 3000);
    
//     return () => clearInterval(interval);
//   }, []);

//   const steps = [
//     {
//       number: '1',
//       title: 'Streamline',
//       description: 'It is essential to streamline your coding and data entry.',
//       color: 'bg-teal-600',
//       iconColor: 'text-teal-200',
//       shadowColor: 'shadow-teal-300/20',
//     },
//     {
//       number: '2',
//       title: 'Accelerate',
//       description: 'The billing process can take time but we have the skillset to speed up this process.',
//       color: 'bg-blue-600',
//       iconColor: 'text-blue-200',
//       shadowColor: 'shadow-blue-300/20',
//     },
//     {
//       number: '3',
//       title: 'Perform',
//       description: 'Analysis and reporting are important to find trends.',
//       color: 'bg-indigo-600',
//       iconColor: 'text-indigo-200',
//       shadowColor: 'shadow-indigo-300/20',
//     },
//     {
//       number: '4',
//       title: 'Reduce',
//       description: 'Billing delays and denials hurt your cash flow.',
//       color: 'bg-sky-600',
//       iconColor: 'text-sky-200',
//       shadowColor: 'shadow-sky-300/20',
//     },
//     {
//       number: '5',
//       title: 'Leverage',
//       description: 'We can help you accomplish your business goals.',
//       color: 'bg-cyan-600',
//       iconColor: 'text-cyan-200',
//       shadowColor: 'shadow-cyan-300/20',
//     },
//   ];

//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: 'easeOut',
//       },
//     },
//   };

//   return (
//     <div className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h3 className="text-lg md:text-xl text-slate-600 font-medium mb-3">
//             We focus on the things we do well.
//           </h3>
//           <h1 className="text-3xl md:text-5xl font-bold text-slate-800 relative inline-block">
//             Our Work Process
//             <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"></span>
//           </h1>
//         </motion.div>

//         {/* Desktop Workflow */}
//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={controls}
//           className="hidden md:flex justify-between items-center max-w-6xl mx-auto relative"
//         >
//           {steps.map((step, index) => (
//             <React.Fragment key={step.number}>
//               <motion.div
//                 className="flex flex-col items-center w-40 z-10"
//                 variants={itemVariants}
//                 animate={activeStep === index ? { scale: 1.05 } : { scale: 1 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <motion.div 
//                   className={`${step.color} ${step.shadowColor} w-20 h-20 rounded-full flex items-center justify-center shadow-lg mb-4 relative overflow-hidden group`}
//                   animate={activeStep === index ? { 
//                     scale: 1.1,
//                     boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
//                   } : { 
//                     scale: 1,
//                     boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//                   }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <motion.div 
//                     className="absolute inset-0 bg-white opacity-20"
//                     animate={activeStep === index ? { y: '0%' } : { y: '100%' }}
//                     transition={{ duration: 0.7 }}
//                   />
//                   <span className={`text-2xl font-bold text-white`}>{step.number}</span>
//                 </motion.div>
//                 <motion.h3 
//                   className="text-xl font-semibold text-slate-800 mb-2"
//                   animate={activeStep === index ? { color: '#0284c7' } : { color: '#1e293b' }}
//                 >
//                   {step.title}
//                 </motion.h3>
//                 <motion.p 
//                   className="text-sm text-slate-600 text-center"
//                   animate={activeStep === index ? { opacity: 1 } : { opacity: 0.7 }}
//                 >
//                   {step.description}
//                 </motion.p>
//               </motion.div>
              
//               {index < steps.length - 1 && (
//                 <motion.div 
//                   className="h-0.5 bg-gradient-to-r from-blue-200 via-teal-200 to-blue-200 flex-grow max-w-24 relative"
//                   initial={{ width: 0 }}
//                   animate={{ width: '100%' }}
//                   transition={{ duration: 1.5, delay: 0.5 }}
//                 >
//                   <motion.div 
//                     className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-teal-400 rounded-full"
//                     animate={
//                       activeStep === index ? 
//                       { x: ['0%', '100%'], opacity: [0, 1, 0] } : 
//                       (activeStep === index + 1 ? 
//                         { x: ['100%', '0%'], opacity: [0, 1, 0] } : 
//                         { opacity: 0 })
//                     }
//                     transition={{ 
//                       duration: 1.5, 
//                       ease: "easeInOut",
//                       repeat: activeStep === index || activeStep === index + 1 ? 1 : 0
//                     }}
//                   />
//                 </motion.div>
//               )}
//             </React.Fragment>
//           ))}
//         </motion.div>

//         {/* Mobile Workflow */}
//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={controls}
//           className="md:hidden space-y-8"
//         >
//           {steps.map((step, index) => (
//             <motion.div
//               key={step.number}
//               className="flex items-start space-x-4"
//               variants={itemVariants}
//               animate={activeStep === index ? { scale: 1.02, x: 5 } : { scale: 1, x: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <motion.div 
//                 className={`${step.color} ${step.shadowColor} w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center shadow-lg relative overflow-hidden`}
//                 animate={activeStep === index ? { 
//                   scale: 1.1,
//                   boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
//                 } : { 
//                   scale: 1,
//                   boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//                 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <motion.div 
//                   className="absolute inset-0 bg-white opacity-20"
//                   animate={activeStep === index ? { y: '0%' } : { y: '100%' }}
//                   transition={{ duration: 0.7 }}
//                 />
//                 <span className="text-xl font-bold text-white">{step.number}</span>
//                 {index < steps.length - 1 && (
//                   <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-blue-400 to-teal-300 overflow-hidden">
//                     <motion.div 
//                       className="w-full h-4 bg-white absolute"
//                       animate={
//                         activeStep === index ? 
//                         { y: ['-100%', '200%'], opacity: [0, 1, 0] } : 
//                         { opacity: 0 }
//                       }
//                       transition={{ 
//                         duration: 1.5, 
//                         ease: "easeInOut",
//                         repeat: activeStep === index ? 1 : 0
//                       }}
//                     />
//                   </div>
//                 )}
//               </motion.div>
//               <div className="flex-grow">
//                 <motion.h3 
//                   className="text-lg font-semibold text-slate-800 mb-1"
//                   animate={activeStep === index ? { color: '#0284c7' } : { color: '#1e293b' }}
//                 >
//                   {step.title}
//                 </motion.h3>
//                 <motion.p 
//                   className="text-sm text-slate-600"
//                   animate={activeStep === index ? { opacity: 1 } : { opacity: 0.7 }}
//                 >
//                   {step.description}
//                 </motion.p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default MedicalWorkflowProcess;


import React, { useEffect, useState } from 'react';

const MedicalWorkflowProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [inView, setInView] = useState(true);

  // Auto-hovering effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      number: '1',
      title: 'Streamline',
      description: 'It is essential to streamline your coding and data entry.',
      color: 'bg-teal-600',
      iconColor: 'text-teal-200',
      shadowColor: 'shadow-teal-300',
    },
    {
      number: '2',
      title: 'Accelerate',
      description: 'The billing process can take time but we have the skillset to speed up this process.',
      color: 'bg-blue-600',
      iconColor: 'text-blue-200',
      shadowColor: 'shadow-blue-300',
    },
    {
      number: '3',
      title: 'Perform',
      description: 'Analysis and reporting are important to find trends.',
      color: 'bg-indigo-600',
      iconColor: 'text-indigo-200',
      shadowColor: 'shadow-indigo-300',
    },
    {
      number: '4',
      title: 'Reduce',
      description: 'Billing delays and denials hurt your cash flow.',
      color: 'bg-sky-600',
      iconColor: 'text-sky-200',
      shadowColor: 'shadow-sky-300',
    },
    {
      number: '5',
      title: 'Leverage',
      description: 'We can help you accomplish your business goals.',
      color: 'bg-cyan-600',
      iconColor: 'text-cyan-200',
      shadowColor: 'shadow-cyan-300',
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-lg md:text-xl text-slate-600 font-medium mb-3">
            We focus on the things we do well.
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 relative inline-block">
            Our Work Process
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"></span>
          </h1>
        </div>

        {/* Desktop Workflow */}
        <div className="hidden md:flex justify-between items-center max-w-6xl mx-auto relative">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div
                className="flex flex-col items-center w-40 z-10 transition-all duration-300"
                style={{
                  transform: activeStep === index ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                <div 
                  className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center shadow-lg mb-4 relative overflow-hidden group transition-all duration-300`}
                  style={{
                    transform: activeStep === index ? 'scale(1.1)' : 'scale(1)',
                    boxShadow: activeStep === index ? '0 10px 25px rgba(0,0,0,0.2)' : '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                >
                  <div 
                    className="absolute inset-0 bg-white opacity-20 transition-transform duration-700"
                    style={{
                      transform: activeStep === index ? 'translateY(0%)' : 'translateY(100%)'
                    }}
                  />
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 
                  className="text-xl font-semibold mb-2 transition-colors duration-300"
                  style={{
                    color: activeStep === index ? '#0284c7' : '#1e293b'
                  }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-sm text-slate-600 text-center transition-opacity duration-300"
                  style={{
                    opacity: activeStep === index ? 1 : 0.7
                  }}
                >
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="h-0.5 bg-gradient-to-r from-blue-200 via-teal-200 to-blue-200 flex-grow max-w-24 relative">
                  <div 
                    className={`absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-teal-400 rounded-full transition-all duration-1500 ${
                      activeStep === index || activeStep === index + 1 ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      left: activeStep === index ? '100%' : (activeStep === index + 1 ? '0%' : '50%')
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Workflow */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex items-start space-x-4 transition-all duration-300"
              style={{
                transform: activeStep === index ? 'scale(1.02) translateX(5px)' : 'scale(1) translateX(0)'
              }}
            >
              <div 
                className={`${step.color} w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center shadow-lg relative overflow-hidden transition-all duration-300`}
                style={{
                  transform: activeStep === index ? 'scale(1.1)' : 'scale(1)',
                  boxShadow: activeStep === index ? '0 10px 25px rgba(0,0,0,0.2)' : '0 4px 6px rgba(0,0,0,0.1)'
                }}
              >
                <div 
                  className="absolute inset-0 bg-white opacity-20 transition-transform duration-700"
                  style={{
                    transform: activeStep === index ? 'translateY(0%)' : 'translateY(100%)'
                  }}
                />
                <span className="text-xl font-bold text-white">{step.number}</span>
                {index < steps.length - 1 && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-blue-400 to-teal-300 overflow-hidden">
                    <div 
                      className={`w-full h-4 bg-white absolute transition-transform duration-1500 ${
                        activeStep === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </div>
                )}
              </div>
              <div className="flex-grow">
                <h3 
                  className="text-lg font-semibold mb-1 transition-colors duration-300"
                  style={{
                    color: activeStep === index ? '#0284c7' : '#1e293b'
                  }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-sm text-slate-600 transition-opacity duration-300"
                  style={{
                    opacity: activeStep === index ? 1 : 0.7
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicalWorkflowProcess;