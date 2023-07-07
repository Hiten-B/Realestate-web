import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'a41ed43b38mshf714f1bdfe9443ep148000jsn1fff5a285deb' ,
    },
  });
    
  return data;
}