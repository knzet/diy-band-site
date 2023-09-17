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
import { Image } from "@mantine/core";
import { signIn } from "next-auth/react";
export default function RSVP() {
  const { data: me, isLoading: accountLoading } = api.user.me.useQuery();
  const { data: myRsvps, isLoading } = api.rsvp.getMine.useQuery();
  const { data: coverAmount } = api.config.getOne.useQuery({
    key: "coverAmount",
  });
  const { data: address } = api.config.getOne.useQuery({
    key: "address",
  });
  const { data: session } = useSession();
  //   const {data:approvedRsvpDisplay,isLoading:dataIsLoading} = api.config.getPublic.useQuery()
  return (
    // <div className="items-center justify-center m-auto w-fit">
    <main className="flex min-h-screen flex-col items-center  bg-gradient-to-b from-[#f7d488ff] to-[#eaefb1ff]">
      <div className="container flex flex-col items-center  gap-12 px-4 py-16 ">
        {!session?.user?.email && (
          <div className="flex flex-col items-center justify-center">
            <p className="text-center text-2xl font-bold">
              You must be logged in to RSVP. Open the site from your device's browser like Safari, not Instragram's in-app browser.
            </p>
            <p className="p-2 text-center text-xl font-bold">
              <Button
                className={"nyanza-bg dogwood cream-bg-hover"}
                onClick={() => void signIn("google")}
              >
                Sign in
              </Button>
            </p>
          </div>
        )}
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
                  <Image
                    className="pt-2"
                    src="/images/poster.jpg"
                    alt="Safety Break logo"
                  />
                </div>
              </Card>
            ) : (
              myRsvps?.map((rsvp) =>
                rsvp?.approved ? (
                  <Card className="bg-[#57ff62]">
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-center text-2xl font-bold">
                        approved. Show this page at the door for entry
                      </p>
                      <p className="text-center text-xl font-bold">
                        (must show the live page, not a screenshot)
                      </p>
                      <ul>
                        <li>name: {rsvp?.name}</li>
                        <li>guests: {rsvp?.guests}</li>
                        <li>
                          cover:{" "}
                          {rsvp?.coverRequired === true
                            ? "$" +
                            parseInt(coverAmount?.value as string).toFixed(2)
                            : "FREE"}
                        </li>
                        {address && (
                          <li>
                            address:{" "}
                            <a
                              href={`https://www.google.com/maps/dir/?api=1&destination=${address.value}`}
                              target="_blank"
                            >
                              {address.value}
                            </a>
                          </li>
                        )}
                        {rsvp?.message && (
                          <li className="font-bold">{rsvp?.message}</li>
                        )}
                      </ul>
                      <RealTimeVerify className="pt-6" />
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
                      <Image
                        className="pt-2"
                        src="/images/poster.jpg"
                        alt="Safety Break logo"
                      />
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
