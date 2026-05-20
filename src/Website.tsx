import sehgalLogo from './assets/sehgal-logo.jpeg';

export default function SehgalTravelsLandingPage() {
  const packages = [
    {
      title: 'Himachal Tour',
      days: '5 Days / 4 Nights',
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Kashmir Paradise',
      days: '6 Days / 5 Nights',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Goa Vacation',
      days: '4 Days / 3 Nights',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
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
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={sehgalLogo}
              alt="Sehgal Travels Logo"
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
          src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1800&auto=format&fit=crop"
          alt="Travel Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
          <p className="uppercase tracking-[5px] text-orange-300 text-sm mb-4">
            Trusted Travel Partner
          </p>

          <h2 className="text-4xl md:text-7xl font-black leading-tight mb-6">
            Explore The Beauty Of
            <span className="text-orange-400"> Amritsar & Punjab</span>
          </h2>

          <p className="text-base md:text-xl text-gray-200 mb-8 leading-relaxed">
            Premium cab services, Golden Temple tours, airport transfers, outstation rides, and luxury travel experiences crafted with comfort and trust by Sehgal Travels.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full font-semibold text-lg shadow-lg">
              Explore Packages
            </button>

            <button className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full font-semibold text-lg">
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
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 text-2xl">
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
              src="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1400&auto=format&fit=crop"
              alt="Travel"
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

                  <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold w-full">
                    Book Now
                  </button>
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

                  <button className="w-full bg-black text-white py-4 rounded-2xl hover:bg-orange-500 transition font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop"
          alt="Adventure"
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

          <button className="bg-orange-500 hover:bg-orange-600 transition px-10 py-5 rounded-full text-lg font-semibold shadow-xl">
            Book Your Trip
          </button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <p className="text-orange-500 uppercase tracking-[4px] font-semibold mb-4">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Let’s Plan Your Journey
          </h2>

          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Contact Sehgal Travels for customized travel packages,
            bookings, and travel assistance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-gray-100 rounded-2xl p-5">
              <p className="font-semibold">Phone</p>
              <p className="text-gray-600">+91 XXXXX XXXXX</p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-5">
              <p className="font-semibold">Email</p>
              <p className="text-gray-600">sehgaltravels@gmail.com</p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-5">
              <p className="font-semibold">Location</p>
              <p className="text-gray-600">Punjab, India</p>
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
            <a href="#contact" className="hover:text-orange-400">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
