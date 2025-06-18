// import {  useSelector } from 'react-redux'
// import useMovieTrailer from '../customhooks/useMovieTrailer'

//  const VideoBackground = ({id}) => {
//   const trailerVideo=useSelector(store=>store.movies?.trailerVideo)
//      useMovieTrailer(id);
  
//   return (
//     /*place the embedded video here,use camel case,FullScreen ,make the key dynamic,trailerVideo?.key*/ 

//     <div className='w-screen'>
//       <iframe 
//       className='w-screen aspect-video'
//        src="https://www.youtube.com/embed/CMyrp5Vk3mU?si=33FCiYxJlufYI4XE" 
//        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         referrerpolicy="strict-origin-when-cross-origin" 
//         allowfullscreen></iframe>
            
//       </div>
//   )
// }

// export default VideoBackground
import { useSelector } from 'react-redux';
import useMovieTrailer from '../customhooks/useMovieTrailer';

const VideoBackground = ({ id }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(id);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Video Container */}
      <div className="absolute inset-0 z-0">
        {trailerVideo?.key ? (
          <iframe
            className="w-full h-full object-cover scale-110"
            src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}&modestbranding=1&showinfo=0&rel=0&enablejsapi=1`}
            title={`${trailerVideo.name} Trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
            <div className="animate-pulse text-white text-xl">Loading trailer...</div>
          </div>
        )}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-black via-black/20 to-transparent"></div>
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-black via-black/20 to-transparent"></div>
      <div className="absolute inset-0 z-1 bg-gradient-to-l from-black via-black/20 to-transparent"></div>
    </div>
  );
};

export default VideoBackground;