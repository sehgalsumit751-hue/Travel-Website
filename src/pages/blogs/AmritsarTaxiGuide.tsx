import { Helmet } from 'react-helmet-async';
import sehgalLogo from '../../assets/sehgal-logo.png';

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Taxi Service in Amritsar: Complete 2025 Guide',
  description: 'A complete guide to booking the best taxi service in Amritsar, Punjab — covering fares, vehicle options, routes, and tips.',
  author: { '@type': 'Organization', name: 'Sehgal Travels' },
  publisher: { '@type': 'Organization', name: 'Sehgal Travels', url: 'https://sehgaltravels.com' },
  datePublished: '2025-05-01',
  url: 'https://sehgaltravels.com/blog/taxi-service-amritsar-guide',
};

export default function AmritsarTaxiGuide() {
  return (
    <>
      <Helmet>
        <title>Best Taxi Service in Amritsar: Complete 2025 Guide | Sehgal Travels</title>
        <meta name="description" content="Looking for the best taxi service in Amritsar? This complete 2025 guide covers cab fares, vehicle options, airport transfers, Golden Temple tours, and outstation trips from Amritsar." />
        <meta name="keywords" content="best taxi service Amritsar, cab booking Amritsar, taxi fare Amritsar, Amritsar cab service, affordable taxi Amritsar, 24/7 cab Amritsar" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sehgaltravels.com/blog/taxi-service-amritsar-guide" />
        <meta property="og:title" content="Best Taxi Service in Amritsar: Complete 2025 Guide" />
        <meta property="og:description" content="Complete guide to booking a taxi in Amritsar — fares, vehicle options, airport transfers, and outstation trips." />
        <meta property="og:url" content="https://sehgaltravels.com/blog/taxi-service-amritsar-guide" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 hover:opacity-90 transition">
            <img src={sehgalLogo} alt="Sehgal Travels Logo" width={44} height={44} className="w-10 h-10 rounded-full object-cover border-2 border-orange-400" />
            <span className="text-xl font-extrabold text-gray-900">Sehgal Travels</span>
          </a>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="/" className="hover:text-orange-500 transition">Home</a>
            <a href="/blog" className="hover:text-orange-500 transition">Blog</a>
            <a href="tel:+917814635511" className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">Call Now</a>
          </div>
        </div>
      </header>

      <main className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 lg:grid lg:grid-cols-3 lg:gap-12">

          {/* Article */}
          <article className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <a href="/blog" className="text-sm text-orange-500 hover:underline">← Blog</a>
              <span className="text-gray-300">|</span>
              <span className="text-xs text-orange-500 font-semibold uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full">Travel Guide</span>
              <span className="text-xs text-gray-400">May 2025 · 5 min read</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Best Taxi Service in Amritsar: Complete 2025 Guide
            </h1>

            <img
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop"
              alt="Taxi service in Amritsar Punjab"
              className="w-full h-80 object-cover rounded-3xl mb-10"
              loading="eager"
            />

            <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-lg">
                Amritsar, the spiritual capital of Punjab and home to the iconic Golden Temple, welcomes millions of visitors every year. Whether you're a pilgrim, a tourist, or a business traveller, finding a <strong>reliable taxi service in Amritsar</strong> is essential for a smooth and comfortable journey. This guide covers everything you need to know before booking a cab in Amritsar in 2025.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10">Why Choose a Private Taxi in Amritsar?</h2>
              <p>
                While auto-rickshaws and buses are available, a private cab offers unmatched comfort, privacy, and flexibility. You can travel at your own pace, make stops at multiple sightseeing spots, and avoid the hassle of negotiating fares. For airport pickups, outstation trips, or family tours, a private <strong>cab service in Amritsar</strong> is always the better choice.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10">Types of Taxi Services Available in Amritsar</h2>
              <h3 className="text-xl font-semibold text-gray-800">1. Airport Taxi Service</h3>
              <p>
                Sri Guru Ram Dass Jee International Airport (ATQ) is well connected to the city. A reliable <strong>airport taxi in Amritsar</strong> ensures you reach your hotel or destination without stress. Sehgal Travels provides 24/7 airport pickup and drop services, with drivers who track your flight for timely arrivals.
              </p>

              <h3 className="text-xl font-semibold text-gray-800">2. Golden Temple Cab Service</h3>
              <p>
                The Golden Temple (Harmandir Sahib) is the most visited religious site in India. A private cab lets you visit the temple at dawn for the most serene experience, explore Jallianwala Bagh, the Partition Museum, and Wagah Border — all in a single day.
              </p>

              <h3 className="text-xl font-semibold text-gray-800">3. Outstation Cab Service</h3>
              <p>
                Amritsar is perfectly located for road trips to Himachal Pradesh, Jammu & Kashmir, and Delhi. Popular outstation routes include <strong>Amritsar to Chandigarh taxi</strong>, Amritsar to Dharamshala, Amritsar to Manali, and Amritsar to Katra (Vaishno Devi).
              </p>

              <h3 className="text-xl font-semibold text-gray-800">4. Local Sightseeing Cab</h3>
              <p>
                Amritsar has more to offer beyond the Golden Temple — Durgiana Temple, Ram Bagh, Gobindgarh Fort, and the vibrant Lawrence Road market. A local sightseeing cab with an experienced driver makes exploring easy and informative.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10">Taxi Fare Guide for Amritsar (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 rounded-xl text-sm">
                  <thead className="bg-orange-50">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Route</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Sedan (Dzire/Etios)</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Innova Crysta</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Amritsar Local (4 hrs)', '₹800 – ₹1,200', '₹1,400 – ₹1,800'],
                      ['Airport Transfer', '₹400 – ₹600', '₹700 – ₹1,000'],
                      ['Amritsar → Chandigarh', '₹2,500 – ₹3,000', '₹3,500 – ₹4,500'],
                      ['Amritsar → Dharamshala', '₹3,500 – ₹4,500', '₹5,000 – ₹6,500'],
                      ['Amritsar → Delhi', '₹6,000 – ₹7,500', '₹9,000 – ₹12,000'],
                    ].map(([route, sedan, innova], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="border border-gray-200 px-4 py-3">{route}</td>
                        <td className="border border-gray-200 px-4 py-3">{sedan}</td>
                        <td className="border border-gray-200 px-4 py-3">{innova}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500">* Fares are approximate and may vary. Contact us for exact quotes.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10">Tips for Booking a Taxi in Amritsar</h2>
              <ul className="list-none space-y-3">
                {[
                  'Book in advance during peak pilgrimage seasons (Gurpurab, Diwali, New Year)',
                  'Always confirm the fare and vehicle type before departure',
                  'Ask for a driver who knows the local area well',
                  'For airport pickups, share your flight number for real-time tracking',
                  'Prefer cabs that offer 24/7 availability for late-night arrivals',
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10">Why Choose Sehgal Travels in Amritsar?</h2>
              <p>
                Sehgal Travels is one of the most trusted <strong>cab services in Amritsar</strong> with years of experience serving pilgrims, tourists, and corporate clients. We offer a modern fleet of vehicles, professional drivers, transparent pricing, and 24/7 availability. Whether you need a <strong>local sightseeing cab in Amritsar</strong> or a long-distance outstation taxi, we have the right vehicle and driver for your journey.
              </p>
              <p>
                Call us at <a href="tel:+919779150658" className="text-orange-500 font-semibold hover:underline">+91 9779150658</a> or <a href="tel:+917814635511" className="text-orange-500 font-semibold hover:underline">+91 7814635511</a> to book your cab today.
              </p>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="mt-16 lg:mt-0 space-y-6">
            <div className="bg-orange-50 border border-orange-100 rounded-3xl p-7 sticky top-24">
              <h3 className="text-xl font-black text-gray-900 mb-2">Book a Taxi Now</h3>
              <p className="text-gray-600 text-sm mb-6">Available 24/7 across Amritsar & Punjab</p>
              <a href="tel:+919779150658" className="block bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded-2xl font-semibold mb-3 transition">
                +91 9779150658
              </a>
              <a href="tel:+917814635511" className="block bg-white border border-orange-300 hover:bg-orange-50 text-orange-600 text-center py-3 rounded-2xl font-semibold transition">
                +91 7814635511
              </a>
              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                <li>✓ Airport Transfers</li>
                <li>✓ Golden Temple Tours</li>
                <li>✓ Outstation Cabs</li>
                <li>✓ Innova Crysta Available</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">More Articles</h4>
              <div className="space-y-4">
                {[
                  { title: 'Amritsar to Chandigarh Taxi Guide', href: '/blog/amritsar-to-chandigarh-taxi' },
                  { title: 'Golden Temple Tour by Cab', href: '/blog/golden-temple-tour-guide' },
                  { title: 'Innova Crysta on Rent in Punjab', href: '/blog/innova-crysta-rent-punjab' },
                ].map((a, i) => (
                  <a key={i} href={a.href} className="block text-sm text-orange-500 hover:underline">{a.title} →</a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="bg-black text-white py-8 text-center text-sm text-gray-500 mt-12">
        <p>© {new Date().getFullYear()} Sehgal Travels. All rights reserved.</p>
      </footer>
    </>
  );
}
