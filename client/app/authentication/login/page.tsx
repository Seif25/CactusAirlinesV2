import TextField from "@/app/components/textfield";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex flex-col items-center gap-20 p-10 lg:p-16">
      <div className="w-full h-auto rounded-md">
        <div className="lg:flex w-full rounded-md">
          <div className="hidden lg:flex shadow-sm shadow-[#534439] rounded-l-md w-[700px]">
            <Image
              src={"/home2.jpg"}
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
              Welcome Back!
            </h1>
            <p className="text-xs text-[#4C8077]">
              Login and book your next flight
            </p>
            <div className="py-10 flex flex-col items-center justify-center h-full lg:pt-20 gap-5">
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
              <div className="flex items-center justify-between w-full gap-3">
                <div className="flex items-center gap-3 w-auto">
                  <input
                    type="checkbox"
                    id="remember-me"
                    placeholder=""
                    className="w-auto p-2 bg-transparent border border-[#534439] rounded-md text-black focus:ring-2 focus:ring-[#534439] focus:outline-none placeholder:text-black placeholder:pl-2"
                  />
                  <label htmlFor="remember-me" className="text-sm w-auto">
                    Remember Me
                  </label>
                </div>
                <div>
                  <a
                    href="#"
                    className="text-sm text-[#005B48] underline w-full"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
              <button className="bg-[#005B48] text-white h-10 px-10 w-full rounded-md">
                Login
              </button>
              <div className="pt-5 lg:pt-20">
                <p className="text-xs lg:text-sm w-full flex gap-2 items-center">
                  {"Don't have an account?"}
                  <Link
                    href={"/authentication/signup"}
                    className="text-[#005B48] underline"
                  >
                    Create an account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
