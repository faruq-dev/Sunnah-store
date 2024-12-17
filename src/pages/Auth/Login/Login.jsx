const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign In</h1>

        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500 focus:border-green-500"
              placeholder="example@domain.com"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500 focus:border-green-500"
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
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 text-gray-600">
                Remember me
              </label>
            </div>
            <a href="#" className="text-green-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-green-500 hover:bg-green-600 focus:ring focus:ring-green-300 rounded-md shadow-lg font-medium transition duration-200"
          >
            Sign In
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
          <button className="w-full py-2 px-4 flex items-center justify-center bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.675 0h-21.35C.58 0 0 .585 0 1.305v21.39C0 23.415.58 24 1.325 24h11.492v-9.294H9.69v-3.622h3.127V8.414c0-3.1 1.893-4.785 4.657-4.785 1.325 0 2.462.1 2.793.143v3.24l-1.917.001c-1.504 0-1.795.715-1.795 1.764v2.31h3.587l-.467 3.622h-3.12V24h6.112c.746 0 1.325-.585 1.325-1.305V1.305C24 .585 23.42 0 22.675 0z" />
            </svg>
            Continue with Facebook
          </button>
          <button className="w-full py-2 px-4 flex items-center justify-center bg-gray-700 text-white rounded-md hover:bg-gray-800 transition duration-200">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.992 4.388 10.954 10.125 11.853v-8.385h-3.047v-3.468h3.047v-2.635c0-3.007 1.791-4.668 4.533-4.668 1.313 0 2.686.235 2.686.235v2.95h-1.514c-1.491 0-1.954.927-1.954 1.877v2.241h3.328l-.532 3.468h-2.796v8.385C19.612 22.954 24 17.992 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
