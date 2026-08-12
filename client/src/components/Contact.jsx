import React from "react";
import { motion } from "framer-motion";

const whatsappUrl = `https://wa.me/919006164438?text=${encodeURIComponent("Hi Sagar, I visited your portfolio and would like to connect.")}`;

export default function Contact() {
  return <motion.section id="contact" className="contact" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .75 }}>
    <div className="contact-glow" aria-hidden="true"></div><div className="contact-ring ring-a" aria-hidden="true"></div><div className="contact-ring ring-b" aria-hidden="true"></div>
    <p className="eyebrow">Let's connect</p><h2>Have an idea?<br /><em>Let's make it real.</em></h2>
    <p>I'm always happy to talk DevOps, infrastructure, automation, opportunities, and interesting ideas. Tap below and WhatsApp will open with a message ready to send.</p>
    <motion.a className="button light whatsapp-button" href={whatsappUrl} target="_blank" rel="noreferrer" whileHover={{ scale: 1.06 }} whileTap={{ scale: .96 }}>Open WhatsApp <span aria-hidden="true">-&gt;</span></motion.a>
    <div className="contact-details">
      <a href="tel:+919006164438"><small>Phone</small><span>+91 90061 64438</span></a>
      <a href="mailto:sagarsoni022004@gmail.com"><small>Email</small><span>sagarsoni022004@gmail.com</span></a>
      <a href="https://www.linkedin.com/in/sagar-soni-056826293" target="_blank" rel="noreferrer"><small>LinkedIn</small><span>sagar-soni-056826293</span></a>
      <a href="https://github.com/sagar9006" target="_blank" rel="noreferrer"><small>GitHub</small><span>sagar9006</span></a>
    </div>
  </motion.section>;
}
