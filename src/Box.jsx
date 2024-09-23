import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

function Box (props) {

  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  useFrame((state, delta) => (meshRef.current.rotation.z += delta))

  return (
      
        <mesh
        {...props}
        ref={meshRef}
        onPointerOver={(e)=> setHovered(true)}
        onPointerOut={(e) => setHovered(false)}>
          <boxGeometry args={[2, 2, 2]}/>
          <meshStandardMaterial color={ hovered ? "yellow" : "red"}/>
        </mesh>
      
  )
}



export default Box