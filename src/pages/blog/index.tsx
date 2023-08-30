import { Loader } from "@mantine/core";
import { BlogPost as BlogPostType } from "@prisma/client";
import BlogPostCard from "~/components/BlogPostCard";
import { api } from "~/utils/api";
export default function Blog() {
  const { data: allPosts, isLoading } = api.blogPost.getAll.useQuery();
  return (
    // <div className="items-center justify-center m-auto w-fit">
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#f7d488ff] to-[#eaefb1ff]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="flex-column items-start">
            {allPosts?.sort((a,b)=>a.date>b.date?1:-1).map((post: BlogPostType) => {
              return <BlogPostCard post={post} />;
            })}
          </div>
        )}
      </div>
    </main>
  );
}
