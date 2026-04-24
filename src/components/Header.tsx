"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";

export default function Header() {
  const { cartCount } = useCart();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 border-b-2 border-on-background bg-surface/80 backdrop-blur-md h-20 flex justify-between items-center px-6 py-4">
      <div className="flex items-center gap-4">
        <button className="material-symbols-outlined text-on-surface p-2 hover:bg-primary-container transition-colors rounded-lg">
          menu
        </button>
        <Link
          href="/"
          className="text-3xl font-black text-on-surface tracking-tighter font-display uppercase"
        >
          ToyMask
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-8 font-display font-bold tracking-tight uppercase">
        <Link
          className="text-on-surface hover:text-primary transition-colors px-1 py-1"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-on-surface/60 hover:text-on-surface transition-colors px-1 py-1"
          href="/products"
        >
          Collections
        </Link>
        <Link
          className="text-on-surface/60 hover:text-on-surface transition-colors px-1 py-1"
          href="/products"
        >
          Catalog
        </Link>
        <Link
          className="bg-primary-container text-on-surface border-2 border-on-background px-4 py-1.5 rounded-full hard-shadow-hover transition-all text-xs flex items-center gap-2"
          href="/cart"
        >
          The Vault {mounted && cartCount > 0 && <span>({cartCount.toString().padStart(2, '0')})</span>}
        </Link>
      </nav>
      <div className="flex items-center gap-2">
        <button className="material-symbols-outlined p-2 hover:bg-primary-container transition-colors rounded-full">
          search
        </button>
        <div className="relative">
          <Link
            href="/cart"
            className="material-symbols-outlined p-2 hover:bg-primary-container transition-colors rounded-full"
          >
            shopping_cart
          </Link>
          {mounted && cartCount > 0 && (
            <span className="absolute top-1 right-1 bg-primary-container text-on-surface text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-full border-[1px] border-on-background">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
