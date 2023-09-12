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
        className={`fabsolute z-30 w-full flex items-center 
        max-h-[90px] h-[90px] shadow-md`}
      >
        <div className="container mx-auto">
          <div className="flex flex-row justify-between items-center">
            <Link href={"/"}>
              <Image
                src="/logo.svg"
                width={248}
                height={54}
                alt=""
                priority={true}
              ></Image>
            </Link>

            <button
              className="bg-light/60 border-2 border-light px-4 pb-2 pt-1 rounded-full
            flex justify-center items-center"
            >
              <p className="text-4xl text-black font-normal">+</p>
            </button>

            <div className="flex items-center gap-x-5 lg:gap-x-14 text-3xl">
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
