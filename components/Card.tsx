import Image from "next/image";
import Link from "next/link";

export default function Card({
  category,
  title,
  description,
  image,
  id,
}: {
  category?: string;
  title: string;
  description: string;
  image: string;
  id: string;
}) {
  return (
    <div className="flex flex-col items-center space-y-6">
      <Link href={id}>
        <Image src={`https:${image}`} alt={title} width={360} height={360} className="w-full" />
      </Link>

      {/* <span className="font-medium text-sm">{category}</span> */}
      <h3 className="text-3xl font-bold text-center">{title}</h3>
      <p className="text-center mb-auto">{description}</p>
      <div className="mt-auto">
        <Link href={id} className="text-sm border-b-2 border-b-main py-2 font-semibold">
          Read More
        </Link>
      </div>
    </div>
  );
}
