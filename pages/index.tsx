import { Head } from "next/document";
import Link from "next/link";
import React from "react";
import { contentfulClient } from "../config/contentful";

function HomePage({ videoUrl }) {
  return (
    <main className="">
      <div className="w-full h-screen relative">
        <video
          className="w-full h-full object-cover fixed z-0"
          src={videoUrl}
          autoPlay
          loop
          muted
        />
        <div className="  absolute text-center top-[50%] mx-auto w-full ">
          <h1 className="text-white">PROFESJONALNY FOTOGRAF</h1>
          <Link href="/stories">
            <button className=" text-white mt-3 p-2 border-2"> Sprawdź</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
export const getStaticProps = async () => {
  const res: any = await contentfulClient.getEntries({
    content_type: "mainMovie",
  });
  //setStory(res);

  console.log("res");
  console.log(res);
  console.log("videourl");
  console.log(res.items[0].fields.moview.fields.file.url);
  return {
    props: {
      videoUrl: res.items[0].fields.moview.fields.file.url,
    },
  };
};

export default HomePage;
