import { createClient } from "contentful";

export const contentfulClient = createClient({
  space: process.env.REACT_APP_NOWAK_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.REACT_APP_NOWAK_CONTENTFUL_DELIVERY,
});
