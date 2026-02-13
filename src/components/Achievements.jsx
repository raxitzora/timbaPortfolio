import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function Achievements() {
  const stats = [
    { label: "SEO Projects Studied", value: 25 },
    { label: "Marketing Articles Published", value: 10 },
    { label: "Campaign Simulations", value: 8 },
    { label: "Top Blog Likes", value: 312 },
  ];

  return (
    <section id="achievements" className="py-24 px-6 bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Selected <span className="text-cyan-400">Achievements</span>
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-4xl font-bold text-orange-400 mb-4">
                <CountUp end={stat.value} duration={2} />+
              </h3>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
