import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import sehgalLogo from '../assets/sehgal-logo.png';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formsubmit.co/ajax/info@sehgaltravels.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Sehgal Travels | Book Taxi & Visa Services | Amritsar</title>
        <meta name="description" content="Contact Sehgal Travels for taxi bookings, visa services, and travel packages in Amritsar. Call +91 9779150658 or fill in the contact form." />
        <link rel="canonical" href="https://sehgaltravels.com/contact" />
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
              <a href="/tourist-visa" className="hover:text-orange-500 transition">Visa Services</a>
              <a href="/blog" className="hover:text-orange-500 transition">Blog</a>
              <a href="/contact" className="text-orange-500 font-semibold">Contact</a>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-orange-50 to-white text-center px-4">
          <p className="uppercase tracking-[5px] text-orange-500 text-sm font-semibold mb-4">Sehgal Travels</p>
          <h1 className="text-4xl md:text-6xl font-black mb-4 text-gray-900">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill in the form below and we'll get back to you shortly. Or call / WhatsApp us directly for instant assistance.
          </p>
        </section>

        {/* Contact Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4 md:px-8">

            {/* Form */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Thank you for contacting Sehgal Travels. We've received your message and will get back to you within a few hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-3 rounded-full font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-black mb-6 text-gray-900">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input type="hidden" name="_subject" value="New enquiry from Sehgal Travels website" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="text" name="_honey" className="hidden" />

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your full name"
                        className="w-full border-2 border-gray-200 focus:border-orange-500 outline-none rounded-2xl px-5 py-3 text-gray-900 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full border-2 border-gray-200 focus:border-orange-500 outline-none rounded-2xl px-5 py-3 text-gray-900 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        className="w-full border-2 border-gray-200 focus:border-orange-500 outline-none rounded-2xl px-5 py-3 text-gray-900 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Service Needed</label>
                      <select
                        name="service"
                        className="w-full border-2 border-gray-200 focus:border-orange-500 outline-none rounded-2xl px-5 py-3 text-gray-900 transition bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="Taxi / Cab Booking">Taxi / Cab Booking</option>
                        <option value="Airport Transfer">Airport Transfer</option>
                        <option value="Golden Temple Tour">Golden Temple Tour</option>
                        <option value="Outstation Trip">Outstation Trip</option>
                        <option value="Tourist Visa Assistance">Tourist Visa Assistance</option>
                        <option value="Tour Package">Tour Package</option>
                        <option value="Wedding Car">Wedding Car</option>
                        <option value="Corporate Travel">Corporate Travel</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="Tell us about your travel plans, travel dates, number of passengers, destination, etc."
                        className="w-full border-2 border-gray-200 focus:border-orange-500 outline-none rounded-2xl px-5 py-3 text-gray-900 transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 transition text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-orange-500/30"
                    >
                      {loading ? 'Sending...' : 'Send Message →'}
                    </button>
                  </form>
                </>
              )}
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-10">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="/" className="flex items-center gap-3">
              <img src={sehgalLogo} alt="Sehgal Travels Logo" width={48} height={48} className="w-12 h-12 rounded-full object-cover border-2 border-orange-400 flex-shrink-0" />
              <div className="leading-tight">
                <span className="block text-2xl font-extrabold tracking-tight">Sehgal Travels</span>
                <span className="block text-xs text-orange-400 font-medium tracking-widest uppercase mt-0.5">Making Every Journey Memorable</span>
              </div>
            </a>
            <div className="flex flex-wrap gap-6 text-gray-300 text-sm">
              <a href="/" className="hover:text-orange-400">Home</a>
              <a href="/#services" className="hover:text-orange-400">Services</a>
              <a href="/tourist-visa" className="hover:text-orange-400">Visa Services</a>
              <a href="/blog" className="hover:text-orange-400">Blog</a>
              <a href="/contact" className="hover:text-orange-400">Contact</a>
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
          href="https://wa.me/917814635511?text=Hello%20Sehgal%20Travels%2C%20I%20need%20travel%20assistance."
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
