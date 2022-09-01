import Link from "next/link";
import React from "react";

function LandingStories() {
  return (
    <div className="max-width-[1240px] mx-auto py-16 px-4 relative bg-white">
      <div className="flex flex-col items-center">
        <h1>Odkryj historie</h1>
        <h3 className="py-3">Efekty mojej pracy</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 py-2 gap-2">
          <div className="relative col-span-2">
            <Link href="/stories/ess">
              <div>
                <img
                  className="w-full h-full object-cover hover:bg-"
                  src={
                    "https://maserati.scene7.com/is/image/maserati/maserati/regional/us/models/my22/levante/22_LV_Trofeo_PS_T1_HomePage_1920x1080.jpg?$1920x2000$&fit=constrain"
                  }
                />
                <div className="hover:bg-gray-900/30 flex  absolute top-0 left-0 w-full h-full">
                  <p className=" gap-3  left-4 bottom-4 text-2xl font-extralight text-white absolute">
                    sportowa fura
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-2 py-2 md:py-0 px">
            <div className="relative">
              <img
                className="w-full h-full object-cover hover:bg-"
                src={
                  "https://maserati.scene7.com/is/image/maserati/maserati/regional/us/models/my22/levante/22_LV_Trofeo_PS_T1_HomePage_1920x1080.jpg?$1920x2000$&fit=constrain"
                }
              />
              <div className="hover:bg-gray-900/30   absolute top-0 left-0 w-full h-full">
                <p className="left-4 bottom-4 text-2xl font-extralight text-white absolute">
                  sportowa fura
                </p>
              </div>
            </div>{" "}
            <div className="relative">
              <img
                className="w-full h-full object-cover hover:bg-"
                src={
                  "https://maserati.scene7.com/is/image/maserati/maserati/regional/us/models/my22/levante/22_LV_Trofeo_PS_T1_HomePage_1920x1080.jpg?$1920x2000$&fit=constrain"
                }
              />
              <div className="hover:bg-gray-900/30   absolute top-0 left-0 w-full h-full">
                <p className="left-4 bottom-4 text-2xl font-extralight text-white absolute">
                  sportowa fura
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                className="w-full h-full object-cover hover:bg-"
                src={
                  "https://maserati.scene7.com/is/image/maserati/maserati/regional/us/models/my22/levante/22_LV_Trofeo_PS_T1_HomePage_1920x1080.jpg?$1920x2000$&fit=constrain"
                }
              />
              <div className="hover:bg-gray-900/30   absolute top-0 left-0 w-full h-full">
                <p className="left-4 bottom-4 text-2xl font-extralight text-white absolute">
                  sportowa fura
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                className="w-full h-full object-cover hover:bg-"
                src={
                  "https://maserati.scene7.com/is/image/maserati/maserati/regional/us/models/my22/levante/22_LV_Trofeo_PS_T1_HomePage_1920x1080.jpg?$1920x2000$&fit=constrain"
                }
              />
              <div className="hover:bg-gray-900/30   absolute top-0 left-0 w-full h-full">
                <p className="left-4 bottom-4 text-2xl font-extralight text-white absolute">
                  sportowa fura
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingStories;
