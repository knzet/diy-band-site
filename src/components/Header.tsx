import { useState } from "react";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import { type Session } from "next-auth";

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
  Avatar,
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
import classnames from "classnames";
import ProfileMenu from "./ProfileMenu";

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
  links: {
    public: { link: string; label: string }[];
    private?: { link: string; label: string }[];
  };
}

export function HeaderMiddle({ links }: HeaderMiddleProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links.public[0]?.link);
  const { data: me } = api.user.me.useQuery();

  const { classes, cx } = useStyles();
  const items = links.public.map((link) => (
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

  const adminLink = { link: "/admin", label: "admin" };

  return (
    <Header height={56} className={"jasmine-bg"}>
      <Container className={classes.inner}>
        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          className={classes.burger}
        />
        {opened && (
          <Group className={""} spacing={5}>
            {items}
            {me?.role?.name === "ADMIN" && (
              <Link
                href={"admin"}
                key={adminLink.label}
                className={cx(classes.link, {
                  "nyanza-bg-hover": active === adminLink.link,
                  "nyanza-bg dogwood cream-bg-hover": true,
                })}
                onClick={(event) => {
                  // event.preventDefault();
                  setActive(adminLink.link);
                }}
              >
                {adminLink.label}
              </Link>
            )}
          </Group>
        )}
        <Group className={classes.links} spacing={5}>
          {items}
          {me?.role?.name === "ADMIN" && (
            <Link
              href={"admin"}
              key={adminLink.label}
              className={cx(classes.link, {
                "nyanza-bg-hover": active === adminLink.link,
                "nyanza-bg dogwood cream-bg-hover": true,
              })}
              onClick={(event) => {
                // event.preventDefault();
                setActive(adminLink.link);
              }}
            >
              {adminLink.label}
            </Link>
          )}
        </Group>

        {/* <Image src="/images/SB-logo.png" height={30} width={100} alt="" /> */}

        <Group
          spacing={0}
          className={classnames([classes.social])}
          position="right"
          noWrap
        >
          {/* <ActionIcon size="lg" className={"cream-bg-hover mx-1"}>
            <Link href="https://www.youtube.com/@safetybreakroc">
              <IconBrandYoutube size="1.1rem" stroke={1.5} />
            </Link>
          </ActionIcon>
          <ActionIcon size="lg" className={"cream-bg-hover mx-1"}>
            <IconBrandInstagram size="1.1rem" stroke={1.5} />
          </ActionIcon> */}
          {/* <SignInButton me={me} /> */}
          <ProfileMenu me={me} />
        </Group>
      </Container>
    </Header>
  );
}
