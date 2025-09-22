
// import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
    <>
    <Header/>
    <main>
      <div className="flex flex-col">
        <Link href="/login" >Sign In</Link>
      </div>
    </main>
    <Footer/>
    </>
  );
}
