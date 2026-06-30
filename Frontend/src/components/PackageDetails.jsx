import { useParams, useNavigate } from "react-router-dom";

function PackageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const packages = {
    1: {
      name: "Kashmir Paradise",
      duration: "7 Days / 6 Nights",
      price: "₹12,999",
      highlights: [
        "Dal Lake",
        "Srinagar",
        "Gulmarg",
        "Pahalgam",
        "Sonamarg",
      ],
      icon: "🏞️",
    },

    2: {
      name: "Ladakh Adventure",
      duration: "8 Days / 7 Nights",
      price: "₹14,999",
      highlights: [
        "Pangong Lake",
        "Nubra Valley",
        "Leh Palace",
        "Khardung La Pass",
      ],
      icon: "🏔️",
    },

    3: {
      name: "Shimla Hills",
      duration: "6 Days / 5 Nights",
      price: "₹11,999",
      highlights: [
        "Mall Road",
        "Kufri",
        "Jakhoo Temple",
        "Christ Church",
      ],
      icon: "🏕️",
    },

    4: {
      name: "Darjeeling Delight",
      duration: "5 Days / 4 Nights",
      price: "₹9,999",
      highlights: [
        "Tiger Hill",
        "Batasia Loop",
        "Tea Gardens",
        "Toy Train",
      ],
      icon: "🚞",
    },

    5: {
      name: "Sundarban Safari",
      duration: "4 Days / 3 Nights",
      price: "₹8,999",
      highlights: [
        "Mangrove Forest",
        "Royal Bengal Tiger",
        "Boat Safari",
        "Bird Watching",
      ],
      icon: "🐯",
    },

    6: {
      name: "Maldives Escape",
      duration: "6 Days / 5 Nights",
      price: "₹24,999",
      highlights: [
        "Water Villas",
        "Luxury Resort",
        "Snorkeling",
        "Island Hopping",
      ],
      icon: "🏝️",
    },
  };

  const tour = packages[id];

  if (!tour) {
    return (
      <h2 className="text-center py-20 text-3xl">
        Package Not Found
      </h2>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-4xl font-bold text-center mb-4">
          {tour.icon} {tour.name}
        </h1>

        <p className="text-center text-lg text-gray-600">
          {tour.duration}
        </p>

        <p className="text-center text-2xl font-bold text-green-700 mt-3">
          {tour.price}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Tour Highlights
        </h2>

        <ul className="space-y-2">
          {tour.highlights.map((item, index) => (
            <li key={index}>✅ {item}</li>
          ))}
        </ul>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate("/booking")}
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700"
          >
            Book Now
          </button>
        </div>

      </div>
    </div>
  );
}

export default PackageDetails;