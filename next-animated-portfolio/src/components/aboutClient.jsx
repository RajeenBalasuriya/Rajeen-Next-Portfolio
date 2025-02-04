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
           
            <span className="italic"> <h2 className="text-2xl font-bold text-center mt-6">
        Rajeen Balasuriya - Full-Stack Developer | React | NestJS | MySQL
      </h2>
      <p>
              I&apos;m an IIT software engineering student with internship experience at Fortude. Driven by a passion for technology and equipped with strong interpersonal, hard work, and technical skills, I&apos;m dedicated to innovating and advancing the software industry for a better future.
            </p>

      {/* Italicized Biography */}
      <p className="italic text-lg mt-4 text-justify">
        I’m Rajeen Balasuriya, a passionate full-stack developer with a strong focus on building efficient, user-centered web applications. Currently pursuing my degree at the University of Westminster, I’ve had the opportunity to work on a wide range of technologies, including React, NestJS, MySQL, and TypeORM, among others.
        <br /><br />
        Throughout my academic and professional journey, I’ve developed a solid understanding of both frontend and backend development, allowing me to create well-rounded applications that deliver optimal user experiences. One of my most significant projects, <span className="font-bold">Save Nest</span>, was a budgeting application developed as part of a group project at university. It featured real-time notifications, automated spending updates, and future expense predictions—built using a robust tech stack that included React Native, Node.js, MySQL, and AWS.
        <br /><br />
        My focus is always on creating scalable, secure, and easy-to-use solutions. I enjoy solving complex challenges and am constantly looking for ways to refine my skills and stay updated with the latest industry trends. Whether working on large projects or fine-tuning smaller details, I aim to deliver quality work that meets user needs.
      </p>







</span>
            {/* Add your SVGs here */}
          </div>

          <div className="flex flex-col gap-12 justify-center">
          <motion.h1
              initial={{ x: "-300" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl text-white"
            >
              SKILLS
            </motion.h1>

             {/* SKILL LIST */}
            <motion.div
              initial={{ x: "0px" }}
              animate={isSkillRefInView ? { x: -300 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Nest.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Angular
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                .Net
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Apollo
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MySQL
              </div>
              
              
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Kafka
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
             
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
             
            </motion.div>
            {/* SKILL SCROLL SVG */}
              {/* SKILL SCROLL SVG */}
              <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
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
