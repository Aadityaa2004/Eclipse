import { IsAdmin } from "@/lib/auth/auth";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Dashboard />
      <AboutUS />
      <NewArrivals />
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
    <section className="bg-gray-100 py-12">
      <div className="max-w-screen-lg mx-auto p-5">
        <div className="bg-blac bg-opacity-50">
          <div className="text-xs font-bold text-black text-left mb-1">ABOUT US</div>
          <div className="border border-black w-16 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-sm text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-sm text-gray-700">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-sm text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-sm text-gray-700">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function NewArrivals() {

  const newstock = [
    {
      image: '/newstock1.jpeg',
      name: 'T-shirt',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: '/newstock2.jpeg',
      name: 'Pant',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: '/newstock3.jpeg',
      name: 'Shirt',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: '/newstock4.jpeg',
      name: 'Jacket',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  ];

  return (
    <section className="bg-gray-100 pb-24 pt-12">
      <div className="max-w-screen-2xl mx-auto p-5">
        <div className="text-xs font-bold text-black text-left mb-2">LATEST DROP</div>
        <div className="border border-black mx-auto mb-5"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {newstock.map((item, index) => (
            <div key={index} className="flex flex-col bg-gray-100 roundedlg border border-gray-300">
              <div className="w-full h-72 relative">
                <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" className="roundedt-lg" />
              </div>
              <div className="text-xs font-light my-2 text-left px-2">{item.name}</div>
              <div className="px-2 pb-2">
                <button className="text-xs border border-black text-black px-4 py-1 hover:bg-black hover:text-white hover:border-transparent transition duration-300">
                  SHOP NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
