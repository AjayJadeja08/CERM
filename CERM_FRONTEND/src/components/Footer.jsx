import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p>&copy; 2025 CERM. All Rights Reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/browse-equipment" className="hover:underline">
          Browse Equipment
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
