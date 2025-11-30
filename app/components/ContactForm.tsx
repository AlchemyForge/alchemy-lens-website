interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

export function ContactForm({
  title = "Forge Your next Move.",
  subtitle = "Get in touch to see how Alchemy Lens can transform your construction projects.",
}: ContactFormProps) {
  return (
    <section
      id="contact"
      className="py-20 px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-300">{subtitle}</p>
        </div>

        <form className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Business Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@company.com"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+64 21 123 4567"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2"
              >
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Tell us about your construction project needs..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg ai-glow-hover transition-all relative overflow-hidden group"
            >
              <span className="relative z-10">Send Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

