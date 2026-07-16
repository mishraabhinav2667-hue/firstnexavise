import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Target,
  Eye,
  ArrowRight,
  Quote,
  Star,
  Globe,
} from "lucide-react";
import ReviewsSection from "./ReviewSection";
import useScrollAnimation from "../hooks/useScrollAnimation";
// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Hero Section Component
const HeroSection = () => {
  const [heroRef, heroInView] = useScrollAnimation();

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-700 to-blue-800 text-white py-24"
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8"
          >
            <Star className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-medium">
              Navigating Excellence in Every Solution
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
          >
            Nexavise Consulting
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
          >
            Where Innovation Meets Reliability - Your Digital Transformation
            Partner
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border-2 border-white/30 hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"
      />
    </section>
  );
};

// About Us Section
const AboutUsSection = () => {
  const [aboutRef, aboutInView] = useScrollAnimation();

  return (
    <section ref={aboutRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-700 mb-8"></div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Nexavise Consulting stands at the forefront of technological
              innovation, bridging the gap between complex IT challenges and
              streamlined business solutions.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Founded on the principles of excellence, integrity, and
              client-first service, we transform how businesses operate in the
              digital age.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  500+
                </div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={scaleIn} className="relative">
            <div className="relative z-10 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
              <Globe className="w-16 h-16 mb-6 text-blue-200" />
              <h3 className="text-2xl font-bold mb-4">
                Global Reach, Local Touch
              </h3>
              <p className="text-blue-100 mb-6">
                We combine global expertise with personalized service to deliver
                solutions that matter to your business.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm text-blue-200">
                  Trusted by 200+ companies
                </span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gray-200 rounded-2xl -z-10"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Mission & Vision Section
const MissionVisionSection = () => {
  // specify the type of ref
  const [mvRef, mvInView] = useScrollAnimation();

  return (
    <section ref={mvRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={mvInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Purpose
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driven by clear mission and vision that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <Target className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Our Mission
                  </h3>
                </div>
                <Quote className="w-8 h-8 text-blue-300 mb-4" />
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  To empower businesses through cutting-edge technology
                  solutions, exceptional service, and unwavering commitment to
                  their success. We believe that every challenge is an
                  opportunity for innovation.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-purple-700 transition-colors duration-300">
                    <Eye className="w-8 h-8 text-purple-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Our Vision
                  </h3>
                </div>
                <Quote className="w-8 h-8 text-purple-300 mb-4" />
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  To be the most trusted technology partner for businesses
                  worldwide, setting new standards in IT consulting and digital
                  transformation while fostering long-term relationships built
                  on trust and results.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};



// Main Company Component
export default function CompanyProfile() {
  return (
    <div id="company" className="min-h-screen bg-white">
      <HeroSection />
      <AboutUsSection />
      <MissionVisionSection />
      <ReviewsSection />
    </div>
  );
}
