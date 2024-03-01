import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getAuthSession } from "@/lib/auth";
import { User } from "lucide-react";
import Link from "next/link";
import DropdownMenuItemLogout from "./DropdownMenuItemLogout";

export type UserProfileProps = {};

export const UserProfile = async (props: UserProfileProps) => {
  const session = await getAuthSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{session?.user.name || ""}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href={"/profile"}>
            <User className="mr-2 h-4 w-4" />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItemLogout className="w-full justify-left" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
