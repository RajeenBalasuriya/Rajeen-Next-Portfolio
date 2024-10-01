import useSWR from 'swr';
import { loadExperiences } from "@/lib/load-experiences";

const fetcher = async () => {
  const data = await loadExperiences();
  return data;
};

const Experience = () => {
  const { data: experiences, error } = useSWR('experiences', fetcher, {
    // Cache data for 24 hours
    staleTime: 86400000, // 24 hours in milliseconds
  
    revalidateOnMount: true, // Fetch when the component mounts
    // Don't refetch on window focus
    revalidateOnFocus: false,
    // Deduplication interval set longer than stale time
    dedupingInterval: 86400000, // 24 hours in milliseconds
    onErrorRetry: (error, key, config, revalidate) => {
      console.error('Error loading experiences:', error.message);
      // Customize error retry behavior if needed
      if (error.status === 404) return; // Don't retry on 404 errors
    },
  });

  if (error) {
    console.error('Error fetching experiences:', error);
  }

  // If experiences is still undefined or an empty array, it means loading or no data
  if (!experiences) return <div>Loading...</div>;

  return (
    <div className="relative">
      {/* Center Line */}
      <div className="absolute left-1/2 top-0 w-1 bg-gray-600 h-full -translate-x-1/2"></div>
      {experiences.length === 0 ? (
        <div>No experiences found.</div>
      ) : (
        experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} index={index} />
        ))
      )}
    </div>
  );
};

const ExperienceItem = ({ experience, index }) => {
  return (
    <div className={`flex justify-between h-48 mb-8`}>
      {index % 2 === 0 ? (
        <>
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
          <div className="w-1/6 flex justify-center relative">
            <div className="w-1 h-full bg-gray-600 rounded relative">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-1/2 -translate-y-1/2"></div>
            </div>
          </div>
          <div className="w-1/3"></div>
        </>
      ) : (
        <>
          <div className="w-1/3"></div>
          <div className="w-1/6 flex justify-center relative">
            <div className="w-1 h-full bg-gray-600 rounded relative">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-1/2 -translate-y-1/2"></div>
            </div>
          </div>
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
  );
};

export default Experience;
