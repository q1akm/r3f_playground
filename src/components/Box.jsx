import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

function Box (props) {

  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  useFrame((state, delta) => (meshRef.current.rotation.z += delta))

  return (
      
        <mesh
        castShadow 
        {...props}
        ref={meshRef}
        onPointerOver={(e)=> setHovered(true)}
        onPointerOut={(e) => setHovered(false)}>
          <boxGeometry/>
          <meshStandardMaterial color={ hovered ? "yellow" : "red"}/>
        </mesh>
      
  )
}



export default Box