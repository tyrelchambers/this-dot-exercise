import axios from "axios";

export const searchGithub = async (q, page = 1) => {
  return axios
    .get(`https://api.github.com/search/users?q=${q}&page=${page}`)
    .then((res) => res.data);
};
