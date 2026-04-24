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
  return await client.fetch(query);
}

export default async function Home() {
  const latestDrops = await getLatestProducts();

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            <h1 className="text-[15vw] md:text-[12vw] font-display font-black tracking-tighter uppercase leading-[0.8] mb-8 select-none">
              <span className="block text-on-surface">Vault</span>
              <span className="block text-transparent stroke-text opacity-80">Of Joy</span>
            </h1>
            <p className="max-w-2xl text-base md:text-lg font-bold text-on-surface/60 mb-10 uppercase tracking-[0.3em] leading-relaxed">
              Exclusive Designer Toys & Digital Artifacts <br className="hidden md:block" /> For the Modern Collector
            </p>
            <Link
              href="/products"
              className="group relative bg-on-surface text-surface px-10 py-5 rounded-full font-display font-black uppercase text-xl transition-all hover:translate-y-[-4px] active:translate-y-[2px]"
            >
              <span className="relative z-10">Enter the Vault</span>
              <div className="absolute inset-0 bg-primary-container rounded-full translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
            </Link>
          </div>
        </section>

        {/* Featured Collections (Bento) */}
        <section className="px-6 py-20 bg-surface-container-low border-y-2 border-on-surface">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
              {/* Card 1 */}
              <div className="md:col-span-2 md:row-span-2 bg-primary-container border-2 border-on-surface rounded-2xl p-8 flex flex-col justify-between group overflow-hidden relative hard-shadow">
                <div className="relative z-10">
                  <span className="bg-on-surface text-surface text-[10px] font-black px-2 py-1 rounded mb-4 inline-block uppercase tracking-widest">Collection_01</span>
                  <h3 className="text-5xl font-display font-black uppercase mb-2 leading-none">
                    Classic <br /> Wood
                  </h3>
                  <p className="font-bold opacity-70 text-sm uppercase tracking-wider">Handcrafted Heritage</p>
                </div>
                <div className="absolute bottom-[-10%] right-[-5%] w-3/4 grayscale group-hover:grayscale-0 transition-all duration-700 rotate-12 group-hover:rotate-6 scale-110">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMgxmrDz-OIPi6Xh270UvQE29-YA7rX-99cNBcZbcJVgf-cCQg1J8fa1WjE4JWcKMN0OnUgm0gz96pCk0estTJZFkRxJyD4wQ5Vhgj7du27lTVtctC5qX6Qx0yaWBdgntJM4oZwYdmF1rjQ8yjJt7S2NMC3Th0nH2DpThMoL2wijLdie6bBH1kuWdj3Cz1nfEKryoz05BJ5-QyIzuWm6CN4MJp10EqyUSJGkOP6dJc60Qr3u-q0lWwNq-Z1pkZGlmhTefeXuO9XVQ"
                    alt="Wood Toy"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Card 2 */}
              <div className="md:col-span-2 bg-secondary-container border-2 border-on-surface rounded-2xl p-8 flex justify-between items-center group overflow-hidden relative hard-shadow">
                <div className="relative z-10">
                   <span className="bg-on-surface text-surface text-[10px] font-black px-2 py-1 rounded mb-2 inline-block uppercase tracking-widest">Collection_02</span>
                  <h3 className="text-4xl font-display font-black uppercase mb-1">
                    Space Tech
                  </h3>
                  <p className="font-bold opacity-70 text-xs uppercase tracking-widest">Future-Proofed Vinyl</p>
                </div>
                <div className="w-1/3 grayscale group-hover:grayscale-0 transition-all duration-500 scale-150 translate-x-8 -rotate-12 group-hover:rotate-0">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJAuseo6PNBy6AN7SpAVTsn6udpmE7mfGNSTfnF-_soCGeZaXluzVwodHMFwEnB8OUgBaanubkPsY2Z2ml_L2c69NWE_B_cD-NMA6e2AboNXOo8oFOmsJ1Qa29AfT1qWxA1s3NLFGlehgjv7lQrtFOP1hsxj8Am8NhkpMsjRIshsHwdzq3I4d2-PdDQjcN6WRibfVaOy_q-9P56TQKW6rBVO23U3tU_9UQTAB7Pa0PGqzh2rTjPc32vlnxr1ryZN9PyOUVoxFxkPY"
                    alt="Space Toy"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Card 3 */}
              <div className="md:col-span-2 bg-surface-container-high border-2 border-on-surface rounded-2xl p-8 flex justify-between items-center group overflow-hidden relative hard-shadow">
                <div className="relative z-10">
                   <span className="bg-on-surface text-surface text-[10px] font-black px-2 py-1 rounded mb-2 inline-block uppercase tracking-widest">Collection_03</span>
                  <h3 className="text-4xl font-display font-black uppercase mb-1">
                    Deep Sea
                  </h3>
                  <p className="font-bold opacity-70 text-xs uppercase tracking-widest">Bio-Luminescent Art</p>
                </div>
                <div className="w-1/3 grayscale group-hover:grayscale-0 transition-all duration-500 -rotate-12 translate-y-4 group-hover:translate-y-0 scale-110">
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
        <section className="px-6 py-32 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
              <h2 className="text-6xl md:text-8xl font-display font-black uppercase leading-[0.8] tracking-tighter">
                Hot in the <br /> <span className="text-secondary">Vault</span>
              </h2>
              <Link href="/products" className="font-black uppercase tracking-widest text-sm border-b-4 border-primary-container pb-1 hover:text-primary transition-colors">
                View All Artifacts →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {latestDrops.map((product: any) => (
                <ProductCard key={product._id} id={product._id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="px-6 py-20 bg-surface">
          <div className="max-w-7xl mx-auto bg-on-surface text-surface rounded-3xl p-8 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden hard-shadow">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="md:w-1/2 relative z-10">
              <h2 className="text-5xl md:text-7xl font-display font-black uppercase mb-6 leading-none tracking-tighter">
                Don't Miss <br /> The Next Drop
              </h2>
              <p className="opacity-60 text-lg font-medium leading-relaxed max-w-md">
                Sign up to our encrypted transmission for launch alerts and
                restock notifications.
              </p>
            </div>
            <div className="md:w-1/3 w-full relative z-10">
              <div className="flex flex-col gap-6">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="AGENT@EMAIL.COM"
                    className="w-full bg-transparent border-b-4 border-surface/20 py-4 font-display font-black text-2xl focus:border-primary-container transition-colors outline-none uppercase placeholder:opacity-20"
                  />
                </div>
                <button className="group relative bg-primary-container text-on-surface py-5 rounded-xl font-display font-black uppercase text-xl overflow-hidden transition-all hover:translate-y-[-2px] active:translate-y-[1px]">
                  <span className="relative z-10">Join The Inner Circle</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
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
