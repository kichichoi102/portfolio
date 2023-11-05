import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import './App.css';

const maxLoadTime = 50; // 15 seconds

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loading) {
      const startTime = Date.now();

      const timer = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const progressValue = (elapsedTime / maxLoadTime) * 100;

        if (progressValue >= 100) {
          setProgress(100);
          setLoading(false);
          clearInterval(timer);
        } else {
          setProgress(progressValue);
        }
      }, 100);

      return () => clearInterval(timer);
    }
  }, [loading]);

  return (
    <>
      <Canvas
        camera={{
          fov: 70,
          position: [2.3, 1.5, 2.3],
        }}
      >
        {loading ? <LoadingScreen progress={progress} /> : <Experience />}
      </Canvas>
      <Footer />
    </>
  );
}

export default App;
