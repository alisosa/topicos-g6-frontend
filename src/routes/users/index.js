import { baseUrl } from "@/constants"
import axios from "axios"

const fetchStudent = async (uid) => {
  const url = `${baseUrl.users}/student/${uid}`;
  return axios.get(url);
}

const createStudent = async (body, token) => {
  const url = `${baseUrl.users}/student`;
  return axios.post(url, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export { fetchStudent, createStudent }