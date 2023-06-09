"use server";
export async function getPostBySlug(postId: string) {
  const data = await fetch(`http://localhost:3000/api/blog/${postId}`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}
