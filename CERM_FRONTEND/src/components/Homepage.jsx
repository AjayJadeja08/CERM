import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

import ConstructionEquipment from "./ConstructionEquipment";

const Homepage = () => {
  return (
    <div className="bg-gray-100">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-16 px-5 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Available Equipment
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Concrete Mixer</h3>
            <p className="text-gray-600">Price: $50/day</p>
            <p className="text-gray-600">Features: High efficiency, durable</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Scaffolding Set</h3>
            <p className="text-gray-600">Price: $30/day</p>
            <p className="text-gray-600">
              Features: Adjustable height, lightweight
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Bulldozer</h3>
            <p className="text-gray-600">Price: $200/day</p>
            <p className="text-gray-600">Features: Heavy-duty, high power</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="py-16 px-5 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
        <p className="text-gray-600 mt-4">
          Have questions? Contact us for more information.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700"
        >
          Contact Us
        </Link>
      </section> */}

      {/* Footer */}
    </div>
  );
};

export default Homepage;
