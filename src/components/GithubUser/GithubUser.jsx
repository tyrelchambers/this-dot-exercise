import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";

const GithubUser = ({ user }) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    getProfileInfo();
  }, []);

  const getProfileInfo = async () => {
    axios
      .get(user.url, {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
        },
      })
      .then((res) => setInfo(res.data));
  };
  return (
    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col overflow-hidden items-center p-4 rounded-md  my-2 shadow-md query-result relative bg-white">
        <div className="query-result-bg"></div>
        <div className="flex flex-col z-10 items-center">
          <img
            src={user.avatar_url}
            alt="User"
            className="w-16 h-16 rounded-md  query-result-avatar"
          />
          <p className="font-bold text-blue-600 mt-2">{user.login}</p>
          <p className="text-center mt-2">{info.bio}</p>

          <div className="flex bg-blue-100 mt-4 px-4 py-1 rounded-lg">
            <div className="flex mr-4 text-sm">
              <span className="font-bold mr-2">Followers</span>
              {info.followers}
            </div>
            <div className="flex mr-4 text-sm">
              <span className="font-bold mr-2">Following</span>
              {info.following}
            </div>
          </div>

          <div className="flex mt-4 gap-6">
            {info.twitter_username && (
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-blue-400 mr-2"
                />
                <p className="text-sm font-bold text-gray-600">
                  {info.twitter_username}
                </p>
              </div>
            )}

            {info.location && (
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-red-500 mr-2"
                />
                <p className="text-sm font-bold text-gray-600">
                  {info.location}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};

export default GithubUser;
