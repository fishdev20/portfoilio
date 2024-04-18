import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import constant from '../../public/constant.json';
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document?.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 3}rem`;
    };
    transformSelected();
  }, [selected]);

  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {constant.experiences.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={index}
              >
                <span>{expereince.company}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{constant.experiences[selected].title}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={constant.experiences[selected].link} className="link">
                  {constant.experiences[selected].company}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {constant.experiences[selected].duration}
            </p>
            <ul className="exp-details-list">
              {constant.experiences[selected].desc.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
