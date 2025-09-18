import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Process.css";

function Process() {
  const steps = [
    {
      title: "Book",
      desc: "Schedule your service easily by calling us or booking online,choose the care you need at a time that works best for you.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/book-1.webp"
    },
    {
      title: "Match",
      desc: "We connect you with a qualified healthcare professional best suited to your needs for personalized care.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/Match-min.jpg"
    },
    {
      title: "Care",
      desc: "Receive trusted, high-quality healthcare in the comfort of your home, tailored to your needs.",
      icon: "https://pub-3e59c1e3c82c4ab1a2e92d94110f1b6c.r2.dev/Care-min.jpg"
    }
  ];

  return (
    <section className="process">
      <div className="process-container">
        <h2 className="process-title">How it works</h2>
        <motion.div
          className="process-steps"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step, index) => (
            <motion.div key={index} className="process-step">
              <motion.div
                className="process-icon"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.22 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img src={step.icon} alt={step.title} />
              </motion.div>
              <motion.div
                className="process-text"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.22 + 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <div className="process-cta">
          <Link to="/contact" className="process-btn">Book a visit now</Link>
        </div>
      </div>
    </section>
  );
}

export default Process;