import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFeather, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { getProfileInfo } from "../../api/getProfileInfo";

const GithubUser = ({ user }) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const fn = async () => {
      const userInfo = await getProfileInfo(user);
      setInfo(userInfo);
    };
    fn();
  }, []);

  return (
    <div className="flex flex-col overflow-hidden items-center p-4 rounded-md  shadow-md query-result relative bg-white">
      <div className="query-result-bg"></div>
      <div className="flex flex-col z-10 items-center">
        <img
          src={user.avatar_url}
          alt="User"
          className="w-16 h-16 rounded-md  query-result-avatar bg-white"
        />
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          <p className="font-bold text-blue-600 mt-2 underline">{user.login}</p>
        </a>
        {info.name && (
          <p className="font-bold text-gray-600 mt-2 ">{info.name}</p>
        )}

        <p className="text-center mt-2 text-gray-500">{info.bio}</p>

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

        <div className="flex mt-4 gap-3 flex-wrap justify-center">
          {info.twitter_username && (
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-blue-400 mr-2"
              />
              <a
                href={`https://twitter.com/${info.twitter_username}`}
                className="text-sm font-bold text-gray-600"
                title="Twitter Profile"
              >
                {info.twitter_username}
              </a>
            </div>
          )}

          {info.location && (
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-red-500 mr-2"
              />
              <p className="text-sm font-bold text-gray-600" title="Location">
                {info.location}
              </p>
            </div>
          )}
          {info.blog && (
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faFeather}
                className="text-green-500 mr-2"
              />
              <a
                href={`https://${info.blog}`}
                className="text-sm font-bold text-gray-600"
                title="Blog"
              >
                {info.blog}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GithubUser;
