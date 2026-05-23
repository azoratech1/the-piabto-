import { useState } from "react";
import { loginAdmin } from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await loginAdmin(formData);

      localStorage.setItem("token", data.token);

      toast.success("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 relative overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="mountain"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 flex flex-col justify-center px-16 text-white">

          <h1 className="text-6xl font-bold leading-tight">
            Mountain Stay
          </h1>

          <p className="mt-6 text-lg text-slate-200 leading-8">
            Manage your luxury homestay bookings,
            rooms, gallery and customer experience
            from one premium admin dashboard.
          </p>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-slate-100 px-6">

        <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl">

          <div className="text-center mb-10">

            <h2 className="text-4xl font-bold text-slate-800">
              Welcome Back
            </h2>

            <p className="text-slate-500 mt-3">
              Login to continue
            </p>

          </div>

          <form onSubmit={handleLogin}>

            {/* EMAIL */}
            <div className="mb-5">

              <label className="block mb-2 text-sm font-medium text-slate-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full border border-slate-200 rounded-xl px-4 py-4 outline-none focus:border-emerald-500"
                required
              />

            </div>

            {/* PASSWORD */}
            <div className="mb-6">

              <label className="block mb-2 text-sm font-medium text-slate-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full border border-slate-200 rounded-xl px-4 py-4 outline-none focus:border-emerald-500"
                required
              />

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 text-white py-4 rounded-xl font-semibold"
            >
              {loading ? "Please Wait..." : "Login"}
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Login;