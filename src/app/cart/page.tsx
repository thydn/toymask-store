import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import products from "@/data/products.json";
import Link from "next/link";

export default function Cart() {
  const cartItems = products.slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pb-24 md:pb-0">
        <section className="max-w-4xl mx-auto px-6 pt-8 space-y-12">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="font-display text-3xl tracking-tight text-on-surface uppercase font-black">
              Stored Assets{" "}
              <span className="text-lg opacity-50 font-mono">(02)</span>
            </h2>
            <div className="text-sm font-mono uppercase tracking-widest opacity-60">
              Status: Verified
            </div>
          </div>

          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-surface-container-lowest border-2 border-on-surface rounded-xl p-4 flex gap-6 hard-shadow group"
              >
                <div className="w-32 h-32 flex-shrink-0 bg-surface-container rounded-lg overflow-hidden border-2 border-on-surface/10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-display text-xl font-black uppercase">
                        {item.name}
                      </h3>
                      <p className="text-xs font-mono uppercase text-on-surface-variant opacity-70 mt-1">
                        Series: Artifact / SKU: {item.id.slice(0, 6)}
                      </p>
                    </div>
                    <span className="font-mono text-xl font-bold">
                      ${item.price}
                    </span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex items-center border-2 border-on-surface rounded-full overflow-hidden">
                      <button className="px-3 py-1 hover:bg-secondary-container transition-colors border-r-2 border-on-surface">
                        <span className="material-symbols-outlined text-sm">
                          remove
                        </span>
                      </button>
                      <span className="px-4 py-1 font-mono font-bold">01</span>
                      <button className="px-3 py-1 hover:bg-secondary-container transition-colors border-l-2 border-on-surface">
                        <span className="material-symbols-outlined text-sm">
                          add
                        </span>
                      </button>
                    </div>
                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-error hover:underline">
                      <span className="material-symbols-outlined text-sm">
                        delete
                      </span>{" "}
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="bg-on-surface text-surface rounded-2xl p-8 space-y-6 hard-shadow">
            <div className="space-y-4">
              <div className="flex justify-between items-center opacity-60 font-mono text-sm uppercase">
                <span>Subtotal</span>
                <span>$213.00</span>
              </div>
              <div className="flex justify-between items-center opacity-60 font-mono text-sm uppercase">
                <span>Shipping Archive</span>
                <span>$12.00</span>
              </div>
              <div className="h-px bg-surface/20"></div>
              <div className="flex justify-between items-center text-2xl font-display font-black uppercase">
                <span>Total</span>
                <span className="text-primary-container">$225.00</span>
              </div>
            </div>
            <button className="w-full py-4 bg-primary-container text-on-surface font-display font-black uppercase tracking-widest rounded-xl border-2 border-surface active:scale-95 transition-transform">
              Execute Checkout
            </button>
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
