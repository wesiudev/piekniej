"use server";
export async function getBlogPost(postId: string) {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blog/${postId}`
  );
  const data = req.json();
  return data;
}
