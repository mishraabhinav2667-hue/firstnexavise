import { motion } from "framer-motion";
import {
  Heart,
  Award,
  Shield,
  Lightbulb,
  Handshake,
  CheckCircle,
} from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";
// Core Values Section
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


const CoreValuesSection = () => {
  const [valuesRef, valuesInView] = useScrollAnimation();

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We deliver nothing short of exceptional quality in every project",
      color: "blue",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace emerging technologies to solve tomorrow's challenges today",
      color: "purple",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "Transparent communication and honest business practices guide everything we do",
      color: "green",
    },
    {
      icon: Handshake,
      title: "Partnership",
      description:
        "Your success is our success - we're invested in your growth",
      color: "orange",
    },
    {
      icon: CheckCircle,
      title: "Reliability",
      description: "Consistent, dependable service you can count on 24/7",
      color: "gray",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-100",
        icon: "text-blue-600",
        hover: "hover:bg-blue-600",
      },
      purple: {
        bg: "bg-purple-100",
        icon: "text-purple-700",
        hover: "hover:bg-purple-700",
      },
      green: {
        bg: "bg-green-100",
        icon: "text-green-600",
        hover: "hover:bg-green-600",
      },
      orange: {
        bg: "bg-orange-100",
        icon: "text-orange-600",
        hover: "hover:bg-orange-600",
      },
      gray: {
        bg: "bg-gray-100",
        icon: "text-gray-600",
        hover: "hover:bg-gray-600",
      },
    };
    return colors[color];
  };

  return (
    <section ref={valuesRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={valuesInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <Heart className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our decisions and define our culture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const colors = getColorClasses(value.color);
              const Icon = value.icon;

              return (
                <motion.div key={index} variants={fadeInUp} className="group">
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                    <div
                      className={`w-16 h-16 ${colors.bg} ${colors.hover} rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                    >
                      <Icon
                        className={`w-8 h-8 ${colors.icon} group-hover:text-white transition-colors duration-300`}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default CoreValuesSection;
