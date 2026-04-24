import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b-2 border-on-background bg-surface/90 backdrop-blur-md h-20 flex justify-between items-center px-6 py-4">
      <div className="flex items-center gap-4">
        <button className="material-symbols-outlined text-on-surface p-2 hover:bg-primary-container transition-colors rounded-lg">
          menu
        </button>
        <Link
          href="/"
          className="text-3xl font-black text-on-surface tracking-tighter font-display uppercase"
        >
          ToyMask
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-8 font-display font-bold tracking-tight uppercase">
        <Link
          className="text-on-surface border-b-2 border-primary-container px-1 py-1 transition-colors"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-on-surface/60 hover:text-on-surface transition-colors px-1 py-1"
          href="/products"
        >
          Collections
        </Link>
        <Link
          className="text-on-surface/60 hover:text-on-surface transition-colors px-1 py-1"
          href="#"
        >
          Limited Edition
        </Link>
        <Link
          className="bg-primary-container text-on-surface border-2 border-on-background px-4 py-1.5 rounded-full hard-shadow-hover transition-all text-xs"
          href="/cart"
        >
          The Vault
        </Link>
      </nav>
      <div className="flex items-center gap-2">
        <button className="material-symbols-outlined p-2 hover:bg-primary-container transition-colors rounded-full">
          search
        </button>
        <div className="relative">
          <Link
            href="/cart"
            className="material-symbols-outlined p-2 hover:bg-primary-container transition-colors rounded-full"
          >
            shopping_cart
          </Link>
          <span className="absolute top-1 right-1 bg-secondary text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-1 border-on-background">
            2
          </span>
        </div>
      </div>
    </header>
  );
}
