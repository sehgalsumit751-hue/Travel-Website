import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import SehgalTravelsLandingPage from './Website'
import Blog from './pages/Blog'
import AmritsarTaxiGuide from './pages/blogs/AmritsarTaxiGuide'
import AmritsarChandigarh from './pages/blogs/AmritsarChandigarh'
import GoldenTempleTour from './pages/blogs/GoldenTempleTour'
import InnovaCrysta from './pages/blogs/InnovaCrysta'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SehgalTravelsLandingPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/taxi-service-amritsar-guide" element={<AmritsarTaxiGuide />} />
          <Route path="/blog/amritsar-to-chandigarh-taxi" element={<AmritsarChandigarh />} />
          <Route path="/blog/golden-temple-tour-guide" element={<GoldenTempleTour />} />
          <Route path="/blog/innova-crysta-rent-punjab" element={<InnovaCrysta />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
