import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center container py-6">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={125} height={32} />
        </Link>
        <button className="rounded-3xl bg-main text-white py-3 px-10 font-medium">
          Book a Sonder
        </button>
      </div>
      <div className="bg-gradient">
        <div className="container flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 gap-6 sm:py-12">
          <div className="flex items-center space-x-2">
            <Image src="/search.svg" alt="search" width={12} height={12} />
            <input
              type="text"
              placeholder="Browse topics"
              className="bg-transparent outline-none placeholder:text-gray-200 text-lg text-white"
            />
          </div>
          <Link href="/" className="shrink-0">
            <Image src="/header.svg" alt="header-image" width={296} height={60} />
          </Link>
          <div className="items-center space-x-4 hidden sm:flex">
            <Link
              href="#"
              className="text-white font-medium before:content-[''] before:bg-white relative before:absolute before:left-0 before:bottom-0 before:h-[1px]  before:z-10 before:w-full before:transition before:scale-x-0 hover:before:scale-x-100 hover:before:origin-left before:origin-righ"
            >
              Travel
            </Link>
            <Link
              href="#"
              className="text-white font-medium before:content-[''] before:bg-white relative before:absolute before:left-0 before:bottom-0 before:h-[1px]  before:z-10 before:w-full before:transition before:scale-x-0 hover:before:scale-x-100 hover:before:origin-left before:origin-righ"
            >
              Design
            </Link>
            <Link
              href="#"
              className="text-white font-medium before:content-[''] before:bg-white relative before:absolute before:left-0 before:bottom-0 before:h-[1px]  before:z-10 before:w-full before:transition before:scale-x-0 hover:before:scale-x-100 hover:before:origin-left before:origin-righ"
            >
              Culture
            </Link>
            <Link
              href="#"
              className="text-white font-medium before:content-[''] before:bg-white relative before:absolute before:left-0 before:bottom-0 before:h-[1px]  before:z-10 before:w-full before:transition before:scale-x-0 hover:before:scale-x-100 hover:before:origin-left before:origin-righ"
            >
              News
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
