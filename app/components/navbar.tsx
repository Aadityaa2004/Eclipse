"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const MenuItems = [
    {
      title: "NEW IN",
      link: "/",
    },
    {
      title: "APPAREL",
      link: "/#apparel",
    },
    {
      title: "CONTACT US",
      link: "/#contact-us",
    },

  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-20 transition-colors hover:bg-opacity-95 duration-300 ${isScrolled ? "bg-gray-200 bg-opacity-80" : "bg-transparent text-white"
        }`}
    >
      <div className="bg-black text-white text-center text-sm">
      new season is here! get 20% off 
      </div>
      <div className="flex mx-auto px-5 md:px-16 lg:px-10 sm:px-5 py-0">
        <div className="hidden md:flex items-center justify-center">
          <Link href="/" scroll={true} passHref={true}>
                <div className={`text-black font-bold py-1 text-xl ${isScrolled ? 'text-black':'text-white'} `}>
                  E C L I P S E
                </div>
          </Link>
        </div>
        <div className="hidden md:flex items-center justify-center flex-grow">
          <div className="flex items-center">
            {MenuItems.map((menu) => (
              <Link key={menu.link} href={menu.link} passHref>
                <button
                  className={`px-3 text-xs mx-2 ${isScrolled ? 'text-black':'text-white'}
                   ${path === menu.link
                      ? "text-black text-xs font-ligth"
                      : "text-black hover:text-gray-800"
                    }`}
                >
                  {menu.title}
                </button>
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center gap-3">
              <button className="text-xs">
                CART
              </button>
              <button className="text-xs">
                LOG IN
              </button>
        </div>
      </div>
      <div className="md:hidden flex items-center justify-between px-5 py-1">
        <Link href="/" scroll={true} passHref={true}>
          <div className="">
              E C L I P S E
          </div>
        </Link>
        <button
          type="button"
          onClick={toggleMenu}
          className="text-black"
          aria-label="Toggle menu"
        >
          <Image
            src={isMenuOpen ? "/cross.png" : "/three.png"}
            alt="Menu icon"
            height={25}
            width={30}
            className="object-contain"
          />
        </button>
      </div>

      <div
        className={`md:hidden bg-gray-800 bg-opacity-90 w-full absolute top-16 right-0 transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col items-end space-y-2 px-4 py-5">
          {MenuItems.map((menu) => (
            <Link key={menu.link} href={menu.link} passHref>
              <button
                onClick={toggleMenu}
                className={`w-full text-right px-3 py-2 rounded-md text-lg font-semibold ${path === menu.link
                    ? "text-white bg-primary"
                    : "text-white hover:text-gray-200"
                  }`}
              >
                {menu.title}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
