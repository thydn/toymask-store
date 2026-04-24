import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";

export default function Catalog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pb-24 md:pb-0">
        <section className="px-6 pt-8 pb-4">
          <h2 className="font-display text-4xl font-extrabold leading-none tracking-tighter uppercase mb-2">
            The Catalog
          </h2>
          <p className="font-body text-on-surface-variant font-medium">
            Curating rare playthings for the digital age.
          </p>
        </section>

        {/* Filter Section */}
        <div className="sticky top-[68px] z-40 bg-surface/90 backdrop-blur-sm py-4 border-b-2 border-on-surface flex items-center gap-3 px-6 overflow-hidden">
          <button className="flex-shrink-0 bg-on-surface text-surface p-2 rounded-lg hard-shadow active-hard-shadow">
            <span className="material-symbols-outlined block">tune</span>
          </button>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
            <span className="flex-shrink-0 px-4 py-2 bg-primary-container border-2 border-on-surface rounded-full text-sm font-extrabold uppercase tracking-wider">
              All Artifacts
            </span>
            <span className="flex-shrink-0 px-4 py-2 bg-surface border-2 border-on-surface rounded-full text-sm font-bold uppercase tracking-wider opacity-60">
              Classic Wood
            </span>
            <span className="flex-shrink-0 px-4 py-2 bg-surface border-2 border-on-surface rounded-full text-sm font-bold uppercase tracking-wider opacity-60">
              Space Tech
            </span>
            <span className="flex-shrink-0 px-4 py-2 bg-surface border-2 border-on-surface rounded-full text-sm font-bold uppercase tracking-wider opacity-60">
              Deep Sea
            </span>
          </div>
        </div>

        {/* Product Grid */}
        <section className="px-4 py-6 grid grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </section>

        {/* Pagination */}
        <div className="px-6 py-12 flex justify-between items-center gap-4">
          <button className="flex-1 py-4 border-2 border-on-surface font-display font-black uppercase tracking-widest text-sm bg-surface opacity-40 cursor-not-allowed">
            Previous
          </button>
          <button className="flex-1 py-4 border-2 border-on-surface font-display font-black uppercase tracking-widest text-sm bg-primary-container hard-shadow active-hard-shadow">
            Next
          </button>
        </div>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
