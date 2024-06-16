import { Product } from "./interface";
import React from "react";
import Image from "next/image";
import AddToCartBtn from "@/components/AddToCartBtn";

interface Props {
    product: Product;
}

const ProductCard = ({ product }: Props) => {
    return (
        <div className="flex flex-col bg-gray-100 roundedlg border border-gray-300">
        <div className="w-full h-72 relative">
          <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="roundedt-lg" />
        </div>
        <div className="text-xs font-light my-2 text-left px-2">{product.name}</div>
        <div className="px-2 pb-2">
          <button className="text-xs border border-black text-black px-4 py-1 hover:bg-black hover:text-white hover:border-transparent transition duration-300">
            SHOP NOW
          </button>
          <AddToCartBtn product={product} />
        </div>
      </div>
    );
}

export default ProductCard;