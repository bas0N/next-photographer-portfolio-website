import React from "react";
import { contentfulClient } from "../config/contentful";

function AboutMePage({ aboutPhoto1, aboutPhoto2 }) {
  return (
    <div className="mx-auto w-full mb-8  max-w-[1440px] ">
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
                className="relative z-4 -translate-y-[19rem] translate-x-[1rem] mb-80 w-80 h-80 object-cover"
                src={"https:" + aboutPhoto1}
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
                src={"https:" + aboutPhoto2}
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
export const getStaticProps = async () => {
  const resAboutPhoto1: any = await contentfulClient.getEntries({
    content_type: "aboutPhoto1",
  });

  const resAboutPhoto2: any = await contentfulClient.getEntries({
    content_type: "aboutPhoto2",
  });
  const resProfilePhoto: any = await contentfulClient.getEntries({
    content_type: "profilePhoto",
  });
  return {
    props: {
      aboutPhoto1: resAboutPhoto1.items[0].fields.aboutPhoto1.fields.file.url,
      aboutPhoto2: resAboutPhoto2.items[0].fields.aboutPhoto2.fields.file.url,
    },
  };
};
export default AboutMePage;
