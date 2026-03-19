import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-2">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-12" />

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground mb-8 text-lg">
                I'm currently looking for internship opportunities. Feel free to
                reach out if you'd like to connect!
              </p>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: "mishraayush0482@gmail.com", href: "mailto:mishraayush0482@gmail.com" },
                  { icon: Phone, label: "+91 6307547973", href: "tel:+916307547973" },
                  { icon: MapPin, label: "Lucknow, India", href: "#" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 rounded-xl bg-secondary group-hover:bg-primary/20 transition-colors">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground resize-none"
              />
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold hover:opacity-90 transition-opacity"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
