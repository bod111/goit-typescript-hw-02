import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const MY_KEY = "6BxEsVza2Eh9Oqsvcz-IHR4oZXosMw5Mc6GelRXH53k";

export const getPhotosByQuery = async (query: string, page: number) => {
  const { data } = await axios.get(
    `search/photos?query=${query}&client_id=${MY_KEY}&page=${page}&orientation=landscape&per_page=12`
  );
  // console.log(data);
  return data;
};
