// sanityClient.js
import { createClient } from "next-sanity";

export const clientSanity = createClient({
  projectId: "ltsoh81x", // Your Sanity project ID
  dataset: "production",  // Your dataset
  apiVersion: "2024-01-01", // API version
  useCdn: true,           // Disable CDN for real-time data
});
