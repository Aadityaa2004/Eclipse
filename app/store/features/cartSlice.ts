import { CartItem, Product } from '@/components/interface' 
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/app/store/store'

export interface CartState {
    cartItems: CartItem[];
  }
  const initialState: CartState = {
    cartItems: [],
  };
  
  export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      increment: (state, action: PayloadAction<Product>) => {
        const cartItem = state.cartItems.find(
          (el) => el.product.id === action.payload.id
        );
        if (cartItem) cartItem.quantity++;
        else {
          state.cartItems.push({
            product: action.payload,
            quantity: 1,
          });
        }
      },
  
      decrement: (state, action: PayloadAction<Product>) => {
        const cartItem = state.cartItems.find(
          (el) => el.product.id === action.payload.id
        );
        if (cartItem) {
          cartItem.quantity--;
          if (cartItem.quantity === 0) {
            state.cartItems = state.cartItems.filter(
              (el) => el.product.id !== action.payload.id
            );
          }
        }
      },
    },
  });
  
  const cartItems = (state: RootState) =>
    state.cart.cartItems;
  
  export const productQtyInCartSelector = createSelector(
    [cartItems, (cartItems, productId: number) => productId],
    (cartItems, productId) =>
      cartItems.find((el) => el.product.id === productId)?.quantity
  );
  
  export const totalCartItemsSelector = createSelector(
    [cartItems],
    (cartItems) =>
      cartItems.reduce(
        (total: number, curr: CartItem) =>
          (total += curr.quantity),
        0
      )
  );
  export const TotalPriceSelector = createSelector(
    [cartItems],
    (cartItems) =>
      cartItems.reduce(
        (total: number, curr: CartItem) =>
          (total += curr.quantity * curr.product.price),
        0
      )
  );
  
  export const { increment, decrement } = cartSlice.actions;
  
  export default cartSlice.reducer;