import { BlogPost } from "@prisma/client";
import moment from "moment";
import Link from "next/link";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/post/${post.id}`}>
      <div className={"nyanza-bg m-6 rounded-md p-2"}>
        <h1>{post.title}</h1>
        <h2>{moment(post?.date).fromNow()}</h2>
        <ReactMarkdown
          children={post.content.substring(0, 200) + "..."}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    </Link>
  );
}
