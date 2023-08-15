"use client"

import Image from "next/image";
import Link from "next/link";
import { useScrollPosition } from "../hooks/useScrollPosition";

const Header = () => {
  const scrollPosition = useScrollPosition()
  return (
    <nav className={`flex items-center justify-between px-20 py-2 sticky top-0 z-50 ${scrollPosition > 0 ? "bg-[#FFEACE] shadow-sm" : "shadow-none bg-transparent"}`}>
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
      <div className="flex items-center justify-evenly gap-10">
        <Link href={"/"} className="hover:underline hover:text-[#005B48]">Home</Link>
        <Link href={"/#browse"} className="hover:underline hover:text-[#005B48]">Browse Flights</Link>
        <Link href={"/favorites"} className="hover:underline hover:text-[#005B48]">Favorites</Link>
        <Link href={"/my-flights"} className="hover:underline hover:text-[#005B48]">Bookings</Link>
      </div>
      <Link href={"/login"} className="hover:text-[#005B48] hover:bg-[#005B48] hover:bg-opacity-10 p-2 rounded-md">{"Login | Sign-up"}</Link>
    </nav>
  );
};

export default Header;
