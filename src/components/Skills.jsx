import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Growth & Performance",
    skills: [
      { name: "Search Engine Optimization (SEO)", level: 90 },
      { name: "Paid Advertising", level: 85 },
      { name: "Conversion Optimization", level: 88 },
    ],
  },
  {
    title: "Creative & Branding",
    skills: [
      { name: "Content Creation", level: 88 },
      { name: "Storytelling", level: 92 },
      { name: "Social Media Management", level: 85 },
    ],
  },
  {
    title: "Analytics & Strategy",
    skills: [
      { name: "Performance Tracking", level: 87 },
      { name: "Audience Research", level: 84 },
      { name: "Campaign Strategy", level: 89 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & <span className="text-cyan-400">Expertise</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            A balance of creativity, strategy, and data-driven execution.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-xl hover:shadow-cyan-500/10 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-orange-400">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm">
                        {skill.name}
                      </span>
                      <span className="text-cyan-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-orange-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
