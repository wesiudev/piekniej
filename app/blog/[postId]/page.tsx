import Image from "next/image";
import { IComment, IPost } from "../components/RecentPosts";
import { getBlogData } from "@/app/lib/getBlogData";
import { getPostBySlug } from "@/app/lib/getPostBySlug";
export const dynamicParams = false;
export async function generateStaticParams() {
  const posts = await getBlogData();
  return posts.posts.map((post: IPost) => ({ postId: post.postId }));
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
        <Image
          className="w-full rounded-md"
          src={post.imageUrl}
          width={1024}
          height={1024}
          alt=""
        />
        <div className="flex flex-col mt-6 ">
          {post.content.map((row: string, idx: number) => (
            <h2 key={idx} className="text-lg mt-6 bg-rose-500 p-3 rounded-lg">
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
