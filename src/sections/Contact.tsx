import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
import { useLottie } from "lottie-react";
import hand from '../../public/animation/hand.json'

function Contact() {

  const options = {
    animationData: hand,
    loop: true,
  };

  const { View } = useLottie(options, {height: 20, width: 20, marginLeft: 5});

  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <div className="contact-cta">
        <Button link="mailto:minhnguyen.dev20@gmail.com" text="Say Hello">{View}</Button>
      </div>
    </motion.div>
  );
}

export default Contact;
