import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen mt-20">
      {/* Hero Section */}
      <section className="bg-[#45A449] text-white py-20 px-5 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg leading-relaxed">
            Welcome to Sunnah Store, where quality meets convenience. We`&apos;`re committed to bringing you the best products with a seamless shopping experience.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-600">
            At Sunnah Store, our mission is to simplify your life with thoughtfully curated products that blend style, functionality, and affordability. We strive to exceed expectations with every order.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-100 py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Customer First</h3>
              <p className="text-gray-600">
                We prioritize our customers`&apos;` needs and work tirelessly to provide a delightful shopping experience.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to sustainable practices, sourcing eco-friendly products, and reducing waste.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We embrace creativity and continuously innovate to stay ahead in the e-commerce industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">Jane Smith</h3>
              <p className="text-gray-600">Chief Marketing Officer</p>
            </div>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">Alice Johnson</h3>
              <p className="text-gray-600">Head of Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#45A449] text-white py-16 px-5 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">Join Our Journey</h2>
          <p className="text-lg leading-relaxed mb-6">
            Be part of a community that values quality, innovation, and customer satisfaction. Shop with us today and experience the difference.
          </p>
          <Link to={'/products'} className="bg-white text-[#45A449] font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition duration-300">
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
