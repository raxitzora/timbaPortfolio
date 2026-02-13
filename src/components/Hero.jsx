import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 flex items-center justify-center px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-cyan-400 uppercase tracking-widest text-sm mb-4">
            Karan • Digital Marketing Professional
          </h2>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            I Turn{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">
              Attention
            </span>{" "}
            Into Revenue
          </h1>

          <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-xl mx-auto md:mx-0">
            BBA student specializing in growth strategy, paid campaigns, and
            performance analytics. I help brands scale through data-driven
            marketing systems.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#blogs"
              className="px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30"
              >
              View My Work <FaArrowRight />
            </a>

            <a
              href="https://www.linkedin.com/in/karantimba/"
              className="px-8 py-3 rounded-lg border border-gray-400 text-white hover:bg-white hover:text-black transition duration-300"
            >
              Let’s Connect
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          {/* Background Glow Effects */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-cyan-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-orange-500 rounded-full blur-3xl opacity-20 top-10 right-10"></div>

          {/* Profile Image */}
          <div className="relative">
            <img
              src="/blog-images/karan.jpg"
              alt="Karan - Digital Marketing Specialist"
              loading="lazy"
              className="w-64 h-64 md:w-60 md:h-80 object-cover border-4 border-cyan-400 shadow-2xl shadow-cyan-500/40 transition-transform duration-500 hover:scale-105"
            />        
          </div>
        </motion.div>

      </div>
    </section>
  );
}
