import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ServicesShowcase = () => {
  const [activeService, setActiveService] = useState(1);
  
  const services = [
    {
      id: 1,
      number: '01',
      title: 'Medical Billing',
      description: 'Comprehensive medical billing solutions that maximize reimbursements and streamline your revenue cycle management process.',
      color: 'bg-indigo-600'
    },
    {
      id: 2,
      number: '02',
      title: 'Coding Services',
      description: 'Accurate medical coding services that ensure compliance with the latest regulations and optimize your claims process.',
      color: 'bg-purple-600'
    },
    {
      id: 3,
      number: '03',
      title: 'Revenue Management',
      description: 'Strategic revenue cycle management to reduce denials, accelerate payments, and improve your practice\'s financial health.',
      color: 'bg-blue-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img 
                src="https://img.freepik.com/free-photo/doctor-writing-about-routine-medical-checkup_23-2149281072.jpg?ga=GA1.1.95786444.1738247124&semt=ais_hybrid&w=740" 
                alt="Medical Technology Workspace" 
                className="w-full h-auto"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 via-slate-800/50 to-transparent"></div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute top-10 left-10 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="text-white text-sm font-medium">Trusted by</div>
                <div className="text-white text-2xl font-bold">500+ Providers</div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="text-white text-sm font-medium">Success Rate</div>
                <div className="text-white text-2xl font-bold">98%</div>
              </motion.div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl z-0"></div>
          </motion.div>
          
          {/* Right side - Services */}
          <div className="space-y-6">
            <motion.div 
              className="mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-teal-400 font-medium tracking-wider uppercase text-sm mb-2 block">Our Services</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Healthcare Solutions</h2>
              <p className="text-slate-300">
                We provide end-to-end medical billing and revenue cycle management services tailored to your practice's unique needs.
              </p>
            </motion.div>
            
            <div className="space-y-4">
              {services.map((service) => (
                <motion.div 
                  key={service.id}
                  className={`rounded-xl overflow-hidden transition-all duration-300 ${
                    activeService === service.id 
                      ? 'shadow-lg shadow-blue-500/10' 
                      : 'shadow-md'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * service.id, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveService(service.id)}
                >
                  <div className={`
                    p-6 cursor-pointer relative
                    ${activeService === service.id 
                      ? service.color 
                      : 'bg-slate-700 hover:bg-slate-700/80'
                    }
                  `}>
                    <div className="flex items-start">
                      <motion.div 
                        className={`
                          w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4
                          ${activeService === service.id 
                            ? 'bg-white/20' 
                            : 'bg-white/10'
                          }
                        `}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {service.number}
                      </motion.div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-white/80">{service.description}</p>
                      </div>
                      
                      <motion.div 
                        className="ml-4"
                        animate={{ 
                          rotate: activeService === service.id ? 180 : 0 
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </div>
                    
                    {/* Animated background elements */}
                    {activeService === service.id && (
                      <>
                        <motion.div 
                          className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5 }}
                        ></motion.div>
                        <motion.div 
                          className="absolute bottom-0 left-20 w-16 h-16 rounded-full bg-white/5"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        ></motion.div>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <motion.button 
                className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore All Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;