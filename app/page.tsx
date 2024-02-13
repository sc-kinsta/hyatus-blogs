import Card from "@/components/Card";
import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/lib/actions";

export default async function Home({
  searchParams: { n },
}: {
  searchParams: {
    n: number;
  };
}) {
  const allPosts = await getBlogPosts();
  if (n === undefined) {
    n = 9;
  }
  return (
    <>
      <Hero posts={allPosts} />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 md:grid-cols-2  container my-12">
        {allPosts.slice(0, n).map((post, index) => (
          <Card
            key={index}
            title={post.fields.title as string}
            description={post.fields.shortDescription as string}
            /** @ts-ignore */
            image={post.fields?.featuredImage?.fields?.file?.url as string}
            id={post.fields.slug as string}
          />
        ))}
      </div>
      <hr className="container" />
      <Link href={`?n=${+n + 9}`} scroll={false} className="mx-auto my-6">
        <button className="bg-main text-white rounded-3xl font-semibold text-sm px-6 py-2.5">
          Older posts
        </button>
      </Link>

      <div className="py-24 bg-gradient">
        <div className="container flex flex-col items-center space-y-12">
          <div className="flex justify-between w-full flex-wrap gap-5">
            <Image
              src="/new-york.webp"
              alt="new york image"
              width={364}
              height={437}
              className=""
            />
            <Image src="/london.webp" alt="london image" width={364} height={437} className="" />
            <Image
              src="/los-angeles.webp"
              alt="los angeles image"
              width={364}
              height={437}
              className=""
            />
          </div>
          <p className="text-2xl text-center font-semibold text-white max-w-2xl">
            We&apos;re building an entirely new way to stay in your favorite neighborhoods around
            the world.
          </p>

          <button className="bg-main text-white rounded-3xl font-semibold text-sm px-6 py-2.5">
            Explore further
          </button>
        </div>
      </div>
    </>
  );
}
