import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pb-24 md:pb-0 pt-12">
        <section className="px-6 py-20 max-w-7xl mx-auto">
          <div className="relative">
            <h1 className="text-7xl md:text-[120px] font-display font-black leading-none tracking-tighter text-on-surface uppercase mb-4 z-10 relative">
              The Architecture
              <br />
              of Play
            </h1>
            <div className="absolute -top-10 -right-4 w-48 h-48 bg-secondary-container rounded-full opacity-50 blur-3xl -z-10"></div>
            <p className="font-mono text-lg uppercase tracking-widest text-on-surface-variant max-w-2xl mt-8 border-l-4 border-primary-container pl-6">
              Curating the intersection of technical precision and pure
              imagination.
            </p>
          </div>
        </section>

        <section className="px-6 py-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <h2 className="text-5xl font-display font-bold text-on-surface mb-6 uppercase">
                Precision Meets Play
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8 font-body">
                At TOYMASK, we don&apos;t just sell toys; we archive moments of
                structural brilliance. Every item in our collection undergoes a
                rigorous vetting process that balances engineering durability
                with the unbridled joy of discovery.
              </p>
              <button className="bg-primary-container text-on-surface px-10 py-4 rounded-3xl border-2 border-on-surface font-bold uppercase tracking-widest hard-shadow active-hard-shadow transition-all">
                View Manifesto
              </button>
            </div>
            <div className="md:col-span-7">
              <div className="relative p-2 border-2 border-on-surface rounded-xl hard-shadow overflow-hidden group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2_D9NXcnG_d5J00GuLrzNhdP-lhrRvEmiJV_rett2H7WoqFKAN4J7v7hzPoEf7xqRxexX_6FccgFZA58TsczhcdOWLTzhN_ul-MCa3pX8CmYwBkGXlT2QrdepIb3WXdmx9WQ3Dz9M8tySx5eeVddcapxva75eD0_mnyTp3KD83rCsVHGxZf79KOihiuei8-UGJjW30n3C9pRlcp8cuaif7eFVUbXw6ZRKrthH92XBLt7NQI3IL7Z8FUxCdexz_TxiGJrP3io2ATA"
                  alt="Design Workspace"
                  className="w-full h-[500px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-6 right-6 bg-surface p-4 border-2 border-on-surface font-mono text-xs hard-shadow">
                  LOC: TOYMASK_LAB_01 // 2024
                </div>
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
