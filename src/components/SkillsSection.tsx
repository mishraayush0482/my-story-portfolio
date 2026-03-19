import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "C"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TailwindCSS", "React.js"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="card-glass p-6"
              >
                <h3 className="text-primary font-display font-semibold mb-4">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
