import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/auth-store";
import { Email } from "../icons"; // Assuming you have a custom Email icon component.
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const actionLogin = useAuthStore((state) => state.actionLogin);

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      const role = await actionLogin(form);
      handleRoleRedirect(role);
      toast.success("Login successful!");
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
      console.error("Login Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRoleRedirect = (role) => {
    if (role?.role === "USER") {
      navigate("/user");
    } else if (role?.role === "ADMIN") {
      navigate("/admin");
    } else {
      toast.error("Unknown role");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-between"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1048033/pexels-photo-1048033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className="w-full max-w-8xl flex flex-wrap justify-evenly items-center px-8">
        {/* Branding Section */}
        <div className="text-white max-w-lg ml-10 flex flex-col gap-5">
          <h1 className="text-6xl font-extrabold text-sky-900 mb-4">
            Flash <span className="text-orange-500">Pics</span>
          </h1>
          <p className="text-2xl font-semibold opacity-80">
            Tell Your Story With Compelling Images. Access Our Library Of Over A
            Million High-Quality Assets.
          </p>
        </div>

        {/* Login Form */}
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg mr-4 mt-5">
          <h2 className="text-3xl font-bold text-center mb-6 text-sky-800">
            Sign In
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <div className="flex items-center border rounded-lg px-3 py-2">
                <Email />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full ml-3 text-sm focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2"
              >
                Password
              </label>
              <div className="flex items-center border rounded-lg px-3 py-2">
                <Email />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full ml-3 text-sm focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mb-6">
              <button
                type="submit"
                disabled={loading}
                className={`w-full font-bold py-3 rounded-lg transition duration-200 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
              >
                {loading ? "Logging in..." : "Login now"}
              </button>
            </div>

            {/* Register Redirect */}
            <div className="text-center">
              <Link
                to="/register"
                className="text-orange-500 font-bold py-2 px-4 border border-orange-600 rounded-lg hover:bg-orange-200 transition duration-200"
              >
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
