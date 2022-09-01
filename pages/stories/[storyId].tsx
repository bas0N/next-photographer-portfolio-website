import React from "react";
import { contentfulClient } from "../../config/contentful";
import { useRouter } from "next/router";

function SingleStoryPage({ story }) {
  return <div>{JSON.stringify(story)}</div>;
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
