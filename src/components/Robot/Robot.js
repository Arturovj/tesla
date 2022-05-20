import { Suspense, useEffect, useState } from "react";
import "./Robot.css";
import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from 'framer-motion/dist/framer-motion'



// import World from "../GLTF/World";
import Robot from "../GLTF/Robot";
import Hover from "../Hover/Hover";
import { GridLoader } from "react-spinners";


export default function RobotCanvas() {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);


  return (
      
      <motion.div  initial={{ opacity : 0 }}
      animate={{ opacity : 1}}
      exit={{ opacity : 0}}>

<div className="loading-robot">
        {loading ? (
          <GridLoader color={"#D0021B"} loading={loading} size={100} />
        ) : (
    <Wrapper className="robot">
      <Canvas clasName="canvas">
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5}  />
        <ambientLight intensity={0.1} />
        <spotLight intensity={10} angle={20} penumbra={0.01} position={[-10,20,-5]} castShadow></spotLight>
        <directionalLight position={[-1, 5, 1]} />
        <Suspense fallback={null}>
          <Robot />
        </Suspense>
        </Canvas>
    </Wrapper>
     )}
     </div>
    <Hover/>
    </motion.div>
    
  );
}

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;

  canvas {
    height: 500px;
    width: auto;
    
  }
`;