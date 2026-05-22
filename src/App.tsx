import { HelmetProvider } from 'react-helmet-async';
import SehgalTravelsLandingPage from './components/Website';

function App() {
  return (
    <HelmetProvider>
      <SehgalTravelsLandingPage />
    </HelmetProvider>
  );
}

export default App;
