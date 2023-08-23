import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center h-full">
      <div className="absolute p-5 z-10">
        <h1 className="text-4xl lg:text-6xl font-bold lg:w-72 w-64 text-[#085242] drop-shadow-lg px-5">
          PLANNING A TRIP?
        </h1>
        <div className="bg-gradient-to-br from-[#dde8e0] to-[#085242] w-full h-[162px] -mt-7 pt-7 px-5 rounded-b-md shadow-sm shadow-[#085242]">
          <p className="font-light w-fit lg:w-[350px] text-[#364B44] pb-5">
            Get ready to fly with Cactus Airlines. <br /> A world of comfort and
            luxury awaits you.
          </p>
          <Link
            href={"/#book"}
            className="bg-[#085242] rounded-md w-28 h-10 text-[#dde8e0] transition ease-in-out duration-150 hover:scale-110 p-2 shadow-md"
          >
            Book Now
          </Link>
        </div>
      </div>
      <div className="">
        <Image
          src={"/plane2-r.png"}
          alt="plane"
          width={700}
          height={500}
          loading="lazy"
          className="object-fill rounded-b-md relative bottom-[40%] lg:bottom-[20%] lg:left-[35%] to-front"
        />
      </div>
    </div>
  );
};

export default Hero;
