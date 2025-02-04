import { clientSanity } from "./sanityClient";


// Define the query to fetch the 'experience' field from all posts
const POSTS_QUERY = `*[_type == "post" && defined(experience)]{experience}`;

interface Experience {
  title: string;
  description: string;
  duration: string;
  company: string;
}

interface Post {
  experience: Experience[];
}

const options = { next: { revalidate: 86400 } };

// Function to load experiences
export async function loadExperiences() {
  try {
    // Fetch the posts with the experience data
    const posts = await clientSanity.fetch<Post[]>(POSTS_QUERY, {}, options);

    // Extract experiences and pick only the required fields
    const experiences = posts.flatMap(post =>
      post.experience.map(({ title, description, duration, company }) => ({
        title,
        description,
        duration,
        company
      }))
    );

    console.log(experiences); // Log the final array of experiences
    return experiences;

  } catch (error) {
    console.error("Error loading experiences:", error);
    throw error; // Rethrow the error for further handling
  }
}
