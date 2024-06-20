import { CartItem } from "@/components/interface";
import Image from "next/image";
import React from "react";
import { decrement, increment } from "@/app/store/features/cartSlice";
import { useAppDispatch } from "@/app/store/store";
import QtyBtn from "@/components/Qtybtn";

interface Props {
  cartItem: CartItem;
}

const CartItemCard = ({ cartItem }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="bg-zinc-200 ">
    
    <div className="grid grid-cols-4 items-center">
      <div className="w-24 h-24 relative ">
        <Image
          src={cartItem.product.image}
          layout="fill"
          objectFit="cover"
          alt={cartItem.product.name}
          className="rounded-md"
        />
      </div>
      <p className="text-black text-center">{cartItem.product.name}</p>
      <div className="flex flex-col items-center justify-center gap-3 text-black">
        <p>{cartItem.product.price} $</p>
        <p>&#xd7;</p>
        <QtyBtn
          qty={cartItem.quantity}
          onDecrease={() => dispatch(decrement(cartItem.product))}
          onIncrease={() => dispatch(increment(cartItem.product))}
        />
      </div>
      <p className="text-center text-black ">
        {cartItem.quantity * cartItem.product.price} $
      </p>
    </div>
    </div>
  );
};

export default CartItemCard;
