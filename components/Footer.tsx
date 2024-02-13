import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="space-y-16 container py-16">
      <div className="flex justify-between items-start sm:items-center gap-6 flex-col sm:flex-row">
        <div>
          <Link href="#">
            <Image src="/logo-footer.svg" alt="logo" width={130} height={30} className="" />
          </Link>
        </div>
        <div className="flex gap-x-14 gap-y-2 flex-col sm:flex-row">
          <Link href="#" className="font-semibold text-sm">
            About
          </Link>
          <Link href="#" className="font-semibold text-sm">
            Instagram
          </Link>
          <Link href="#" className="font-semibold text-sm">
            Facebook
          </Link>
          <Link href="#" className="font-semibold text-sm">
            Linkedin
          </Link>
        </div>
      </div>
      <div className="flex items-start flex-col space-y-3">
        <label htmlFor="email" className="font-semibold">
          Sign up for our newsletter
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="border-b border-b-main"
          placeholder="Enter your email"
        />
      </div>
    </div>
  );
}
