import { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  // useEffect এর ভেতরে loadCaptchaEnginge() কে দিয়ে দিতে হয়, loadCaptchaEnginge() আসে react-simple-captcha নামক npm প্যাকেজ থেকে।  loadCaptchaEnginge() এর ভেতর ৪ মানে ৪টা ক্যাপচা শব্দ ম্যাচ করতে হবে
  useEffect(() => {
    loadCaptchaEnginge(4, "#CFD8DC");
  }, []);

  const [disabled, setDisabled] = useState(true);

  const handleValidateCaptcha = (e) => {
    const captchaValue = e.target.value;
    if (validateCaptcha(captchaValue) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
      alert("captcha validation failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Login
        </h1>
        <h3 className="text-center mb-7 text-gray-600">
          Enter your details to sign in.
        </h3>

        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              placeholder="example@domain.com"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-green-600  focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 text-gray-600">
                Remember me
              </label>
            </div>
            <Link to={"/reset"} className="text-green-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Captcha */}
          <div className="my-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Please solve the CAPTCHA:
            </label>

            <div className="w-full bg-blue-gray-50 flex justify-center py-3 my-2 rounded-md">
              <LoadCanvasTemplate reloadColor="#45A449" />
            </div>

            <input
              type="text"
              name="captcha"
              placeholder="Type the captcha displayed above"
              onBlur={(e) => handleValidateCaptcha(e)}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          {/* Submit Button */}
          <button
            disabled={disabled}
            type="submit"
            className={`w-full py-2 px-4 text-white focus:ring focus:ring-green-300 rounded-md shadow-lg font-medium transition duration-200 ${
              disabled
                ? "bg-green-200 hover:bg-green-200"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-sm text-gray-500">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button className="w-full py-2 px-4 flex items-center justify-center bg-red-600 text-white rounded-md hover:bg-gray-800 transition duration-200">
            <FaGoogle className="size-6 mr-4" />
            Continue with Google
          </button>

          <div className="text-center pt-2">
            <span className="text-gray-800">Don&apos;t have an account? </span>
            <Link to={"/signup"} className="text-[#4CAF50] font-bold">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
