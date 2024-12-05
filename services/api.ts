import axios from "axios";

const client = axios.create({
  baseURL: "https://picsum.photos",
  headers: {
    "Cache-Control": "no-cache",
  },
});

export const getImageList = async (page: number) => {
  try {
    const response = await client.get(`/v2/list?page=${page}&limit=10`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
