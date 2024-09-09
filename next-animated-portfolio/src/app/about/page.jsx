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
      <div className="overflow-hidden">
        {/* TEXT  CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 zl:gap-64">
          {/* BIOGRPAHY CONTAINER */}
          <div className="text-white flex flex-col gap-12 justify-center">
            {/* BIOGRPAHY TITLE */}
            <h1>BIOGRPAHY</h1>
            {/* BIOGRPAHY DESC */}
            <p>
              I'm an IIT software engineering student with internship experience
              at Fortude. Driven by a passion for technology and equipped with
              strong interpersonal, hard work, and technical skills, I'm
              dedicated to innovating and advancing the software industry for a
              better future.
            </p>
            {/* BIOGRPAHY QUOTE */}
            <span className="italic">This is just a text example for now </span>
            {/* BIOGRPAHY SIGN SVG*/}
            <div className="self-end">
              <svg
                width="125"
                height="96"
                viewBox="0 0 215 196"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="215" height="196" fill="black" />
                <path
                  d="M73 1C59.0574 52.7226 35.6489 102.575 14.3333 151.556C10.269 160.895 5.32222 173.356 1 182"
                  stroke="white"
                  stroke-linecap="round"
                />
                <path
                  d="M34 72C28.8575 77.1425 30.6669 66.435 30.5556 62.7222C30.1966 50.7583 33.9186 42.6553 44.1111 35.7778C52.3231 30.2367 64.7799 26.9507 72.5 35.2222C81.7786 45.1635 82.6169 63.1493 79.6667 75.6667C76.3011 89.9464 68.0559 101.552 55.4444 109C47.9404 113.432 36.429 118.754 27.3333 116.333C20.1499 114.422 20.9291 103.012 23.1667 97.8333C26.1746 90.872 33.8252 87.8983 40.5556 85.8333C47.7507 83.6257 49.9227 83.1172 50 91C50.2875 120.321 49.2545 150.636 43 179.333C42.7769 180.357 37.4654 197.27 37.1111 195.056C36.5099 191.298 37.0261 186.451 39.1111 183.222C42.1158 178.57 49.1142 173 55 173"
                  stroke="white"
                  stroke-linecap="round"
                />
                <path
                  d="M65 150C64.7807 149.233 56.6801 163.659 59.2222 165.778C61.2379 167.458 68.2569 160.379 69 159.611C71.5416 156.985 73.1476 154.837 75.1111 151.778C76.3095 149.91 77.8701 144.198 78.7778 146.222C80.1823 149.355 76.5667 160.605 79.2222 162.778C83.9163 166.618 91.1406 148.087 92 146"
                  stroke="white"
                  stroke-linecap="round"
                />
                <path
                  d="M98 137C98.8764 151.898 98.9393 165.843 93.5 180.056C92.3043 183.18 90.0377 189.594 86.2222 190.778C85.768 190.919 85.1045 190.616 85 190.111C83.9425 185 86.4606 176.982 87.6111 172.5C94.2415 146.669 108.9 122.786 111.778 96C112.487 89.3964 110.865 92.8646 113 95"
                  stroke="white"
                  stroke-linecap="round"
                />
                <path
                  d="M110 154C115.903 146.814 120.307 137.709 123.111 128.889C123.306 128.276 125.655 121.485 124.778 120.389C123.205 118.422 122.631 124.945 121.556 127.222C118.058 134.63 113.52 141.89 112.222 150.111C112.059 151.146 111.193 156.685 112.278 157.444C116.733 160.563 125.074 150.107 127.056 147.389C129.888 143.505 129.001 143.291 131 146.889C136.36 156.536 145.93 132.519 147.222 129.444C149.3 124.501 149.723 135.171 150 136.556C151.369 143.399 154.77 138.456 157.556 134.556C161.854 128.538 166.512 112.54 170.5 125.833C173.804 136.847 179.166 121 184 121"
                  stroke="white"
                  stroke-linecap="round"
                />
                <path
                  d="M54 189C77.2523 180.793 99.6955 169.674 122.778 160.889C144.52 152.614 166.408 144.637 188 136"
                  stroke="white"
                  stroke-linecap="round"
                />
                <path
                  d="M212 127C207.529 126.441 218.023 123.988 212 127"
                  stroke="white"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            {/* BIOGRPAHY SCROLL SVG */}
            <svg>
            <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="white"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="white" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="white"
                strokeWidth="1"
              ></path>

            </svg>
          </div>
          {/* BIOGRPAHY CONTAINER */}
          {/* SKILLS CONTAINER */}
          <div className="text-white flex felx-col gap-12 justify-center">
            {/* SKILLS TITLE */}
            <h1 className="font-bold text-2xl text-white">SKILLS</h1>
            {/* SKILL LIST */}
            <div className="flex gap-4 flex-wrap">
            <div className="rounded  p-2 text-sm cursor-pointer bg-grey-to-purple text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-grey-to-purple-up text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-grey-to-purple text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-grey-to-purple-up text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-grey-to-purple text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-grey-to-purple-up text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-grey-to-purple text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-grey-to-purple-up text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-grey-to-purple text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-grey-to-purple-up text-white hover:bg-white hover:text-black">
                Nest.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-grey-to-purple text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-grey-to-purple-up text-white hover:bg-white hover:text-black">
                Spring Boot
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-grey-to-purple text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-grey-to-purple-up text-white hover:bg-white hover:text-black">
                Apollo
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-grey-to-purple text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-grey-to-purple-up text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-grey-to-purple text-white hover:bg-white hover:text-black bo">
                Three.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-grey-to-purple-up text-white hover:bg-white hover:text-black bo">
                WebGL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-grey-to-purple text-white hover:bg-white hover:text-black bo">
                Webpack
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-grey-to-purple-up text-white hover:bg-white hover:text-black bo">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-grey-to-purple text-white hover:bg-white hover:text-black bo">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-grey-to-purple-up text-white hover:bg-white hover:text-black bo">
                AWS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-grey-to-purple text-white hover:bg-white hover:text-black bo">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-grey-to-purple-up text-white hover:bg-white hover:text-black bo">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-grey-to-purple text-white hover:bg-white hover:text-black bo">
                Figma
              </div>
            </div>
            {/* SKILL SCROLL SVG */}
            <svg>
            <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="white"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="white" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="white"
                strokeWidth="1"
              ></path>

            </svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div className="text-white font-bold text-2xl">EXPERIENCE</div>
        </div>
        {/* SVG CONTAINER */}
        <div className=""></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
