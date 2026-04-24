import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ProductCard from "@/components/ProductCard";
import { client } from "@/sanity/lib/client";

export const revalidate = 0; // Luôn lấy dữ liệu mới nhất

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
  const categories = ["All", "Classic Wood", "Space Tech", "Deep Sea", "Archive"];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-20">
        <div className="px-6 mb-8 max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <h1 className="text-6xl font-display font-black uppercase tracking-tighter">
              The Vault <br /> <span className="text-secondary">Catalog</span>
            </h1>
            <p className="max-w-[200px] text-[10px] font-black uppercase tracking-[0.2em] leading-relaxed opacity-40 text-right hidden md:block">
              All listed artifacts are certified original ToyMask productions. 
              Limited runs are marked with secure vault tags.
            </p>
          </div>

          <div className="flex items-center gap-4 mb-12">
            <button className="bg-on-surface text-surface p-3 rounded-xl hard-shadow">
              <span className="material-symbols-outlined block">tune</span>
            </button>
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
              {categories.map((category, index) => (
                <span
                  key={category}
                  className={`flex-shrink-0 px-4 py-2 border-2 border-on-surface rounded-full text-sm font-bold uppercase tracking-wider ${
                    index === 0
                      ? "bg-primary-container"
                      : "bg-surface opacity-60"
                  }`}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {allProducts.map((product: any) => (
              <ProductCard key={product._id} id={product._id} {...product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
