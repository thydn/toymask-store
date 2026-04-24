import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

interface ProductCardProps {
  id: string;
  name: string;
  slug: string;
  price: number;
  rating: number;
  image: any;
  category: string;
  isLimited?: boolean;
  isHot?: boolean;
}

export default function ProductCard({
  id,
  name,
  slug,
  price,
  rating,
  image,
  category,
  isLimited,
  isHot,
}: ProductCardProps) {
  return (
    <div className="group flex flex-col h-full bg-surface border-2 border-on-background rounded-xl overflow-hidden hover:translate-y-[-4px] transition-transform">
      <div className="relative aspect-square overflow-hidden border-b-2 border-on-background">
        {image && (
          <Image
            src={urlForImage(image).url()}
            alt={name}
            fill
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        )}
        {(isLimited || isHot) && (
          <div className="absolute top-4 left-4 bg-primary-container text-on-background border-2 border-on-background px-3 py-1 font-black text-xs uppercase rounded-full">
            {isHot ? "Hot" : "Limited"}
          </div>
        )}
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display font-black text-xl uppercase tracking-tighter">
            <Link href={`/products/${slug}`}>{name}</Link>
          </h3>
          <div className="flex items-center gap-1 bg-surface-container-high px-2 py-0.5 rounded-full border-[1px] border-on-background">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="text-xs font-bold">{rating}</span>
          </div>
        </div>
        
        <p className="text-on-surface/60 text-sm font-medium mb-4 italic">
          {category} artifact. Serialized edition.
        </p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="font-display font-black text-2xl">${price}</span>
          <button className="bg-on-background text-surface p-2 rounded-full hard-shadow active:translate-y-0.5 transition-all">
            <span className="material-symbols-outlined">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
