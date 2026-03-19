import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech — CSE (Artificial Intelligence)",
    institution: "Galgotias College of Engineering and Technology",
    year: "2023 – 2027",
    icon: GraduationCap,
  },
  {
    degree: "Senior Secondary (12th) — CBSE",
    institution: "St. Anthony Public School",
    year: "2022",
    detail: "94%",
    icon: Award,
  },
  {
    degree: "Secondary (10th) — CBSE",
    institution: "St. Anthony Public School",
    year: "2020",
    detail: "89%",
    icon: Award,
  },
];

const certificates = [
  "DBMS — Database design, relational models, SQL queries",
  "Data Structures and Algorithms — Problem-solving fundamentals",
  "Gmail Communication Processes — Coursera Certified",
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2">
            Education & <span className="text-gradient">Certificates</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />

          {/* Timeline */}
          <div className="relative space-y-8 mb-16">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" />
            {education.map((item, i) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`relative flex items-start gap-6 md:w-1/2 ${
                  i % 2 === 0
                    ? "md:mr-auto md:pr-12"
                    : "md:ml-auto md:pl-12"
                }`}
              >
                <div className="absolute left-4 md:left-auto md:right-0 top-1 w-3 h-3 rounded-full bg-primary z-10 hidden md:block"
                  style={i % 2 === 0 ? { right: "-6px" } : { left: "-6px" }}
                />
                <div className="pl-10 md:pl-0">
                  <div className="card-glass p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <item.icon size={16} className="text-primary" />
                      <span className="text-xs text-primary font-display">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-foreground">
                      {item.degree}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.institution}
                    </p>
                    {item.detail && (
                      <span className="mt-2 inline-block px-2 py-0.5 text-xs rounded bg-primary/10 text-primary">
                        {item.detail}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certificates */}
          <h3 className="text-xl font-display font-semibold mb-6 text-foreground">
            Certificates
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glass p-4 text-sm text-muted-foreground"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
