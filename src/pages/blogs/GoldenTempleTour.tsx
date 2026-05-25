import { Helmet } from 'react-helmet-async';
import sehgalLogo from '../../assets/sehgal-logo.png';

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Golden Temple Tour by Cab: Visitor's Complete Guide",
  description: 'A complete guide to visiting the Golden Temple in Amritsar by private cab — timings, nearby attractions, parking tips, and cab booking advice.',
  author: { '@type': 'Organization', name: 'Sehgal Travels' },
  publisher: { '@type': 'Organization', name: 'Sehgal Travels', url: 'https://sehgaltravels.com' },
  datePublished: '2025-05-01',
  url: 'https://sehgaltravels.com/blog/golden-temple-tour-guide',
};

export default function GoldenTempleTour() {
  return (
    <>
      <Helmet>
        <title>Golden Temple Tour by Cab: Complete Visitor Guide 2025 | Sehgal Travels</title>
        <meta name="description" content="Plan your Golden Temple visit with a private cab in Amritsar. Best timings, nearby attractions, parking tips, and how to book a reliable taxi for your Golden Temple tour." />
        <meta name="keywords" content="Golden Temple taxi service, Golden Temple tour Amritsar, cab near Golden Temple, taxi for Golden Temple visit, Golden Temple cab booking Amritsar, Harmandir Sahib taxi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sehgaltravels.com/blog/golden-temple-tour-guide" />
        <meta property="og:title" content="Golden Temple Tour by Cab: Complete Visitor Guide" />
        <meta property="og:description" content="Everything you need to know about visiting the Golden Temple by private cab — timings, nearby spots, and booking tips." />
        <meta property="og:url" content="https://sehgaltravels.com/blog/golden-temple-tour-guide" />
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
              <span className="text-xs text-orange-500 font-semibold uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full">Sightseeing</span>
              <span className="text-xs text-gray-400">May 2025 · 6 min read</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Golden Temple Tour by Cab: Visitor's Complete Guide
            </h1>

            <img
              src="https://images.unsplash.com/photo-1561304381-70c65d96a3de?q=80&w=1200&auto=format&fit=crop"
              alt="Golden Temple Amritsar tour by taxi"
              className="w-full h-80 object-cover rounded-3xl mb-10"
              loading="eager"
            />

            <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-lg">
                The <strong>Golden Temple (Harmandir Sahib)</strong> in Amritsar is the holiest shrine of Sikhism and one of the most visited spiritual destinations in the world — welcoming over 100,000 visitors daily. Booking a private <strong>cab for your Golden Temple tour</strong> is the most comfortable and efficient way to experience the sanctity and grandeur of this magnificent place. This guide tells you everything you need to know.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10">Why Visit the Golden Temple by Private Cab?</h2>
              <p>
                The Golden Temple is located in the heart of old Amritsar, where roads are narrow and parking is extremely limited. A private cab gives you the advantage of a knowledgeable driver who knows exactly where to drop you (closest entrance point), where to wait, and how to navigate the congested streets efficiently. This is far more convenient than auto-rickshaws or ride-hailing apps that may not be available near the temple during peak hours.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10">Best Time to Visit the Golden Temple</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                {[
                  { time: 'Early Morning', hours: '4 AM – 7 AM', note: 'Most serene. Palki Sahib procession at 4:30 AM.' },
                  { time: 'Evening', hours: '6 PM – 9 PM', note: 'Golden glow at sunset. Palki Sahib return at 9:45 PM.' },
                  { time: 'Weekdays', hours: 'Any time', note: 'Fewer crowds than weekends and festival days.' },
                ].map((slot, i) => (
                  <div key={i} className="bg-orange-50 rounded-2xl p-4">
                    <p className="font-bold text-gray-900">{slot.time}</p>
                    <p className="text-orange-500 font-semibold text-sm">{slot.hours}</p>
                    <p className="text-gray-600 text-sm mt-1">{slot.note}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10">Golden Temple Tour Itinerary (Full Day)</h2>
              <div className="space-y-4">
                {[
                  { time: '4:30 AM', activity: 'Palki Sahib procession — the Guru Granth Sahib is ceremonially brought to the sanctum. A deeply moving experience.' },
                  { time: '6:00 AM', activity: 'Take a dip in the Sarovar (sacred pool). Visit the Harmandir Sahib and offer ardas (prayer).' },
                  { time: '8:00 AM', activity: 'Langar (community kitchen) — enjoy a free meal served to all visitors regardless of faith. One of the largest community kitchens in the world.' },
                  { time: '10:00 AM', activity: 'Jallianwala Bagh — just a 5-minute walk from the temple. A must-visit historical site.' },
                  { time: '11:30 AM', activity: 'Partition Museum (Town Hall) — moving exhibits on the 1947 Partition. Plan 1.5 hours.' },
                  { time: '1:30 PM', activity: 'Lunch at a restaurant on Lawrence Road or Katra Jaimal Singh market.' },
                  { time: '3:00 PM', activity: 'Gobindgarh Fort — Amritsar\'s historical fort with light & sound show.' },
                  { time: '6:30 PM', activity: 'Return to Golden Temple for the evening aarti and sunset golden glow.' },
                  { time: '9:45 PM', activity: 'Palki Sahib return procession — the closing ceremony of the day.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-orange-500 font-bold text-sm w-20 flex-shrink-0 pt-0.5">{item.time}</span>
                    <p className="text-gray-700">{item.activity}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10">Nearby Attractions to Cover in One Day</h2>
              <ul className="list-none space-y-3">
                {[
                  { place: 'Jallianwala Bagh', dist: '5 min walk', note: 'Historic garden, memorial of the 1919 massacre' },
                  { place: 'Wagah Border', dist: '30 km (45 min cab)', note: 'Beating Retreat ceremony at sunset — must watch' },
                  { place: 'Durgiana Temple', dist: '3 km (10 min cab)', note: 'Hindu temple built in the style of the Golden Temple' },
                  { place: 'Gobindgarh Fort', dist: '2 km (8 min cab)', note: 'Heritage fort with live cultural shows' },
                  { place: 'Partition Museum', dist: '1 km (15 min walk)', note: 'World\'s first museum dedicated to the 1947 Partition' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-orange-500 font-bold mt-0.5">📍</span>
                    <span><strong>{item.place}</strong> ({item.dist}) — {item.note}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10">Cab Fare for Golden Temple Tour</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 rounded-xl text-sm">
                  <thead className="bg-orange-50">
                    <tr>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Tour Type</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Sedan</th>
                      <th className="border border-gray-200 px-4 py-3 text-left font-semibold">Innova / SUV</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Golden Temple Only (2 hrs)', '₹700 – ₹1,000', '₹1,000 – ₹1,400'],
                      ['Half-day Amritsar Tour (4 hrs)', '₹1,100 – ₹1,600', '₹1,800 – ₹2,200'],
                      ['Full-day Amritsar + Wagah (8 hrs)', '₹1,900 – ₹2,400', '₹2,900 – ₹3,400'],
                      ['Airport + Golden Temple Tour', '₹1,300 – ₹1,900', '₹2,200 – ₹2,900'],
                    ].map(([tour, sedan, suv], i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="border border-gray-200 px-4 py-3">{tour}</td>
                        <td className="border border-gray-200 px-4 py-3">{sedan}</td>
                        <td className="border border-gray-200 px-4 py-3">{suv}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10">Important Visitor Guidelines</h2>
              <ul className="list-none space-y-2">
                {[
                  'Cover your head at all times inside the complex — scarves/bandanas available free at the entrance',
                  'Wash your feet at the foot-washing channel before entering',
                  'Photography is allowed in most areas but not inside the sanctum sanctorum',
                  'Dress modestly — no shorts or sleeveless clothing',
                  'No smoking, alcohol, or non-vegetarian food allowed inside the complex',
                ].map((tip, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-orange-500 font-bold">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8">
                Book your Golden Temple cab tour with Sehgal Travels — call <a href="tel:+919779150658" className="text-orange-500 font-semibold hover:underline">+91 9779150658</a> or <a href="tel:+917814635511" className="text-orange-500 font-semibold hover:underline">+91 7814635511</a>. Our drivers know the best entry points, parking spots, and can wait while you complete your visit.
              </p>
            </div>
          </article>

          <aside className="mt-16 lg:mt-0 space-y-6">
            <div className="bg-orange-50 border border-orange-100 rounded-3xl p-7 sticky top-24">
              <h3 className="text-xl font-black text-gray-900 mb-2">Book a Golden Temple Tour</h3>
              <p className="text-gray-600 text-sm mb-6">Half-day & full-day packages available</p>
              <a href="tel:+919779150658" className="block bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded-2xl font-semibold mb-3 transition">
                +91 9779150658
              </a>
              <a href="tel:+917814635511" className="block bg-white border border-orange-300 hover:bg-orange-50 text-orange-600 text-center py-3 rounded-2xl font-semibold transition">
                +91 7814635511
              </a>
              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                <li>✓ Local sightseeing packages</li>
                <li>✓ Wagah Border trips</li>
                <li>✓ Airport + temple combo</li>
                <li>✓ Driver waits during visit</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-3xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">More Articles</h4>
              <div className="space-y-4">
                {[
                  { title: 'Best Taxi Service in Amritsar', href: '/blog/taxi-service-amritsar-guide' },
                  { title: 'Amritsar to Chandigarh Taxi Guide', href: '/blog/amritsar-to-chandigarh-taxi' },
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
