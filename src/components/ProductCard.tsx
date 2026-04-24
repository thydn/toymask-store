import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: any;
  rating: number;
  isLimited?: boolean;
  isHot?: boolean;
  slug?: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  rating,
  isLimited,
  isHot,
}: ProductCardProps) {
  return (
    <div className="bg-surface-container-lowest border-2 border-on-surface rounded-xl overflow-hidden group active:translate-y-0.5 transition-transform">
      <Link href={`/products/${slug || id}`}>
        <div className="aspect-square relative overflow-hidden bg-surface-container-low border-b-2 border-on-surface p-2">
          <img
            src={image?.asset ? urlForImage(image).url() : image}
            alt={name}
            className="w-full h-full object-cover rounded-lg"
          />
          {isLimited && (
            <span className="absolute top-3 left-3 bg-secondary-container border-2 border-on-surface px-2 py-0.5 text-[10px] font-black uppercase rounded-sm">
              Limited
            </span>
          )}
          {isHot && (
            <span className="absolute top-3 left-3 bg-primary-container border-2 border-on-surface px-2 py-0.5 text-[10px] font-black uppercase rounded-sm">
              Hot
            </span>
          )}
        </div>
      </Link>
      <div className="p-3">
        <h3 className="font-display font-extrabold text-sm leading-tight uppercase truncate">
          <Link href={`/products/${slug || id}`}>{name}</Link>
        </h3>
        <div className="flex items-center gap-1 mt-1 mb-3">
          <span
            className="material-symbols-outlined text-xs"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          <span className="text-[10px] font-black">{rating.toFixed(1)}</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="font-display font-black text-lg">${price}</span>
          <button className="bg-primary-container border-2 border-on-surface w-8 h-8 rounded-full flex items-center justify-center active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-sm">add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
