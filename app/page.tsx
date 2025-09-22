
// import Image from "next/image";
import Link from "next/link";
// import ProductCard from "./components/ProductCard";
// import Greet from "./components/Greet";

export default function Home() {
  // const setNewView = async () => {
  //   const {data, error} = await supabase
  //     .from("views")
  //     .insert({
  //       name: 'random name'
  //     })

  //     if (data) console.log(data)
  //     if (error) console.log(error)
  // };

  // setNewView();


  return (
    <main>
      <div>
        <Link href="/admin" >Sign In</Link>
        <Link href="/register" >Sign Up</Link>
      </div>
    </main>
  );
}
