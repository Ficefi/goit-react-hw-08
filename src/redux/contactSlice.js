import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteFromList, addToList } from "./operations";

const handleLoading = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    items: [],
    isLoading: false,
    isError: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handleLoading)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(deleteFromList.pending, handleLoading)
      .addCase(deleteFromList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items = state.items.filter(
          (user) => user.id !== action.payload.id
        );
      })
      .addCase(deleteFromList.rejected, handleRejected)
      .addCase(addToList.pending, handleLoading)
      .addCase(addToList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items.push(action.payload);
      })
      .addCase(addToList.rejected, handleRejected);
  },
});

export const contactReducer = contactSlice.reducer;
