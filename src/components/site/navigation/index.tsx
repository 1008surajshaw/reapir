import React from "react";
import { User } from "@clerk/nextjs/server";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/global/mode-toggle";
import { UserProfile } from "@clerk/nextjs";
type Props = {
  user?: null | User;
};

const Navigation = ({ user }: Props) => {
  return (
    <div className="z-10">
      <nav className="">
        <ul className="flex items-center justify-center gap-8">
          <Link href={"#"} className="cursor-pointer">Pricing</Link>
          <Link href={"#"} className="cursor-pointer">About</Link>
          <Link href={"#"} className="cursor-pointer">Features</Link>
        </ul>
      </nav>
      <aside className='flex gap-2 items-center'>
        <Link
          href={'/sign-in'}
          className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80"
        >
          Login
        </Link>
        <UserButton />
        {/* <UserProfile path="/user-profile" routing="path"/> */}
        <ModeToggle/>

        </aside>
    </div>
  );
};

export default Navigation