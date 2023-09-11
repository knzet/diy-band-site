import Head from "next/head";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

import { DoubleNavbar } from "./Navbar";
import { Navbar } from "@mantine/core";
import { HeaderMiddle as Header } from "./Header";
import { api } from "~/utils/api";
export const siteTitle = "Safety Break";

export default function Layout({
  children,
  home,
  Instagram,
}: {
  children: any;
  home?: boolean;
  Instagram?: boolean;
}) {
  return (
    <>
      <div className="h-screen w-full bg-slate-400">
        <Header
          Instagram={Instagram}
          links={{
            public: [
              { link: "/", label: "home" },
              { link: "/blog", label: "blog" },
              
            ],
            private: [{ link: "admin", label: "admin" }],
            rsvpEnabled: [{ link: "/rsvp", label: "rsvp" }]
          }}
        />
        {/* <Navbar height={750} width={{ sm: 300 }}> */}
        {children}
        {/* </Navbar> */}
      </div>
    </>
  );
}
// <Image
//   priority
//   src="/images/SB-logo.png"
//   className={utilStyles.borderCircle}
//   height={144}
//   width={144}
//   alt=""
// />
