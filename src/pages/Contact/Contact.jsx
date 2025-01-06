import { Helmet } from "react-helmet-async";
import { FaVoicemail } from "react-icons/fa6";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
      <Helmet>
        <title>Sunnah Store | Contact</title>
      </Helmet>
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Section: Contact Information */}
        <div className="bg-[#45A449] text-white p-8">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-8">
            Have questions? We are here to help. Fill out the form or contact us
            via the details below.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <FaVoicemail className="size-6 mr-3" />
              <span>support@example.com</span>
            </div>
            <div className="flex items-center">
              <FaHeadphonesSimple className="size-6 mr-3" />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <GrLocation className="size-6 mr-3" />
              <span>123 E-Commerce St, City, Country</span>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="5"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#45A449] text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
