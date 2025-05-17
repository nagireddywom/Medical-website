import React from 'react';
import { motion } from 'framer-motion';

const PremiumFooter = () => {
  const currentYear = new Date().getFullYear();
  
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

  return (
    <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white overflow-hidden relative mt-16">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-teal-400 to-blue-500"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-teal-500/5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div 
              className="flex items-center"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold tracking-tight">
                <span className="text-white">SV</span>
                <span className="text-blue-400">MB</span>
              </div>
            </motion.div>
            
            <p className="text-slate-300 max-w-xs">
              For more information contact Medical Billing and Consulting Services, LLC.
            </p>
            
            <div className="space-y-3">
              <motion.div 
                className="flex items-center space-x-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300">9177721723</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-slate-300 group-hover:text-white transition-colors duration-300">info@medibcs.com</span>
              </motion.div>
            </div>
            
            {/* <div className="flex space-x-4 pt-2">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social, index) => (
                <motion.a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 hover:bg-blue-500 hover:text-white transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              ))}
            </div> */}
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold text-white relative inline-block">
              Navigation
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            
            <ul className="space-y-3">
              {['Home', 'Services', 'About Us', 'Contact Us'].map((item, index) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Business Hours */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold text-white relative inline-block">
              Business Hours
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h3>
            
            <p className="text-slate-300">
              Please feel free to contact us anytime during business hours.
            </p>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Monday-Friday:</span>
                <span className="text-white font-medium">08:00-5:00 IST</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Saturday:</span>
                <span className="text-white font-medium">Closed</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Sunday:</span>
                <span className="text-white font-medium">Closed</span>
              </div>
            </div>
            
            <motion.div 
              className="mt-6 bg-gradient-to-r from-blue-600 to-teal-500 p-0.5 rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <div className="bg-slate-800 rounded-md p-4">
                <h4 className="text-white font-medium mb-2">Need urgent assistance?</h4>
                <p className="text-slate-300 text-sm mb-3">Our support team is available.</p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-sm font-medium text-white hover:text-blue-200 transition-colors duration-300"
                >
                  Contact us now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {currentYear}Sri venkateshwara Medical Billing and Consulting Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#terms" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#cookies" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;