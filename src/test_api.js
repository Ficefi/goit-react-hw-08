import axios from "axios";

axios.defaults.baseURL = "https://65da2e1bbcc50200fcdcb1fb.mockapi.io";

export const fetchingAll = async () => {
  try {
    const response = await axios.get("/phonebook/Users");
    return response;
  } catch (error) {
    console.error(error);
  }
};
