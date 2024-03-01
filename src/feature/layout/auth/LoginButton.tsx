"use client";

import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import { useTransition } from "react";

type Props = {};

const LoginButton = (props: Props) => {
  const [isPending, startTransition] = useTransition();
  return (
    <Button onClick={() => startTransition(() => signIn())}>
      {isPending ? (
        <Loader size={10} className="mr-2 h-4 w-4" />
      ) : (
        <LogIn className="mr-2 h-4 w-4" />
      )}
      Login
    </Button>
  );
};

export default LoginButton;
