import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE - TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I’m a <span className="text-white font-semibold">Business Administration student</span> 
            and performance-driven digital marketer fueled by curiosity and experimentation.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I don’t just study business — I apply it. From 
            <span className="text-cyan-400 font-medium"> SEO strategy</span> and 
            <span className="text-cyan-400 font-medium"> social media growth</span> to 
            <span className="text-cyan-400 font-medium"> campaign analytics</span> and 
            <span className="text-cyan-400 font-medium"> creative execution</span>, 
            I test ideas, measure performance, and optimize what works.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Marketing isn’t about noise. It’s about 
            <span className="text-orange-400 font-semibold"> influence</span>, 
            <span className="text-orange-400 font-semibold"> psychology</span>, 
            and systems that turn attention into measurable results.
          </p>
        </motion.div>

        {/* RIGHT SIDE - VISUAL / PHILOSOPHY CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow background */}
          <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-10 rounded-3xl"></div>

          <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
              My Approach
            </h3>

            <div className="space-y-4 text-gray-300 text-lg">
              <div className="flex items-start gap-3">
                <span className="text-orange-400 font-bold">01</span>
                <p>Research audience behavior & market positioning</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-orange-400 font-bold">02</span>
                <p>Design strategy & creative direction</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-orange-400 font-bold">03</span>
                <p>Launch campaigns & track performance metrics</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-orange-400 font-bold">04</span>
                <p>Optimize, scale, and refine continuously</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
