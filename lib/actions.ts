import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export const getBlogPosts = async () => {
  const response = await client.getEntries({
    content_type: "pageBlogPost",
  });

  return response.items;
};

export async function getPage(slug: string) {
  const query = {
    // limit: 1,
    // include: 10,
    // locale: params.locale,
    "fields.slug": slug,
    content_type: "pageBlogPost",
  };
  const {
    items: [page],
  } = await client.getEntries(query);
  return page || null;
}
