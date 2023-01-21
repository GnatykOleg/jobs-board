import axios from "axios";

const { REACT_APP_BASE_URL, REACT_APP_BEARER_TOKEN } = process.env;

const instance = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${REACT_APP_BEARER_TOKEN}`,
  },
});

export const getJobsList = async () => {
  const { data } = await instance.get("/");
  return data;
};
