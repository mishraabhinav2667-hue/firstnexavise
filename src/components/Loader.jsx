import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NexaviseLoadingFallback = () => {
  const [phase, setPhase] = useState("letters");
  const [visibleLetters, setVisibleLetters] = useState(0);

  const letters = ["N", "E", "X", "A", "V", "I", "S", "E"];
  const meaningsList = [
    "Next-Gen",
    "Enterprises",
    "Xcellence",
    "Automation",
    "Versatility",
    "Integration",
    "Solution",
    "Evolution",
  ];

  useEffect(() => {
    if (phase === "letters") {
      const timer = setTimeout(() => {
        if (visibleLetters < letters.length) {
          setVisibleLetters((prev) => prev + 1);
        } else {
          setTimeout(() => setPhase("logo"), 1000);
        }
      }, 600); // Increased delay between letters for better visibility
      return () => clearTimeout(timer);
    }
  }, [phase, visibleLetters, letters.length]);

  // Enhanced typing animation with better timing
  const TypingText = ({ text, delay = 0, speed = 10, showCursor = true }) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
      const startTimer = setTimeout(() => {
        if (currentIndex < text.length) {
          const timer = setTimeout(() => {
            setDisplayText(text.slice(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
          }, speed);
          return () => clearTimeout(timer);
        } else if (!isComplete) {
          setIsComplete(true);
        }
      }, delay);

      return () => clearTimeout(startTimer);
    }, [currentIndex, text, delay, speed, isComplete]);

    return (
      <span className="inline-block">
        {displayText}
        {showCursor && !isComplete && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-0.5 h-6 bg-current ml-1"
          />
        )}
      </span>
    );
  };

  // Enhanced particle system
  const BackgroundParticles = () => {
    const [viewportSize, setViewportSize] = useState({
      width: 0,
      height: 0,
    });

    useEffect(() => {
      if (typeof window !== "undefined") {
        setViewportSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    }, []);

    if (viewportSize.width === 0 || viewportSize.height === 0) {
      return null;
    }

    const particles = Array.from({ length: 25 }, (_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
        initial={{
          x: Math.random() * viewportSize.width,
          y: Math.random() * viewportSize.height,
          scale: 0,
        }}
        animate={{
          y: [null, -30, 30, -15],
          x: [null, Math.random() * 60 - 30],
          scale: [0, 1, 0.3, 1],
          opacity: [0, 0.8, 0.3, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: Math.random() * 3,
          ease: "easeInOut",
        }}
      />
    ));

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center overflow-hidden">
      <BackgroundParticles />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern animate-pulse"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Enhanced Letter Formation */}
        <AnimatePresence mode="wait">
          {phase === "letters" ? (
            <motion.div
              key="letter-formation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className="space-y-16"
            >
              {/* Main letter display with enhanced animations */}
              <div className="flex justify-center items-center space-x-3 md:space-x-4">
                {letters.map((letter, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 60, scale: 0, rotateY: 90 }}
                    animate={{
                      opacity: index < visibleLetters ? 1 : 0,
                      y: index < visibleLetters ? 0 : 60,
                      scale: index < visibleLetters ? 1 : 0,
                      rotateY: index < visibleLetters ? 0 : 90,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}
                    className="relative"
                  >
                    <motion.div
                      className="w-14 h-14 md:w-18 md:h-18 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl border border-blue-400/30"
                      whileHover={{ scale: 1.05 }}
                      animate={
                        index < visibleLetters
                          ? {
                              boxShadow: [
                                "0 0 20px rgba(59, 130, 246, 0.5)",
                                "0 0 40px rgba(147, 51, 234, 0.5)",
                                "0 0 20px rgba(59, 130, 246, 0.5)",
                              ],
                            }
                          : {}
                      }
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
                        {letter}
                      </span>
                    </motion.div>

                    {/* Enhanced glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl blur-lg opacity-40 -z-10"
                      animate={
                        index < visibleLetters
                          ? {
                              scale: [1, 1.2, 1],
                              opacity: [0.4, 0.6, 0.4],
                            }
                          : {}
                      }
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Enhanced current letter meaning display */}
              <AnimatePresence mode="wait">
                {visibleLetters > 0 && (
                  <motion.div
                    key={visibleLetters}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="min-h-[4rem] flex items-center justify-center"
                  >
                    <div className="text-3xl md:text-4xl text-blue-200 font-light tracking-wide">
                      <TypingText
                        text={meaningsList[visibleLetters - 1] || ""}
                        speed={10}
                        showCursor={true}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Enhanced progress visualization */}
              <div className="space-y-4">
                {/* Progress dots */}
                <div className="flex justify-center space-x-3">
                  {letters.map((_, index) => (
                    <motion.div key={index} className="relative">
                      <motion.div
                        className="w-3 h-3 rounded-full bg-blue-400/30"
                        animate={{
                          scale: index < visibleLetters ? [1, 1.5, 1.2] : 1,
                          backgroundColor:
                            index < visibleLetters ? "#60A5FA" : "#60A5FA30",
                        }}
                        transition={{ duration: 0.4 }}
                      />
                      {index < visibleLetters && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1.5, opacity: 0 }}
                          transition={{ duration: 0.6 }}
                          className="absolute inset-0 w-3 h-3 rounded-full bg-blue-400 -z-10"
                        />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="w-64 h-1 bg-gray-700/50 rounded-full mx-auto overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: "0%" }}
                    animate={{
                      width: `${(visibleLetters / letters.length) * 100}%`,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>

                {/* Progress text */}
                <motion.div
                  className="text-blue-300/80 text-sm font-medium"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {visibleLetters}/{letters.length} - Building NEXAVISE
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <></>
          )}
        </AnimatePresence>
      </div>

      {/* Enhanced corner decorations */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-10 right-10 w-24 h-24 border-2 border-blue-400/40 rounded-full shadow-lg"
      />

      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 0.8, 1],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-10 left-10 w-20 h-20 border-2 border-purple-400/40 rounded-full shadow-lg"
      />

      <style>{`
                .bg-grid-pattern {
                    background-image: 
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
                    background-size: 50px 50px;
                }
            `}</style>
    </div>
  );
};

export default NexaviseLoadingFallback;
