import { Head } from "next/document";
import Link from "next/link";
import React from "react";
import Carousel from "../components/LandingPage/Carousel";
import LandingStories from "../components/LandingPage/LandingStories";
import { contentfulClient } from "../config/contentful";

function HomePage({ videoUrl, photos }) {
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
      <LandingStories />
      <Carousel photos={photos} />
    </main>
  );
}
export const getStaticProps = async () => {
  const resMovie: any = await contentfulClient.getEntries({
    content_type: "movie",
  });
  const resCarousel: any = await contentfulClient.getEntries({
    content_type: "carouselPhotos",
  });
  const resLandingPageStories: any = await contentfulClient.getEntries({
    content_type: "landingPageStories",
  });
  console.log(JSON.stringify(resLandingPageStories));
  // console.log("res");
  // console.log(resMovie);
  // console.log("videourl");
  // console.log(resMovie.items[0].fields.movie.fields.file.url);
  return {
    props: {
      videoUrl: resMovie.items[0].fields.movie.fields.file.url,
      photos: resCarousel.includes.Asset,
    },
  };
};

export default HomePage;
