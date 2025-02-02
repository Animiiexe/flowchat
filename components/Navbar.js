"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
//  import { useUser } from "@clerk/nextjs";

const Navbar = () => {


  // const user = useUser();
  // console.log(user.user?.id);
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <div className="text-3xl font-bold">
          <Link href="/" className="hover:text-white">
            FlowChat
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 items-center text-xl font-semibold">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/forums" className="hover:text-white">
            Forums
          </Link>
          <Link href="/chat" className="hover:text-white">
            UserChat
          </Link>
          <ul>
            <UserButton className ="text-xl py-4 px-6" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;