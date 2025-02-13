import React, { useState } from "react";
import {
  FaBars,
  FaTools,
  FaShoppingCart,
  FaUsers,
  FaFileInvoiceDollar,
  FaChartBar,
} from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white h-screen p-4 transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="mb-4 text-gray-300 focus:outline-none"
        >
          {isOpen ? <MdClose size={24} /> : <FaBars size={24} />}
        </button>

        <nav className="space-y-4">
          <NavItem icon={<FaTools />} text="Manage Equipment" isOpen={isOpen} />
          <NavItem
            icon={<FaShoppingCart />}
            text="Manage Rentals"
            isOpen={isOpen}
          />
          <NavItem icon={<FaUsers />} text="Manage Customers" isOpen={isOpen} />
          <NavItem
            icon={<FaFileInvoiceDollar />}
            text="View Payments"
            isOpen={isOpen}
          />
          <NavItem
            icon={<FaChartBar />}
            text="Generate Reports"
            isOpen={isOpen}
          />
        </nav>
      </div>
    </div>
  );
};

// Sidebar Navigation Item Component
const NavItem = ({ icon, text, isOpen }) => {
  return (
    <div className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
      <span className="text-lg">{icon}</span>
      {isOpen && <span className="text-sm">{text}</span>}
    </div>
  );
};

export default Sidebar;
