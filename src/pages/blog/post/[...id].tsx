import { Loader } from "@mantine/core";
import moment from "moment";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogPost() {
  const router = useRouter();
  const { data: post, isLoading } = api.blogPost.getOne.useQuery({
    id: router.query?.id?.[0],
  });
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#fff822] to-[#e8bd49]">
      <div className="mt-10 rounded-md bg-[#f4f4f4] p-4">
        <h2>{post?.title}</h2>
        <h3>{moment(post?.date).fromNow()}</h3>
        <p>
          {post ? (
            <ReactMarkdown
              children={post.content}
              remarkPlugins={[remarkGfm]}
            />
          ) : (
            <Loader />
          )}
        </p>
      </div>
    </main>
  );
}
