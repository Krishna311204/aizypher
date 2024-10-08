import React from 'react';
// import './VideoBackground.css'; // Import the CSS file
import Link from 'next/link';


const VideoBackground = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col w-full h-full">
        <nav className="bg-opacity-0 bg-black text-white p-4">
        <ul className="flex justify-end space-x-6">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#events" className="hover:underline">Events</a></li>
            <li><a href="#carnival" className="hover:underline">Carnival</a></li>
            <li><a href="#gallery" className="hover:underline">Gallery</a></li>
            <li><a href="#sponsors" className="hover:underline">Sponsors</a></li>
            <li><a href="#team" className="hover:underline">Team</a></li>
          </ul>
        </nav>
        <div className="flex flex-grow items-center justify-center">
        <h1 className="text-white text-6xl md:text-8xl font-extrabold tracking-wide drop-shadow-lg">Welcome to AI-ZYPHER 2024</h1> 
        </div>
        {/* <div className="flex items-center justify-center mt-8">
        <Link href="">
          <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Register Now
          </button>
        </Link>
      </div> */}
      </div>
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {/* Add your overlay content here */}
        <h1 className="text-white text-4xl font-bold">Welcome to My Website</h1>
      </div>
    </div>
  );
};

export default VideoBackground;