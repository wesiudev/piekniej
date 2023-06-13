import { getPost } from "@/app/lib/getPost";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  const { posts } = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blog/`
  ).then((res) => res.json());

  return posts.map((post) => ({ postId: post.postId }));
}

export const dynamicParams = false;

export default async function Page({ params }) {
  const { post } = await getPost(params.postId);
  if (post)
    return (
      <div className="w-[90vw] flex flex-row mx-auto">
        <div className="w-full font-sans text-white pb-6">
          <h1 className="font-sans italic font-light py-3">
            /{" "}
            <Link
              href={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/`}
              className="hover:underline hover:underline-offset-2"
            >
              blog
            </Link>{" "}
            /{" "}
            <Link
              href={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/post/${post.postId}`}
              className="hover:underline hover:underline-offset-2"
            >
              {" "}
              {post.postId}
            </Link>
          </h1>
          <div className="flex flex-col-reverse sm:flex-row w-full">
            <div className="w-full sm:w-1/2 lg:w-3/5 bg-rose-400 p-3  mt-6 rounded-md">
              <div className="py-3 mb-6">
                <h1 className="text-3xl rounded-xl text-center mx-auto">
                  {post.title}
                </h1>
              </div>
              <div className="h-1 w-2/3 sm:w-12  rounded-full mx-auto -mt-2 mb-6 bg-rose-600"></div>
              <Image
                className="rounded-md w-full mx-auto"
                src={post.imageUrl}
                width={1024}
                height={1024}
                alt=""
              />
              <div>
                {post.content.map((row, idx) => (
                  <h2
                    key={idx}
                    className="text-lg mt-6 bg-rose-500 p-3 rounded-lg"
                  >
                    {row}
                  </h2>
                ))}
              </div>
            </div>
            <div className="bg-rose-400 m-0 mt-6  sm:m-6 p-3 lg:m-6 lg:p-6 w-full sm:w-1/2 lg:w-2/5 h-max rounded-md">
              <h1 className=" text-3xl">Zarezerwuj online</h1>
              <h2 className="text-xl pt-3">
                Ciesz się pięknymi paznokciami bez stresu! Teraz możesz łatwo i
                wygodnie zarezerwować swój manicure online. Oto niesamowita
                okazja, aby zarezerwować swój termin bezpośrednio z naszej
                strony internetowej.
              </h2>
            </div>
          </div>
          <div className="flex flex-col py-6">
            <h1 className="text-4xl">Komentarze</h1>
            {post.comments.map((comment, idx) => (
              <div
                key={idx}
                className="w-full sm:w-3/5 h-max bg-rose-500 p-6 mt-6 rounded-md"
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
      </div>
    );
}
