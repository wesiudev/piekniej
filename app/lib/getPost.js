export async function getPost(postId) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blog/${postId}`
  );
  const post = res.json();
  return post;
}
