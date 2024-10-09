import React, { useState } from "react";
import greenBackground from "../assets/backgroundImage.jpg";
import { Email } from "../icons";
import useAuthStore from "../store/auth-store";

function Login() {
  
  const actionLogin = useAuthStore((state)=>state.actionLogin)
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const hdlOnchange = (e) => {
    console.log(e.target.name, e.target.value)
    setForm({...form,[e.target.name]:e.target.value})
  }
  const hdlSubmit =async(e)=>{
    e.preventDefault()
    // console.log(form)
    actionLogin(form)
   

  }  
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-between"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1048033/pexels-photo-1048033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      {/* Navbar */}
      {/* <nav className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-md absolute top-0">
        <div className="text-3xl font-bold text-sky-900">
          Flash <span className="text-orange-600">Pics</span>
        </div>
        <ul className="flex space-x-6">
          <li className="text-gray-700 hover:text-sky-800 cursor-pointer font-semibold">Home</li>
          <li className="text-gray-700 hover:text-sky-800 cursor-pointer font-semibold">Photos</li>
          <li className="text-gray-700 hover:text-sky-800 cursor-pointer font-semibold">Vectors</li>
          <li className="text-gray-700 hover:text-sky-800 cursor-pointer font-semibold">Illustrations</li>
          <li className="text-gray-700 hover:text-sky-800 cursor-pointer font-semibold">Collection</li>
          <li className="text-gray-700 hover:text-sky-800 cursor-pointer font-semibold">Trend</li>
        </ul>
        <div className="space-x-4">
         
          <button className="text-white bg-orange-500 rounded-lg px-4 py-2 hover:bg-orange-600 transition">
            Register
          </button>
        </div>
      </nav> */}

      {/* Main Content */}
      <div className="w-full max-w-7xl flex justify-between items-center px-8">
        
       
        <div className="text-white max-w-lg ml-10 flex flex-col gap-5"> 
          <h1 className="text-6xl font-extrabold text-sky-900 mb-4">
            Flash <span className="text-orange-500">Pics</span>
          </h1>
          <p className="text-2xl font-semibold opacity-70">
            Tell Your Story With Compelling Images. Access Our Library Of Over Million High Quality Assets.
          </p>
        </div>

        {/* Sign-In Form */}
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg mr-4 mt-5"> 
          <h2 className="text-3xl font-bold text-center mb-6 text-sky-800">Sign In</h2>

          <form onSubmit={hdlSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Username
              </label>
              <div className="flex items-center border rounded-lg px-3 py-2">
                <Email />
                <input
                value={form.email}
                name="email"
                onChange={hdlOnchange}
                  id="username"
                  type="text"
                  placeholder="Username"
                  className="w-full ml-3 text-sm focus:outline-none"
                />
              </div>
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
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="w-full ml-3 text-sm focus:outline-none"
                />
              </div>
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition duration-200"
              >
                Login now
              </button>
            </div>

            <div className="text-center">
              <button className="text-orange-500 font-bold py-2 px-4 border border-orange-600 rounded-lg hover:bg-orange-200 transition duration-200">
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
