import axios from "axios";

export async function getAllItems(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
}
export async function create(url, data) {
  try {
    const res = await axios.post(url, data);
    console.log(res);
  } catch (error) {
    console.log(error)
  }
}
