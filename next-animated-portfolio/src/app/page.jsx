import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full overflow-scroll flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/* IMAGE CONTAINER */}
    <div className="h-1/2  lg:h-full lg:w-1/2 lg:right-11 relative  ">
      <Image src="/RAJEEN BALASURIYA.svg" alt="" fill className="object-contain " />
    </div>
    {/* TEXT CONTAINER */}
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 iphoneSe:gap-6  items-center justify-center">
      {/* TITLE */}
      <h1 className="text-4xl iphoneSe:text-2xl md:text-5xl font-bold text-white">
        Shaping Digital Solutions, Building the Future.
      </h1>
      {/* DESC */}
      <p className="md:text-xl iphoneSe:text-sm text-white text-justify">
      I'm an IIT software engineering student with internship experience at Fortude. Driven by a passion for technology and equipped with strong interpersonal, hard work, and technical skills, I'm dedicated to innovating and advancing the software industry for a better future.
      </p>
      {/* BUTTONS */}
      <div className="w-full flex gap-4 justify-center">
        <button className="p-4 rounded-lg ring-1 iphoneSe:text-sm se:w-1/3 ring-black bg-white text-black">
          View My Work
        </button>
        <button className="p-4 rounded-lg ring-1 iphoneSe:text-sm se:w-1/3 ring-black text-black bg-white">
          Contact Me
        </button>
      </div>
    </div>
  </div>
  );
};

export default Homepage;
