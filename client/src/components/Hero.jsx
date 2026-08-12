import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 700], [0, 220]);
  const contentOpacity = useTransform(scrollY, [0, 580], [1, 0]);
  const orbitRotate = useTransform(scrollY, [0, 900], [0, 160]);

  return <header id="top" className="hero">
    <motion.div className="hero-orbit orbit-one" style={{ rotate: orbitRotate }} aria-hidden="true"></motion.div>
    <motion.div className="hero-orbit orbit-two" style={{ rotate: orbitRotate }} aria-hidden="true"></motion.div>
    <motion.div className="hero-content" style={{ y: contentY, opacity: contentOpacity }} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
      <p className="availability"><span></span> DevOps engineer | Automation enthusiast</p>
      <h1><motion.span initial={{ y: 90 }} animate={{ y: 0 }} transition={{ duration: .8, ease: [0.16, 1, .3, 1] }}>I automate. I ship.</motion.span><br /><em>I keep systems healthy.</em></h1>
      <p className="hero-lead">Hi, I'm <strong>Sagar Kumar Soni</strong> - a DevOps engineer building reliable infrastructure, automated workflows, and observable systems from Phagwara, India.</p>
      <div className="hero-actions"><a className="button primary" href="#projects">Explore my projects <span>↓</span></a><a className="button secondary" href="https://www.linkedin.com/in/sagar-soni-056826293/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div>
    </motion.div>
    <div className="scroll-note" aria-hidden="true"><span></span> Scroll to explore</div>
  </header>;
}
