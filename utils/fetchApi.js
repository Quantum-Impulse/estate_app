import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

// headers: {
//   'x-rapidapi-host': 'bayut.p.rapidapi.com',
//   'x-rapidapi-key': '683e9b040amsh4ec79a0d9bb3d4dp157fb7jsn6d5018141f43'
// }

export const fetchApi = async (url) => {
  const {data} = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '683e9b040amsh4ec79a0d9bb3d4dp157fb7jsn6d5018141f43'
    }
  });
  
  return data;
}