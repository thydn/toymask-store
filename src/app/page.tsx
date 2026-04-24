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
        {/* Hero Section: The Hyperframe */}
        <section className="px-6 py-12 md:py-24 max-w-7xl mx-auto">
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-0 border-2 border-on-background rounded-xl overflow-hidden bg-surface-container-low">
            <div className="md:col-span-7 p-8 md:p-16 flex flex-col justify-center items-start z-10">
              <span className="bg-secondary-container text-on-secondary-container px-4 py-1 border-2 border-on-background font-bold text-sm mb-6 rounded-full uppercase tracking-widest">
                High-End Curations
              </span>
              <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[0.9] tracking-tighter mb-8">
                UNLOCK THE <br /> 
                <span className="text-primary-container stroke-text">VAULT OF JOY</span>
              </h1>
              <p className="text-xl md:text-2xl text-on-surface/80 max-w-lg mb-10 leading-relaxed">
                Where architectural precision meets childhood wonder. Discover our limited-edition artisanal toy gallery.
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
                alt="Modern high-end designer toy"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsBBb3uI2e8qGguEmml0jmVvEgZS5xHn8dE2qqoIW7i1Q8AC4HHtCRcW-G7iNGTOU4lb3adH-II6qS-q_w5LPENj732ZQuOH45Rb4FhjyWYoee76sbPNI5g3IYY_S09_c78jN7qyT7V54_BybRzQXHLeZUO2-QtvGsGUuRjX9rGiEEhAcSWgTobWZUNxNZvHtxCNMhLhgMMmWDgtx6pXIscNIT8s7hvuyaSw8zTPyxfQEIsAJBLqFkQ_Ld8fQetx7avnKVruI1bko"
              />
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
              <Link href="/products" className="text-on-surface font-display font-bold border-b-2 border-on-background pb-1 hover:text-primary transition-colors">
                View All Series
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Collection Card 1 */}
              <div className="group relative overflow-hidden rounded-xl border-2 border-on-background bg-surface-container-high hard-shadow-hover transition-all aspect-[4/5] md:aspect-auto md:h-[400px]">
                <div className="p-8 relative z-10">
                  <h3 className="text-3xl font-display font-black uppercase mb-1">Classic Wood</h3>
                  <p className="text-sm font-bold opacity-60">Handcrafted Heritage</p>
                </div>
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMgxmrDz-OIPi6Xh270UvQE29-YA7rX-99cNBcZbcJVgf-cCQg1J8fa1WjE4JWcKMN0OnUgm0gz96pCk0estTJZFkRxJyD4wQ5Vhgj7du27lTVtctC5qX6Qx0yaWBdgntJM4oZwYdmF1rjQ8yjJt7S2NMC3Th0nH2DpThMoL2wijLdie6bBH1kuWdj3Cz1nfEKryoz05BJ5-QyIzuWm6CN4MJp10EqyUSJGkOP6dJc60Qr3u-q0lWwNq-Z1pkZGlmhTefeXuO9XVQ"
                  alt="Wood Collection"
                  className="absolute bottom-0 right-0 w-3/4 object-contain translate-y-12 translate-x-12 group-hover:translate-y-4 group-hover:translate-x-4 transition-transform duration-500"
                />
              </div>
              
              {/* Collection Card 2 */}
              <div className="group relative overflow-hidden rounded-xl border-2 border-on-background bg-secondary-container hard-shadow-hover transition-all aspect-[4/5] md:aspect-auto md:h-[400px]">
                <div className="p-8 relative z-10">
                  <h3 className="text-3xl font-display font-black uppercase mb-1">Space Tech</h3>
                  <p className="text-sm font-bold opacity-60">Future-Proofed Vinyl</p>
                </div>
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJAuseo6PNBy6AN7SpAVTsn6udpmE7mfGNSTfnF-_soCGeZaXluzVwodHMFwEnB8OUgBaanubkPsY2Z2ml_L2c69NWE_B_cD-NMA6e2AboNXOo8oFOmsJ1Qa29AfT1qWxA1s3NLFGlehgjv7lQrtFOP1hsxj8Am8NhkpMsjRIshsHwdzq3I4d2-PdDQjcN6WRibfVaOy_q-9P56TQKW6rBVO23U3tU_9UQTAB7Pa0PGqzh2rTjPc32vlnxr1ryZN9PyOUVoxFxkPY"
                  alt="Space Collection"
                  className="absolute bottom-0 right-0 w-3/4 object-contain translate-y-12 translate-x-12 group-hover:translate-y-4 group-hover:translate-x-4 transition-transform duration-500"
                />
              </div>

              {/* Collection Card 3 */}
              <div className="group relative overflow-hidden rounded-xl border-2 border-on-background bg-primary-container hard-shadow-hover transition-all aspect-[4/5] md:aspect-auto md:h-[400px]">
                <div className="p-8 relative z-10">
                  <h3 className="text-3xl font-display font-black uppercase mb-1">Deep Sea</h3>
                  <p className="text-sm font-bold opacity-60">Bio-Luminescent Art</p>
                </div>
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5LMKgC0OcKXPlCNqE7kqK927DzECEUoTVL7W2uwBs5dh_LuHn-KJS41spre9Bc8wFdLwmAiNODkuQ6P0xcMmoy04pW854ZWYHLxpxYipBPqmJX6GpXZAyAlnZcWyDa_tVPeXe0_nt09n922Fq46aPkm52mzdZESPN105FmcT4oa5t1eCb9Um4GxdyZjPGly7uNXiCm0TiaxALVV2lIDvkNRSvoBNKHJtV4ry7ZGBRdWoxmCQkibubX7Qa1wIKwda4ma3rBtMWLYk"
                  alt="Sea Collection"
                  className="absolute bottom-0 right-0 w-3/4 object-contain translate-y-12 translate-x-12 group-hover:translate-y-4 group-hover:translate-x-4 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Latest Drops Grid */}
        <section className="px-6 py-16 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <h2 className="font-display font-black text-4xl uppercase tracking-tighter">Hot in the Vault</h2>
              <Link href="/products" className="text-on-surface font-display font-bold border-b-2 border-on-background pb-1 hover:text-primary transition-colors">View All Artifacts</Link>
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
