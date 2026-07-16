import { Home, CircuitBoard, Building2, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const navItems = [
  {
    name: "Home",
    href: "#hero",
    icon: Home,
    gradient: "from-blue-500 to-purple-600",
  },
  {
    name: "Services",
    href: "#services",
    icon: CircuitBoard,
    gradient: "from-green-500 to-teal-600",
  },
  {
    name: "Company",
    href: "#company",
    icon: Building2,
    gradient: "from-orange-500 to-red-600",
  },
];

export default function Footer() {
  const [form, setForm] = useState({ email: "", message: "" });

   const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#footer") {
      const inputElement = document.getElementById("contact-input");
      if (inputElement) {
        inputElement.focus();
        inputElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", form);
  };

  return (
    <section
      id="footer"
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden text-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-16 items-start">
        {/* Logo & Description */}
        <div>
          <div className="flex items-center space-x-1">
            <div className="h-auto rounded-md p-1 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <img
                src="/logo-icon.png"
                alt="Nexavise Logo"
                className="w-6 h-auto"
              />
            </div>
            <span className="text-2xl font-bold">exavise</span>
          </div>
          <p className="mt-4 text-sm text-gray-300 max-w-xs">
            Empowering businesses through smart IT services, expert consulting,
            and reliable support.
          </p>
        </div>

        {/* Sitemap Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Sitemap</h3>
          <ul className="space-y-3">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link to={item.href} className="flex items-center space-x-3">
                  <span
                    className={`p-2 rounded-full bg-gradient-to-br ${item.gradient} text-white`}
                  >
                    <item.icon className="w-5 h-5" />
                  </span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
            id="contact-input"
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-slate-800 text-white border border-slate-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 rounded bg-slate-800 text-white border border-slate-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="mt-16 border-t border-slate-700 pt-6 text-sm text-center text-gray-400">
        © {new Date().getFullYear()} Nexavise Consulting. All rights reserved.
      </div>
    </section>
  );
}
