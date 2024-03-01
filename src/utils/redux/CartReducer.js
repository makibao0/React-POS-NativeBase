import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemId = action.payload.id;
      const itemInCartIndex = state.cart.findIndex(item => item.id === itemId);

      if (itemInCartIndex !== -1) {
        state.cart[itemInCartIndex] = {
          ...state.cart[itemInCartIndex],
          quantity: state.cart[itemInCartIndex].quantity + 1,
        };
      } else {
        state.cart.push({...action.payload, quantity: 1});
      }
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload.id;
      state.cart = state.cart.filter(item => item.id !== itemId);
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.cart.find(item => item.id === action.payload.id);
      itemInCart.quantity++;
    },
    decrementQuantity: (state, action) => {
      const itemId = action.payload.id;
      const itemInCart = state.cart.find(item => item.id === itemId);

      if (itemInCart) {
        if (itemInCart.quantity === 1) {
          state.cart = state.cart.filter(item => item.id !== itemId);
        } else {
          itemInCart.quantity--;
        }
      }
    },

    clearCart: state => {
      state.cart = [];
    },
  },
});
export const selectCartTotal = state =>
  state.cart.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

export const {
  clearCart,
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
