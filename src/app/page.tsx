import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

export const revalidate = 0; // Luôn lấy dữ liệu mới nhất

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
  const data = await client.fetch(query);
  console.log("Sanity Data:", data); // Để kiểm tra trong log
  return data;
}

export default async function Home() {
  const latestDrops = await getLatestProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-surface">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,214,0,0.15),transparent_70%)]"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            <h1 className="text-7xl md:text-9xl font-display font-black tracking-tighter uppercase leading-[0.8] mb-6">
              <span className="block text-on-surface">Vault</span>
              <span className="block text-transparent stroke-text">Of Joy</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl font-medium text-on-surface/80 mb-8 uppercase tracking-widest">
              Exclusive Designer Toys & Digital Artifacts for the Modern Collector
            </p>
            <div className="flex gap-4">
              <Link
                href="/products"
                className="bg-on-background text-background px-8 py-4 rounded-full font-display font-black uppercase text-xl hard-shadow-hover transition-all"
              >
                Enter the Vault
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Collections (Bento) */}
        <section className="px-6 py-20 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
              <div className="md:col-span-2 md:row-span-2 bg-primary-container border-2 border-on-background rounded-2xl p-8 flex flex-col justify-between group overflow-hidden relative hard-shadow">
                <div className="relative z-10">
                  <h3 className="text-4xl font-display font-black uppercase mb-2">
                    Classic Wood
                  </h3>
                  <p className="font-bold opacity-70">Handcrafted Heritage</p>
                </div>
                <div className="absolute bottom-[-20%] right-[-10%] w-2/3 grayscale group-hover:grayscale-0 transition-all duration-500 rotate-12 group-hover:rotate-0">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMgxmrDz-OIPi6Xh270UvQE29-YA7rX-99cNBcZbcJVgf-cCQg1J8fa1WjE4JWcKMN0OnUgm0gz96pCk0estTJZFkRxJyD4wQ5Vhgj7du27lTVtctC5qX6Qx0yaWBdgntJM4oZwYdmF1rjQ8yjJt7S2NMC3Th0nH2DpThMoL2wijLdie6bBH1kuWdj3Cz1nfEKryoz05BJ5-QyIzuWm6CN4MJp10EqyUSJGkOP6dJc60Qr3u-q0lWwNq-Z1pkZGlmhTefeXuO9XVQ"
                    alt="Wood Toy"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="md:col-span-2 bg-secondary-container border-2 border-on-background rounded-2xl p-8 flex justify-between items-center group overflow-hidden relative hard-shadow">
                <div className="relative z-10">
                  <h3 className="text-3xl font-display font-black uppercase mb-1">
                    Space Tech
                  </h3>
                  <p className="font-bold opacity-70">Future-Proofed Vinyl</p>
                </div>
                <div className="w-1/3 grayscale group-hover:grayscale-0 transition-all duration-500 scale-125 translate-x-4">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJAuseo6PNBy6AN7SpAVTsn6udpmE7mfGNSTfnF-_soCGeZaXluzVwodHMFwEnB8OUgBaanubkPsY2Z2ml_L2c69NWE_B_cD-NMA6e2AboNXOo8oFOmsJ1Qa29AfT1qWxA1s3NLFGlehgjv7lQrtFOP1hsxj8Am8NhkpMsjRIshsHwdzq3I4d2-PdDQjcN6WRibfVaOy_q-9P56TQKW6rBVO23U3tU_9UQTAB7Pa0PGqzh2rTjPc32vlnxr1ryZN9PyOUVoxFxkPY"
                    alt="Space Toy"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="md:col-span-2 bg-surface-container-high border-2 border-on-background rounded-2xl p-8 flex justify-between items-center group overflow-hidden relative hard-shadow">
                <div className="relative z-10">
                  <h3 className="text-3xl font-display font-black uppercase mb-1">
                    Deep Sea
                  </h3>
                  <p className="font-bold opacity-70">Bio-Luminescent Art</p>
                </div>
                <div className="w-1/3 grayscale group-hover:grayscale-0 transition-all duration-500 -rotate-12 translate-y-4">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5LMKgC0OcKXPlCNqE7kqK927DzECEUoTVL7W2uwBs5dh_LuHn-KJS41spre9Bc8wFdLwmAiNODkuQ6P0xcMmoy04pW854ZWYHLxpxYipBPqmJX6GpXZAyAlnZcWyDa_tVPeXe0_nt09n922Fq46aPkm52mzdZESPN105FmcT4oa5t1eCb9Um4GxdyZjPGly7uNXiCm0TiaxALVV2lIDvkNRSvoBNKHJtV4ry7ZGBRdWoxmCQkibubX7Qa1wIKwda4ma3rBtMWLYk"
                    alt="Sea Toy"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Drops Grid */}
        <section className="px-6 py-20 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-5xl font-display font-black uppercase">
                Hot in the <br /> Vault
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {latestDrops.map((product: any) => (
                <ProductCard key={product._id} id={product._id} {...product} />
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
                Secure, tracked priority handling for all orders worldwide.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 border-2 border-on-background rounded-xl bg-secondary-container hard-shadow">
              <span className="material-symbols-outlined text-6xl mb-4 text-on-background">
                redeem
              </span>
              <h3 className="font-display font-black text-2xl uppercase mb-2">
                The Vault Pass
              </h3>
              <p className="text-on-surface/70">
                Join our elite circle for early access and members-only
                artifacts.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto bg-on-surface text-surface rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 hard-shadow">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-4 leading-tight">
                Don't Miss <br /> The Next Drop
              </h2>
              <p className="opacity-70 text-lg">
                Sign up to our encrypted transmission for launch alerts and
                restock notifications.
              </p>
            </div>
            <div className="md:w-1/3 w-full">
              <div className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="AGENT@EMAIL.COM"
                  className="bg-transparent border-b-2 border-surface/30 p-4 font-display font-bold text-xl focus:border-surface transition-colors outline-none uppercase"
                />
                <button className="bg-primary text-on-primary py-4 rounded-full font-display font-black uppercase text-xl hover:bg-primary/90 transition-all">
                  Join The Inner Circle
                </button>
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
