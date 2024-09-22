import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

const Navbar = () => {
  const user = undefined;
  const isAdmin = false;
  return (
    <nav className="sticky text-black z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            CaseMy<span className="text-green-600">Phone</span>
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
