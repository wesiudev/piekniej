export async function getFaqData() {
  const req = await fetch(`${process.env.SITE_URL}/api/faq`);
  // Recommendation: handle errors
  if (!req.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const faq = req.json();
  return faq;
}
