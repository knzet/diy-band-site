import Head from "next/head";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { DoubleNavbar } from "./Navbar";
import { Navbar } from "@mantine/core";
import { HeaderMiddle as Header } from "./Header";
export const siteTitle = "Safety Break";

export default function Layout({
  children,
  home,
}: {
  children: any;
  home?: boolean;
}) {
  return (
    <><div className="bg-slate-400 w-full h-screen">
      <Header links={[{ link: "/", label: "home" },{ link: "blog", label: "blog" }]} />
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
