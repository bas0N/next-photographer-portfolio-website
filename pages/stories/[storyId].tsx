import React from "react";
import { contentfulClient } from "../../config/contentful";
import { useRouter } from "next/router";

function SingleStoryPage({ story }) {
  return (
    <div className="max-w-[1240px] mx-auto pt-16 text-black ">
      <div className="flex flex-col items-center">
        <h1>{story.fields.title}</h1>
        <p className="text-center pt-4">{story.fields.description}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 mx-4 mt-16 mb-8 gap-2">
          {story.fields.photos.map((photo) => (
            <img src={photo.fields.file.url} />
          ))}
        </div>
      </div>
    </div>
  );
}
export const getStaticPaths = async () => {
  const res: any = await contentfulClient.getEntries({
    content_type: "story",
  });

  return {
    paths: res.items.map((item) => ({
      params: {
        storyId: item.sys.space.sys.id,
      },
    })),
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  // const router = useRouter();
  const res: any = await contentfulClient.getEntry(params.storyId);

  return {
    props: {
      story: res,
    },
  };
};
export default SingleStoryPage;
