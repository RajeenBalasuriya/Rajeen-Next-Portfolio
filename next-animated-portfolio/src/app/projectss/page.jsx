"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Save Nest ",
    desc: "Save Nest was created to help address economic problems by providing users with real-time financial management tools. Our goal is to empower individuals to make informed financial decisions, ultimately leading to better financial health and stability.",
    img: "https://media.licdn.com/dms/image/v2/D5622AQFEUtxP7foTEQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1721415293299?e=1741824000&v=beta&t=K9EKcoxlZRsc5lDTe4g0S_M7oZan9igGIHISqMTDga8",
    link: "https://github.com/RajeenBalasuriya/Save-Nest-Personal-Finance-Application",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Knowledge Hub for Leo Gamapah Metro",
    desc: "Built a Knowledge Hub for Leo Gamapah Metro using NestJS (backend), Next.js (frontend), MongoDB, Redis for caching, and Kafka for real-time messaging. This platform helps automate tasks and streamline information access, saving time for club members.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Boost Docker Build Efficiency",
    desc: "I’ve written articles on topics like boosting Docker build efficiency, where I share tips on optimizing Dockerfiles and using caching to speed up the build process.",
    img: "https://ultimez.com/blog/wp-content/uploads/2018/11/medium-blog-site.png",
    link: "https://medium.com/@rajeenbalasuriya1/boost-docker-build-efficiency-why-copying-package-json-first-saves-you-time-fb6c8d262ada",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Ice Sliding Puzzle",
    desc: "Created an Ice Sliding Puzzle Game using Dijkstra’s Algorithm to find the optimal solution, demonstrating my ability to apply advanced algorithms in interactive projects.",
    img: "https://media.geeksforgeeks.org/wp-content/uploads/20230928105033/Searching-algorithm.png",
    link: "https://github.com/RajeenBalasuriya/ice-sliding-puzzel",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center text-white">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-5xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[450px] xl:h-[300px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[450px] xl:text-base">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center text-white">
        <h1 className="text-8xl xl:text-6xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] xl:w-[400px] xl:h-[400px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="white">
              <textPath xlinkHref="#circlePath" className="text-xl">
                FULL STACK DEVELOPER
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 xl:w-24 xl:h-24 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
