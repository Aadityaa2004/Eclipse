"use client";
import CartItemCard from "@/components/CartItemCard";
import React from "react";
import { TotalPriceSelector } from "@/app/store/features/cartSlice";
import { useAppSelector } from "@/app/store/store";




const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const totalPrice = useAppSelector(TotalPriceSelector);

  return (
    <section>
        <div className="p-2 pt-32 bg-[#817657] py-48">
            <div>
                <div className="relative z-10 flex flex-col items-center justify-center">
                    <div className="opacity-80 text-white  px-5 py-3  ">
                        <div className="text-4xl opacity-70 tracking-widest pt-52">
                            SHOPPING CART
                        </div>
                        <div className="border-2 border-white my-2 opacity-80 "></div>
                        <div className="text-sm tracking-widest text-center opacity-80">
                            THE WAY YOU LIVE
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="bg-white">
            {cartItems.map((item) => (
            <CartItemCard key={item.product.id} cartItem={item} />
                ))}
            <p className="text-slate-600">
                Total Price:{" "}
                <span className="text-slate-900 font-bold">{totalPrice} $</span>
            </p>
        </div>
    </section>
  );
};

export default CartPage;
