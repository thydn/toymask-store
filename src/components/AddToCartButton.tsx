"use client";

import { useCart } from "@/context/CartContext";

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: any;
    slug: string;
    stock: number;
  };
  isOutOfStock: boolean;
}

export default function AddToCartButton({ product, isOutOfStock }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      slug: product.slug,
      stock: product.stock,
      quantity: 1
    });
  };

  return (
    <button 
      disabled={isOutOfStock}
      onClick={handleAddToCart}
      className={`w-full py-5 font-black text-xl rounded-full hyperframe transition-all uppercase tracking-tight ${
        isOutOfStock 
        ? 'bg-surface-container-highest text-on-surface/40 cursor-not-allowed' 
        : 'bg-primary-container text-on-surface hard-shadow hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#1b1c15] active:translate-y-[2px] active:shadow-none'
      }`}
    >
      {isOutOfStock ? "Sector Sold Out" : "Secure This Artifact"}
    </button>
  );
}
