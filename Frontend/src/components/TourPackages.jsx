import { Link } from "react-router-dom";

function TourPackages() {
  const packages = [
    {
      id: 1,
      name: "Kashmir Paradise",
      duration: "7 Days / 6 Nights",
      price: "₹12,999",
      image:
        "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=900",
    },
    {
      id: 2,
      name: "Ladakh Adventure",
      duration: "8 Days / 7 Nights",
      price: "₹14,999",
      image:
        "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?w=900",
    },
    {
      id: 3,
      name: "Shimla Hills",
      duration: "6 Days / 5 Nights",
      price: "₹11,999",
      image:
        //"https://images.unsplash.com/photo-1548013146-72479768bada?w=900",
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=900",
    },
    {
      id: 4,
      name: "Darjeeling Delight",
      duration: "5 Days / 4 Nights",
      price: "₹9,999",
      image:
        "https://images.unsplash.com/photo-1622308644420-b20142dc993c?w=900&auto=format&fit=crop&q=60",
    },
    {
      id: 5,
      name: "Sundarban Safari",
      duration: "4 Days / 3 Nights",
      price: "₹8,999",
      image:
        "https://plus.unsplash.com/premium_photo-1686310335921-38acc0679321?w=900&auto=format&fit=crop&q=60",
    },
    {
      id: 6,
      name: "Maldives Escape",
      duration: "6 Days / 5 Nights",
      price: "₹24,999",
      image:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=900",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Tour Packages
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-60 object-cover"
            />

            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-800">
                {pkg.name}
              </h2>

              <p className="mt-3 text-gray-600">
                {pkg.duration}
              </p>

              <p className="mt-3 text-2xl font-bold text-green-600">
                {pkg.price}
              </p>

              <Link
                to={`/packages/${pkg.id}`}
                className="inline-block mt-5 bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TourPackages;