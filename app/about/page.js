export default function About() {
  return (
    <div className="space-y-12">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-gray-800 text-white rounded-2xl p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">About Shopsy</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Welcome to Shopsy – your one-stop destination for stylish,
          affordable, and high-quality products.
        </p>
      </div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src="https://picsum.photos/500/300"
          className="rounded-2xl shadow-md"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            At Shopsy, our mission is to make online shopping simple,
            enjoyable, and accessible for everyone. We aim to provide
            the best products at competitive prices with a seamless
            shopping experience.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div>
        <h2 className="text-2xl font-semibold text-center mb-6">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md p-6 rounded-xl text-center">
            <h3 className="font-bold mb-2">🛍️ Wide Range</h3>
            <p className="text-gray-600">
              Explore a variety of products across multiple categories.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl text-center">
            <h3 className="font-bold mb-2">💰 Affordable Prices</h3>
            <p className="text-gray-600">
              Get the best deals without compromising quality.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl text-center">
            <h3 className="font-bold mb-2">⚡ Fast Delivery</h3>
            <p className="text-gray-600">
              Quick and reliable delivery at your doorstep.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-gray-500">
        <p>© {new Date().getFullYear()} Shopsy. All rights reserved.</p>
      </div>

    </div>
  );
}