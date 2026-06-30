function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg">

        <h1 className="text-4xl font-bold text-center mb-6">
          About Explore Earth 🌎
        </h1>

        <p className="text-gray-600 text-lg leading-7 text-center">
          Explore Earth is a travel booking platform designed to help you discover
          the most beautiful destinations around the world. We provide curated
          tour packages, safe booking experience, and affordable travel options.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">

          <div>
            <h3 className="text-xl font-semibold">🌍 Global Tours</h3>
            <p className="text-gray-500 mt-2">Explore top destinations worldwide.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">💰 Best Prices</h3>
            <p className="text-gray-500 mt-2">Affordable packages for everyone.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">🛡️ Trusted Booking</h3>
            <p className="text-gray-500 mt-2">Safe and reliable travel system.</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default About;