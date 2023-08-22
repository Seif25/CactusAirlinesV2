import TextField from "@/app/components/textfield";
import Image from "next/image";
import Link from "next/link";

const Signup = () => {
  return (
    <div className="flex flex-col items-center gap-20 p-10 lg:p-16">
      <div className="lg:flex w-full rounded-md">
        <div className="hidden lg:flex shadow-sm shadow-[#534439] rounded-l-md w-[700px]">
          <Image
            src={"/3d1.jpg"}
            alt="cactus airlines"
            width={700}
            height={500}
            className="rounded-l-md object-cover"
          />
        </div>
        <div className="bg-[#FFEACE] w-full shadow-sm shadow-[#534439] p-5 flex flex-col items-center rounded-md lg:rounded-r-md lg:rounded-l-none">
          <Image
            src={"/logo2.png"}
            alt="cactus airlines"
            width={20}
            height={20}
          />
          <h1 className="text-2xl lg:text-4xl text-[#005B48] font-bold">
            Get Ready to Fly!
          </h1>
          <p className="text-xs text-[#4C8077]">
            Sign-up and book your next flight.
          </p>
          <div className="py-10 flex flex-col items-center justify-center h-full lg:pt-20 gap-5">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
              <TextField
                label="First Name"
                type="text"
                id="first-name"
                placeholder="First Name"
              />
              <TextField
                label="Last Name"
                type="text"
                id="last-name"
                placeholder="Last Name"
              />
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
              <TextField
                label="Email"
                type="email"
                id="email"
                placeholder="Email"
              />
              <TextField
                label="Password"
                type="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <button className="bg-[#005B48] text-white h-10 px-10 w-full rounded-md">
              Sign-up
            </button>
            <div className="pt-5 lg:pt-20">
              <p className="text-xs lg:text-sm w-full flex gap-2 items-center">
                {"Already Have an Account?"}
                <Link
                  href={"/authentication/login"}
                  className="text-[#005B48] underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
