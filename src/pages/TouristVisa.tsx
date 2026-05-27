import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import sehgalLogo from '../assets/sehgal-logo.png';

const countries = [
  { name: 'Thailand', code: 'th', processing: '3-5 days', type: 'Visa on Arrival / e-Visa' },
  { name: 'United Arab Emirates', code: 'ae', processing: '5-7 days', type: 'Tourist Visa' },
  { name: 'Singapore', code: 'sg', processing: '3-5 days', type: 'Tourist Visa' },
  { name: 'Malaysia', code: 'my', processing: '3-5 days', type: 'e-Visa / eNTRI' },
  { name: 'Maldives', code: 'mv', processing: '1-2 days', type: 'Visa on Arrival' },
  { name: 'Sri Lanka', code: 'lk', processing: '2-3 days', type: 'e-Visa' },
  { name: 'Nepal', code: 'np', processing: '1-2 days', type: 'Visa on Arrival' },
  { name: 'Bhutan', code: 'bt', processing: '3-5 days', type: 'Tourist Visa' },
  { name: 'Turkey', code: 'tr', processing: '3-5 days', type: 'e-Visa' },
  { name: 'United Kingdom', code: 'gb', processing: '15-20 days', type: 'Tourist Visa' },
  { name: 'France', code: 'fr', processing: '15-20 days', type: 'Schengen Visa' },
  { name: 'Germany', code: 'de', processing: '15-20 days', type: 'Schengen Visa' },
  { name: 'Italy', code: 'it', processing: '15-20 days', type: 'Schengen Visa' },
  { name: 'Spain', code: 'es', processing: '15-20 days', type: 'Schengen Visa' },
  { name: 'Switzerland', code: 'ch', processing: '15-20 days', type: 'Schengen Visa' },
  { name: 'Netherlands', code: 'nl', processing: '15-20 days', type: 'Schengen Visa' },
  { name: 'Canada', code: 'ca', processing: '20-30 days', type: 'Tourist Visa' },
  { name: 'United States', code: 'us', processing: '30-60 days', type: 'B1/B2 Tourist Visa' },
  { name: 'Australia', code: 'au', processing: '10-15 days', type: 'Tourist Visa (600)' },
  { name: 'New Zealand', code: 'nz', processing: '10-15 days', type: 'Visitor Visa' },
  { name: 'Japan', code: 'jp', processing: '5-7 days', type: 'Tourist Visa' },
  { name: 'South Korea', code: 'kr', processing: '5-7 days', type: 'Tourist Visa' },
  { name: 'China', code: 'cn', processing: '5-7 days', type: 'Tourist Visa' },
  { name: 'Russia', code: 'ru', processing: '10-15 days', type: 'Tourist Visa' },
  { name: 'Egypt', code: 'eg', processing: '3-5 days', type: 'e-Visa / Visa on Arrival' },
  { name: 'Kenya', code: 'ke', processing: '3-5 days', type: 'e-Visa' },
  { name: 'South Africa', code: 'za', processing: '10-15 days', type: 'Tourist Visa' },
  { name: 'Portugal', code: 'pt', processing: '15-20 days', type: 'Schengen Visa' },
  { name: 'Greece', code: 'gr', processing: '15-20 days', type: 'Schengen Visa' },
  { name: 'Indonesia', code: 'id', processing: '2-3 days', type: 'e-Visa / Visa on Arrival' },
  { name: 'Philippines', code: 'ph', processing: '3-5 days', type: 'Visa on Arrival (30 days free)' },
  { name: 'Vietnam', code: 'vn', processing: '3-5 days', type: 'e-Visa' },
  { name: 'Cambodia', code: 'kh', processing: '2-3 days', type: 'e-Visa / Visa on Arrival' },
  { name: 'Oman', code: 'om', processing: '3-5 days', type: 'e-Visa' },
  { name: 'Bahrain', code: 'bh', processing: '3-5 days', type: 'e-Visa' },
  { name: 'Qatar', code: 'qa', processing: '3-5 days', type: 'Visa on Arrival / e-Visa' },
  { name: 'Kuwait', code: 'kw', processing: '5-7 days', type: 'Tourist Visa' },
  { name: 'Jordan', code: 'jo', processing: '3-5 days', type: 'Visa on Arrival' },
  { name: 'Israel', code: 'il', processing: '5-7 days', type: 'Tourist Visa' },
  { name: 'Morocco', code: 'ma', processing: '5-7 days', type: 'Tourist Visa' },
];

const steps = [
  { step: '01', title: 'Consult Us', desc: 'Call or WhatsApp us. We assess your travel plans and advise on the best visa option for your destination.' },
  { step: '02', title: 'Document Collection', desc: 'We provide a detailed checklist of required documents. You submit them — we handle everything from here.' },
  { step: '03', title: 'Application Filing', desc: 'Our team files your visa application with the respective consulate or embassy on your behalf.' },
  { step: '04', title: 'Track & Receive', desc: 'We track your application status and hand over the approved visa before your travel date.' },
];

export default function TouristVisa() {
  const [search, setSearch] = useState('');
  const [showContact, setShowContact] = useState(false);

  const filtered = countries.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Tourist Visa Services for All Countries | Sehgal Travels Amritsar</title>
        <meta name="description" content="Get tourist visa assistance for all countries — UAE, Thailand, UK, USA, Canada, Australia, Schengen and more. Expert visa consultants at Sehgal Travels, Amritsar. Call +91 9779150658." />
        <meta name="keywords" content="tourist visa Amritsar, visa consultant Amritsar, UAE tourist visa, Schengen visa Punjab, UK tourist visa, USA tourist visa, Canada tourist visa, Australia visa, Thailand visa, visa services Punjab, travel visa agent Amritsar, Sehgal Travels visa" />
        <link rel="canonical" href="https://sehgaltravels.com/tourist-visa" />
        <meta property="og:title" content="Tourist Visa Services for All Countries | Sehgal Travels" />
        <meta property="og:description" content="Expert visa assistance for 40+ countries. UAE, UK, USA, Canada, Schengen & more. Contact Sehgal Travels, Amritsar." />
      </Helmet>

      <div className="bg-white text-gray-900 min-h-screen font-sans">
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img
                src={sehgalLogo}
                alt="Sehgal Travels Logo"
                width={56}
                height={56}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-orange-400 shadow-md flex-shrink-0"
              />
              <div className="leading-tight">
                <span className="block text-lg md:text-2xl font-extrabold tracking-tight text-gray-900">Sehgal Travels</span>
                <span className="block text-[11px] md:text-xs text-orange-500 font-medium tracking-widest uppercase">Premium Travel & Cab Services</span>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="/" className="hover:text-orange-500 transition">Home</a>
              <a href="/#services" className="hover:text-orange-500 transition">Services</a>
              <a href="/#packages" className="hover:text-orange-500 transition">Packages</a>
              <a href="/tourist-visa" className="text-orange-500 font-semibold">Visa Services</a>
              <a href="/blog" className="hover:text-orange-500 transition">Blog</a>
              <a href="/#contact" className="hover:text-orange-500 transition">Contact</a>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-orange-50 to-white">
          <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
            <p className="uppercase tracking-[5px] text-orange-500 text-sm font-semibold mb-4">Sehgal Travels</p>
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-gray-900">
              Tourist Visa Services<br />
              <span className="text-orange-500">For All Countries</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Planning an international trip? We handle tourist visa applications for 40+ countries — from UAE and Schengen to USA, UK, Canada, Australia and beyond. Fast processing, expert guidance, stress-free travel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919779150658?text=Hello%20Sehgal%20Travels%2C%20I%20need%20tourist%20visa%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 transition text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg flex items-center justify-center gap-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Now
              </a>
              <a
                href="tel:+919779150658"
                className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
              >
                Call: +91 9779150658
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-14 bg-black text-white">
          <div className="max-w-5xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '40+', label: 'Countries Covered' },
              { value: '500+', label: 'Visas Processed' },
              { value: '98%', label: 'Approval Rate' },
              { value: '24/7', label: 'Expert Support' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl font-black text-orange-400 mb-2">{stat.value}</p>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Countries Grid */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <p className="text-orange-500 uppercase tracking-[4px] font-semibold mb-4">Destinations</p>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Countries We Process Visas For</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">Search for your destination below. We handle tourist visa applications for all major countries.</p>
            </div>

            <div className="max-w-md mx-auto mb-12">
              <input
                type="text"
                placeholder="Search country..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full border-2 border-orange-200 focus:border-orange-500 outline-none rounded-2xl px-6 py-4 text-lg transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filtered.map((country, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
                >
                  <div className="h-28 overflow-hidden bg-gray-100 relative">
                    <img
                      src={`https://flagcdn.com/w320/${country.code}.png`}
                      srcSet={`https://flagcdn.com/w160/${country.code}.png 1x, https://flagcdn.com/w320/${country.code}.png 2x`}
                      alt={`${country.name} flag`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-base leading-tight">{country.name}</h3>
                    <p className="text-xs text-orange-500 font-medium mt-1">{country.type}</p>
                    <p className="text-xs text-gray-500 mt-1">⏱ Processing: {country.processing}</p>
                  </div>
                </div>
              ))}
              {filtered.length === 0 && (
                <div className="col-span-full text-center py-12 text-gray-500 text-lg">
                  No countries found. <button onClick={() => setSearch('')} className="text-orange-500 underline">Clear search</button>
                </div>
              )}
            </div>

            <p className="text-center mt-10 text-gray-500">
              Don't see your country?{' '}
              <a href="tel:+919779150658" className="text-orange-500 font-semibold underline">Call us</a> — we process visas for all countries worldwide.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="text-center mb-14">
              <p className="text-orange-500 uppercase tracking-[4px] font-semibold mb-4">Simple Process</p>
              <h2 className="text-4xl md:text-5xl font-black mb-6">How We Get Your Visa Done</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((s, i) => (
                <div key={i} className="flex gap-6 items-start bg-gray-50 rounded-3xl p-8">
                  <div className="text-5xl font-black text-orange-200 leading-none flex-shrink-0">{s.step}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{s.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="py-24 bg-orange-50">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <p className="text-orange-500 uppercase tracking-[4px] font-semibold mb-4">Documents Required</p>
              <h2 className="text-4xl md:text-5xl font-black mb-4">General Document Checklist</h2>
              <p className="text-gray-600 text-lg">Exact requirements vary by country. We'll give you a precise checklist for your destination.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {[
                'Valid Passport (min. 6 months validity)',
                'Passport-size Photographs',
                'Bank Statements (last 6 months)',
                'Flight Itinerary / Ticket',
                'Hotel Booking Confirmation',
                'Income Tax Returns / Salary Slips',
                'Travel Insurance',
                'Cover Letter / Application Form',
                'Visa Fee Payment',
                'NOC Letter (if employed/student)',
              ].map((doc, i) => (
                <div key={i} className="bg-white rounded-2xl px-5 py-4 shadow-sm flex items-center gap-3 font-medium text-gray-700">
                  <span className="text-orange-500 text-xl">✓</span> {doc}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-black text-white text-center px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Ready to Apply for Your Tourist Visa?</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">Get in touch with our visa experts today. We'll guide you through every step — from documents to approval.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919779150658?text=Hello%20Sehgal%20Travels%2C%20I%20need%20tourist%20visa%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 transition text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg flex items-center justify-center gap-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp: +91 9779150658
            </a>
            <a
              href="tel:+917814635511"
              className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 rounded-full font-semibold text-lg"
            >
              Call: +91 7814635511
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-10 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="/" className="flex items-center gap-3">
              <img src={sehgalLogo} alt="Sehgal Travels Logo" width={48} height={48} className="w-12 h-12 rounded-full object-cover border-2 border-orange-400 flex-shrink-0" />
              <div className="leading-tight">
                <span className="block text-2xl font-extrabold tracking-tight">Sehgal Travels</span>
                <span className="block text-xs text-orange-400 font-medium tracking-widest uppercase mt-0.5">Making Every Journey Memorable</span>
              </div>
            </a>
            <div className="flex gap-6 text-gray-300 text-sm">
              <a href="/" className="hover:text-orange-400">Home</a>
              <a href="/#services" className="hover:text-orange-400">Services</a>
              <a href="/tourist-visa" className="hover:text-orange-400">Visa Services</a>
              <a href="/blog" className="hover:text-orange-400">Blog</a>
              <a href="/#contact" className="hover:text-orange-400">Contact</a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-6">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-sm">
              <p>© {new Date().getFullYear()} Sehgal Travels. All rights reserved.</p>
              <p>Designed &amp; Developed with ❤️ for Sehgal Travels</p>
            </div>
          </div>
        </footer>

        {/* WhatsApp Float */}
        <a
          href="https://wa.me/919779150658?text=Hello%20Sehgal%20Travels%2C%20I%20need%20tourist%20visa%20assistance."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50 transition hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </>
  );
}
