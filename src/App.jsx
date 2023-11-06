import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import './App.css';

const loadingScreen = true;
const maxLoadTime = 10000; // 10 seconds

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const isDarkMode = true;
  // const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const appStyle = isDarkMode ? 'bg-[linear-gradient(0deg,#0f2027,#203a43,#2c5364)]' : 'bg-[linear-gradient(0deg,#d9afd9_0%,#97d9e1_100%)]';

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
    <div style={{ height: '100%' }} className={appStyle}>
      <Canvas
        camera={{
          fov: 70,
          position: [2.3, 1.5, 2.3],
        }}
      >
        {loadingScreen && loading ? <LoadingScreen progress={progress} /> : <Experience />}
      </Canvas>
      <Footer />
    </div>
  );
}

export default App;
