import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Signup = () => {
  const [errors, setErrors] = useState({});
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    const {name, value} = e.target;
    setSignupData({
      ...signupData,
      [name]: value
    })
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Name validation
    if (!signupData.name) {
      newErrors.name = "Name is required!";
    } else {
      const nameRegex = /^[a-zA-Z\s]+$/;
      if (!nameRegex.test(signupData.name)) {
        newErrors.name = "Name must contain only alphabets!";
      }
    };

    // Email validation
    if (!signupData.email) {
      newErrors.email = "Email is required!";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(signupData.email)) {
        newErrors.email = "Email is invalid!";
      }
    };

    // Password validation
    if (!signupData.password) {
      newErrors.password = "Password is required!";
    } else {
      if (signupData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters!";
      }
    };

    // Confirm Password validation
    if (!signupData.confirmPassword) {
      newErrors.confirmPassword = "Rewrite the password"
    } else if (signupData.confirmPassword !== signupData.password) {
        newErrors.confirmPassword = "Passwords do not match"
    };

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 mt-20 md:mt-0">
      <Helmet>
        <title>Sunnah Store | Signup</title>
      </Helmet>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Title Part */}
        <h2 className="text-3xl font-bold text-center text-[#4CAF50]">
          Create an Account
        </h2>
        <p className="mt-2 text-center text-gray-600">
          Join us to enjoy amazing benefits.
        </p>

        {/* Input Fields */}
        <form className="mt-6 space-y-4" onSubmit={submitHandler}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              placeholder="John Doe"
              onChange={changeHandler}
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-[#4CAF50] focus:border-[#4CAF50]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="example@domain.com"
              onChange={changeHandler}
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-[#4CAF50] focus:border-[#4CAF50]"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              placeholder="********"
              onChange={changeHandler}
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-[#4CAF50] focus:border-[#4CAF50]"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              id="confirm-password"
              placeholder="********"
              onChange={changeHandler}
              className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-[#4CAF50] focus:border-[#4CAF50]"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-green-500 hover:bg-green-600 focus:ring focus:ring-green-300 rounded-md shadow-lg font-medium transition duration-200"
          >
            Sign up
          </button>
        </form>

        {/* Separator Line */}
        <div className="my-6 flex items-center justify-between">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <button className="w-full py-2 px-4 flex items-center justify-center bg-red-600 text-white rounded-md hover:bg-gray-800 transition duration-200">
          <FaGoogle className="size-6 mr-4" />
          Continue with Google
        </button>

        <p className="mt-4 text-md text-center text-gray-600">
          Already have an account?{" "}
          <Link to={"/login"} className="text-[#4CAF50] hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

// Layout Structure
// +------------------------------------------------------+
// |                     Sign-Up Page                     |
// |------------------------------------------------------|
// | [Title: Create an Account]                           |
// | [Subtitle: Join us to enjoy amazing benefits.]       |
// |------------------------------------------------------|
// | [Input: Full Name]                                   |
// | [Input: Email Address]                               |
// | [Input: Password]                                    |
// | [Input: Confirm Password]                            |
// |------------------------------------------------------|
// | [Button: Sign Up]                                    |
// | [Divider: OR]                                        |
// | [Button: Continue with Google]                      |
// |------------------------------------------------------|
// | [Text: Already have an account? Log In]             |
// +------------------------------------------------------+
