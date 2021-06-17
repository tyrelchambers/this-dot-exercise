import axios from "axios";

export const getProfileInfo = async (user) => {
  return axios
    .get(user.url, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
      },
    })
    .then((res) => res.data);
};
