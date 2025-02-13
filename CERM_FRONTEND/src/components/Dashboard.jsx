import React from "react";
import Sidebar from "./Sidebar";
import {
  FaTools,
  FaShoppingCart,
  FaUsers,
  FaRupeeSign,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <div className="flex">
        {/* <Navbar/> */}
      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Admin Dashboard
        </h1>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
          <StatCard
            icon={<FaTools className="text-blue-500 text-3xl" />}
            title="Total Equipment"
            value="150"
          />
          <StatCard
            icon={<FaShoppingCart className="text-green-500 text-3xl" />}
            title="Active Rentals"
            value="45"
          />
          <StatCard
            icon={<FaUsers className="text-yellow-500 text-3xl" />}
            title="Total Customers"
            value="320"
          />
          <StatCard
            icon={<FaRupeeSign className="text-red-500 text-3xl" />}
            title="Monthly Revenue"
            value="₹8,50,000"
          />
          <StatCard
            icon={<FaFileInvoiceDollar className="text-purple-500 text-3xl" />}
            title="Pending Payments"
            value="₹1,20,000"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <ChartCard title="Rental Trends (Last 6 Months)">
            <RentalTrendsChart />
          </ChartCard>
          <ChartCard title="Revenue Growth">
            <RevenueChart />
          </ChartCard>
        </div>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ icon, title, value }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4 border border-gray-200">
      <div>{icon}</div>
      <div>
        <h3 className="text-gray-600 text-sm">{title}</h3>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

// Chart Card Component
const ChartCard = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="h-60">{children}</div>
    </div>
  );
};

// Rental Trends Chart
const RentalTrendsChart = () => {
  const data = [
    { month: "Jan", rentals: 30 },
    { month: "Feb", rentals: 50 },
    { month: "Mar", rentals: 45 },
    { month: "Apr", rentals: 60 },
    { month: "May", rentals: 80 },
    { month: "Jun", rentals: 95 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="rentals"
          stroke="#3b82f6"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

// Revenue Growth Chart
const RevenueChart = () => {
  const data = [
    { month: "Jan", revenue: 500000 },
    { month: "Feb", revenue: 600000 },
    { month: "Mar", revenue: 750000 },
    { month: "Apr", revenue: 900000 },
    { month: "May", revenue: 1000000 },
    { month: "Jun", revenue: 1200000 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="revenue" fill="#10b981" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Dashboard;
