import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import SehgalTravelsLandingPage from './Website'
import Blog from './pages/Blog'
import AmritsarTaxiGuide from './pages/blogs/AmritsarTaxiGuide'
import AmritsarChandigarh from './pages/blogs/AmritsarChandigarh'
import GoldenTempleTour from './pages/blogs/GoldenTempleTour'
import InnovaCrysta from './pages/blogs/InnovaCrysta'
import { DestinationTravelBlogPost } from './pages/blogs/DestinationTravelBlogs'
import TouristVisa from './pages/TouristVisa'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// BrowserRouter keeps the previous scroll position across route changes,
// so reset it (or jump to the #hash target, e.g. /#contact from another page).
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const frame = requestAnimationFrame(() => {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
      })
      return () => cancelAnimationFrame(frame)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<SehgalTravelsLandingPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/taxi-service-amritsar-guide" element={<AmritsarTaxiGuide />} />
          <Route path="/blog/amritsar-to-chandigarh-taxi" element={<AmritsarChandigarh />} />
          <Route path="/blog/golden-temple-tour-guide" element={<GoldenTempleTour />} />
          <Route path="/blog/innova-crysta-rent-punjab" element={<InnovaCrysta />} />
          <Route path="/blog/:slug" element={<DestinationTravelBlogPost />} />
          <Route path="/tourist-visa" element={<TouristVisa />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
