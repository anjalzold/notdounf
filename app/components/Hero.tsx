import React from "react";

export default function Hero() {
  return (
    <div>
      <div className='max-w-[1100px] mx-auto'>
        <div className='flex flex-col max-w-[1100px] mx-auto mt-10 bg-gray-900 py-5  text-white rounded-xl '>
          <div className='max-w-[500px] mx-auto mt-8 text-center'>
            <h1 className='text-3xl font-bold  '>
              the next gen anime platform
            </h1>
            <p className='font-light text-lg  mt-5 max-w-[400px]'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Expedita, quaerat.
            </p>
          </div>
          <div className='grid grid-cols-2 gap-x-10 gap-y-10 justify-center mx-auto mb-10 mt-8 px-10 '>
            <div className='grid grid-cols-[80px,1fr] gap-8'>
              <div className='flex align-middle'>
                <img
                  src='https://anilist.co/img/landing/stats.svg'
                  className=''
                  alt=''
                />
              </div>
              <div className=''>
                <h1 className='font-semibold'>hey jude</h1>
                <p className='mt-3 font-thin text-sm'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestias reprehenderit tenetur doloremque dignissimos odio
                  et, repellendus quod non praesentium at.
                </p>
              </div>
            </div>
            <div className='grid grid-cols-[80px,1fr] gap-8'>
              <div className='flex align-middle'>
                <img
                  src='https://anilist.co/img/landing/stats.svg'
                  className=''
                  alt=''
                />
              </div>
              <div className=''>
                <h1 className='font-semibold'>hey jude</h1>
                <p className='mt-3 font-thin text-sm'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestias reprehenderit tenetur doloremque dignissimos odio
                  et, repellendus quod non praesentium at.
                </p>
              </div>
            </div>
            <div className='grid grid-cols-[80px,1fr] gap-8'>
              <div className='flex align-middle'>
                <img
                  src='https://anilist.co/img/landing/stats.svg'
                  className=''
                  alt=''
                />
              </div>
              <div className=''>
                <h1 className='font-semibold'>hey jude</h1>
                <p className='mt-3 font-thin text-sm'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestias reprehenderit tenetur doloremque dignissimos odio
                  et, repellendus quod non praesentium at.
                </p>
              </div>
            </div>
            <div className='grid grid-cols-[80px,1fr] gap-8'>
              <div className='flex align-middle'>
                <img
                  src='https://anilist.co/img/landing/stats.svg'
                  className=''
                  alt=''
                />
              </div>
              <div className=''>
                <h1 className='font-semibold'>hey jude</h1>
                <p className='mt-3 font-thin text-sm'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestias reprehenderit tenetur doloremque dignissimos odio
                  et, repellendus quod non praesentium at.
                </p>
              </div>
            </div>
          </div>
          <div className='w-[150px] mx-auto items-center grid grid-cols-[auto,38px] -mb-8 px-2 py-3 box-border pl-4 bg-[#3577ff]  rounded-3xl'>
            <div className='flex justify-center '>Join Now</div>
            <div className=' h-[25px] w-[25px]    bg-[#d9e6ff]  text-[#3577ff] rounded-full box-border p-4'>
              <svg
                data-v-3428d21c=''
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='chevron-right'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 320 512'
                className='svg-inline--fa fa-chevron-right fa-w-10 w-full h-full '
              >
                <path
                  data-v-3428d21c=''
                  fill='currentColor'
                  d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'
                  className=''
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
