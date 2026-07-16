import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  CircuitBoard,
  Building2,
  Mail,
  Sparkles,
} from "lucide-react";

export default function EnhancedNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Home",
      href: "/",
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

  const navItemVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    tap: { scale: 0.95 },
  };

  const iconVariants = {
    hover: {
      rotate: 10,
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(12deg); }
          100% { transform: translateX(300%) skewX(12deg); }
        }
        .shimmer-animation {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50"
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          {/* Logo */}
          <motion.div className="flex lg:flex-1">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative flex gap-[2px] item-center">
                <img src="/logo-icon.png" alt="Logo" className="w-6 h-auto" />
                <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  exavise
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="relative p-2 text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" />
            </motion.button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:flex-1 lg:gap-x-8 lg:justify-center">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                variants={navItemVariants}
                whileHover="hover"
                whileTap="tap"
                className="relative"
              >
                <Link
                  to={item.href}
                  onClick={() => setActiveLink(item.href)}
                  className={`group flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeLink === item.href
                      ? `text-white bg-gradient-to-r ${item.gradient} shadow-lg`
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <motion.div variants={iconVariants}>
                    <item.icon className="h-4 w-4 flex-none" />
                  </motion.div>
                  {item.name}

                  {/* Animated underline for inactive items */}
                  {activeLink !== item.href && (
                    <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Contact button */}
          <motion.div
            className="hidden lg:flex lg:flex-1 lg:justify-end"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="#footer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/25"
            >
              <motion.div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div variants={iconVariants} className="relative z-10">
                <Mail className="h-4 w-4" />
              </motion.div>
              <span className="relative z-10">Contact</span>

              {/* Shimmer effect */}
              <motion.div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/20 to-transparent w-4 skew-x-12 shimmer-animation" />
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <Dialog
              as={motion.div}
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
              className="lg:hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-10 bg-black/30 backdrop-blur-sm"
              />

              <DialogPanel
                as={motion.div}
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white/95 backdrop-blur-xl px-6 py-6 sm:max-w-sm border-l border-gray-200/50"
              >
                <div className="flex items-center justify-between">
                  <Link to="/" className="flex items-center gap-2">
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                      Nexavise
                    </span>
                  </Link>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-md p-2 text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </motion.button>
                </div>

                <div className="mt-8 flow-root">
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        custom={index}
                        variants={mobileItemVariants}
                        initial="closed"
                        animate="open"
                      >
                        <Link
                          to={item.href}
                          onClick={() => {
                            setActiveLink(item.href);
                            setMobileMenuOpen(false);
                          }}
                          className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-base font-semibold transition-all duration-300 ${
                            activeLink === item.href
                              ? `text-white bg-gradient-to-r ${item.gradient} shadow-lg`
                              : "text-gray-900 hover:bg-gray-100"
                          }`}
                        >
                          <motion.div
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <item.icon className="h-5 w-5 flex-none" />
                          </motion.div>
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}

                    <motion.div
                      custom={navItems.length}
                      variants={mobileItemVariants}
                      initial="closed"
                      animate="open"
                      className="pt-4"
                    >
                      <Link
                        to="#footer"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-base font-semibold text-white shadow-lg"
                      >
                        <Mail className="h-5 w-5 flex-none" />
                        Contact Us
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </DialogPanel>
            </Dialog>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
