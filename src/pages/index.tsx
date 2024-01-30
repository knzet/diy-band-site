import { Loader } from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { api } from "~/utils/api";
import { type BlogPost as BlogPostType } from "@prisma/client";
import {
  IconArrowDown,
  IconBrandBandcamp,
  IconBrandSoundcloud,
  IconBrandSpotify,
  IconBrandYoutube,
  IconMail,
} from "@tabler/icons-react";
import BlogPostCard from "~/components/BlogPostCard";
import { GetServerSidePropsContext } from "next";
import { appRouter } from "~/server/api/root";
import { createServerSideHelpers } from "@trpc/react-query/server";
import superjson from "superjson";
import { Alert } from "@mui/material";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (context.req.headers["user-agent"]?.includes("Instagram")) {
    return { props: { Instagram: true } };
  }
  return { props: { Instagram: false } };
}

export default function Home(props: any) {
  const [links, setLinks] = useState<
    { name: string; url: string; icon?: JSX.Element }[]
  >([]);
  const { data: allPosts, isLoading } = api.blogPost.getAll.useQuery();
  const { data: rsvpEnabled } = api.config.getOne.useQuery({
    key: "rsvpEnabled",
  });
  const { data: myRsvp } = api.rsvp.getMine.useQuery();
  console.log({ myRsvp });
  const { data: session } = useSession();
  useEffect(() => {
    setLinks([
      {
        name: "Spotify",
        url: "https://open.spotify.com/artist/example",
        icon: <IconBrandSpotify size={45} />,
      },
      {
        name: "Bandcamp",
        url: "https://your.bandcamp.url.com/",

        icon: <IconBrandBandcamp size={70} />,
      },
      {
        name: "Soundcloud",
        url: "https://soundcloud.com/your-account",
        icon: <IconBrandSoundcloud size={60} />,
      },
      {
        name: "Youtube",
        url: "https://www.youtube.com/@bandyoutubechannel",
        icon: <IconBrandYoutube size={45} />,
      },
      {
        name: "Booking Email",
        url: "mailto:band-email@example.com",
        icon: <IconMail size={40} />,
      },
    ]);
  }, []);
  return (
    <>
      <Head>
        <title>BANDNAME_HERE</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="gradient-top flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          {rsvpEnabled?.value === "true" &&
            (myRsvp && myRsvp?.length > 0 ? (
              // case: has rsps
              <Alert
                severity={myRsvp?.[0]?.approved === true ? "success" : "info"}
              >
                <Link href="/rsvp" className='text-2xl'>
                  Click here to view your rsvp status.{" "}
                  {props.Instagram && (
                    <>
                      Please open this page in an external browser, not
                      Instagram's built-in browser.
                    </>
                  )}
                </Link>
              </Alert>
            ) : session?.user ? (
              // case: no rsps, logged in
              <Alert severity={"info"} className='text-2xl'>
                <Link href={props.Instagram ? "/" : "/rsvp"}>
                  DIY show coming soon! Click here to RSVP.
                </Link>
              </Alert>
            ) : (
              // case: not logged in
              <Alert severity={"info"}>
                <Link className='text-2xl'
                  href={
                    props.Instagram ? "/" : "/api/auth/signin?callbackUrl=/rsvp"
                  }
                >
                  DIY show coming soon! Click here to RSVP.{" "}
                  {props.Instagram && (
                    <>
                      Please open this page in an external browser, not
                      Instagram's built-in browser.
                    </>
                  )}
                </Link>
              </Alert>
            ))}

          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            BANDNAME_HERE<span className="text-[hsl(94,100%,87%)]">BANDNAME_HERE</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <section
            // className={utilStyles.headingMd}
            >
              <p>
                {links?.length > 0 ? (
                  <ul
                  //  className={utilStyles.list}
                  >
                    {links.map(({ name, url, icon }) => (
                      <li className={"moveOnHover"} key={name}>
                        <Link
                          className="nyanza-bg dogwood my-3 flex max-w-xs flex-col gap-4 rounded-xl p-4 text-white hover:bg-white/20"
                          href={url}
                          target="_blank"
                        >
                          <h3 className="flex flex-none items-center justify-between text-2xl font-bold">
                            {name} {!icon && "→"}
                            {icon && icon}
                          </h3>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Loader />
                )}
              </p>
            </section>

            <div className="flex flex-col items-center gap-2">
              <div className="container flex flex-col items-center justify-center gap-12 px-4">
                <div className={"flex flex-none text-3xl font-extrabold text-white"}>
                  Band Updates
                  <IconArrowDown size={48} />
                </div>
                {isLoading ? (
                  <Loader />
                ) : (
                  <div className="flex-column items-start">
                    {allPosts
                      ?.sort((a, b) => (a.date > b.date ? -1 : 1))
                      .slice(0, 3)
                      .map((post: BlogPostType) => {
                        return (
                          <div className={"moveOnHover"} key={post.id}>
                            <BlogPostCard post={post} />
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
