import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard"
export default function Home() {
  return (
    <main>
      <h1>hi </h1>
      <Link href="/user" >User Page</Link>
      <ProductCard />
    </main>
  );
}
