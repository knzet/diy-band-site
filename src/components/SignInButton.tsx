import { Button } from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";
import ProfileMenu from "./ProfileMenu";

export default function SignInButton({ me }: { me: any }) {
  // const session = useSession();
  if (me) {
    return (
      <ProfileMenu me={me} />
      // <Button
      //   onClick={() => void signOut()}
      //   className={"nyanza-bg dogwood cream-bg-hover font-semibold"}
      // >
      //   Sign out
      // </Button>
    );
  } else {
    return (
      <Button
        className={"nyanza-bg dogwood cream-bg-hover"}
        onClick={() => void signIn()}
      >
        Sign in
      </Button>
    );
  }
}
