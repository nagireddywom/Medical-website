// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';

// // const AppointmentForm = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     phone: '',
// //     email: '',
// //     appointmentType: '',
// //     message: ''
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prevState => ({
// //       ...prevState,
// //       [name]: value
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Handle form submission logic here
// //     console.log('Form submitted:', formData);
// //     // Reset form after submission
// //     setFormData({
// //       name: '',
// //       phone: '',
// //       email: '',
// //       appointmentType: '',
// //       message: ''
// //     });
// //   };

// //   const appointmentTypes = [
// //     'General Checkup',
// //     'Specialist Consultation',
// //     'Dental Care',
// //     'Eye Examination',
// //     'Vaccination'
// //   ];

// //   // Animation variants
// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: 0.1,
// //         delayChildren: 0.3
// //       }
// //     }
// //   };

// //   const itemVariants = {
// //     hidden: { y: 20, opacity: 0 },
// //     visible: {
// //       y: 0,
// //       opacity: 1,
// //       transition: { type: 'spring', stiffness: 100 }
// //     }
// //   };

// //   const buttonVariants = {
// //     hidden: { scale: 0.8, opacity: 0 },
// //     visible: { 
// //       scale: 1, 
// //       opacity: 1,
// //       transition: { 
// //         delay: 0.8,
// //         type: 'spring',
// //         stiffness: 200,
// //         damping: 15
// //       }
// //     },
// //     hover: { 
// //       scale: 1.05,
// //       boxShadow: '0 5px 15px rgba(0, 156, 156, 0.4)',
// //       transition: { type: 'spring', stiffness: 400, damping: 10 }
// //     },
// //     tap: { scale: 0.95 }
// //   };

// //   const floatingBubbleVariants = {
// //     animate: {
// //       y: [0, -15, 0],
// //       transition: {
// //         y: {
// //           duration: 2,
// //           repeat: Infinity,
// //           ease: "easeInOut"
// //         }
// //       }
// //     }
// //   };

// //   return (
// //     <div className="bg-gradient-to-br from-teal-50 to-cyan-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center mt-16">
// //       <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
// //         {/* Decorative elements */}
// //         <motion.div 
// //           className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-teal-500/10 z-0"
// //           variants={floatingBubbleVariants}
// //           animate="animate"
// //         />
// //         <motion.div 
// //           className="absolute top-40 -right-10 w-24 h-24 rounded-full bg-cyan-500/10 z-0"
// //           variants={floatingBubbleVariants}
// //           animate="animate"
// //           transition={{ delay: 0.5 }}
// //         />
// //         <motion.div 
// //           className="absolute bottom-20 left-1/4 w-32 h-32 rounded-full bg-blue-500/10 z-0"
// //           variants={floatingBubbleVariants}
// //           animate="animate"
// //           transition={{ delay: 1 }}
// //         />

// //         {/* Left side content */}
// //         <motion.div 
// //           className="text-left z-10 flex flex-col justify-center"
// //           initial={{ opacity: 0, x: -50 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.8 }}
// //         >
// //           <motion.span 
// //             className="text-teal-600 font-medium tracking-wider uppercase text-sm mb-2"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.2 }}
// //           >
// //             APPOINTMENT
// //           </motion.span>
          
// //           <motion.h1 
// //             className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6"
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.4, duration: 0.8 }}
// //           >
// //             {/* Get in touch to book your first appointment */}
// //             Ready to Simplify Your Billing
// //           </motion.h1>
          
// //           <motion.p 
// //             className="text-slate-600 mb-8 max-w-md"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.6 }}
// //           >
// //            Connect with our billing specialists today to streamline your revenue cycle and unlock your practice’s full potential. Reach out now and experience the difference expert support can make
// //           </motion.p>
          
// //           <div className="space-y-4">
// //             <motion.div 
// //               className="flex items-center space-x-3"
// //               initial={{ opacity: 0, y: 10 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.8 }}
// //             >
// //               <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white">
// //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
// //                   <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
// //                 </svg>
// //               </div>
// //               <span className="text-slate-700">9177721723</span>
// //             </motion.div>
            
// //             <motion.div 
// //               className="flex items-center space-x-3"
// //               initial={{ opacity: 0, y: 10 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.9 }}
// //             >
// //               <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white">
// //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
// //                   <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
// //                   <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
// //                 </svg>
// //               </div>
// //               <span className="text-slate-700">contact@medpro.com</span>
// //             </motion.div>
// //           </div>
// //         </motion.div>

// //         {/* Right side form */}
// //         <motion.div 
// //           className="bg-white rounded-2xl shadow-xl p-8 z-10"
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, delay: 0.2 }}
// //           whileHover={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
// //         >
// //           <motion.form 
// //             onSubmit={handleSubmit}
// //             variants={containerVariants}
// //             initial="hidden"
// //             animate="visible"
// //             className="space-y-6"
// //           >
// //             <motion.div variants={itemVariants}>
// //               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
// //                 Name
// //               </label>
// //               <input
// //                 type="text"
// //                 id="name"
// //                 name="name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 outline-none"
// //                 placeholder="Your full name"
// //                 required
// //               />
// //             </motion.div>

// //             <motion.div variants={itemVariants}>
// //               <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
// //                 Phone
// //               </label>
// //               <input
// //                 type="tel"
// //                 id="phone"
// //                 name="phone"
// //                 value={formData.phone}
// //                 onChange={handleChange}
// //                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 outline-none"
// //                 placeholder="Your phone number"
// //                 required
// //               />
// //             </motion.div>

// //             <motion.div variants={itemVariants}>
// //               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
// //                 Email
// //               </label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 name="email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 outline-none"
// //                 placeholder="Your email address"
// //                 required
// //               />
// //             </motion.div>

            
// //             <motion.div variants={itemVariants}>
// //               <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
// //                 Message
// //               </label>
// //               <textarea
// //                 id="message"
// //                 name="message"
// //                 value={formData.message}
// //                 onChange={handleChange}
// //                 rows="4"
// //                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 outline-none"
// //                 placeholder="Tell Us About Your Billing Needs"
// //               ></textarea>
// //             </motion.div>

// //             <motion.button
// //               type="submit"
// //               variants={buttonVariants}
// //               whileHover="hover"
// //               whileTap="tap"
// //               className="w-full bg-teal-500 text-white py-3 px-6 rounded-lg font-medium text-lg transition-all duration-300"
// //             >
// //               Submit Now
// //             </motion.button>
// //           </motion.form>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AppointmentForm;


// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import emailjs from '@emailjs/browser';

// const AppointmentForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     message: ''
//   });
  
//   const [status, setStatus] = useState({
//     submitted: false,
//     submitting: false,
//     info: { error: false, msg: null }
//   });

//   // Initialize EmailJS once when component mounts
//   useEffect(() => {
//     // Replace with your actual EmailJS public key
//     emailjs.init("YOUR_PUBLIC_KEY");
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({
//       submitted: false,
//       submitting: true,
//       info: { error: false, msg: null }
//     });

//     try {
//       // Send email using EmailJS
//       // Replace with your actual service ID and template ID
//       const result = await emailjs.send(
//         "YOUR_SERVICE_ID", 
//         "YOUR_TEMPLATE_ID",
//         {
//           name: formData.name,
//           phone: formData.phone,
//           email: formData.email,
//           message: formData.message
//         }
//       );

//       console.log('Email successfully sent!', result);
      
//       // Update state on success
//       setStatus({
//         submitted: true,
//         submitting: false,
//         info: { error: false, msg: "Message sent successfully!" }
//       });
      
//       // Reset form after successful submission
//       setFormData({
//         name: '',
//         phone: '',
//         email: '',
//         message: ''
//       });
      
//       // Reset success message after 5 seconds
//       setTimeout(() => {
//         setStatus({
//           submitted: false,
//           submitting: false,
//           info: { error: false, msg: null }
//         });
//       }, 5000);
      
//     } catch (error) {
//       console.log('Error sending email:', error);
      
//       // Update state on error
//       setStatus({
//         submitted: false,
//         submitting: false,
//         info: { error: true, msg: "An error occurred. Please try again later." }
//       });
//     }
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: 'spring', stiffness: 100 }
//     }
//   };

//   const buttonVariants = {
//     hidden: { scale: 0.8, opacity: 0 },
//     visible: { 
//       scale: 1, 
//       opacity: 1,
//       transition: { 
//         delay: 0.8,
//         type: 'spring',
//         stiffness: 200,
//         damping: 15
//       }
//     },
//     hover: { 
//       scale: 1.05,
//       boxShadow: '0 5px 15px rgba(0, 156, 156, 0.4)',
//       transition: { type: 'spring', stiffness: 400, damping: 10 }
//     },
//     tap: { scale: 0.95 }
//   };

//   const floatingBubbleVariants = {
//     animate: {
//       y: [0, -15, 0],
//       transition: {
//         y: {
//           duration: 2,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }
//       }
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-teal-50 to-cyan-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center mt-16">
//       <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
//         {/* Decorative elements */}
//         <motion.div 
//           className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-teal-500/10 z-0"
//           variants={floatingBubbleVariants}
//           animate="animate"
//         />
//         <motion.div 
//           className="absolute top-40 -right-10 w-24 h-24 rounded-full bg-cyan-500/10 z-0"
//           variants={floatingBubbleVariants}
//           animate="animate"
//           transition={{ delay: 0.5 }}
//         />
//         <motion.div 
//           className="absolute bottom-20 left-1/4 w-32 h-32 rounded-full bg-blue-500/10 z-0"
//           variants={floatingBubbleVariants}
//           animate="animate"
//           transition={{ delay: 1 }}
//         />

//         {/* Left side content */}
//         <motion.div 
//           className="text-left z-10 flex flex-col justify-center"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.span 
//             className="text-teal-600 font-medium tracking-wider uppercase text-sm mb-2"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             APPOINTMENT
//           </motion.span>
          
//           <motion.h1 
//             className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             Ready to Simplify Your Billing
//           </motion.h1>
          
//           <motion.p 
//             className="text-slate-600 mb-8 max-w-md"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//           >
//            Connect with our billing specialists today to streamline your revenue cycle and unlock your practice's full potential. Reach out now and experience the difference expert support can make
//           </motion.p>
          
//           <div className="space-y-4">
//             <motion.div 
//               className="flex items-center space-x-3"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8 }}
//             >
//               <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//                 </svg>
//               </div>
//               <span className="text-slate-700">9177721723</span>
//             </motion.div>
            
//             <motion.div 
//               className="flex items-center space-x-3"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.9 }}
//             >
//               <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                   <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                   <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                 </svg>
//               </div>
//               <span className="text-slate-700">contact@medpro.com</span>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Right side form */}
//         <motion.div 
//           className="bg-white rounded-2xl shadow-xl p-8 z-10"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           whileHover={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
//         >
//           <motion.form 
//             onSubmit={handleSubmit}
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="space-y-6"
//           >
//             <motion.div variants={itemVariants}>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 outline-none"
//                 placeholder="Your full name"
//                 required
//               />
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                 Phone
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 outline-none"
//                 placeholder="Your phone number"
//                 required
//               />
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 outline-none"
//                 placeholder="Your email address"
//                 required
//               />
//             </motion.div>

//             <motion.div variants={itemVariants}>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="4"
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 outline-none"
//                 placeholder="Tell Us About Your Billing Needs"
//               ></textarea>
//             </motion.div>

//             {/* Form status message */}
//             {status.info.msg && (
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className={`text-center p-2 rounded-md ${
//                   status.info.error ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
//                 }`}
//               >
//                 {status.info.msg}
//               </motion.div>
//             )}

//             <motion.button
//               type="submit"
//               variants={buttonVariants}
//               whileHover="hover"
//               whileTap="tap"
//               disabled={status.submitting}
//               className={`w-full bg-teal-500 text-white py-3 px-6 rounded-lg font-medium text-lg transition-all duration-300 ${
//                 status.submitting ? "opacity-70 cursor-not-allowed" : ""
//               }`}
//             >
//               {status.submitting ? "Sending..." : "Submit Now"}
//             </motion.button>
//           </motion.form>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AppointmentForm;



//design 2

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const AppointmentForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    // Replace with your actual EmailJS public key
    emailjs.init("gkY_2ufD6D0rgYD7p");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null }
    });

    try {
      // Create current timestamp
      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      
      // Send email using EmailJS
      // Replace with your actual service ID and template ID
      const result = await emailjs.sendForm(
        "service_41fqn4u", 
        "template_0t9iqo1",
        formRef.current,
        {
          publicKey: "gkY_2ufD6D0rgYD7p",
        }
      );

      console.log('Email successfully sent!', result);
      
      // Update state on success
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Message sent successfully! We'll be in touch soon." }
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null }
        });
      }, 5000);
      
    } catch (error) {
      console.log('Error sending email:', error);
      
      // Update state on error
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "An error occurred. Please try again later." }
      });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        delay: 0.8,
        type: 'spring',
        stiffness: 200,
        damping: 15
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: '0 5px 15px rgba(0, 156, 156, 0.4)',
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  const floatingBubbleVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-teal-50 to-cyan-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center mt-16">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
        {/* Decorative elements */}
        <motion.div 
          className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-teal-500/10 z-0"
          variants={floatingBubbleVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-40 -right-10 w-24 h-24 rounded-full bg-cyan-500/10 z-0"
          variants={floatingBubbleVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-32 h-32 rounded-full bg-blue-500/10 z-0"
          variants={floatingBubbleVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />

        {/* Left side content */}
        <motion.div 
          className="text-left z-10 flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="text-teal-600 font-medium tracking-wider uppercase text-sm mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            APPOINTMENT
          </motion.span>
          
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Ready to Simplify Your Billing
          </motion.h1>
          
          <motion.p 
            className="text-slate-600 mb-8 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
           Connect with our billing specialists today to streamline your revenue cycle and unlock your practice's full potential. Reach out now and experience the difference expert support can make
          </motion.p>
          
          <div className="space-y-4">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <span className="text-slate-700">9177721723</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <span className="text-slate-700">support@svmedicalbillings.com</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right side form */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-8 z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
        >
          <motion.form 
            ref={formRef}
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 outline-none"
                placeholder="Your full name"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 outline-none"
                placeholder="Your phone number"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 outline-none"
                placeholder="Your email address"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 outline-none"
                placeholder="Tell Us About Your Billing Needs"
              ></textarea>
            </motion.div>
            
            {/* Hidden input for time */}
            <input 
              type="hidden" 
              name="time" 
              value={new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            />

            {/* Form status message */}
            {status.info.msg && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center p-4 rounded-md ${
                  status.info.error ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                }`}
              >
                {status.info.msg}
              </motion.div>
            )}

            <motion.button
              type="submit"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              disabled={status.submitting}
              className={`w-full bg-teal-500 text-white py-3 px-6 rounded-lg font-medium text-lg transition-all duration-300 ${
                status.submitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {status.submitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : "Submit Now"}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default AppointmentForm;