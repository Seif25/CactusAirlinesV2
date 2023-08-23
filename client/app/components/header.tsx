"use client"

import Image from "next/image";
import Link from "next/link";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  const scrollPosition = useScrollPosition()
  return (
    <nav className={`px-2 lg:px-10 py-2 sticky top-0 z-50 ${scrollPosition > 0 ? "bg-[#dde8e0] shadow-sm" : "shadow-none bg-transparent"} w-full`}>
      <div className="flex items-center justify-between">
        <div className="lg:hidden">
          <button>
            <CiMenuBurger size={40}/>
          </button>
        </div>
        <div>
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src="/logo2.png"
              alt="cactus airlines"
              width={40}
              height={40}
              loading="lazy"
            />
            {/* <h1 className="text-xl text-[#085242]">{scrollPosition}</h1> */}
          </Link>
        </div>
        <div className="hidden lg:flex items-center justify-evenly gap-10">
          <Link href={"/"} className="hover:underline hover:text-[#085242]">Home</Link>
          <Link href={"/favorites"} className="hover:underline hover:text-[#085242]">Explore</Link>
          <Link href={"/#book"} className="hover:underline hover:text-[#085242]">Book</Link>
          <Link href={"/my-flights"} className="hover:underline hover:text-[#085242]">Help</Link>
        </div>
        <div>
          <Link href={"/authentication/login"} className="hover:text-[#085242] hover:bg-[#085242] hover:bg-opacity-10 p-2 rounded-md hidden lg:flex">{"Login"}</Link>
          <Link href={"/authentication/login"} className="text-white bg-[#085242] p-2 rounded-md lg:hidden flex">{"Login"}</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
