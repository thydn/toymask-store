import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";
import Link from "next/link";

export default function Home() {
  // Logic: Lấy 4 sản phẩm mới nhất (nằm ở cuối danh sách JSON)
  const latestDrops = [...products].reverse().slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20 pb-24 md:pb-0">
        {/* Hero Section */}
        <section className="px-6 py-12 md:py-24 max-w-7xl mx-auto">
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-0 border-2 border-on-background rounded-xl overflow-hidden bg-surface-container-low">
            <div className="md:col-span-7 p-8 md:p-16 flex flex-col justify-center items-start z-10">
              <span className="bg-secondary-container text-on-secondary-container px-4 py-1 border-2 border-on-background font-bold text-sm mb-6 rounded-full uppercase tracking-widest">
                High-End Curations
              </span>
              <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[0.9] tracking-tighter mb-8 uppercase">
                UNLOCK THE <br />{" "}
                <span className="text-primary-container text-stroke">
                  VAULT OF JOY
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-on-surface/80 max-w-lg mb-10 leading-relaxed">
                Where architectural precision meets childhood wonder. Discover
                our limited-edition artisanal toy gallery.
              </p>
              <Link
                href="/products"
                className="bg-primary-container text-on-background border-2 border-on-background px-8 py-4 rounded-full font-display font-black text-xl uppercase hard-shadow-hover transition-all inline-block"
              >
                Explore Collections
              </Link>
            </div>
            <div className="md:col-span-5 h-[400px] md:h-auto relative bg-surface-container-highest border-l-0 md:border-l-2 border-on-background overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsBBb3uI2e8qGguEmml0jmVvEgZS5xHn8dE2qqoIW7i1Q8AC4HHtCRcW-G7iNGTOU4lb3adH-II6qS-q_w5LPENj732ZQuOH45Rb4FhjyWYoee76sbPNI5g3IYY_S09_c78jN7qyT7V54_BybRzQXHLeZUO2-QtvGsGUuRjX9rGiEEhAcSWgTobWZUNxNZvHtxCNMhLhgMMmWDgtx6pXIscNIT8s7hvuyaSw8zTPyxfQEIsAJBLqFkQ_Ld8fQetx7avnKVruI1bko"
                alt="Modern designer toy"
              />
            </div>
          </div>
        </section>

        {/* Featured Collections: Asymmetric Bento */}
        <section className="px-6 py-16 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-display font-black text-4xl uppercase tracking-tighter">
                  The Curated Sets
                </h2>
                <p className="text-on-surface/60 font-medium">
                  Bespoke categories for the serious collector.
                </p>
              </div>
              <button className="text-on-surface font-display font-bold border-b-2 border-on-background pb-1 hover:text-primary transition-colors uppercase text-sm">
                View All Series
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Collection Card 1 */}
              <div className="group relative overflow-hidden rounded-xl border-2 border-on-background bg-surface-container-high hard-shadow-hover transition-all">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFWimXFQCqjGGka8lV_i5pumOpaHPGmzb2aBkMRnizYHJx1isqSZLeSS-SsRwPY-jKFIxII7_cXKK6xnLCpj2lSp5Y1dWb3a4s83CYDqnmuh8qDDdOsqLDhiNcrP0TJ3g6r7SK94xdLQvHz0oN3bxWFnlOT0BmD1khUjSODEOJgPS09tYSeOKsAzd4fLHE4soLHgxtpR5Lte0ZS8VTqHWilw6A9-I5AyXQOSQJbUqFegDdaxo-F9RtLSlCdbAfKRzHbjHeQ7mw5EU"
                    alt="Classic Wood"
                  />
                </div>
                <div className="p-6 border-t-2 border-on-background bg-surface">
                  <h3 className="font-display font-bold text-2xl uppercase">
                    Classic Wood
                  </h3>
                  <p className="text-sm text-on-surface/60 mb-4 italic">
                    Sustainable Nordic Heritage
                  </p>
                  <span className="material-symbols-outlined text-3xl">
                    arrow_right_alt
                  </span>
                </div>
              </div>
              {/* Collection Card 2 */}
              <div className="group relative overflow-hidden rounded-xl border-2 border-on-background bg-secondary-container hard-shadow-hover transition-all">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM1t6F1J-mObpA01nnqtmR8mgLly3Q3z0D8B0mZszduY6UUIhccjgVTrztPIlygwGeOr0dKwnbKf1xE2052PzJAxxkZw1XTDUNbRnhBC3qKEvV8bkQ31BmRGiWzKwokmYsTgqmkm1ctzKdlPt-IBNu4-7m0oePv4Yjvqs18bVQmg-CmIUyUtpSodsESDcn8XqUrmJJ1wvYrGuWjJuB03aq3a9aj3cXgo2phmFKGB_2EMNlOCC-bq0P3IbdFXF4oYchfh9pRybsSUw"
                    alt="Space Tech"
                  />
                </div>
                <div className="p-6 border-t-2 border-on-background bg-surface">
                  <h3 className="font-display font-bold text-2xl uppercase">
                    Space Tech
                  </h3>
                  <p className="text-sm text-on-surface/60 mb-4 italic">
                    Interstellar Precision Models
                  </p>
                  <span className="material-symbols-outlined text-3xl">
                    arrow_right_alt
                  </span>
                </div>
              </div>
              {/* Collection Card 3 */}
              <div className="group relative overflow-hidden rounded-xl border-2 border-on-background bg-primary-container hard-shadow-hover transition-all">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHD31LiJtouYXxnKcRpc5DyFnSNVE6gaLTtMwb_lSQJsalarUoDKSG1xtY-wWxZv5GW50cOfBmWnfvxAgLdHFcdKVSIhws0OhWSnbQGFl93WVQ16amOiz8Kf4BSvlnVUZ-KkemLIF1eSUflxEM8C8YjgHz4qR_AyoPNGKaJ2ryreRCIZnO7KDYt25qiaBgc6mhVQ4oAmpMu_WEA7731lW6BG99kJjNw2vql6212FfOPrEz6bv-q-s4bWdlT1wSvpFIzfsxRjsOoGU"
                    alt="Deep Sea"
                  />
                </div>
                <div className="p-6 border-t-2 border-on-background bg-surface">
                  <h3 className="font-display font-bold text-2xl uppercase">
                    Deep Sea Wonders
                  </h3>
                  <p className="text-sm text-on-surface/60 mb-4 italic">
                    Abyssal Mechanical Life
                  </p>
                  <span className="material-symbols-outlined text-3xl">
                    arrow_right_alt
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Sellers: Product Grid */}
        <section className="px-6 py-16 bg-surface-container-low border-y-2 border-on-background">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-2 w-12 bg-primary-container border-2 border-on-background"></div>
              <h2 className="font-display font-black text-4xl uppercase tracking-tighter italic">
                Hot in the Vault
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {latestDrops.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Brand Trust */}
        <section className="px-6 py-20 bg-surface">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-8 border-2 border-on-background rounded-xl bg-surface-container-high hard-shadow">
              <span className="material-symbols-outlined text-6xl mb-4 text-secondary">
                verified_user
              </span>
              <h3 className="font-display font-black text-2xl uppercase mb-2">
                Safe & Non-Toxic
              </h3>
              <p className="text-on-surface/70">
                Certified organic materials and surgical-grade finishes for
                peace of mind.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 border-2 border-on-background rounded-xl bg-primary-container hard-shadow">
              <span className="material-symbols-outlined text-6xl mb-4 text-on-background">
                local_shipping
              </span>
              <h3 className="font-display font-black text-2xl uppercase mb-2">
                Fast Shipping
              </h3>
              <p className="text-on-surface/70">
                Secure, tracked priority handling for all orders worldwide
                within 48 hours.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 border-2 border-on-background rounded-xl bg-surface-container-high hard-shadow">
              <span className="material-symbols-outlined text-6xl mb-4 text-primary">
                workspace_premium
              </span>
              <h3 className="font-display font-black text-2xl uppercase mb-2">
                Lifetime Warranty
              </h3>
              <p className="text-on-surface/70">
                We stand by our craftsmanship. If it breaks, we replace the soul
                of the toy.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="px-6 py-20 bg-on-background text-surface overflow-hidden relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-display font-black text-5xl md:text-6xl mb-8 uppercase italic leading-none">
              Join the Inner Circle
            </h2>
            <p className="text-xl text-surface/60 mb-10">
              Sign up for early access to &quot;The Vault&quot; drops and member-only
              curated gallery launches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                className="bg-transparent border-2 border-surface/30 rounded-xl px-6 py-4 flex-grow focus:border-primary-container focus:ring-0 text-surface placeholder:text-surface/30 outline-none"
                placeholder="collector@email.com"
                type="email"
              />
              <button className="bg-primary-container text-on-background px-8 py-4 rounded-xl font-display font-black uppercase whitespace-nowrap hard-shadow hover:translate-y-1 transition-all">
                Secure Access
              </button>
            </div>
          </div>
          {/* Decorative Element */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 border-[20px] border-surface/5 rounded-full"></div>
          <div className="absolute -left-20 -top-20 w-80 h-80 border-[20px] border-primary-container/10 rounded-full"></div>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
