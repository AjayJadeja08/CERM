import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-[url('/path-to-image.jpg')] bg-cover bg-center text-white text-center py-32 px-5 mt-10">
      <div className="bg-black bg-opacity-50 p-10 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold">
          Construction Equipment Rental Management
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Effortlessly manage rentals, inventory, and payments with our digital
          solution.
        </p>
        <div className="mt-6 flex justify-center">
          <input
            type="text"
            placeholder="Search for equipment..."
            className="p-3 w-2/3 md:w-1/3 text-black rounded-l-md focus:outline-none"
          />
          <Link
            to="/browse-equipment"
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-r-md hover:bg-blue-700"
          >
            Browse Equipment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
