import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Navbar from "./Navbar";

const roleMapping = {
  admin: 1,
  staff: 2,
  customer: 3,
};

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: "",
      user_contact: "",
      user_role: ""
     
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      username: Yup.string().required("Username is required"),
      user_role: Yup.string().oneOf(["admin", "staff", "customer"], "Invalid role").required("Role is required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().min(6, "Must be at least 6 characters").required("Required"),
      user_contact: Yup.string()
        .matches(/\d{10}/, "Must be a valid 10-digit phone number")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      const formattedValues = {
        ...values,
        user_role: roleMapping[values.user_role], // Convert role string to number
      };

      console.log("Registration Data:", formattedValues);

      try {
        const response = await fetch("http://localhost:5000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedValues),
        });

        const data = await response.json();
        if (response.ok) {
          alert("Registration successful");
        } else {
          alert("Error: " + data.message);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred during registration");
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* <Navbar /> */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Register</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="flex space-x-2">
            <div className="w-1/2">
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="first_name"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <p className="text-red-500 text-sm mt-1">{formik.errors.firstName}</p>
              ) : null}
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="last_name"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <p className="text-red-500 text-sm mt-1">{formik.errors.lastName}</p>
              ) : null}
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.username}</p>
            ) : null}
          </div>

          <div>
            <label className="block text-gray-700">Role</label>
            <select
              name="user_role"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.role}
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="staff">Staff</option>
              <option value="customer">Customer</option>
            </select>
            {formik.touched.role && formik.errors.role ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.role}</p>
            ) : null}
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            ) : null}
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
            ) : null}
          </div>

          <div>
            <label className="block text-gray-700">Contact Number</label>
            <input
              type="text"
              name="user_contact"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.contactNumber}
            />
            {formik.touched.contactNumber && formik.errors.contactNumber ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.contactNumber}</p>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full bg-color text-color cursor-pointer font-semibold py-2 rounded hover:bg-color transition"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center text-color">
          <p className="font-semibold">
            Already have an account? <Link to="/login" className="text-color font-bold hover:underline">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
