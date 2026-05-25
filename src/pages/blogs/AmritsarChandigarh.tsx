import { Helmet } from 'react-helmet-async';
import sehgalLogo from '../../assets/sehgal-logo.png';

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Amritsar to Chandigarh Taxi: Fare, Route & Booking Tips',
  description: 'Complete guide to booking a taxi from Amritsar to Chandigarh — fare comparison, distance, best routes, and travel tips.',
  author: { '@type': 'Organization', name: 'Sehgal Travels' },
  publisher: { '@type': 'Organization', name: 'Sehgal Travels', url: 'https://sehgaltravels.com' },
  datePublished: '2025-05-01',
  url: 'https://sehgaltravels.com/blog/amritsar-to-chandigarh-taxi',
};

export default function AmritsarChandigarh() {
  return (
    <>
      <Helmet>
        <title>Amritsar to Chandigarh Taxi: Fare, Route & Tips 2025 | Sehgal Travels</title>
        <meta name="description" content="Book a cab from Amritsar to Chandigarh with Sehgal Travels. Distance: ~230 km. Fare starts from ₹2,500. One-way & round-trip available. Call +91 9779150658." />
        <meta name="keywords" content="Amritsar to Chandigarh taxi, Chandigarh to Amritsar cab, Amritsar Chandigarh cab fare, taxi Amritsar Chandigarh, cab booking Amritsar to Chandigarh" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sehgaltravels.com/blog/amritsar-to-chandigarh-taxi" />
        <meta property="og:title" content="Amritsar to Chandigarh Taxi: Fare, Route & Tips" />
        <meta property="og:description" content="Cab from Amritsar to Chandigarh — fare, distance, route, and tips. Starts from ₹2,500." />
        <meta property="og:url" content="https://sehgaltravels.com/blog/amritsar-to-chandigarh-taxi" />
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

          <article className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <a href="/blog" className="text-sm text-orange-500 hover:underline">← Blog</a>
              <span className="text-gray-300">|</span>
              <span className="text-xs text-orange-500 font-semibold uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full">Routes</span>
              <span className="text-xs text-gray-400">May 2025 · 4 min read</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Amritsar to Chandigarh Taxi: Fare, Route & Booking Tips
            </h1>

            <img
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200&auto=format&fit=crop"
              alt="Road trip from Amritsar to Chandigarh by taxi"
              className="w-full h-80 object-cover rounded-3xl mb-10"
              loading="eager"
            />

            <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-lg">
                The <strong>Amritsar to Chandigarh taxi</strong> route is one of the most popular intercity cab routes in Punjab. Whether you're travelling for business, heading to Chandigarh airport, or starting a Himachal Pradesh road trip, this guide covers everything — current fares, best routes, journey time, and how to book the most comfortable cab.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10">Amritsar to Chandigarh: Key Facts</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
                {[
                  { label: 'Distance', value: '~230 km' },
                  { label: 'Travel Time', value: '3.5 – 4.5 hrs' },
                  { label: 'Best Route', value: 'NH44 / NH5' },
                  { label: 'Starting Fare', value: '₹2,500' },
                ].map((item, i) => (
                  <div key={i} className="bg-orange-50 rounded-2xl p-4 text-center">
                    <p className="text-2xl font-black text-orange-500">{item.value}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10">Taxi Fare: Amritsar to Chandigarh (2025)</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 rounded-xl text-sm">
                  <thead className="bg-orange-50">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Vehicle</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">One Way</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Round Trip</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Capacity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Maruti Dzire / Etios', '₹2,500 – ₹3,000', '₹4,500 – ₹5,500', '4 passengers'],
                      ['Toyota Innova', '₹3,200 – ₹3,800', '₹5,800 – ₹6,500', '7 passengers'],
                      ['Innova Crysta', '₹3,500 – ₹4,500', '₹6,500 – ₹8,000', '6 passengers'],
                      ['Kia Carens / XL6', '₹3,000 – ₹3,500', '₹5,500 – ₹6,500', '6 passengers'],
                    ].map(([vehicle, one, round, cap], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="border border-gray-200 px-4 py-3 font-medium">{vehicle}</td>
                        <td className="border border-gray-200 px-4 py-3">{one}</td>
                        <td className="border border-gray-200 px-4 py-3">{round}</td>
                        <td className="border border-gray-200 px-4 py-3">{cap}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500">* Fares are approximate. Toll charges extra. Contact us for fixed quotes.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10">Best Route: Amritsar to Chandigarh by Road</h2>
              <p>
                The most common route is via <strong>NH44</strong> (Grand Trunk Road) passing through Jalandhar, Phagwara, and Ludhiana before joining NH5 towards Chandigarh. The journey covers approximately 230 km and takes around 3.5 to 4.5 hours depending on traffic.
              </p>
              <p>
                An alternate slightly shorter route (via Beas, Nakodar, and Doraha) avoids the Ludhiana city bypass and can save 20–30 minutes during non-peak hours.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10">Popular Stops Along the Way</h2>
              <ul className="list-none space-y-3">
                {[
                  { place: 'Jalandhar (~60 km)', note: 'Devi Talab Mandir, shopping at Phulkari market' },
                  { place: 'Phagwara (~90 km)', note: 'Quick dhaba break — famous for Punjabi cuisine' },
                  { place: 'Ludhiana (~140 km)', note: "Punjab's largest city — visit if time permits" },
                  { place: 'Ropar (~190 km)', note: 'Entry point into Greater Chandigarh area' },
                ].map((stop, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-orange-500 font-bold mt-0.5">📍</span>
                    <span><strong>{stop.place}</strong> — {stop.note}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10">Chandigarh to Amritsar Cab (Return Trip)</h2>
              <p>
                Planning a return <strong>Chandigarh to Amritsar cab</strong>? Sehgal Travels offers both one-way and round-trip bookings. For round trips, you get a discounted rate and the same driver for the entire journey — ideal for day trips and business travel.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10">Why Book Amritsar–Chandigarh Taxi with Sehgal Travels?</h2>
              <ul className="list-none space-y-3">
                {[
                  'Fixed fares — no hidden toll or night charges',
                  'Modern, clean vehicles with air conditioning',
                  'Experienced drivers familiar with NH44 and alternate routes',
                  'Flexible pickup points — hotel, airport, or Golden Temple',
                  '24/7 availability — early morning and late night departures',
                ].map((p, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <p>
                Book your <strong>Amritsar to Chandigarh taxi</strong> now — call <a href="tel:+919779150658" className="text-orange-500 font-semibold hover:underline">+91 9779150658</a> or <a href="tel:+917814635511" className="text-orange-500 font-semibold hover:underline">+91 7814635511</a>.
              </p>
            </div>
          </article>

          <aside className="mt-16 lg:mt-0 space-y-6">
            <div className="bg-orange-50 border border-orange-100 rounded-3xl p-7 sticky top-24">
              <h3 className="text-xl font-black text-gray-900 mb-2">Book This Route</h3>
              <p className="text-gray-600 text-sm mb-1">Amritsar → Chandigarh</p>
              <p className="text-orange-500 font-bold text-lg mb-6">From ₹2,500</p>
              <a href="tel:+917814635511" className="block bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded-2xl font-semibold mb-3 transition">
                +91 7814635511
              </a>
              <a href="tel:+919779150658" className="block bg-white border border-orange-300 hover:bg-orange-50 text-orange-600 text-center py-3 rounded-2xl font-semibold transition">
                +91 9779150658
              </a>
              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                <li>✓ One-way & round-trip</li>
                <li>✓ Fixed pricing, no surprises</li>
                <li>✓ Sedan, Innova & SUV options</li>
                <li>✓ 24/7 availability</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-3xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">More Articles</h4>
              <div className="space-y-4">
                {[
                  { title: 'Best Taxi Service in Amritsar', href: '/blog/taxi-service-amritsar-guide' },
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
