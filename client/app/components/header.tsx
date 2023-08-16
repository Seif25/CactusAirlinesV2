"use client"

import Image from "next/image";
import Link from "next/link";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  const scrollPosition = useScrollPosition()
  return (
    <nav className={`px-2 lg:px-10 py-2 sticky top-0 z-50 ${scrollPosition > 0 ? "bg-[#FFEACE] shadow-sm" : "shadow-none bg-transparent"} w-full`}>
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
            {/* <h1 className="text-xl text-[#005B48]">{scrollPosition}</h1> */}
          </Link>
        </div>
        <div className="hidden lg:flex items-center justify-evenly gap-10">
          <Link href={"/"} className="hover:underline hover:text-[#005B48]">Home</Link>
          <Link href={"/#browse"} className="hover:underline hover:text-[#005B48]">Browse Flights</Link>
          <Link href={"/favorites"} className="hover:underline hover:text-[#005B48]">Favorites</Link>
          <Link href={"/my-flights"} className="hover:underline hover:text-[#005B48]">Bookings</Link>
        </div>
        <div>
          <Link href={"/authentication/login"} className="hover:text-[#005B48] hover:bg-[#005B48] hover:bg-opacity-10 p-2 rounded-md hidden lg:flex">{"Login | Sign-up"}</Link>
          <Link href={"/authentication/login"} className="text-white bg-[#005B48] p-2 rounded-md lg:hidden flex">{"Login"}</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
