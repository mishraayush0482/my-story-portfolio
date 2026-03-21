import { motion } from "framer-motion";
import { User, MapPin, Phone, Mail } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-8" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I am a dedicated and detail-oriented B.Tech student ,
                eager to apply my technical knowledge and problem-solving 
                skills in a practical environment. I am seeking
                an internship opportunity to gain hands-on experience and
                contribute to innovative projects. I am a quick learner, a team
                player, and committed to continuous learning and professional
                growth.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: User, label: "Ayush Mishra" },
                { icon: MapPin, label: "Lucknow, India" },
                { icon: Phone, label: "+91 6307547973" },
                { icon: Mail, label: "mishraayush0482@gmail.com" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-secondary">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
