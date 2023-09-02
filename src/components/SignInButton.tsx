import { Button } from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";

export default function SignInButton() {
  const session = useSession();
  if (session.data?.user) {
    return (
      <Button
        onClick={() => void signOut()}
        className={"nyanza-bg dogwood cream-bg-hover font-semibold"}
      >
        Sign out
      </Button>
    );
  } else {
    return (
      <Button
        className={"nyanza-bg dogwood cream-bg-hover"}
        onClick={() => void signIn('google')}
      >
        Sign in
      </Button>
    );
  }
}
