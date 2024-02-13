import { getPage } from "@/lib/actions";
import Image from "next/image";
import { Entry } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

const dtrOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
      if (node.data?.target?.fields?.image?.fields?.file?.url)
        return (
          <Image
            src={`https:${node.data?.target?.fields?.image?.fields?.file?.url}`}
            alt={node.data?.target?.fields?.image?.fields?.title}
            className="w-full aspect-video object-cover rounded-3xl"
            width={node.data.target.fields.image.fields.file.details.image.width}
            height={node.data.target.fields.image.fields.file.details.image.height}
          />
        );
    },
  },
};

export default async function page({ params: { id } }: { params: { id: string } }) {
  const post: Entry = await getPage(id);
  if (!post) return null;

  return (
    <div className="">
      <div className="flex flex-col">
        <div className="bg-gradient py-6">
          <div className="container flex items-center flex-col text-white space-y-2">
            <h2 className="text-center text-4xl font-bold max-w-3xl">
              {post.fields.title as string}
            </h2>
            <p className="text-center text-sm font-semibold">
              {post.fields.publishedDate as string}
            </p>
          </div>
        </div>
        <div className="relative after:absolute after:content-[''] after:top-0 after:left-0 after:right-0 after:w-full after:h-1/2 after:bg-gradient">
          <div className="container flex items-center justify-center w-full">
            <Image
              /** @ts-ignore */
              src={`https:${post.fields.featuredImage?.fields.file.url as string}`}
              alt={post.fields.title as string}
              height={600}
              width={600}
              className="object-cover z-10 relative"
            />
          </div>
        </div>
        <div className="container text-center">
          <p className="text-2xl my-4 font-medium">{post.fields.shortDescription as string}</p>
        </div>
        <div className="max-w-5xl mx-auto text-base sm:text-xl flex flex-col space-y-5 pros">
          {documentToReactComponents(post.fields.content as any, dtrOptions)}
        </div>
      </div>
    </div>
  );
}
