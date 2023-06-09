export async function getFaqData() {
  const req = await fetch(`https://grand-pothos-cf1bca.netlify.app/api/faq`);
  // Recommendation: handle errors
  if (!req.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const faq = req.json();
  return faq;
}
