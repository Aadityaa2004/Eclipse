"use client"
import { Product } from "./interface";
import React from "react";
import { decrement, increment, productQtyInCartSelector } from "@/app/store/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { Button } from "@/components/Button";
import QtyBtn from "./Qtybtn";

interface Props {
    product: Product;
}

const AddToCartBtn = (props: Props) => {

    const qty = useAppSelector((state) => productQtyInCartSelector(state, props.product.id));

    const dispatch = useAppDispatch();
    if(!qty) return (
        <div className="">
            <Button className="" variant="primary" onClick={() => dispatch(increment(props.product))}>ADD TO CART</Button>
        </div>
    )
    return (
        <QtyBtn 
        qty={qty} 
        onDecrease={() => dispatch(decrement(props.product))} 
        onIncrease={() => dispatch(increment(props.product))} />
    );
}

export default AddToCartBtn;