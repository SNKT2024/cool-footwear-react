import { createSlice } from "@reduxjs/toolkit";
let initialState = [];
if (localStorage.getItem("cartproducts") != null) {
  initialState = JSON.parse(localStorage.getItem("cartproducts"));
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    storeAddToCart: (state, action) => {
      //state.value += action.payload;
      let found = false;
      state.forEach((product) => {
        if (product.id === action.payload.id) {
          found = true;
        }
      });
      if (!found) state.push(action.payload);

      localStorage.setItem("cartproducts", JSON.stringify(state));
    },

    storeRemoveProduct: (state, action) => {
      for (var i = 0; i < state.length; i++) {
        var product = state[i];
        if (product.id === action.payload) {
          state.splice(i, 1);
        }
      }
      //Call API
      localStorage.setItem("cartproducts", JSON.stringify(state));
    },
  },
});
export const { storeAddToCart, storeRemoveProduct } = cartSlice.actions;
export default cartSlice.reducer;
