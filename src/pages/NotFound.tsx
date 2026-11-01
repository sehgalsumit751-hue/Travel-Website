import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Sehgal Travels</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
        <p className="text-orange-500 uppercase tracking-[4px] font-semibold mb-4">404</p>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Page not found</h1>
        <p className="text-gray-600 text-lg max-w-md mb-10">
          The page you're looking for doesn't exist or has moved. Need a cab? Call us at{' '}
          <a href="tel:+919779150658" className="text-orange-600 font-semibold hover:underline">+91 9779150658</a>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/" className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-3 rounded-full font-semibold">
            Go to Homepage
          </Link>
          <Link to="/blog" className="border border-gray-300 hover:border-orange-500 transition text-gray-800 px-8 py-3 rounded-full font-semibold">
            Read Travel Guides
          </Link>
        </div>
      </main>
    </>
  );
}
