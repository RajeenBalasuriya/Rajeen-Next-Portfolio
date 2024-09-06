"use client";

import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="">
        {/* TEXT  CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 zl:gap-64">
          {/* BIOGRPAHY CONTAINER */}
          <div className="text-white flex flex-col gap-12 justify-center">
            <h1>BIOGRPAHY</h1>
            <p>
              I'm an IIT software engineering student with internship experience
              at Fortude. Driven by a passion for technology and equipped with
              strong interpersonal, hard work, and technical skills, I'm
              dedicated to innovating and advancing the software industry for a
              better future.
            </p>

            <span>This is just a text example for now </span>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="text-white">SKILLS</div>
          {/* EXPERIENCE CONTAINER */}
          <div className="text-white">EXPERIENCE</div>
        </div>
        {/* SVG CONTAINER */}
        <div className=""></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
