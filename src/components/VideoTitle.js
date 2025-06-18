// import React from 'react'
// import { FaPlay } from 'react-icons/fa';
// const VideoTitle = ({title,overview}) => {
//   return (
//     <div className=' w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black'>
//       <h1 className='text-6xl font-bold drop-shadow-lg'>{title}</h1>
//       <p className='py-6 text-lg w-1/4'>{overview}</p>
//       <div>
//         <button className='bg-gray-500 text-black p-4 px-12 text-xl bg-opacity-50 rounded-lg'>  <FaPlay className="text-black" /> Play</button>
//         <button className='mx-2 bg-gray-500 text-black p-4 px-12 text-xl bg-opacity-50 rounded-lg'>More Info</button>
//       </div>
//     </div>
//   )
// }

// export default VideoTitle;

import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { BsInfoCircle } from 'react-icons/bs';

const VideoTitle = ({ title, overview }) => {
  console.log(title,overview)
  return (
    <div className="absolute z-10 bottom-1/4 left-12 w-full md:w-2/5">
      {/* Title with responsive sizing */}
      <h1 className="text-xl md:text-xl font-bold text-red-500 mb-4 drop-shadow-2xl">
        {title}
      </h1>

      {/* Overview with responsive sizing and line clamp */}
      <p className="text-sm md:text-lg text-white mb-6 line-clamp-3 drop-shadow-lg">
        {overview}
      </p>

      {/* Buttons with hover effects */}
      <div className="flex space-x-4">
        <button className="flex items-center justify-center bg-white text-black px-6 py-2 rounded-md hover:bg-opacity-80 transition-all duration-200 group">
          <FaPlay className="mr-2 group-hover:scale-110 transition-transform" />
          <span className="font-semibold">Play</span>
        </button>
        <button className="flex items-center justify-center bg-gray-600 bg-opacity-70 text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all duration-200 group">
          <BsInfoCircle className="mr-2 text-lg group-hover:scale-110 transition-transform" />
          <span className="font-semibold">More Info</span>
        </button>
        
      </div>
    </div>
  );
};

export default VideoTitle;