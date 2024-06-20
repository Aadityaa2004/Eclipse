import { IsAdmin } from "@/lib/auth/auth";
import Image from "next/image";
import { dummyProducts } from "@/components/dummydata";
import { Product } from "@/components/interface";
import ProductCard from "@/components/ProductCard";
import ContactForm from "./contact/page";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Dashboard />
      <AboutUS />
      <NewIn />
      {/* <ContactForm /> */}
      <HandMade />
    </>
  )
}

async function Dashboard() {
  const data = await IsAdmin()
  return (
    <section className="relative min-h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/intro2.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="opacity-80 text-white  px-5 py-3  ">
          <div className="text-4xl opacity-70 tracking-widest">
            E C L I P S E
          </div>
          <div className="border-2 border-white my-2 opacity-80"></div>
          <div className="text-sm tracking-widest text-center opacity-80">
            THE WAY YOU LIVE
          </div>

        </div>
      </div>

    </section>
  );
}

function AboutUS() {
  return (
    <section className="bg-[#0b0b0a] py-12">
      <div className="max-w-screen-lg mx-auto p-5">
        <div className="bg-blac bg-opacity-50">
          <div className="text-xs font-bold text-zinc-200 text-left mb-1">ABOUT US</div>
          <div className="border border-zinc-200 w-16 mb-8 "></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-zinc-200">Our Story</h2>
              <p className="text-sm text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-sm text-gray-400">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-zinc-200">Our Mission</h2>
              <p className="text-sm text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-sm text-gray-400">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewIn() {
  return(
    <div>
      <section className="bg-gray-100 py-12">
        <div className="max-w-screen-2xl mx-auto p-5">
          <div className="text-xs font-bold text-black text-left mb-2">LATEST DROP</div>
          <div className="border border-black mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {dummyProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function HandMade() {
  return (
    <section className="bg-[#100f0f] py-12">
      <div className="max-w-screen-lg mx-auto px-5">
        <div className="text-xs font-bold text-zinc-200 text-left mb-2">UNBOX AN EXPERIENCE</div>
        <div className="border border-zinc-200 mb-7 w-36"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-1">
          <div className="">
            <Image src="/unbox.jpeg" alt="new" height={300} width={300} />
          </div>
          <div className="flex flex-col">
            <div className="text-md text-[#f8f6f6] font-bold mt-5 text-left">Embrace the Journey</div>
            <div className="text-gray-300 text-sm font-extralight mt-3 max-w-screen-sm text-justify">
              Dive deep into the essence of fashion, where every thread tells a story, and every design is a chapter in the book of elegance.
              Embrace the journey of self-discovery through style, where the ordinary transforms into the extraordinary.
            </div>
            <div className="text-md text-[#f7f7f6] font-bold mt-5 text-left">Crafting Timeless Memories</div>
            <div className="text-gray-300 text-sm font-extralight mt-3 max-w-screen-sm text-justify">
              In a world where trends come and go, we focus on crafting timeless memories. Our pieces are more than just clothing; they are a reflection
              of your personal journey and a testament to your unique story. Wear them with pride and let them speak volumes about who you are.
            </div>
            <div className="pb-2 mt-8">
          <button className="bg-black text-xs border border-white text-white px-4 py-1 hover:bg-white hover:text-black hover:border-transparent transition duration-300">
            SHOP NOW
          </button>
          {/* <AddToCartBtn product={product} /> */}
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}

