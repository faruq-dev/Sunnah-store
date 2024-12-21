import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Reset Your Password
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your email address below and we will send you a link to reset
          your password.
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition duration-300"
          >
            Send Password Reset Email
          </button>
        </form>
        <div className="text-center mt-6 text-gray-600">
          <p>
            Didn&apos;t sign in yet?{" "}
            <Link to={'/login'} className="text-green-600 hover:underline">
              Log in
            </Link>
          </p>
          <p className="mt-2">
            <Link to={'/'} className="text-green-600 hover:underline">
              Back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
