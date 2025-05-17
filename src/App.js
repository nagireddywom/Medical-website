// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import Slider from './Components/Slider';
// import Background3D from './Components/Background';

// function App() {
//   const slides = [
//     {
//       id: 1,
//       title: "Streamlined Medical Billing",
//       description: "Our advanced system simplifies the entire billing process, reducing administrative overhead by up to 35%.",
//       image: "https://img.freepik.com/premium-vector/medical-health-care-science-innovation-background_115579-832.jpg?ga=GA1.1.95786444.1738247124&semt=ais_hybrid&w=740",
//       color: "from-primary to-secondary"
//     },
//     {
//       id: 2,
//       title: "Secure Patient Data Management",
//       description: "HIPAA-compliant platform ensures your patients' information is protected with enterprise-grade security.",
//       image: "https://img.freepik.com/premium-photo/clinical-wallpaper_1134901-142119.jpg?ga=GA1.1.95786444.1738247124&semt=ais_hybrid&w=740",
//       color: "from-secondary to-accent"
//     },
//     {
//       id: 3,
//       title: "Real-time Insurance Verification",
//       description: "Instantly verify patient insurance eligibility and reduce claim denials by up to 40%.",
//       image: "https://img.freepik.com/free-photo/copy-space-heart-shape-stethoscope_23-2148519790.jpg?ga=GA1.1.95786444.1738247124&semt=ais_hybrid&w=740",
//       color: "from-accent to-primary"
//     }
//   ];



  
//   return (
//     <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-dark via-primary/50 to-dark text-white">
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         <Canvas>
//           <ambientLight intensity={0.5} />
//           <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//           <Background3D />
//           <OrbitControls enableZoom={false} enablePan={false} />
//         </Canvas>
//       </div>
      
//       <header className="relative z-10 flex justify-between items-center px-[5%] py-6 backdrop-blur-md bg-black/10">
//         <div className="text-2xl font-bold tracking-wide">
//           MedBill<span className="text-secondary">Pro</span>
//         </div>
//         <nav>
//           <ul className="flex">
//             <li className="mx-5"><a href="#features" className="font-medium transition-colors hover:text-secondary">Features</a></li>
//             <li className="mx-5"><a href="#pricing" className="font-medium transition-colors hover:text-secondary">Pricing</a></li>
//             <li className="mx-5"><a href="#testimonials" className="font-medium transition-colors hover:text-secondary">Testimonials</a></li>
//             <li className="mx-5"><a href="#contact" className="font-medium transition-colors hover:text-secondary">Contact</a></li>
//           </ul>
//         </nav>
//         <button className="bg-gradient-to-r from-primary to-secondary px-6 py-3 rounded-full font-semibold cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20">
//           Get Started
//         </button>
//       </header>
      
//       <main className="relative z-1 px-[5%] py-8">
//         <section className="flex items-center justify-between min-h-[80vh] py-8">
//           <div className="flex-1 max-w-lg">
//             <h1 className="text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
//               Revolutionize Your Medical Billing
//             </h1>
//             <p className="text-xl mb-8 text-white/80">
//               Streamline your practice's financial operations with our AI-powered billing solution
//             </p>
//             <button className="bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-full font-semibold text-base cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20">
//               Schedule Demo
//             </button>
//           </div>
//           <Slider slides={slides} />
//         </section>
//       </main>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// // import Slider from './components/Slider';
// // import Background3D from './components/Background3D';
// import Slider from './Components/Slider';
// import Background3D from './Components/Background';

// function App() {
//   const slides = [
//     {
//       id: 1,
//       title: "Streamlined Medical Billing Process",
//       description: "Our intelligent system automates the entire billing workflow, reducing administrative overhead by up to 35% while improving accuracy.",
//       image: "https://img.freepik.com/premium-vector/medical-health-care-science-innovation-background_115579-832.jpg?ga=GA1.1.95786444.1738247124&semt=ais_hybrid&w=740",
//       color: "from-primary/90 to-secondary/90"
//     },
//     {
//       id: 2,
//       title: "Enterprise-Grade Data Security",
//       description: "HIPAA-compliant platform with end-to-end encryption ensures your patients' information is protected with the highest security standards.",
//       image: "https://img.freepik.com/premium-photo/clinical-wallpaper_1134901-142119.jpg?ga=GA1.1.95786444.1738247124&semt=ais_hybrid&w=740",
//       color: "from-secondary/90 to-accent/90"
//     },
//     {
//       id: 3,
//       title: "Real-time Insurance Verification",
//       description: "Instantly verify patient insurance eligibility and coverage details, reducing claim denials by up to 40% and accelerating reimbursements.",
//       image: "https://img.freepik.com/free-photo/copy-space-heart-shape-stethoscope_23-2148519790.jpg?ga=GA1.1.95786444.1738247124&semt=ais_hybrid&w=740",
//       color: "from-accent/90 to-primary/90"
//     }
//   ];
 
  
//     return (
//       <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-50 text-gray-900">
//         <div className="fixed inset-0 z-0 pointer-events-none">
//           <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
//             <ambientLight intensity={0.6} />
//             <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.8} />
//             <Background3D />
//             <OrbitControls enableZoom={false} enablePan={false} />
//           </Canvas>
//         </div>
        
//         <header className="relative z-10 flex justify-between items-center px-[5%] py-6 backdrop-blur-md bg-white/30">
//           <div className="text-2xl font-bold tracking-wide text-gray-900">
//             MedBill<span className="text-blue-600">Pro</span>
//           </div>
//           <nav className="hidden md:block">
//             <ul className="flex">
//               <li className="mx-5"><a href="#features" className="font-medium transition-colors hover:text-blue-600">Features</a></li>
//               <li className="mx-5"><a href="#pricing" className="font-medium transition-colors hover:text-blue-600">Pricing</a></li>
//               <li className="mx-5"><a href="#testimonials" className="font-medium transition-colors hover:text-blue-600">Testimonials</a></li>
//               <li className="mx-5"><a href="#contact" className="font-medium transition-colors hover:text-blue-600">Contact</a></li>
//             </ul>
//           </nav>
//           <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20">
//             Get Started
//           </button>
//         </header>
        
//         <main className="relative z-1 px-[5%] py-8">
//           <section className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[80vh] py-12">
//             <div className="flex-1 max-w-xl">
//               <div className="inline-block px-4 py-1 mb-6 text-sm font-semibold tracking-wider uppercase rounded-full bg-blue-100 text-blue-700">
//                 Next-Generation Solution
//               </div>
//               <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
//                 Revolutionize Your Medical Billing
//               </h1>
//               <p className="text-xl mb-8 text-gray-700 leading-relaxed">
//                 Streamline your practice's financial operations with our AI-powered billing solution that increases revenue and reduces administrative burden.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-base cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 flex items-center gap-2">
//                   Schedule Demo
//                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//                 <button className="bg-white/50 backdrop-blur-sm border border-blue-200 text-gray-800 px-8 py-4 rounded-full font-semibold text-base cursor-pointer transition-all hover:bg-white/80">
//                   Watch Video
//                 </button>
//               </div>
              
//               <div className="flex items-center gap-4 mt-12">
//                 <div className="flex -space-x-4">
//                   <img className="w-10 h-10 rounded-full border-2 border-white" src="/images/avatar-1.jpg" alt="User" />
//                   <img className="w-10 h-10 rounded-full border-2 border-white" src="/images/avatar-2.jpg" alt="User" />
//                   <img className="w-10 h-10 rounded-full border-2 border-white" src="/images/avatar-3.jpg" alt="User" />
//                 </div>
//                 <div className="text-sm text-gray-700">
//                   <strong className="text-gray-900">500+</strong> healthcare providers trust us
//                 </div>
//               </div>
//             </div>
            
//             <div className="flex-1 w-full max-w-3xl">
//               <Slider slides={slides} />
//             </div>
//           </section>
//         </main>
//       </div>
//     );
//   }
  
//   export default App;


import React from 'react';
import Header from './Components/Header';
import HeroSlider from './Components/HeroSlider';
import ServiceSlider from './ServiceSlider';
import MedicalWorkflowProcess from './Components/Workflow';
import AppointmentForm from './Components/Contact';
import theme from './Components/Theme';
import PremiumFooter from './Components/Footer';
import AboutSection from './Components/About';
import ServicesShowcase from './Components/ServiceShowcase';
import MedicalServiceSlider from './Components/ServiceSlider';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlider />
      {/* <ServiceSlider /> */}
      <MedicalServiceSlider/>
      <AboutSection />
      {/* <ServicesShowcase /> */}
      <MedicalWorkflowProcess />
      <AppointmentForm/>
      <PremiumFooter />
      {/* You can add more sections below the hero slider */}
    </div>
  );
}

export default App;