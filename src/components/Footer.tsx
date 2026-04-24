import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1b1c15] dark:bg-[#000000] text-[#fbfaee] border-t-2 border-[#fbfaee] mt-12 flex flex-col md:flex-row justify-between items-center p-12 gap-6">
      <div className="flex flex-col items-center md:items-start gap-4">
        <span className="text-[#ffd700] font-black text-xl">TOYMASK</span>
        <p className="font-body text-sm tracking-widest font-light opacity-50">
          © 2024 TOYMASK DIGITAL CURATOR
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <Link
          className="font-body text-sm tracking-widest font-light text-[#fbfaee] opacity-50 hover:text-[#ffd700] underline"
          href="/products"
        >
          Collection
        </Link>
        <Link
          className="font-body text-sm tracking-widest font-light text-[#fbfaee] opacity-50 hover:text-[#ffd700] underline"
          href="/about"
        >
          Our Story
        </Link>
        <Link
          className="font-body text-sm tracking-widest font-light text-[#fbfaee] opacity-50 hover:text-[#ffd700] underline"
          href="#"
        >
          Terms of Service
        </Link>
        <Link
          className="font-body text-sm tracking-widest font-light text-[#fbfaee] opacity-50 hover:text-[#ffd700] underline"
          href="#"
        >
          Shipping Policy
        </Link>
      </div>
    </footer>
  );
}
