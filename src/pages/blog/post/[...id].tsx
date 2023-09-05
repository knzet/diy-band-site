import { Card, Loader } from "@mantine/core";
import moment from "moment";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

export default function BlogPost() {
  const router = useRouter();
  const { data: post, isLoading } = api.blogPost.getOne.useQuery({
    id: router.query?.id?.[0] as string,
  });
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#fff822] to-[#e8bd49]">
      <Link href="/blog">
        <Card className="cream-bg nyanza-bg-hover m-4 rounded-md p-4">
          <h1 className="text-4xl font-bold">Blog</h1>
        </Card>
      </Link>
      <div className="cream-bg mt-10 rounded-md p-4">
        <h2 className='text-lg font-bold'>{post?.title}</h2>
        <h3>{"Posted " + moment(post?.date).fromNow()}</h3>
        <p>
          {post ? (
            <ReactMarkdown
              className={"markdown"}
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
