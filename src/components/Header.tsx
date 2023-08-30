import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  Burger,
  rem,
  Image,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Link from "next/link";
import { api } from "~/utils/api";
import SignInButton from "./SignInButton";
// function AuthShowcase() {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <>
//       <div className="flex flex-col items-center justify-center gap-4">
//         <p className="text-center text-2xl text-white">
//           {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//           {/* {secretMessage && <span> - {secretMessage}</span>} */}
//         </p>
//         <button
//           className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//           onClick={sessionData ? () => void signOut() : () => void signIn()}
//         >
//           {sessionData ? "Sign out" : "Sign in"}
//         </button>
//       </div>
//     </>
//   );
// }

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: rem(56),

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  links: {
    width: rem(260),

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    width: rem(260),

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

interface HeaderMiddleProps {
  links: { link: string; label: string }[];
}

export function HeaderMiddle({ links }: HeaderMiddleProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0]?.link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      href={link.link}
      key={link.label}
      className={cx(classes.link, {
        "nyanza-bg-hover": active === link.link,
        "nyanza-bg dogwood cream-bg-hover": true,
      })}
      onClick={(event) => {
        // event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={56} className={"jasmine-bg"}>
      <Container className={classes.inner}>
        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          className={classes.burger}
        />
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>

        {/* <Image src="/images/SB-logo.png" height={30} width={100} alt="" /> */}

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg" className={"cream-bg-hover mx-1"}>
            <Link href="https://www.youtube.com/@safetybreakroc">
              <IconBrandYoutube size="1.1rem" stroke={1.5} />
            </Link>
          </ActionIcon>
          <ActionIcon size="lg" className={"cream-bg-hover mx-1"}>
            <IconBrandInstagram size="1.1rem" stroke={1.5} />
          </ActionIcon>
          <SignInButton />
        </Group>
      </Container>
    </Header>
  );
}
