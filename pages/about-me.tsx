import React from "react";

function AboutMePage() {
  return (
    <div className="mx-auto w-full mb-8 md:h-screen max-w-[1440px] ">
      <div className="flex flex-col h-full ">
        <div className="ml-8 ">
          <h1 className="text-7xl md:text-8xl font-extralight">O MNIE</h1>
        </div>
        <div className="bg-gray-200 md:h-1/2 p-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <h1 className="text-5xl md:text-7xl">NAZYWAM SIĘ K.</h1>
              <h3 className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h3>
              <h3 className="mt-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </h3>
            </div>
            <div className="w-80 h-80 md:mr-8 md:mt-8 self-center my-8 md:my-0 ">
              <div className="bg-black w-80 h-80 z-3 relative  "></div>
              <img
                className="relative z-4 -translate-y-[19rem] translate-x-[1rem] mb-80"
                src="https://cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png"
              />
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="flex flex-col-reverse  md:flex-row justify-between">
            <div className="md:ml-8 w-80 h-[25rem] md:mr-8 md:mt-8 self-center translate-y-0 md:-translate-y-[10rem] my-8 md:my-0">
              <div className="bg-black w-full h-full z-3 relative  "></div>
              <img
                className="relative w-80 h-full -translate-y-[24rem] translate-x-[1rem] mb-80 object-cover"
                src="https://static.boredpanda.com/blog/wp-content/uploads/2015/03/dedicated-photographers-12__700.jpg"
              />
            </div>
            <div className="flex flex-col  max-w-[800px] ">
              <h1 className="text-3xl md:text-5xl md:text-right">
                NAZYWAM SIĘ K.
              </h1>
              <h3 className="mt-4 md:text-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h3>
              <h3 className="mt-4 md:text-right ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;
