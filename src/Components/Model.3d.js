import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Environment } from '@react-three/drei';

// Simple 3D icon component that works without external font files
const MedicalIcon = ({ type, color, isActive }) => {
  const ref = useRef();
  
  useFrame((state) => {
    if (ref.current && isActive) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });
  
  // Different 3D shapes for each service
  const getShape = () => {
    switch(type) {
      case 'revenue':
        return (
          <group ref={ref}>
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.7, 0.7, 0.2, 32]} />
              <meshStandardMaterial color={color} />
            </mesh>
            <mesh position={[0, 0, 0.15]}>
              <Text
                color="white"
                fontSize={0.8}
                font="/fonts/Inter-Bold.woff"
                anchorX="center"
                anchorY="middle"
              >
                $
              </Text>
            </mesh>
          </group>
        );
      case 'coding':
        return (
          <group ref={ref}>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[1.2, 0.8, 0.2]} />
              <meshStandardMaterial color={color} />
            </mesh>
            <mesh position={[0, 0, 0.15]}>
              <Text
                color="white"
                fontSize={0.5}
                font="/fonts/Inter-Bold.woff"
                anchorX="center"
                anchorY="middle"
              >
                {'</>'}
              </Text>
            </mesh>
          </group>
        );
      case 'planning':
        return (
          <group ref={ref}>
            <mesh position={[-0.4, 0, 0]}>
              <boxGeometry args={[0.2, 0.6, 0.2]} />
              <meshStandardMaterial color={color} />
            </mesh>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.2, 0.8, 0.2]} />
              <meshStandardMaterial color={color} />
            </mesh>
            <mesh position={[0.4, 0, 0]}>
              <boxGeometry args={[0.2, 1, 0.2]} />
              <meshStandardMaterial color={color} />
            </mesh>
          </group>
        );
      case 'compliance':
        return (
          <group ref={ref}>
            <mesh position={[0, 0, 0]}>
              <torusGeometry args={[0.5, 0.2, 16, 32]} />
              <meshStandardMaterial color={color} />
            </mesh>
            <mesh position={[0, 0, 0.15]}>
              <Text
                color="white"
                fontSize={0.5}
                font="/fonts/Inter-Bold.woff"
                anchorX="center"
                anchorY="middle"
              >
                ✓
              </Text>
            </mesh>
          </group>
        );
      case 'analytics':
        return (
          <group ref={ref}>
            <mesh position={[-0.4, -0.3, 0]} rotation={[0, 0, Math.PI / 4]}>
              <boxGeometry args={[0.2, 1, 0.2]} />
              <meshStandardMaterial color={color} />
            </mesh>
            <mesh position={[0.2, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
              <boxGeometry args={[0.2, 1.2, 0.2]} />
              <meshStandardMaterial color={color} />
            </mesh>
          </group>
        );
      case 'management':
        return (
          <group ref={ref}>
            <mesh position={[-0.3, 0, 0]}>
              <sphereGeometry args={[0.3, 16, 16]} />
              <meshStandardMaterial color={color} />
            </mesh>
            <mesh position={[0.3, 0, 0]}>
              <sphereGeometry args={[0.3, 16, 16]} />
              <meshStandardMaterial color={color} />
            </mesh>
          </group>
        );
      case 'technology':
        return (
          <group ref={ref}>
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[1.2, 0.8, 0.1]} />
              <meshStandardMaterial color={color} />
            </mesh>
            <mesh position={[0, -0.6, 0]}>
              <boxGeometry args={[0.6, 0.2, 0.1]} />
              <meshStandardMaterial color={color} />
            </mesh>
          </group>
        );
      default:
        return (
          <mesh ref={ref}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color={color} />
          </mesh>
        );
    }
  };
  
  return getShape();
};

const ThreeDModel = ({ type, color, isActive }) => {
  return (
    <div className="w-full h-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Environment preset="city" />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <MedicalIcon type={type} color={color} isActive={isActive} />
        </Float>
      </Canvas>
    </div>
  );
};

export default ThreeDModel;