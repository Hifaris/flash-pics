import React, { useState } from "react";
import { Email } from "../icons";
import useAuthStore from "../store/auth-store";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import validateRegister from "../utils/validate";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

function Register() {
  const actionRegister = useAuthStore((state) => state.actionRegister);

  const [form, setForm] = useState(initialState);
  const [formError, setFormError] = useState({});

  const hdlOnchange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const hdlSubmit = (e) => {
    e.preventDefault();

    const error = validateRegister(form);
    if (error) {
      return setFormError(error);
    }
    actionRegister(form);
    setForm(initialState);
    setFormError({});
    toast.success("Registration successful!");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-between px-4 sm:px-8 md:px-12"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1428992858642-0908d119bd3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Left Content */}
      <div className="text-white max-w-lg hidden lg:block">
        <h1 className="text-5xl md:text-6xl font-extrabold text-sky-900 mb-6">
          Flash <span className="text-orange-500">Pics</span>
        </h1>
        <p className="text-lg md:text-2xl font-semibold opacity-90 leading-relaxed">
          Tell Your Story With Compelling Images. Access Our Library Of Over A
          Million High Quality Assets.
        </p>
      </div>

      {/* Register Form */}
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-sky-800">
          Register
        </h2>

        <form onSubmit={hdlSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Email />
              <input
                type="email"
                placeholder="Email"
                className="w-full ml-3 text-sm focus:outline-none"
                value={form.email}
                name="email"
                onChange={hdlOnchange}
              />
            </div>
            {formError.email && (
              <span className="text-red-500 text-xs">{formError.email}</span>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Email />
              <input
                value={form.password}
                name="password"
                onChange={hdlOnchange}
                type="password"
                placeholder="Password"
                className="w-full ml-3 text-sm focus:outline-none"
              />
            </div>
            {formError.password && (
              <span className="text-red-500 text-xs">{formError.password}</span>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Confirm Password
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Email />
              <input
                value={form.confirmPassword}
                name="confirmPassword"
                onChange={hdlOnchange}
                type="password"
                placeholder="Confirm Password"
                className="w-full ml-3 text-sm focus:outline-none"
              />
            </div>
            {formError.confirmPassword && (
              <span className="text-red-500 text-xs">
                {formError.confirmPassword}
              </span>
            )}
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition duration-200"
            >
              Create account
            </button>
          </div>

          <div className="text-center">
            <Link
              to="/login"
              className="text-orange-500 font-bold py-2 px-4 border border-orange-600 rounded-lg hover:bg-orange-200 transition duration-200"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
