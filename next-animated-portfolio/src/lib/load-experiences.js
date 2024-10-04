

export async function loadExperiences() {
  const response = await fetch("http://localhost:1337/api/experience", {
    next: { revalidate: 86400 }, // Revalidate every 1 day
  });

  if (!response.ok) {
    throw new Error("Failed to fetch experiences");
  }

  const data = await response.json();
  
  console.log(data.data.RajeenBalasuriya.data);

  
  return data.data.RajeenBalasuriya.data;
}
