import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
    {
      id: 1,
      name: "Sarah Chen",
      profession: "CEO, TechFlow Solutions",
      company: "TechFlow Solutions",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "Nexavise transformed our entire infrastructure in just 3 months. Their custom development team built exactly what we needed, and their ongoing support has been phenomenal. Our operational efficiency increased by 60% and revenue is up 40% since implementation!",
      service: "Custom Software Development",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Dr. Michael Rodriguez",
      profession: "Chief Medical Officer",
      company: "HealthCare Plus",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "Security was our biggest concern when digitizing patient records. Nexavise not only implemented a fortress-level security system but also trained our entire staff. We feel completely confident in our data protection and achieved 100% HIPAA compliance.",
      service: "Security Systems & Consulting",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      name: "Jennifer Park",
      profession: "Operations Director",
      company: "ProBuild Industries",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "Their IT consultancy helped us modernize operations we thought were impossible to change. The ROI was evident within the first quarter. Nexavise doesn&apos;t just provide solutions; they provide results. Our productivity increased by 75%!",
      service: "IT/Computer Consultancy",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      name: "David Kim",
      profession: "CTO, StartupLab",
      company: "StartupLab Inc.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "Outstanding software maintenance and support! Our systems have been running flawlessly for over 2 years. Their 24/7 monitoring caught issues before we even knew they existed. Zero downtime is not just a promise with Nexavise - it&apos;s reality.",
      service: "Software Support & Maintenance",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      id: 5,
      name: "Amanda Foster",
      profession: "IT Manager",
      company: "Global Retail Corp",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "Incredible value on enterprise hardware and software! Nexavise saved us 35% on our annual IT budget while upgrading our entire fleet. Their expertise in selecting the right solutions for our needs was invaluable. Highly recommend!",
      service: "Retail Sales",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 6,
      name: "Robert Martinez",
      profession: "Founder & CEO",
      company: "Digital Innovations",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "The custom mobile app they developed exceeded all expectations. Clean code, intuitive design, and delivered ahead of schedule. Our user engagement increased by 200% in the first month. Nexavise is now our go-to development partner.",
      service: "Custom Software Development",
      gradient: "from-purple-600 to-indigo-600",
    },
    {
      id: 7,
      name: "Lisa Thompson",
      profession: "COO, Finance First",
      company: "Finance First Solutions",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "Their cybersecurity assessment revealed vulnerabilities we never knew existed. The comprehensive security overhaul they implemented has given us peace of mind and regulatory compliance. Professional, thorough, and results-driven team.",
      service: "Security Systems & Consulting",
      gradient: "from-teal-500 to-cyan-500",
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (reviews.length - 2));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const handlePrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + reviews.length - 2) % (reviews.length - 2)
    );
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (reviews.length - 2));
    setIsAutoPlaying(false);
  };

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Users className="w-4 h-4 text-yellow-400" />
            Client Success Stories
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            What Our
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Don&apos;t just take our word for it. Heres what industry leaders
            and business owners have to say about their experience with Nexavise
            Consulting.
          </p>

          {/* Stats Row */}
          <div className="flex justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white flex items-center justify-center gap-2">
                <Star className="w-8 h-8 text-yellow-400 fill-current" />
                4.9
              </div>
              <div className="text-sm text-gray-400">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white flex items-center justify-center gap-2">
                <Award className="w-8 h-8 text-green-400" />
                500+
              </div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white flex items-center justify-center gap-2">
                <TrendingUp className="w-8 h-8 text-blue-400" />
                98%
              </div>
              <div className="text-sm text-gray-400">Success Rate</div>
            </div>
          </div>
        </motion.div>

        {/* Reviews Carousel */}
        <motion.div variants={itemVariants} className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={handlePrevious}
              className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: reviews.length - 2 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Reviews Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: `${-currentIndex * 33.333}%`,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              style={{ width: `${(reviews.length / 3) * 100}%` }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  className="w-1/3 flex-shrink-0 px-3"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 h-full relative overflow-hidden group hover:bg-white/15 transition-all duration-300">
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                      <Quote className="w-12 h-12 text-white" />
                    </div>

                    {/* Service Badge */}
                    <div
                      className={`inline-block bg-gradient-to-r ${review.gradient} text-white text-xs font-semibold px-3 py-1 rounded-full mb-4`}
                    >
                      {review.service}
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-white/90 text-sm leading-relaxed mb-6 italic">
                      &quot;{review.review}&quot;
                    </p>

                    {/* Client Info */}
                    <div className="flex items-center gap-4 mt-auto">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white/30"
                        />
                        <div
                          className={`absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r ${review.gradient} rounded-full border-2 border-white`}
                        />
                      </motion.div>

                      <div>
                        <h4 className="text-white font-semibold text-sm">
                          {review.name}
                        </h4>
                        <p className="text-blue-200 text-xs">
                          {review.profession}
                        </p>
                        <p className="text-white/60 text-xs">
                          {review.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Auto-play Indicator */}
        <div className="flex items-center justify-center gap-2 mt-6 text-white/60 text-sm">
          <motion.div
            className="w-2 h-2 bg-white/60 rounded-full"
            animate={{
              scale: isAutoPlaying ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 1,
              repeat: isAutoPlaying ? Infinity : 0,
              ease: "easeInOut",
            }}
          />
          <span>{isAutoPlaying ? "Auto-playing" : "Paused"}</span>
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div variants={itemVariants} className="text-center mt-16">
        <motion.button
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Join Our Success Stories
          <Star className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ReviewsSection;
