import React, { useEffect, useState } from 'react'
import Loading from './components/Loading'
import { motion } from 'motion/react';
import LandingPage from './pages/LandingPage';

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
      {!isLoading ? <Loading /> :

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            ease: 'linear',
          }}>
          <LandingPage />
        </motion.div>}
    </div>
  )
}

export default App