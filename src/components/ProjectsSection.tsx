import { motion } from "framer-motion";
import { ExternalLink, Bot, Shield, Globe, CloudSun } from "lucide-react";

const projects = [
  {
    title: "Multilingual Agnostic Chatbot",
    icon: Bot,
    tags: ["RAG", "INDICTrans2", "NLP", "Python"],
    description:
      "Built a multilingual, language-agnostic chatbot agent to help non-native students overcome communication barriers. Integrated a RAG pipeline for grounded answers and used INDICTrans2 for smooth translation across Indian languages.",
  },
  {
    title: "PhishX",
    icon: Shield,
    tags: ["Security", "ML", "Python"],
    description:
      "A phishing detection tool that analyzes messages — paste text or drop a file and it tells you whether it's a phishing attempt or not.",
  },
  {
    title: "Disaster Management Website",
    icon: Globe,
    tags: ["HTML", "CSS", "Frontend"],
    description:
      "A front-end website providing essential disaster-related information, emergency contacts, and resources in a structured, accessible and user-friendly manner.",
  },
  {
    title: "Real-time Weather Tracker",
    icon: CloudSun,
    tags: ["Python", "API", "Tkinter"],
    description:
      "Fetches live weather data from an API and displays it through a GUI. Allows users to check current weather conditions, temperature, and forecasts for any location.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-glass p-6 group hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <project.icon className="text-primary" size={24} />
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                    >
                      {tag}
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

export default ProjectsSection;
