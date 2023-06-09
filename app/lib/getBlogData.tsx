export async function getBlogData() {
  const req = await fetch(`${process.env.SITE_URL}/api/blog`);
  // Recommendation: handle errors
  if (!req.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = req.json();
  return data;
}
