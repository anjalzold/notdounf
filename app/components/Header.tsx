import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <div className='w-full bg-[#2B2E41] text-[#A4A6C1] text-base'>
        <div className='flex px-3 py-3 justify-between max-w-[1100px] mx-auto items-center'>
          <div className='items-center flex'>
            <Link href={"/"}>
              <Image
                src={"https://anilist.co/img/icons/icon.svg"}
                alt='dark'
                width={50}
                height={50}
              />
            </Link>
          </div>
          <div className='flex justify-between space-x-16 mr-[200px] items-center '>
            <div className='flex space-x-6 '>
              <Link href='/'>Home</Link>
              <Link href='/'>About</Link>
              <Link href='/'>Contact</Link>
            </div>
            <div className='flex space-x-6 items-center'>
              <Link className='items-center align-middle' href={"/login"}>
                Login
              </Link>
              <Link
                href={"/signup"}
                className='bg-[#3477FE] px-3 py-2 items-center rounded-lg font-medium text-white'
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
