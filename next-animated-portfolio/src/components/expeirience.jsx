const experienceJson = [
    {
      title: "Software Engineer Intern",
      company: "Fortude",
      duration: "May 2024 - May 2024",
      description:
        "Worked on developing web applications using Angular and Nest.js.",
    },
    {
      title: "Software Engineering Student",
      company: "Informatics Institute of Technology",
      duration: "September 2022 - September 2026",
      description: "Assisted in building and maintaining software solutions.",
    },
    {
      title: "Intern Developer",
      company: "Innovation Hub",
      duration: "September 2022 - December 2022",
      description:
        "Collaborated on various projects in a fast-paced environment.",
    },
  ];
  
  const Experience = () => {
    return (
      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 w-1 bg-gray-600 h-full -translate-x-1/2"></div>
        {experienceJson.map((experience, index) => (
          <div key={index} className={`flex justify-between h-48 mb-8`}>
            {/* Left section for odd index, Right section for even index */}
            {index % 2 === 0 ? (
              <>
                {/* LEFT Experience Item */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    {experience.title}
                  </div>
                  <div className="p-3 text-sm italic text-white text-left">
                    {experience.description}
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    {experience.duration}
                  </div>
                  <div className="p-1 rounded text-white text-sm font-semibold w-fit">
                    {experience.company}
                  </div>
                </div>
                {/* Center Line with Circle */}
                <div className="w-1/6 flex justify-center relative">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
                {/* Empty Right Side */}
                <div className="w-1/3"></div>
              </>
            ) : (
              <>
                {/* Empty Left Side */}
                <div className="w-1/3"></div>
                {/* Center Line with Circle */}
                <div className="w-1/6 flex justify-center relative">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
                {/* RIGHT Experience Item */}
                <div className="w-1/3">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    {experience.title}
                  </div>
                  <div className="p-2 text-sm italic text-white">
                    {experience.description}
                  </div>
                  <div className="p-2 text-red-400 text-sm font-semibold">
                    {experience.duration}
                  </div>
                  <div className="p-1 rounded text-white text-sm font-semibold w-fit">
                    {experience.company}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default Experience;
  