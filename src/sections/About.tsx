import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import constant from '../../public/constant.json'
function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
              My name is Minh Nguyen, born in Vietnam, moved to Finland
              for studying in 2019 and working as a software developer currently.
              My major was Information Technology at Centria University of Applied Sciences, Kokkola.
              In addition to my knowledge base, I actively seek out new technologies
              and stay up to date on industry trends and advancements. 
              This has allowed me to stay ahead of the curve and deliver exceptional work
              to all I have worked on a project basic. Until now, I have 2 years experience hands on
              working in Web development and Mobile development.
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I specialize in designing and developing
            high-quality websites and mobile applications that delight our clients and exceed their
            expectations at{" "}
            <Link href="https://www.triona.eu/" className="link" target="_blank">
              Triona Oy.
            </Link>
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            {constant.recenTechnologies.map((item, idx) => {
									return (
										<li key={idx} className="about-grid-info-list-item">{item} </li>
									)})}
          </ul>
          <p className="about-grid-info-text">
            Beside, I also have some experience with these technologies:
          </p>
          <ul className="about-grid-info-list">
            {constant.otherTech.map((item, idx) => {
									return (
										<li key={idx} className="about-grid-info-list-item">{item} </li>
									)})}
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/minhng.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
