export async function getServicesList() {
  const req = await fetch(
    `https://www.grand-pothos-cf1bca.netlify.app/api/data`
  );
  // Recommendation: handle errors
  if (!req.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const services = req.json();
  return services;
}
