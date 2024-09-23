import { Canvas } from '@react-three/fiber'
import Box from './Box'
import './App.css'

const App = () => {
  return (
   <main id='canvas-container'>
     <Canvas camera={{position:[0,0,4]}}>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <Box position={[-1.2, 0, 1]}/>
          <Box position={[2, 0, 0]}/>
    </Canvas>
   </main>
  )
}

export default App