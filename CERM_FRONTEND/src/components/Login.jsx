import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Navbar from "./Navbar";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      user_role: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Password is required"),
      user_role: Yup.number()
        .required("Role is required")
        .oneOf([1, 2, 3], "Invalid role selected"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post("http://localhost:5000/login", values);
        alert(response.data.message); // Show success message
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        navigate("/"); // Redirect to dashboard after login
      } catch (error) {
        alert(error.response?.data?.error || "Login failed");
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* <Navbar /> */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Login
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-color">Username</label>
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
            <label className="block text-gray-700 text-color">Password</label>
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
            <label className="block text-gray-700 text-color">Role</label>
            <select
              name="user_role"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.user_role}
            >
              <option value="">Select Role</option>
              <option value="1">Admin</option>
              <option value="2">Staff</option>
              <option value="3">Customer</option>
            </select>
            {formik.touched.user_role && formik.errors.user_role ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.user_role}</p>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full bg-color text-color py-2 rounded hover:bg-color transition font-semibold"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-color hover:underline font-semibold">
            Forgot Password?
          </a>
          <p className="mt-2 font-semibold">
            Not registered?{" "}
            <Link to="/register" className="text-color font-bold hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
