import axios from "axios";

/* 
  Call GitHub's api on a per user basis in order to grab an individual user's profile information.

  @param {object} user Uses the url property to make the GitHub request.
  @return {object} Returns the data object containing the user's information.
*/

export const getProfileInfo = async (user) => {
  return axios
    .get(user.url, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data);
};
