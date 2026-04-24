import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#fbfaee] dark:bg-[#1b1c15] sticky top-0 z-50 backdrop-blur-md bg-opacity-80 border-b-2 border-[#1b1c15] dark:border-[#fbfaee] flex justify-between items-center px-6 py-4 w-full max-w-full">
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-[#1b1c15] dark:text-[#fbfaee] cursor-pointer">
          menu
        </span>
        <Link
          href="/"
          className="font-display font-extrabold uppercase tracking-tight text-2xl text-[#1b1c15] dark:text-[#fbfaee]"
        >
          TOYMASK
        </Link>
      </div>
      <div className="flex items-center gap-8">
        <nav className="hidden md:flex gap-8 items-center">
          <Link
            href="/"
            className="font-display font-bold uppercase tracking-tighter text-sm hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="font-display font-bold uppercase tracking-tighter text-sm hover:text-primary transition-colors"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="font-display font-bold uppercase tracking-tighter text-sm hover:text-primary transition-colors"
          >
            About
          </Link>
        </nav>
        <Link
          href="/cart"
          className="material-symbols-outlined text-[#1b1c15] dark:text-[#fbfaee] cursor-pointer hover:bg-secondary-container p-2 rounded-full transition-colors"
        >
          shopping_bag
        </Link>
      </div>
    </header>
  );
}
