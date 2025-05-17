// import React, { useRef } from 'react';
// import { useFrame } from '@react-three/fiber';
// import { MathUtils } from 'three';

// const Background3D = () => {
//   const meshRef = useRef();
  
//   useFrame((state, delta) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = MathUtils.lerp(meshRef.current.rotation.x, state.mouse.y / 10, 0.1);
//       meshRef.current.rotation.y = MathUtils.lerp(meshRef.current.rotation.y, state.mouse.x / 10, 0.1);
//     }
//   });
  
//   return (
//     <group>
//       {/* Medical symbols floating in 3D space */}
//       <mesh ref={meshRef} position={[0, 0, -5]}>
//         <torusGeometry args={[5, 0.5, 16, 100]} />
//         <meshStandardMaterial color="#4e54c8" opacity={0.2} transparent />
//       </mesh>
      
//       {/* Medical cross */}
//       <mesh position={[-3, 2, -3]} rotation={[0.5, 0.5, 0]}>
//         <boxGeometry args={[0.5, 2, 0.5]} />
//         <meshStandardMaterial color="#00b4d8" />
//       </mesh>
//       <mesh position={[-3, 2, -3]} rotation={[0.5, 0.5, 0]}>
//         <boxGeometry args={[2, 0.5, 0.5]} />
//         <meshStandardMaterial color="#00b4d8" />
//       </mesh>
      
//       {/* DNA helix representation */}
//       {Array.from({ length: 10 }).map((_, i) => (
//         <React.Fragment key={i}>
//           <mesh position={[3, i * 0.5 - 2.5, -2 + Math.sin(i * 0.5) * 0.5]}>
//             <sphereGeometry args={[0.2, 16, 16]} />
//             <meshStandardMaterial color={i % 2 ? "#4e54c8" : "#00b4d8"} />
//           </mesh>
//           <mesh position={[3, i * 0.5 - 2.5, -3 - Math.sin(i * 0.5) * 0.5]}>
//             <sphereGeometry args={[0.2, 16, 16]} />
//             <meshStandardMaterial color={i % 2 ? "#00b4d8" : "#4e54c8"} />
//           </mesh>
//         </React.Fragment>
//       ))}
      
//       {/* Floating particles */}
//       {Array.from({ length: 50 }).map((_, i) => (
//         <mesh 
//           key={i}
//           position={[
//             (Math.random() - 0.5) * 15,
//             (Math.random() - 0.5) * 15,
//             (Math.random() - 0.5) * 15
//           ]}
//         >
//           <sphereGeometry args={[0.05, 8, 8]} />
//           <meshStandardMaterial 
//             color={["#4e54c8", "#00b4d8", "#2a9d8f"][Math.floor(Math.random() * 3)]} 
//             emissive={["#4e54c8", "#00b4d8", "#2a9d8f"][Math.floor(Math.random() * 3)]}
//             emissiveIntensity={0.5}
//           />
//         </mesh>
//       ))}
//     </group>
//   );
// };

// export default Background3D;

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { MathUtils, Vector3, BufferAttribute } from 'three';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Background3D = () => {
  const meshRef = useRef();
  
  // Create floating orbs with medical-themed colors
  const orbs = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10 - 5
      ],
      scale: Math.random() * 0.8 + 0.6,
      color: [
        '#0ea5e9', // Sky blue
        '#8b5cf6', // Purple
        '#06b6d4', // Cyan
        '#3b82f6', // Blue
        '#6366f1'  // Indigo
      ][Math.floor(Math.random() * 5)],
      speed: Math.random() * 0.2 + 0.1
    }));
  }, []);

  // Create DNA helix points
  const dnaPoints = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => {
      const t = i / 20;
      const radius = 3;
      return {
        pos1: [
          radius * Math.cos(t * Math.PI * 4),
          i * 0.5 - 5,
          radius * Math.sin(t * Math.PI * 4)
        ],
        pos2: [
          radius * Math.cos(t * Math.PI * 4 + Math.PI),
          i * 0.5 - 5,
          radius * Math.sin(t * Math.PI * 4 + Math.PI)
        ],
        color1: i % 2 === 0 ? '#3b82f6' : '#8b5cf6',
        color2: i % 2 === 0 ? '#8b5cf6' : '#3b82f6'
      };
    });
  }, []);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = MathUtils.lerp(meshRef.current.rotation.x, state.mouse.y / 15, 0.05);
      meshRef.current.rotation.y = MathUtils.lerp(meshRef.current.rotation.y, state.mouse.x / 15, 0.05);
    }
  });
  
  return (
    <group ref={meshRef}>
      {/* Main circular structure */}
      <mesh position={[0, 0, -10]} rotation={[0, 0, Math.PI / 4]}>
        <torusGeometry args={[8, 0.4, 16, 100]} />
        <meshStandardMaterial color="#3b82f6" opacity={0.2} transparent emissive="#3b82f6" emissiveIntensity={0.5} />
      </mesh>
      
      <mesh position={[0, 0, -10]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[8, 0.4, 16, 100]} />
        <meshStandardMaterial color="#8b5cf6" opacity={0.2} transparent emissive="#8b5cf6" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Floating orbs */}
      {orbs.map((orb, i) => (
        <Float key={i} speed={orb.speed} rotationIntensity={0.5} floatIntensity={0.5}>
          <Sphere position={orb.position} args={[orb.scale, 32, 32]}>
            <MeshDistortMaterial
              color={orb.color}
              speed={0.5}
              distort={0.3}
              opacity={0.7}
              transparent
              emissive={orb.color}
              emissiveIntensity={0.5}
            />
          </Sphere>
        </Float>
      ))}
      
      {/* DNA helix */}
      {dnaPoints.map((point, i) => (
        <React.Fragment key={i}>
          <mesh position={point.pos1}>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial 
              color={point.color1} 
              emissive={point.color1} 
              emissiveIntensity={0.5} 
            />
          </mesh>
          <mesh position={point.pos2}>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial 
              color={point.color2} 
              emissive={point.color2} 
              emissiveIntensity={0.5} 
            />
          </mesh>
          
          {/* Connection lines */}
          {i < dnaPoints.length - 1 && (
            <>
              <line>
                <bufferGeometry attach="geometry" 
                  onUpdate={self => {
                    const positions = new Float32Array([
                      ...point.pos1,
                      ...dnaPoints[i + 1].pos1
                    ]);
                    self.setAttribute('position', new BufferAttribute(positions, 3));
                  }}
                />
                <lineBasicMaterial attach="material" color="#3b82f6" opacity={0.3} transparent />
              </line>
              <line>
                <bufferGeometry attach="geometry" 
                  onUpdate={self => {
                    const positions = new Float32Array([
                      ...point.pos2,
                      ...dnaPoints[i + 1].pos2
                    ]);
                    self.setAttribute('position', new BufferAttribute(positions, 3));
                  }}
                />
                <lineBasicMaterial attach="material" color="#8b5cf6" opacity={0.3} transparent />
              </line>
            </>
          )}
          
          {/* Cross connections */}
          <line>
            <bufferGeometry attach="geometry" 
              onUpdate={self => {
                const positions = new Float32Array([
                  ...point.pos1,
                  ...point.pos2
                ]);
                self.setAttribute('position', new BufferAttribute(positions, 3));
              }}
            />
            <lineBasicMaterial attach="material" color="#0ea5e9" opacity={0.3} transparent />
          </line>
        </React.Fragment>
      ))}
      
      {/* Medical cross symbol */}
      <group position={[-6, 3, -5]}>
        <mesh>
          <boxGeometry args={[0.6, 2.5, 0.6]} />
          <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.5} />
        </mesh>
        <mesh>
          <boxGeometry args={[2.5, 0.6, 0.6]} />
          <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.5} />
        </mesh>
      </group>
    </group>
  );
};

export default Background3D;