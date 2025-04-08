import { Metadata } from "next";
//import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/products/product-list";
import { getLatestProducts } from "@/lib/actions/product-actions";
import { LATEST_PRODUCTS_LIMIT } from "@/lib/constants";


export const metadata: Metadata = {
  title: "Home"
};


export default async function Home() {
    const latestProducts = await getLatestProducts()
  return (
    <div>
      <ProductList 
        data={latestProducts}
        title="Latest Products"
        limit={LATEST_PRODUCTS_LIMIT}
      />
      
    </div>
  )
}
