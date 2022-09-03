import Link from "next/link";
import React from "react";

function LandingStories({ mainStory, otherStories }) {
  console.log("other stories");
  console.log(JSON.stringify(otherStories));
  return (
    <div className="max-width-[1240px] mx-auto py-16 px-4 relative bg-white">
      <div className="flex flex-col items-center">
        <h1>Odkryj historie</h1>
        <h3 className="py-3">Efekty mojej pracy</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 py-2 gap-2">
          <div className="relative col-span-2 row-span-1">
            <Link href={`/stories/${mainStory.sys.id}`}>
              <div>
                <img
                  className="w-full h-full object-cover hover:bg-"
                  src={mainStory.fields.mainPhoto.fields.file.url}
                />
                <div className="hover:bg-gray-900/30 flex  absolute top-0 left-0 w-full h-full">
                  <p className=" gap-3  left-4 bottom-4 text-2xl font-extralight text-white absolute">
                    {mainStory.fields.title}
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-span-2 grid grid-cols-2  gap-2 py-2 md:py-0 px">
            {otherStories.map((story) => (
              <Link href={`/stories/${story.sys.id}`}>
                <div className="relative">
                  <img
                    className="bg-cover object-cover hover:bg-"
                    src={story.fields.mainPhoto.fields.file.url}
                  />
                  <div className="hover:bg-gray-900/30 flex  absolute top-0 left-0 w-full h-full">
                    <p className=" gap-3  left-4 bottom-4 text-2xl font-extralight text-white absolute">
                      {story.fields.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingStories;
