import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

export const revalidate = 0;

async function getLatestProducts() {
  const query = `*[_type == "product"] | order(_createdAt desc) [0...4] {
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

export default async function Home() {
  const latestDrops = await getLatestProducts();

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section: The Hyperframe */}
        <section className="px-6 py-12 md:py-24 max-w-7xl mx-auto">
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-0 border-2 border-on-background rounded-xl overflow-hidden bg-surface-container-low">
            <div className="md:col-span-7 p-8 md:p-16 flex flex-col justify-center items-start z-10">
              <span className="bg-secondary-container text-on-secondary-container px-4 py-1 border-2 border-on-background font-bold text-sm mb-6 rounded-full uppercase tracking-widest">High-End Curations</span>
              <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[0.9] tracking-tighter mb-8">
                UNLOCK THE <br/> <span className="text-primary-container stroke-text">VAULT OF JOY</span>
              </h1>
              <p className="text-xl md:text-2xl text-on-surface/80 max-w-lg mb-10 leading-relaxed">
                Where architectural precision meets childhood wonder. Discover our limited-edition artisanal toy gallery.
              </p>
              <Link href="/products" className="bg-primary-container text-on-background border-2 border-on-background px-8 py-4 rounded-full font-display font-black text-xl uppercase hard-shadow-hover transition-all inline-block">
                Explore Collections
              </Link>
            </div>
            <div className="md:col-span-5 h-[400px] md:h-auto relative bg-surface-container-highest border-l-0 md:border-l-2 border-on-background overflow-hidden">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsBBb3uI2e8qGguEmml0jmVvEgZS5xHn8dE2qqoIW7i1Q8AC4HHtCRcW-G7iNGTOU4lb3adH-II6qS-q_w5LPENj732ZQuOH45Rb4FhjyWYoee76sbPNI5g3IYY_S09_c78jN7qyT7V54_BybRzQXHLeZUO2-QtvGsGUuRjX9rGiEEhAcSWgTobWZUNxNZvHtxCNMhLhgMMmWDgtx6pXIscNIT8s7hvuyaSw8zTPyxfQEIsAJBLqFkQ_Ld8fQetx7avnKVruI1bko" alt="Hero" />
            </div>
          </div>
        </section>

        {/* Featured Collections: Asymmetric Bento */}
        <section className="px-6 py-16 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-display font-black text-4xl uppercase tracking-tighter">The Curated Sets</h2>
                <p className="text-on-surface/60 font-medium">Bespoke categories for the serious collector.</p>
              </div>
              <button className="text-on-surface font-display font-bold border-b-2 border-on-background pb-1 hover:text-primary transition-colors">View All Series</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Collection Card 1 */}
              <div className="group relative overflow-hidden rounded-xl border-2 border-on-background bg-surface-container-high hard-shadow-hover transition-all">
                <div className="aspect-[4/5] overflow-hidden">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFWimXFQCqjGGka8lV_i5pumOpaHPGmzb2aBkMRnizYHJx1isqSZLeSS-SsRwPY-jKFIxII7_cXKK6xnLCpj2lSp5Y1dWb3a4s83CYDqnmuh8qDDdOsqLDhiNcrP0TJ3g6r7SK94xdLQvHz0oN3bxWFnlOT0BmD1khUjSODEOJgPS09tYSeOKsAzd4fLHE4soLHgxtpR5Lte0ZS8VTqHWilw6A9-I5AyXQOSQJbUqFegDdaxo-F9RtLSlCdbAfKRzHbjHeQ7mw5EU" alt="Classic Wood" />
                </div>
                <div className="p-6 border-t-2 border-on-background bg-surface">
                  <h3 className="font-display font-bold text-2xl uppercase">Classic Wood</h3>
                  <p className="text-sm text-on-surface/60 mb-4 italic">Sustainable Nordic Heritage</p>
                  <span className="material-symbols-outlined text-3xl">arrow_right_alt</span>
                </div>
                <Link className="absolute inset-0 z-20" href="/products"></Link>
              </div>

              {/* Collection Card 2 */}
              <div className="group relative overflow-hidden rounded-xl border-2 border-on-background bg-secondary-container hard-shadow-hover transition-all">
                <div className="aspect-[4/5] overflow-hidden">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM1t6F1J-mObpA01nnqtmR8mgLly3Q3z0D8B0mZszduY6UUIhccjgVTrztPIlygwGeOr0dKwnbKf1xE2052PzJAxxkZw1XTDUNbRnhBC3qKEvV8bkQ31BmRGiWzKwokmYsTgqmkm1ctzKdlPt-IBNu4-7m0oePv4Yjvqs18bVQmg-CmIUyUtpSodsESDcn8XqUrmJJ1wvYrGuWjJuB03aq3a9aj3cXgo2phmFKGB_2EMNlOCC-bq0P3IbdFXF4oYchfh9pRybsSUw" alt="Space Tech" />
                </div>
                <div className="p-6 border-t-2 border-on-background bg-surface">
                  <h3 className="font-display font-bold text-2xl uppercase">Space Tech</h3>
                  <p className="text-sm text-on-surface/60 mb-4 italic">Interstellar Precision Models</p>
                  <span className="material-symbols-outlined text-3xl">arrow_right_alt</span>
                </div>
                <Link className="absolute inset-0 z-20" href="/products"></Link>
              </div>

              {/* Collection Card 3 */}
              <div className="group relative overflow-hidden rounded-xl border-2 border-on-background bg-primary-container hard-shadow-hover transition-all">
                <div className="aspect-[4/5] overflow-hidden">
                  <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHD31LiJtouYXxnKcRpc5DyFnSNVE6gaLTtMwb_lSQJsalarUoDKSG1xtY-wWxZv5GW50cOfBmWnfvxAgLdHFcdKVSIhws0OhWSnbQGFl93WVQ16amOiz8Kf4BSvlnVUZ-KkemLIF1eSUflxEM8C8YjgHz4qR_AyoPNGKaJ2ryreRCIZnO7KDYt25qiaBgc6mhVQ4oAmpMu_WEA7731lW6BG99kJjNw2vql6212FfOPrEz6bv-q-s4bWdlT1wSvpFIzfsxRjsOoGU" alt="Deep Sea Wonders" />
                </div>
                <div className="p-6 border-t-2 border-on-background bg-surface">
                  <h3 className="font-display font-bold text-2xl uppercase">Deep Sea Wonders</h3>
                  <p className="text-sm text-on-surface/60 mb-4 italic">Abyssal Mechanical Life</p>
                  <span className="material-symbols-outlined text-3xl">arrow_right_alt</span>
                </div>
                <Link className="absolute inset-0 z-20" href="/products"></Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Drops Grid */}
        <section className="px-6 py-16 bg-surface-container-low border-y-2 border-on-background">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-2 w-12 bg-primary-container border-2 border-on-background"></div>
              <h2 className="font-display font-black text-4xl uppercase tracking-tighter italic">Hot in the Vault</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {latestDrops.map((product: any) => (
                <ProductCard key={product._id} id={product._id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto bg-on-background text-surface rounded-xl p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 hard-shadow">
            <div className="md:w-1/2">
              <h2 className="font-display font-black text-5xl md:text-7xl uppercase mb-6 leading-none tracking-tighter">Don't Miss <br /> The Next Drop</h2>
              <p className="text-surface/60 text-lg md:text-xl font-medium leading-relaxed">Join our encrypted transmission for launch alerts and restock notifications.</p>
            </div>
            <div className="md:w-1/3 w-full">
              <div className="flex flex-col gap-4">
                <input type="email" placeholder="AGENT@EMAIL.COM" className="bg-transparent border-b-2 border-surface/30 p-4 font-display font-bold text-xl focus:border-surface outline-none uppercase placeholder:opacity-20" />
                <button className="bg-primary-container text-on-background py-5 rounded-full font-display font-black uppercase text-xl hover:scale-105 transition-transform active:scale-95">Join The Inner Circle</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
