import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

type Props = {
  user?: any;
};

export function NavigationMobile(props: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      {props.user ? (
        <>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Navigation</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href={"/panel"}>Panel</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/workout-program"}>workout</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/diet-program"}>Nutrition</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href={"/auth/logout"}>Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </>
      ) : (
        <>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Navigation</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href={"/"}>Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/"}>About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/"}>Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href={"/auth/login"}>Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/auth/register"}>Register</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </>
      )}
    </DropdownMenu>
  );
}
