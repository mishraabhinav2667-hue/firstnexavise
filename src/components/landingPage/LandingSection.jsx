import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Shield,
  Cpu,
  Network,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export default function LandingSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      id="hero"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Company Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-semibold">
                  Nexavise Consulting
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block">Navigating</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Excellence
                </span>
                <span className="block">in Every Solution</span>
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                Where Innovation Meets Reliability
              </p>
            </motion.div>

            {/* Business Statement */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                At Nexavise Consulting, we transform complex IT challenges into
                streamlined business solutions. Our expert team delivers
                cutting-edge technology services that empower your business to
                thrive in the digital age, from custom software development to
                comprehensive security consulting.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 max-w-lg">
                {[
                  "Enterprise Security",
                  "Custom Development",
                  "24/7 Support",
                  "Strategic Consulting",
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    variants={itemVariants}
                    className="flex items-center gap-2 text-green-400"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold backdrop-blur-md hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Services
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 pt-8 border-t border-white/20"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-400">Support Available</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Technical Illustration */}
          <motion.div variants={itemVariants} className="relative">
            {/* Main Tech Illustration Container */}
            <div className="relative w-full max-w-lg mx-auto">
              {/* Central Hub */}
              <motion.div
                variants={pulseVariants}
                animate="animate"
                className="relative z-10 w-48 h-48 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl backdrop-blur-md border border-white/20"
              >
                <div className="absolute inset-4 bg-white/10 rounded-2xl backdrop-blur-md flex items-center justify-center">
                  <Cpu className="w-16 h-16 text-white" />
                </div>

                {/* Orbital Elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl shadow-lg flex items-center justify-center"
                  variants={floatingVariants}
                  animate="animate"
                >
                  <Shield className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl shadow-lg flex items-center justify-center"
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: "2s" }}
                >
                  <Code className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg flex items-center justify-center"
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: "4s" }}
                >
                  <Network className="w-8 h-8 text-white" />
                </motion.div>
              </motion.div>

              {/* Connection Lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 400"
              >
                <motion.path
                  d="M200,200 L320,120"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                <motion.path
                  d="M200,200 L80,280"
                  stroke="url(#gradient2)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.5 }}
                />
                <motion.path
                  d="M200,200 L80,120"
                  stroke="url(#gradient3)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 2 }}
                />

                <defs>
                  <linearGradient
                    id="gradient1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                  <linearGradient
                    id="gradient2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                  <linearGradient
                    id="gradient3"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#EF4444" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating Data Points */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-lg"
                  style={{
                    top: `${20 + Math.sin(i * 1.2) * 60}%`,
                    left: `${20 + Math.cos(i * 1.2) * 60}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
