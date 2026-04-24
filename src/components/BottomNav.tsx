import Link from "next/link";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full border-t-2 border-[#1b1c15] z-50 bg-[#fbfaee] dark:bg-[#1b1c15] flex justify-around items-center h-20 px-4 shadow-[0_-4px_0px_0px_rgba(27,28,21,0.1)] md:hidden">
      <Link
        href="/products"
        className="flex flex-col items-center gap-1 bg-[#ffd700] text-[#1b1c15] px-4 py-1 rounded-full border-2 border-[#1b1c15] hover:scale-105 transition-transform cursor-pointer"
      >
        <span className="material-symbols-outlined text-xl">grid_view</span>
        <span className="font-body text-[10px] font-bold uppercase">
          Catalog
        </span>
      </Link>
      <div className="flex flex-col items-center gap-1 text-[#1b1c15] dark:text-[#fbfaee] opacity-60 hover:scale-105 transition-transform cursor-pointer">
        <span className="material-symbols-outlined text-xl">star</span>
        <span className="font-body text-[10px] font-bold uppercase">
          Limited
        </span>
      </div>
      <div className="flex flex-col items-center gap-1 text-[#1b1c15] dark:text-[#fbfaee] opacity-60 hover:scale-105 transition-transform cursor-pointer">
        <span className="material-symbols-outlined text-xl">person</span>
        <span className="font-body text-[10px] font-bold uppercase">
          Account
        </span>
      </div>
    </nav>
  );
}
