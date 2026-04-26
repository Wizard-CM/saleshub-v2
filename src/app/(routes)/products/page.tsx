import { ProductsHero } from "@/src/components/templates/products-page-components/ProductsHero";
import { ProductsShowcase } from "@/src/components/templates/products-page-components/ProductsShowcase";

export default function ProductsPage() {
  return (
    <div className="w-full h-full flex flex-col">
      <ProductsHero />
      <ProductsShowcase />
    </div>
  );
}
