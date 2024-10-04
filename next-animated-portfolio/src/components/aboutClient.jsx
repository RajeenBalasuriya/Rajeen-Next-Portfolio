"use client";

import { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import Experience from "./expeirience";

const AboutClient = ({ experiences }) => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full w-full overflow-x-hidden overflow-y-auto"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="overflow-hidden">
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 zl:gap-64">
          <div className="text-white flex flex-col gap-12 justify-center">
            <h1>BIOGRAPHY</h1>
            <p>
              I&apos;m an IIT software engineering student with internship experience at Fortude. Driven by a passion for technology and equipped with strong interpersonal, hard work, and technical skills, I&apos;m dedicated to innovating and advancing the software industry for a better future.
            </p>
            <span className="italic">This is just a text example for now</span>
            {/* Add your SVGs here */}
          </div>

          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl text-white">SKILLS</h1>
            {/* Add your skills here */}
            {/* SKILL SCROLL SVG */}
          </div>

          <div ref={experienceRef} className="flex flex-col gap-12 justify-center pb-48">
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl text-white"
            >
              EXPERIENCE
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className="overflow-y-auto iphoneSe:bg-grey-to-purple bg-black p-3 rounded-lg rounded-s-lg"
            >
              <Experience experiences={experiences} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutClient;
