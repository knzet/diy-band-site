import { Button, Card, Loader, Modal, TextInput } from "@mantine/core";
import { BlogPost as BlogPostType } from "@prisma/client";
import { useState } from "react";
import BlogPostCard from "~/components/BlogPostCard";
import CreateBlogPostForm from "~/components/Form/CreateBlogPostForm";
import { api } from "~/utils/api";
import { GetSessionParams, getSession, useSession } from "next-auth/react";
import { prisma } from "~/server/db";
import RSVPForm from "~/components/Form/RSVPForm";
import RealTimeVerify from "~/components/RealTimeVerify";

export default function RSVP() {
  const { data: myRsvps, isLoading } = api.rsvp.getMine.useQuery();
  const { data: session } = useSession();
  //   const {data:approvedRsvpDisplay,isLoading:dataIsLoading} = api.config.getPublic.useQuery()
  return (
    // <div className="items-center justify-center m-auto w-fit">
    <main className="flex min-h-screen flex-col items-center  bg-gradient-to-b from-[#f7d488ff] to-[#eaefb1ff]">
      <div className="container flex flex-col items-center  gap-12 px-4 py-16 ">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="flex-column items-start">
            {myRsvps?.length === 0 ? (
              <Card className="bg-slate-200">
                <div className="flex flex-col items-center justify-center">
                  <p className="py-4 text-center text-2xl font-bold">
                    RSVP for the Rochester house show on 9/30
                  </p>
                  <RSVPForm />
                </div>
              </Card>
            ) : (
              myRsvps?.map((rsvp) =>
                rsvp?.approved ? (
                  <Card className="bg-[#57ff62]">
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-center text-2xl font-bold">
                        approved. Show this page at the door for entry (must
                        show the live page, not a screenshot)
                      </p>
                      <ul>
                        <li>name: {rsvp?.name}</li>
                        <li>guests: {rsvp?.guests}</li>
                      </ul>
                      <RealTimeVerify />
                      {/* {approvedRsvpDisplay && (
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-center text-2xl font-bold">
                          {approvedRsvpDisplay}
                        </p>
                      </div>
                    )} */}
                    </div>
                  </Card>
                ) : rsvp?.rejected ? (
                  <Card className="bg-[#ff5757]">
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-center text-2xl font-bold">
                        rsvp rejected. probably because of capacity limits. Good
                        news! You have first priority for the next show. We'll
                        put you first in line for the next one, as long as you
                        use the same email address:
                      </p>
                      <div className="py-2">
                        RSVP information:
                        <ul>
                          <li>name: {rsvp?.name}</li>
                          <li>email: {session?.user?.email}</li>
                          <li>guests: {rsvp?.guests}</li>
                          <li>status: rejected</li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                ) : (
                  <Card className="bg-[#eeff56]">
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-center text-2xl font-bold">
                        your RSVP is pending approval. check back later for more
                        info
                      </p>
                    </div>
                  </Card>
                )
              )
            )}
          </div>
        )}
      </div>
    </main>
  );
}

// export async function getServerSideProps(
//   context: GetSessionParams | undefined
// ) {
//   const session = await getSession(context);
//   console.log({ session });
//   if (!session?.user) {
//     return {
//       redirect: {
//         destination: "/api/auth/signin",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       user: session?.user,
//     },
//   };
// }
