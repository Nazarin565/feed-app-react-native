import axios from "axios";

const clientImages = axios.create({
  baseURL: "https://picsum.photos",
  headers: {
    "Cache-Control": "no-cache",
  },
});

export const getImageList = async (page: number) => {
  try {
    const response = await clientImages.get(`/v2/list?page=${page}&limit=10`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const clientUsers = axios.create({
  baseURL: "https://reqres.in",
  headers: {
    "Cache-Control": "no-cache",
  },
});

export const getUser = async (num: number) => {
  try {
    const response = await clientUsers.get(`/api/users/${num}`);

    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
