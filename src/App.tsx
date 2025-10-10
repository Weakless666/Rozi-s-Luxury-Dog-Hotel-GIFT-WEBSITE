import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
<<<<<<< HEAD
import CookieConsent from './components/CookieConsent'
=======
>>>>>>> 9812799a3cfe24098af19246d2f330883e3f6c13
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
<<<<<<< HEAD
import Adopt from './pages/Adopt'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'
=======
import Admin from './pages/Admin'
import Adopt from './pages/Adopt'
>>>>>>> 9812799a3cfe24098af19246d2f330883e3f6c13

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-warm-white via-soft-lavender to-light-peach">
        <LoadingScreen 
          isLoading={isLoading} 
          onComplete={handleLoadingComplete} 
        />
        
        {!isLoading && (
          <>
            <Navbar />
            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
                <Route path="/adopt" element={<Adopt />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
              </Routes>
            </motion.main>
            <Footer />
            <CookieConsent 
              onAccept={() => console.log('Cookies accepted')}
              onReject={() => console.log('Cookies rejected')}
              onCustomize={() => console.log('Cookies customized')}
            />
=======
                <Route path="/admin" element={<Admin />} />
                <Route path="/adopt" element={<Adopt />} />
              </Routes>
            </motion.main>
            <Footer />
>>>>>>> 9812799a3cfe24098af19246d2f330883e3f6c13
          </>
        )}
      </div>
    </Router>
  )
}

export default App
