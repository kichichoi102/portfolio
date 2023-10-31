import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Canvas
        camera={{
          fov: 70,
          position: [2.3, 1.5, 2.3],
        }}
      >
        <Experience />
      </Canvas>
      <Footer />
    </>
  );
}

export default App;
