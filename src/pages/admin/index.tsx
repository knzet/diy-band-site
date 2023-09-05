import { Button, Card, Loader, Modal, TextInput } from "@mantine/core";
import { BlogPost as BlogPostType } from "@prisma/client";
import { useState } from "react";
import BlogPostCard from "~/components/BlogPostCard";
import CreateBlogPostForm from "~/components/Form/CreateBlogPostForm";
import { api } from "~/utils/api";
import { GetSessionParams, getSession } from "next-auth/react";
import { prisma } from "~/server/db";

export default function Admin() {
  const { data: allPosts, isLoading } = api.blogPost.getAll.useQuery();
  return (
    // <div className="items-center justify-center m-auto w-fit">
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#f7d488ff] to-[#eaefb1ff]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <p>work in progress admin ui, create/edit/delete posts from here</p>

        {isLoading ? (
          <Loader />
        ) : (
          <div className="flex-column items-start">
            <Card className="bg-slate-200">
              <CreateBlogPostForm />
            </Card>
            {allPosts
              ?.sort((a, b) => (a.date > b.date ? -1 : 1))
              .map((post: BlogPostType) => {
                return <BlogPostCard post={post} key={post.id} admin={true} />;
              })}
          </div>
        )}
      </div>
    </main>
  );
}

export async function getServerSideProps(
  context: GetSessionParams | undefined
) {
  const session = await getSession(context);
  if (!session?.user) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  const fullUser = await prisma.user.findUnique({
    where: { id: session?.user?.id },
    include: { role: true },
  });
  if (fullUser?.role?.name !== "ADMIN") {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: session?.user,
    },
  };
}
