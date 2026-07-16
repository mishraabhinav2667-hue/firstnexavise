import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Settings,
  Lightbulb,
  Shield,
  ShoppingCart,
  Code2,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
} from "lucide-react";
import CoreValuesSection from "./CoreValuesSection";
const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Software Support & Maintenance",
      phrase: "Keep Your Systems Running at Peak Performance",
      description:
        "Comprehensive software maintenance, updates, bug fixes, and performance optimization to ensure your applications remain secure, efficient, and up-to-date.",
      icon: Settings,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      features: [
        "24/7 Monitoring",
        "Regular Updates",
        "Bug Fixes",
        "Performance Optimization",
      ],
      stats: "99.9% Uptime",
    },
    {
      id: 2,
      title: "IT/Computer Consultancy",
      phrase: "Strategic Technology Guidance for Smart Business Decisions",
      description:
        "Expert IT consulting including technology assessments, digital transformation planning, infrastructure optimization, and strategic technology roadmapping.",
      icon: Lightbulb,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      features: [
        "Tech Assessment",
        "Digital Strategy",
        "Infrastructure Planning",
        "Cost Optimization",
      ],
      stats: "40% Cost Savings",
    },
    {
      id: 3,
      title: "Security Systems & Consulting",
      phrase: "Fortress-Level Protection for Your Digital Assets",
      description:
        "Advanced cybersecurity solutions including threat assessment, security architecture design, compliance consulting, and 24/7 monitoring services.",
      icon: Shield,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      features: [
        "Threat Detection",
        "Compliance Audit",
        "Security Training",
        "Incident Response",
      ],
      stats: "100% Secure",
    },
    {
      id: 4,
      title: "Retail Sales",
      phrase: "Quality Technology Solutions, Competitive Prices",
      description:
        "Curated selection of enterprise-grade computers, peripherals, and software solutions with expert recommendations and competitive pricing.",
      icon: ShoppingCart,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      features: [
        "Enterprise Hardware",
        "Software Licensing",
        "Bulk Discounts",
        "Expert Consultation",
      ],
      stats: "30% Savings",
    },
    {
      id: 5,
      title: "Custom Software Development",
      phrase: "Tailored Solutions Built for Your Unique Challenges",
      description:
        "Full-cycle custom software development from concept to deployment, creating scalable applications that align perfectly with your business processes.",
      icon: Code2,
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
      features: [
        "Full-Stack Development",
        "Mobile Apps",
        "Cloud Integration",
        "API Development",
      ],
      stats: "3x Faster Delivery",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"
          initial={{ scale: 1 }}
          animate={{ scale: [1.05, 1, 1.05], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="container mx-auto px-6 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4" />
            Our Core Services
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Comprehensive
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              IT Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From strategic consulting to custom development, we provide
            end-to-end solutions that drive your business forward with
            innovation, security, and reliability.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                  {/* Card Header */}
                  <div
                    className={`bg-gradient-to-br ${service.gradient} p-6 relative overflow-hidden`}
                  >
                    <motion.div
                      className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"
                      animate={{
                        scale: hoveredService === service.id ? 1.2 : 1,
                        opacity: hoveredService === service.id ? 0.3 : 0.1,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="relative z-10 flex items-center justify-between">
                      <motion.div
                        className="p-4 bg-white/20 backdrop-blur-md rounded-xl"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="text-right">
                        <div className="text-white/90 text-sm font-medium">
                          Performance
                        </div>
                        <div className="text-white text-lg font-bold">
                          {service.stats}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-700"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    <motion.button
                      className={`w-full mt-6 bg-gradient-to-r ${service.gradient} text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <CoreValuesSection />
    </section>
  );
};

export default ServicesSection;
