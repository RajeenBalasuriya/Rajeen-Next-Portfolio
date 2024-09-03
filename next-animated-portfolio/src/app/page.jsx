import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full w-full flex flex-col">
      {/* IMAGE CONTAINER */}
      <div className="h-full w-full md:w-1/5 sm:w-52 relative overflow-hidden rounded-lg shadow-xl">
        <Image 
          src="/d.png" 
          alt="Descriptive alt text" 
          fill
          className="object-fil object-center"
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2">
        {/* Content goes here */}
      </div>
    </div>
  );
};

export default Homepage;
