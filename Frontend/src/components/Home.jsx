import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const destinations = [
    {
      name: "Kashmir",
      image:
        "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=900",
        //"https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg",
      desc: "Snow-covered mountains, valleys and peaceful lakes.",
    },
    {
      name: "Darjeeling",
      image:
        //"https://images.unsplash.com/photo-1548013146-72479768bada?w=900",
        //"https://images.pexels.com/photos/1637036/pexels-photo-1637036.jpeg",
        //"https://images.pexels.com/photos/1559825/pexels-photo-1559825.jpeg",
        //"https://images.pexels.com/photos/240040/pexels-photo-240040.jpeg",
        //"https://images.unsplash.com/photo-1I07SYGwuys?auto=format&fit=crop&w=900&q=80",
        "https://images.unsplash.com/photo-1622308644420-b20142dc993c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyamVlbGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      desc: "Tea gardens, toy train and Himalayan beauty.",
    },
    {
      name: "Shimla",
      image:
      //"https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900",
      desc: "Beautiful hill station with pleasant weather.",
    },
    {
      name: "Ladakh",
      image:
      //"https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg",
        "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?w=900",
      desc: "Adventure destination with stunning mountains.",
    },
    {
      name: "Sundarbans",
      image:
      //"https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg",
        //"https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=900",
        //"https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg",
        //"https://images.pexels.com/photos/957024/forest-trees-nature-mystic-957024.jpeg",
        "https://plus.unsplash.com/premium_photo-1686310335921-38acc0679321?w=900&auto=format&fit=crop&q=80",
      desc: "Explore the world's largest mangrove forest.",
    },
    {
      name: "Maldives",
      image:
      //"https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg",
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=900",
      desc: "Crystal-clear beaches and luxury resorts.",
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* Hero Section */}

      <section
        className="h-[90vh] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative flex items-center justify-center h-full text-center px-6">

          <div>

            <h1 className="text-4xl md:text-6xl font-bold text-white">
            Discover your next adventure
            </h1>

            <h2 className="text-3xl md:text-5xl font-bold text-green-400 mt-2">
              With Explore Earth
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-white text-base md:text-lg">
              Discover beautiful destinations, affordable tour packages and
              unforgettable journeys across India and beyond.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

              <button
                onClick={() => navigate("/packages")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
              >
                Explore Packages
              </button>

              <button
                onClick={() => navigate("/booking")}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
              >
                Book Now
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* Popular Destinations */}

      <section className="py-16">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold">
            Popular Destinations
          </h2>

          <p className="text-gray-500 mt-2">
            Discover amazing places across India and beyond.
          </p>

        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">

          {destinations.map((place, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300"
            >

              <img
                src={place.image}
                alt={place.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">

                <h3 className="text-2xl font-semibold">
                  {place.name}
                </h3>

                <p className="text-gray-600 mt-3">
                  {place.desc}
                </p>

                <button
                  onClick={() => navigate("/packages")}
                  className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
                >
                  Explore
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Featured Packages */}

      <section className="bg-white py-16">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold">
            Featured Tour Packages
          </h2>

          <p className="text-gray-500 mt-2">
            Choose your dream vacation from our popular packages.
          </p>

        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">

          <div
            className="rounded-2xl overflow-hidden shadow-xl"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,.35),rgba(0,0,0,.35)),url('https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=900')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >

            <div className="p-8 text-white">

              <h3 className="text-3xl font-bold">
                Kashmir Paradise
              </h3>

              <p className="mt-3">
                7 Days / 6 Nights
              </p>

              <p className="text-3xl font-bold mt-3">
                ₹12,999
              </p>

              <button
                onClick={() => navigate("/packages")}
                className="mt-6 bg-white text-blue-700 px-5 py-2 rounded-lg font-semibold"
              >
                View Package
              </button>

            </div>

          </div>
          <div
            className="rounded-2xl overflow-hidden shadow-xl"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,.35),rgba(0,0,0,.35)),url('https://images.unsplash.com/photo-1622308644420-b20142dc993c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyamVlbGluZ3xlbnwwfHwwfHx8MA%3D%3D')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >

            <div className="p-8 text-white">

              <h3 className="text-3xl font-bold">
                Darjeeling Escape
              </h3>

              <p className="mt-3">
                5 Days / 4 Nights
              </p>

              <p className="text-3xl font-bold mt-3">
                ₹9,999
              </p>

              <button
                onClick={() => navigate("/packages")}
                className="mt-6 bg-white text-green-700 px-5 py-2 rounded-lg font-semibold"
              >
                View Package
              </button>

            </div>

          </div>

          <div
            className="rounded-2xl overflow-hidden shadow-xl"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,.35),rgba(0,0,0,.35)),url('https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=900')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >

            <div className="p-8 text-white">

              <h3 className="text-3xl font-bold">
                Maldives Escape
              </h3>

              <p className="mt-3">
                6 Days / 5 Nights
              </p>

              <p className="text-3xl font-bold mt-3">
                ₹24,999
              </p>

              <button
                onClick={() => navigate("/packages")}
                className="mt-6 bg-white text-red-600 px-5 py-2 rounded-lg font-semibold"
              >
                View Package
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="py-16 bg-blue-50">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold">
            Why Choose Explore Earth?
          </h2>

        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:-translate-y-2 duration-300">
            <div className="text-5xl">💰</div>
            <h3 className="mt-4 text-xl font-bold">
              Affordable Packages
            </h3>
            <p className="text-gray-600 mt-3">
              Budget-friendly trips for every traveler.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:-translate-y-2 duration-300">
            <div className="text-5xl">🛡️</div>
            <h3 className="mt-4 text-xl font-bold">
              Secure Booking
            </h3>
            <p className="text-gray-600 mt-3">
              Safe and reliable online booking.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:-translate-y-2 duration-300">
            <div className="text-5xl">🏨</div>
            <h3 className="mt-4 text-xl font-bold">
              Comfortable Stay
            </h3>
            <p className="text-gray-600 mt-3">
              Handpicked hotels and quality accommodation.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:-translate-y-2 duration-300">
            <div className="text-5xl">📞</div>
            <h3 className="mt-4 text-xl font-bold">
              Customer Support
            </h3>
            <p className="text-gray-600 mt-3">
              We're here whenever you need us.
            </p>
          </div>

        </div>

      </section>

      {/* Our Services */}

      <section className="py-16 bg-white">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold">
            Our Services
          </h2>

        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">

          <div className="bg-blue-100 rounded-xl p-8 text-center shadow-lg">
            <div className="text-5xl">✈️</div>
            <h3 className="mt-4 text-xl font-bold">
              Flight Booking
            </h3>
          </div>

          <div className="bg-green-100 rounded-xl p-8 text-center shadow-lg">
            <div className="text-5xl">🏨</div>
            <h3 className="mt-4 text-xl font-bold">
              Hotel Booking
            </h3>
          </div>

          <div className="bg-yellow-100 rounded-xl p-8 text-center shadow-lg">
            <div className="text-5xl">🚖</div>
            <h3 className="mt-4 text-xl font-bold">
              Cab Service
            </h3>
          </div>

          <div className="bg-pink-100 rounded-xl p-8 text-center shadow-lg">
            <div className="text-5xl">🎒</div>
            <h3 className="mt-4 text-xl font-bold">
              Tour Packages
            </h3>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-blue-700 to-green-600 py-20 text-center text-white">

        <h2 className="text-4xl font-bold">
          Ready To Start Your Journey?
        </h2>

        <p className="mt-4 text-lg">
          Book your dream vacation with Explore Earth today.
        </p>

        <button
          onClick={() => navigate("/booking")}
          className="mt-8 bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100"
        >
          Book Now
        </button>

      </section>

    </div>
  );
}

export default Home;