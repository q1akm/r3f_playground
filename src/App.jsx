import { Canvas } from '@react-three/fiber'
import Box from './Box'
import './App.css'

const App = () => {
  return (
   <main id='canvas-container'>
     <Canvas camera={{position:[0,0,5]}}>
      <gridHelper args={[10, 10, "green", "blue"]}  />
       
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <Box position={[-3, 0, 1]}/>
          <Box position={[1, 0, 0]}/>
          <Box position={[6, 0, -1]}/>
    </Canvas>
   </main>
  )
}

export default App