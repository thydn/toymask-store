import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { notFound } from "next/navigation";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const query = `*[_type == "product"] { "id": slug.current }`;
  const products = await client.fetch(query);
  return products;
}

async function getProduct(slug: string) {
  const query = `*[_type == "product" && slug.current == $slug][0] {
    name,
    "slug": slug.current,
    price,
    rating,
    image,
    category,
    description,
    specs
  }`;
  return await client.fetch(query, { slug });
}

export default async function ProductDetail({ params }: PageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pb-24 md:pb-0">
        <div className="max-w-[1440px] mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Gallery Section */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="hyperframe bg-surface-container-lowest rounded-xl overflow-hidden relative group">
                <img
                  className="w-full aspect-square object-cover"
                  src={product.image?.asset ? urlForImage(product.image).url() : product.image}
                  alt={product.name}
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-error-container text-on-error-container font-bold px-4 py-2 rounded-full border-2 border-on-surface hard-shadow font-display text-xl">
                    ${product.price}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                  {product.category} Artifact
                </span>
                <h2 className="text-6xl font-display font-bold leading-tight">
                  {product.name}
                </h2>
                <p className="font-body text-on-surface-variant text-lg leading-relaxed mt-4">
                  {product.description}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <button className="w-full py-5 bg-primary-container text-on-surface font-black text-xl rounded-full hyperframe hard-shadow transition-all hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#1b1c15] active:translate-y-[2px] active:shadow-none uppercase tracking-tight">
                  Secure This Artifact
                </button>
                <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl border-2 border-on-surface">
                  <span className="font-bold uppercase text-xs opacity-60">
                    Vault Availability
                  </span>
                  <span className="font-mono text-secondary font-bold">
                    IN_STOCK // 004
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-display font-black uppercase text-xl border-b-2 border-on-surface pb-2">
                  Engineering Specs
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {(product.specs || []).map((spec: any) => (
                    <div
                      key={spec._key}
                      className="flex justify-between items-center py-2 border-b border-on-surface/10"
                    >
                      <span className="font-body text-sm font-bold uppercase opacity-50">
                        {spec.label}
                      </span>
                      <span className="font-body text-sm font-black">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
