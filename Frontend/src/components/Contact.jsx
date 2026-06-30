function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-lg">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-3">
          Contact Us 📞
        </h1>

        <p className="text-center text-gray-600 mb-8">
          We are here to help you plan your perfect trip. Reach out anytime!
        </p>

        {/* Contact Info */}
        <div className="text-center mb-10 space-y-2 text-gray-700">
          <p>📍 Location: India</p>
          <p>📧 Email: support@exploreearth.com</p>
          <p>📞 Phone: +91 98765 43210</p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </div>
  );
}

export default Contact;