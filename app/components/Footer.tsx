import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className='w-full'>
      <div className='grid grid-cols-2 mt-20 mb-20 max-w-[1100px] mx-auto'>
        <div className=''>
          <h1>Site Theme</h1>
          <div className='flex'>
            <Image className='' src={"/"} alt='dark' width={100} height={100} />
            <Image src={"/"} alt='dark' width={100} height={100} />
            <Image src={"/"} alt='dark' width={100} height={100} />
            <Image src={"/"} alt='dark' width={100} height={100} />
          </div>
        </div>
        <div className='grid grid-cols-4'>
          <div className='flex flex-col'>
            <Link href='/'>Donate </Link>
            <Link href='/'>Donate </Link>
            <Link href='/'>Donate </Link>
          </div>
          <div className=''>
            <div className='flex flex-col'>
              <Link href='/'>Donate </Link>
              <Link href='/'>Donate </Link>
              <Link href='/'>Donate </Link>
              <Link href='/'>Donate </Link>
            </div>
          </div>
          <div className=''>
            <div className='flex flex-col'>
              <Link href='/'>Donate </Link>
              <Link href='/'>Donate </Link>
              <Link href='/'>Donate </Link>
              <Link href='/'>Donate </Link>
            </div>
          </div>
          <div className=''>
            <div className='flex flex-col'>
              <Link href='/'>Donate </Link>
              <Link href='/'>Donate </Link>
              <Link href='/'>Donate </Link>
              <Link href='/'>Donate </Link>
              <Link href='/'>Donate </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
