export async function getBlogData() {
  const req = await fetch("https://grand-pothos-cf1bca.netlify.app/api/blog");
  // Recommendation: handle errors
  if (!req.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = req.json();
  return data;
}
