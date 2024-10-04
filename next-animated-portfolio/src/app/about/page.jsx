// app/about/page.js

import AboutClient from "@/components/AboutClient";
import { loadExperiences } from "@/lib/load-experiences";

const AboutPage = async () => {
  const experiences = await loadExperiences(); // Fetch experiences with revalidation

  return <AboutClient experiences={experiences} />;
};

export default AboutPage;
