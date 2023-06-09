import Image from "next/image";
import { IComment, IPost } from "../components/RecentPosts";
import { getData } from "../page";
export const dynamicParams = false;
export async function generateStaticParams() {
  const posts = await getData();
  return posts.posts.map((post: IPost) => ({ postId: post.postId }));
}

async function getPostBySlug(postId: string) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/blog/${postId}`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}

export default async function Page({ params }: { params: { postId: string } }) {
  const { post } = await getPostBySlug(params.postId);
  return (
    <div className="w-[90vw] mx-auto font-sans text-white pb-6">
      <div className="w-3/5">
        <div className="py-3 mb-6">
          <h1 className="py-6 text-3xl bg-rose-600 rounded-xl w-full px-6">
            {post.title}
          </h1>
        </div>
        <div className="columns-2 gap-3">
          <Image
            className="w-full rounded-md"
            src={post.imageUrl}
            width={1024}
            height={1024}
            alt=""
          />
          {post.content[0]}
        </div>

        <div className="flex flex-col mt-6 ">
          {post.content.map((row: string, idx: number) => (
            <h2
              key={idx}
              className={`${
                idx == 0 ? "hidden" : "block"
              }text-lg mt-6 bg-rose-500 p-3 rounded-lg`}
            >
              {row}
            </h2>
          ))}
        </div>
      </div>
      <div className="flex flex-col py-6">
        <h1 className="text-4xl">Komentarze</h1>
        {post.comments.map((comment: IComment, idx: number) => (
          <div
            key={idx}
            className="w-3/5 h-max bg-rose-500 p-6 mt-6 rounded-md"
          >
            <div className="text-2xl">
              {comment.isAdmin && (
                <div className="flex flex-row items-center ">
                  <div className="w-12 h-12 bg-blue-500 flex items-center justify-center mr-2 rounded-full">
                    A
                  </div>{" "}
                  <span> Anna Żebrowska</span>
                </div>
              )}
            </div>
            <div className="pl-14 pt-3">{comment.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
