import axios from "axios";

/* 
  Query github's api for users based on a query string and page number


  @param {string} q The GitHub query
  @param {number} page The current page to return from GitHub for pagination
  @return {array} The results of the query

*/

export const searchGithub = async (q, page = 1) => {
  return axios
    .get(`https://api.github.com/search/users?q=${q}&page=${page}`)
    .then((res) => res.data);
};
