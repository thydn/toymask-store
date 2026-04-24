"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ProductCard from "@/components/ProductCard";
import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";

export default function Catalog() {
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("All Artifacts");
  const [loading, setLoading] = useState(true);

  const categories = ["All Artifacts", "Classic Wood", "Space Tech", "Deep Sea", "Archive"];

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] | order(_createdAt desc) {
        "_id": _id,
        name,
        "slug": slug.current,
        price,
        rating,
        image,
        category,
        stock,
        sku,
        isLimited,
        isHot
      }`;
      const data = await client.fetch(query);
      setAllProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const handleFilter = (category: string) => {
    setActiveCategory(category);
    if (category === "All Artifacts") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(allProducts.filter(p => 
        p.category.toLowerCase().includes(category.toLowerCase()) || 
        category.toLowerCase().includes(p.category.toLowerCase())
      ));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Header />
      <main className="flex-grow pt-20 pb-24">
        {/* Editorial Header Section */}
        <section className="px-6 pt-8 pb-4 max-w-7xl mx-auto w-full">
          <h2 className="font-display text-4xl font-extrabold leading-none tracking-tighter uppercase mb-2 text-on-surface">The Catalog</h2>
          <p className="font-body text-on-surface-variant font-medium">Curating rare playthings for the digital age.</p>
        </section>

        {/* Category Horizontal Scroll & Filter Trigger */}
        <div className="sticky top-[68px] z-40 bg-surface/90 backdrop-blur-sm py-4 border-b-2 border-on-surface flex items-center gap-3 px-6 overflow-hidden">
          <button className="flex-shrink-0 bg-on-surface text-surface p-2 rounded-lg hard-shadow active:translate-y-0.5 transition-transform">
            <span className="material-symbols-outlined block">tune</span>
          </button>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilter(category)}
                className={`flex-shrink-0 px-4 py-2 border-2 border-on-surface rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                  activeCategory === category
                    ? "bg-primary-container font-extrabold"
                    : "bg-surface opacity-60 hover:opacity-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <section className="px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {loading ? (
            Array(8).fill(0).map((_, i) => (
              <div key={i} className="aspect-square bg-surface-container-low animate-pulse rounded-xl border-2 border-on-surface/10"></div>
            ))
          ) : (
            filteredProducts.map((product: any) => (
              <ProductCard 
                key={product._id} 
                id={product._id} 
                {...product} 
              />
            ))
          )}
          {!loading && filteredProducts.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <p className="font-display text-xl uppercase opacity-40">No artifacts found in this sector.</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
