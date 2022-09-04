import Link from "next/link";
import React from "react";
import { contentfulClient } from "../../config/contentful";

function StoriesPage({ stories }) {
  return (
    <div className="  max-w-[1440px] mx-auto w-full mb-8">
      <div className="flex flex-col ">
        <div className="ml-8  ">
          <h1 className="text-7xl md:text-8xl font-extralight">HISTORIE</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 mx-auto">
          {stories.map((story) => (
            <Link href={`/stories/${story.sys.id}`}>
              <div className="relative cursor-pointer ">
                <img
                  className="object-cover w-80 h-80 shadow-2xl"
                  src={"https:" + story.fields.mainPhoto.fields.file.url}
                />
                <div className="hover:bg-gray-900/30   absolute top-0 left-0 w-full h-full">
                  <p className="left-4 bottom-4 text-2xl font-extralight text-white absolute">
                    {story.fields.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export const getStaticProps = async () => {
  const res: any = await contentfulClient.getEntries({
    content_type: "story",
  });

  return {
    revalidate: 60,
    props: {
      stories: res.items,
    },
  };
};

export default StoriesPage;
