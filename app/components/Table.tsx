import Image from "next/image";
import React from "react";

export default function Table() {
  return (
    <div className='max-w-[1100px] mx-auto'>
      <div className='mt-10 mb-20'>
        <a href='#' className='grid grid-cols-[auto,70px]  '>
          <div className='font-bold text-lg uppercase font-sans'>
            Top 100 Anime
          </div>
          <div className='text-sm inline-block font-sans'>View All</div>
        </a>

        <div className='grid grid-cols-1 gap-4'>
          <div className=''>
            <div className=''>#</div>
            <div className=''>1</div>
          </div>
          <div className=''>
            <div className=''>
              <Image
                src={
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx114129-RLgSuh6YbeYx.jpg"
                }
                alt='image'
                width={80}
                height={80}
              />
            </div>
            <div className=''></div>
          </div>
        </div>
      </div>
    </div>
  );
}
