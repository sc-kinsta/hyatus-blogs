"use client";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { getBlogPosts } from "@/lib/actions";
export default function Hero({ posts }: any) {
  return (
    <div className="relative after:absolute after:content-[''] after:top-0 after:left-0 after:right-0 after:w-full after:h-1/2 after:bg-gradient">
      <div className="sm:container">
        <Swiper modules={[Navigation, A11y]} slidesPerView={1} navigation loop className="">
          {posts.slice(0, 3).map((post: any, index: number) => (
            <SwiperSlide key={index} className="">
              <div
                className="bg-cover bg-no-repeat bg-center flex items-center justify-center h-[350px] sm:h-[630px]"
                style={{
                  // @ts-ignore
                  backgroundImage: `url(${post.fields.featuredImage?.fields.file.url})`,
                }}
              >
                <div className="flex items-center space-y-6 flex-col bg-white rounded-tr-[5rem] p-6">
                  <span className="font-medium">Travel</span>
                  <h2 className="font-bold text-2xl sm:text-3xl max-w-xs sm:max-w-lg text-center">
                    {post.fields.title as string}
                  </h2>
                  <Link
                    href={post.fields.slug}
                    className="border-b-2 py-2 border-b-main font-medium text-sm"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
