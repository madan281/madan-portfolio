export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image on the left */}
        <div className="flex justify-center">
          <img
            src="/images/contact-illustration.png"
            alt="Contact Illustration"
            className="max-w-sm w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Contact Form on the right */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center md:text-left">
            📬 Contact Me
          </h2>
          <p className="text-center text-sm italic text-gray-400 mt-6">
   Ready to collaborate and secure together
</p>
         

          <form
            action="https://formspree.io/f/xgvkbjdl"
            method="POST"
            className="bg-gray-800 p-6 rounded-lg shadow-md space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="text-center md:text-left">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
