import Image from "next/image";
import logo from "../public/logo.png";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
import { useState } from "react";

function Header() {
  const { user } = useMoralis();

  //   const [isClickedOnAvatar, setIsClickedOnAvatar] = useState(false)

  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-pink-500 border-b-2 border-pink-700">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-60 w-60 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            className="rounded-full"
            objectFit="cover"
            src={logo}
          />
        </div>
        <div className="text-left lg:text-center col-span-4">
          <div className="relative h-48 w-48 lg:mx-auto border-white border-8 rounded-full">
            {/* Avatar */}
            <Avatar logoutOnPress />
          </div>
          {/* Welcome Message */}
          <h1 className="text-3xl">Welcome to the Metaverse</h1>
          {/* username */}
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
          {/* Change username component */}
          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
