import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-teal-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-teal-600 font-medium tracking-wider uppercase text-sm mb-2 block">About Us</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6 relative inline-block">
            Trusted Medical Billing Services
            <motion.span 
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            ></motion.span>
          </h2>
          <p className="max-w-3xl mx-auto text-slate-600 text-lg">
            We provide comprehensive medical billing solutions to help healthcare providers focus on what matters most - patient care.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image with Animation */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10">
              <motion.div 
                className="bg-white p-3 rounded-2xl shadow-xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img 
                  src="https://img.freepik.com/free-photo/medical-invoice-document-form-patient-concept_53876-134022.jpg?ga=GA1.1.95786444.1738247124&semt=ais_hybrid&w=740" 
                  alt="Medical Team" 
                  className="w-full h-auto rounded-xl"
                />
              </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <motion.div 
              className="absolute -top-6 -left-6 w-24 h-24 bg-teal-500/10 rounded-full z-0"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            ></motion.div>
            <motion.div 
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-500/10 rounded-full z-0"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            ></motion.div>
            
            {/* Stats Cards */}
            <motion.div 
              className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-lg p-4 z-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-800">500+</div>
                  <div className="text-sm text-slate-500">Happy Clients</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -top-5 -right-5 bg-white rounded-lg shadow-lg p-4 z-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-800">98%</div>
                  <div className="text-sm text-slate-500">Success Rate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Side - Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-slate-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              We're Dedicated to Simplifying Your Medical Billing Process
            </motion.h3>
            
            <motion.p 
              className="text-slate-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              At MB Consultancy & Services, we understand the challenges healthcare providers face with billing and revenue management. Our team of experts is committed to delivering tailored solutions that optimize your revenue cycle and reduce administrative burden.
            </motion.p>
            
            <motion.p 
              className="text-slate-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              With years of experience in the healthcare industry, we've developed efficient processes and leveraged cutting-edge technology to ensure accurate coding, timely claim submissions, and maximum reimbursements.
            </motion.p>
            
            {/* Feature List */}
            <div className="space-y-4 pt-4">
              {[
                { title: "Experienced Team", desc: "Our certified billing specialists have extensive experience in medical billing." },
                { title: "Customized Solutions", desc: "We tailor our services to meet the unique needs of your practice." },
                { title: "Advanced Technology", desc: "We utilize the latest billing software to streamline processes." },
                { title: "Compliance Focused", desc: "We ensure adherence to all healthcare regulations and standards." }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + (index * 0.1) }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-medium text-slate-800">{feature.title}</h4>
                    <p className="text-slate-600 text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA Button */}
            <motion.div 
              className="pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <motion.button 
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Values Section */}
        <motion.div 
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              title: "Trust & Reliability",
              description: "We build long-term relationships based on trust and consistently deliver reliable results."
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: "Efficiency & Speed",
              description: "Our streamlined processes ensure quick turnaround times without compromising accuracy."
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              ),
              title: "Clear Communication",
              description: "We maintain transparent communication and provide regular updates on your billing status."
            }
          ].map((value, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + (index * 0.2) }}
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h3>
              <p className="text-slate-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;