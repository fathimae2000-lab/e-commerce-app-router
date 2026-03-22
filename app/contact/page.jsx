export default function Contact() {
  return (
    <div className="space-y-12">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-gray-800 text-white rounded-2xl p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Have questions or need help? We’d love to hear from you.
        </p>
      </div>

      {/* Contact Section */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* Form */}
        <form className="bg-white shadow-md rounded-2xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold mb-2">Send a Message</h2>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>

          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>

          <div className="bg-white shadow-md p-5 rounded-xl">
            <p className="font-medium">📍 Address</p>
            <p className="text-gray-600">Kerala, India</p>
          </div>

          <div className="bg-white shadow-md p-5 rounded-xl">
            <p className="font-medium">📞 Phone</p>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>

          <div className="bg-white shadow-md p-5 rounded-xl">
            <p className="font-medium">📧 Email</p>
            <p className="text-gray-600">support@shopsy.com</p>
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="text-center text-gray-500">
        <p>We usually respond within 24 hours 🚀</p>
      </div>

    </div>
  );
}