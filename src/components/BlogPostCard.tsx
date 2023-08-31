import { BlogPost } from "@prisma/client";
import moment from "moment";
import Link from "next/link";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/post/${post.id}`}>
      <div className={"cream-bg m-6 rounded-md p-2"}>
        <h3 className="dogwood flex max-w-xs flex-col gap-4 rounded-xl p-4 text-2xl font-extrabold text-white hover:bg-white/20">
          {post.title}
        </h3>
        <h2>{moment(post?.date).fromNow()}</h2>
        <ReactMarkdown
          className={"text-slate-700"}
          children={post.content.substring(0, 200) + "..."}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    </Link>
  );
}
