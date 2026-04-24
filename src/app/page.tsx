import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";
import Link from "next/link";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pb-24 md:pb-0">
        {/* Hero Section */}
        <section className="px-6 py-12 flex flex-col gap-6 bg-surface">
          <div className="hyperframe bg-primary-container p-8 rounded-3xl hard-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <h2 className="font-display text-6xl font-black leading-none tracking-tighter uppercase mb-4">
              Unlock the <br /> Vault of Joy
            </h2>
            <p className="font-body text-lg font-bold mb-8 max-w-[280px] leading-tight">
              Curated precision play artifacts for serious collectors.
            </p>
            <Link
              href="/products"
              className="inline-block bg-on-surface text-surface px-8 py-4 rounded-full font-display font-black uppercase tracking-widest text-sm hard-shadow active-hard-shadow"
            >
              Enter Archive
            </Link>
          </div>
        </section>

        {/* Featured Section */}
        <section className="px-6 py-12">
          <div className="flex justify-between items-end mb-8">
            <h3 className="font-display text-3xl font-black uppercase tracking-tighter">
              New Drops
            </h3>
            <Link
              href="/products"
              className="font-body text-sm font-bold uppercase underline underline-offset-4"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* Newsletter / Branding */}
        <section className="px-6 py-12 bg-surface-container-low border-y-2 border-on-surface">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
              Engineering Specs
            </span>
            <h4 className="font-display text-4xl font-black uppercase leading-none tracking-tighter">
              The Hyperframe Standard
            </h4>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Every prototype in our archive is tested for structural integrity
              and tactile feedback. We don't just sell toys; we curate
              engineering marvels.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
