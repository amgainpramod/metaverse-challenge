import Image from "next/image";

import imageSrc from "../public/profilepic.jpg";
import logo from "../public/logo.png";
import metaverseCover from "../public/metaverse-cover.jpeg";

import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
      <h1>I'm a login Screen</h1>
      <div className="flex flex-col absolute z-50 h-5/6 w-full items-center justify-center space-y-4">
        {/* logo */}
        <Image
          className="object-cover rounded-full"
          //   src="https://links.papareact.com/3pi"
          src={logo}
          height={200}
          width={200}
        />

        {/* Login button */}
        <button
          className="bg-blue-500 bg-gradient-to-r from-pink-600 rounded-lg p-5 font-bold text-slate-900 animate-pulse hover:animate-none"
          onClick={authenticate}
        >
          Login to the METAVERSE
        </button>
      </div>
      <div className="w-full h-screen">
        {/* login form */}
        <Image
          // src="https://links.papareact.com/55n"
          src={metaverseCover}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
