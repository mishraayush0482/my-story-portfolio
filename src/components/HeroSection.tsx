import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      <div className="section-container relative z-10 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-4">
            Hello, I'm
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold mb-6">
            <span className="text-foreground">Ayush</span>{" "}
            <span className="text-gradient">Mishra</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-body">
            B.Tech CSE (AI) Student · Full-Stack Enthusiast · Problem Solver
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href="mailto:mishraayush0482@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Github size={20} />
            </a>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="inline-block animate-float"
        >
          <ArrowDown className="text-primary" size={28} />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
