import React from 'react';
import { SeoMeta } from '../../components/SeoMeta';

export const BlogPostTemplate: React.FC = () => {
  return (
    <>
      <SeoMeta 
        title="Amritsar to Wagah Border Taxi Guide | Sehgal Travels" 
        description="Plan your perfect trip from Amritsar to the Wagah Border. Discover travel times, best taxi options, and tips for the beating retreat ceremony."
        path="/blog/amritsar-to-wagah-border-taxi"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
            </li>
            <li><span className="text-gray-300">/</span></li>
            <li>
              <a href="/blog" className="hover:text-blue-600 transition-colors">Blogs</a>
            </li>
            <li><span className="text-gray-300">/</span></li>
            <li className="text-gray-800 font-medium" aria-current="page">
              Wagah Border Guide
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Article Column */}
          <main className="lg:col-span-2 space-y-6">
            <header className="mb-8 border-b border-gray-100 pb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                The Complete Amritsar to Wagah Border Taxi Guide (2026)
              </h1>
              
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-medium text-gray-900 mr-2">By Sehgal Travels</span>
                  <span>•</span>
                  <time dateTime="2026-06-06" className="ml-2">June 6, 2026</time>
                </div>
                
                {/* Social Share Buttons */}
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-500">Share:</span>
                  <button className="p-2 bg-gray-50 text-blue-600 rounded-full hover:bg-blue-50 transition-colors" aria-label="Share on Facebook">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                  </button>
                  <button className="p-2 bg-gray-50 text-blue-400 rounded-full hover:bg-blue-50 transition-colors" aria-label="Share on Twitter">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                  </button>
                </div>
              </div>
            </header>

            <article className="prose prose-lg prose-blue max-w-none text-gray-700">
              <p>
                Visiting the Wagah Border for the Beating Retreat ceremony is a must-do when traveling to Amritsar. Located roughly 30 km from the Golden Temple, finding the right transportation can make or break your experience.
              </p>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why Book a Dedicated Taxi?</h2>
              <p>
                While buses and shared autos are available, booking a dedicated cab ensures you travel in comfort, reach the border well before the ceremony starts, and have a guaranteed ride back to your hotel without the hassle of negotiating with drivers in the crowded post-ceremony rush.
              </p>
              {/* Add more mock content here */}
            </article>
          </main>

          {/* Sticky Sidebar Column */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              
              {/* Quick Fleet Booking Widget */}
              <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Fleet Booking</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Pickup Location" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none text-sm" />
                  <input type="text" placeholder="Drop Location" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none text-sm" />
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors">
                    Check Prices
                  </button>
                </form>
              </div>

              {/* Internal Links */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Outstation Routes</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="/amritsar-to-dalhousie-cabs" className="flex items-center text-blue-600 hover:text-blue-800 font-medium group">
                      <span className="mr-2 transform group-hover:translate-x-1 transition-transform">→</span>
                      Amritsar to Dalhousie
                    </a>
                  </li>
                  <li>
                    <a href="/amritsar-to-dharamshala-cabs" className="flex items-center text-blue-600 hover:text-blue-800 font-medium group">
                      <span className="mr-2 transform group-hover:translate-x-1 transition-transform">→</span>
                      Amritsar to Dharamshala
                    </a>
                  </li>
                  <li>
                    <a href="/amritsar-to-manali-cabs" className="flex items-center text-blue-600 hover:text-blue-800 font-medium group">
                      <span className="mr-2 transform group-hover:translate-x-1 transition-transform">→</span>
                      Amritsar to Manali
                    </a>
                  </li>
                  <li>
                    <a href="/amritsar-to-delhi-cabs" className="flex items-center text-blue-600 hover:text-blue-800 font-medium group">
                      <span className="mr-2 transform group-hover:translate-x-1 transition-transform">→</span>
                      Amritsar to Delhi Airport
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </>
  );
};