import React, { useEffect, useState } from "react";

const GithubUser = ({ user }) => {
  const [info, setInfo] = useState({});

  useEffect(() => {}, []);

  const getProfileInfo = () => {};
  return (
    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col overflow-hidden items-center p-4 rounded-md  my-2 shadow-md query-result relative">
        <div className="query-result-bg"></div>
        <div className="flex flex-col z-10 items-center">
          <img
            src={user.avatar_url}
            alt="User"
            className="w-16 h-16 rounded-md  query-result-avatar"
          />
          <p className="font-bold text-blue-600 mt-2">{user.login}</p>
        </div>
      </div>
    </a>
  );
};

export default GithubUser;
