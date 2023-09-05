import { Button } from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";
import ProfileMenu from "./ProfileMenu";
import { GetServerSidePropsContext } from "next";
import { useState } from "react";

export default function SignInButton({
  me,
  Instagram,
}: {
  me: any;
  Instagram?: boolean;
}) {
  const [visible, setVisible] = useState(false);
  // const session = useSession();
  if (me) {
    return <ProfileMenu me={me} />;
  } else {
    if (Instagram === true) {
      return (
        <>
          {visible ? (
            <div>
              Please open the site in your external browser, like Safari or Chrome.
            </div>
          ) : (
            <Button
              className={"nyanza-bg dogwood cream-bg-hover"}
              onClick={() => setVisible(true)}
            >
              Sign in
            </Button>
          )}
        </>
      );
    }
    return (
      <Button
        className={"nyanza-bg dogwood cream-bg-hover"}
        onClick={() => void signIn("google")}
      >
        Sign in
      </Button>
    );
  }
}
