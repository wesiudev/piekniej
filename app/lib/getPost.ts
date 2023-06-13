"use server";
export async function getPost(postId: string) {
  const res = await fetch(
    `https://manicuregrudziadz.pl/api/blog/${postId}`
  );
  if (!res) {
    throw new Error("Failed to fetch data");
  }
  const post = res.json();
  return post;
}
