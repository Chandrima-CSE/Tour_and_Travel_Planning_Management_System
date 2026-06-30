function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="text-center">
        <h2 className="text-2xl font-bold">🌎 Explore Earth</h2>
        <p className="text-gray-400 mt-2">
          Explore the world with affordable travel packages
        </p>

        <p className="text-gray-500 mt-6 text-sm">
          © {new Date().getFullYear()} Explore Earth. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;