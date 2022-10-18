import React from "react";
import { contentfulClient } from "../../config/contentful";
import { useRouter } from "next/router";
import Masonry from "react-masonry-css";

function SingleStoryPage({ story }) {
  return (
    <div className="max-w-[1240px] mx-auto pt-16 text-black ">
      <div className="flex flex-col items-center">
        <h1>{story.fields.title || "title"}</h1>
        <p className="text-center pt-4">
          {story.fields.description || "description"}
        </p>
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {story.fields.photos.map((photo) => (
            <img
              className="object-cover mb-3"
              src={"https:" + photo.fields.file.url}
            />
          ))}
        </Masonry>
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
        storyId: item.sys.id,
      },
    })),
    fallback: false,
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
