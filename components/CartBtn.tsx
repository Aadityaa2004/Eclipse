"use client";

import { ShoppingBagIcon, ShoppingCartIcon, } from "@heroicons/react/24/solid";
import React from "react";
import { totalCartItemsSelector, TotalPriceSelector, } from "@/app/store/features/cartSlice";
import { useAppSelector } from "@/app/store/store";

interface Props {
  className?: string;
}

const CartBtn = (props: Props) => {
  const totalItems = useAppSelector(totalCartItemsSelector);
  return (
    <div className={`${props.className} relative px-3 -4`}>
      {/* <ShoppingCartIcon className="w-6 bg-black text-slate-100" /> */}
      CART
      {!!totalItems && (
        <div
          key={totalItems}
          className={`bg-black flex justify-center items-center
        rounded-full w-5 absolute -top-2 -right-1 text-white animate-pingOnce ${onscroll ? "bg-white text-black": "text-gray-200 bg-black "}
        `}
        >
          {totalItems}
        </div>
      )}
    </div>
  );
};

export default CartBtn;