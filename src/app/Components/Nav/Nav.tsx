"use client";

import Link from "next/link";
import Image from "next/image";

import {
  BsFillBellFill,
  BsFillChatRightTextFill,
  BsFillPersonFill,
} from "react-icons/bs";

const Nav = () => {
  return (
    <>
      <nav
        className={`z-30 w-full flex items-center justify-center
        max-h-[90px] h-[90px] shadow-md`}
      >
        <div className="container">
          <div className="grid grid-cols-3 grid-flow-row gap-4">
            <div className="flex items-center justify-center">
              <Link href={"/"}>
                <Image
                  src="/logo.svg"
                  width={248}
                  height={54}
                  alt=""
                  priority={true}
                ></Image>
              </Link>
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-light/60 border-2 border-light px-2 sm:px-4 pb-2 pt-1 rounded-full
                             flex justify-center items-center
                             hover:shadow-sm hover:drop-shadow-sm hover:cursor-pointer hover:scale-110
                             transition-all duration-300"
              >
                <p className="text-4xl text-black font-normal">+</p>
              </button>
            </div>

            <div className="flex items-center justify-center gap-x-5 lg:gap-x-14 text-lg md:text-xl lg:text-3xl">
              <Link href={"/"} className="">
                <BsFillBellFill />
              </Link>
              <Link href={"/"} className="">
                <BsFillChatRightTextFill />
              </Link>
              <Link href={"/"} className="">
                <BsFillPersonFill />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
