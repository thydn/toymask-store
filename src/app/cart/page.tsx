"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice, cartCount } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Header />
      <main className="flex-grow pb-24 md:pb-12 pt-20">
        <section className="max-w-4xl mx-auto px-6 pt-8 space-y-12">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="font-display text-3xl tracking-tight text-on-surface uppercase font-black">
              Stored Assets{" "}
              <span className="text-lg opacity-50 font-mono">({cartCount.toString().padStart(2, '0')})</span>
            </h2>
            <div className="text-sm font-mono uppercase tracking-widest opacity-60">
              Status: {cartCount > 0 ? "Verified" : "Empty"}
            </div>
          </div>

          <div className="space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-20 border-2 border-dashed border-on-surface/20 rounded-xl">
                <p className="font-display text-xl uppercase opacity-40 mb-6">Your vault is empty</p>
                <Link href="/products" className="bg-primary-container text-on-background border-2 border-on-background px-6 py-3 rounded-full font-bold uppercase hover:hard-shadow transition-all inline-block">
                  Browse Catalog
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-surface-container-lowest border-2 border-on-surface rounded-xl p-4 flex gap-6 hard-shadow group"
                >
                  <div className="w-32 h-32 flex-shrink-0 bg-surface-container rounded-lg overflow-hidden border-2 border-on-surface/10 relative">
                    {item.image && (
                      <Image
                        src={urlForImage(item.image).url()}
                        alt={item.name}
                        fill
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-grow flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-display text-xl font-black uppercase">
                          {item.name}
                        </h3>
                        <p className="text-xs font-mono uppercase text-on-surface-variant opacity-70 mt-1">
                          Series: Artifact / SKU: {item.id.slice(-6).toUpperCase()}
                        </p>
                      </div>
                      <span className="font-mono text-xl font-bold">
                        ${item.price}
                      </span>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="flex items-center border-2 border-on-surface rounded-full overflow-hidden">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-3 py-1 hover:bg-secondary-container transition-colors border-r-2 border-on-surface"
                        >
                          <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <span className="px-4 py-1 font-mono font-bold">
                          {item.quantity.toString().padStart(2, '0')}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-3 py-1 hover:bg-secondary-container transition-colors border-l-2 border-on-surface"
                        >
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 hover:underline"
                      >
                        <span className="material-symbols-outlined text-sm">delete</span>{" "}
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Summary Section */}
          {cart.length > 0 && (
            <div className="bg-on-background text-surface rounded-2xl p-8 space-y-6 hard-shadow">
              <div className="space-y-4">
                <div className="flex justify-between items-center opacity-60 font-mono text-sm uppercase">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center opacity-60 font-mono text-sm uppercase">
                  <span>Shipping Archive</span>
                  <span>$12.00</span>
                </div>
                <div className="h-px bg-surface/20"></div>
                <div className="flex justify-between items-center text-2xl font-display font-black uppercase">
                  <span>Total</span>
                  <span className="text-primary-container">${(totalPrice + 12).toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full py-4 bg-primary-container text-on-background font-display font-black uppercase tracking-widest rounded-xl border-2 border-surface active:scale-95 transition-transform">
                Execute Checkout
              </button>
            </div>
          )}
        </section>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
