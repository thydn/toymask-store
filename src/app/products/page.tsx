import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ProductCard from "@/components/ProductCard";
import { client } from "@/sanity/lib/client";

export const revalidate = 0;

async function getAllProducts() {
  const query = `*[_type == "product"] | order(_createdAt desc) {
    "_id": _id,
    name,
    "slug": slug.current,
    price,
    rating,
    image,
    category,
    isLimited,
    isHot
  }`;
  return await client.fetch(query);
}

export default async function Catalog() {
  const allProducts = await getAllProducts();
  const categories = ["All Artifacts", "Classic Wood", "Space Tech", "Deep Sea", "Archive"];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-20 pb-24">
        {/* Editorial Header Section */}
        <section className="px-6 pt-8 pb-4 max-w-7xl mx-auto w-full">
          <h2 className="font-display text-4xl font-extrabold leading-none tracking-tighter uppercase mb-2">The Catalog</h2>
          <p className="font-body text-on-surface-variant font-medium">Curating rare playthings for the digital age.</p>
        </section>

        {/* Category Horizontal Scroll & Filter Trigger */}
        <div className="sticky top-[68px] z-40 bg-surface/90 backdrop-blur-sm py-4 border-b-2 border-on-surface flex items-center gap-3 px-6 overflow-hidden">
          <button className="flex-shrink-0 bg-on-surface text-surface p-2 rounded-lg hard-shadow active-hard-shadow">
            <span className="material-symbols-outlined block">tune</span>
          </button>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
            {categories.map((category, index) => (
              <span
                key={category}
                className={`flex-shrink-0 px-4 py-2 border-2 border-on-surface rounded-full text-sm font-bold uppercase tracking-wider ${
                  index === 0
                    ? "bg-primary-container font-extrabold"
                    : "bg-surface opacity-60"
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <section className="px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {allProducts.map((product: any) => (
            <ProductCard 
              key={product._id} 
              id={product._id} 
              {...product} 
            />
          ))}
        </section>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
