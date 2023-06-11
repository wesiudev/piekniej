export async function getPost(postId) {
  const res = await fetch(`http://localhost:3000/api/blog/${postId}`);
  const post = res.json();
  return post;
}
