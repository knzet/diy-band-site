import { Modal, Button } from "@mantine/core";
import { BlogPost } from "@prisma/client";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import moment from "moment";
import Link from "next/link";
import { useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { api } from "~/utils/api";
import EditBlogPostForm from "./Form/EditBlogPostForm";
import DeleteBlogPostForm from "./Form/DeleteBlogPostForm";
export default function BlogPostCard({
  post,
  admin,
}: {
  post: BlogPost;
  admin?: boolean;
}) {
  
  const charLimit = 200;
  return (
    <div className={"cream-bg m-6 rounded-md p-2 hover:bg-white/20"}>
      {admin && (
        <div className={'mx-2'}>
          <EditBlogPostForm post={post}/>
          <DeleteBlogPostForm post={post}/>
        </div>
      )}
      <Link href={`/blog/post/${post.id}`}>
        <h3 className="dogwood flex max-w-xs flex-col gap-4 rounded-xl p-4 text-2xl font-extrabold text-white ">
          {post.title}
        </h3>
        <h2>{moment(post?.date).fromNow()}</h2>
        <ReactMarkdown
          className={'markdown'}
          children={
            post.content.substring(0, charLimit) +
            (post.content.length > charLimit ? "..." : "")
          }
          remarkPlugins={[remarkGfm]}
        />
      </Link>
    </div>
  );
}
