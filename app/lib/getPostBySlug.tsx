"use server";
export async function getPostBySlug(postId: string) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blog/${postId}`
  );

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}
