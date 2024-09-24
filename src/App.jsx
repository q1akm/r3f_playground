import { Canvas } from '@react-three/fiber'
import Box from './components/Box'
import './App.css'
import { OrbitControls } from '@react-three/drei'
import ColorBox from './components/ColorBox'

const App = () => {
  return (
   <main id='canvas-container'>
     <Canvas camera={{position:[0,2,6]}} shadows>
        <OrbitControls/>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} castShadow/>
          <Box position={[-4, 1, 2]}/>
          <Box position={[-3, 1, 0]}/>
          <Box position={[4, 0, -1]}/>
          <Box position={[5, 0, 2]}/>
          <ColorBox/>
          <mesh rotation-x={-Math.PI / 2} position-y={-0.5} receiveShadow>
            <planeGeometry args={[50, 10]} />
            <meshStandardMaterial color="white" />
          </mesh>
    </Canvas>
   </main>
  )
}

export default App