import React, { useEffect, useState } from 'react';
import Loading from './components/Loading';
import { motion } from 'motion/react';
import LandingPage from './pages/LandingPage';
import { Route, Routes } from 'react-router';
import Animations from './pages/Animations';
import Test from '../src/components/Test';
import Docs from './pages/Docs';

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 2500)
    return () => clearInterval(timer);
  }, [])

  return (
    <div>

      {!isLoading
        ? <Loading />
        : <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            ease: 'linear',
          }}>

          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/animations' element={<Animations />} />
            <Route path='/test' element={<Test />} />
            <Route path='/docs' element={<Docs />} />
          </Routes>

        </motion.div>}

    </div>
  )
}

export default App