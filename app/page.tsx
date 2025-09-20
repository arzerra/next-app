import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Greet from "./components/Greet";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Hello World</h1>
        <Link href="/users">Users</Link>
        <ProductCard/>
        <Greet/>
      </div>
    </main>
  );
}
