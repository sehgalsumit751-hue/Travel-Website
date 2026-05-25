import { Helmet } from 'react-helmet-async';
import sehgalLogo from '../assets/sehgal-logo.png';

const posts = [
  {
    title: 'Best Taxi Service in Amritsar: Complete 2025 Guide',
    category: 'Travel Guide',
    date: 'May 2025',
    excerpt: 'Everything you need to know about booking a reliable cab in Amritsar — routes, fares, and insider tips for a smooth journey.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop',
    href: '/blog/taxi-service-amritsar-guide',
    readTime: '5 min read',
  },
  {
    title: 'Amritsar to Chandigarh Taxi: Fare, Route & Booking Tips',
    category: 'Routes',
    date: 'May 2025',
    excerpt: 'Planning a cab from Amritsar to Chandigarh? Complete guide on current fares, best routes, pit stops, and how to book.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop',
    href: '/blog/amritsar-to-chandigarh-taxi',
    readTime: '4 min read',
  },
  {
    title: "Golden Temple Tour by Cab: Visitor's Complete Guide",
    category: 'Sightseeing',
    date: 'May 2025',
    excerpt: 'How to plan your Golden Temple visit with a private cab — timings, nearby attractions, parking tips, and what to expect.',
    image: 'https://images.unsplash.com/photo-1561304381-70c65d96a3de?q=80&w=800&auto=format&fit=crop',
    href: '/blog/golden-temple-tour-guide',
    readTime: '6 min read',
  },
  {
    title: 'Innova Crysta on Rent in Punjab: Is It Worth It?',
    category: 'Vehicle Guide',
    date: 'May 2025',
    excerpt: 'Why the Innova Crysta is the most popular choice for family trips, outstation travel, and airport transfers across Punjab.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
    href: '/blog/innova-crysta-rent-punjab',
    readTime: '4 min read',
  },
];

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Travel Blog – Taxi Tips, Routes & Punjab Guides | Sehgal Travels</title>
        <meta name="description" content="Read travel guides, taxi fare comparisons, route tips, and sightseeing guides for Amritsar and Punjab by Sehgal Travels." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sehgaltravels.com/blog" />
        <meta property="og:title" content="Travel Blog | Sehgal Travels" />
        <meta property="og:description" content="Taxi tips, route guides, and travel advice for Amritsar and Punjab." />
        <meta property="og:url" content="https://sehgaltravels.com/blog" />
      </Helmet>

      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 hover:opacity-90 transition">
            <img src={sehgalLogo} alt="Sehgal Travels Logo" width={44} height={44} className="w-10 h-10 rounded-full object-cover border-2 border-orange-400" />
            <span className="text-xl font-extrabold text-gray-900">Sehgal Travels</span>
          </a>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="/" className="hover:text-orange-500 transition">Home</a>
            <a href="/blog" className="text-orange-500 font-semibold">Blog</a>
            <a href="/#contact" className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">Book Now</a>
          </div>
        </div>
      </header>

      <main className="bg-gray-50 min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-500 uppercase tracking-[4px] font-semibold mb-4">Travel Tips & Guides</p>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Our Travel Blog</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Taxi fare guides, sightseeing tips, route comparisons, and travel advice for Amritsar and Punjab.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <a key={i} href={post.href} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition group">
                <div className="h-64 overflow-hidden">
                  <img src={post.image} alt={post.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-orange-500 font-semibold uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-gray-400">{post.date} · {post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition leading-snug">{post.title}</h2>
                  <p className="text-gray-500 leading-relaxed text-sm">{post.excerpt}</p>
                  <span className="inline-block mt-5 text-orange-500 font-semibold text-sm group-hover:translate-x-1 transition-transform">Read more →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-black text-white py-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Sehgal Travels. All rights reserved.</p>
      </footer>
    </>
  );
}
