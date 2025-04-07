import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    // setOrder: (state, action) => {
    //   if (state.value.length == 0) {
    //     const current = [...state.value];
    //     current.push(action.payload);
    //     state.value = current;
    //   } else {
    //     let current = [...state.value];
    //     let finded = current.find(
    //       (item) => item.client == action.payload.client
    //     );
    //     if (finded) {
    //       finded.orders = action.payload.orders;
    //       state.value = current;
    //     } else {
    //       current.push(action.payload);
    //       state.value = current;
    //     }
    //   }
    // },

    // QISQARTIRILGANI

    setOrder: (state, action) => {
      const existing = state.value.find(
        (item) => item.client === action.payload.client
      );

      if (existing) {
        existing.orders = action.payload.orders;
      } else {
        state.value.push(action.payload);
      }
    },
    deleteOrder: (state, action) => {
      console.log("delete order");
      let c = [...state.value];
      let current_order = c.filter(
        (item) => item.client !== action.payload.client_id
      );
      state.value = current_order;
    },
  },
});

export const { setOrder, deleteOrder } = OrderSlice.actions;
export default OrderSlice.reducer;
