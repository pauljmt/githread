import { getAuthSession } from "@/lib/auth";
import { ThemeToggler } from "@/src/theme/ThemeToggler";
import LoginButton from "./auth/LoginButton";
import { UserProfile } from "./auth/UserProfile";

type Props = {};

export const Header = async (props: Props) => {
  const session = await getAuthSession();

  return (
    <header className="border-b border-b-accent fixed top-0 bg-background w-full">
      <div className="container flex items-center py-2 gap-1">
        <h2 className="text-2xl font-bold mr-auto">Githread</h2>
        {session?.user ? <UserProfile /> : <LoginButton />}
        <ThemeToggler />
      </div>
    </header>
  );
};
