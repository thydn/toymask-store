"use client";

import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { useCart } from "@/context/CartContext";

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
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id,
      name,
      price,
      image,
      slug,
      quantity: 1
    });
  };

  return (
    <div className="bg-surface-container-lowest border-2 border-on-surface rounded-xl overflow-hidden group active:translate-y-0.5 transition-transform h-full flex flex-col">
      <div className="aspect-square relative overflow-hidden bg-surface-container-low border-b-2 border-on-surface p-2">
        {image && (
          <Image
            src={urlForImage(image).url()}
            alt={name}
            fill
            className="w-full h-full object-cover rounded-lg"
          />
        )}
        {(isLimited || isHot) && (
          <span className={`absolute top-3 left-3 border-2 border-on-surface px-2 py-0.5 text-[10px] font-black uppercase rounded-sm ${isHot ? 'bg-primary-container' : 'bg-secondary-container'}`}>
            {isHot ? "Hot" : "Limited"}
          </span>
        )}
      </div>
      
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="font-display font-extrabold text-sm leading-tight uppercase truncate mb-1">
          <Link href={`/products/${slug}`}>{name}</Link>
        </h3>
        
        <div className="flex items-center gap-1 mb-3">
          <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="text-[10px] font-black">{rating}</span>
        </div>
        
        <div className="flex items-center justify-between gap-2 mt-auto">
          <span className="font-display font-black text-lg">${price}</span>
          <button 
            onClick={handleAddToCart}
            className="bg-primary-container border-2 border-on-surface w-8 h-8 rounded-full flex items-center justify-center active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined text-sm">add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
