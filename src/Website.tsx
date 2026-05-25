import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import sehgalLogo from './assets/sehgal-logo.png';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TaxiService'],
  name: 'Sehgal Travels',
  description: 'Premium taxi and cab services in Amritsar, Punjab. Airport transfers, Golden Temple tours, Innova Crysta rentals, outstation cabs, and luxury travel services available 24/7.',
  url: 'https://sehgaltravels.com',
  telephone: ['+919779150658', '+917814635511'],
  email: 'info@sehgaltravels.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1120, Hussainpura',
    addressLocality: 'Amritsar',
    addressRegion: 'Punjab',
    postalCode: '143001',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: '31.6340', longitude: '74.8723' },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI, Credit Card',
  areaServed: [
    { '@type': 'City', name: 'Amritsar' },
    { '@type': 'AdministrativeArea', name: 'Punjab' },
    { '@type': 'City', name: 'Chandigarh' },
    { '@type': 'City', name: 'Jalandhar' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What taxi services does Sehgal Travels offer in Amritsar?',
      acceptedAnswer: { '@type': 'Answer', text: 'Sehgal Travels offers airport transfers, Golden Temple tours, outstation cabs, luxury car rentals (Innova Crysta, Toyota Hycross, Kia Carens), corporate travel, wedding car rentals, and 24/7 pickup & drop services across Amritsar and Punjab.' },
    },
    {
      '@type': 'Question',
      name: 'How do I book a cab in Amritsar with Sehgal Travels?',
      acceptedAnswer: { '@type': 'Answer', text: 'Call us directly at +91 9779150658 or +91 7814635511. Our team is available 24/7 to assist with bookings for local, outstation, and airport taxi services across Amritsar and Punjab.' },
    },
    {
      '@type': 'Question',
      name: 'What is the taxi fare from Amritsar to Chandigarh?',
      acceptedAnswer: { '@type': 'Answer', text: 'The fare from Amritsar to Chandigarh ranges from ₹2,500 to ₹4,500 depending on the vehicle. Sedans (Dzire/Etios) start from ₹2,500, Innova Crysta from ₹3,500. Contact us at +91 9779150658 for exact pricing.' },
    },
    {
      '@type': 'Question',
      name: 'Do you provide airport taxi service at Sri Guru Ram Dass Jee Airport, Amritsar?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, we provide 24/7 airport pickup and drop at Amritsar International Airport (ATQ). Our drivers monitor flight arrivals and ensure on-time pickup for all passengers.' },
    },
    {
      '@type': 'Question',
      name: 'Which vehicles are available for rent in Punjab with Sehgal Travels?',
      acceptedAnswer: { '@type': 'Answer', text: 'Our fleet includes Maruti Suzuki Dzire, Toyota Etios, Toyota Innova, Innova Crysta, Toyota Hycross, Maruti XL6, and Kia Carens — suitable for solo travelers, families, and corporate groups.' },
    },
    {
      '@type': 'Question',
      name: 'Do you offer one-way taxi service from Amritsar to other cities?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, we offer one-way and round-trip cab services from Amritsar to Chandigarh, Delhi, Dharamshala, Katra, Dalhousie, Manali, and other major destinations across North India.' },
    },
  ],
};

export default function SehgalTravelsLandingPage() {
  const [showContact, setShowContact] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: 'What taxi services does Sehgal Travels offer in Amritsar?', a: 'We offer airport transfers, Golden Temple tours, outstation cabs, luxury car rentals (Innova Crysta, Toyota Hycross, Kia Carens), corporate travel, wedding car rentals, and 24/7 pickup & drop services across Amritsar and Punjab.' },
    { q: 'How do I book a cab in Amritsar with Sehgal Travels?', a: 'Simply call us at +91 9779150658 or +91 7814635511. Our team is available 24/7 for local, outstation, and airport taxi bookings.' },
    { q: 'What is the taxi fare from Amritsar to Chandigarh?', a: 'Fares range from ₹2,500 to ₹4,500 depending on vehicle type. Sedans (Dzire/Etios) start from ₹2,500, Innova Crysta from ₹3,500. Call us for exact pricing.' },
    { q: 'Do you provide airport pickup and drop at Amritsar Airport?', a: 'Yes! We offer 24/7 airport pickup and drop at Sri Guru Ram Dass Jee International Airport (ATQ), Amritsar. Our drivers track flight arrivals for on-time service.' },
    { q: 'Which vehicles are available for hire in Punjab?', a: 'Our fleet includes Maruti Dzire, Toyota Etios, Toyota Innova, Innova Crysta, Toyota Hycross, Maruti XL6, and Kia Carens — suitable for solo trips, family tours, and corporate travel.' },
    { q: 'Do you offer one-way cabs from Amritsar to other cities?', a: 'Yes! We provide one-way and round-trip taxi services from Amritsar to Chandigarh, Delhi, Dharamshala, Katra, Dalhousie, Manali, and other North India destinations.' },
  ];

  const blogPosts = [
    { title: 'Best Taxi Service in Amritsar: Complete 2025 Guide', category: 'Travel Guide', excerpt: 'Everything you need to know about booking a reliable cab in Amritsar — routes, fares, and tips.', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&auto=format&fit=crop', href: '/blog/taxi-service-amritsar-guide' },
    { title: 'Amritsar to Chandigarh Taxi: Fare, Route & Tips', category: 'Routes', excerpt: "Planning a cab from Amritsar to Chandigarh? Complete guide on fares, stops, and booking.", image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=600&auto=format&fit=crop', href: '/blog/amritsar-to-chandigarh-taxi' },
    { title: "Golden Temple Tour by Cab: Visitor's Complete Guide", category: 'Sightseeing', excerpt: 'How to plan your Golden Temple visit with a private cab — timings, routes, and nearby attractions.', image: 'https://images.unsplash.com/photo-1561304381-70c65d96a3de?q=80&w=600&auto=format&fit=crop', href: '/blog/golden-temple-tour-guide' },
    { title: 'Innova Crysta on Rent in Punjab: Is It Worth It?', category: 'Vehicle Guide', excerpt: 'Why Innova Crysta is the top choice for family trips and outstation travel across Punjab.', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop', href: '/blog/innova-crysta-rent-punjab' },
  ];

  const packages = [
    {
      title: 'Himachal Tour',
      days: '5 Days / 4 Nights',
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'Kashmir Paradise',
      days: '6 Days / 5 Nights',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'Goa Vacation',
      days: '4 Days / 3 Nights',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
    },
  ];

  const services = [ 
    'Airport Transfers',
    'Golden Temple Tours',
    'Luxury Travel Packages',
    'Outstation Trips',
    'Corporate Travel',
    '24/7 Pickup & Drop',
  ];

  const fleet = [
    {
      name: 'Maruti Suzuki Dzire',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Maruti_Suzuki_Dzire_VXi_VVT_%28front%29.JPG/960px-Maruti_Suzuki_Dzire_VXi_VVT_%28front%29.JPG',
    },
    {
      name: 'Toyota Etios',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Toyota_Etios_top_left_front.jpg',
    },
    {
      name: 'Toyota Innova',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/70/2016_Toyota_Innova_2.8_G.jpg',
    },
    {
      name: 'Innova Crysta',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Toyota_Innova_Crysta_2.4_Z_side.jpg',
    },
    {
      name: 'Toyota Hycross',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/2023_Toyota_Innova_Zenix_2.0_HEV_Premium.jpg',
    },
    {
      name: 'XL6',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Maruti_Suzuki_XL6_%28front%29.jpg',
    },
    {
      name: 'Kia Carens',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Kia_Carens_%28front_quarter_grey%29.JPG',
    },
    {
      name: 'Tempo Traveller',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/IMG-20190215-WA0015.jpg/960px-IMG-20190215-WA0015.jpg',
    },
    {
      name: 'Force Urbania',
      image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Force/Urbania/11849/1763466348855/front-left-side-47.jpg?tr=w-664',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Best Taxi Service in Amritsar Punjab | Cab Booking | Sehgal Travels</title>
        <meta name="description" content="Book reliable taxi in Amritsar with Sehgal Travels. Airport transfers, Golden Temple tours, Innova Crysta rental, Chandigarh to Amritsar cab, outstation trips & Punjab tour packages. Call +91 9779150658. Available 24/7." />
        <meta name="keywords" content="taxi service Amritsar, cab booking Amritsar, airport taxi Amritsar, Innova Crysta on rent Punjab, Golden Temple taxi, Chandigarh to Amritsar cab, outstation cab Punjab, Punjab tour packages, Sehgal Travels, best cab Amritsar, luxury taxi Punjab, Amritsar to Delhi taxi, Amritsar to Chandigarh taxi, one way cab Punjab, taxi near golden temple, cab booking near me Amritsar, airport pickup Amritsar, tempo traveller Punjab, Amritsar to Manali taxi, Amritsar to Dharamshala cab, Amritsar to Katra taxi, wedding car rental Amritsar, corporate cab service Punjab" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Sehgal Travels" />
        <link rel="canonical" href="https://sehgaltravels.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Best Taxi Service in Amritsar Punjab | Sehgal Travels" />
        <meta property="og:description" content="Premium taxi & cab services in Amritsar, Punjab. Airport transfers, Golden Temple tours, outstation trips & Innova Crysta rentals. 24/7 service. Call +91 9779150658." />
        <meta property="og:url" content="https://sehgaltravels.com/" />
        <meta property="og:site_name" content="Sehgal Travels" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Taxi Service in Amritsar Punjab | Sehgal Travels" />
        <meta name="twitter:description" content="Premium taxi & cab services in Amritsar. Airport transfers, Golden Temple tours, outstation trips. Available 24/7." />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
  
      <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={sehgalLogo}
              alt="Sehgal Travels Logo"
              width={56}
              height={56}
              fetchPriority="high"
              decoding="async"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-orange-400 shadow-md flex-shrink-0"
            />
            <div className="leading-tight">
              <span className="block text-lg md:text-2xl font-extrabold tracking-tight text-gray-900">
                Sehgal Travels
              </span>
              <span className="block text-[11px] md:text-xs text-orange-500 font-medium tracking-widest uppercase">
                Premium Travel & Cab Services
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-orange-500 transition">
              Home
            </a>
            <a href="#services" className="hover:text-orange-500 transition">
              Services
            </a>
            <a href="#packages" className="hover:text-orange-500 transition">
              Packages
            </a>
            <a href="#about" className="hover:text-orange-500 transition">
              About
            </a>
            <a href="/blog" className="hover:text-orange-500 transition">
              Blog
            </a>
            <a href="#contact" className="hover:text-orange-500 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1561304381-70c65d96a3de?q=80&w=1800&auto=format&fit=crop"
          alt="Golden Temple Amritsar"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
          <p className="uppercase tracking-[5px] text-orange-300 text-sm mb-4">
            Trusted Travel Partner
          </p>

          <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6">
            Best Taxi Service in
            <span className="text-orange-400"> Amritsar & Punjab</span>
          </h1>

          <p className="text-base md:text-xl text-gray-200 mb-8 leading-relaxed">
            Premium cab services, Golden Temple tours, airport transfers, outstation rides, and luxury travel experiences crafted with comfort and trust by Sehgal Travels.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#packages" className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full font-semibold text-lg shadow-lg">
              Explore Packages
            </a>

            <button
              onClick={() => setShowContact(true)}
              className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full font-semibold text-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Customized Trips',
              desc: 'Personalized holiday plans based on your travel style and budget.',
            },
            {
              title: 'Affordable Pricing',
              desc: 'Premium travel experiences at highly competitive prices.',
            },
            {
              title: '24/7 Support',
              desc: 'Dedicated travel assistance whenever you need help.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 text-2xl mx-auto">
                ✈️
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=800&auto=format&fit=crop"
              alt="Golden Temple Amritsar"
              loading="lazy"
              decoding="async"
              className="rounded-[40px] shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          <div>
            <p className="text-orange-500 font-semibold uppercase tracking-[4px] mb-4">
              About Us
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Experience Amritsar With Premium Travel Services
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Sehgal Travels offers premium transportation and travel services across Amritsar and Punjab. From Golden Temple visits to airport pickups and luxury outstation rides, we provide professional drivers, comfortable vehicles, and unforgettable travel experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-2xl px-5 py-4 font-medium hover:bg-orange-100 transition"
                >
                  ✓ {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
{/* SEO Content Section */}
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 md:px-8">

    <div className="text-center mb-14">
      <p className="text-orange-500 uppercase tracking-[4px] font-semibold mb-4">
        Best Taxi Service In Punjab
      </p>

      <h2 className="text-4xl md:text-5xl font-black mb-6">
        Affordable Cab Booking & Luxury Taxi Services
      </h2>

      <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Sehgal Travels is one of the leading taxi service providers in Amritsar Punjab offering airport taxi booking, Innova Crysta rentals, Golden Temple taxi service, outstation cab booking, Punjab tour packages, Chandigarh to Amritsar cab service, and luxury transportation services with professional drivers and affordable pricing.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      <div className="bg-white rounded-3xl p-8 shadow-md">
        <h3 className="text-2xl font-bold mb-5">
          Popular Taxi Services
        </h3>

        <ul className="space-y-3 text-gray-700 leading-relaxed">
          <li>✓ Taxi Service In Amritsar</li>
          <li>✓ Cab Booking Amritsar</li>
          <li>✓ Airport Taxi Amritsar</li>
          <li>✓ Innova Crysta On Rent Punjab</li>
          <li>✓ Chandigarh To Amritsar Cab</li>
          <li>✓ Golden Temple Taxi Service</li>
          <li>✓ Outstation Cab Punjab</li>
          <li>✓ One Way Taxi Punjab</li>
          <li>✓ Round Trip Cab Service</li>
          <li>✓ Luxury Taxi Service Punjab</li>
          <li>✓ Wedding Car Rental Amritsar</li>
          <li>✓ 24/7 Taxi Service Amritsar</li>
          <li>✓ Family Tour Taxi Punjab</li>
          <li>✓ Corporate Cab Service</li>
          <li>✓ Punjab Sightseeing Taxi</li>
          <li>✓ Local Cab Service Amritsar</li>
          <li>✓ Cheap Taxi Service Punjab</li>
          <li>✓ Best Travel Agency Amritsar</li>
          <li>✓ Tempo Traveller Booking Punjab</li>
          <li>✓ Taxi For Golden Temple Visit</li>
        </ul>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-md">
        <h3 className="text-2xl font-bold mb-5">
          Punjab & North India Routes
        </h3>

        <ul className="space-y-3 text-gray-700 leading-relaxed">
          <li>✓ Amritsar To Chandigarh Taxi</li>
          <li>✓ Amritsar To Delhi Cab</li>
          <li>✓ Amritsar To Katra Taxi</li>
          <li>✓ Amritsar To Dharamshala Cab</li>
          <li>✓ Amritsar To Dalhousie Taxi</li>
          <li>✓ Amritsar To Manali Cab</li>
          <li>✓ Punjab Himachal Tour Packages</li>
          <li>✓ Kashmir Tour Taxi Service</li>
          <li>✓ Vaishno Devi Taxi Booking</li>
          <li>✓ Airport Pickup Amritsar</li>
          <li>✓ Airport Drop Taxi Punjab</li>
          <li>✓ Cab Booking Near Golden Temple</li>
          <li>✓ Taxi Service Near Amritsar Airport</li>
          <li>✓ Innova Taxi Booking Punjab</li>
          <li>✓ SUV Cab Rental Punjab</li>
          <li>✓ Luxury Car Rental Amritsar</li>
          <li>✓ Cab Service In Punjab</li>
          <li>✓ Online Taxi Booking Amritsar</li>
          <li>✓ North India Tour Packages</li>
          <li>✓ Punjab Holiday Packages</li>
        </ul>
      </div>

    </div>
  </div>
</section>
      {/* Premium Fleet */}
      <section id="services" className="py-24 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-400 uppercase tracking-[4px] font-semibold mb-4">
              Our Premium Fleet
            </p>

            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Luxury Cars For Every Journey
            </h2>

            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Choose from our premium range of vehicles for airport transfers,
              local sightseeing, weddings, business trips, and family tours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleet.map((car, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[30px] overflow-hidden hover:-translate-y-2 transition duration-300 shadow-2xl"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wide border border-orange-400">
                    SEHGAL TRAVELS
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-3">{car.name}</h3>

                  <p className="text-gray-300 mb-6">
                    Clean interiors, professional drivers, and premium comfort
                    for your journey.
                  </p>

                  <div className="relative mt-4">
                    <span className="absolute inset-0 rounded-full bg-orange-400 animate-ping opacity-50"></span>
                    <a
                      href={index === 0 ? 'tel:+919779150658' : 'tel:+917814635511'}
                      className="relative block bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold w-full text-center shadow-lg shadow-orange-500/50"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-500 uppercase tracking-[4px] font-semibold mb-4">
              Popular Packages
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              Best Holiday Destinations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
              >
                <div className="overflow-hidden h-72">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <span className="text-sm bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-medium">
                      {item.days}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6">
                    Enjoy premium stays, sightseeing, and unforgettable moments.
                  </p>

                  <button
                    onClick={() => setShowContact(true)}
                    className="w-full bg-black text-white py-4 rounded-2xl hover:bg-orange-500 transition font-semibold"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-orange-500 uppercase tracking-[4px] font-semibold mb-4">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need to know about our taxi and cab services in Amritsar, Punjab.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-gray-900 hover:bg-orange-50 transition"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{faq.q}</span>
                  <span className={`text-orange-500 text-2xl ml-4 transition-transform duration-200 ${openFaq === index ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 pt-4 text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-500 uppercase tracking-[4px] font-semibold mb-4">Travel Tips & Guides</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Latest From Our Blog</h2>
            <p className="text-gray-600 text-lg">Helpful guides, routes, and tips for your Punjab travel experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post, index) => (
              <a key={index} href={post.href} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group block">
                <div className="h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-xs text-orange-500 font-semibold uppercase tracking-widest">{post.category}</span>
                  <h3 className="text-base font-bold mt-2 mb-3 text-gray-900 group-hover:text-orange-500 transition leading-snug">{post.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{post.excerpt}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/blog" className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg">
              View All Articles →
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop"
          alt="Adventure"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 text-white">
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Ready For Your Next Adventure?
          </h2>

          <p className="text-lg md:text-xl text-gray-200 mb-10">
            Let Sehgal Travels create unforgettable journeys for you and your family.
          </p>

          <button className="mt-6 bg-orange-500 hover:bg-orange-600 transition px-10 py-5 rounded-full text-lg font-semibold shadow-xl">
            Book Your Trip
          </button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-orange-50">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-orange-500 uppercase tracking-[4px] font-semibold mb-3">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Let's Plan Your Journey
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
              Reach out to Sehgal Travels for customized travel packages, bookings, and travel assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="bg-white rounded-3xl p-7 shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">
                📞
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-orange-500 font-semibold mb-2">Phone</p>
                <p className="text-gray-700 font-medium">+91 9779150658</p>
                <p className="text-gray-700 font-medium mt-1">
                  <a href="tel:+917814635511" className="text-blue-600 underline hover:text-blue-800 transition">+91 7814635511</a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-3xl p-7 shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">
                ✉️
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-orange-500 font-semibold mb-2">Email</p>
                <a
                  href="mailto:info@sehgaltravels.com"
                  className="text-blue-600 underline hover:text-blue-800 transition font-medium break-all"
                >
                  info@sehgaltravels.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-3xl p-7 shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">
                📍
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-orange-500 font-semibold mb-2">Location</p>
                <a
                  href="https://maps.app.goo.gl/UBLX9SuqNgzD1BzaA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 font-medium leading-relaxed hover:text-orange-500 transition underline underline-offset-2"
                >
                  1120, Hussainpura<br />
                  Amritsar – 143001<br />
                  Punjab, India
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src={sehgalLogo}
              alt="Sehgal Travels Logo"
              width={48}
              height={48}
              loading="lazy"
              decoding="async"
              className="w-12 h-12 rounded-full object-cover border-2 border-orange-400 flex-shrink-0"
            />
            <div className="leading-tight">
              <span className="block text-2xl font-extrabold tracking-tight">Sehgal Travels</span>
              <span className="block text-xs text-orange-400 font-medium tracking-widest uppercase mt-0.5">
                Making Every Journey Memorable
              </span>
            </div>
          </div>

          <div className="flex gap-6 text-gray-300 text-sm">
            <a href="#home" className="hover:text-orange-400">
              Home
            </a>
            <a href="#services" className="hover:text-orange-400">
              Services
            </a>
            <a href="#packages" className="hover:text-orange-400">
              Packages
            </a>
            <a href="/blog" className="hover:text-orange-400">
              Blog
            </a>
            <a href="#contact" className="hover:text-orange-400">
              Contact
            </a>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 mt-8 pt-6">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Sehgal Travels. All rights reserved.</p>
            <p>Designed &amp; Developed with ❤️ for Sehgal Travels</p>
          </div>
        </div>
      </footer>

      {/* Contact Popup */}
      {showContact && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowContact(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-sm mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition text-lg"
            >
              ✕
            </button>

            <div className="text-center mb-6">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl mx-auto mb-4">
                📞
              </div>
              <h3 className="text-2xl font-black text-gray-900">Call Us</h3>
              <p className="text-gray-500 text-sm mt-1">Tap a number to dial directly</p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="tel:+917814635511"
                className="flex items-center justify-between bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-2xl px-5 py-4 transition group"
              >
                <span className="text-gray-800 font-semibold text-lg">+91 7814635511</span>
                <span className="text-orange-500 text-xl group-hover:scale-110 transition">→</span>
              </a>
              <a
                href="tel:+919779150658"
                className="flex items-center justify-between bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-2xl px-5 py-4 transition group"
              >
                <span className="text-gray-800 font-semibold text-lg">+91 9779150658</span>
                <span className="text-orange-500 text-xl group-hover:scale-110 transition">→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  </>
);
}