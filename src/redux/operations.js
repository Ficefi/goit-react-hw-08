import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65da2e1bbcc50200fcdcb1fb.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contact/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/phonebook/Users");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteFromList = createAsyncThunk(
  "contact/deleteContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/phonebook/Users/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToList = createAsyncThunk(
  "contact/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(`/phonebook/Users/`, contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
